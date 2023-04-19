## OVERVIEW

This is a **Node.js** **server** built using the **Express** framework that provides a REST API for managing <Progress app>. The server uses MongoDB as the database and includes JWT authentication to secure endpoints that require authorization.

## TECHNOLOGIES

1. Node.js
2. Express
3. MongoDB
4. Jest
5. Cors
6. Swagger
7. JWT
8. SocketIO
---
there is other packages using for this server such as :

01. <express-validator as validation framework for inputs
02. <validator for variable schema validation variables
03. <crypto for hash password
04. <passport for destruction token ids
05. <pino-pretty for logs specification information

... and other packages we will talk in details in an other section

---
## PURPOSE

The purpose of this server is to provide a scalable and secure backend for managing **Progress**. The REST API includes endpoints for creating, updating, and deleting user accounts, as well as endpoints for authenticating users and generating access tokens.

## FEATURES
### CRUD operations
1. <user accounts>
2. <company accounts>
3. <messages sending between users>
4. <emails sending from the platform>
5. <reports sending to employees as daily once or even monthly in needs>
6. <gitHub status actions such as pull requests current status with reviews, adding new issus to employee and adding reviews>
7. <statistics for employee so the admin of the company can easily know the progress of his project, employee and problems has at his project>
8. <meetings as a feature the meetings management ill be present at the first versions of the project with string calender and scalable management>

### JWT authentication ###

For secure endpoints we are using JWT as a very strong process.

### ERROR handling ###

For handling errors we really take care of the error management and for sure at the future the errors gestation wil be a globalization module for so the server will automatically growth and had not stack

### CORS support for cross-origin requests ###

## REQUIREMENTS

To run this server, you'll need to have Node.js and MongoDB installed on your system.

and because the environment variables file ```.env``` is not show for this project you need to create a file as this example 

- ```.env file ``` 

MongoDBUserName = ``` MongoDBUserName_name``` <create a mongodb atlas and get username>
MongoDBPassword = ``` MongoDBPassword_name``` <create a mongodb atlas and get password>
MongoDBdataBase = ``` MongoDBdataBase_name``` <create a mongodb atlas and get put your database name>
EMAIL_ADDRESS   = ``` EMAIL_ADDRESS_name``` <create a outlook email and get email address>
EMAIL_PASSWORD  = ``` EMAIL_PASSWORD _name``` <create a outlook email and get email password>
JWT_SECRET      = ``` JWT_SECRET_name```  <create a secret code that will describe the identity of your transform token>
BasedUrl        = ``` BasedUrl_name```  <deploy a server  and get the based url for so you can get access for>
SWAGGERADMI     = ``` SWAGGERADMI_name```  <create a token for swagger admin so you can download the swagger json file using the browser>
SWAGGERUSER     = ``` SWAGGERUSER_name```  <create a swagger username so can access to swagger documentation>
SWAGGERPASSWORD = ``` SWAGGERPASSWORD_name``` <create a swagger password so can access to swagger documentation>

## GETTING STARTED
To get started with this server, follow these steps:
at the terminal open the source you like to clone the repository and run the following commands :

**Clone the repository to your local machine.**

--- 
```git clone https://github.com/Team-innovation-INC/PregressServer.git```
---
**Install dependencies by running npm install.**

--- 
```npm install```
---

**Start the server by running npm start.**

--- 
```npm run server```
---

**You can create swagger documentation**
--- 
```npm run swagger```
---
and the server will automatically run

Navigate to [http://localhost:5000] in your web browser to access the API.

for swagger authentication  navigate to [http://localhost:5000/swagger/auth] 

**API EXAMPLES**

Here are some examples of how to use the API:

1. testing the app route 
GET /test

2. Get user details
GET /api/client/user-information
Authorization: Bearer <access_token>