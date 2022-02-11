// const Api_url = "http://localhost:3333/tweets"
// const Api_url = "http://localhost:3333"
const Api_url = process.env.REACT_APP_API_URL;


export function getTweets(){
    return fetch(`${Api_url}/tweets`)
    .then((tweet) => tweet.json())
    .then((data)=> {return data})
}

// export function getTweetsById(){
//     return fetch(Api_url)
//     .then((tweet) => tweet.json())
//     .then((data)=> {return data})
    
// }

// export function getTweetsByUserName(username){
//     return fetch(Api_url/username, {
//         method: 'GET',
//          headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzYW50YWNsYXVzIiwibmFtZSI6IlNhbnRhIiwiaWF0IjoxNjQ0MzIzMzMzfQ.BcbxfuFseGfGyO7jO_K_C_9AemBkRN6uw7pStlEvr5w',
//     },   
//     })
//     .then((tweet) => tweet.json())
//     .then((data)=> {return data})
// }


export function getTweetsByUserName(username) {
    return fetch(`${Api_url}/tweets/${username}`)
    .then((res) => res.json())
  }
  

export function submitMessage(data) {
    console.log(data);
   
    fetch(`${Api_url}/tweets/1`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzYW50YWNsYXVzIiwibmFtZSI6IlNhbnRhIiwiaWF0IjoxNjQ0MzIzMzMzfQ.BcbxfuFseGfGyO7jO_K_C_9AemBkRN6uw7pStlEvr5w',
    },
    body: JSON.stringify(data),
    
  }).then(response => 
      response.json()).then(json => console.log(json));
  
    return Promise.resolve();
  }


//   export function submitMessage(data) {
//     console.log(data);
//     fetch(`${Api_url}/1`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//       },
//     body: JSON.stringify(data),
    
//   })
  
//     return Promise.resolve();
//   }



export async function getLoginToken({ username, password }) {
    return fetch(`${Api_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    })
    .then((res) => res.json());
  }
  