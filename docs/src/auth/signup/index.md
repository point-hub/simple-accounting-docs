# Signup

The Signup feature allows new users to create an account in the application. It is the first step for accessing the system and using its accounting features.

::: danger NOTE
The signup endpoint is currently hidden because it is intended for internal use only.
:::

## Scenarios

- **Success Scenarios**
  - [1.1.S1. User can sign up successfully.](/auth/signup/scenarios/s1/)
- **Failure Scenarios**
  - [1.1.F1. Sign up fails when required fields are empty.](/auth/signup/scenarios/f1/)
  - [1.1.F2. Sign up fails when username already exists.](/auth/signup/scenarios/f2/)
  - [1.1.F3. Sign up fails when email already exists.](/auth/signup/scenarios/f3/)
  - [1.1.F4. Sign up fails when password is not strong enough.](/auth/signup/scenarios/f4/)
  - [1.1.F5. Sign up fails when password confirmation does not match.](/auth/signup/scenarios/f5/)
  