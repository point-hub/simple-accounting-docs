# Scenario 4.2. Subledger

## Scenarios

- **Success Scenarios**
  - [4.2.S1 Report filtered by date.](/accounting-reports/subledger/scenarios/s1)
- **Failure Scenarios**
  - [**4.2.F1 User isn't authenticated.**](/accounting-reports/subledger/scenarios/f1)

## 4.2.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/subledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}