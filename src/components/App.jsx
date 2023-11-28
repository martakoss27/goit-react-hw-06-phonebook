import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { styled } from 'styled-components';

export const App = () => {
  return (
    <StyledWrapper>
      <StyledDiv>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts list</h2>
        <Filter />
        <Contacts />
      </StyledDiv>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  font-size: 30px;
  padding: 10% 0 10% 0;
`;
const StyledDiv = styled.div`
  width: 720px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
