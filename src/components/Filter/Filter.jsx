import React from 'react';
//import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterActions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };
  return (
    <StyledLabel style={{ color: 'black' }}>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"
        placeholder="Search by name"
        onChange={handleChange}
      />
    </StyledLabel>
  );
};

const StyledInput = styled.input`
  border: 0;
  font-size: 17px;
  height: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin-top: 5px;
  &::placeholder {
    color: #bf4f74;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;
