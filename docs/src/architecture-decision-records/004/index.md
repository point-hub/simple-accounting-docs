---
outline: [2,3]
---

# ADR#004

## Topic
How can we ensure imported journal data remains compatible with the reporting formulas?

## Problem
The reporting formulas, especially the `Profit & Loss` report, rely on specific assumptions about the imported journal data. However, several scenarios can produce inconsistent or invalid reports.

**The following issues have been identified:**

1. [Chart of Account (COA)](/chart-of-accounts/import/) data may not have an account category assigned correctly, making it impossible to map accounts to the [Profit & Loss formula](/accounting-reports/profit-and-loss/).
2. Journal entries with the same **Form Number** may contain different dates, creating inconsistencies because a single journal transaction should belong to a single transaction date.
    - **Example:**

    | Row | Date                | Form Number | COA Number | COA Name | Debit | Credit |
    |-----|---------------------|-------------| --- | --- | ---: | ---: |
    | 1   | 2026-06-01 00:00:00 | INVOICE#0001     | 10502 | Accounts Receivable | 10,000 | 0 |
    | 2   | 2026-06-02 00:00:00 | INVOICE#0001     | 40101 | Sales | 0 | 10,000 |
3. Imported data may not be ordered chronologically, resulting in reports being displayed in an incorrect sequence.
    - **Example 1:**

    | Row | Date                | Form Number |
    |-----|---------------------|-------------|
    | 1   | 2026-06-03 00:00:00 | PO#0003     |
    | 2   | 2026-06-01 00:00:00 | PO#0001     |
    | 3   | 2026-06-02 00:00:00 | PO#0002     |

    If the report displays data in the same order as the imported file, the report will appear as 

    `3 June → 1 June → 2 June` instead of `1 June → 2 June → 3 June`.

    - **Example 2:**

    | Row | Date                | Form Number |
    |-----|---------------------|-------------|
    | 1   | 2026-06-01 00:00:00 | PO#0001     |
    | 2   | 2026-06-01 00:00:00 | PO#0002     |
    | 3   | 2026-06-01 00:00:00 | PO#0003     |

    Since all records have the same date and time, the report should preserve the original row order from the imported file. Otherwise, the display order may become inconsistent.

These issues can compromise report accuracy and lead to inconsistent financial reporting.

## Options

### 1. Enforce COA category validation

Require all COA records used during import to have an [COA category](/chart-of-accounts/import/#import-chart-of-account) assigned according to the Profit & Loss formula.

**Advantages**
- Ensures every account can be mapped correctly to the reporting formulas.
- Prevents incomplete COA configurations from affecting reports.
- Improves report accuracy and consistency.

---

### 2. Enforce date consistency within the same form number

Reject imported data when rows with the same form number contain different dates.

**Advantages**
- Preserves transaction integrity.
- Prevents ambiguous journal entries.
- Simplifies report generation.

---

### 3. Apply sorting when generating reports

Do not rely on the import file order. Instead, sort the data when generating reports.

Recommended sorting order:

1. Sort by `date` in `ascending` order.
2. If multiple records have the same date, sort them by `row order` in `ascending` order.

## Decision

Implement option 1 & 2

## Reasoning
1. Implement option 1 to enforce COA category validation and improve data consistency.
2. Implement option 2 to enforce date consistency for records sharing the same form number.
3. Reject option 3. The application will not automatically sort data during report generation, as this introduces assumptions about the user's intended ordering. The system will preserve the order provided by the user to maintain flexibility.

Combining these approaches provides a reliable foundation for generating accurate and consistent financial reports.

## Discussion History

### 22 June 2026

Kartika reported in the Telegram Group (Dev 4069 - Simple Accounting) that, during application testing, the Profit & Loss report could not be generated because the imported [Chart of Account (COA)](/chart-of-accounts/import/) data was not assigned the appropriate coa_category values required by the report formula.

| Participants | Roles |
| --- | --- |
| Martien | Software Architect |
| Kartika | Project Owner |


### 23 June 2026

Kartika raised a concern in Telegram Group (Dev 4069 - Simple Accounting) that users might import data that is not sorted chronologically, which could result in reports being displayed in an incorrect order.

| Participants | Roles |
| --- | --- |
| Martien | Software Architect |
| Kartika | Project Owner |

### 24 June 2026

The team discussed potential issues, available options, and possible solutions, and agreed on a final decision.

| Participants | Roles |
| --- | --- |
| Martien | Software Architect |
| Kartika | Project Owner |