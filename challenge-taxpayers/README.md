## 👀 About the problem

To calculate the income tax that an individual must pay, a country applies the following rules:

1) Tax on salary: individuals pay tax on their salary according to the following table:

| Annual Salary | Tax |
| --- | --- |
| Up to 30,000 per year | Exempt |
| 30,000 up to 50,000 exclusive | 10% |
| 50,000 or above | 20% |


2) If the individual obtained income from providing services, the tax charged is 15%.
3) If the individual obtained capital gains (real estate, stocks, etc.), the tax charged is 20%.
4) The individual can deduct up to 30% of their gross due tax with medical or educational expenses. However, if their medical and educational expenses are below this 30%, only the medical and educational expenses can be deducted.

You should create a program to read the data of a taxpayer. After that, you must display a tax report according to the examples. You can create additional functions/procedures as you wish, but your solution must include the following functions:
***
// Parameters:

// amount: value received as salary

// Effect: returns the tax to be paid on the salary

**function taxOnSalary(amount: real): real**
***
// Parameters:

// amount: value received for services

// Effect: returns the tax to be paid on services

**function taxOnServices(amount: real): real**
***
// Parameters:

// amount: value received as capital gains

// Effect: returns the tax to be paid on capital gains

**function taxOnCapitalGains(amount: real): real**
***
// Parameters:

// salary: value received as salary

// services: value received for services

// capitalGains: value received as capital gains

// Effect: returns the total gross tax to be paid

**function totalGrossTax(salary: real; services: real; capitalGains: real): real**

****
// Parameters: 

// salary: value received as salary

// services: value received for services

// capitalGains: value received as capital gains

// medicalExpenses: value spent on medical expenses

// educationalExpenses: value spent on educational expenses

// Effect: returns the amount that the taxpayer can deduct from their tax

**function deduction(salary: real; services: real; capitalGains: real; medicalExpenses: real; educationalExpenses: real): real**

---

## 📁 How to practice as well?

```bash

    # Clone the repository
    $ git clone https://github.com/chrissshenri/challenges-n-exercises-js.git

    # Navigate to the directory
    $ cd challenges-n-exercises-js

    # Install the dependencies
    $ yarn install

    # Start the project
    $ yarn start

```

> 
> Exercise from the course - ***Formacao Desenvolvedor Moderno-Nelio Alves-2022***

