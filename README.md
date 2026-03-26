# 🌐 Solid Native Official Website

> "The fastest framework deserves the fastest website."

這是 **Solid Native** 框架的官方入口網站。本網站完全採用 Solid.js 與 Vite 構建，旨在向開發者展示如何利用細粒度響應式技術打造**秒開、流暢且具備原生感的 Web 體驗**。

## 🚀 技術規格 (The "Speed" Stack)

為了符合 Solid Native 的品牌形象，官網採用了以下技術棧以達成 Lighthouse 四項滿分：

- **Framework**: Solid.js（渲染效能的極限）
- **Styling**: UnoCSS（按需生成的極簡 CSS）
- **Animations**: Motion One（硬體加速的 Web Animations API）
- **Package Manager**: pnpm（快速且節省空間）
- **Deployment**: Vercel / Cloudflare Pages（Edge Runtime 加速）

## ✨ 網站亮點 (Site Features)

- ⚡️ **極致載入**：無 Virtual DOM 負擔，全站 JS 體積控制在極小範圍。
- 📱 **行動端模擬器**：內置互動式組件預覽，直接在網頁感受 Solid Native 的 UI 組件流暢度。
- 📊 **效能對照表**：實時對比 Solid Native 與 React Native / Flutter 的 Bundle Size 與啟動速度數據。
- 🦀 **Rust-Integration Showcase**：展示如何透過 Rust 後端處理複雜運算並反饋至 UI。

## 🛠 本地開發 (Development)

1. 複製專案
   ```bash
   git clone https://github.com
   cd solid-native-site
   ```
2. 安裝依賴
   ```bash
   pnpm install
   ```

4. 啟動開發伺服器
   ```Bash
   pnpm dev
   ```

## 📁 目錄結構 (Project Structure)
```
text/src/components     # 包含高性能的 UI 元件（如 Benchmark 圖表）
/src/pages          # 官網各分頁（Home, Docs, Showcase）
/src/assets         # 最佳化後的向量圖形與字體
/public             # 靜態資源與 PWA 配置文件
```

## 🎯 商業化目標 (Commercial Goals)
本網站不僅是文檔中心，也是 Solid Native 商業生態的入口：

* Premium UI Kit：銷售針對 iOS/Android 高度優化的付費組件包。
* Cloud Build：推廣一鍵自動化編譯服務（EAS-like）。
* Sponsorship：開放贊助通道以維持開源開發。

## 🤝 貢獻代碼
如果你發現官網有任何效能瓶頸（哪怕是 1ms 的延遲），請務必提交 PR！

**格式化說明：**
- 使用 Markdown 標題層級（#、##、###）
- 將重點內容加粗或使用 > 引用
- 程式碼區塊使用正確的 ```bash
- 目錄結構使用程式碼區塊呈現，更清晰易讀
- 列表使用標準 Markdown 清單格式

---

## 📄 許可證

MIT © Solid Native Team

---

這樣閱讀起來更整潔專業！
