// FETCH DATA
async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?inc=picture,location,phone,gender,name,nat');
  const data = await response.json();
    console.log(data);
  return data;
}

getUsers();