# Scenario 5.3. Subledger

## Scenarios

- **Success Scenarios**
  - [5.3.S1 Filtered report.](/accounting-reports/trial-balance/scenarios/s1)
- **Failure Scenarios**
  - [**5.3.F1 User isn't authenticated.**](/accounting-reports/trial-balance/scenarios/f1)

## 5.3.F1. User isn't authenticated.

- `GIVEN` user visit `/accounting-reports/trial-balance` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}