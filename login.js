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
//        aptrinsic("identify",
//   {
//   //User Fields
//     "id": "unique-user-id", // Required for logged in app users
//     "email": "userEmail@address.com",
//     "firstName": "John",
//     "lastName": "Smith",
//     "signUpDate": 1522697426479, //unix time in ms
//     "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
//     "price" : 95.5,
//     "userHash": "" // optional transient for HMAC identification
//   },
//   {
//   //Account Fields
//     "id":"IBM", //Required
//     "name":"International Business Machine",
//     "Program": "Platinum" // flat custom attributes
//   });
       
        //aptrinsic('identify', {"id": "ail.c"})

        analytics.group("0e8c78ea9d97a7b8185e8632", {
  name: "Initech",
  industry: "Technology",
  employees: 329,
  plan: "enterprise",
  "total billed": 830
});
        analytics.identify("97980cfea0067", {
  name: "Peter Gibbons",
  email: "peter@example.com",
  plan: "premium",
  logins: 5
});
  
 return true;
    }
 
  };
