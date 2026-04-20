# 💰 Personal Finance Calculators

A suite of three financial planning tools that run **100% locally in your browser**. No installation, no accounts, no cloud storage—your financial data never leaves your device.

---

## 🎯 Goals

This project provides simple, accurate, and private financial calculators for:
- **Budget planning** when you're paid bi-weekly but bills are monthly
- **Bonus allocation** to split windfalls into smart percentage-based buckets
- **Loan payoff planning** with accurate daily interest calculations

**Privacy first:** All calculations and data storage happen on your computer. No servers, no tracking, no uploads.

---

## 📊 What's Included

### 1. Budget Planner (`index.html`)
Converts bi-weekly paychecks into monthly budgets and tracks expenses across categories. Uses the accurate formula: `(Bi-weekly Pay × 26) ÷ 12` to reflect 26 paychecks per year.

### 2. Bonus Breakdown (`commission-breakdown.html`)
Splits bonuses or commission checks into percentage-based allocations (e.g., 40% to loans, 35% to savings, 25% to fun). Validates that percentages total 100%.

### 3. Loan Payoff Calculator (`loan-payoff.html`)
Calculates payoff dates for **any loan type** (student, auto, personal, mortgage, and more) using **daily interest accrual**. Compare avalanche vs. snowball strategies, test bonus payments, and export payment schedules to CSV.

---

## 🚀 How to Use

### Running Locally

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/Edperez0/personal-finance-calculators.git
   cd personal-finance-calculators
   ```

2. **Open the files in your browser**
   - Double-click `index.html` to start with the Budget Planner
   - Or open any of the three HTML files directly:
     - `index.html` - Budget Planner
     - `commission-breakdown.html` - Bonus Breakdown
     - `loan-payoff.html` - Loan Payoff Calculator

3. **Navigate between calculators**
   - Use the menu pills at the top to switch between tools
   - All data auto-saves to your browser's localStorage

**That's it!** No server needed, no build process, no dependencies to install.

---

## 💾 Data Storage

- **Where:** Your browser's localStorage (stored on your computer only)
- **Privacy:** Data never leaves your device
- **Persistence:** Saved until you clear your browser data
- **Offline:** Works completely offline after first load
- **Per-device:** Each browser stores data independently

**Backup:** Export payment schedules to CSV (Loan Payoff) or take screenshots of your budgets.

---

## ✨ Key Features

- **100% Local** - No servers, no accounts, no cloud storage
- **Auto-save** - Changes saved instantly to localStorage
- **Accurate Math** - Daily interest calculations for loans, proper bi-weekly conversions
- **Mobile Friendly** - Responsive design works on any device
- **Privacy Focused** - Your financial data stays on your device
- **Export Options** - Download CSV reports or print directly

---

## 🛠️ Technical Stack

- **Vanilla HTML/CSS/JavaScript** - No framework dependencies
- **Tailwind CSS** - Loaded from CDN for styling
- **Chart.js** - Visualization for loan payoff (Loan Payoff Calculator)
- **localStorage** - Client-side data persistence
- **Google Analytics** - Basic usage tracking (no personal data collected)

---

## 📁 Project Structure

```
personal-finance-calculators/
├── index.html                    # Budget Planner
├── commission-breakdown.html     # Bonus Calculator
├── loan-payoff.html              # Loan Payoff Calculator
├── assets/                       # Images and icons
└── README.md                     # This file
```

---

## 🌐 Live Demo

Visit the live site: [https://edperez0.github.io/personal-finance-calculators/](https://edperez0.github.io/personal-finance-calculators/)

Or run it locally following the instructions above.

---

## 📄 License

MIT License - Free to use, modify, and distribute.

---

## 💬 Contributing

Found a bug or have a feature idea? Open an issue or submit a pull request on [GitHub](https://github.com/Edperez0/personal-finance-calculators).

---

**Built for privacy-conscious financial planning** 🔒
