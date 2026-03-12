import { Heart, X } from "lucide-react";
import React from "react";

export default function ItemModal({
  item,
  favoriteTopics,
  setFavoriteTopics,
  setOpen,
}) {
  function toggleFavorite() {
    setFavoriteTopics((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id]
    );
  }
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-[15px] p-6 w-[500px] relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X width={15} />
        </button>
        <div className="flex items-center gap-4 mb-4">
          <p className="text-2xl">{item.icon}</p>
          <div>
            <p className="text-lg font-bold">{item.title}</p>
            <span className="inline-flex bg-gray-200 items-center text-[10px] h-5 font-bold rounded-[15px] px-[10px] mt-1">
              {item.category}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">{item.details}</p>

        <button
          onClick={toggleFavorite}
          className="w-full flex items-center gap-[3px] text-[12px] font-[600] cursor-pointer"
        >
          <Heart
            width={15}
            className={`stroke-current ${
              favoriteTopics.includes(item.id)
                ? "text-red-500"
                : "text-gray-500"
            }`}
          />
          {favoriteTopics.includes(item.id) ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
}
