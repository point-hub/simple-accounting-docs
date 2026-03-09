---
outline: deep
---

# v1.0.0 - Initial Release

## SMART Goals

**Specific:** 
- Enable small businesses and individual users to generate accurate accounting reports, including General Ledger, Subledger, Trial Balance, Profit & Loss, and Balance Sheet, by importing transaction data from Excel or CSV files without requiring advanced accounting knowledge.

**Measurable:** 
- Users can successfully import their transaction data.
- The system automatically generates all key reports (General Ledger, Subledger, Trial Balance, Profit & Loss, Balance Sheet).

**Achievable:**
- Build an intuitive import interface and validation system for CSV/Excel files.
- Implement automated report generation using pre-defined COA categories.
- Provide clear error messages for failed imports or unbalanced journals.

**Relevant:**
- Helps small businesses save time and reduce manual errors in accounting.
- Supports better financial decision-making through accurate financial reports.

**Time Bound:** 31 Mar 2026

## Features

| Feature                                             | Description                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------|
| [1. Auth](/auth/about)                              | User authentication and access control features to secure the application.                   |
| [1.1. Signup](/auth/signup)                         | Allows new users to create an account using email and password.                              |
| [1.2. Verify Email](/auth/verify-email)             | Sends a verification email to confirm the user’s email address.                              |
| [1.3. Signin](/auth/signin)                         | Enables registered users to log in to the application.                                       |
| [1.4. Signout](/auth/signout)                       | Allows users to securely log out of the application.                                         |
| [1.5. Forgot Password](/auth/forgot-password)       | Provides a way for users to request a password reset link if they forget their password.     |
| [1.6. Reset Password](/auth/reset-password)         | Allows users to set a new password after verifying their identity.                           |
| [2. My Account](/my-account/about)                  | User profile management features to update personal information.                             |
| [2.1. Update Username](/my-account/update-username) | Allows users to change their display username.                                               |
| [2.2. Update Email](/my-account/update-email)       | Allows users to update their email address.                                                  |
| [2.3. Update Password](/my-account/update-password) | Enables users to change their account password.                                              |
| [3. Chart of Accounts](/chart-of-accounts/about)                      | Structured list of all accounts used by a company to record financial transactions.              |
| [3.1. Import Chart of Account](/chart-of-accounts/import)             | Upload chart of account data in bulk (CSV/Excel).         |
| [3.1. List Chart of Account](/chart-of-accounts/)                     | Displays all chart of accounts entries with pagination, filters, and sorting options.                  |
| [4. Journals](/journals/about)                      | Transaction management features for recording and reviewing financial journals.              |
| [4.1. Import Journal](/journals/import)             | Upload transaction data in bulk (CSV/Excel) to create journal entries automatically.         |
| [4.1. List Journal](/journals/)                     | Displays all journal entries with pagination, filters, and sorting options.                  |
| [5. Accounting Reports](/accounting-reports/about)                               | Financial reporting features to analyze company performance.                                 |
| [5.1. General Ledger](/accounting-reports/general-ledger)                                 | Shows all account transactions grouped by account, for tracking debit and credit balances.   |
| [5.2. Subledger](/accounting-reports/subledger)                                      | Detailed subsidiary ledger for accounts receivable, accounts payable, or other sub-accounts. |
| [5.3. Trial Balance](/accounting-reports/trial-balance)                                  | Summarizes all account balances to verify that total debits equal total credits.             |
| [5.4. Profit & Loss](/accounting-reports/profit-and-loss)                                  | Reports revenues, costs, and expenses to determine net income for a period.                  |
| [5.5. Balance Sheet](/accounting-reports/balance-sheet)                                  | Displays the company’s assets, liabilities, and equity at a specific point in time.          |

## Sitemap

::: raw
<ClientOnly>
  <div style="width:100%;overflow: scroll;margin-top:48px;">
    <svg xmlns="http://www.w3.org/2000/svg" style="max-height:620px;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1218px" viewBox="-0.5 -0.5 1218 620"><defs/><g><g data-cell-id="0"><g data-cell-id="1"><g data-cell-id="ZTXCplT_wdisMsR8OOZP-1"><g transform="translate(0.5,0.5)"><path d="M 60 60 L 60 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-2"><g transform="translate(0.5,0.5)"><path d="M 60 60 L 60 85 L 804 85 L 804 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-3"><g transform="translate(0.5,0.5)"><path d="M 60 60 L 60 85 L 1050 85 L 1050 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-4"><g transform="translate(0.5,0.5)"><path d="M 60 60 L 60 85 L 300 85 L 300 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-6"><g transform="translate(0.5,0.5)"><path d="M 60 60 L 60 85 L 544 85 L 544 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-5"><g transform="translate(0.5,0.5)"><rect x="0" y="0" width="120" height="60" fill="#ffe6cc" stroke="#d79b00" pointer-events="all" style="fill: light-dark(rgb(255, 230, 204), rgb(54, 33, 10)); stroke: light-dark(rgb(215, 155, 0), rgb(153, 101, 0));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 30px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Simple Accounting</div></div></div></foreignObject><text x="60" y="34" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">Simple Accounting</text></switch></g></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-6"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 229 L 84 229" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-7"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 301 L 84 301" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-8"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 372 L 84 372" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-9"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 443 L 84 443" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-10"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 515 L 84 515" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-11"><g transform="translate(0.5,0.5)"><path d="M 60 170 L 60 588 L 84 588" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-12"><a xlink:href="/auth/about"><g transform="translate(0.5,0.5)"><rect x="0" y="110" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div>1</div>Auth</div></div></div></foreignObject><text x="60" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1Auth</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-13"><g transform="translate(0.5,0.5)"><path d="M 804 170 L 804 228 L 842 228" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-14"><g transform="translate(0.5,0.5)"><path d="M 804 170 L 804 300 L 842 300" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-15"><a xlink:href="/journals/about"><g transform="translate(0.5,0.5)"><rect x="744" y="110" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 745px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div>4</div>Journals</div></div></div></foreignObject><text x="804" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">4Journals</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-16"><a xlink:href="/journals/import"><g transform="translate(0.5,0.5)"><rect x="842" y="198" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 228px; margin-left: 843px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">4.1<div>Import</div></div></div></div></foreignObject><text x="902" y="232" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">4.1...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-17"><a xlink:href="/journals/list"><g transform="translate(0.5,0.5)"><rect x="842" y="270" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 300px; margin-left: 843px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">4.2<div>List</div></div></div></div></foreignObject><text x="902" y="304" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">4.2...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-18"><a xlink:href="/auth/signup"><g transform="translate(0.5,0.5)"><rect x="84" y="199" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 229px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1.1<div>Signup</div></div></div></div></foreignObject><text x="144" y="233" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.1...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-19"><a xlink:href="/auth/verify-email"><g transform="translate(0.5,0.5)"><rect x="84" y="271" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 301px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1.2<div>Verify Email</div></div></div></div></foreignObject><text x="144" y="305" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.2...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-20"><a xlink:href="/auth/signin"><g transform="translate(0.5,0.5)"><rect x="84" y="342" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 372px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1.3<div>Signin</div></div></div></div></foreignObject><text x="144" y="376" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.3...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-21"><a xlink:href="/auth/signout"><g transform="translate(0.5,0.5)"><rect x="84" y="413" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 443px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1.4<div>Signout</div></div></div></div></foreignObject><text x="144" y="447" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.4...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-22"><a xlink:href="/my-account/update-username"><g transform="translate(0.5,0.5)"><rect x="336" y="198" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 228px; margin-left: 337px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2.1<div>Update Username</div></div></div></div></foreignObject><text x="396" y="232" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">2.1...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-23"><g transform="translate(0.5,0.5)"><path d="M 1050 170 L 1050 228 L 1097 228" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-24"><g transform="translate(0.5,0.5)"><path d="M 1050 170 L 1050 301 L 1097 301" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-25"><g transform="translate(0.5,0.5)"><path d="M 1050 170 L 1050 376 L 1097 376" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-26"><g transform="translate(0.5,0.5)"><path d="M 1050 170 L 1050 450 L 1097 450" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-27"><g transform="translate(0.5,0.5)"><path d="M 1050 170 L 1050 524 L 1097 524" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-28"><a xlink:href="/accounting-reports/about"><g transform="translate(0.5,0.5)"><rect x="990" y="110" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 991px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div><span style="background-color: transparent; color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));">5</span></div><div><span style="background-color: transparent; color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));">Accounting Reports</span></div></div></div></div></foreignObject><text x="1050" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-29"><a xlink:href="/my-account/update-email"><g transform="translate(0.5,0.5)"><rect x="336" y="270" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 300px; margin-left: 337px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2.2<div>Update Email</div></div></div></div></foreignObject><text x="396" y="304" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">2.2...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-30"><a xlink:href="/accounting-reports/general-ledger"><g transform="translate(0.5,0.5)"><rect x="1097" y="198" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 228px; margin-left: 1098px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">5.1<div>General Ledger</div></div></div></div></foreignObject><text x="1157" y="232" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5.1...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-31"><a xlink:href="/accounting-reports/subledger"><g transform="translate(0.5,0.5)"><rect x="1097" y="271" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 301px; margin-left: 1098px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">5.2<div>Subledger</div></div></div></div></foreignObject><text x="1157" y="305" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5.2...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-32"><a xlink:href="/accounting-reports/trial-balance"><g transform="translate(0.5,0.5)"><rect x="1097" y="346" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 376px; margin-left: 1098px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">5.3<div>Trial Balance</div></div></div></div></foreignObject><text x="1157" y="380" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5.3...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-33"><a xlink:href="/accounting-reports/profit-and-loss"><g transform="translate(0.5,0.5)"><rect x="1097" y="420" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 450px; margin-left: 1098px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">5.4<div>Profit &amp; Loss</div></div></div></div></foreignObject><text x="1157" y="454" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5.4...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-34"><a xlink:href="/accounting-reports/balance-sheet"><g transform="translate(0.5,0.5)"><rect x="1097" y="494" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 524px; margin-left: 1098px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">5.5<div>Balance Sheet</div></div></div></div></foreignObject><text x="1157" y="528" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">5.5...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-35"><a xlink:href="/auth/forgot-password"><g transform="translate(0.5,0.5)"><rect x="84" y="485" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 515px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div><span style="background-color: transparent; color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));">1.5</span></div><div>Forgot Password</div></div></div></div></foreignObject><text x="144" y="519" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.5...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-36"><a xlink:href="/auth/reset-password"><g transform="translate(0.5,0.5)"><rect x="84" y="558" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 588px; margin-left: 85px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1.6<div>Reset Password</div></div></div></div></foreignObject><text x="144" y="592" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">1.6...</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-37"><g transform="translate(0.5,0.5)"><path d="M 300 170 L 300 228 L 336 228" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-38"><g transform="translate(0.5,0.5)"><path d="M 300 170 L 300 300 L 336 300" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-39"><g transform="translate(0.5,0.5)"><path d="M 300 170 L 300 372 L 336 372" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-40"><a xlink:href="/my-account/about"><g transform="translate(0.5,0.5)"><rect x="240" y="110" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 241px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div>2</div>My Account</div></div></div></foreignObject><text x="300" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">2My Account</text></switch></g></g></a></g><g data-cell-id="ZTXCplT_wdisMsR8OOZP-41"><a xlink:href="/my-account/update-password"><g transform="translate(0.5,0.5)"><rect x="336" y="342" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 372px; margin-left: 337px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2.3<div>Update Password</div></div></div></div></foreignObject><text x="396" y="376" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">2.3...</text></switch></g></g></a></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-1"><g transform="translate(0.5,0.5)"><path d="M 544 170 L 544 228 L 582 228" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-2"><g transform="translate(0.5,0.5)"><path d="M 544 170 L 544 300 L 582 300" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-3"><a xlink:href="/chart-of-accounts/about"><g transform="translate(0.5,0.5)"><rect x="484" y="110" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 485px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><div>3</div>Chart of Accounts</div></div></div></foreignObject><text x="544" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">3Chart of Accounts</text></switch></g></g></a></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-4"><a xlink:href="/chart-of-accounts/import"><g transform="translate(0.5,0.5)"><rect x="582" y="198" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 228px; margin-left: 583px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">3.1<div>Import</div></div></div></div></foreignObject><text x="642" y="232" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">3.1...</text></switch></g></g></a></g><g data-cell-id="IjUEGjItMCU91A01Xu8e-5"><a xlink:href="/chart-of-accounts/list"><g transform="translate(0.5,0.5)"><rect x="582" y="270" width="120" height="60" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/></g><g><g><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 300px; margin-left: 583px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">3.2<div>List</div></div></div></div></foreignObject><text x="642" y="304" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">3.2...</text></switch></g></g></a></g></g></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>
  </div>
</ClientOnly>
:::

## Scenarios

### 1.1. Signup

| 1.1.S Success Scenarios |
| ---- |
| [1.1.S1. User successfully signup](/auth/signup/scenarios/s1) |

| 1.1.F Failed Scenarios |
| ---- |
| [1.1.F1. The required fields is empty.](/auth/signup/scenarios/f1) |
| [1.1.F2. Username is already exists](/auth/signup/scenarios/f2) |
| [1.1.F3. Email is already exists](/auth/signup/scenarios/f3) |
| [1.1.F4. Password is not strong enough.](/auth/signup/scenarios/f4) |
| [1.1.F5. Password confirmation is not match.](/auth/signup/scenarios/f5) |

### 1.2. Verify Email

| 1.2.S Success Scenarios |
| ---- |
| [1.2.S1. User successfully signup.](/auth/verify-email/scenarios/s1) |

| 1.2.F Failed Scenarios |
| ---- |
| 1.2.F1 [1.2.F1. The required fields is empty.](/auth/verify-email/scenarios/f1) |
| 1.2.F2 [1.2.F2. The verification code is invalid.](/auth/verify-email/scenarios/f2) |

### 1.3. Signin

| 1.3.S Success Scenarios |
| ---- |
| [1.3.S1. User successfully signin.](/auth/signin/scenarios/s1) |

| 1.3.F Failed Scenarios |
| ---- |
| [1.3.F1. The credential is not match.](/auth/signin/scenarios/f1) |

### 1.4. Signout

| 1.4.S Success Scenarios |
| ---- |
| 1.4.S1 [1.4.S1. User successfully signout.](/auth/signout/scenarios/s1) |

### 1.5. Forgot Password

| 1.5.S Success Scenarios |
| ---- |
| 1.5.S1 [1.5.S1. User successfully request reset password.](/auth/forgot-password/scenarios/s1) |

| 1.5.F Failed Scenarios |
| ---- |
| [1.5.F1. The required field is empty.](/auth/forgot-password/scenarios/f1) |
| [1.5.F2. The email is not found.](/auth/forgot-password/scenarios/f2) |

### 1.6. Reset Password

| 1.6.S Success Scenarios |
| ---- |
| [1.6.S1. User successfully reset password.](/auth/reset-password/scenarios/s1) |

| 1.6.F Failed Scenarios |
| ---- |
| [1.6.F1. The required field is empty.](/auth/reset-password/scenarios/f1) |
| [1.6.F2. Password is not strong enough.](/auth/reset-password/scenarios/f2) |
| [1.6.F3. Password confirmation is not match.](/auth/reset-password/scenarios/f3) |

### 2.1. Update Username

| 2.1.S Success Scenarios |
| ---- |
| [2.1.S1. User successfully update username.](/auth/reset-password/scenarios/s1) |

| 2.1.F Failed Scenarios |
| ---- |
| [2.1.F1. User isn't authenticated.](/my-account/update-username/scenarios/f1) |
| [2.1.F2. The required field is empty.](/my-account/update-username/scenarios/f2) |
| [2.1.F3. The username is already exists.](/my-account/update-username/scenarios/f3) |

### 2.2. Update Email

| 2.2.S Success Scenarios |
| ---- |
| [2.2.S1. User successfully update email.](/my-account/update-email/scenarios/s1) |

| 2.2.F Failed Scenarios |
| ---- |
| [2.2.F1. User isn't authenticated.](/my-account/update-email/scenarios/f1) |
| [2.2.F2. The required field is empty.](/my-account/update-email/scenarios/f2) |
| [2.2.F3. The Email is already exists.](/my-account/update-email/scenarios/f3) |

### 2.3. Update Password

| 2.3.S Success Scenarios |
| ---- |
| [2.3.S1. User successfully reset password.](/my-account/update-password/scenarios/s1) |

| 2.3.F Failed Scenarios |
| ---- |
| [2.3.F1. User isn't authenticated.](/my-account/update-password/scenarios/f1) |
| [2.3.F2. The required field is empty.](/my-account/update-password/scenarios/f2) |
| [2.3.F3. Password is not strong enough.](/my-account/update-password/scenarios/f3) |
| [2.3.F4. Password confirmation is not match.](/my-account/update-password/scenarios/f4) |

### 3.1. Import Chart of Account

| 3.1.S Success Scenarios |
| ---- |
| [3.1.S1. User successfully import COA.](/chart-of-accounts/import/scenarios/s1) |

| 3.1.F Failed Scenarios |
| ---- |
| [3.1.F1. User isn't authenticated.](/chart-of-accounts/import/scenarios/f1) |
| [3.1.F2. The required fields is empty.](/chart-of-accounts/import/scenarios/f2) |
| [3.1.F3. The coa_number is already exists.](/chart-of-accounts/import/scenarios/f3) |
| [3.1.F4. The coa_name is already exists.](/chart-of-accounts/import/scenarios/f4) |

### 3.2. List Chart of Account

| 3.2.S Success Scenarios |
| ---- |
| [3.2.S1. Display paginated chart of accounts data.](/chart-of-accounts/import/scenarios/s1) |

| 3.2.F Failed Scenarios |
| ---- |
| [3.2.F1. User isn't authenticated.](/chart-of-accounts/import/scenarios/f1) |

### 4.1. Import Journal

| 4.1.S Success Scenarios |
| ---- |
| [4.1.S1. User successfully import journal.](/journals/import/scenarios/s1) |

| 4.1.F Failed Scenarios |
| ---- |
| [4.1.F1. User isn't authenticated.](/journals/import/scenarios/f1) |
| [4.1.F2. The required fields is empty.](/journals/import/scenarios/f2) |
| [4.1.F3. The coa_number is already exists.](/journals/import/scenarios/f3) |
| [4.1.F4. The coa_name is already exists.](/journals/import/scenarios/f4) |

### 4.2. List Journal

| 4.2.S Success Scenarios |
| ---- |
| [4.2.S1. Display paginated journals data.](/journals/list/scenarios/s1) |

| 4.2.F Failed Scenarios |
| ---- |
| [4.2.F1. User isn't authenticated.](/journals/list/scenarios/f1) |

### 5.1. General Ledger

| 5.1.S Success Scenarios |
| ---- |
| [5.1.S1 Filtered report.](/accounting-reports/general-ledger/scenarios/s1) |

| 5.1.F Failed Scenarios |
| ---- |
| [5.1.F1. User isn't authenticated.](/accounting-reports/general-ledger/scenarios/f1) |

### 5.2. Subledger

| 5.2.S Success Scenarios |
| ---- |
| [5.2.S1 Filtered report.](/accounting-reports/subledger/scenarios/s1) |

| 5.2.F Failed Scenarios |
| ---- |
| [5.2.F1. User isn't authenticated.](/accounting-reports/subledger/scenarios/f1) |

### 5.3. Trial Balance

| 5.3.S Success Scenarios |
| ---- |
| [5.3.S1 Filtered report.](/accounting-reports/trial-balance/scenarios/s1) |

| 5.3.F Failed Scenarios |
| ---- |
| [5.3.F1. User isn't authenticated.](/accounting-reports/trial-balance/scenarios/f1) |

### 5.4. Profit & Loss

| 5.4.S Success Scenarios |
| ---- |
| [5.4.S1 Filtered report.](/accounting-reports/profit-and-loss/scenarios/s1) |

| 5.4.F Failed Scenarios |
| ---- |
| [5.4.F1. User isn't authenticated.](/accounting-reports/profit-and-loss/scenarios/f1) |

### 5.5. Balance Sheet

| 5.5.S Success Scenarios |
| ---- |
| [5.5.S1 Filtered report.](/accounting-reports/balance-sheet/scenarios/s1) |

| 5.5.F Failed Scenarios |
| ---- |
| [5.5.F1. User isn't authenticated.](/accounting-reports/balance-sheet/scenarios/f1) |