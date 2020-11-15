import axios from "axios";

//https://randomuser.me/documentation#howto

export default {
  getUsers: function(){
    axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
      

};

//pseudo code notes

// search bar = use effect

// click sort can be use effect or set state

// use jumbotron for top

// input box for search box

// use css grid / bootstrap for employee directory, first row must be header row that can sort everything below

// Tie in values from axios unto the spreadsheet

// click values "name" phone, etc. need use effects

// input box also will have use effects


// two employee lists:
// set master list: one from the api
// set visible list: one that is visible
// this way I don't lose the employees when i clear search value

// axios call for the random "user"

// Bonus:
// sort key
// <!-- import axios from "axios";


// // Export an object containing methods we'll use for accessing the random user API
// export default {
//   getUsersByLanguage: function(language) {
//     return new Promise((resolve, reject) => {
//       axios.get("https://randomuser.me/api/?results=50?inc=name,phone,dob,email,picture").then((res) => {
//         const users = res.data.results;
//         const results = users.map((user) => {
//           return {
//             firstname: user.name.first,
//             lastname: user.name.last,
//             email: user.email,
//             picture: user.picture.large,
//             dob: user.dob
//           };
//         });
//         resolve(results);
//       }).catch((err) => reject(err));
//     });
//   },
//   // Return a Promise to simulate an async call
//   getLanguagesList: function() {
//     return new Promise((resolve) => {
//       resolve(languages);
//     });
//   }
// }; -->