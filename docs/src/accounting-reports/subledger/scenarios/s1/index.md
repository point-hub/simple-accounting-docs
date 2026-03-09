# Scenario 5.2. General Ledger

## Scenarios

- **Success Scenarios**
  - [**5.2.S1 Filtered report.**](/accounting-reports/general-ledger/scenarios/s1)
- **Failure Scenarios**
  - [5.2.F1 User isn't authenticated.](/accounting-reports/general-ledger/scenarios/f1)

## 5.2.S1 Filtered report.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Accounting Reports"

![alt text](./home.png){.shadow-img}

- `AND` user click menu "Subledger"

![alt text](./accounting-reports-menu.png){.shadow-img}

- `THEN` user see "DATE" header
- `AND` user see "FORM NUMBER" header
- `AND` user see "DESCRIPTION" header
- `AND` user see "DEBIT" header
- `AND` user see "CREDIT" header
- `AND` user see "BALANCE" header

![alt text](./subledger.png){.shadow-img}