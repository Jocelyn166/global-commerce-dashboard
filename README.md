🌍 Global Commerce Dashboard (POC)

A real-time, responsive React + TypeScript dashboard designed for office display screens. This dashboard auto-rotates between APAC, UK, and US regional data and refreshes every hour to display live commerce metrics.

---

## ✨ AI Prompts Used

These are the **exact** prompts used to build the POC:

- `Create a Vite React TypeScript CSS module project based on: User Story "As a King Living employee, I want to see the orders from our three separate commerce instances on one dashboard that I can view on the office display." Requirements: Build this using React - the rest of the technology choices are up to you. The three commerce instances represent our APAC, UK, and US operations. Since you won't have access to our actual systems, please use faker-js or create your own mock data to simulate these three separate commerce instances. The result should be a single unified dashboard that brings all the order data together in one view.`

- `for the order, I want to add in the category is: Sofas Living Dining Bedroom Outdoor Rugs Lighting, payment method is: Credit Card PayPal Zip now, pay later, for the status, add in cancelled, for each item, I want in the format of : Jasper Modular Sofa with Chaise 2860mm W | Package 13 Qty1 $4,424 Remove View Details BaxterBaxter GraniteSeat CushionMemory FoamTimber Veneer Shelf 1: 104cmNatural Oak - Light & Charge ShelfTimber Veneer Shelf 2: 78cmSmoked Oak - Light & Charge ShelfLegsStandard Black Fixed LegKingGuard® Fabric ProtectionYes, add KingGuard® Fabric Protection`

- `Use promise.all to fetch all the orders`

- `In my dashboard, because it will show in the office display, so I am thinking we should show 1. Global Overview(this month): Key metrics cards showing total orders, revenue, average order value, and pending orders across all regions 2.Regional Tabs: Switch between APAC, UK, and US regions to view specific data for each operation. including total order, revenue, top sales country, and add in a line chart showing order trends over time for each region using Chart.js.(from Jan to June). 3. Order Tables: Recent orders with customer details, locations, amounts, and status indicators for each region. Since it's a dashboard, please make sure it has a professional design, a Clean, modern interface with proper spacing, colours, and a responsive layout that works on all devices.`

- `Would you like me to generate the entire project as a ZIP file with this professional dashboard (including Chart.js integration and responsive UI) so you can run it instantly? - Yes`

- `The main component is ready, now adjust the styles. I went to Canva AI, typed in I have to create an e-commerce dashboard to show info about orders from three commerce instances representing our APAC, UK, and US operations. Then get a design. 1. Then paste the dashboard header to ChatGPT say I want the same style. 2. I want my global metrics to have the same styles as. 3. Very good, now I want my regional tabs followers to have the same styles as…. 4. Very good, now I want my recent orders to have the same styles as…. 5. Responsive in different screen sizes. 6. I want to reorganise my code structure, inside main, should have metriccards, regionOverviewWrapper, regionOrders. 7. The header does not fully take up all the page width.`

- `Good, now styles all done, now I want the data to make more sense, instead of top country, I want to show top sales category`

- `Now, because it will show in the office display, instead of manually clicking each region, it shows the corresponding region. Can it show different regions automatically without clicking the button - Auto-Switch Regions`

- `For the refresh data button, I am thinking it's for office display, maybe automatically refresh every hour. When refreshing data, I want the button to be disabled.`

- `When refreshing, instead of showing loading, I want to show a spinner in the centre of the content`

- `For my ordertrendchart, only when my mouse hovers will it show data; if for office display, it can automatically show data without mouse movement`, tried some approaches, not working as expected.

- `Add error handling when fetching data goes wrong`

- `i am thinking reorganise my components, so all of them can fit in one small shorter screen, now i want breakpoint, when screen size is <768, regions display column, gird and orders take up 100%, or i don't say 768, it auto detect if grid and orders overlap, then display column`
  
---

## 🧠 Technical Design & Reasoning

This project was designed with the following goals in mind:

- **Optimised for Office Displays:**
  - Auto-refreshes every hour.
  - Automatically cycles through regions every 5 seconds.
  - Prioritises visual clarity over interaction.
    
- **High-Level Metrics First:**
  - Displays **Total Orders**, **Total Revenue**, **Average Order Value**, and **Pending Orders** as top metrics across all regions.
  - Metrics are updated every hour automatically.
  - Manual refresh is also available, with a visual loading state and timestamp.
    
- **Per-Region Overview:**
  - Automatically rotates through **APAC**, **UK**, **US** every 5 seconds.
  - For each region, displays:
    **Orders Over Last 6 Months (trend line chart)**
    **Total Orders**
    **Total Revenue**
    **Top Sale Category**
    
- **Responsive UI:**
  - Uses Flexbox with media queries to adapt layout.
  - On smaller screens, sections stack vertically to prevent overlap.

- **Componentization:**
  - Each UI element (cards, charts, tabs, tables) is modular for clarity and reuse.
  - file structure
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
    
- **Error Handling:**
  - Display a friendly error banner when data fails to load.
  - 
- **Auto-Refresh with `Promise.all`**
  - The app fetches all regional data simultaneously using `Promise.all`. This ensures faster and efficient data fetching across multiple regions.


---

## 🚀 Setup & Run Instructions

### 📦 Prerequisites

- **Node.js** ≥ `v20.10.0`
- **npm** ≥ `10.4.0`

Clone the repo:

```bash
git clone https://github.com/Jocelyn166/global-commerce-dashboard.git
cd global-commerce-dashboard

---
## 📋 Assumptions Made

- Data is mock-generated and simulates real-time backend calls.
- The display is primarily for internal teams on a monitor (read-only) — so auto-rotation and auto-refresh are key.
- No authentication, no user input.


---


## 🤖 Reflection on AI Usage

### ✅ How AI Helped

- **Accelerated Layout & Component Design**
  - Generated reusable components (`StatCard`, `RegionTabs`, etc.).
  - Suggested consistent file/folder structure and naming conventions.

- **Logic Handling**
  - Implemented:
    - Auto-refresh logic using `setInterval`.
    - Disabled the refresh button during loading.
    - Region auto-rotation using time intervals.
  - Assisted in responsive layout techniques using CSS Modules.

- **Layout Troubleshooting**
  - Reduced time spent debugging Flexbox and layout overlaps.
  - Suggested optimal breakpoints and `flex-grow`, `min-width` patterns.

- **Boosted Productivity**
  - Suggested realistic mock data.
  - Eliminated much of the boilerplate work in React and TypeScript.

### ⚠️ Where Human Intervention Was Needed

- **Manual Tuning**
  - Adjusted chart spacing, padding, and tooltip visibility for office display.
  - Tweaked responsiveness and layout edge cases manually.
  - Fixed minor TypeScript issues, e.g., union type mismatch on region strings.

- **Custom Design Alignment**
  - Used **Canva AI** to generate an initial dashboard design concept.
  - Guided ChatGPT to replicate and adapt that style for web UI.
  - Clarified business context (e.g., “display in office screen” → prioritise key metrics).

- **Final Polish**
  - Manually handled final testing for:
    - Error handling and message display.
    - Fallbacks for no data scenarios.
    - Chart display on hover vs always-on.

### 💡 Summary

> **AI contributed approximately 70–80% of the initial development effort.**

It was especially useful for generating boilerplate code, Flexbox layouts, state management logic, and responsive CSS structures. Manual refinement was focused on design polish, chart behaviour, and custom business logic.

---


