import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-bold whitespace-nowrap">{title}</h1>
      <div className="h-px bg-gradient-to-r from-[#233554] to-transparent w-[50%]" />
    </div>
  );
};

export default Title;
