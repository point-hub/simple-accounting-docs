---
aside: false
---

# Scenario 4.1. Import Journals

## 4.1.F3. Journal import fails when COA number or COA name does not match any record.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Journals"

![alt text](../s1/menu-journals.jpg){.shadow-img}

- `THEN` user redirected to list journals page
- `WHEN` user click import button

![alt text](../s1/import-button.jpg){.shadow-img}

- `THEN` user redirected to import journals page
- `WHEN` user upload csv file in the upload form

![alt text](../s1/form-upload.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](../s1/save-button.jpg){.shadow-img}

- `THEN` user see notification "Import completed with some invalid fields. Please review and fix the errors"

![alt text](../s1/f3-notification.jpg){.shadow-img}

- `THEN` user sees error message "Row 9. coa number "40101" and coa name "Wrong Name" combination not found."
- `AND` user sees error message "Row 10. coa number "Wrong Number" and coa name "Cost of Sales" combination not found."

![alt text](../s1/f3-error-message.jpg){.shadow-img}
