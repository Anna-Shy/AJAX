fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    for (let index = 0; index < json.length; index++) {
      document.body.style.display = 'grid';
      document.body.style.gridTemplateColumns = '1fr 1fr 1fr';
      
      document.body.innerHTML += `<div class='info' 
      style="background-color: #EDEDED;
      text-align: center; border-radius: 15px;
      padding: 10px; margin: 10px">
      <p><b>Full name:</b> ${json[index].name}<br> 
      <b>Username:</b> ${json[index].username}<br>
      <b>Email:</b> ${json[index].email}<br>
      <b>Phone number:</b> ${json[index].phone}<br>
      <b>Website:</b> ${json[index].website}<br></p>
        <form>
          <button class='edit' onclick='btn_edit()'>Edit</button>
          <button class='delete' onclick='btn_delete()'>Delete</button>
        </form>
      </div>`;
    }
  });

function btn_edit() {
  let username = prompt('Enter new username');
  let mail = prompt('Enter new email');

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'PUT',
    body: JSON.stringify({
      username: username.value,
      email: mail.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function btn_delete() {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
