// FETCH DATA
async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?inc=picture,location,phone,gender,name,email,dob');
  const data = await response.json();
  const users = data.results;
  displayUsers(users);
    console.log(users);
  return users;
}  

function displayUsers(users) {
    const usersContainer = document.querySelector('.search-container')
    const usersHTML = users
    .map(
        (user) => `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${user.picture.thumbnail}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="card-text">${user.email}</p>
                <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
            </div>`
    )
    .join('');
    usersContainer.insertAdjacentHTML('beforeend', usersHTML);
}

getUsers();