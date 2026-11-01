---
aside: false
---

# Scenario 1.5. Forgot Password

## 1.5.F1. Password reset request fails when required fields are empty.

- `GIVEN` user visit `/signin`
- `WHEN` user click button "forgot-password"

![alt text](./signin-page.png){.shadow-img}

- `WHEN` user click button "request-reset-password"

- `THEN` user see "The email field is required.".

![alt text](./request-password-fail.png){.shadow-img}