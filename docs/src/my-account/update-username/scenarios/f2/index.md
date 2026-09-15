# Scenario 2.1. Update Username

## 2.1.F2. Username update fails when required fields are empty.

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

- `WHEN` user clears username input

![alt text](./username-f2-1.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./username-f2-2.jpg){.shadow-img}

- `THEN` user sees error notification "Validation failed, Please check the highlighted fields."

![alt text](./username-f2-3.jpg){.shadow-img}

- `THEN` user sees error message "The username field is required."

![alt text](./username-f2-4.jpg){.shadow-img}