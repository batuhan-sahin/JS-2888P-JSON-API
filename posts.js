const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

async function fetchUserData() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const fetchUserData = await response.json();
    console.log(fetchUserData);
    return fetchUserData;
  } catch (error) {
    console.log("Error to get Data: " + error);
  }
}

const renderPostData = (fetchUserData) => {
  const postContainer = document.getElementById("post-container");

  fetchUserData.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("post-card");

    const postId = document.createElement("div");
    postId.classList.add("post-id");
    postId.textContent = `Post ID: ${post.id}`;
    card.appendChild(postId);

    const postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    postTitle.innerHTML = `<strong>Title:</strong> ${post.title}`;
    card.appendChild(postTitle);

    const postBody = document.createElement("div");
    postBody.classList.add("post-body");
    postBody.textContent = post.body;
    card.appendChild(postBody);

    postContainer.appendChild(card);
  });
};

fetchUserData().then(renderPostData);
