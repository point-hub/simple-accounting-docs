---
aside: false
---

# Scenario 4.1. Import Journals

## 4.1.F1. Journal import fails when user is not authenticated.

- `GIVEN` user visit `/journals/import` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}