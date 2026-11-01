---
aside: false
---

# Scenario 2.1. Update Username

## 2.1.F1. Username update fails when user is not authenticated.

- `GIVEN` user visit `/my-account/update-username` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}