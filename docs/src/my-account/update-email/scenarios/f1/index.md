# Scenario 2.2. Update Email

## Scenarios

- **Success Scenarios**
  - [2.2.S1 User successfully update email.](/my-account/update-email/scenarios/s1)
- **Failure Scenarios**
  - [**2.2.F1 User isn't authenticated.**](/my-account/update-email/scenarios/f1)
  - [2.2.F2. The required field is empty.](/my-account/update-email/scenarios/f2)
  - [2.2.F3. The Email is already exists.](/my-account/update-email/scenarios/f3)

## 2.2.F1. User isn't authenticated.

- `GIVEN` user visit `/my-account/update-email` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}