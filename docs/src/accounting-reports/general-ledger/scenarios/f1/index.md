# Scenario 5.1. General Ledger

## Scenarios

- **Success Scenarios**
  - [5.1.S1 Filtered report.](/accounting-reports/general-ledger/scenarios/s1)
- **Failure Scenarios**
  - [**5.1.F1 User isn't authenticated.**](/accounting-reports/general-ledger/scenarios/f1)

## 5.1.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/general-ledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}