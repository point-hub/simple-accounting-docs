---
outline: deep
---

# ADR#001

## Topic
How the import process works?

## Problem
Users store their business transaction data in Excel or other applications, but they need a simple and reliable way to import the data into the system for analysis and accounting purposes.

## Options

### 1. Import data from Excel (CSV)

- Users can import their Excel data into the application by saving it as a CSV file.
- Users from other accounting or business applications must export their data into CSV format before importing it into the application. 

**Advantages**
- Simple and easy to implement
- Compatible with almost all spreadsheet and accounting applications
- Lower development and maintenance cost
- Users have full control over the imported data

**Disadvantages**
- Manual process for users
- Higher risk of formatting and mapping errors
- Data is not updated automatically
- Users need to export and re-import data repeatedly
- Difficult to handle large or frequent data updates

---

### 2. Import data using API

- Users can connect the application directly to other systems through APIs.
- Transaction data can be synchronized automatically without manual file uploads.

**Advantages**
- Automatic and real-time data synchronization
- Reduces manual work and human error
- Better user experience for active businesses
- Easier to maintain consistent and updated records
- Can support integration with ERP, POS, banking, and accounting systems

**Disadvantages**
- More complex development and maintenance
- Requires integration support from third-party systems
- Higher infrastructure and security requirements

---

### 3. Copy and Paste Data Manually

**Advantages**
- Very simple and familiar for users
- No file conversion required
- Fast for small amounts of data
- Easy to test and use during onboarding
- No dependency on external integrations or file formats

**Disadvantages**
- High risk of human error
- Not efficient for large datasets
- Time-consuming for repetitive imports

## Decision
Choose Option 1: Import data from CSV.

## Reasoning
- CSV is widely supported by Excel, accounting software, ERP systems, and other business applications.
- The implementation is simpler and faster compared to API integration.
- Lower development complexity makes it suitable for an initial product release.
- Most target users already manage their transactions using spreadsheets.
- CSV import provides flexibility without requiring third-party integrations.
- The solution is scalable enough for early-stage business validation before investing in API integrations.

## Discussion History

### 05 November 2025
The team brainstormed possible solution options for the feature and identified three possible approaches.
- Import data from Excel (CSV)
- Import data using API
- Copy and Paste Data Manually

| Participants | Roles |
| --- | --- | 
| Aini | Product Coordinator |
| Kartika | Project Owner |

### 21 February 2026
Discussed the advantages and disadvantages of each option and finalized the decision.

| Participants | Roles |
| --- | --- | 
| Aini | Product Coordinator |
| Kartika | Project Owner |
| Martien | Software Architect |
