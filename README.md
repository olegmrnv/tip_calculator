# Tip Calculator

In this project I developed front-end application to calculate amount of tips based on bill amount, desired tip percentage and option to split bill between several payers.

I used HTML, CSS and Bootstrap to build user interface. 
JavaScript used to complete form validation and calculations.
D3 library been used as well to add visual effect. 

I thoroughly developed form validation process using listeners. When user navigates away from current input field, listener gets triggered and error message displays if applicable.
All of that has been placed in separate JavaScript file "form_fields.js" and it uses plain JavaScript language. 
File "calculator.js" contains main function, triggered by pressing "Calculate!" button or "Enter" key. 
Here I check again if values are correct and displaying result along with badge (if applicable), or displaying alert message.

deployed version: https://olegmrnv.github.io/tip_calculator/
