import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header className="p-4 shadow-md flex items-center justify-between mb-4">
        <h1 className="">Logo</h1>

        <button className="flex gap-1 flex-col">
          <span className="w-6 bg-black block h-0.5"></span>
          <span className="w-6 bg-black block h-0.5"></span>
          <span className="w-6 bg-black block h-0.5"></span>
        </button>

        {/* SIDEBAR */}
      </header>
      <div className="flex border gap-2 w-75 h-8">
        <FaSearch className="flex align-center" />
        <input type="text" className=" rounded" placeholder="search here" />
      </div>
    </div>
  );
}
