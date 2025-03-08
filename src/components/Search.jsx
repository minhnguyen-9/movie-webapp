import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="/Public/search.svg" alt="search"/>

                <input
                    type="search"
                    placeholder="Search movie database"
                    value={searchTerm}
                    onChange{(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search
