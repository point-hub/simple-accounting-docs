---
aside: false
---

# Scenario 1.1. Signup

## 1.1.F3. Sign up fails when email already exists.

- `GIVEN` user visit signup page

![alt text](./signup.png){.shadow-img}

- `WHEN` user type "admin2" into input "username"
- `AND` user type "admin@example.com" into input "email"
- `AND` user type "admin1234" into input "password"
- `AND` user type "admin1234" into input "confirm-password"
- `AND` user click button "sign-up"
- `THEN` user see "The email field already exists"

![alt text](./signup-email-exists.png){.shadow-img}

