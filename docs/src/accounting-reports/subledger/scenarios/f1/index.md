# Scenario 5.2. Subledger

## Scenarios

- **Success Scenarios**
  - [5.2.S1 Filtered report.](/accounting-reports/subledger/scenarios/s1)
- **Failure Scenarios**
  - [**5.2.F1 User isn't authenticated.**](/accounting-reports/subledger/scenarios/f1)

## 5.2.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/subledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}