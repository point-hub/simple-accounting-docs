---
aside: false
---

# Scenario 2.2. Update Email

## 2.2.F2. Email update fails when required fields are empty.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](./menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](./pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click email button

![alt text](./email-button.jpg){.shadow-img}

- `THEN` user redirected to update email page

![alt text](./email-s1-1.jpg){.shadow-img}

- `WHEN` user clears email input

![alt text](./email-f2-1.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./email-f2-2.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](./email-f2-3.jpg){.shadow-img}

- `THEN` user sees error message "The email field is required."

![alt text](./email-f2-4.jpg){.shadow-img}
