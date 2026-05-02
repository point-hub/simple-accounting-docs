---
outline: deep
---

# Import Chart of Account

Import Chart of Accounts is a feature that allows users to upload a structured file in `.csv` format to create or update multiple COA records at once.

| Column       | Data Type | Description                                                                                                                          |
|--------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------|
| type     | `string`  | `required` The main account classification (e.g., `Asset`, `Liability`, `Equity`, `Income`, `Expense`).                              |
| category | `string`  | `required` The account category used for financial report grouping (e.g., `Current Asset`, `Operating Income`, `Operating Expense`). |
| number   | `string`  | `required` The unique chart of account number used to identify the account (e.g., `100.01`).                                         |
| name     | `string`  | `required` The name of the account as displayed in reports (e.g., `Cash`, `Sales Revenue`).                                          |

Below are the available `coa_type` and `coa_category` options used to classify accounts for reporting purposes:

| Coa Type  | Coa Category             | Description                                                                                                                    |
|-----------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Asset     | Current Asset            | Short-term assets expected to be converted into cash or used within one year (cash, receivables, inventory, prepaid expenses). |
| Asset     | Fixed Asset              | Long-term tangible assets used in operations (equipment, vehicles, buildings).                                                 |
| Asset     | Accumulated Depreciation | Contra-asset account that reduces the book value of fixed assets over time.                                                    |
| Liability | Current Liability        | Short-term obligations due within one year (accounts payable, accrued expenses, short-term loans).                             |
| Liability | Long-Term Liability      | Obligations due after one year (bank loans, long-term financing).                                                              |
| Equity    | Owner Equity             | Capital invested by the owner or shareholders.                                                                                 |
| Equity    | Dividend                 | Distribution of profits to the owner or shareholders. shareholders.                                                            |
| Equity    | Retained Earning         | Accumulated profits retained in the business from previous periods.                                                            |
| Equity    | Net Income               | Current period profit or loss before closing to retained earnings.                                                             |
| Income    | Operating Income         | Revenue generated from the company’s primary business activities.                                                              |
| Income    | Non-Operating Income     | Income not directly related to core operations (interest income, asset sale gain, forex gain).                                 |
| Expense   | Cost of Sales            | Direct costs incurred to produce goods or deliver services.                                                                    |
| Expense   | Factory Overhead Cost    | Indirect production-related costs supporting manufacturing activities.                                                         |
| Expense   | Operating Expense        | Administrative and operational costs required to run the business.                                                             |
| Expense   | Non-Operating Expense    | Expenses not related to core business operations (interest expense, penalties, asset sale loss).                               |


## Excel Template

<ClientOnly>
  <iframe style="width:100%;height:300px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_CC8Ucs3XpER6xT_Bz1q78_9J4IQOvOuQ-uPHU9OoUyDEiAdBtndaeMowpXVpw2K786Vw4CIS5H8f/pubhtml?gid=542537277&amp;single=true&amp;widget=true&amp;headers=false" />
</ClientOnly>

- [Download Excel Template](https://docs.google.com/spreadsheets/d/1jF36Ak0O3b_uu64orVEaaxsuwCTsNWOKXilBdyZky_w/edit?usp=sharing)
- [Download Excel Sample](https://docs.google.com/spreadsheets/d/1sCD7hwbCg6J6g0WiNIBQJ5j7hgAZz7a3uteIySR6ED8/edit?usp=sharing)

## Scenarios

- **Success Scenarios**
  - [**3.1.S1. User successfully import COA.**](/chart-of-accounts/import/scenarios/s1)
- **Failure Scenarios**
  - [3.1.F1. User isn't authenticated.](/chart-of-accounts/import/scenarios/f1)
  - [3.1.F2. The required fields is empty.](/chart-of-accounts/import/scenarios/f2)
  - [3.1.F3. The coa_number is already exists.](/chart-of-accounts/import/scenarios/f3)
  - [3.1.F4. The coa_name is already exists.](/chart-of-accounts/import/scenarios/f4)