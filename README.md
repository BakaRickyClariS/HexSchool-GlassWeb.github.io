# HexSchool-GlassWeb 眼鏡電商網站

![GitHub](https://img.shields.io/badge/GitHub-HexSchool--GlassWeb-blue?style=flat-square&logo=github)
![JavaScript](https://img.shields.io/badge/JavaScript-98.7%25-yellow?style=flat-square&logo=javascript)
![HTML](https://img.shields.io/badge/HTML-1.3%25-orange?style=flat-square&logo=html5)

## 📖 專案概述

**HexSchool-GlassWeb** 是一個現代化的眼鏡電商網站前端專案，採用**原生 Web Components** 技術建構，實現了完整的單頁應用程式（SPA）功能。專案以 JavaScript 為主導（98.7%），展現了純原生技術的強大實作能力。

## 🚀 核心技術架構

### 🏗️ HTML 基礎架構
- **HTML5 標準** - 使用現代化的 HTML5 語法規範
- **響應式設計** - 透過 viewport meta 標籤支援多裝置適配
- **UTF-8 編碼** - 確保國際化字符正確顯示
- **SPA 架構** - 單一 `<div id="outlet"></div>` 作為動態渲染容器

### 🎨 樣式與設計系統
- **Tailwind CSS v4** - 採用最新版本的原子化 CSS 框架
- **Google Fonts** - 整合 Google 字體服務提升視覺效果
- **響應式圖片** - 多尺寸圖片資源支援不同裝置最佳化顯示
- **現代化 UI** - 簡潔美觀的使用者介面設計

### ⚡ JavaScript 核心技術

#### 模組化開發系統
```javascript
// ES6 模組化範例
import { SimpleRouter } from './components/Router.js';
import { Navbar } from './components/Navbar.js';
```

- **ES6 模組系統** - 使用 `import/export` 實現程式碼模組化
- **Web Components** - 原生 `customElements.define()` 創建自定義元素
- **類別繼承** - 所有組件繼承自 `HTMLElement` 基類

#### 🗺️ 路由系統
- **自製路由器** - 開發 `SimpleRouter` 類別處理 SPA 導航
- **Hash 路由** - 基於 `window.location.hash` 的客戶端路由
- **嵌套路由** - 支援多層級子路由功能
- **動態渲染** - 智能組件載入與切換機制

## 🧩 組件架構

### 核心系統組件
| 組件名稱 | 功能描述 | 特色 |
|---------|----------|------|
| `Navbar` | 導航列組件 | 響應式選單、路由導航 |
| `Footer` | 頁尾組件 | 聯絡資訊、社群媒體連結 |
| `Pagination` | 分頁組件 | 互動式頁碼、狀態管理 |
| `Router` | 路由管理 | SPA 導航、組件切換 |

### 業務頁面組件
- **🏠 Home** - 首頁展示（含 `HomeMain`、`HomeIntro`、`HomeClassic` 等子組件）
- **🛍️ Shop** - 商店頁面（`ShopOptical`、`ShopSunglasses`、`ShopFunctional`）
- **📍 Location** - 門市據點（Google Maps 整合）
- **📝 Blog** - 部落格系統（文章列表、詳細頁面）
- **❓ Problem** - 常見問題（FAQ 互動功能）

## 💾 資料管理與互動

### 狀態管理策略
- **組件內狀態** - 如分頁組件的 `currentPage` 狀態追蹤
- **事件系統** - `CustomEvent` 實現組件間解耦通訊
- **DOM 操作** - 現代化的 DOM 查詢與事件處理

### 動態內容渲染
```javascript
// 模板字符串範例
render() {
  return `
    <div class="container mx-auto px-4">
      ${this.items.map(item => `<div>${item.name}</div>`).join('')}
    </div>
  `;
}
```

- **模板字符串** - ES6 Template Literals 生成動態 HTML
- **陣列映射** - `Array.map()` 高效渲染列表內容
- **條件渲染** - 基於路由狀態的智能內容切換

## 🌐 外部服務整合

### 第三方服務
- **Google Maps** - 嵌入式地圖顯示門市位置
- **jsDelivr CDN** - 高效能的靜態資源載入
- **Google Fonts** - 豐富的字體資源庫

### 圖片資源管理
```
images/
├── home-header.png          # 首頁主視覺
├── product-*.png            # 商品展示圖
├── blog-*.png               # 部落格配圖
├── store-*.png              # 門市據點圖
└── icons/                   # SVG/PNG 圖示集
```

## ✨ 開發特色與優勢

### 🎯 技術亮點
- **純原生實現** - 無第三方框架依賴，展現原生技術實力
- **現代化語法** - 全面採用 ES6+ 新特性
- **組件化架構** - 高度模組化的開發模式
- **響應式設計** - 完美適配各種裝置尺寸

### 🏆 架構優勢
- **高效能** - 原生實現確保最佳載入速度
- **可維護性** - 清晰的組件分離與模組化設計
- **擴展性** - 靈活的路由系統支援功能擴展
- **標準化** - 遵循 Web Standards 最佳實踐

## 🛠️ 開發環境

### 技術需求
- **瀏覽器支援** - 現代瀏覽器（支援 ES6+ 與 Web Components）
- **開發工具** - 任何支援 ES6 模組的現代編輯器
- **部署平台** - 靜態網站託管服務（GitHub Pages、Netlify 等）

### 專案結構
```
HexSchool-GlassWeb/
├── index.html              # 主要 HTML 檔案
├── components/             # 組件目錄
│   ├── Router.js          # 路由管理
│   ├── Navbar.js          # 導航組件
│   └── ...                # 其他組件
├── images/                # 圖片資源
└── README.md              # 專案說明
```

## 🚀 快速開始

### 安裝與運行
```bash
# 克隆專案
git clone https://github.com/BakaRickyClariS/HexSchool-GlassWeb.github.io.git

# 進入專案目錄
cd HexSchool-GlassWeb.github.io

# 使用任何靜態伺服器運行（例如 Live Server）
# 或直接開啟 index.html 檔案
```

### 開發指南
1. 所有組件放置於 `components/` 目錄
2. 圖片資源統一管理於 `images/` 目錄
3. 新增頁面需要在 `Router.js` 中註冊路由
4. 遵循 Web Components 標準進行開發

## 📱 功能特色

### 主要功能
- ✅ 響應式設計適配所有裝置
- ✅ 單頁應用程式（SPA）流暢體驗
- ✅ 產品瀏覽與分類展示
- ✅ 門市據點地圖整合
- ✅ 部落格文章系統
- ✅ 常見問題 FAQ
- ✅ 現代化的使用者介面

### 技術特色
- ⚡ 純原生 JavaScript 實現
- 🎨 Tailwind CSS 原子化樣式
- 📱 完整響應式設計
- 🔧 模組化組件架構
- 🗺️ 自製路由系統

## 📞 聯絡資訊

- **開發者**: BakaRickyClariS
- **GitHub**: [BakaRickyClariS](https://github.com/BakaRickyClariS)
- **專案連結**: [HexSchool-GlassWeb](https://github.com/BakaRickyClariS/HexSchool-GlassWeb.github.io)

---

**🔗 相關連結**
- [專案 GitHub 倉庫](https://github.com/BakaRickyClariS/HexSchool-GlassWeb.github.io)
- [線上展示網站](https://bakariclyclaris.github.io/HexSchool-GlassWeb.github.io/)

---

<div align="center">
  <b>⭐ 如果這個專案對您有幫助，請給個星星支持一下！⭐</b>
</div>

