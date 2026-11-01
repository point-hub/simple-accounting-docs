# Scenario 5.5. Balance Sheet

## 5.5.F1. Balance sheet report fails when user is not authenticated.

- `GIVEN` user visit `/accounting-reports/balance-sheet` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}