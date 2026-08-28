---
aside: false
---

# Scenario 4.1. Import Journals

Reference: [ADR#005](/architecture-decision-records/005/)

## 4.1.F7. Journal import fails when the headers are invalid.

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
- `THEN` user see notification "Import failed: The column header "date" at Column A, Row 1 is invalid. Please rename it to "date" according to the import template and try again."

![alt text](./error.jpg){.shadow-img}