let users = [];

// FETCH DATA
async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?inc=picture,location,phone,gender,name,email,dob&results=12');
  const data = await response.json();
  const users = data.results;
  displayUsers(users);
    console.log(users);
  return users;
}  

// DISPLAY USERS

function displayUsers(users) {
    const usersContainer = document.getElementById('gallery');
    usersContainer.innerHTML = ''; 

    users.forEach((user, index) => { // loop through each user
      const div = document.createElement('div'); // create a new div
      div.classList.add('card'); // add the card class to the div
      // give the card div a custom data attribute matching its index in the users array
      div.setAttribute('data-index', index);
      // generate HTML
      const userHTML = `
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 class="card-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}, ${user.location.country}</p>
        </div>
      `;
  
      div.insertAdjacentHTML('beforeend', userHTML); // insert the HTML into the card div
        usersContainer.appendChild(div); // append the card div to the gallery div
    });
  }
  
  getUsers();
