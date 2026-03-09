# Scenario 4.3. Subledger

## Scenarios

- **Success Scenarios**
  - [4.3.S1 Report filtered by date.](/accounting-reports/trial-balance/scenarios/s1)
- **Failure Scenarios**
  - [**4.3.F1 User isn't authenticated.**](/accounting-reports/trial-balance/scenarios/f1)

## 4.3.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/trial-balance` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}