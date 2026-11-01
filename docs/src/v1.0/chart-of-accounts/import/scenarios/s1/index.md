# Scenario 3.1. Import Chart of Account

## 3.1.S1. User can import chart of accounts (COA) successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Chart of Accounts"

![alt text](./home.png){.shadow-img}

- `WHEN` user click button "import"

![alt text](./coa-list.png){.shadow-img}

- `WHEN` user click "Download Template" button (step 1)
- `AND` user update their data to that csv (step 2)
- `AND` user upload the completed file (step 3)

![alt text](./coa-import.png){.shadow-img}

- `WHEN` user click "Save" button
- `THEN` user redirected to "Chart of Accounts - List" page
- `AND` user see notification "Import success"
- `AND` user see the data imported

![alt text](./coa-import-success.png){.shadow-img}