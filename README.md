# Overview

With change in lifestyle and technology people are shifting to more convient way to get their work done. In this race digital payment has increased it's industry significantly. Most people are switching to digital payments for its sheer convenience.
This raising trend gave us the idea of 'SimplyMart'- a web application to enhance your shopping experience. It works over cashierless checkout technology thus eliminating long lines for customers and reducing running costs for supermarkets.

# Instrustions

We have submitted an organisation link consisting of 2 repositories:

- Client App

  - User login/signup.
  - Profile page.
  - Visited stores display to select one on home page.
  - Bar code scanner with selected store details opens to scan the bar code of items.
  - Scanned items will get added to the cart and will be displayed on the cart page with quantity increment/decrement option and total bill will be generated. Press "Pay Now" button and payment page will open, pay the bill and exit the store.

- Store Admin Panel
  - Admin login/signup.
  - Payments page to display all the payments that has been made.
  - Products page to dispaly and update stock of products accordingly.
  - QR Page to display the QR code of the store.
  - Profile page.

**Note: Client app is an app for smartphones only. Please use it on a smartphone only.**

# Inspiration

Has it ever happened that you went to a mart for shopping and came out in less than 2-3 minutes? even if you will go to mart to buy just 1 thing even then you will have to wait for your turn and if you are lucky then you can get out in not less than 5 minutes. The inspiration for building this app comes from watching not just our family members but other people who are wasting their time in long lines. Some people work days and night and therefore they find it difficult to spend so much time just in the shopping mart. There are more than 163 million shoppers all over the world who spend 31 minutes on average being lined up in the queues that sum up to approximately 9,607 years in the shopping market only.

# What It Does?

Our motto behind this app is to `make offline shopping smart with simplyMart`. What it does is allows you to scan the barcode of the items present in the shopping mart and put them into your cart. The quantity of an item can be increased and decreased easily, the item can also be removed from the cart anytime. When you are done with the shopping and you are satisfied with your cart items, you can easily pay the amount generated on the app itself that's how instead of waiting in the long queues you can easily pay and leave just like that. Once the payment is completed, the mart admin will receive a notification and a transaction bill as well stating that the given user has bought the listed items successfully.

# How We Built It?

First of all, we planned out the idea, its detailed features and made a flowchart to prevent any kind of technical errors in the end. We did all of this on a sheet of paper listing the logic flows and how to make the system more optimized. At last, we came up with an implementation plan.

All four of us having experience in frontend (HTML, CSS, JavaScript, ReactJs) and backend(Firebase), we decided to assign equal amounts of frontend and backend work to each member. We divided the team into 2 pairs and one pair was tasked with building the store admin panel while the other one was tasked with building and organizing the main app.

# Challenges We Ran Into

Major challenges were using new libraries for scanning of Store QR Codes and Item Barcodes. We used two different libraries namely react-qr-reader and QuaggaJS which track QRs and barcodes in real time respectively. Another major challenge was handling of multiple data at the same time. Another major challenge was sleep deprivation as we later realised that the app we're trying to build is not a simple one with basic features.

# Accomplishments That We Are Proud Of

Accomplishments we're proud of are successfully implementing the logic flow we had decided at the beginning of the hackathon and that too upto our expectations. We're also proud of the web application that we were able to build with libraries which we had never heard of during the hackathon itself as we learned a lot while implementing them.

# What We Learned?

As Already mentioned above, we learned a lot while implementing some libraries we have never used before. We majorly learned on how to collaborate and manage time in these kinds of hackathon.

# What's Next On SimplyMart?

# Built With

- HTML
- CSS
- SASS
- ReactJs
- Firebase
- NextJs
- Netlify

# FAQs

**Q. How do you plan to prevent theft which might take place?**
<br />
Ans. One of the easiest ways to prevent theft is randomised checkout control, which uses an algorithm to randomly select carts/baskets for control before they leave the mart.

If a customer’s cart is selected for a random check, the app prompts them to go to the designated area for a check. Their app is locked, making them unable to pay and leave the store before having their cart checked.

Available personnel are prompted to go and perform the security checking. The employee checks if the scanned items match the items in the cart. If there are just a few items in the cart, the employee can simply approve the cart without a lengthy process.

If there is a mismatch, the employee can add items the user forgot/did not scan. The customer is given a choice to either decline to proceed with the purchase, or accept the corrections made by the employee.

When the customer accepts the corrections, the updated cart is sent to the customer’s app, prices are recalculated, and the app is unlocked. The total price reflects the corrections made by the employee during the control, and potential theft or misunderstanding is avoided.

This way, your regular shoppers will understand that it is necessary to occasionally have checks to be able to offer frictionless checkout. On the other hand, shoplifters will be deterred if they know that there is a chance that their bag might be checked.

**Q. Why do you think your app is useful if services like Amazon deliver stuff and even groceries directly at your home?**
<br />
Ans. In a world where everything is becoming online, we have tried to come up with a middle way by mixing offline and online together. Reports say that 92% of people choose offline shopping over online shopping. People like to go out, check, and buy items for different reasons and we are providing them simplyMart so that they don't have to waste their time.

<img src="https://d33wubrfki0l68.cloudfront.net/e079abe345b743e6c6ead1099913dc55aabff31d/6fc0c/images/blog/posts/2014/08/blog-retail-purchase.jpg" />

# Working Model ScreenShots (Admin Website)
![Screenshot (117)](https://user-images.githubusercontent.com/67470541/139577813-749ffd26-b44e-44ce-a5cd-24d0764327b5.png)
<br />
![Screenshot (118)](https://user-images.githubusercontent.com/67470541/139577830-023360c8-7940-4294-8891-0866bfdc2b5c.png)
<br />

![Screenshot (119)](https://user-images.githubusercontent.com/67470541/139577834-a72d09ac-a2f9-4ea2-99e3-095ac2a5a459.png)

<br />
![Screenshot (120)](https://user-images.githubusercontent.com/67470541/139577843-ec21096e-50f0-48a9-80c9-82b765cea3f0.png)

<br />
![Screenshot (121)](https://user-images.githubusercontent.com/67470541/139577847-58cbd3f3-714e-48a0-af15-4753fe6a80fb.png)


