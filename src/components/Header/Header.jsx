import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header className="sticky top-0 bg-white w-full p-4 shadow-md flex items-center justify-between mb-4">
      <h1 className="">Logo</h1>

      <button
        className="flex gap-1 flex-col"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <span className="w-6 bg-black block h-0.5"></span>
        <span className="w-6 bg-black block h-0.5"></span>
        <span className="w-6 bg-black block h-0.5"></span>
      </button>

      {/* SIDEBAR */}
      <Sidebar open={openSidebar} closeFn={setOpenSidebar} />
    </header>
  );
}
