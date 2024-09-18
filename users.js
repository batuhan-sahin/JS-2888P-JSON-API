async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const fetchData = await response.json();
    console.log(fetchData);
    return fetchData;
  } catch (error) {
    console.log("Error to get Data:" + error);
  }
}

const renderData = (fetchData) => {
  const cardDiv = document.getElementById("card-container");
  const userCards = fetchData.map((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const userId = document.createElement("div");
    userId.classList.add("user-id");
    userId.textContent = user.id;
    card.appendChild(userId);

    const userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.innerHTML = `<i class="fa-solid fa-user fa-sm"></i> ${user.name}`;
    card.appendChild(userName);

    const userNickName = document.createElement("div");
    userNickName.classList.add("user-nick-name");
    userNickName.textContent = user.username;
    card.appendChild(userNickName);

    const userEmail = document.createElement("div");
    userEmail.classList.add("user-email");
    userEmail.innerHTML = `<i class="fa-solid fa-envelope fa-sm"></i> ${user.email}`;
    card.appendChild(userEmail);

    const userAddress = document.createElement("div");
    userAddress.classList.add("user-address");
    userAddress.innerHTML = ` <i class="fas fa-map-marker-alt"></i>
      ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
    `;
    card.appendChild(userAddress);

    const userPhone = document.createElement("div");
    userPhone.classList.add("user-phone");
    userPhone.innerHTML = `<i class="fa-solid fa-phone"></i> ${user.phone}`;
    card.appendChild(userPhone);

    const userWebsite = document.createElement("div");
    userWebsite.classList.add("user-website");
    userWebsite.innerHTML = `<i class="fa-brands fa-chrome"></i> ${user.website}`;
    card.appendChild(userWebsite);

    const btn = document.createElement("a");
    btn.classList.add("btn");
    btn.innerHTML = `<a href="posts.html?userId=${user.id}" class="button">Show posts</a>`;
    card.appendChild(btn);

    return card;
  });

  userCards.forEach((card) => cardDiv.appendChild(card));
};
getData().then((fetchData) => {
  renderData(fetchData);
});
