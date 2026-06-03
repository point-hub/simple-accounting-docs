# Scenario 3.2. List Chart of Accounts

## 3.2.F1. COA list retrieval fails when user is not authenticated.

- `GIVEN` user visit `/chart-of-accounts` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}