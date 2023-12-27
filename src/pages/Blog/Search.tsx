import React, { useState, useRef } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Search.css'

interface SearchProps {
  onSearch: (text: string, isSearchVisible: boolean) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('')
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (text: string) => {
    setSearchText(text)
  }
  const handleSearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchText, true)
    }
  }

  return (
    <div ref={searchRef}>
      <form className="srh__form" onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          placeholder="제목으로 검색"
          value={searchText}
          className="srh__input"
          onChange={e => handleSearch(e.target.value)}
          onKeyPress={handleSearchOnEnter}
          addonBefore={<SearchOutlined />}
        />
      </form>
    </div>
  )
}

export default Search
