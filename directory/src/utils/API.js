import axios from "axios";

//https://randomuser.me/documentation#howto

export default {
  getUsers: function(){
    axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
      

};