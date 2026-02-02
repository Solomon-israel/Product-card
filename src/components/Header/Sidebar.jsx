import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function Sidebar({ open, closeFn }) {
  return (
    <aside
      className={`fixed bg-white shadow-md top-0 left-0 w-full bottom-0 p-6 duration-500 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <span>Logo</span>
          <a href="null">Home</a>
          <a href="null">Products</a>
        </div>
        <RxCross1 onClick={() => closeFn(false)} className="text-2xl" />
      </div>
    </aside>
  );
}
