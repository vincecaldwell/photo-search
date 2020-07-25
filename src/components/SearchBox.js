//jshint esversion:6
import React, {useState} from 'react';


function SearchBox() {

    const [inputText, setInputText] = useState("");
    const [searchText, setSearchText] = useState("");

    function searchChange (event) {
        const text= event.target.value;
        setInputText(text);
        //console.log(searchText);
    }

    function submitSearch () {
        setSearchText(inputText);
        console.log(searchText);
    }

  return (
    <div className='pa2 sticky'>
        <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            value={inputText}
            placeholder='search photos'
            onChange={searchChange}
        />
        <button onClick={submitSearch}>Search</button>
    </div>
  );
}

export default SearchBox;

// const SearchBox = ({ searchfield, searchChange}) => {