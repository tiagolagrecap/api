
// OPTION 1 - FETCH - THEN

/* 
function fetchActivity(){
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        activity.innerHTML = `<span>Activity: </span><span>${data.activity}</span>` 
        type.innerHTML = `<span>Type: </span><span>${data.type}</span>` 
        participants.innerHTML = `<span>Participants: </span><span>${data.participants}</span>` 
        accessibility.innerHTML = `<span>Accessibility:  </span><span>${data.accessibility}</span>` 
})
}
button.addEventListener('click', fetchActivity) 
*/


//OPTION 2 - FETCH - ASYNC - AWAIT  

/* 
const url = "https://www.boredapi.com/api/activity";
const boredApi = async () =>{
    let response = await fetch(url);
    let data = await response.json();
    activity.textContent = `${data.activity}.`
}
button.addEventListener('click', boredApi) 
boredApi();
 */



//OPTION 3 - FETCH - ASYNC - AWAIT - THEN 
/*
async function bored(){
    const result = await
fetch('https://www.boredapi.com/api/activity')
.then(res => res.json())
    .then(data => {
        activity.innerHTML = `<span>Activity: </span><span>${data.activity}</span>` 
        
})
}
button.addEventListener('click', bored) 
bored(); 
 */


//OPTION 4  AXIOS\THEN


/* const axios = require('axios')

axios.get('https://www.boredapi.com/api/activity') 
    .then((response) => {
        console.log({data: response.data})
    }); */


 //OPTION 5  AXIOS - ASYNC - AWAIT    

/*  const axios = require('axios')

const fetchApi = async () => {
    try {
        const {data} = await axios.get(
            'https://www.boredapi.com/api/activity'
            );
        console.log({data});  
    } catch (error) {
        console.log({ error })
    }

}
fetchApi(); */


 //OPTION 5 PROMISE.ALL  - PROMISE 


/* const p1 = new Promise( resolve =>{
    setTimeout(() => {
        resolve(
            '2 sec')
    }, 2000);
})

const p2 = new Promise( resolve =>{
    setTimeout(() => {
        resolve(
            '5 sec')
    }, 5000);
})

Promise.all([p1, p2]).then(result => {
    console.log(result)
}) */


//OPTION 6 PROMISE.ANY

/* const p1 = new Promise( resolve =>{
    setTimeout(() => {
        resolve(
            '2 sec')
    }, 2000);
})

const p2 = new Promise( resolve =>{
    setTimeout(() => {
        resolve(
            '5 sec')
    }, 5000);
})

Promise.any([p1, p2]).then(result => {
    console.log(result)
}) */



// OPTION 1 - WEB WORKER 


/* function fetchActivity(){
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        activity.innerHTML = `<span>Activity: </span><span>${data.activity}</span>` 
        type.innerHTML = `<span>Type: </span><span>${data.type}</span>` 
        participants.innerHTML = `<span>Participants: </span><span>${data.participants}</span>` 
        accessibility.innerHTML = `<span>Accessibility:  </span><span>${data.accessibility}</span>` 
})
}
button.addEventListener('click', fetchActivity) 

var a;

function start() {
  
    if(typeof(a) == "undefined") {
      a = new Worker("worker.js");
    }
    a.onmessage = function(event) {
      document.getElementById("r").innerHTML = event.data;
    };
  }

function stop() { 
  a.terminate();
  a = undefined;
} */