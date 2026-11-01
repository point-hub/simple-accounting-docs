---
aside: false
---

# Scenario 2.2. Update Email

## 2.2.F1. Email update fails when user is not authenticated.

- `GIVEN` user visit `/my-account/update-email` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}