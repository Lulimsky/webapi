let p = document.getElementById("clkbtn");
p.onclick = on_button_click;

var agent_token = "738CD655-02D3-44FD-9DEE-B2B0AF5E363B";

function validate_email(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function on_button_click() {
  console.log('here');
 // var email = document.getElementById("email").value;

  // Check if email is valid
  if (!validate_email(email)) {
    alert("Invalid email");
    return;
  }
  
  // Validate passwords are equal
  var password = document.getElementById("password").value;
  var re_password = document.getElementById("re_password").value;

  if (password !== re_password) {
    alert("Password mismatch");
    return;
  }

  // Create json from input data
  var obj = new Object();
  obj.AgentToken = agent_token;
  obj.Email = email;
  obj.Password = password;
  var json_str = JSON.stringify(obj);

  // Send request to server
  fetch('https://webapi-sta.012global.com/api/DevTest/AddUser', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: json_str,
  })
    .then((response) => response.json())
    .then((data) => {
      // Check error
      if (data.ErrorCode != "0") {
        alert(data.Error);
      }
    })
    .catch((error) => {
      alert('Error:', error);
    });
  
  // On ok redirect to login page
  window.location.replace("login.html");
}

p.addEventListener('click', on_button_click);  