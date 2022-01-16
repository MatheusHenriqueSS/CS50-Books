# CS50 Books
#### Description
*CS50 Books* is my final project for CS50x course.

It is a web application using HTML, CSS and JavaScript with the framework Flask as well as Bootstrap.

CS50 books is a recursive web application where you can search for books through Google Books API.

It has two pages:

**Home:**

  Contains a simple presentation of the app.

**Search:**

  Contains a search box where the user can search for books through Google Books API. The search can be made by the title, author name, publisher or subject.
  In case the API query finds a error, an error message is printed and the query stops.
  The results are shown 12 elements at a time.
  Many volumes from the search don't a book cover page, in this case a default photo with the CS50 cat is returned.
  The query results are displayed as Bootstraps card, in order to better separate them in screen and ease the responsive page desing.


#### Next updates:
The projet overall took a lot more time than a expected so there are still some features to be added:
* Add personalized info page for each book, instead of redirecting the user for Google Books page
* Create the "bookshelf" feature, where the user can save its favorite books, organize them with customized tags and share their collections online.
* Create filters in search box, so the user can make a more precise query, using print type, rating and/or price as well
* Add loading animation during search results loading
* Utilize web scrapping in order to add the lowest prices online on the info page book
*


#### Responsive design:
All the webpages from CS50 Books were created with responsive design, so independing on the screen width where the page is displayed the elements are well displayed:
In the desktop view, books are organized 4 per row, 12 per page
In the tablet/Ipad view, books are organized 3 per row, 12 per page
In the cellphone view, books are organized 1 per row, 12 per page

On the search results, the user can see 3 types of information about the book:
* Title
* Authors names
* Description

If the users want to know more about the book, simply click the "more info" button and the user will be redirected to google books oficial web page for the book searched where the user can find more information about the book like rating, reviews and other editions.


#### Overview:
Overall CS50 Books was a delightful project, where i could learn more about web development and interactions with API's while using Flask framework.
