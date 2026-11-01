# Update Password

The Update Password page allows users to change their current password while logged into the application. This feature helps maintain account security and gives users control over their login credentials.

Unlike Reset Password, this feature is used when the user still remembers their current password.

## Scenarios

- **Success Scenarios**
  - [2.3.S1. User can update password successfully.](./scenarios/s1/)
- **Failure Scenarios**
  - [2.3.F1. Password update fails when user is not authenticated.](./scenarios/f1/)
  - [2.3.F2. Password update fails when required fields are empty.](./scenarios/f2/)
  - [2.3.F3. Password update fails when password is not strong enough.](./scenarios/f3/)
  - [2.3.F4. Password update fails when password confirmation does not match.](./scenarios/f4/)

  ## Test Report

  [https://simple-accounting-test-report.netlify.app/2.3](https://simple-accounting-test-report.netlify.app/2.3)