---
outline: deep
---

# ADR#002

## Topic
Does the application need to restrict certain users from accessing specific features?

## Problem
Determine whether Simple Accounting should implement a role and permission system to control feature access for different users.

## Options

### 1. Use a permission system

Implement roles and permissions to restrict user access based on responsibilities or organizational roles.

**Advantages**
- Better control over user access
- Improve security for sensitive features and data
- Support multi-user organizations with different responsibilities
- Easier to manage operational boundaries between users

**Disadvantages**
- Increases development complexity
- Requires additional UI and permission management flows
- Adds maintenance overhead
- May introduce unnecessary complexity for early-stage users

---

### 2. Do not use a permission system

Allow all users within the application to access the same features without restrictions.

**Advantages**
- Keep the product simple and easy to use
- Faster development and delivery
- Reduce maintenance complexity
- Suitable for small businesses or single-user workflows
- Allow the team to focus on core accounting features

**Disadvantages**
- No restriction for sensitive actions or data
- Less suitable for organizations with multiple operational roles
- Potential risk of accidental changes by users

## Decision
Choose Option 2: Do not use a permission system.

## Reasoning
- Focus on product simplicity during the early stage.
- Avoid implementing complexity that is not yet required by target users.
- Prioritize development resources toward core accounting and reporting features.
- Most initial users are expected to operate the system in small teams or single-user environments.

## Discussion History

### 25 November 2025
The team discussed & decided whether role and permission management was necessary for the initial product release.

| Participants | Roles |
| --- | --- |
| Aini | Product Coordinator |
| Kartika | Project Owner |