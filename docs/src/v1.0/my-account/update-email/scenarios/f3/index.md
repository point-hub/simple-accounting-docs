---
aside: false
---

# Scenario 2.2. Update Email

## 2.2.F3. Email update fails when email already exists.

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

- `WHEN` user changes email input from "admin@example.com" to "janedoe@example.com"

![alt text](./email-f3-1.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./email-f3-2.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed due to duplicate values."

![alt text](./email-f3-3.jpg){.shadow-img}

- `THEN` user sees error message "The email field must be unique."

![alt text](./email-f3-4.jpg){.shadow-img}