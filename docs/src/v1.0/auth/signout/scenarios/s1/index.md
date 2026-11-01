---
aside: false
---

# Scenario 1.4. Signout

## 1.4.S1. User can sign out successfully.

- `GIVEN` user already logged in
- `AND` user visit home

![alt text](./home.png){.shadow-img}

- `WHEN` user click account menu in top-right corner
- `AND` user click button "signout"

![alt text](./account-menu.png){.shadow-img}

- `THEN` user redirected to page "signin"

![alt text](./signin-page.png){.shadow-img}