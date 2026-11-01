---
aside: false
---

# Scenario 2.3. Update Password

## 2.3.S1. User can update password successfully.

- `GIVEN` user already logged in
- `AND` user visit home
- `WHEN` user click top right menu button

![alt text](./menu.jpg){.shadow-img}

- `THEN` user sees the popup menu
- `WHEN` user click my account button

![alt text](./pop-menu.jpg){.shadow-img}

- `THEN` user redirected to account page
- `WHEN` user click password button

![alt text](./password-button.jpg){.shadow-img}

- `THEN` user redirected to update password page

![alt text](./password-s1-1.jpg){.shadow-img}

- `WHEN` user types "Admin123!" in the current password input 
- `AND` user types "Admin123@" in the new password input 
- `AND` user types "Admin123@" in the password confirmation input 

![alt text](./password-s1-2.jpg){.shadow-img}

- `WHEN` user click save button

![alt text](./password-s1-3.jpg){.shadow-img}

- `THEN` user sees success notification "Update success"

![alt text](./password-s1-4.jpg){.shadow-img}
