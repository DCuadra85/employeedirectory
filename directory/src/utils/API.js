import axios from "axios";

// const languages = [
//   "JavaScript",
//   "Python",
//   "C",
//   "Ruby",
//   "Java",
//   "PHP",
//   "C#"
// ];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsers: function(){
    axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
      

};