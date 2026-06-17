---
outline: deep
---

# ADR-003

## Topic
How should we handle date formats during the import process to prevent ambiguous date interpretation?

## Problem
Currently, we use the standard ISO 8601 date format for imported files. However, users are still able to enter dates in an incorrect format, and our system automatically interprets those values based on assumptions instead of validating them.

As a result, some imported transactions are saved with unintended dates, causing them to be missing from reports for the expected period.

For example, a user intended to enter `1 February 2026`, but provided the date in a different format. The system interpreted it as `2 January 2026`, leading to the transaction being recorded under the wrong date and consequently not appearing in the expected report.

**Root cause:** The import process does not strictly validate the date format before processing the data, allowing ambiguous date values to be interpreted automatically.

**Proposed solution:** Enforce strict ISO 8601 date validation during import and reject any rows that do not exactly match the expected format, instead of attempting to infer or convert ambiguous dates automatically.

## Options

### 1. Enforce strict yyyy-MM-dd HH:mm:ss format

Only accept dates that exactly match the yyyy-MM-dd HH:mm:ss format during import. Any other format will be rejected with a validation error.

**Advantages**
- Eliminates ambiguity and prevents the system from making incorrect assumptions.
- Ensures imported data is consistent and predictable.
- Makes troubleshooting easier because all imported dates follow a single standard.
- Reduces the risk of transactions appearing in the wrong reporting period.

**Disadvantages**
- Less user-friendly because users must always provide the complete date and time.
- Existing import files may need to be updated before they can be imported successfully.
- Users are more likely to encounter validation errors if they are unfamiliar with the required format.

---

### 2. Support simplified date formats for better usability.

Accept a limited set of additional formats and automatically convert them to the standard yyyy-MM-dd HH:mm:ss format.

**Accepted formats:**

- yyyy-MM-dd → automatically converted to `yyyy-MM-dd HH:mm:ss`
  - Example: `2025-12-31` → `2025-12-31 00:00:00`
- yyyy-MM-dd HH:mm → automatically converted to `yyyy-MM-dd HH:mm:ss`
  - Example: `2025-12-31 23:59` → `2025-12-31 23:59:00`

**Advantages**
- More user-friendly while still maintaining an unambiguous date format.
- Reduces manual effort by allowing users to omit seconds when unnecessary.
- Minimizes import failures for common user input patterns.
- Still preserves a single internal date-time standard after conversion.

**Disadvantages**
- Slightly increases implementation complexity due to additional validation and conversion logic.
- Users may expect even more date formats to be supported in the future.
- Requires clear documentation so users understand which formats are accepted.

### 3. Add the expected date format to the Excel template

Include the expected date format (yyyy-MM-dd HH:mm:ss) in the Excel template to clearly guide users before they import data.

Possible implementations:

- Add the expected format in the column header.
- Add instructions in a dedicated "Notes" section.
- Provide example values in the template.

**Advantages**
- Helps users understand the expected input format before importing data.
- Reduces user errors and validation failures.
- Requires minimal implementation effort.
- Improves the overall import experience.

**Disadvantages**
- Relies on users reading and following the instructions.
- Does not prevent incorrect data from being entered.
- Must be combined with proper validation to be effective.

## Decision
Choose Option 1, 2 & 3.

## Reasoning
- Enforce strict validation to prevent ambiguous dates from being interpreted incorrectly.
- Improve usability by accepting a small set of predefined, unambiguous date formats.
- Reject all other date formats instead of relying on automatic assumptions.
- Standardize all imported values to yyyy-MM-dd HH:mm:ss before saving them to the database.
- Balance data integrity and user experience without introducing ambiguity.

## Discussion History

### 10 June 2026

The team discussed the issue, identified the root cause, and evaluated potential solutions to prevent ambiguous date interpretation during the import process.

| Participants | Roles |
| --- | --- |
| Martien | Software Architect |
| Kartika | Project Owner |