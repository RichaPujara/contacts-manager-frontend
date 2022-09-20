import React, { useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import './SearchBar.css'


const SearchBar = (props) => {

  return (
    <div className="searchbar">
      <div>
        <input type="text" placeholder="Search Contacts" className="search-input" value={props.value} onChange={props.onChange} />
        <SearchOutlined />
      </div>
    </div>
  )
}

export default SearchBar
