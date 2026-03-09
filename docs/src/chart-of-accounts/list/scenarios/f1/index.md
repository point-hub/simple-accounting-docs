# Scenario 3.2. List Chart of Accounts

## Scenarios

- **Success Scenarios**
  - [3.2.S1. Display paginated chart of accounts data.](/chart-of-accounts/list/scenarios/s1)
- **Failure Scenarios**
  - [3.2.F1. User isn't authenticated.](/chart-of-accounts/list/scenarios/f1)

## 3.2.F1. User isn't authenticated.

- `GIVEN` user visit `/chart-of-accounts` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}