import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsActions';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <StyledLi key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButton
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            REMOVE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledList>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
const StyledList = styled.ul`
  padding: 0;
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 5px;
  font-size: 25px;
`;
const StyledButton = styled.button`
  font-size: 13px;

  padding: 5px 10px;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: #bf4f74;

  &:hover {
    cursor: pointer;
  }
`;
