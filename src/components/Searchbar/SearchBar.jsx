import { useState } from "react";
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => setInputValue(event.target.value);
    
  const handleSubmit = event => {
    event.preventDefault();
    // onSubmit(this.state.inputValue);
    onSubmit(inputValue);
    this.setState.inputValue('');
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <SearchSpan>Search</SearchSpan>
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

