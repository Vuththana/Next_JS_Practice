"use client";

import CardComponent from "./_components/ItemComponent";
import HeaderComponent from "./_components/HeaderComponent";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="border-b border-gray-300 py-[50px]">
        <HeaderComponent />
      </header>

      <main>
        <div>
          <CardComponent />
        </div>
      </main>
    </div>
  );
}
