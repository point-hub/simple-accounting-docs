# Scenario 4.1. General Ledger

## Scenarios

- **Success Scenarios**
  - [4.1.S1 Report filtered by date.](/accounting-reports/general-ledger/scenarios/s1)
- **Failure Scenarios**
  - [**4.1.F1 User isn't authenticated.**](/accounting-reports/general-ledger/scenarios/f1)

## 4.1.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/general-ledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}