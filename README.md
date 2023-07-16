# This is a prototype of a website :

# How to use (so far)

You need a mongoDB cluster under your credentials to connect to the code via modifying the following code
line 10 of file utils/db.js replace <username>, <password> with your credentials
Run the code in the terminal <npm run dev>
go to <url://localhost:3000/api/seed> to put sample data on your cluster.
Browse the website
Connect to the following admin account : 
   + username:admin@example.com  
   + password:123456
Update the content of your website through the admin dashboard and its tabs

# Steps to make

It should contain a home page, an about us page, a donation, and an admin level access

1. Find the right color palette and store them in a global variable.

2. Create a header and footer, and store them in a Layout Component.
   2.1 Create a logo on Canva
   2.2 Gather all social media information
   Issue : The SVG icon for youtube doesnt appear on the footer
   fixed but still asymetric
   2.3 Apply the color palettes
   2.4 Link properly pages on navigation menu

3. Fill the pages with the right content
   3.1 Steal the code for the components i want to use.
   3.2 Fill the content of each component
   3.3 make each component reusable

4. Create a backend system
   4.1 Allocate a cluster for the website
   4.2 create models
   4.3 fix the requests of data
   4.4 use it for the shop content
   4.5 use it again for the blog content
   4.6 use it for the donation content

5. Log handler
   5.1 Create Login and signup form components
   5.2 API : handler of requests
   5.3 Disconnect bouton
   5.4 submenu in header component for personal tabs <<=

6. admin level rights
   6.1 forms to edit data
   6.2 api to handle requests towards the database
   6.3 testing said requests

7. Orders
   7.1 Cart management
   7.2 Shipping
   7.3 Payment
 
8. File uploads 