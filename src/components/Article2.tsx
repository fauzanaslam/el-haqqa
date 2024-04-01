import React, { ReactNode, useState } from "react";

interface ArticleProps {
  children: ReactNode;
}

const Article2 = ({ children: items }: ArticleProps) => {
  const [curr, setCurr] = useState(0);

  // Check if items is null or undefined, and provide a default empty array if it is
  const itemsArray = items ? React.Children.toArray(items) : [];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? itemsArray.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === itemsArray.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div className="flex">{itemsArray}</div>
      <div className="w-100% items-center bg-red justify-center flex gap-5">
        <button className="bg-white" onClick={prev}>
          kiri
        </button>
        <button className="bg-white" onClick={next}>
          kanan
        </button>
      </div>
      <div className="mt-3 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {itemsArray.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article2;
