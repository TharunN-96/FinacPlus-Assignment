# FinacPlus-Assignment

"Playwright UI automation for DemoQA Bookstore: login, validate user, search 'Learning JavaScript Design Patterns', and export book details. Includes API automation with ReqRes for user creation, validation, retrieval, and update workflows."

Overview This repository contains automation scripts for both UI testing (DemoQA Bookstore Application) and API testing (ReqRes API). The project demonstrates end-to-end automation workflows including login validation, book search, data extraction, and REST API operations.

UI Automation (DemoQA) Navigate to DemoQA Manually create a new user (registration not automated). Login with the newly created user. Validate: Username is displayed correctly. Logout button is visible. Navigate to Bookstore Application. Search for "Learning JavaScript Design Patterns". Validate search results contain the book. Extract and save Title, Author, Publisher into a file. Logout successfully.

API Automation (ReqRes) Base URL: https://reqres.in/ Automated API workflows: Create User → Validate HTTP status code, fetch and store userId. Get User Details → Validate created user data. Update User → Modify user’s name and validate response.
