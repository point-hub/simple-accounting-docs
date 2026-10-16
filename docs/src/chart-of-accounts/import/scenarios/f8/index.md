# Scenario 3.1. Import Chart of Account

Reference: [ADR#005](/architecture-decision-records/005/)

## 3.1.F8. COA import fails when the headers are invalid.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Chart of Accounts"

![alt text](../s1/menu-coa.jpg){.shadow-img}

- `THEN` user redirected to list chart of account page
- `WHEN` user click import button

![alt text](../s1/coa-import-button.jpg){.shadow-img}

- `THEN` user redirected to import chart of account page
- `WHEN` user upload csv file in the upload form

![alt text](../s1/upload-form.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](../s1/upload-save.jpg){.shadow-img}

- `THEN` user see notification "Import failed: The column header "type" at Column A, Row 1 is invalid. Please rename it to "type" according to the import template and try again."

![alt text](../s1/f8-notification.jpg){.shadow-img}