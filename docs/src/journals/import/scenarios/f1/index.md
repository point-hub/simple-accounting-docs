# Scenario 4.1. Import Journals

## Scenarios

- **Success Scenarios**
  - [4.1.S1. User successfully import Journals.](/journals/import/scenarios/s1)
- **Failure Scenarios**
  - [**4.1.F1. User isn't authenticated.**](/journals/import/scenarios/f1)
  - [4.1.F2. The required fields is empty.](/journals/import/scenarios/f2)
  - [4.1.F3. The coa_number and coa_name do not match any record in the Chart of Accounts.](/journals/import/scenarios/f3)
  - [4.1.F4. The journal debit and credit amounts are not balanced.](/journals/import/scenarios/f4)

## 4.1.F1. User isn't authenticated.

- `GIVEN` user visit `/journals/import` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}