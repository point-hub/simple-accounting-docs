# Scenario 5.1. General Ledger

## 5.1.F1. General ledger report fails when user is not authenticated.

- `GIVEN` user visit `/accounting-reports/general-ledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}