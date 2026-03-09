---
outline: deep
---

# Import Journal

The Import Journal feature allows users to upload transaction data in bulk in `.csv` format instead of entering transactions manually one by one.

| Column      | Data Type     | Description                                                                                                                   |
|-------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| date        | `datetime`    | `required` The recorded transaction date. e.g. `2026-01-01 12:00:00`                                                          |
| form_number | `string`      | `required` The transaction identity. e.g. `INVOICE/202601/0001`                                                               |
| coa_number  | `string`      | `required` The chart of account number. e.g. `100.01`                                                                         |
| coa_name    | `string`      | `required` The chart of account name. e.g. `Cash`                                                                             |
| subledger   | `string`      | The subledger references of the transaction. e.g. `Supplier Name` for Account Payable, `Customer Name` for Account Receivable |
| description | `description` | `required` The description about the transaction                                                                              |
| debit       | `number`      | `required-if credit: 0` The debit amount                                                                                      |
| credit      | `number`      | `required-if debit: 0` The credit amount                                                                                      |


## Excel Template

<ClientOnly>
  <iframe style="width:100%;height:300px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSYiOXZuNGzb4GGPGk5dYaRDLIU8rx57fVBTZAbn1vw9QQM7EcRL5ql85m2A8fI3r0kgLTD25fOdFne/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" />
</ClientOnly>

- [Download Excel Template](https://docs.google.com/spreadsheets/d/1cEOdErTfY8qOU0Yqt-rJQtvJ_9loZk88N8_78On4nTY/edit?usp=sharing)
- [Download Excel Sample](https://docs.google.com/spreadsheets/d/1jkGIOR0eetDn5Y-yAlhnBcP6XZ41jNh_Izacv2gNF00/edit?usp=sharing)

## Scenarios

- **Success Scenarios**
  1. Journal data is successfully imported.
- **Failure Scenarios**
  1. User is not authenticated.
  2. The uploaded file is not in ".csv" format.
  3. The `coa_number` and `coa_name` in Journal is not match with data in Master Coa.
  4. The required field is empty.
  5. Journal debit and credit amount are not balanced.