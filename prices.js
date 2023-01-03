function on_load() {
    // Get prices from server
    var obj = new Object();
    obj.UserToken = localStorage.getItem('UserToken');
    var json_str = JSON.stringify(obj);
  
    // Send request to server.
    fetch('https://webapi-sta.012global.com/api/DevTest/GetStockPrices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json_str,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ErrorCode == 2002) {
          // Assume that user session expired, then go to login page
          window.location.replace("index.html");
        }
        
        if (data.ErrorCode == "0") {
          // Update table with json result
          let prices_length = Object.keys(data.Prices).length;
          var as = data.Prices.map((m) => { return Object.values(m); });
  
          // Create a HTML Table element.
          var table = document.createElement("TABLE");
          table.border = "1";
  
          // Set the count of columns.
          const column_count = 2;
  
          // Add the header row.
          var row = table.insertRow(-1);
  
          var header_cell = document.createElement("TH");
          header_cell.innerHTML = "Ticker";
          row.appendChild(header_cell);
  
          header_cell = document.createElement("TH");
          header_cell.innerHTML = "Prices";
          row.appendChild(header_cell);
          
          // Add the data rows.
          for (var i = 0; i < prices_length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < column_count; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = as[i][j];
            }
          }
  
          // Draw the table  
          var dv_table = document.getElementById("prices_table");
          dv_table.innerHTML = "";
          dv_table.appendChild(table);
  
          // Reload automatically the page every 5 seconds
          setTimeout(() => {
            document.location.reload();
          }, 5000);
        }
      })
      .catch((error) => {
        alert('Error:', error);
      });
  }
  