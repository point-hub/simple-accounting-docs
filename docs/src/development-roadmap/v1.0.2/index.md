---
outline: deep
---

# v1.0.2 - Import Data Validation

## Problem

The import process currently accepts data that may be structurally valid but logically inconsistent. These inconsistencies are not always detected until financial reports are generated, making them difficult to identify and correct.

**The following problems need to be addressed:**

1. A Chart of Account (COA) may contain an account **Type** or **Category** that is not supported by the system.
2. A Chart of Account (COA) may assign a **Category** that does not correspond to its **Type**, resulting in incorrect account classification.
3. Journal entries belonging to the same **Form Number** may contain different transaction dates, even though they represent a single accounting transaction.

These data inconsistencies can compromise accounting integrity and produce inaccurate financial reports.

**References:**
- [ADR#004](/architecture-decision-records/004/index.md) How can we ensure imported journal data remains compatible with the reporting formulas?

## Solution

Strengthen validation during the import process by:

1. Validating that every imported [Chart of Account (COA)](/chart-of-accounts/import/) has a valid **Type** and **Category**.
2. Ensuring the selected COA **Category** matches the specified COA **Type**.
3. Ensuring every journal transaction (same **Form Number**) uses a single transaction date.

These validations prevent invalid accounting data from entering the system and improve the reliability of financial reports.


## Features

| Feature                                                    | Description                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [3. Chart of Accounts](/chart-of-accounts/about/)          | Structured list of all accounts used by a company to record financial transactions.  |
| [3.1. Import Chart of Account](/chart-of-accounts/import/) | Upload chart of account data in bulk (CSV/Excel).                                    |
| [4. Journals](/journals/about/)                            | Transaction management features for recording and reviewing financial journals.      |
| [4.1. Import Journal](/journals/import/)                   | Upload transaction data in bulk (CSV/Excel) to create journal entries automatically. |

## Scenarios

### 3.1. Import Journal

| 3.1.F Failed Scenarios                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [3.1.F5. COA import fails when COA type is invalid.](/chart-of-accounts/import/scenarios/f5/)                                       |
| [3.1.F6. COA import fails when COA category is invalid.](/chart-of-accounts/import/scenarios/f6/)                                   |
| [3.1.F7. COA import fails when COA category does not belong to the selected COA type.](/chart-of-accounts/import/scenarios/f7/) |
|                                                                                                                                                          |

### 4.1. Import Journal

| 4.1.F Failed Scenarios |
| ---- |
| [4.1.F6. Journal import fails when rows with the same form number contain different dates.](/journals/import/scenarios/f6/) |

