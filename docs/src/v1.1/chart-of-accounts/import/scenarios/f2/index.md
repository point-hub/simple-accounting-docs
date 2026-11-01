# Scenario 3.1. Import Chart of Account

## 3.1.F2. COA import fails when required fields are empty.

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

- `THEN` user sees notification "Import completed with some invalid fields. Please review and fix the errors"

![alt text](../s1/f2-notification.jpg){.shadow-img}

- `THEN` user sees error message "Row 2. The name field is required."
- `AND` user sees error message "Row 3. The category field is required."

![alt text](../s1/f2-error-message.jpg){.shadow-img}