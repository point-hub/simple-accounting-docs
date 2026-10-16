---
outline: deep
---

# v1.1.0 - UX Improvement for Handle Import Validation

## Problem

User feels pain when trying to import excel data, as every failure to import has to be checked back to spreadsheet.  

importing process also takes time and not user friendly

**The following problems need to be addressed:**

- Scenarios 3.1.S1 and 4.1.S1 only require screenshot and UI updates.
- The new flow for handling import failures is covered in scenarios 3.1.S2 and 4.1.S2.
- All failed scenarios need their error messages updated to align with scenarios 3.1.S2 and 4.1.S2.

**References:**

- Reference: [ADR#001](/architecture-decision-records/001/) 

## Solution

1. The system will support importing transaction data from CSV files.
2. If the import process fails due to invalid or incomplete data, the system will save the uploaded data as a draft and display the import errors inside the application. 
3. Users can review and update the data directly in the app, then submit the corrected data again without having to modify and re-upload the original CSV file.

## Features

| Feature                                                    | Description                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [3. Chart of Accounts](/chart-of-accounts/about/)          | Structured list of all accounts used by a company to record financial transactions.  |
| [3.1. Import Chart of Account](/chart-of-accounts/import/) | Upload chart of account data in bulk (CSV/Excel).                                    |
| [4. Journals](/journals/about/)                            | Transaction management features for recording and reviewing financial journals.      |
| [4.1. Import Journal](/journals/import/)                   | Upload transaction data in bulk (CSV/Excel) to create journal entries automatically. |

## Scenarios

### 3.1. Import Chart of Account

| 3.1.S Success Scenarios |
| ---- |
| [3.1.S1. User can import chart of accounts (COA) successfully.](/chart-of-accounts/import/scenarios/s1/) |
| [3.1.S2. User can fix failed import chart of accounts (COA) successfully.](/chart-of-accounts/import/scenarios/s2/) |

| 3.1.F Failed Scenarios |
| --- |
| [3.1.F2. COA import fails when required fields are empty.](/chart-of-accounts/import/scenarios/f2/) |
| [3.1.F3. COA import fails when COA number already exists.](/chart-of-accounts/import/scenarios/f3/) |
| [3.1.F4. COA import fails when COA name already exists.](/chart-of-accounts/import/scenarios/f4/) |
| [3.1.F5. COA import fails when COA type is invalid.](/chart-of-accounts/import/scenarios/f5/) |
| [3.1.F6. COA import fails when COA category is invalid.](/chart-of-accounts/import/scenarios/f6/) |
| [3.1.F7. COA import fails when COA category does not belong to the selected COA type.](/chart-of-accounts/import/scenarios/f7/) |
| [3.1.F8. COA import fails when the headers are invalid.](/chart-of-accounts/import/scenarios/f8/) |

### 4.1. Import Journal

| 4.1.S Success Scenarios |
| ---- |
| [4.1.S1. User can import journals successfully.](/journals/import/scenarios/s1/) |
| [4.1.S2. User can fix failed import journals successfully.](/journals/import/scenarios/s2/) |

| 4.1.F Failed Scenarios |
| ---- |
| [4.1.F2. Journal import fails when required fields are empty.](/journals/import/scenarios/f2/) |
| [4.1.F3. Journal import fails when COA number or COA name does not match any record.](/journals/import/scenarios/f3/) |
| [4.1.F4. Journal import fails when debit and credit amounts are not balanced.](/journals/import/scenarios/f4/) |
| [4.1.F5. Journal import fails when the date format is invalid.](/journals/import/scenarios/f5/) |
| [4.1.F6. Journal import fails when rows with the same form number contain different dates.](/journals/import/scenarios/f6/) |
| [4.1.F7. Journal import fails when the headers are invalid.](/journals/import/scenarios/f7/) |

