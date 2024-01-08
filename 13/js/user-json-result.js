async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  if (response.status === 200) {
    try {
      const users = await response.json();
      console.log(users);
      display(users);
    } catch (error) {
      alert("ERROR - failed to get JSON");
    }
  } else {
    alert("failed to get data");
  }
}

function display(users) {
  const result = document.querySelector("#result");
  let string = "";
  users.forEach((user) => {
    string += `<table><tr><th>이름</th><td>${user.name}</td></tr>
                <tr><th>아이디</th><td>${user.username}</td></tr>
                <tr><th>이메일</th><td>${user.email}</td></tr>
              </table>`;
  });
  result.innerHTML = string;
}

init();
