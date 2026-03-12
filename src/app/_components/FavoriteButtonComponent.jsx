"use client";
import { Star } from "lucide-react";
import React from "react";

export default function FavoriteButtonComponent({
  showFavoriteTopics,
  setShowFavoriteTopics,
  favoriteTopics,
}) {
  return (
    <button
      className={` flex items-center gap-[5px] px-[15px] py-[3px] rounded-[10px] text-[12px] font-[600] cursor-pointer
        ${
          !showFavoriteTopics
            ? " border-gray-300 border"
            : "border-yellow-400 text-yellow-400 border"
        }`}
      onClick={() => setShowFavoriteTopics(!showFavoriteTopics)}
    >
      <Star width={15} /> Favorites ({favoriteTopics.length})
    </button>
  );
}
