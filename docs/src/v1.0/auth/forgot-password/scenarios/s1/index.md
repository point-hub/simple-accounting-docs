---
aside: false
---

# Scenario 1.5. Forgot Password

## 1.5.S1. User can request password reset successfully.

- `GIVEN` user visit `/signin`
- `WHEN` user click button "forgot-password"

![alt text](./signin-page.png){.shadow-img}

- `WHEN` user type "admin@example.com" into input "email"
- `AND` user click button "request-reset-password"

![alt text](./forgot-password-fill-form.png){.shadow-img}

- `THEN` user redirected to home page.

![alt text](./request-password-success.png){.shadow-img}