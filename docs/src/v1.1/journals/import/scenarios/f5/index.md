---
aside: false
---

# Scenario 4.1. Import Journals

## 4.1.F5. Journal import fails when the date format is invalid.


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

![alt text](../s1/f5-notification.jpg){.shadow-img}

- `THEN` user sees error message "Row 11. invalid date format at row 2. Expected yyyy-MM-dd (ex: 2025-12-31)"

![alt text](../s1/f5-error-message.jpg){.shadow-img}
