import React, { useState, useTransition } from 'react'

// import { useLocation } from './LocationContext.client'
import Spinner from './Spinner'

export default function SearchField() {
  const [text, setText] = useState('')
  const [isSearching, startSearching] = useTransition({ timeoutMs: 200 })
  // const [, setLocation] = useLocation()
  return (
    <form className="search" role="search" onSubmit={e => e.preventDefault()}>
      <label className="offscreen" htmlFor="sidebar-search-input">
        Search for a note by title
      </label>
      <input
        id="sidebar-search-input"
        placeholder="Search"
        value={text}
        onChange={e => {
          const newText = e.target.value
          setText(newText)
          startSearching(() => {
            // setLocation(loc => ({
            //   ...loc,
            //   searchText: newText,
            // }))
          })
        }}
      />
      <Spinner active={isSearching} />
    </form>
  )
}
