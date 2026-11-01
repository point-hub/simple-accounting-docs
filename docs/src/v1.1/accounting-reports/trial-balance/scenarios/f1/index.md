# Scenario 5.3. Subledger

## 5.3.F1. Trial balance report fails when user is not authenticated.

- `GIVEN` user visit `/accounting-reports/trial-balance` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}