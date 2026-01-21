"use client";

import { useEffect } from "react";

export const useThemeColor = (color: string) => {
  useEffect(() => {
    // ブラウザ環境でない、または色が空の場合は何もしない
    if (typeof window === "undefined" || !color) return;

    try {
      // 1. Bodyの背景色を変更
      document.body.style.backgroundColor = color;

      // 2. ブラウザのテーマカラーを変更
      let metaThemeColor = document.querySelector("meta[name='theme-color']");
      
      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
      }

      metaThemeColor.setAttribute("content", color);
    } catch (e) {
      console.error("Theme color update failed:", e);
    }
  }, [color]);
};
