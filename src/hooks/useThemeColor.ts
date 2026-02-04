"use client";

import { useEffect } from "react";

export const useThemeColor = (color: string) => {
  useEffect(() => {
    // ブラウザ環境でない、または色が空の場合は何もしない
    if (typeof window === "undefined" || !color) return;

    try {
      // 1. Bodyの背景色を変更
      document.body.style.backgroundColor = color;

      // 2. ブラウザのテーマカラーを変更（既存のmetaタグを削除して再作成）
      const existingMeta = document.querySelector("meta[name='theme-color']");
      if (existingMeta) {
        existingMeta.remove();
      }

      const metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      metaThemeColor.setAttribute("content", color);
      document.head.appendChild(metaThemeColor);
    } catch (e) {
      console.error("Theme color update failed:", e);
    }
  }, [color]);
};
