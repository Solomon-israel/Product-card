import React from "react";

export default function ProductCard({ p }) {
  return (
    <div className="shadow-lg rounded-3xl p-4 ">
      <div className="w-full h-60  mb-4">
        <img
          src={p.image}
          alt="item"
          className="w-full h-full object-cover object-fit-center rounded-2xl"
        />
      </div>
      <>
        <div className="flex justify-between px-2">
          <span className="text-sm font-bold">{p.title}</span>
          <span className="font-bold">${p.price}</span>
        </div>
        <div className="flex justify-between mb-4 px-2">
          <span>Nike Air Monarch IV</span>
          <span className="text-green-600">40% off</span>
        </div>

        <div className="flex justify-between pt-1">
          <button className="bg-blue-400 text-white rounded-2xl py-0.5 px-4">
            Add to cart
          </button>
          <button className="bg-zinc-100 rounded-2xl py-1 px-4">
            Book now
          </button>
        </div>
      </>
    </div>
  );
}
