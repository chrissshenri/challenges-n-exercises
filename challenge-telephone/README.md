## 👀 About the problem

Read the data for a set of customers from a telephone company, providing for each one their name, phone number, subscription type (0, 1, or 2), and the number of minutes consumed in the month (do not read the bill amount, as it will be calculated automatically later). See the example below:

| Name | Phone | Type | Minutes | 
| :--- | :---: | :---: | ---:   |
| Maria José | 3222-1234 | 1 | 120 |
| XY Informática | 3223-6666 | 2 | 457 | 
| Joaquim Silva | 3222-3344 | 1 | 50 |  
| Antônio Carlos | 3212-6622 | 0 | 134 |

Each column of the table should be stored in an ARRAY.
Also, read the three subscription types, where each subscription type has a basic price and the price per excess minute. Use a 3x2 MATRIX to store them, where the first column corresponds to the basic subscription price and the second column corresponds to the excess minute price, as shown in the example below:

| 25.5 | 0.10 |
| --- | --- | 
| 35.0 | 0.12 |
| 60.0 | 0.15 |

After reading the customers' data, as well as the data for the three subscription types, calculate the bill amount for each customer and display a table as shown in the example below. The billing calculation rule for a customer is as follows: if the number of minutes consumed is less than or equal to 90, then the bill amount is simply the basic subscription price. Otherwise, the bill amount is the basic price plus the total amount for the minutes exceeding 90. For example, if a customer has a subscription type 1 and consumed 120 minutes, note that they exceeded 30 minutes beyond the 90-minute limit. Thus, their bill amount will be 35.0 + (30 * 0.12), which equals 38.60.

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

