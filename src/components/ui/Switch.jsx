import { useState } from "react";

export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
      />
      <span className={`w-10 h-5 flex items-center bg-gray-700 rounded-full p-1 ${checked ? "bg-green-500" : ""}`}>
        <span className={`w-4 h-4 bg-white rounded-full transition-transform ${checked ? "translate-x-5" : ""}`} />
      </span>
    </label>
  );
}
