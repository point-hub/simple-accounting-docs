# Reset Password

The Reset Password feature allows users to create a new password after requesting a password reset through the Forgot Password process. It ensures secure account recovery while protecting against unauthorized access.

This page is accessed through a secure, time-limited reset link sent to the user’s registered email address.

## Scenarios

- **Success Scenarios**
  - [1.6.S1. User can reset password successfully.](/auth/reset-password/scenarios/s1/)
- **Failure Scenarios**
  - [1.6.F1. Password reset fails when required fields are empty.](/auth/reset-password/scenarios/f1/)
  - [1.6.F2. Password reset fails when password is not strong enough.](/auth/reset-password/scenarios/f2/)
  - [1.6.F3. Password reset fails when password confirmation does not match.](/auth/reset-password/scenarios/f3/)