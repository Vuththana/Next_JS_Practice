"use client";
import React, { useEffect, useState } from "react";
import FavoriteButton from "./FavoriteButtonComponent";
import { topics } from "../lib/data";
import CardComponent from "./CardComponent";
import SearchTopic from "./SearchbarComponent";

export default function ItemComponent() {
  const [input, setInput] = useState("");
  const [items, setItem] = useState(topics);
  const [favoriteTopics, setFavoriteTopics] = useState([]);
  const [showFavoriteTopics, setShowFavoriteTopics] = useState(false);

  const displayData = items
    .filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
    .filter((item) =>
      showFavoriteTopics ? favoriteTopics.includes(item.id) : true
    );

  return (
    <div className="max-w-4xl mx-auto mt-[20px]">
      <SearchTopic setInput={setInput} />
      <FavoriteButton
        showFavoriteTopics={showFavoriteTopics}
        setShowFavoriteTopics={setShowFavoriteTopics}
        favoriteTopics={favoriteTopics}
      />
      {showFavoriteTopics && favoriteTopics.length == 0 && <p className="mt-[30px]">No Favorite Topic :(</p>}
      <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
        <CardComponent
          items={displayData}
          favoriteTopics={favoriteTopics}
          setFavoriteTopics={setFavoriteTopics}
        />
      </div>
    </div>
  );
}
