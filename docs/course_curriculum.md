# CodeTheMarket: Build Your Own AI-Powered Algo Trading Platform from Scratch
**Subtitle:** Zero Cost. Full Stack. Indian Markets + Crypto. From Basics to AWS Deployment.  
**Author:** Reev  
**Brand:** CodeTheMarket  
**Format:** Comprehensive Technical Course Manual & Reference Textbook  
**Target Audience:** Programmers, Quants, Active Traders, and Fintech Engineers  
**Price Point:** ₹499 – ₹999  

---

## Table of Contents

- [MODULE 0: Introduction & Prerequisites (Foundation)](#module-0-introduction--prerequisites-foundation)
- [MODULE 1: Trading & Market Basics (Theory)](#module-1-trading--market-basics-theory)
- [MODULE 2: Development Environment Setup](#module-2-development-environment-setup)
- [MODULE 3: Python Foundations (Quick Crash Course)](#module-3-python-foundations-quick-crash-course)
- [MODULE 4: Web Development with Flask](#module-4-web-development-with-flask)
- [MODULE 5: Frontend Development (HTML/CSS/JS & React 19)](#module-5-frontend-development-htmlcssjs--react-19)
- [MODULE 6: Broker API Integration — Dhan HQ](#module-6-broker-api-integration--dhan-hq)
- [MODULE 7: Broker API Integration — Delta Exchange (Crypto)](#module-7-broker-api-integration--delta-exchange-crypto)
- [MODULE 8: Building the Real-Time Scanner Engine](#module-8-building-the-real-time-scanner-engine)
- [MODULE 9: Telegram Bot Integration & Mobile Terminal](#module-9-telegram-bot-integration--mobile-terminal)
- [MODULE 10: Building the Trading Dashboard](#module-10-building-the-trading-dashboard)
- [MODULE 11: Database Design with SQLite](#module-11-database-design-with-sqlite)
- [MODULE 12: Historical Data & Single-Instrument Backtesting](#module-12-historical-data--single-instrument-backtesting)
- [MODULE 13: Hedging Strategies & Multi-Leg Backtesting](#module-13-hedging-strategies--multi-leg-backtesting)
- [MODULE 14: Crypto Derivatives Backtesting (Delta Exchange)](#module-14-crypto-derivatives-backtesting-delta-exchange)
- [MODULE 15: On-Demand Technical Stock Screener](#module-15-on-demand-technical-stock-screener)
- [MODULE 16: AI-Powered Market News & Sentiment (Google Gemini)](#module-16-ai-powered-market-news--sentiment-google-gemini)
- [MODULE 17: AWS Free-Tier Cloud Deployment](#module-17-aws-free-tier-cloud-deployment)
- [MODULE 18: Extending to Other Brokers (Zerodha, Fyers, Angel One, CoinDCX)](#module-18-extending-to-other-brokers)
- [MODULE 19: Advanced Topics & Institutional Horizons](#module-19-advanced-topics--institutional-horizons)
- [APPENDIX A: Complete API Routes Reference](#appendix-a-complete-api-routes-reference)
- [APPENDIX B: Environment Variables Reference](#appendix-b-environment-variables-reference)
- [APPENDIX C: Troubleshooting Guide](#appendix-c-troubleshooting-guide)
- [APPENDIX D: Quantitative & Technical Glossary](#appendix-d-quantitative--technical-glossary)

---

# MODULE 0: Introduction & Prerequisites (Foundation)

### Learning Objectives
1. Understand the philosophy of zero-cost, multi-asset quantitative trading engineering.
2. Review the live architecture and operational capabilities of the complete platform.
3. Complete the account setup checklist across cloud, broker, and AI infrastructure.
4. Internalize the legal, regulatory, and risk parameters governing algorithmic systems in India.

---

### 1. Welcome to CodeTheMarket
Welcome to **CodeTheMarket**. I am **Reev**, your instructor and fellow system architect. Over the past decade, financial trading has undergone a permanent structural transformation. Floor traders shouting in pits have been entirely replaced by low-latency server clusters, statistical arbitrage algorithms, and automated execution engines. 

Yet for independent retail traders and aspiring software engineers, the world of institutional algorithmic trading has remained intentionally gatekept behind expensive proprietary software subscriptions (₹3,000 to ₹10,000 per month), closed platforms, and fragmented educational tutorials that teach toy backtests without real broker order execution.

**This course dismantles that barrier.**

Together, we will build an enterprise-grade, multi-asset algorithmic trading web platform from the very first line of code to automated cloud production—**at ₹0 infrastructure cost**. You will master Python multi-threaded backend services, React 19 single-page trading terminals, broker OpenAPI implementations, automated options margin relief execution, 24/7 crypto perpetual futures automation, and LLM-driven market sentiment analysis.

> [!NOTE]
> **Video Reference:** *Module 0.1 — Welcome & System Tour by Reev (Duration: 18:45)*. Watch the video walkthrough to see the live system placing multi-leg credit spreads on Dhan and 10x leveraged bracket orders on Delta Exchange India.

---

### 2. What You Will Build: Platform Tour
By the conclusion of this course, you will own a production-grade algorithmic trading workstation equipped with 9 operational modules:

1. **Live Dashboard (`HomeTab`)**: Real-time account margin utilization, Dhan funds telemetry, consolidated open/closed trade stats, base brokerages, and GST tracking.
2. **Real-Time Indian Markets Scanner (`ScannerTab`)**: Concurrent background daemon continuously scanning 50+ instruments (NSE Nifty 50 stocks, NIFTY50, BANKNIFTY, SENSEX, and MCX Commodities: SILVERM, GOLDM, CRUDEOILM) using 5/15 Exponential Moving Average crossovers and 70-period Williams %R oscillators.
3. **Automated Credit Spread Execution Engine**: Automated dynamic strike selection for **Bull Put Spreads** (on bullish signals) and **Bear Call Spreads** (on bearish signals). Enforces sequential execution—buying the hedge leg first to secure 70%+ margin relief from the broker's Risk Management System (RMS) before selling the short leg.
4. **24/7 Cryptocurrency Futures Scanner (`CryptoScannerTab`)**: Automated perpetual futures scanner monitoring the top 28 liquid contracts on **Delta Exchange India** using HMAC SHA-256 signatures, 10x isolated leverage sizing, and native bracket orders.
5. **Two-Way Telegram Mobile Trading Terminal**: Instant trade alerts delivered to your phone with interactive inline buttons (`[ 🚀 Execute Live ]`, `[ 🚫 Ignore ]`, `[ ❌ Square Off ]`), allowing one-tap order placement without opening a desktop browser.
6. **Single-Instrument Backtester (`BacktestTab`)**: Historical strategy simulator modeling slippage (0.05%), dynamic trailing stop-losses, commission drag, win rates, and annualized Sharpe ratios over CSV candle series.
7. **Multi-Leg Options Hedging Simulator (`HedgingTab`)**: Synthetic option chain payoff calculator and expired options backtester supporting Straddles, Strangles, Iron Condors, Butterflies, and Batman ratio structures.
8. **On-Demand Technical Screener (`ScreenerTab`)**: Ad-hoc technical screener scanning the market universe instantly on demand without starting an infinite polling loop.
9. **AI Market Intelligence (`NewsTab`)**: Macroeconomic financial news aggregator synthesizing RSS feeds via Google Gemini 3.8 Flash to extract stock-specific catalysts and market sentiment.

> **Screenshot Placeholder:** *[Screenshot 0.1: Full panoramic overview of the CodeTheMarket React 19 dark-mode trading interface showing live scanner ticks and open credit spread P&L cards]*

---

### 3. Prerequisites Checklist
You do not need a degree in financial mathematics or prior trading experience. However, you must have:
- A computer running Windows, macOS, or Linux with at least 4GB of RAM.
- A stable broadband internet connection.
- Willingness to write clean code and learn real-world system debugging.

#### Free Accounts Checklist (Set up before Module 2)
1. **GitHub Account**: For version control and continuous deployment ([github.com](https://github.com)).
2. **AWS Account**: Eligible for the AWS Free Tier (12 months free EC2 `t2.micro` / `t3.micro`, 750 hours/month) ([aws.amazon.com](https://aws.amazon.com)).
3. **Dhan Trading Account**: Free trading account with zero AMC and free access to Dhan OpenAPI v2 ([dhan.co](https://dhan.co)).
4. **Delta Exchange India Account**: FIU-registered Indian cryptocurrency derivatives exchange ([india.delta.exchange](https://india.delta.exchange)).
5. **Telegram Account**: To configure BotFather and obtain your bot token.
6. **Google AI Studio Account**: For free-tier API keys accessing Google Gemini 1.5/2.5/3.8 Flash ([aistudio.google.com](https://aistudio.google.com)).

---

### 4. Course Roadmap Visual

```text
[PHASE 1: FOUNDATIONS]
Module 0: Setup & Architecture ──► Module 1: Market & F&O Mechanics ──► Module 2: Dev Environment ──► Module 3: Python & Pandas Crash Course
                                                                                                                   │
[PHASE 2: CORE PLATFORM]                                                                                          ▼
Module 4: Flask Backend Architecture ◄── Module 5: React 19 Frontend UI ◄── Module 6: Dhan HQ Broker API ◄─────────┘
        │
        ▼
Module 7: Delta Crypto API ──► Module 8: Real-Time Scanner Engine ──► Module 9: Telegram Mobile Bot
                                                                                  │
[PHASE 3: ADVANCED QUANT ENGINES]                                                 ▼
Module 10: Integrated Dashboard ◄── Module 11: SQLite Persistence ◄── Module 12: Historical Backtester
        │
        ▼
Module 13: Options Hedging Simulator ──► Module 14: Crypto Backtesting ──► Module 15: Technical Screener
                                                                                      │
[PHASE 4: AI & PRODUCTION DEPLOYMENT]                                                 ▼
Module 16: Google Gemini AI ──► Module 17: AWS Free-Tier Production ──► Module 18: Multi-Broker Adaptors ──► Module 19: Next Horizons
```

---

### 5. Regulatory & SEBI Legal Disclaimer

> [!CAUTION]
> **Mandatory Legal & Risk Disclosure:**  
> 1. **Educational Purpose Only:** This course, software repository, code samples, and documentation are designed exclusively for technical and educational purposes by author Reev under the educational brand CodeTheMarket.  
> 2. **Not Financial or Investment Advice:** The author is not a SEBI-registered Research Analyst, Portfolio Manager, or Investment Advisor. None of the strategies, code snippets, or indicator combinations discussed constitute financial advice, investment recommendations, or an offer to buy or sell securities.  
> 3. **Substantial Capital Risk:** Trading in financial derivatives (Futures and Options on NSE, BSE, MCX) and cryptocurrency perpetual futures carries an exceptionally high level of risk. You can lose your entire capital or face margin calls. As per SEBI studies, over 90% of individual retail traders in the equity F&O segment incur net financial losses.  
> 4. **Paper Trading First:** Always test your algorithms in simulated paper trading mode for at least 30 to 60 trading sessions before committing real monetary capital. Consult a certified financial planner before deploying live capital.

---

### Summary of Module 0
- You are embarking on a comprehensive, zero-cost engineering curriculum spanning Indian equity derivatives, commodities, and 24/7 crypto futures.
- The platform uses a Python Flask multi-threaded backend, React 19 frontend, SQLite storage, Dhan HQ OpenAPI, Delta Exchange, Telegram, and Google Gemini AI.
- You have verified your free accounts checklist and acknowledged the regulatory risk framework.

---

# MODULE 1: Trading & Market Basics (Theory)

### Learning Objectives
1. Understand the operational mechanics of Indian exchanges (NSE, BSE, MCX) and cryptocurrency derivatives.
2. Demystify the mathematics of Futures & Options: Strike prices, expiries, premiums, and Moneyness (ITM, ATM, OTM).
3. Master defined-risk credit spreads: Why we construct **Bull Put Spreads** for bullish signals and **Bear Call Spreads** for bearish signals.
4. Understand perpetual futures contracts, funding rates, and 10x isolated leverage.
5. Grasp the core tenets of quantitative risk management: Stop-Loss, Take-Profit, and capital allocation.

---

### 1. Market Topography: NSE, BSE, and MCX
In India, organized securities trading is concentrated across three primary exchanges:
- **National Stock Exchange (NSE)**: The dominant exchange for equities and derivatives. Its flagship benchmark is the **NIFTY 50** (index comprising 50 blue-chip companies). Derivatives are identified under the `NSE_FNO` segment.
- **Bombay Stock Exchange (BSE)**: The oldest stock exchange in Asia. Its benchmark index is the **SENSEX** (comprising 30 bellwether stocks). BSE equity derivatives operate under the `BSE_FNO` (or `BFO`) segment.
- **Multi Commodity Exchange (MCX)**: India's premier commodity derivatives marketplace (`MCX_COMM`). It facilitates futures and options on bullion (**GOLD**, **GOLDM**, **SILVER**, **SILVERM**) and energy (**CRUDEOIL**, **CRUDEOILM**, **NATURALGAS**).

---

### 2. Demystifying Derivatives: Futures & Options (F&O)
A **derivative** is a financial contract whose valuation is derived from an underlying asset (a stock like Reliance, an index like Nifty 50, or a commodity like Silver).

#### Call Options (CE — European Call)
A Call option grants the buyer the right (but not the obligation) to *buy* the underlying asset at a predetermined price (the **Strike Price**) on or before a specified date (the **Expiry Date**).
- Buyers of Calls expect the underlying price to rise aggressively.
- Sellers (writers) of Calls expect the price to remain flat or drop.

#### Put Options (PE — European Put)
A Put option grants the buyer the right (but not the obligation) to *sell* the underlying asset at a predetermined strike price on or before expiry.
- Buyers of Puts expect the underlying price to crash.
- Sellers (writers) of Puts expect the price to remain flat or rise.

#### Strike Moneyness
At any moment, option strikes are categorized relative to the underlying Spot Price ($S$):
- **In-The-Money (ITM)**: Has intrinsic value. For a Call, Strike < Spot ($K < S$). For a Put, Strike > Spot ($K > S$).
- **At-The-Money (ATM)**: Strike closest to current Spot ($K \approx S$).
- **Out-of-The-Money (OTM)**: Has zero intrinsic value, composed entirely of extrinsic (time) value. For a Call, $K > S$. For a Put, $K < S$.

> **Screenshot Placeholder:** *[Screenshot 1.1: Dhan Option Chain display showing Calls on the left, Puts on the right, highlighting ATM yellow strike and OTM strikes]*

---

### 3. Credit Spreads: Why We Never Trade Naked Options
Retail algo traders frequently make the fatal mistake of buying naked OTM options. Because options suffer from daily **Theta Decay** (time decay erosion), naked option buyers lose money more than 70% of the time even when their directional bias is moderately correct.

Conversely, selling naked options carries *unlimited tail risk*. If the market gaps up or down 5% overnight due to geopolitical shocks, a naked seller's account can be completely wiped out.

**Our Institutional Solution: Defined-Risk Credit Spreads.**

#### Strategy 1: The Bull Put Spread (Constructed on BUY Signals)
When our scanner detects a bullish momentum signal on Nifty (Spot = 24,840):
1. **Leg 1 (Short Put)**: We SELL an OTM Put strike near spot (e.g., Strike 24,800 PE) and receive a premium of **₹95.50**.
2. **Leg 2 (Long Put Hedge)**: We simultaneously BUY a further OTM Put strike (e.g., Strike 24,600 PE) and pay a premium of **₹35.20**.

$$\text{Net Credit Received} = 95.50 - 35.20 = 60.30 \text{ points}$$

- **Max Profit**: 60.30 points (₹1,507.50 per lot of 25) earned if Nifty stays above 24,800 at expiry. Both options expire worthless; we keep the credit.
- **Max Loss**: $\text{Strike Width} - \text{Net Credit} = (24800 - 24600) - 60.30 = 200 - 60.30 = 139.70 \text{ points}$.
- **Risk Profile**: Strictly capped. No black swan event can lose more than 139.70 points.

```text
Payoff Diagram: Bull Put Spread
Profit ▲
+60.30 ├─── Max Profit ─────────────────────────────► (Nifty > 24,800)
       │                              /
       │                             / Break-even: 24,739.70
   0.0 ┼────────────────────────────/──────────────
       │                           /
       │                          /
-139.70├─── Max Loss ────────────┘ (Nifty < 24,600)
Loss   ▼
```

#### Strategy 2: The Bear Call Spread (Constructed on SELL Signals)
When our scanner detects a bearish breakdown signal:
1. **Leg 1 (Short Call)**: We SELL an OTM Call strike near spot (e.g., Strike 24,900 CE) and receive **₹80.00**.
2. **Leg 2 (Long Call Hedge)**: We BUY a higher OTM Call strike (e.g., Strike 25,100 CE) and pay **₹25.00**.

$$\text{Net Credit Received} = 80.00 - 25.00 = 55.00 \text{ points}$$

- If the market drops or consolidates sideways, theta decay works entirely in our favor.

---

### 4. Cryptocurrency Perpetual Futures: Spot vs. Derivatives
Unlike traditional equity exchanges that close at 15:30 IST, cryptocurrency derivatives trade **24 hours a day, 7 days a week, 365 days a year**.
- **Perpetual Contracts**: Futures contracts without an expiry date. Traders can hold long or short positions indefinitely.
- **Funding Rate**: A periodic balancing payment between long and short traders that anchors the perpetual contract price to spot price.
- **Isolated Leverage**: We use **10x isolated leverage**. On a ₹10,000 margin allocation, the system commands a ₹1,00,000 notional market position without risking the rest of the account balance.

---

### 5. Algorithmic Risk Management
Every trade placed by our platform adheres to strict mathematical thresholds:
- **Stop Loss (Options)**: Set at $2.0 \times \text{Net Premium Entry}$. If net premium doubles against us, the trade is automatically liquidated.
- **Target (Options)**: Set at $0.2 \times \text{Net Premium Entry}$ (80% profit captured). We exit early to lock in gains without holding into expiry gamma risk.
- **Crypto Bracket**: Stop Loss at -3.0% of price (30% on isolated margin); Take Profit at +4.0% of price (40% on isolated margin).

---

### Exercises & Challenges: Module 1
1. Calculate the Net Credit, Max Profit, and Max Loss for a Bull Put Spread on BANKNIFTY: Spot = 51,200, Sell 51,000 PE @ ₹240, Buy 50,500 PE @ ₹85. Lot size = 15.
2. Explain why buying an option hedge leg *before* selling the short leg is mandatory on Indian brokers like Dhan.

---

# MODULE 2: Development Environment Setup

### Learning Objectives
1. Install Python 3.10+, Node.js 18+, Git, and VS Code.
2. Configure a clean PowerShell/Terminal command line environment.
3. Create and manage isolated Python virtual environments (`venv`).
4. Set up the local Git repository and connect it to GitHub.

---

### 1. Installing Python 3.10+
On Windows:
1. Navigate to [python.org/downloads](https://www.python.org/downloads/) and download Python 3.10 or 3.11.
2. Run the installer executable.

> [!IMPORTANT]
> **Critical Installation Step:** Check the box that says **"Add python.exe to PATH"** at the bottom of the first setup screen before clicking "Install Now". If you skip this, terminal commands like `python` and `pip` will fail.

Verify your installation in PowerShell:
```powershell
python --version
# Expected: Python 3.10.x or Python 3.11.x
pip --version
```

> **Screenshot Placeholder:** *[Screenshot 2.1: Python Windows setup wizard showing the "Add python.exe to PATH" checkbox checked in blue]*

---

### 2. Installing Node.js & npm
Our frontend is built with React 19 and compiled via Vite, which requires Node.js.
1. Download the LTS version from [nodejs.org](https://nodejs.org/).
2. Complete the standard setup wizard.
3. Verify in your terminal:
```powershell
node --version
# Expected: v18.x.x or v20.x.x
npm --version
# Expected: 9.x.x or 10.x.x
```

---

### 3. Installing Git & Visual Studio Code
1. Download Git from [git-scm.com](https://git-scm.com/) and run the installer using default settings.
2. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com/).
3. In VS Code, install the following essential extensions:
   - **Python** (by Microsoft)
   - **Pylance**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**

---

### 4. Creating the Isolated Virtual Environment
Open PowerShell inside your project directory (`c:\Projects\AIProjects\algo-trading`):
```powershell
# Create an isolated virtual environment named 'venv'
python -m venv venv

# Activate the virtual environment on Windows
.\venv\Scripts\Activate.ps1

# (If PowerShell blocks script execution, run this once:
# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser)

# Verify that the active python points to your virtual environment
Get-Command python | Select-Object -ExpandProperty Source
```

Install the production dependencies:
```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

---

### Summary of Module 2
- Your system has verified installations of Python 3.10+, Node.js, npm, Git, and VS Code.
- Your project operates inside an activated virtual environment (`venv`) with all required Python packages installed.

---

# MODULE 3: Python Foundations (Quick Crash Course)

### Learning Objectives
1. Master Python data structures: lists, dictionaries, tuples, and sets.
2. Learn defensive HTTP request handling using the `requests` library.
3. Master timestamp manipulation, time zones (IST - `Asia/Kolkata`), and floating-point rounding.
4. Become proficient in **Pandas** for analyzing OHLCV financial dataframes and calculating rolling indicators.

---

### 1. Dictionaries & JSON in Trading Systems
Trading APIs communicate almost exclusively via JSON payloads. In Python, JSON maps directly to dictionaries:

```python
# Trade payload representation
order_ticket = {
    "symbol": "NIFTY50",
    "strategy": "BULL_PUT_SPREAD",
    "spot_price": 24840.50,
    "legs": [
        {"strike": 24800, "type": "PE", "action": "SELL", "price": 95.50},
        {"strike": 24600, "type": "PE", "action": "BUY", "price": 35.20}
    ],
    "lot_size": 2
}

# Calculating net premium credit
short_leg_price = order_ticket["legs"][0]["price"]
hedge_leg_price = order_ticket["legs"][1]["price"]
net_credit = round(short_leg_price - hedge_leg_price, 2)
print(f"Net Credit Earned: ₹{net_credit} per unit")
# Output: Net Credit Earned: ₹60.3 per unit
```

---

### 2. Timezone Handling: Indian Standard Time (IST)
Financial algorithms must operate in the broker's exchange timezone (`Asia/Kolkata`), regardless of whether your server runs locally in India or in an AWS US data center:

```python
import datetime
import pytz

ist = pytz.timezone('Asia/Kolkata')
now_ist = datetime.datetime.now(ist)
timestamp_str = now_ist.strftime("%Y-%m-%d %H:%M:%S")

# Check if Indian Equity Market is open (09:15 to 15:30 IST on Weekdays)
is_weekday = now_ist.weekday() < 5
current_time = now_ist.time()
market_open = datetime.time(9, 15)
market_close = datetime.time(15, 30)

is_market_live = is_weekday and (market_open <= current_time <= market_close)
print(f"Current IST Time: {timestamp_str} | Market Live: {is_market_live}")
```

---

### 3. Pandas for Algorithmic Finance
Pandas is the workhorse of quantitative finance. We use it to store historical candle arrays, compute moving averages, and detect indicator crossovers:

```python
import pandas as pd
import numpy as np

# Sample 15-minute OHLCV candle data
data = {
    'open': [24700, 24720, 24750, 24780, 24820],
    'high': [24730, 24760, 24790, 24840, 24860],
    'low': [24690, 24710, 24740, 24770, 24810],
    'close': [24720, 24750, 24780, 24830, 24850],
    'volume': [12000, 15400, 18900, 24000, 31000]
}
df = pd.DataFrame(data)

# Calculate 3-period Exponential Moving Average
df['ema_fast'] = df['close'].ewm(span=3, adjust=False).mean()

# Calculate Williams %R over lookback window of 3 periods
highest_high = df['high'].rolling(window=3).max()
lowest_low = df['low'].rolling(window=3).min()
df['wpr'] = ((highest_high - df['close']) / (highest_high - lowest_low)) * -100

print(df[['close', 'ema_fast', 'wpr']].tail(2))
```

---

# MODULE 4: Web Development with Flask

### Learning Objectives
1. Understand the architecture of Flask as a high-performance REST microframework.
2. Build JSON API endpoints with query parameter validation and error handling.
3. Serve production React static assets and configure HTML5 pushState fallback routing.
4. Manage thread safety across concurrent background daemons and HTTP requests.

---

### 1. Minimal Production Flask Application
Below is the core pattern used in `app.py`:

```python
import os
from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder="frontend/dist", static_url_path="")
PORT = int(os.environ.get("PORT", 5000))

# 1. API Route: Return System Health Status
@app.route("/api/health", methods=["GET"])
def api_health():
    return jsonify({
        "status": "online",
        "engine": "CodeTheMarket v2.0",
        "author": "Reev"
    })

# 2. Static Asset Delivery with SPA Client-Side Routing Fallback
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react_app(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=False)
```

---

# MODULE 5: Frontend Development (HTML/CSS/JS & React 19)

### Learning Objectives
1. Master the component architecture of our React 19 single-page application.
2. Style dark-mode fintech dashboards using **Tailwind CSS**.
3. Implement resilient asynchronous polling using the native browser `fetch` API.
4. Compile production assets using **Vite**.

---

### 1. Building the Resilient Polling Hook
Instead of relying on fragile WebSockets that disconnect over cellular networks, our React frontend uses an asynchronous polling hook with an automatic 5-second interval:

```javascript
import { useState, useEffect } from 'react';

export function useScannerState() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchState() {
      try {
        const res = await fetch('/api/scanner/state');
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json.status === 'success') {
            setData(json.data);
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchState();
    const interval = setInterval(fetchState, 5000); // 5-second cadence
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { data, stats, isLoading };
}
```

---

# MODULE 6: Broker API Integration — Dhan HQ

### Learning Objectives
1. Configure Dhan Developer API credentials and understand the token lifecycle.
2. Implement automated headless login using **TOTP (RFC 6238)** and PIN authentication.
3. Parse the massive `api-scrip-master.csv` file (200,000+ instruments) in milliseconds.
4. Execute defined-risk credit spreads with **sequential leg ordering** to secure exchange margin relief.

---

### 1. Headless Daily Authentication with TOTP
Dhan Access Tokens expire every morning at 06:00 IST. Rather than forcing you to log in manually each morning, our platform automates authentication using PyOTP:

```python
import pyotp
import requests

def get_dhan_fresh_token(client_id, pin, totp_secret):
    totp = pyotp.TOTP(totp_secret)
    current_otp = totp.now()
    
    url = "https://auth.dhan.co/v2/login"
    payload = {
        "dhanClientId": client_id,
        "pin": pin,
        "totp": current_otp
    }
    headers = {"Content-Type": "application/json"}
    
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        access_token = response.json().get("accessToken")
        print("Dhan headless login successful! New token stored.")
        return access_token
    else:
        raise Exception(f"Dhan login failed: {response.text}")
```

---

### 2. The Sequential Margin-Relief Execution Algorithm
When selling option spreads, exchange rules require upfront margin unless an offsetting hedge position already exists in your portfolio. Executing legs in the wrong sequence causes order rejection:

```python
import time

def execute_bull_put_spread(dhan, leg1_sec_id, leg2_sec_id, qty, segment):
    """
    Leg 1: Short Put (e.g. 24800 PE) - Sell
    Leg 2: Long Put Hedge (e.g. 24600 PE) - Buy
    """
    print(f"Executing Bull Put Spread: Buying Hedge Leg {leg2_sec_id} first...")
    
    # STEP 1: Execute BUY Hedge Leg FIRST (Reduces exchange margin requirement)
    hedge_order = dhan.place_order(
        security_id=str(leg2_sec_id),
        exchange_segment=segment,
        transaction_type=dhan.BUY,
        quantity=qty,
        order_type=dhan.MARKET,
        product_type=dhan.MARGIN
    )
    print(f"Hedge Order Status: {hedge_order}")
    
    # Buffer to let broker risk engine register the hedge position
    time.sleep(1.0)
    
    # STEP 2: Execute SELL Short Leg SECOND (Uses margin relief)
    short_order = dhan.place_order(
        security_id=str(leg1_sec_id),
        exchange_segment=segment,
        transaction_type=dhan.SELL,
        quantity=qty,
        order_type=dhan.MARKET,
        product_type=dhan.MARGIN
    )
    print(f"Short Order Status: {short_order}")
    return hedge_order, short_order
```

---

# MODULE 7: Broker API Integration — Delta Exchange (Crypto)

### Learning Objectives
1. Generate and manage Delta Exchange India API credentials.
2. Implement **HMAC SHA-256** request signing in Python.
3. Calculate crypto contract sizing for 10x isolated leverage based on fixed INR capital.
4. Submit market orders with native server-side Stop-Loss and Take-Profit brackets.

---

### 1. Cryptographic HMAC Request Signing
Delta Exchange requires every private API request to include a unique Unix timestamp and an HMAC SHA-256 signature calculated over the HTTP method, timestamp, URI path, and request body:

```python
import time
import hmac
import hashlib
import requests

def delta_request(method, path, api_key, api_secret, payload=""):
    base_url = "https://api.india.delta.exchange"
    timestamp = str(int(time.time()))
    
    # Construct signature payload string
    signature_data = method + timestamp + path + payload
    signature = hmac.new(
        api_secret.encode('utf-8'),
        signature_data.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    headers = {
        "api-key": api_key,
        "timestamp": timestamp,
        "signature": signature,
        "Content-Type": "application/json"
    }
    
    url = base_url + path
    return requests.request(method, url, headers=headers, data=payload)
```

---

# MODULE 8: Building the Real-Time Scanner Engine

### Learning Objectives
1. Understand the multi-threaded daemon architecture of `scanner_backend.py`.
2. Implement mathematical calculations for **EMA(5)**, **EMA(15)**, and **Williams %R(70)**.
3. Construct the continuous scanning loop across Indian equities, indices, and commodities.
4. Implement automatic bracket exit tracking (Stop Loss = $2.0 \times \text{Entry}$, Target = $0.2 \times \text{Entry}$).

---

### 1. Mathematical Indicator Calculations
In `scanner_backend.py`, technical indicators are computed using Pandas:

```python
def calculate_indicators(df):
    """
    Expects DataFrame with columns: open, high, low, close, volume.
    Calculates 5 EMA, 15 EMA, and 70-period Williams %R.
    """
    df['ema_fast'] = df['close'].ewm(span=5, adjust=False).mean()
    df['ema_mid'] = df['close'].ewm(span=15, adjust=False).mean()
    
    # Williams %R over 70 lookback periods
    period = 70
    highest_high = df['high'].rolling(window=period).max()
    lowest_low = df['low'].rolling(window=period).min()
    
    df['wpr'] = ((highest_high - df['close']) / (highest_high - lowest_low)) * -100.0
    
    last_row = df.iloc[-1]
    fast = last_row['ema_fast']
    mid = last_row['ema_mid']
    wpr = last_row['wpr']
    
    signal = "WAIT"
    if fast > mid and wpr >= -80.0:
        signal = "BUY"
    elif fast < mid and wpr <= -20.0:
        signal = "SELL"
        
    return fast, mid, wpr, signal
```

---

# MODULE 9: Telegram Bot Integration & Mobile Terminal

### Learning Objectives
1. Create a custom Telegram bot with `@BotFather` and retrieve your `BOT_TOKEN`.
2. Implement long polling with update offset tracking in `telegram_listener.py`.
3. Dispatch trade alerts with interactive inline callback buttons.
4. Process user button clicks (`EXECUTE_`, `IGNORE_`, `EXIT_`) to execute live broker orders.

---

### 1. Dispatching Interactive Alerts with Inline Keyboards
When a signal is generated, the bot delivers an alert with actionable buttons directly to your phone:

```python
import requests

def send_telegram_trade_alert(bot_token, chat_id, trade_id, symbol, signal, spot, net_credit):
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    
    text = (
        f"🚨 *NEW SIGNAL DETECTED* 🚨\n"
        f"Symbol: *{symbol}*\n"
        f"Action: *{signal}*\n"
        f"Spot Price: ₹{spot:,.2f}\n"
        f"Net Credit: ₹{net_credit:.2f} pts\n"
    )
    
    # Construct Telegram inline buttons
    inline_keyboard = {
        "inline_keyboard": [
            [
                {"text": "🚀 Execute Live", "callback_data": f"EXECUTE_{trade_id}"},
                {"text": "🚫 Ignore", "callback_data": f"IGNORE_{trade_id}"}
            ],
            [
                {"text": "❌ Square Off", "callback_data": f"EXIT_{trade_id}"}
            ]
        ]
    }
    
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown",
        "reply_markup": inline_keyboard
    }
    requests.post(url, json=payload)
```

---

# MODULE 10: Building the Trading Dashboard

### Learning Objectives
1. Connect frontend UI components to backend endpoints in `app.py`.
2. Display open and closed trade ledgers with real-time unrealized P&L calculations.
3. Track broker fees and taxes (₹20 per executed order + 18% GST).
4. Build manual trade execution dialogs with custom lot sizing and strike selection.

---

# MODULE 11: Database Design with SQLite

### Learning Objectives
1. Master SQLite schema design for financial transaction journals.
2. Differentiate between paper simulation records and real broker orders using the `is_live` flag.
3. Manage concurrent database reads and writes using WAL mode.

---

### 1. Core Schema (`algo_lab.db: paper_trades`)
```sql
CREATE TABLE IF NOT EXISTS paper_trades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT NOT NULL,
    trade_type TEXT NOT NULL,
    spread_type TEXT,
    leg1_symbol TEXT NOT NULL,
    leg2_symbol TEXT NOT NULL,
    lot_size INTEGER DEFAULT 1,
    entry_time TEXT NOT NULL,
    spot_entry REAL NOT NULL,
    leg1_entry_price REAL NOT NULL,
    leg2_entry_price REAL NOT NULL,
    net_premium_entry REAL NOT NULL,
    stop_loss REAL NOT NULL,
    target REAL NOT NULL,
    status TEXT NOT NULL,
    pnl REAL NOT NULL,
    exit_time TEXT,
    exit_spot REAL,
    is_live INTEGER DEFAULT 0,
    live_leg1_order_id TEXT,
    live_leg2_order_id TEXT
);
```

---

# MODULE 12: Historical Data & Single-Instrument Backtesting

### Learning Objectives
1. Download 1m, 5m, 15m, and Daily historical candlestick data from Dhan OpenAPI.
2. Build an event-driven backtesting engine with realistic execution friction (`backtester.py`).
3. Model slippage (0.05%), trailing stop losses, and broker commissions.
4. Compute statistical metrics: Win Rate, Maximum Drawdown, Profit Factor, and Sharpe Ratio.

---

### 1. Annualized Sharpe Ratio Formula
$$\text{Sharpe} = \frac{\bar{R}_p - R_f}{\sigma_p} \times \sqrt{252}$$
Where $\bar{R}_p$ is the mean daily portfolio return, $R_f$ is the risk-free rate (typically 6.5% for Indian 91-day Treasury Bills), and $\sigma_p$ is the standard deviation of returns.

---

# MODULE 13: Hedging Strategies & Multi-Leg Backtesting

### Learning Objectives
1. Model non-linear derivatives payoffs in `hedging_backtester.py`.
2. Build synthetic option contracts for Straddles, Strangles, Iron Condors, and Butterflies.
3. Backtest multi-leg expired options series against historical underlying data.

---

# MODULE 14: Crypto Derivatives Backtesting (Delta Exchange)

### Learning Objectives
1. Download historical candle arrays from Delta Exchange India.
2. Backtest perpetual futures strategies incorporating 10x leverage and taker fees (0.05% + 18% GST).
3. Analyze equity curves under varying market regimes.

---

# MODULE 15: On-Demand Technical Stock Screener

### Learning Objectives
1. Build an ad-hoc screener in `ScreenerTab.jsx` that scans the market universe on demand.
2. Filter symbols by price, volume, and momentum indicators without running a continuous background loop.

---

# MODULE 16: AI-Powered Market News & Sentiment (Google Gemini)

### Learning Objectives
1. Ingest live financial RSS feeds from Moneycontrol and Economic Times.
2. Synthesize market sentiment using Google Gemini (`gemini-3.8-flash`).
3. Generate concise, actionable corporate catalyst summaries for dashboard display.

---

# MODULE 17: AWS Free-Tier Cloud Deployment

### Learning Objectives
1. Launch an AWS EC2 `t3.micro` instance running Ubuntu 24.04 LTS under the Free Tier.
2. Configure Elastic IP addresses and Security Groups (Ports 80, 443, 22).
3. Configure **Gunicorn** and **systemd** for automated process management and crash recovery.
4. Set up automated nightly database backups to Amazon S3 (`backup_dbs.sh`).

---

### 1. Step-by-Step EC2 Setup Commands
Connect to your EC2 instance via SSH:
```bash
# 1. Update OS and install runtime dependencies
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-venv git nodejs npm sqlite3

# 2. Clone repository
git clone https://github.com/techdeepdive/algo-trading.git
cd algo-trading

# 3. Create virtual environment and install packages
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# 4. Build React 19 Frontend
cd frontend
npm install
npm run build
cd ..

# 5. Configure Production systemd Service
sudo nano /etc/systemd/system/algoscan.service
```

Paste the following systemd service configuration:
```ini
[Unit]
Description=CodeTheMarket Algo Trading Engine
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/algo-trading
EnvironmentFile=/home/ubuntu/algo-trading/.env
ExecStart=/home/ubuntu/algo-trading/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:5000 app:app
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable algoscan
sudo systemctl start algoscan
sudo systemctl status algoscan
```

---

# MODULE 18: Extending to Other Brokers

### Learning Objectives
1. Learn broker abstraction patterns to adapt this platform to other major brokers:
   - **Zerodha (KiteConnect API)**
   - **Fyers (Fyers API v3)**
   - **Angel One (SmartAPI)**
   - **CoinDCX / Coinswitch**

---

### 1. Adapter Pattern for Broker Abstraction
```python
from abc import ABC, abstractmethod

class BaseBrokerAdapter(ABC):
    @abstractmethod
    def get_ltp(self, symbol):
        pass
        
    @abstractmethod
    def place_order(self, symbol, side, qty, order_type):
        pass

class DhanAdapter(BaseBrokerAdapter):
    def __init__(self, client):
        self.client = client
        
    def get_ltp(self, symbol):
        return self.client.get_ltp_data(symbol)

class ZerodhaKiteAdapter(BaseBrokerAdapter):
    def __init__(self, kite):
        self.kite = kite
        
    def get_ltp(self, symbol):
        quote = self.kite.quote(f"NSE:{symbol}")
        return quote[f"NSE:{symbol}"]["last_price"]
```

---

# MODULE 19: Advanced Topics & Institutional Horizons

### Learning Objectives
1. Scale the platform toward institutional-grade operations:
   - WebSocket streaming tick feeds
   - Machine learning classifiers for signal filtering
   - Multi-account portfolio management
   - Sub-millisecond latency optimizations with C extensions / Cython

---

# APPENDIX A: Complete API Routes Reference
*(Exhaustive reference of all 36 Flask REST endpoints documented in [docs/api_routes_reference.md](file:///c:/Projects/AIProjects/algo-trading/docs/api_routes_reference.md))*

---

# APPENDIX B: Environment Variables Reference

| Variable Name | Required | Target Engine | Purpose & Format |
| :--- | :---: | :--- | :--- |
| `PORT` | Optional | Flask Web Server | Listening port (default `5000`). |
| `DHAN_CLIENT_ID` | **Required** | Dhan HQ API | 10-digit numerical client identifier. |
| `DHAN_ACCESS_TOKEN`| **Required** | Dhan HQ API | JWT bearer token for API access. |
| `DHAN_PIN` | Optional | Dhan Headless Login | 6-digit login PIN. |
| `DHAN_TOTP_SECRET` | Optional | Dhan Headless Login | Base32 TOTP secret for automated token renewals. |
| `DELTA_API_KEY` | **Required** | Delta Exchange India | REST API Key for crypto execution. |
| `DELTA_API_SECRET` | **Required** | Delta Exchange India | HMAC-SHA256 Secret Key for crypto signing. |
| `TELEGRAM_BOT_TOKEN`| **Required** | Telegram Alerts | HTTP Bot token provided by @BotFather. |
| `TELEGRAM_CHAT_ID` | **Required** | Telegram Alerts | Target Channel or User chat ID. |
| `GEMINI_API_KEY` | Optional | Google Gemini AI | API key for AI summaries and news intelligence. |

---

# APPENDIX C: Troubleshooting Guide
- **Error: `Invalid Token` on Dhan**: Refresh access token via the UI or check `DHAN_TOTP_SECRET` in `.env`.
- **Error: `Margin Insufficient` on Dhan**: Verify that the hedge leg was placed and filled *before* the short leg.
- **Error: `Signature Mismatch` on Delta Exchange**: Ensure system clock is synced using NTP (`sudo timedatectl set-ntp on`).

---

# APPENDIX D: Quantitative & Technical Glossary
- **Theta ($\Theta$)**: Rate of change of an option's premium relative to time decay.
- **Delta ($\Delta$)**: Sensitivity of an option's premium to changes in the underlying spot price.
- **Taker Fee**: Exchange commission charged when an order removes liquidity from the order book.
- **Credit Spread**: An options strategy where the premium received from short strikes exceeds the premium paid for hedge strikes, generating net positive upfront cash.
