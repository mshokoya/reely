import React from "react";

export const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="mb-5">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};