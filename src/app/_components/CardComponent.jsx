"use client";

import React, { useState } from "react";
import ViewButton from "./ViewComponent";
import ItemModal from "./ItemModal";

export default function CardComponent({
  items,
  favoriteTopics,
  setFavoriteTopics,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {items.map((item) => {
        return (
          <div
            className="w-[280px] px-[20px] py-[20px] bg-white rounded-[15px] border-gray-300 border hover:shadow"
            key={item.id}
          >
            <div className="grid grid-cols-1 gap-[5px]">
              <div className="flex items-center gap-[5px]">
                <p className="text-[20px]">{item.icon}</p>
                <div className="bg-gray-200 flex items-center text-[10px] h-5 font-bold rounded-[15px] px-[10px]">
                  <p className="">{item.category}</p>
                </div>
              </div>
              <div className="h-[60px]">
                <p className="text-[15px] font-bold">{item.title}</p>
                <p className="text-[12px] font-light text-gray-500">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-[10px] mt-5">
                <ViewButton
                  item={item}
                  setOpen={setOpen}
                  favoriteTopics={favoriteTopics}
                  setFavoriteTopics={setFavoriteTopics}
                />
              </div>
            </div>
            {open && (
              <ItemModal
                item={item}
                favoriteTopics={favoriteTopics}
                setFavoriteTopics={setFavoriteTopics}
                setOpen={setOpen}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
