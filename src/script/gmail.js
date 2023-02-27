function sendJSON() {
    let gmail = document.querySelector('#gmail');
    let result = document.querySelector('.result');
    let xhr = new XMLHttpRequest();
    let url = "https://redplants-portfolio.netlify.app/dist/json/json.php";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        result.innerHTML = this.responseText;
      }
    };

    var data = JSON.stringify({ "gmail ": gmail.value});

    xhr.send(data);
  }