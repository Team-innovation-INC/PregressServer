const User = require("../../model/user/Users.model")

const defaultValues = (_path, _instance) => {
  switch (_path) {
    case "_id":
      return  {type: new User({}).id};
    case '__v':
      return {type: 0}
    case 'creation_date':
      return {type: "2023-04-17T00:05:29.527+00:00"}
    case 'last_update':
      return {type: "2023-05-17T00:05:29.527+00:00"}
    case 'password':
      return {type: "Password123"}
    case 'roleName':
      return {Enumerator : ["super-admin", "admin", "moderator", "user"], default : "user" }
    case 'email':
      return {type: "jhon123@domain.com"}
    case 'fullName':
      return {type: "John Smith"}
    case 'userName':
      return {type: "John123"}
    case 'gender':
      return {type: false}
    case 'age':
      return {type: 23}
    case 'bio':
      return {type: "this and type : example of the biography of a user"}
    case 'pic':
      return {type: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"}
    case 'blocked':
      return {type: false}
// note: we will continue adding schema variable types when clean up models one bu one and test the api 
    default:
      return new User({}).id;
  }
}

module.exports = defaultValues