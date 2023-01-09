let [user] = [{
    email: "srini1@gmail.com",
    password:12
  }, 
  {
    email: "srini2@gmail.com",
  password:13
  },
  {
    email: "srini3@gmail.com",
  password:14
  }];
  
  //////////////////////////
  
  //////////user validation///////////
  
  ///temp PX identify
  
  
  function validateUser(){
    var userEmail=document.getElementById('userEmail').value;
var userPassword=document.getElementById('userPassword').value;
  ////////
  console.log("email"+ userEmail+ "pwd :"+userPassword);
    if(userEmail=="srini@gmail.com"){
      //passing user and account objects:
       aptrinsic("identify",
  {
  //User Fields
    "id": "unique-user-id", // Required for logged in app users
    "email": "userEmail@address.com",
    "firstName": "John",
    "lastName": "Smith",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"IBM", //Required
    "name":"International Business Machine",
    "Program": "Platinum" // flat custom attributes
  });
  
  return true;
    }
 
  };
