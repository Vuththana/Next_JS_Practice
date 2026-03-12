"use client";

import React from "react";

export default function SearchbarComponent({ setInput }) {
  return (
    <input
      type="text"
      className="w-full border-2 border-gray-300 rounded-[10px] px-[10px] py-[5px] text-[12px] mb-[10px]"
      placeholder="Search topics..."
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
