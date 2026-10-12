# Comprehensive API Routes Reference
**Brand:** CodeTheMarket  
**Author:** Reev  
**Backend:** Flask 3.0+ REST API Service  
**Total Endpoints Documented:** 36 routes across 10 functional modules

---

## 1. System & Authentication Routes

### `GET /`
- **Description:** Serves the production compiled React SPA single-page application (`frontend/dist/index.html`). Falls back to legacy Jinja template if build directory is absent.
- **Request Parameters:** None.
- **Response Format:** `text/html` (Web application markup).

### `GET /<path:path>`
- **Description:** Static file serving route for assets (JS, CSS, SVGs, favicon) in `frontend/dist`. Fallback rewrite to `index.html` to support HTML5 browser pushState history routing.
- **Request Parameters:** Path string.
- **Response Format:** Static asset or `index.html`.

### `POST /api/save_env`
- **Description:** Updates credentials and runtime variables inside the server `.env` file without requiring shell access.
- **Headers:** `Content-Type: application/json`
- **Request Body:**
```json
{
  "DHAN_CLIENT_ID": "YOUR_CLIENT_ID",
  "DHAN_ACCESS_TOKEN": "YOUR_ACCESS_TOKEN",
  "DHAN_PIN": "YOUR_PIN",
  "DHAN_TOTP_SECRET": "YOUR_TOTP_SECRET",
  "DELTA_API_KEY": "YOUR_DELTA_KEY",
  "DELTA_API_SECRET": "YOUR_DELTA_SECRET",
  "GEMINI_API_KEY": "YOUR_GEMINI_KEY",
  "TELEGRAM_BOT_TOKEN": "YOUR_BOT_TOKEN",
  "TELEGRAM_CHAT_ID": "YOUR_CHAT_ID"
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Environment variables saved successfully"
}
```

### `GET /api/get_env`
- **Description:** Retrieves current configured server credentials with sensitive tokens masked for security.
- **Response Format:**
```json
{
  "status": "success",
  "env": {
    "DHAN_CLIENT_ID": "YOUR_CLIENT_ID",
    "DHAN_ACCESS_TOKEN": "ey...[MASKED]",
    "DELTA_API_KEY": "d_key...[MASKED]",
    "TELEGRAM_CHAT_ID": "YOUR_CHAT_ID",
    "GEMINI_API_KEY": "AIza...[MASKED]"
  }
}
```

---

## 2. Indian Markets Scanner Routes (`scanner_backend.py`)

### `POST /api/scanner/start`
- **Description:** Spawns a background worker thread executing `run_scanner()` to continuously monitor stocks, indices, and MCX commodities using 5/15 EMA crossover and Williams %R.
- **Request Body (Optional overrides):**
```json
{
  "watchlist": "NIFTY50",
  "timeframe": "15m",
  "capital": 100000,
  "lot_size": 1
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Scanner started successfully"
}
```

### `POST /api/scanner/stop`
- **Description:** Signals the continuous scanning thread to gracefully terminate at the conclusion of its current evaluation loop.
- **Response Format:**
```json
{
  "status": "success",
  "message": "Scanner stop signal dispatched"
}
```

### `GET /api/scanner/status`
- **Description:** Inquires whether the background scanner thread is active and retrieves operational stats.
- **Response Format:**
```json
{
  "status": "success",
  "is_running": true,
  "uptime_seconds": 1420,
  "symbols_count": 53
}
```

### `GET /api/scanner/state`
- **Description:** Retrieves real-time calculated indicator snapshots (LTP, WPR, 5 EMA, 15 EMA, Signal) from the `scan_state` SQLite table.
- **Response Format:**
```json
{
  "status": "success",
  "data": [
    {
      "symbol": "RELIANCE",
      "ltp": 1342.50,
      "wpr": -18.4,
      "ema_fast": 1341.20,
      "ema_mid": 1338.90,
      "signal": "BUY",
      "last_updated": "2026-10-12 15:15:00"
    }
  ]
}
```

### `GET /api/scanner/symbols`
- **Description:** Returns the static universe of scrips monitored across all watchlist categories (NSE 50, NIFTY50, BANKNIFTY, SENSEX, Commodities).
- **Response Format:**
```json
{
  "status": "success",
  "symbols": ["RELIANCE", "TCS", "HDFCBANK", "NIFTY50", "BANKNIFTY", "SENSEX", "SILVERM", "GOLDM", "CRUDEOILM"]
}
```

---

## 3. Paper & Live Trade Execution Routes

### `GET /api/scanner/paper_trades`
- **Description:** Queries `paper_trades` table in `algo_lab.db`, recalculates real-time unrealized PnL against live Dhan quotes, calculates brokerages and GST, and returns consolidated ledger.
- **Response Format:**
```json
{
  "status": "success",
  "trades": [
    {
      "id": 14,
      "symbol": "NIFTY50",
      "trade_type": "BUY",
      "spread_type": "BULL_PUT_SPREAD",
      "leg1_symbol": "NIFTY 24OCT24 24800 PE",
      "leg2_symbol": "NIFTY 24OCT24 24600 PE",
      "lot_size": 2,
      "entry_time": "2026-10-12 11:30:00",
      "spot_entry": 24840.5,
      "leg1_entry_price": 95.50,
      "leg2_entry_price": 35.20,
      "net_premium_entry": 60.30,
      "stop_loss": 120.60,
      "target": 12.00,
      "status": "OPEN",
      "pnl": 1250.00,
      "is_live": 0
    }
  ],
  "stats": {
    "open_trades": 1,
    "closed_trades": 5,
    "capital_used": 150000,
    "live_pnl_amt": 1250.00,
    "live_pnl_pct": 0.83,
    "total_pnl_amt": 8420.00,
    "total_pnl_pct": 5.61,
    "base_brokerage": 120.00,
    "gst": 21.60,
    "total_brokerage": 141.60
  }
}
```

### `POST /api/scanner/execute_trade`
- **Description:** Initiates either a simulated paper trade or a live multi-leg spread execution on Dhan broker. If `is_live=True`, executes BUY hedge leg first to secure margin relief, followed by SELL short leg.
- **Request Body:**
```json
{
  "symbol": "NIFTY50",
  "signal": "BUY",
  "spread_type": "BULL_PUT_SPREAD",
  "lot_size": 2,
  "is_live": true,
  "custom_sl": 120.0,
  "custom_target": 15.0
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Live Bull Put Spread executed on Dhan (Orders: 1029384, 1029385)",
  "trade_id": 15
}
```

### `POST /api/scanner/exit_trade`
- **Description:** Closes an open trade in `algo_lab.db`. If the trade is live, places reverse squaring orders on Dhan (Short Buy Back first, Hedge Sell second).
- **Request Body:**
```json
{
  "trade_id": 14
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Trade #14 squared off successfully"
}
```

### `POST /api/scanner/ignore_trade`
- **Description:** Excludes a trade from automated stop-loss and target tracking in the scanner daemon, allowing manual discretion.
- **Request Body:**
```json
{
  "trade_id": 14
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Trade #14 flagged as ignored"
}
```

### `POST /api/scanner/clear_trades` / `POST /api/clear_paper_trades`
- **Description:** Clears all trade records from `paper_trades` in `algo_lab.db`.
- **Response Format:**
```json
{
  "status": "success",
  "message": "All paper trades deleted"
}
```

---

## 4. Dhan HQ Broker Integration Routes

### `GET /api/dhan/profile`
- **Description:** Returns profile metadata for the authenticated Dhan client (client ID, token validity, user name).
- **Response Format:**
```json
{
  "status": "success",
  "data": {
    "dhanClientId": "YOUR_CLIENT_ID",
    "tokenExpiry": "2026-10-13 06:00:00",
    "activeSegments": ["NSE_EQ", "NSE_FNO", "BSE_FNO", "MCX_COMM"]
  }
}
```

### `GET /api/dhan/funds`
- **Description:** Fetches live balance, collateral margin, margin used, and available trading limit from Dhan RMS.
- **Response Format:**
```json
{
  "status": "success",
  "funds": {
    "availMargin": 450250.00,
    "collateralAmount": 150000.00,
    "utilizedMargin": 85000.00,
    "cashBalance": 300250.00
  }
}
```

### `GET /api/dhan/positions`
- **Description:** Retrieves real-time broker positions and net PnL from Dhan API.
- **Response Format:**
```json
{
  "status": "success",
  "positions": [
    {
      "tradingSymbol": "NIFTY 24OCT24 24800 PE",
      "positionType": "SHORT",
      "netQty": -50,
      "buyAvg": 0.0,
      "sellAvg": 95.50,
      "realizedProfit": 0.0,
      "unrealizedProfit": 650.00
    }
  ]
}
```

### `GET /api/dhan/holdings`
- **Description:** Retrieves equity portfolio holdings from Dhan depository.
- **Response Format:**
```json
{
  "status": "success",
  "holdings": [
    {
      "tradingSymbol": "RELIANCE",
      "totalQty": 100,
      "dpQty": 100,
      "avgCostPrice": 1280.00,
      "lastTradedPrice": 1342.50
    }
  ]
}
```

### `GET /api/dhan/option_chain`
- **Description:** Fetches complete option chain strike data, open interest, IV, and implied Greeks for a specified underlying asset.
- **Query Parameters:**
  - `symbol` (e.g., `NIFTY`, `BANKNIFTY`, `RELIANCE`)
  - `expiry` (e.g., `2026-10-24`)
- **Response Format:**
```json
{
  "status": "success",
  "underlying_ltp": 24840.5,
  "strikes": [
    {
      "strike_price": 24800.0,
      "call_ltp": 120.4,
      "call_oi": 154000,
      "put_ltp": 95.5,
      "put_oi": 210000
    }
  ]
}
```

### `GET /api/dhan/historical_data`
- **Description:** Queries Dhan Intraday/Historical endpoints for OHLCV candlestick records.
- **Query Parameters:**
  - `symbol`: Instrument identifier.
  - `exchange_segment`: `NSE_EQ`, `NSE_FNO`, `BSE_FNO`, `MCX_COMM`.
  - `instrument_type`: `EQUITY`, `INDEX`, `FUTSTK`, `OPTSTK`, `FUTIDX`, `OPTIDX`.
  - `interval`: `1`, `5`, `15`, `60`, `DAY`.
  - `from_date`: `YYYY-MM-DD`.
  - `to_date`: `YYYY-MM-DD`.
- **Response Format:**
```json
{
  "status": "success",
  "candles": [
    {"timestamp": 1791800000, "open": 24800.0, "high": 24850.0, "low": 24790.0, "close": 24835.0, "volume": 120000}
  ]
}
```

### `GET /api/historical/download`
- **Description:** Generates and returns a downloadable CSV file containing historical OHLCV data.
- **Query Parameters:** Matching `/api/dhan/historical_data`.
- **Response Format:** `text/csv` attachment (`Content-Disposition: attachment; filename=...csv`).

---

## 5. Backtesting Engine Routes (`backtester.py`)

### `POST /api/backtest/run`
- **Description:** Executes historical single-instrument strategy simulations on stored CSV files with realistic slippage, trailing stops, and brokerage fees.
- **Request Body:**
```json
{
  "csv_file": "NIFTY_15m_2024.csv",
  "strategy": "EMA_WPR",
  "initial_capital": 100000,
  "lot_size": 1,
  "slippage_pct": 0.05,
  "trailing_sl_pct": 1.5,
  "start_date": "2024-01-01",
  "end_date": "2024-12-31"
}
```
- **Response Format:**
```json
{
  "status": "success",
  "metrics": {
    "total_trades": 84,
    "win_rate": 67.8,
    "total_return_pct": 42.5,
    "max_drawdown_pct": 8.4,
    "sharpe_ratio": 1.95,
    "profit_factor": 2.14
  },
  "equity_curve": [
    {"date": "2024-01-02", "capital": 101250},
    {"date": "2024-01-03", "capital": 102400}
  ],
  "trades": [...]
}
```

---

## 6. Hedging & Multi-Leg Strategy Routes (`hedging_backtester.py`)

### `POST /api/hedging/generate`
- **Description:** Synthesizes multi-leg option combinations (Straddles, Strangles, Condors, Butterflies) across historical strike data and compiles them into a unified backtesting dataframe.
- **Request Body:**
```json
{
  "strategy_type": "IRON_CONDOR",
  "symbol": "NIFTY50",
  "expiry": "MONTHLY",
  "strike_distance": 200,
  "hedge_distance": 400
}
```
- **Response Format:**
```json
{
  "status": "success",
  "csv_generated": "downloads/hedging_iron_condor_nifty.csv",
  "rows": 1250
}
```

### `POST /api/hedging/backtest`
- **Description:** Executes backtesting simulation on synthesized multi-leg option strategy datasets.
- **Request Body:**
```json
{
  "filename": "hedging_iron_condor_nifty.csv",
  "initial_capital": 200000,
  "target_pct": 50.0,
  "stop_loss_pct": 100.0
}
```
- **Response Format:**
```json
{
  "status": "success",
  "total_trades": 24,
  "win_rate": 79.1,
  "net_pnl": 48500.0,
  "max_drawdown": 12300.0
}
```

---

## 7. On-Demand Screener Routes

### `POST /api/screener/run`
- **Description:** Runs on-demand technical scans across all 50+ instruments without starting an infinite daemon loop.
- **Request Body:**
```json
{
  "strategy": "EMA_WPR",
  "timeframe": "15m",
  "segment": "EQUITY"
}
```
- **Response Format:**
```json
{
  "status": "success",
  "matches": [
    {"symbol": "INFY", "signal": "BUY", "ltp": 1940.0, "wpr": -14.2, "ema_cross": true}
  ]
}
```

---

## 8. AI Market Intelligence Routes (Google Gemini)

### `GET /api/news/market`
- **Description:** Aggregates live RSS market news (Moneycontrol, Economic Times) and passes summaries through Google Gemini (`gemini-2.5-flash` / `gemini-3.8-flash`) to generate structured macroeconomic insights.
- **Response Format:**
```json
{
  "status": "success",
  "ai_summary": "Indian markets consolidated today amid mixed global cues...",
  "sentiment": "NEUTRAL_BULLISH",
  "key_drivers": ["FII inflows in IT", "Crude oil stabilization"],
  "articles": [...]
}
```

### `GET /api/news/stock`
- **Description:** Generates stock-specific AI sentiment analysis and upcoming corporate catalyst assessments.
- **Query Parameters:** `symbol=RELIANCE`
- **Response Format:**
```json
{
  "status": "success",
  "symbol": "RELIANCE",
  "sentiment_score": 0.75,
  "analysis": "Technical structure remains solid above 20 EMA with robust retail earnings expectation."
}
```

---

## 9. Crypto Scanner & Trading Routes (Delta Exchange India)

### `GET /api/crypto/scanner/status`
- **Description:** Retrieves Delta crypto scanner runtime status and uptime.
- **Response Format:**
```json
{
  "status": "success",
  "is_running": true,
  "monitored_contracts": 28
}
```

### `POST /api/crypto/scanner/start`
- **Description:** Starts background scanning thread monitoring 28 Delta perpetual futures contracts (`crypto_scanner.py`).
- **Response Format:**
```json
{
  "status": "success",
  "message": "Crypto scanner started"
}
```

### `POST /api/crypto/scanner/stop`
- **Description:** Dispatches stop signal to crypto scanner background thread.
- **Response Format:**
```json
{
  "status": "success",
  "message": "Crypto scanner stopped"
}
```

### `GET /api/crypto/state`
- **Description:** Returns indicator states from `crypto_scan_state` and real-time open trade statistics with Delta taker fee (0.05% + 18% GST).
- **Response Format:**
```json
{
  "status": "success",
  "scanner_state": [
    {
      "symbol": "BTC",
      "ltp": 67800.5,
      "wpr": -16.4,
      "ema_fast": 67750.0,
      "ema_mid": 67400.0,
      "ema_slow": 66800.0,
      "signal": "BUY"
    }
  ],
  "stats": {
    "open_trades": 2,
    "closed_trades": 14,
    "capital_used": 20000,
    "live_pnl_amt": 840.50,
    "live_pnl_pct": 4.2,
    "total_pnl_amt": 5210.00,
    "total_pnl_pct": 26.05,
    "base_brokerage": 1500,
    "gst": 270,
    "total_brokerage": 1770
  }
}
```

### `GET /api/crypto/trades`
- **Description:** Fetches last 50 perpetual crypto positions recorded in `crypto_lab.db`.
- **Response Format:**
```json
[
  {
    "id": 8,
    "symbol": "SOL",
    "trade_type": "LONG",
    "entry_time": "2026-10-12 14:00:00",
    "entry_price": 175.20,
    "current_price": 182.40,
    "stop_loss": 170.00,
    "target": 182.20,
    "status": "CLOSED_TARGET",
    "pnl": 410.85
  }
]
```

### `POST /api/crypto/execute_trade`
- **Description:** Places manual perpetual futures market bracket order on Delta Exchange India via authenticated HMAC REST API. Configures 10x leverage, contract sizing, Stop-Loss, and Take-Profit brackets.
- **Headers Required:**
  - `Delta-Api-Key: string`
  - `Delta-Api-Secret: string`
- **Request Body:**
```json
{
  "symbol": "BTC",
  "signal": "LONG",
  "ltp": 67800.5,
  "sl": 65766.0,
  "tgt": 70512.0
}
```
- **Response Format:**
```json
{
  "status": "success",
  "message": "Placed LONG on BTC!"
}
```

### `POST /api/crypto/clear_trades`
- **Description:** Deletes all rows from `crypto_trades` table in `crypto_lab.db`.
- **Response Format:**
```json
{
  "status": "success",
  "message": "All crypto trades cleared."
}
```

### `POST /api/crypto/backtest`
- **Description:** Simulates perpetual crypto futures trading over historical Delta Exchange candles via `crypto_backtest.py`.
- **Request Body:**
```json
{
  "symbol": "BTC",
  "strategy_name": "EMA_WPR",
  "timeframe": "15m",
  "initial_capital": 100000.0,
  "leverage": 10.0,
  "target_pct": 40.0,
  "stop_loss_pct": 30.0,
  "trade_direction": "BOTH"
}
```
- **Response Format:**
```json
{
  "status": "success",
  "metrics": {
    "total_trades": 112,
    "win_rate": 64.2,
    "net_pnl_inr": 86450.0,
    "total_brokerage_inr": 13216.0
  },
  "trades": [...]
}
```

### `GET /api/crypto/balance`
- **Description:** Queries Delta Exchange India `/v2/wallet/balances` using HMAC signature to obtain live USDT and INR cash balances.
- **Response Format:**
```json
{
  "status": "success",
  "balance_inr": 85400.0,
  "balance_usdt": 993.02
}
```

---

## 10. Telegram Webhook & Callback Handlers (`telegram_listener.py`)

While running as an asynchronous polling thread (`getUpdates`), the Telegram integration listens for inline keyboard callback clicks dispatched by user actions on smartphone devices:

- `EXECUTE_<ID>`: Executes live Bull Put Spread or Bear Call Spread on Dhan.
- `IGNORE_<ID>`: Flags trade as ignored, preventing automated SL/Target closure.
- `EXIT_<ID>`: Triggers emergency square off of an active spread on Dhan.
- `CRYPTO_EXEC_<SYMBOL>_<DIRECTION>`: Executes live Delta perpetual bracket order directly from Telegram.
