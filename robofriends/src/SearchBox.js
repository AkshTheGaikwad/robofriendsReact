import React from 'react';

const SearchBox = ({searchfield ,SearchChange}) => {
    return (
        <input type ='search' className ='ba b--green tc bg-lightest-green ma2 pa3' placeholder ='Search Robots' onChange = { SearchChange } />);
}
export default SearchBox;
