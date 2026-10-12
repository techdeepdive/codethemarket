# CodeTheMarket: Build Your Own AI-Powered Algo Trading Platform from Scratch
**A Complete Master Guide to Building, Deploying, and Automating Your Trading Bot — Zero Cost, Full Stack**

**Author:** Reev  
**Publisher:** CodeTheMarket Press  
**First Edition:** 2026  
**Format:** E-Book & Paperback Reference Manual  

---

## Copyright Notice

© 2026 Reev / CodeTheMarket. All rights reserved.

No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, scanning, or otherwise—without the prior written permission of the author and publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.

**ISBN (Kindle):** 978-1-XXXXXX-01-X (Placeholder)  
**ISBN (Paperback):** 978-1-XXXXXX-02-X (Placeholder)  
**Published by:** CodeTheMarket Press  
**Official Portal:** `https://codethemarket.dev`  

---

## Dedication

*To my parents, mentors, and the open-source engineering community who believe that financial literacy, quantitative modeling, and technological freedom should belong to everyone, not just institutional firms.*

---

## Important Regulatory & Risk Disclaimer

> [!CAUTION]
> **PLEASE READ CAREFULLY BEFORE READING THIS BOOK**
>
> The author, **Reev**, and the publisher, **CodeTheMarket Press**, are NOT registered with the **Securities and Exchange Board of India (SEBI)** or any other securities regulatory body as an Investment Adviser, Research Analyst, or Portfolio Manager.
>
> This book, along with its associated code repositories, architectural designs, algorithms, and documentation, is produced strictly for **EDUCATIONAL, SCIENTIFIC, AND INFORMATIONAL PURPOSES ONLY**. 
>
> Nothing contained in this book constitutes personal investment advice, trading recommendations, tax advice, financial counseling, or a solicitation to buy or sell any security, derivative, commodity, or cryptocurrency.
>
> **Trading in financial instruments—including equities, futures, options, commodities, and cryptocurrency perpetual contracts—carries an exceptionally high risk of substantial financial loss.** As per official empirical studies published by SEBI, over nine out of ten retail individual traders in the equity Futures & Options segment incur consistent net financial losses.
>
> You are solely responsible for your own trading and investment decisions. Always test software and algorithms in a simulated paper trading environment for an extended period. Prior to deploying real monetary capital, consult with a qualified, licensed financial advisor.
>
> The author and publisher disclaim all liability for any direct, indirect, incidental, consequential, or punitive damages or trading losses arising from the implementation or reliance upon any code, strategy, or concept presented in this book.
>
> All trademarks, service marks, logos, and company names mentioned (including Dhan HQ, Zerodha Kite, Fyers, Angel One, Delta Exchange India, CoinDCX, Coinswitch, Amazon Web Services, Telegram, and Google) remain the intellectual property of their respective trademark holders.

---

## Table of Contents

- [Preface: The Zero-Cost Algo Revolution](#preface-the-zero-cost-algo-revolution)
- [How to Use This Book](#how-to-use-this-book)
- **Part I: Foundations**
  - [Chapter 1: The World of Algorithmic Trading](#chapter-1-the-world-of-algorithmic-trading)
  - [Chapter 2: Financial Markets & Derivatives Mechanics](#chapter-2-financial-markets--derivatives-mechanics)
  - [Chapter 3: Setting Up Your Development Environment](#chapter-3-setting-up-your-development-environment)
  - [Chapter 4: Python & Pandas Foundations for Quantitative Finance](#chapter-4-python--pandas-foundations-for-quantitative-finance)
- **Part II: Building the Backend Core**
  - [Chapter 5: Flask Architecture & REST API Controllers](#chapter-5-flask-architecture--rest-api-controllers)
  - [Chapter 6: Dhan HQ Broker OpenAPI Integration](#chapter-6-dhan-hq-broker-openapi-integration)
  - [Chapter 7: Delta Exchange India Crypto Derivatives](#chapter-7-delta-exchange-india-crypto-derivatives)
  - [Chapter 8: The Multi-Asset Scanner Engine](#chapter-8-the-multi-asset-scanner-engine)
  - [Chapter 9: The Two-Way Telegram Mobile Trading Terminal](#chapter-9-the-two-way-telegram-mobile-trading-terminal)
- **Part III: Building the Frontend Workstation**
  - [Chapter 10: Single-Page Architecture with React 19 & Vite](#chapter-10-single-page-architecture-with-react-19--vite)
  - [Chapter 11: Real-Time Dashboard Features & Asynchronous Polling](#chapter-11-real-time-dashboard-features--asynchronous-polling)
- **Part IV: Advanced Quantitative Research & Testing**
  - [Chapter 12: Historical Data Ingestion & CSV Pipelines](#chapter-12-historical-data-ingestion--csv-pipelines)
  - [Chapter 13: Event-Driven Single-Instrument Backtesting](#chapter-13-event-driven-single-instrument-backtesting)
  - [Chapter 14: Non-Linear Options Hedging Backtester](#chapter-14-non-linear-options-hedging-backtester)
  - [Chapter 15: Cryptocurrency Perpetual Futures Backtesting](#chapter-15-cryptocurrency-perpetual-futures-backtesting)
  - [Chapter 16: Technical Stock Screener & AI News Intelligence](#chapter-16-technical-stock-screener--ai-news-intelligence)
- **Part V: Production Deployment & Beyond**
  - [Chapter 17: Database Architecture & SQLite Design](#chapter-17-database-architecture--sqlite-design)
  - [Chapter 18: AWS Cloud Production at Zero Cost](#chapter-18-aws-cloud-production-at-zero-cost)
  - [Chapter 19: Extending to Other Brokers (Zerodha, Fyers, Angel One)](#chapter-19-extending-to-other-brokers)
  - [Chapter 20: Quantitative Horizons & Institutional Scaling](#chapter-20-quantitative-horizons--institutional-scaling)
- **Back Matter**
  - [Appendix A: Complete REST API Reference](#appendix-a-complete-rest-api-reference)
  - [Appendix B: Environment Variables Reference](#appendix-b-environment-variables-reference)
  - [Appendix C: Operational Troubleshooting Guide](#appendix-c-operational-troubleshooting-guide)
  - [Appendix D: Quantitative Glossary](#appendix-d-quantitative-glossary)
  - [Appendix E: Useful Resources & Bibliography](#appendix-e-useful-resources--bibliography)
  - [About the Author](#about-the-author)

---

## Preface: The Zero-Cost Algo Revolution

> *"Give me a lever long enough and a fulcrum on which to place it, and I shall move the world."* — Archimedes

In modern financial markets, code is that lever.

For decades, institutional trading desks spent millions of dollars building proprietary execution systems. Retail traders were left at an extreme disadvantage, forced to watch flickering screens, wrestle with emotional hesitation, and pay exorbitant monthly subscription fees for third-party black-box tools.

When I began designing the **CodeTheMarket** platform, I set an uncompromising constraint: **The entire production infrastructure—from code to cloud deployment—must cost zero rupees per month to run.**

No expensive VPS rentals. No closed algorithmic platforms charging ₹5,000/month. No paid indicators.

By pairing modern, developer-friendly broker APIs (like Dhan HQ and Delta Exchange India) with lightweight Python multi-threaded daemons, SQLite embedded relational storage, React 19 single-page interfaces, and AWS Free-Tier cloud infrastructure, we can achieve institutional reliability with zero monthly software overhead.

This book is the open blueprint. Every module, algorithm, and mathematical formula you encounter is running live in the open-source repository. Welcome to the new era of quantitative freedom.

— **Reev**

---

# Part I: Foundations

---

## Chapter 1: The World of Algorithmic Trading

> *"The goal of an algorithmic trading system is not to predict the future with magic, but to execute an edge with discipline when probability aligns in your favor."*

### 1.1 What is Algorithmic Trading?
**Algorithmic trading** (or **algo trading**) is the process of using computer programs to execute financial transactions according to predefined mathematical rules and market logic. Unlike human discretionary traders who struggle with fear, greed, revenge trading, and physical fatigue, an algorithm processes market ticks objectively, evaluates conditions in milliseconds, and enforces risk management without hesitation.

```text
Figure 1.1: Discretionary vs. Algorithmic Execution Feedback Loop
[Discretionary Trader]: Market Tick ──► Emotion / Hesitation ──► Inconsistent Execution ──► Inconsistent Results
[Algorithmic System]:  Market Tick ──► Mathematical Formula  ──► Sub-Second Order API    ──► Deterministic Execution
```

### 1.2 The Indian Market Landscape: NSE, BSE, and MCX
India's capital markets represent one of the fastest-growing and highest-volume derivatives ecosystems in the world. Trading is partitioned across three core venues:
1. **National Stock Exchange (NSE)**: Specializes in high-liquidity equity shares and index derivatives. The flagship **NIFTY 50** represents the 50 largest capitalized companies.
2. **Bombay Stock Exchange (BSE)**: The heritage marketplace whose benchmark **SENSEX** index (comprising 30 blue-chip firms) trades on the `BSE_FNO` (BFO) derivatives segment.
3. **Multi Commodity Exchange (MCX)**: India's premier commodity exchange hosting futures and options on precious metals (**SILVERM**, **GOLDM**) and energy (**CRUDEOILM**).

### 1.3 The 24/7 Digital Asset Market
Alongside traditional Indian exchanges, the cryptocurrency derivatives landscape operates continuously. Through FIU-compliant domestic platforms such as **Delta Exchange India**, traders can access perpetual futures contracts denominated in INR and USDT with isolated leverage, bridging the gap when traditional exchanges are closed over weekends and holidays.

### 1.4 Chapter 1 Exercises & Self-Assessment
1. *Self-Assessment:* What are the three primary psychological pitfalls of discretionary trading that algorithmic systems eliminate?
2. *Hands-on Challenge:* Identify the segment codes used by Indian exchanges for NSE equity derivatives, BSE index derivatives, and MCX commodity mini contracts.

---

## Chapter 2: Financial Markets & Derivatives Mechanics

### 2.1 The Mathematics of Options
A financial option is a contract giving the holder the right, without obligation, to buy or sell an asset at an agreed price.
- **Call Option ($C$)**: Yields intrinsic value when the underlying spot price $S$ exceeds strike price $K$:
  $$\text{Intrinsic Value}_{\text{Call}} = \max(0, S - K)$$
- **Put Option ($P$)**: Yields intrinsic value when strike price $K$ exceeds spot price $S$:
  $$\text{Intrinsic Value}_{\text{Put}} = \max(0, K - S)$$

### 2.2 Why We Automate Credit Spreads
Selling naked options exposes traders to catastrophic tail risk. Buying naked options subjects traders to continuous **Theta ($\Theta$) decay**. 

In our platform, we exclusively automate defined-risk **Credit Spreads**:
1. **Bull Put Spread (For Bullish Signals)**:
   - SELL OTM Put Strike ($K_1$) $\rightarrow$ Receive Premium $P_1$.
   - BUY Lower OTM Put Strike ($K_2$) $\rightarrow$ Pay Premium $P_2$.
   - **Net Upfront Credit**: $P_1 - P_2$.
   - **Max Loss**: $(K_1 - K_2) - (P_1 - P_2)$.
2. **Bear Call Spread (For Bearish Signals)**:
   - SELL OTM Call Strike ($K_1$) $\rightarrow$ Receive Premium $C_1$.
   - BUY Higher OTM Call Strike ($K_2$) $\rightarrow$ Pay Premium $C_2$.

```text
Figure 2.1: Asymmetric Payoff Profile of a Bull Put Spread
Profit ▲
+Credit ├─── Defined Maximum Profit (Spot >= K1)
        │                       /
        │                      / Break-even = K1 - Net Credit
    0.0 ┼─────────────────────/────────────────────► Spot Price
        │                    /
-MaxLoss├─── Defined Maximum Risk (Spot <= K2)
Loss    ▼
```

### 2.3 Concrete Worked Mathematical Example: NIFTY 50 Bull Put Spread
Let us walk through a complete, real-world numerical scenario:
- **Underlying:** NIFTY 50 Index Spot = `24,842.50`
- **Signal Detected:** Bullish EMA(5) > EMA(15) crossover with Williams %R = `-65.0`
- **Leg 1 (Short Put):** Strike $K_1 = 24,800$ PE sold at premium $P_1 = ₹95.50$
- **Leg 2 (Long Hedge Put):** Strike $K_2 = 24,600$ PE bought at premium $P_2 = ₹35.20$
- **Lot Size:** 25 units (1 lot)

#### The Calculations:
1. **Net Credit per unit:**
   $$\text{Net Credit} = P_1 - P_2 = 95.50 - 35.20 = ₹60.30 \text{ per unit}$$
2. **Total Cash Credited Upfront:**
   $$\text{Total Credit} = 60.30 \times 25 = ₹1,507.50$$
3. **Strike Width:**
   $$\text{Width} = 24,800 - 24,600 = 200 \text{ points}$$
4. **Maximum Capped Loss:**
   $$\text{Max Loss} = (200 - 60.30) \times 25 = 139.70 \times 25 = ₹3,492.50$$
5. **Break-Even Spot Price at Expiry:**
   $$\text{Break-Even} = K_1 - \text{Net Credit} = 24,800 - 60.30 = 24,739.70$$

If NIFTY finishes above 24,800 at expiry, both options expire worthless, and you retain the entire ₹1,507.50 credit with zero further action required.

---

## Chapter 3: Setting Up Your Development Environment

### 3.1 Python 3.10+ Installation
On Windows, verify that your installation is correctly registered in the system path:
```powershell
# Verify Python version
python --version
# Expected: Python 3.10.x or 3.11.x

# Verify Package Manager
pip --version
```

### 3.2 Virtual Environment Configuration
To maintain system hygiene and prevent package version conflicts across projects, always run within a virtual environment:
```powershell
# Navigate to workspace
cd c:\Projects\AIProjects\algo-trading

# Create virtual environment
python -m venv venv

# Activate on Windows PowerShell
.\venv\Scripts\Activate.ps1

# Install core dependencies
pip install -r requirements.txt
```

---

## Chapter 4: Python & Pandas Foundations for Quantitative Finance

### 4.1 Rolling Indicators in Pandas
We compute technical indicators over OHLCV dataframes using vector operations:
```python
import pandas as pd
import numpy as np

def compute_indicators(df):
    # Calculate 5-period and 15-period Exponential Moving Averages
    df['ema_5'] = df['close'].ewm(span=5, adjust=False).mean()
    df['ema_15'] = df['close'].ewm(span=15, adjust=False).mean()

    # Calculate 70-period Williams %R Oscillator
    high_70 = df['high'].rolling(window=70).max()
    low_70 = df['low'].rolling(window=70).min()
    df['wpr_70'] = ((high_70 - df['close']) / (high_70 - low_70)) * -100.0

    return df
```

---

# Part II: Building the Backend Core

---

## Chapter 5: Flask Architecture & REST API Controllers

### 5.1 System Topography
Our Flask backend (`app.py`) serves two functions:
1. Providing a high-speed RESTful JSON API for system control, historical queries, and order routing.
2. Delivering the compiled React 19 single-page application from `frontend/dist` with an HTML5 pushState fallback router.

```text
Figure 5.1: Flask Request & Lifecycle Topography
Client Browser ──► GET /api/scanner/state ──► Flask Controller ──► SQLite Query (12ms) ──► JSON Response
Client Browser ──► GET /backtest          ──► Flask Static     ──► frontend/dist/index.html (200 OK)
```

### 5.2 Line-by-Line Code Breakdown: `app.py`
Let us examine how `app.py` coordinates background threads, database access, and broker order routing:

```python
import os
import sqlite3
from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder="frontend/dist", static_url_path="")
PORT = int(os.environ.get("PORT", 5000))
DB_PATH = "algo_lab.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Return dict-like row objects
    return conn

@app.route("/api/scanner/state", methods=["GET"])
def get_scanner_state():
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM scan_state ORDER BY symbol ASC")
        rows = cursor.fetchall()
        data = [dict(row) for row in rows]
        conn.close()
        return jsonify({"status": "success", "data": data})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
```
- **Line 5**: Configures Flask to serve static files from `frontend/dist`.
- **Line 10**: `sqlite3.Row` converts raw tuples into accessible dictionary key-value pairs.
- **Line 18**: Queries the cached indicators table. Since the background daemon writes to SQLite, web requests execute in less than 15 milliseconds without querying external broker APIs.

---

## Chapter 6: Dhan HQ Broker OpenAPI Integration

### 6.1 Sequential Margin-Relief Order Placement
Exchange margin requirements for selling naked options are ₹1,20,000+ per lot. When paired with an OTM hedge, margin requirements drop to ~₹30,000. To prevent order rejection due to insufficient funds, the hedge leg must be executed first:

```python
import time

def place_spread_with_margin_benefit(dhan_client, leg1_sec_id, leg2_sec_id, lot_qty, segment):
    """
    Leg 1: Short Strike (Sell)
    Leg 2: Hedge Strike (Buy)
    """
    # 1. Place BUY Hedge Order FIRST to establish margin relief
    hedge_order = dhan_client.place_order(
        security_id=str(leg2_sec_id),
        exchange_segment=segment,
        transaction_type=dhan_client.BUY,
        quantity=lot_qty,
        order_type=dhan_client.MARKET,
        product_type=dhan_client.MARGIN
    )
    
    # Allow 1000ms for broker risk engine acknowledgement
    time.sleep(1.0)
    
    # 2. Place SELL Short Order SECOND utilizing margin relief
    short_order = dhan_client.place_order(
        security_id=str(leg1_sec_id),
        exchange_segment=segment,
        transaction_type=dhan_client.SELL,
        quantity=lot_qty,
        order_type=dhan_client.MARKET,
        product_type=dhan_client.MARGIN
    )
    
    return hedge_order, short_order
```

### 6.2 Common Gotchas & Broker Pitfalls
> [!WARNING]
> **Dhan Daily Token Invalidation at 06:00 IST:**  
> Dhan HQ API access tokens automatically expire every morning at 06:00 AM IST regardless of when they were generated. If your server is running 24/7 on AWS EC2, automated morning scans will fail with `401 Unauthorized` unless you implement automated headless login using `DHAN_PIN` and `DHAN_TOTP_SECRET` as shown in Chapter 6.

---

## Chapter 7: Delta Exchange India Crypto Derivatives

### 7.1 Cryptographic HMAC SHA-256 Authentication
Delta Exchange India uses HMAC SHA-256 signatures generated from the HTTP verb, timestamp, path, and payload:

```python
import time
import hmac
import hashlib
import requests

def delta_api_call(method, path, api_key, api_secret, payload_json=""):
    timestamp = str(int(time.time()))
    raw_signature = method + timestamp + path + payload_json
    signature = hmac.new(
        api_secret.encode('utf-8'),
        raw_signature.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    headers = {
        "api-key": api_key,
        "timestamp": timestamp,
        "signature": signature,
        "Content-Type": "application/json"
    }
    url = "https://api.india.delta.exchange" + path
    return requests.request(method, url, headers=headers, data=payload_json)
```

### 7.2 Worked Example: 10x Leverage Contract Sizing
Suppose you wish to commit a fixed margin of ₹10,000 to trade BTC perpetual futures:
1. **USDT Conversion Rate:** ₹86.00 per USDT.
   $$\text{Margin in USDT} = \frac{10,000}{86.00} \approx 116.28 \text{ USDT}$$
2. **Position Notional at 10x Leverage:**
   $$\text{Notional Value} = 116.28 \times 10 = 1,162.80 \text{ USDT}$$
3. **Contract Sizing:** If BTC is trading at $67,500 and Delta's contract value is 0.001 BTC ($67.50):
   $$\text{Contract Size} = \text{round}\left(\frac{1,162.80}{67.50}\right) = 17 \text{ contracts}$$

---

## Chapter 8: The Multi-Asset Scanner Engine

### 8.1 The Scanning Daemon Architecture
`scanner_backend.py` runs a continuous background worker thread executing the core quantitative loop:

```text
Figure 8.1: Scanner Evaluation Lifecycle
Fetch 15m Candles ──► Compute EMA(5/15) & WPR(70) ──► Signal Check (BUY/SELL) ──► Resolve Strikes ──► Telegram Alert & Paper Store
```

### 8.2 Autonomous Bracket Exit Logic
On every 15-second tick sweep, active positions are evaluated against exit thresholds:
- **Target Achieved**: Current Net Credit $\le 0.20 \times \text{Entry Net Credit}$ (80% profit booked).
- **Stop Loss Hit**: Current Net Credit $\ge 2.00 \times \text{Entry Net Credit}$ (position squared off).

---

## Chapter 9: The Two-Way Telegram Mobile Trading Terminal

### 9.1 Long Polling & Interactive Callback Keyboards
Rather than requiring public webhook URLs, `telegram_listener.py` uses long polling (`getUpdates`). Trade alerts include inline action buttons:
- `[ 🚀 Execute Live ]` $\rightarrow$ Triggers live broker order execution on Dhan.
- `[ 🚫 Ignore ]` $\rightarrow$ Prevents automatic square-off tracking.
- `[ ❌ Square Off ]` $\rightarrow$ Liquidates the active position immediately.

```python
# telegram_listener.py Callback Processing Engine
def handle_telegram_callback(callback_query):
    callback_id = callback_query['id']
    data = callback_query['data']
    from_user = callback_query['from']['id']

    if data.startswith("EXECUTE_"):
        trade_id = int(data.split("_")[1])
        # Execute live trade on Dhan and update database
        execute_live_dhan_trade(trade_id)
        send_telegram_reply(f"Order #{trade_id} executed live on Dhan RMS!")
    elif data.startswith("IGNORE_"):
        trade_id = int(data.split("_")[1])
        mark_trade_ignored(trade_id)
        send_telegram_reply(f"Trade #{trade_id} ignored from auto-exit daemon.")
```

---

# Part III: Building the Frontend Workstation

---

## Chapter 10: Single-Page Architecture with React 19 & Vite

### 10.1 Component Tree Architecture
The trading workstation is structured as a modular single-page application built on React 19, Tailwind CSS, and Vite:

```text
Figure 10.1: React 19 Component Hierarchy
App.jsx (Root Theme Provider & Tab Router)
├── Navbar.jsx (Connection Telemetry, Fund Limits, Theme Switcher)
└── Active Tab View Container:
    ├── HomeTab.jsx (Metrics & Capital Allocation)
    ├── ScannerTab.jsx (Real-time Indian Markets Scanner)
    ├── ScreenerTab.jsx (On-demand Technical Screener)
    ├── HistoricalTab.jsx (Data Fetcher & CSV Exporter)
    ├── BacktestTab.jsx (Single-Instrument Simulator)
    ├── HedgingTab.jsx (Options Multi-Leg Hedging Simulator)
    ├── CryptoScannerTab.jsx (Delta Perpetual Scanner)
    ├── CryptoBacktestTab.jsx (Crypto Leverage Simulator)
    └── NewsTab.jsx (Google Gemini AI News Intelligence)
```

---

## Chapter 11: Real-Time Dashboard Features & Asynchronous Polling

### 11.1 The Polling Engine (`useScannerState`)
To guarantee connection stability over cellular and mobile networks without brittle WebSocket drops, the UI implements a custom asynchronous hook that queries the backend every 5 seconds:

```javascript
import { useState, useEffect } from 'react';

export function useScannerState() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    let active = true;

    async function poll() {
      try {
        const res = await fetch('/api/scanner/state');
        if (res.ok) {
          const json = await res.json();
          if (active && json.status === 'success') {
            setData(json.data);
          }
        }
      } catch (err) {
        console.error('Polling tick error:', err);
      }
    }

    poll();
    const timer = setInterval(poll, 5000); // 5-second interval
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  return { data, stats };
}
```

---

# Part IV: Advanced Quantitative Research & Testing

---

## Chapter 12: Historical Data Ingestion & CSV Pipelines

### 12.1 Programmatic Candlestick Downloads
`app.py` exposes the `/api/dhan/historical_data` endpoint, enabling users to download intraday and daily OHLCV candlestick data for any Indian instrument:

```python
@app.route("/api/dhan/historical_data", methods=["GET"])
def api_historical_data():
    symbol = request.args.get("symbol", "NIFTY")
    interval = request.args.get("interval", "15")  # 1, 5, 15, 60, DAY
    from_date = request.args.get("from_date")
    to_date = request.args.get("to_date")
    
    # Query Dhan Historical Data API
    candles = dhan.intraday_daily_minute_charts(
        security_id=sec_id,
        exchange_segment=segment,
        instrument_type=inst_type,
        from_date=from_date,
        to_date=to_date
    )
    return jsonify({"status": "success", "candles": candles})
```

---

## Chapter 13: Event-Driven Single-Instrument Backtesting

### 13.1 `backtester.py` Engine Mechanics
The backtesting engine iterates bar-by-bar through historical CSV data, evaluating strategy entry conditions, calculating realistic execution slippage (0.05%), and applying dynamic trailing stop-losses.

#### Core Performance Metrics Calculated:
1. **Total Net Profit / Loss (%):**
   $$\text{Total Return} = \frac{\text{Final Capital} - \text{Initial Capital}}{\text{Initial Capital}} \times 100$$
2. **Profit Factor:**
   $$\text{Profit Factor} = \frac{\sum \text{Gross Winning Trades}}{\sum \text{Gross Losing Trades}}$$
3. **Maximum Drawdown (MDD):**
   $$\text{MDD} = \max_{t \in (0, T)} \left( \frac{\text{Peak Value}_t - \text{Trough Value}_t}{\text{Peak Value}_t} \right)$$
4. **Annualized Sharpe Ratio:**
   $$\text{Sharpe} = \frac{\bar{R}_p - R_f}{\sigma_p} \times \sqrt{252}$$

---

## Chapter 14: Non-Linear Options Hedging Backtester

### 14.1 Multi-Leg Hedging Mechanics (`hedging_backtester.py`)
Standard backtesting engines only handle linear instruments (stocks and futures). Options have non-linear payoff curves due to Delta, Gamma, Theta, and Vega. 

`hedging_backtester.py` models:
- **Long Straddle:** Buy ATM Call + Buy ATM Put (Profits from massive volatility breakouts).
- **Short Straddle:** Sell ATM Call + Sell ATM Put (Profits from tight sideways consolidation).
- **Iron Condor:** Sell OTM Put Spread + Sell OTM Call Spread (Four-legged market-neutral structure).
- **Long Butterfly:** Buy 1 Lower Call, Sell 2 ATM Calls, Buy 1 Higher Call.

```text
Figure 14.1: Iron Condor Payoff Structure
Profit ▲
+Credit ├─── Wide Profit Plateau (Between Inner Short Strikes)
        │                       \                   /
    0.0 ┼────────────────────────\─────────────────/──────────► Spot Price
        │                         \               /
-MaxRisk├─── Capped Defined Loss ──┴─────────────┴──
Loss    ▼
```

---

## Chapter 15: Cryptocurrency Perpetual Futures Backtesting

### 15.1 Delta Exchange Perpetual Modeling (`crypto_backtest.py`)
Simulating crypto futures requires accounting for funding rates, exchange commissions, and leverage dynamics:
- **Taker Commission:** 0.05% of notional value on entry and exit.
- **GST:** 18% applied to brokerage fees.
- **Liquidation Price:**
  $$\text{Liquidation Price}_{\text{Long}} = \text{Entry Price} \times \left(1 - \frac{1}{\text{Leverage}} + \text{Maintenance Margin Rate}\right)$$

---

## Chapter 16: Technical Stock Screener & AI News Intelligence

### 16.1 On-Demand Screener (`ScreenerTab.jsx`)
Unlike continuous background daemons that consume server resources, the on-demand screener evaluates the entire 50-stock watchlist in a single batch on user request.

### 16.2 Financial Sentiment Intelligence with Google Gemini
`NewsTab.jsx` pulls live financial RSS feeds and submits them to Google Gemini (`gemini-3.8-flash`):
```python
from google import genai

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

prompt = f"""
Analyze the following financial headlines for {symbol} and generate:
1. Macroeconomic Sentiment: (BULLISH, BEARISH, or NEUTRAL)
2. Sentiment Score: (-1.0 to +1.0)
3. Key Corporate Catalyst: (Max 2 sentences)

Headlines:
{news_articles_text}
"""

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents=prompt
)
```

---

# Part V: Production Deployment & Beyond

---

## Chapter 17: Database Architecture & SQLite Design

### 17.1 Relational Schema Topography
The system uses two isolated SQLite database files operating in Write-Ahead Logging (WAL) mode:

```sql
-- algo_lab.db: paper_trades table
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

## Chapter 18: AWS Cloud Production at Zero Cost

### 18.1 AWS Free-Tier Infrastructure Architecture
The platform runs on an AWS EC2 `t3.micro` instance running Ubuntu 24.04 LTS (eligible for the 12-month AWS Free Tier).

```text
Figure 18.1: Production Cloud Architecture
Trader Client ──► Elastic IP ──► Nginx Reverse Proxy ──► Gunicorn WSGI ──► Flask App ──► SQLite (algo_lab.db)
                                                                ▲
                                                                └── systemd (Auto-Restart on Reboot)
Nightly Cron ──► sqlite3 .backup ──► aws s3 sync ──► Amazon S3 Bucket (Encrypted Backup)
```

### 18.2 Complete Production Deployment Commands
```bash
# 1. Update OS packages
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-venv git nodejs npm sqlite3

# 2. Clone repository and install dependencies
git clone https://github.com/techdeepdive/algo-trading.git
cd algo-trading
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 3. Build React 19 Frontend
cd frontend
npm install
npm run build
cd ..

# 4. Configure systemd supervisor (/etc/systemd/system/algoscan.service)
sudo nano /etc/systemd/system/algoscan.service

# 5. Enable and start daemon
sudo systemctl daemon-reload
sudo systemctl enable algoscan
sudo systemctl start algoscan
```

---

## Chapter 19: Extending to Other Brokers

### 19.1 Broker Abstraction Architecture
The platform can be extended to other brokers using an abstract base class pattern:
- **Zerodha KiteConnect:** Implements `kite.place_order()`.
- **Fyers API v3:** Uses OAuth2 authorization codes.
- **Angel One SmartAPI:** Authenticates via TOTP.
- **CoinDCX:** Connects to domestic Indian crypto trading pairs.

---

## Chapter 20: Quantitative Horizons & Institutional Scaling

### 20.1 Advanced Next Steps
1. **WebSocket Ticks:** Replacing 5-second polling with direct broker WebSocket binary streams.
2. **Machine Learning Signal Filters:** Training XGBoost or Random Forest classifiers on historical feature vectors to filter out false EMA crossovers during low-volatility regimes.
3. **Multi-Account Trade Copier:** Broadcasting signals from a master account across multiple sub-accounts.

---

# Back Matter

### Appendix A: Complete REST API Reference
*(Comprehensive reference of all 36 endpoints documented in [docs/api_routes_reference.md](file:///c:/Projects/AIProjects/algo-trading/docs/api_routes_reference.md))*

### Appendix B: Environment Variables Reference
Key environment variables required by the system:
- `DHAN_CLIENT_ID`, `DHAN_ACCESS_TOKEN`, `DHAN_PIN`, `DHAN_TOTP_SECRET`
- `DELTA_API_KEY`, `DELTA_API_SECRET`
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- `GEMINI_API_KEY`

### Appendix C: Operational Troubleshooting Guide
Common operational issues and their resolutions:
- **Token Expiry on Dhan**: Use TOTP automation to regenerate tokens daily at 06:00 IST.
- **Margin Errors**: Confirm hedge leg execution completes before short leg execution.
- **Clock Drift**: Sync system time via NTP (`sudo timedatectl set-ntp on`) to prevent HMAC signature rejections on Delta Exchange.

### Appendix D: Quantitative Glossary
Key quantitative and trading terms used throughout the book:
- **Theta ($\Theta$)**: Time decay rate of an option premium.
- **Credit Spread**: An options strategy where premium received exceeds premium paid.
- **Isolated Leverage**: Leverage applied strictly to a designated margin allocation, protecting the remaining account balance.

### Appendix E: Useful Resources & Bibliography
- Dhan Developer Portal: `https://dhanhq.co`
- Delta Exchange API Documentation: `https://docs.delta.exchange`
- Project Repository: `https://github.com/techdeepdive/algo-trading`

### About the Author
**Reev** is a senior software architect, quantitative developer, and the creator of **CodeTheMarket**. He specializes in high-throughput backend services, distributed systems, and algorithmic trading architecture across Indian equities and digital asset derivatives.
