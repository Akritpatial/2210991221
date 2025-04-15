# 🔢 Sliding Window Number Service

This is an Express.js server that fetches number streams (primes, Fibonacci, even, and random) from an external evaluation service and maintains a **sliding window of the last 10 unique numbers**, computing their average dynamically.

---

## 🚀 Features

- Authenticates with external API using provided credentials
- Fetches numbers of type:
  - `p` → Prime
  - `f` → Fibonacci
  - `e` → Even
  - `r` → Random
- Maintains a **sliding window** of 10 latest unique numbers
- Calculates and returns the **average** of the current window
- Provides previous and current window states for comparison

---

## 🔧 Technologies Used

- Node.js
- Express.js
- Axios

---
