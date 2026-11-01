---
aside: false
---

# Scenario 1.6. Reset Password

## 1.6.S1. User can reset password successfully.

- `GIVEN` user receive an email
- `WHEN` user click button "reset-password"

![alt text](./reset-password-email.png){.shadow-img}

- `WHEN` user type "Admin123!" into input "new-password"
- `AND` user type "Admin123!" into input "confirm-password"
- `AND` user click button "reset-password"
- `THEN` user see "Reset Password Success".
- `AND` user redirected to signin page.

![alt text](./signin-page.png){.shadow-img}