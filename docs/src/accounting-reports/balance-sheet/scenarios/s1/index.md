# Scenario 5.5. Balance Sheet

## 5.5.S1. User can view filtered balance sheet report.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Accounting Reports"

![alt text](./home.png){.shadow-img}

- `AND` user click menu "Balance Sheet"

![alt text](./accounting-reports-menu.png){.shadow-img}

- `THEN` user see "TOTAL ASSET" is "6,800,000.00"
- `AND` user see "TOTAL LIABILITY" is "2,000,000.00"
- `AND` user see "TOTAL EQUITY" is "4,800,000.00"
- `AND` user see "TOTAL LIABILITY + EQUITY" is "6,800,000.00"

![alt text](./balance-sheet.png){.shadow-img}