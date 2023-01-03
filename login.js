let q = document.getElementById("login_clk_btn");
q.onclick = login_on_button_click;

var agent_token = "738CD655-02D3-44FD-9DEE-B2B0AF5E363B";

function login_on_button_click() {
  var email = document.getElementById("email").value;
  
  // Check if email is valid
  if (!validate_email(email)) {
    alert("Invalid email");
    return;
  }

  // Get password value from input text
  var password = document.getElementById("password").value;

  // Create json from input data
  var obj = new Object();
  obj.AgentToken = agent_token;
  obj.Email = email;
  obj.Password = password;
  var json_str = JSON.stringify(obj);

  // Send request to server.
  fetch('https://webapi-sta.012global.com/api/DevTest/UserLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: json_str,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ErrorCode == "0") {
        // Save user token in local storage
        localStorage.removeItem('UserToken');
        localStorage.setItem('UserToken', data.UserToken);

        // Redirect to prices view page
        window.location.replace("stockprices.html");
      }
    })
    .catch(function(error) {
      alert(error);
    });
}
