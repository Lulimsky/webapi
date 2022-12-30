let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
  
//signup.addEventListener("click", () => {
//    slider.classList.add("moveslider");
  //  formSection.classList.add("form-section-move");
//
  
//login.addEventListener("click", () => {
  //  slider.classList.remove("moveslider");
    //formSection.classList.remove("form-section-move");
//});

let p = document.getElementById("clkbtn");
p.onclick = on_button_click;

//var myHeaders = new Headers();
//myHeaders.append("Authorization", "Bearer 738CD655-02D3-44FD-9DEE-B2B0AF5E363B");
//
//var formdata = new FormData();
//
//var requestOptions = {
//  method: 'POST',
  //headers: myHeaders,
  //body: formdata,
 // redirect: 'follow'
//};

//fetch("https://webapi-sta.012global.com/api/DevTest/SendVerificationEmail", requestOptions)
  //.then(response => response.text())
  //.then(result => console.log(result))
 // .catch(error => console.log('error', error)); 
//

const BASE_URL = 'https://webapi-sta.012global.com/api/DevTest';
const AGENT_TOKEN = "738CD655-02D3-44FD-9DEE-B2B0AF5E363B";

// Declaración de la funcón
// Parametros por posición.
const post = async (endpoint, body) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
  };

  return fetch(`${BASE_URL}${endpoint}`, requestOptions);
};

const test = async (email, password) => {
    const signUpResponse =  await post('/UserLogin', {
  "AgentToken": AGENT_TOKEN,
  "Email": emailele,
  "Password": passwordele,
})
    
    console.log('[API-STATUS]', signUpResponse.status)
    
    const signUpJson = await signUpResponse.json()
    
    console.log('[SIGN UP]', signUpJson)
  
  const response =  await post('/SendVerificationEmail', {
  "AgentToken": AGENT_TOKEN,
  "Email": emailele
})

  const json = await response.json()
  
  console.log(json)
}

test("lucila.mociulsky@holbertonstudents.com")
