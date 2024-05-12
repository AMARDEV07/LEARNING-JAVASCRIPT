console.log("ky b macher ki jhnat");

const API_key="866969aef76e91f075b025495901a565";
 async function setwatherapi(){
    let lat=34.5;
    let lon=49.4;

const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
const data =await response.json();
console.log("data",data);


}
