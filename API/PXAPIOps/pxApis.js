const getUser= document.querySelector('.getUser');
const accountDisplay= document.querySelector('.accountsDisplay');

const sendHTTPRequest= (method,url,data)=>{
    const promise= new Promise((resolve,reject) => {
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
    xhr.setRequestHeader('X-APTRINSIC-API-KEY','');
    xhr.setRequestHeader('Connection','keep-alive');
    xhr.setRequestHeader('Accept','*/*');
    xhr.setRequestHeader('Accept-Encoding','gzip, deflate, br');



        xhr.onload= () =>{
            resolve(xhr.response);
        }
        xhr.send();
    });
    return promise;
}

const getUserData= ()=>{
    sendHTTPRequest('GET','https://api.aptrinsic.com/v1/accounts').then(responseData =>{
       
        accounts=responseData;
        console.log(typeof(accounts));
        console.log(accounts);
        
        console.log(accounts.accounts[1].name);
        // 
        accounts.accounts.forEach(element => {
           // accountDisplay.innerHTML=accounts.accounts.name;
//             console.log(element);
//             accountDisplay.innerHTML=>element.name;
            console.log(element.firstName);
    let para = document.createElement("li");
    let node = document.createTextNode(element.name);
    para.appendChild(node);
    if(element.name!="")
    accountDisplay.appendChild(para);
            
        });
        
    })
}

getUser.addEventListener('click',getUserData)
