'use strict';

const account1 = {
    owner: 'user2 2',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 11,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-13T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
      
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-06-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  const account3 = {
    owner: 'Srinivas M',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 9876,
      movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-13T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  }
  
  
  const account4 = {
     owner: 'Sarah Smith',
     movements: [430, 1000, 700, 50, 90],
   interestRate: 1,
     pin: 4444,
      movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-06-26T12:01:20.894Z',
    ],
   };
  
  const account5 = {
    owner: 'Hellen G',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 9876,
      movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-13T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  }
  
  
  
  const accounts = [account1,account2,account3,account4,account5];
  

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const logoutButton = document.querySelector('.__btn');
				
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////displayMovements///////////////////////

// const displayMovements= function (movements){
//   containerMovements.innerHTML='';

//   // const movs=sorts? movements.slice().sort((a,b)
//   //   => a - b) : movements;

//    movements.forEach(function (mov, i){
//     const type= mov > 0 ? 'deposit':'withdrawal';
//     const html=` <div class="movements__row">
//     <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
//     <div class="movements__value">${mov}</div>
//       </div>  `;

//     containerMovements.insertAdjacentHTML('afterbegin',html);
//   });

// };

let currentAccount,timer;

const formatMovementDate = function(date){
  const calcDaysPassed = (date1,date2) => 
 Math.round(Math.abs(date2 - date1)/ (1000*60*60*24));

 const daysPassed= calcDaysPassed(new Date(),date);

 if(daysPassed===0) return 'Today';
 if(daysPassed === 1) return 'yesterday';
 if(daysPassed <=7) return `${daysPassed} days ago`;
 
  const day=`${date.getDate()}`.padStart(2,0);
  const month=`${date.getMonth() + 1}`.padStart(2,0);
  const year=date.getFullYear();
  return `${day}/${month}/${year}`;

 
}

const startLogoutTimer = function(){
      // set time to 5 mints

  let time=3600;
      //call timer every second

const timer=setInterval(function() {
  const min=String(Math.trunc(time/60)).padStart(2,0);
  const sec= String(time%60).padStart(2,0);
    ///in each call print remaining time

      labelTimer.textContent= `${min}:${sec}`  ;
   ///when 0 stop timer logout user
   if(time===0){
   clearInterval(timer);
   labelWelcome.textContent= 'Log in to get started';
   containerApp.style.opacity=0;
	   window.aptrinsic('reset');
   }
   time--;

    }, 1000);

    return timer;
 
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date= new Date(acc.movementsDates[i]);

    const displayDate=formatMovementDate(date);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} 
    </div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}₹</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

  

  ////////////display summary/////////////////

  const calcDisplaySummary = function(acc){

    const incomes=acc.movements.filter(mov=>mov>0).reduce((arr,cur)=>arr+cur,0);
    labelSumIn.textContent=`${incomes}₹`;
    const outcome=acc.movements.filter(mov=>mov<0).reduce((arr,cur)=>(arr+cur),0);
    labelSumOut.textContent=`${Math.abs(outcome)}₹`;

    const interest= acc.movements.filter(mov=>mov>0).map(deposit =>deposit* 1.2/100)
    .filter((int,i,arr)=>{
      //console.log(arr);
      return int>=10;
    })
    .reduce((acc,int)=>acc+int,0)
    labelSumInterest.textContent=`${interest}₹`
  };


//////////////////////////////////////User names

const createUserNames = function(accs){

  accs.forEach(function(acc){
  acc.userName= acc.owner.toLowerCase().split(' ').map(name =>
      name[0]
     ).join('');
  
  })
  

}

createUserNames(accounts);
// console.log(accounts);

///////////print balance//////////

const calcPrintBalance= function(account){

  
    account.balance= account.movements.reduce((acc,cur,i,arr) =>
    acc+=cur
 ,0);
 labelBalance.textContent= `${account.balance}₹`
   
};

//console.log(accounts);

////event handlers//////////////////

// currentAccount=account1;
// updateUI(currentAccount);
// containerApp.style.opacity=100;


//////Login//////////////////////////
    // var attrib_value= document.getElementById("myCheck").checked;


btnLogin.addEventListener('click',function(e){
  ///prevent form from submitting 
  e.preventDefault();
  currentAccount= accounts.find(acc=>acc.userName===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){


     //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": currentAccount.owner, // Required for logged in app users
    //"email": currentAccount.owner.toLowerCase().split(' ')[0]+currentAccount.owner.toLowerCase().split(' ')[1]+"@bok.in",
	"email":"srinivas.myakala18@gmail.com",
    "firstName": currentAccount.owner.split(' ')[0],
    "lastName": currentAccount.owner.split(' ')[1],
    "signUpDate": parseInt((new Date().getTime() / 1000).toFixed(0)), //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification,
	
  },
  {
  //Account Fields
    "id":"BOK", //Required
    "name":" ",
    "Program": "Platinum" // flat custom attributes
	
	////////////////////////////
	
// 	"id": "srinivas.myakala18@gmail.com", // Required for logged in app users
// 			"email":  "srinivas.myakala18@gmail.com",
// 			"firstName":  "srinivas.myakala18@gmail.com",
// 			"lastName": "m",
// 			"role": "",
//             "website":"demo.abc.com",
//            "city":"Khammam",
//             "surveys":true,
//            "countryCode":"US",
//          "License" : "Standard",
//          "userRank":2323,
//          "rank":"",
//          "ChurnDate":"",
// 		}, {
// 		//Account Fields
// 			"id": "BOK", //Required
// 			"name": "Bank of Kavadi",
//             "countryCode":"IN",
//             "city":"Secunderabad",
//             "sfdcId": "00302323212",
// 			"Program": "Platinum" ,
//             "Accountvalue": "N",// flat custom attributes
//            "Customer ID": 765,
// 	"Handle":"Prod",
// 	"Kind":"prod user",
// 	"status":"active"
	
	
  }
	 );
let userType="Admin";
// if(currentAccount.userName==="ss"){
// userType="Sales";
// }
// if(currentAccount.userName==="sm"){
// userType="Engineering";
// }
// if(currentAccount.userName==="jd"){
// userType="Admin";
// }
// aptrinsic('track', 'login', {"name": currentAccount.owner }); 

aptrinsic('set', 'globalContext', {'userType' : userType});

   ///display UI welcome message
   labelWelcome.textContent= `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
   containerApp.style.opacity=100;

   ///create dates
   const now= new Date();
const day=now.getDate();
const month=now.getMonth()+1;
const year=now.getFullYear();
const hour=now.getHours();
const minutes=now.getMinutes();

labelDate.textContent=`${day}/${month}/${year},${hour}:${minutes}`;



   ///clear inputfields on login
    inputLoginPin.value=inputLoginUsername.value='';
    inputLoginPin.blur();


    // Timer 
    if(timer) clearInterval(timer);
    timer=startLogoutTimer();

   //displaymovemets
    updateUI(currentAccount);
  }
});

/////
function logout() {
	window.aptrinsic('reset');
	   containerApp.style.opacity=0;
	logoutButton.style.opacity=0;
	

}

/////////UI Update//////////////

const updateUI= function(acc){
  displayMovements(acc);

//display summary
calcDisplaySummary(acc);
///display balance 
calcPrintBalance(acc);
};

//////////Transfers///////

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount= Number(inputTransferAmount.value);
  const receiverAccount=accounts.find(
    acc=>acc.userName===inputTransferTo.value
    );

    inputTransferTo.value=inputTransferAmount.value='';
    if(amount>0 && receiverAccount &&
       currentAccount.balance>=amount&&
        receiverAccount?.userName!==currentAccount.userName){
          //doing transfer
         currentAccount.movements.push(-amount);
          receiverAccount.movements.push(amount);

///add transfer date
currentAccount.movementsDates.push(new Date().toISOString());
receiverAccount.movementsDates.push(new Date().toISOString());

          //update UI
          updateUI(currentAccount);
          ///reset timer
          clearInterval(timer);
          timer=startLogoutTimer();
        }
///PX custom event
       aptrinsic('track', 'Transfer', {"receiver name":receiverAccount.owner,"amount":amount}); 

});

////////Loan/////////

 btnLoan.addEventListener('click',function(e){
   e.preventDefault();

   const amount= Number(inputLoanAmount.value);

   if(amount>0&& 
    currentAccount.movements.some(mov=>mov>amount*0.1)){
      ///Add movement
      currentAccount.movements.push(amount);
      ///add loan date
currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      ///
    ///PX custom event
       aptrinsic('track', 'Loan', {"amount":amount}); 
    }
    inputLoanAmount.value='';
    clearInterval(timer);
    timer=startLogoutTimer();

 })

//////////////////////////////
//////////////////close account//////////////////////////////////

btnClose.addEventListener('click', function(e){
  e.preventDefault();


  if(inputCloseUsername.value===currentAccount.userName&&
    Number(inputClosePin.value)===currentAccount.pin){

      const index= accounts.findIndex(
        acc=> acc.userName===currentAccount.userName);
        ///delete account
      accounts.splice(index,1);
      ////hide Ui
    containerApp.style.opacity=0;
	  const closingBalance= currentAccount.movements.reduce((acc,cur,i,arr) =>
   acc+=cur
,0);
	  ///PX custom event
       aptrinsic('track', 'close account', {"account user": currentAccount.owner,"closing Balance": closingBalance}); 
  }
  inputCloseUsername.value=inputClosePin.value='';

});

/////////sort movements/////
let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const InrtoUsd= 0.014;
// const movementsUSD = movements.map(mov =>  mov*InrtoUsd
//  );
//  console.log(movements);
//  console.log(movementsUSD);
/////////////////////////////////////////////////


//////////////////FILTER///////////////////////

const deposits= movements.filter(function (mov){
  return mov > 0 ;
})

//console.log(deposits);

const depositsFor =[];
for( const mov of movements) if(mov>0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals= movements.filter(mov=> mov<0);
// console.log(withdrawals);

/////////////////Reduce//////////////////

// const balance= movements.reduce(function(acc,cur,i,arr){
//   return acc+=cur;
// },0);///here 0 is initial value of accumulator

const balance= movements.reduce((acc,cur,i,arr) =>
   acc+=cur
,0);///here 0 is initial value of accumulator

// console.log(balance);

//Maximum value

const maxBalance= movements.reduce( (acc,cur,i)=>
acc > cur ? acc:cur
,0)

//console.log(maxBalance);

//////////////Chaining all////////////////////////
const InrtoUsd= 0.014;

const totalDepositsUSD= movements
.filter(mov => mov > 0)
.map((mov,i,arr)=>{
  //console.log(arr);
 return  mov*InrtoUsd})
.reduce((acc,cur)=> acc+cur,0);

//console.log(totalDepositsUSD);


/////////////////Find Method///////

// const firstWithdrawal=movements.find(mov=>mov<0)

// console.log(firstWithdrawal);


// const account =accounts.find(mov=>mov.owner==='Jessica Davis');
// console.log(account);

////////////some every includes/////////

// console.log(movements);

// // console.log(movements.includes(-130));

// const anyDeposits= movements.some(mov=>mov>340000);
// // console.log(anyDeposits);

// console.log(account4.movements.every(mov=> mov>0));


// ///////flat and flatmap

// const arr=[[1,2,3],5,[8,6]]
// console.log(arr.flat());
// console.log(arr.flat(2));

// const overallBalance=accounts.map(acc =>acc.movements).flat().reduce((acc,cur)=>acc+cur);;

// console.log(overallBalance);
// //flatmap
// const overallBalance2=accounts
// .flatmap(acc =>acc.movements)
// .reduce((acc,cur)=>acc+cur,0);;
// console.log(overallBalance2);

//////////////////////////////////////


const ul = document.querySelector('ul');
const fruits = ['Apple', 'Orange', 'Banana', 'Melon'];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement('li');
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
