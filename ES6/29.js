// Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});