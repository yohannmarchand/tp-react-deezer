import {useState} from "react";

function SearchBar({ value, onChange }) {

  return (
    <div className="flex mb-8 w-full border border-zinc-900 rounded">
      <span className="py-2 px-3 bg-zinc-900">🔎</span>
      <input
        type="text"
        className="p-2 flex-grow focus:border-0"
        placeholder=" Search your favorite song"
        value={value}
        onChange={onChange}
      />
    </div>

  )
}

export default SearchBar