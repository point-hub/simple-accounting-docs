# Scenario 3.1. Import Chart of Account

## 3.1.F5. COA import fails when COA type is invalid.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Chart of Accounts"

![alt text](./home.png){.shadow-img}

- `WHEN` user click button "import"

![alt text](./coa-list.png){.shadow-img}

- `WHEN` user click "Download Template" button (step 1)
- `AND` the user updates the CSV file (step 2), where row 4 intentionally contains an invalid COA type `Assetx`
- `WHEN` user upload the completed file (step 3)

![alt text](./coa-import.png){.shadow-img}

- `WHEN` user click "Save" button
- `THEN` user see notification "Import failed: invalid type "Assetx" at row 4"

![alt text](./coa-import-failed.png){.shadow-img}