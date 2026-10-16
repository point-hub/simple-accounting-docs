---
aside: false
---

# Scenario 4.1. Import Journals

## 4.1.F2. Journal import fails when required fields are empty.

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

![alt text](../s1/f2-notification.jpg){.shadow-img}

- `THEN` user sees error message "Row 2. The date field is required."
- `AND` user sees error message "Row 3. The form number field is required."
- `AND` user sees error message "Row 4. The coa number field is required."
- `AND` user sees error message "Row 5. The coa name field is required."
- `AND` user sees error message "Row 6. The description field is required."
- `AND` user sees error message "Row 7. The debit field is required."
- `AND` user sees error message "Row 8. The credit field is required."

![alt text](../s1/f2-error-message.jpg){.shadow-img}
