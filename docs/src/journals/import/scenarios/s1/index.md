---
aside: false
---

# Scenario 4.1. Import Journals

## 4.1.S1. User can import journals successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click menu "Journals"

![alt text](./menu-journals.jpg){.shadow-img}

- `THEN` user redirected to list journals page
- `WHEN` user click import button

![alt text](./import-button.jpg){.shadow-img}

- `THEN` user redirected to import journals page
- `WHEN` user click instruction button

![alt text](./instruction-button.jpg){.shadow-img}

- `THEN` user sees popup import instructions

![alt text](./popup-instruction.jpg){.shadow-img}

- `WHEN` user click close button

![alt text](./close-instruction.jpg){.shadow-img}

- `THEN` user sees popup import instructions disappear
- `WHEN` user upload csv file in the upload form

![alt text](./form-upload.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./save-button.jpg){.shadow-img}

- `THEN` user see notification "Import success"

![alt text](./success-notification.jpg){.shadow-img}