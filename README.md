# vue - for ECV 面試題目
## Vue - version 3.0.0
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

---
資料結構 <br/>
|---dist              // 打包後的項目<br/>
|---public            // 靜態文件資料夾<br/>
|---src               // 來源資料夾 <br/>
|---|---assets        // 會被編譯的文件目錄<br/>
|---|---components    // 有用到的組件<br/>
|---|---layout        // 公用套版<br/>
|---App.vue           // 初始 Vue<br/>
|---main.js           // 檔案進入點<br/>
|---vue.config.js     // Vue 組態設定檔案<br/>
|---.eslintrc.js      // ESLint 設定檔<br/>
|---.babel.config.js  // babel 設定檔<br/>

---
用到的套件說明: 
#### Axios: 透過 Axios 來做撈取 API 的部分
## Target 4:
(Optional) Use Vue to implement form validation. Make sure each textbox meet its requirement, otherwise show error message in Red under it.
#### 使用 vee-validate + Yup
由於 vee-validate 是目前 Vue 框架最多人使用的驗證套件，由於 vee-validate 隨著 Vue 3更新到 v4 版本故要載入 Yup，因為此套件已經算是開發相較成熟，許多功能可直接使用並且 doc 文件也很簡易明確，也可透過自己來客制化 Regex 條件

## Target 5:
(Optional) Use one of the frontend tools to manage static files. For example, use Webpack or Bower to manage bootstrap and jQuery. Describe what tool you use and how you setup:

jQuery,Bootstrap等等相關套件。
透過舊有套件給的版本號，由 npm 載入套件版本，並透過 package.json 來管理套件版本，並透過 Vue 的 Webpack 來將套件打包並且編譯。

