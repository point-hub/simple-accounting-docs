---
outline: deep
---

# v1.0.3 - Import Header Validation

## Problem

The import features currently do not properly validate the headers of uploaded files before processing the data.

This can cause import failures and unclear error message when users upload files with missing, incorrect, or unsupported column headers.

**The following problems need to be addressed:**

1. Import Chart of Accounts
2. Import Journals

**References:**

- Reference: [ADR#005](/architecture-decision-records/005/) 

## Solution

Add header validation to the import process for both Chart of Accounts and Journals.

Before processing the uploaded file, the system must validate that:

- All required headers are present.
- Header names match the expected import template.
- Unexpected or unsupported headers are handled appropriately.
- The user receives a clear validation error when the uploaded headers are invalid.

This ensures that invalid files are rejected before any data is imported.

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
| [3.1.F8. COA import fails when the headers are invalid.](/chart-of-accounts/import/scenarios/f8/) |
|                                                                                                                                                          |

### 4.1. Import Journal

| 4.1.F Failed Scenarios |
| ---- |
| [4.1.F7. Journal import fails when the headers are invalid.](/journals/import/scenarios/f7/) |

