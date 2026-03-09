# Scenario 2.3. Update Password

## Scenarios

- **Success Scenarios**
  - [2.3.S1 User successfully update password.](/my-account/update-password/scenarios/s1)
- **Failure Scenarios**
  - [**2.3.F1 User isn't authenticated.**](/my-account/update-password/scenarios/f1)
  - [2.3.F2. The required field is empty.](/my-account/update-password/scenarios/f2)
  - [2.3.F3. Password is not strong enough.](/my-account/update-password/scenarios/f3)
  - [2.3.F4. Password confirmation is not match.](/my-account/update-password/scenarios/f4)

## 2.3.F1. User isn't authenticated.

- `GIVEN` user visit `/my-account/update-password` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}