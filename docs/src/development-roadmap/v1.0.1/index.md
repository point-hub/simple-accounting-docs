---
outline: deep
---

# v1.0.1 - Date Format Validation

## Problem

In version [v1.0.0 - Initial Release](/development-roadmap/v1.0.0/) the Journal Import feature allowed users to enter dates in an invalid format. As a result, even though the data was imported successfully, some records were saved with incorrect dates. 

For example, 01/02/2026 was intended to represent `1 February 2026`, as the expected format was dd/MM/yyyy. However, the system interpreted the value using the MM/dd/yyyy format, resulting in `2 January 2026` instead.

**References:**
- [ADR#003](/architecture-decision-records/003/index.md) How should we handle date formats during the import process to prevent ambiguous date interpretation?

## Solution

For the template file, we use the standard ISO 8601 [https://www.iso.org/iso-8601-date-and-time-format.html](https://www.iso.org/iso-8601-date-and-time-format.html) date-time format `yyyy-MM-dd HH:mm:ss` as an example to help users understand the expected date format. 

Additionally, to prevent users from importing files with an incorrect date format, we added a new validation failure scenario to check the date format before processing the import.

To improve user-friendliness, we also support simplified date formats.

**Accepted format:**

- `yyyy-MM-dd` → automatically converted to `yyyy-MM-dd HH:mm:ss`
  - Example: 2025-12-31 → 2025-12-31 00:00:00
- `yyyy-MM-dd HH:mm` → automatically converted to `yyyy-MM-dd HH:mm:ss`
  - Example: 2025-12-31 23:59 → 2025-12-31 23:59:00

## Features

| Feature                                  | Description                                                                          |
|------------------------------------------|--------------------------------------------------------------------------------------|
| [4. Journals](/journals/about/)          | Transaction management features for recording and reviewing financial journals.      |
| [4.1. Import Journal](/journals/import/) | Upload transaction data in bulk (CSV/Excel) to create journal entries automatically. |

## Scenarios

### 4.1. Import Journal

| 4.1.F Failed Scenarios |
| ---- |
| [4.1.F5. Journal import fails when the date format is invalid.](/journals/import/scenarios/f5/) |
