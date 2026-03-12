import { Eye, Heart } from "lucide-react";
import React from "react";

export default function ViewComponent({
  item,
  favoriteTopics,
  setFavoriteTopics,
  setOpen,
}) {
  const toggleTopics = (itemId) => {
    setFavoriteTopics((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );

    console.log(favoriteTopics);
  };
  return (
    <>
      <button
        className={`px-[5px] py-[3px] ${
          !favoriteTopics.includes(item.id)
            ? "hover:bg-orange-400 cursor-pointer rounded-[10px] "
            : "text-orange-400 cursor-pointer"
        }`}
        onClick={() => toggleTopics(item.id)}
      >
        <Heart width={20} />
      </button>
      <button
        className="flex items-center gap-[5px] px-[15px] py-[3px] border-gray-300 border rounded-[10px]
      text-[12px] font-[600] hover:bg-orange-400 cursor-pointer"
      onClick={() => setOpen(true)}
      >
        <Eye width={12} /> View
      </button>
    </>
  );
}
