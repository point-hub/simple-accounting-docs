---
outline: [2,3]
---

# ADR#005

## Topic

How can we ensure error messages are clear and actionable for users?

## Problem

The import features currently return error messages that may be unclear, too technical, or do not provide enough information for users to understand and resolve the problem.

**The following issues have been identified:**

1. Invalid or missing headers may result in generic error messages that do not identify which headers are incorrect or missing.

2. Validation errors may expose technical or implementation-related messages that are difficult for users to understand.

3. Error messages may not provide enough information about how users can correct the uploaded file and retry the import.

These issues can make it difficult for users to identify the cause of an import failure and may require assistance from the development team to resolve the problem.

## Decision

All import validation errors should be converted into **clear, user-friendly, and actionable error messages**.

Error messages should:

- Clearly state that the import failed.
- Identify the specific problem.
- Identify the affected field, column, row, or data when applicable.
- Explain what the user needs to correct.

For example:

> **Import failed:** The required `type` column is missing from the uploaded file. Please add the column according to the import template and try again.

## Reasoning

1. provides the clearest experience for users who need to understand and resolve import errors.

2. Import validation errors are user-facing errors and should therefore communicate the problem in terms that users can understand rather than exposing internal application or library errors.

3. Actionable error messages reduce the need for users to contact the development team when correcting common import problems.

## Discussion History

### 26 August 2026

During testing of the import features, the team identified that some import errors were difficult for users to understand because the returned error messages did not clearly explain the cause of the failure or how the uploaded file should be corrected.

| Participants | Roles |
| --- | --- |
| Martien | Software Architect |
| Kartika | Project Owner |
