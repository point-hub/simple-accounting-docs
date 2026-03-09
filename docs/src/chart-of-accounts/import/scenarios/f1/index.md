# Scenario 3.1. Import Chart of Account

## Scenarios

- **Success Scenarios**
  - [3.1.S1. User successfully import COA.](/chart-of-accounts/import/scenarios/s1)
- **Failure Scenarios**
  - [**3.1.F1. User isn't authenticated.**](/chart-of-accounts/import/scenarios/f1)
  - [3.1.F2. The required fields is empty.](/chart-of-accounts/import/scenarios/f2)
  - [3.1.F3. The coa_number is already exists.](/chart-of-accounts/import/scenarios/f3)
  - [3.1.F4. The coa_name is already exists.](/chart-of-accounts/import/scenarios/f4)

## 3.1.F1. User isn't authenticated.

- `GIVEN` user visit `/chart-of-accounts` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}