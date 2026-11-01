# Scenario 2.1. Update Username

## 2.1.F3. Username update fails when username already exists.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](./menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](./pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click username button

![alt text](./username-button.jpg){.shadow-img}

- `THEN` user redirected to update username page

![alt text](./username-s1-1.jpg){.shadow-img}

- `WHEN` user changes username input from "admin" to "janedoe"

![alt text](./username-f3-1.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./username-f3-2.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed due to duplicate values."

![alt text](./username-f3-3.jpg){.shadow-img}

- `THEN` user sees error message "The username field must be unique."

![alt text](./username-f3-4.jpg){.shadow-img}