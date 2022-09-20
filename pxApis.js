const getUser= document.querySelector('.getUser');
const accountDisplay= document.querySelector('.accountsDisplay');

const sendHTTPRequest= (method,url,data)=>{
    const promise= new Promise((resolve,reject) => {
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
    xhr.setRequestHeader('X-APTRINSIC-API-KEY','6234ac6d-ed3b-41c9-9343-88eb319b0e30');
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
        console.log(accounts);
        // 
        accounts.accounts.forEach(element => {
            accountDisplay.innerHTML="a";
        });
        
    })
}

getUser.addEventListener('click',getUserData)