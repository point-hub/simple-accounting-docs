# Verify Email

The Verify Email feature confirms that the email address provided during signup belongs to the user. This process helps ensure account security and prevents the use of invalid or unauthorized email addresses.

After a user completes the signup process, the system sends a verification link to the registered email address. The user must click the link to activate their account.

## Scenarios

- **Success Scenarios**
  - [1.2.S1. User successfully signup.](/auth/verify-email/scenarios/s1)
- **Failure Scenarios**
  - [1.2.F1. The required fields is empty.](/auth/verify-email/scenarios/f1)
  - [1.2.F2. The verification code is invalid.](/auth/verify-email/scenarios/f2)