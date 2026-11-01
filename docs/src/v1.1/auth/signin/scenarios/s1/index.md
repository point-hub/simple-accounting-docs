---
aside: false
---

# Scenario 1.3. Signin

## 1.3.S1. User can sign in successfully.

- `GIVEN` user visit `/signin`

![alt text](./signin-page.png){.shadow-img}

- `WHEN` user type "admin" into input "username"
- `AND` user type "12345678" into input "password"
- `AND` user click button "sign-in"
- `THEN` user redirected to home page.

![alt text](./home.png){.shadow-img}