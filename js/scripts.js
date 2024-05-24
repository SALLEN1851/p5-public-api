let users = [];

// FETCH DATA
async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?inc=picture,location,phone,gender,name,email,dob&results=12');
  const data = await response.json();
  users = data.results;
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


// Create a modal window

function emptyModal() { 
	const modalSection = document.createElement('section'); 
	modalSection.classList.add('modal-container');  
	modalSection.setAttribute('data-user-index', ''); 
	const modalHTML = `

    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn">close</button>
        <address class="modal-info-container">
          <img id="profile" class="modal-img" src="" alt="profile picture">
          <h3 id="name" class="modal-name cap"></h3>
          <p id="email" class="modal-text"></p>
          <p id="location" class="modal-text cap"></p>
          <div class="modal__address-details">
            <p id="cell" class="modal-text"></p>
            <p id="address" class="modal-text"></p>
            <p id="dob" class="modal-text"></p>
          </div>
        </address>
    </div>
  
  `;

	modalSection.innerHTML = modalHTML; // insert the HTML into the modal section
	modalSection.style.display = 'none'; // hide the modal by default
	document.body.insertBefore(modalSection, document.querySelector('script')); // insert the modal section before the script tag
}

emptyModal();

function modalData(user, index) {
    const modal = document.querySelector('.modal-container'); // get a reference to the modal container
    if (!user) {
      console.error('User data not found for index:', index); 
      return;
    }
    
    // Update the custom data attribute with the user's index
      modal.setAttribute('data-user-index', index);
  
      // get a reference to each HTML element that needs to be populated
      const profile = document.getElementById('profile');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const location = document.getElementById('location');
      const cell = document.getElementById('cell');
      const address = document.getElementById('address');
      const dob = document.getElementById('dob');
  
      // populate the HTML elements with the user data
      profile.src = user.picture.large;
      name.textContent = `${user.name.first} ${user.name.last}`;
      email.textContent = user.email;
      location.textContent = user.location.country;
      cell.textContent = user.cell;
      address.innerText = `${user.location.street.number} ${user.location.street.name}
      ${user.location.city}, ${user.location.state}, ${user.nat}
      ${user.location.postcode}`;
  
      // format the birthday to a local data format
      const birthday = new Date(user.dob.date);
      dob.innerText = `Birthday: ${birthday.toLocaleDateString()}`;
      modal.style.display = 'block';
  }
  
// Open the modal window
  document.addEventListener('click', (event) => {
    if (event.target.closest('.card')) {
      const card = event.target.closest('.card');
      if (!card) {
        console.error('Card element not found');
        return;
      }
      const userIndex = card.dataset.index;
      console.log('Card clicked. User index:', userIndex); 
      if (users[userIndex]) {
        modalData(users[userIndex], userIndex);
      } else {
        console.error('User data not found for index:', userIndex);
      }
    }
  });

  // Close the modal window
  document.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal-container');
    if (event.target.id === 'modal-close-btn') {
      modal.style.display = 'none';
    }
  });