import React, { Component } from 'react';
import './SearchBox.scss'

const SearchBox = (props) => {
    const { onSearchChange, placeholder } = props;
    return (
        <input
            type="search"
            onChange={onSearchChange}
            placeholder={placeholder}
        />
    )
}

export default SearchBox;