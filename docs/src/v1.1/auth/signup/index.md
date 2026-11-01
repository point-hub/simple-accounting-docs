# Signup

The Signup feature allows new users to create an account in the application. It is the first step for accessing the system and using its accounting features.

::: danger NOTE
The signup endpoint is currently hidden because it is intended for internal use only.
:::

## Scenarios

- **Success Scenarios**
  - [1.1.S1. User can sign up successfully.](./scenarios/s1/)
- **Failure Scenarios**
  - [1.1.F1. Sign up fails when required fields are empty.](./scenarios/f1/)
  - [1.1.F2. Sign up fails when username already exists.](./scenarios/f2/)
  - [1.1.F3. Sign up fails when email already exists.](./scenarios/f3/)
  - [1.1.F4. Sign up fails when password is not strong enough.](./scenarios/f4/)
  - [1.1.F5. Sign up fails when password confirmation does not match.](./scenarios/f5/)
  
  ## Test Report

  [https://simple-accounting-test-report.netlify.app/1.1](https://simple-accounting-test-report.netlify.app/1.1)