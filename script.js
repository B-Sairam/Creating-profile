async function getUser() {
    const data = await fetch('https://614eacb5b4f6d30017b4833b.mockapi.io/users', {method:'GET'});
    const user = await data.json();
    console.log(user);
    return user;
}

async function displayUser() {
    const user = await getUser();
     const userList = document.querySelector('.user-list');
         userList.innerHTML='';

     user.forEach((user)=>{
      userList.innerHTML +=`<div class= "user-container"><img class="avatar" src="${user.avatar}"/> <div class="text-con"><h2 class="user_name">${user.name}</h2> <button onclick = "deleteUser(${user.id})" >Delete</button> </div></div>`   
     })
}
displayUser();

 async function deleteUser(id) {
    console.log("User id ",id ,"Deleted");
    const data = await fetch('https://614eacb5b4f6d30017b4833b.mockapi.io/users/' +id,{method:'DELETE'});
    displayUser();
};

async function creatUser() {
   let usname = document.querySelector('#name').value
   let usavatar = document.querySelector('#avatar').value
   const data = await fetch(
       'https://614eacb5b4f6d30017b4833b.mockapi.io/users',
       { method:"POST",body:JSON.stringify({
           name: usname,
           avatar:usavatar
       }),
       headers: {"Content-Type": "application/json"}
    }
       );
   
   displayUser()
}
