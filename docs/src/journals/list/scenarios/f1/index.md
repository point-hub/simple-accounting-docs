# Scenario 4.2. List Journals

## 4.2.F1. Journal list retrieval fails when user is not authenticated.

- `GIVEN` user visit `/journals` url without signin
- `THEN` user redirected to `Sign In` page

![alt text](./signin-page.png){.shadow-img}