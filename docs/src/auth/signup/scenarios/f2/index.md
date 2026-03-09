# Scenario 1.1. Signup

## Scenarios

- **Success Scenarios**
  - [1.1.S1. User successfully signup.](/auth/signup/scenarios/s1)
- **Failure Scenarios**
  - [1.1.F1. The required fields is empty.](/auth/signup/scenarios/f1)
  - [**1.1.F2. The username is already exists.**](/auth/signup/scenarios/f2)
  - [1.1.F3. The email is already exists.](/auth/signup/scenarios/f3)
  - [1.1.F4. Password is not strong enough.](/auth/signup/scenarios/f4)
  - [1.1.F5. Password confirmation is not match.](/auth/signup/scenarios/f5)
  
## 1.1.F2 The username is already exists

- `GIVEN` user visit signup page

![alt text](./signup.png){.shadow-img}

- `WHEN` user type "admin" into input "username"
- `AND` user type "admin2@example.com" into input "email"
- `AND` user type "admin1234" into input "password"
- `AND` user type "admin1234" into input "confirm-password"
- `AND` user click button "sign-up"
- `THEN` user see "The username field already exists"

![alt text](./signup-username-exists.png){.shadow-img}

