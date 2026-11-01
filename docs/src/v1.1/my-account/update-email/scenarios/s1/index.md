# Scenario 2.1. Update Email

## 2.1.S1. User can update email successfully.

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

- `WHEN` user changes email input from "admin@example.com" to "johndoe@example.com"

![alt text](./email-s1-2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./email-s1-3.jpg){.shadow-img}

- `THEN` user sees popup password confirmation

![alt text](./email-s1-4.jpg){.shadow-img}

- `WHEN` user types "Admin123!" in the password input

![alt text](./email-s1-5.jpg){.shadow-img}

- `WHEN` user clicks confirm button

![alt text](./email-s1-6.jpg){.shadow-img}

- `THEN` user sees success notification "Update success, Until verification is completed, your account will continue to use your existing email address."

![alt text](./email-s1-7.jpg){.shadow-img}