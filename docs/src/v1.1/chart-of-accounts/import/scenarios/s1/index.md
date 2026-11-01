# Scenario 3.1. Import Chart of Account

## 3.1.S1. User can import chart of accounts (COA) successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Chart of Accounts"

![alt text](./menu-coa.jpg){.shadow-img}

- `THEN` user redirected to list chart of account page
- `WHEN` user click import button

![alt text](./coa-import-button.jpg){.shadow-img}

- `THEN` user redirected to import chart of account page
- `WHEN` user click instruction button

![alt text](./upload-instruction.jpg){.shadow-img}

- `THEN` user sees popup import instructions

![alt text](./coa-import-instruction.jpg){.shadow-img}

- `WHEN` user click close button

![alt text](./coa-import-instruction-close.jpg){.shadow-img}

- `THEN` user sees popup import instructions disappear
- `WHEN` user upload csv file in the upload form

![alt text](./upload-form.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./upload-save.jpg){.shadow-img}

- `THEN` user see notification "Import success"

![alt text](./s1-notification.jpg){.shadow-img}