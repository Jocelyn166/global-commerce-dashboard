# 🌍 Global Commerce Dashboard (POC)

A real-time, responsive React + TypeScript dashboard designed for office display screens. This dashboard auto-rotates between APAC, UK, and US regional data and refreshes every hour to display live commerce metrics.

---

## ✨ AI Prompts Used

These are the **exact** prompts used to build the POC:

- `Create a Vite React TypeScript CSS module project based on: User Story "As a King Living employee, I want to see the orders from our three separate commerce instances on one dashboard that I can view on the office display." ...`
- `for the order, I want to add in the category is: Sofas Living Dining Bedroom Outdoor Rugs Lighting...`
- `Use promise.all to fetch all the orders`
- `In my dashboard, because it will show in the office display, so I am thinking we should show...`
- `Would you like me to generate the entire project as a ZIP file with this professional dashboard...`
- `The main component is ready, now adjust the styles...`
- `Good, now styles all done, now I want the data to make more sense...`
- `Now, because it will show in the office display, instead of manually clicking each region...`
- `For the refresh data button, I am thinking it's for office display, maybe automatically refresh every hour...`
- `When refreshing, instead of showing loading, I want to show a spinner...`
- `For my ordertrendchart, only when my mouse hovers will it show data...`
- `Add error handling when fetching data goes wrong`
- `i am thinking reorganise my components, so all of them can fit in one small shorter screen...`

---

## 🧠 Technical Design & Reasoning

- **Optimised for Office Displays:**
  - Auto-refreshes every hour.
  - Automatically cycles through regions every 5 seconds.
  - Prioritises visual clarity over interaction.

- **High-Level Metrics First:**
  - Displays **Total Orders**, **Total Revenue**, **Average Order Value**, and **Pending Orders**.
  - Metrics are updated every hour automatically.
  - Manual refresh available with visual loading state.

- **Per-Region Overview:**
  - Automatically rotates through **APAC**, **UK**, **US** every 5 seconds.
  - Displays:
	- Orders Over Last 6 Months (trend line chart)
	- Total Orders
	- Total Revenue
	- Top Sale Category

- **Responsive UI:**
  - Uses Flexbox and media queries.
  - Sections stack vertically on smaller screens.

- **Componentization:**
  - Each UI element (cards, charts, tabs, tables) is modular for clarity and reuse.
  - File structure:
	```plaintext
	src/
	├── components/
	│   ├── HeaderBar/
	│   ├── MetricCards/
	│   ├── OrderTable/
	│   ├── OrderTrendChart/
	│   ├── RegionTabs/
	│   └── StatCard/
	├── data/
	│   └── mockOrders.ts
	├── pages/
	│   └── Dashboard/
	├── App.tsx
	├── main.tsx
	├── index.css
	```

- **Error Handling:**
  - Friendly error banner when data fails to load.

- **Auto-Refresh with `Promise.all`:**
  - Simultaneously fetches regional data efficiently.

---

## 🚀 Setup & Run Instructions

### 📦 Prerequisites

- Node.js ≥ `v20.10.0`
- npm ≥ `10.4.0`

### 🛠️ Install & Run

```bash
git clone https://github.com/Jocelyn166/global-commerce-dashboard.git
cd global-commerce-dashboard
npm install
npm run dev
```

---

## 📋 Assumptions Made

- Mock-generated data simulates real backend calls.
- Displayed on office monitors — prioritizes auto-rotation and read-only view.
- No authentication or user interaction needed.

---

## 🤖 Reflection on AI Usage

### ✅ How AI Helped

- Generated reusable components.
- Structured file/folder layout.
- Assisted with:
  - Auto-refresh and region-switching logic
  - Responsive CSS module layout
  - Mock data creation

### ⚠️ Where Human Input Was Needed

- Adjusting chart UI/padding
- Fixing TypeScript edge cases
- Fine-tuning mobile responsiveness
- Manual test and layout adjustments

> **AI contributed ~70–80% of the initial build effort.**

