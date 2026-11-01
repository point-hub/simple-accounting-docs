# Scenario 5.2. Subledger

## 5.2.F1. Subledger report fails when user is not authenticated.

- `GIVEN` user visit `/accounting-reports/subledger` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}