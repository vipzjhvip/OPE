# W-S 财富统计系统（V4）

一个基于 **Vite + React + React Router** 的财富任务统计系统，支持积分展示、任务系统、流水系统等业务模块。适配 **GitHub Pages / Vercel** 部署。

---

## 🚀 功能列表

### ✔ 首页（资产总览）
- 用户问候与信用分
- 总积分与今日收益
- 快捷操作（发布任务 / 积分兑换）
- 入口导航（支付宝流水、数据统计、团队等）
- 公告、任务卡片、动态流水卡片

### ✔ 任务页
- 今日任务进度（已完成/总数）
- 查看奖励积分
- 任务状态（未完成 / 已完成）
- 支持跳转、加载更多

### ✔ 流水页
- 新增流水动态
- 已认领 / 待认领流水
- 任务奖励事件
- 全部流水跳转

### ✔ 底部导航栏
- 首页
- 任务
- 流水

---

## 📦 技术栈

- **React 18**
- **React Router 6**
- **Vite 5**
- **ESModules**
- **可在 CodeSandbox / Vercel 直接运行**

---

## 🛠 本地运行

```bash
npm install
npm run dev
```

访问：
```
http://localhost:5173
```

---

## 🏗 构建

```bash
npm run build
```

输出目录：
```
dist/
```

---

## ☁ 部署到 Vercel

V4 版本已提供 `vercel.json`，支持一键部署。

---

## 📘 目录结构

```
W-S/
 ├─ src/
 │   ├─ index.html
 │   ├─ main.jsx
 │   ├─ App.jsx
 │   ├─ pages/
 │   ├─ components/
 │   └─ assets/
 ├─ vite.config.js
 ├─ package.json
 └─ vercel.json
```

---

## 🌐 License
MIT License

