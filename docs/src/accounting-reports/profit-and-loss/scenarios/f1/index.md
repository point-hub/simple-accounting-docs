# Scenario 4.4. Profit & Loss

## Scenarios

- **Success Scenarios**
  - [4.4.S1 Report filtered by date.](/accounting-reports/profit-and-loss/scenarios/s1)
- **Failure Scenarios**
  - [**4.4.F1 User isn't authenticated.**](/accounting-reports/profit-and-loss/scenarios/f1)

## 4.4.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/profit-and-loss` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}