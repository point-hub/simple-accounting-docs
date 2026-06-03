---
aside: false
---

# Scenario 1.1. Signup

## 1.1.F5. Sign up fails when password confirmation does not match.

- `GIVEN` user visit signup page

![alt text](./signup.png){.shadow-img}

- `WHEN` user type "admin2" into input "username"
- `AND` user type "admin2@example.com" into input "email"
- `AND` user type "admin123" into input "password"
- `AND` user type "a" into input "confirm-password"
- `AND` user click button "sign-up"
- `THEN` user see "Password do not match"

![alt text](./signup-password-confirmation-not-match.png){.shadow-img}

