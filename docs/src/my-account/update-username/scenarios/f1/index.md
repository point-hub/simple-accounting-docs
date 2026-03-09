# Scenario 2.1. Update Username

## Scenarios

- **Success Scenarios**
  - [2.1.S1 User successfully update username.](/my-account/update-username/scenarios/s1)
- **Failure Scenarios**
  - [**2.1.F1 User isn't authenticated.**](/my-account/update-username/scenarios/f1)
  - [2.1.F2. The required field is empty.](/my-account/update-username/scenarios/f2)
  - [2.1.F3. The username is already exists.](/my-account/update-username/scenarios/f3)

## 2.1.F1. User isn't authenticated.

- `GIVEN` user visit `/my-account/update-username` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}