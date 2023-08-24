import React from "react";

const SearchBar=({searchfield, searchChange})=>{
    return(
        <div>
            <input type='Search'
            placeholder="search" 
            onChange={searchChange}/>
        </div>
    );
}
export default SearchBar;