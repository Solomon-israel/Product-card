import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex justify-center px-4 py-2">
      <div className="flex w-full border border-zinc-400 rounded overflow-hidden">
        <input
          type="text"
          className="outline-none w-full px-2 h-9"
          placeholder="search here"
        />
        <button className="w-10 flex justify-center items-center bg-zinc-800 text-white">
          <FaSearch className="" />
        </button>
      </div>
    </div>
  );
}
