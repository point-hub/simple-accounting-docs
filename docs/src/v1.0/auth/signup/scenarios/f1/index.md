---
aside: false
---

# Scenario 1.1. Signup

## 1.1.F1. Sign up fails when required fields are empty.

- `GIVEN` user visit signup page
- `WHEN` user click button "sign-up"

![alt text](./signup.png){.shadow-img}

- `THEN` user see "The username field is required"
- `AND` user see "The email field is required"
- `AND` user see "The password field is required"

![alt text](./signup-required.png){.shadow-img}

