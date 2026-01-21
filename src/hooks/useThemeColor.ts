"use client";

import { useEffect } from "react";

/**
 * bodyの背景色と、ブラウザのテーマカラー(アドレスバー等の色)を動的に変更するフック
 */
export const useThemeColor = (color: string) => {
  useEffect(() => {
    if (!color) return;

    // 1. Bodyの背景色を変更 (オーバースクロール時の色対策)
    document.body.style.backgroundColor = color;

    // 2. ブラウザのテーマカラーを変更 (ステータスバーの色対策)
    let metaThemeColor = document.querySelector("meta[name='theme-color']");
    
    // metaタグがなければ作成
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }

    // 色を設定
    metaThemeColor.setAttribute("content", color);

    // クリーンアップ（ページ移動時などにリセットしたい場合有効化）
    // 今回は次のページが上書きするので、そのままでOK
  }, [color]);
};
