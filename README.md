# Web-Development-Group-Project

Web Development Group Project

Link to website - https://jaheethedan.github.io/Web-Development-Group-Project/

This application is for a website 'WebDev Mastery'.
Programmed by:
Victoria Pryce - 2307070
Jaheem Shaw - 2205642
Aaliyah Tennant - 2307095
James Cameron - 1804616

The Programme explained:
NB: No frameworks used

In the case that the admin would like to access the Dashboard, they would use the following credentials -

Admin username = "admin"
Admin Password = "admin_123"

Once on the dashboard, they would be able to view the user frequency which includes:

- How many registered users fall under specific gender categories (e.g. Male, Female, Other)
- Registered users under different age groups (18-25, 26-35, 36-50, 50+)
  This is displayed in the format of bargraphs.
  Tool Used: Chart.js

Regular User Experience explained:

Registering :
User creates an account using Name, username, password, trn, gender and date of birth (which is used to calculate the age of user so their age is added to the stats on the dashboard)

login:
User enters Trn and password to access account.
In the case that the credential dont match the ones inputed on registering, an error message will be displayed and after 3 attempts the user is sent to Error page where a link back to the home page is displayed.

Once user is logged in successfully, they are able to navigate the through the About Us Page, Home Page, Service Page and Cart.

About Us page displays the details of each member of the group.
Home page shows a welcome message for the user, introducing them to the company. After there is a preview of the services offered.

User could press the 'Learn More' button and they would be redirected to the Services page where all the services
are listed.
All the services in the product listing have descriptions, prices and add to cart buttons.
When the add to cart button is pressed, the item is added to the users cart along with its price.

The user has access to view their cart from the icon in the top right hand corner of the webpage.
The cart displays the item name, price, sub-total, tax amount and grand total; the user then confirms the checkout by pressing the displayed button or the cancel button if they wish, which will take them back to the service page.

The 'Check Out' button directs the user to a checkout page where they input their name, address and amount paid, afterwards they confirm their purchase.

The confirmation will send the to their invoice where their information and the company's information will be displayed, along with the item name, price, tax and total; It also gives the user the option to print their invoice.

They also have the option go back to home.
