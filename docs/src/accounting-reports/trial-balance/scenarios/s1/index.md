# Scenario 5.3. Trial Balance

## Scenarios

- **Success Scenarios**
  - [**5.3.S1 Filtered report.**](/accounting-reports/trial-balance/scenarios/s1)
- **Failure Scenarios**
  - [5.3.F1 User isn't authenticated.](/accounting-reports/trial-balance/scenarios/f1)

## 5.3.S1 Filtered report.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Accounting Reports"

![alt text](./home.png){.shadow-img}

- `AND` user click menu "Trial Balance"

![alt text](./accounting-reports-menu.png){.shadow-img}

- `THEN` user see "DATE" header
- `AND` user see "COA NUMBER" header
- `AND` user see "COA NAME" header
- `AND` user see "OPENING BALANCE" header
- `AND` user see "DEBIT" header
- `AND` user see "CREDIT" header
- `AND` user see "ENDING BALANCE" header

![alt text](./trial-balance.png){.shadow-img}