# Scenario 5.5. Balance Sheet

## Scenarios

- **Success Scenarios**
  - [5.5.S1 Report filtered by date.](/accounting-reports/balance-sheet/scenarios/s1)
- **Failure Scenarios**
  - [**5.5.F1 User isn't authenticated.**](/accounting-reports/balance-sheet/scenarios/f1)

## 5.5.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/balance-sheet` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}