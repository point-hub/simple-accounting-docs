---
aside: false
---

# Scenario 2.3. Update Password

## 2.3.F4. Password update fails when password confirmation does not match.

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

- `WHEN` user types "Admin123!" in the current password field
- `AND` user types "Admin123@" in the new password field
- `AND` user types "Admin123#" in the password confirmation field
- `THEN` user sees error message "Password do not match"

![alt text](./password-f4-1.jpg){.shadow-img}