import {React, useState} from 'react';

function SearchBar() {
    const [search, setSearch] = useState('');

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    return(
        <div>
            <input type="search" placeholder="Search" className="search" onChange={handleSearchChange} value={search} />
        </div>
    )
}

// after the cards for restaurants are built check status for template of search results
export default SearchBar