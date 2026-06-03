# Scenario 4.1. Import Journals

## 4.1.F4. Journal import fails when debit and credit amounts are not balanced.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Journals"

![alt text](./home.png){.shadow-img}

- `WHEN` user click button "import"

![alt text](./journal-list.png){.shadow-img}

- `WHEN` user click "Download Template" button (step 1)
- `AND` user update their data to that csv (step 2)
- `AND` user upload the completed file (step 3)

![alt text](./journal-import.png){.shadow-img}

- `WHEN` user click "Save" button
- `THEN` user see notification "Import failed."
- `AND` user see notification "The journal debit and credit amounts are not balanced."

![alt text](./journal-import-failed.png){.shadow-img}