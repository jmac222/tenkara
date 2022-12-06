const url = "/api/v1";

const nameInput = document.querySelector(".name");
const starInput = document.querySelector(".stars");
const subjectInput = document.querySelector(".subject");
const buttonSub = document.querySelector(".post-form");
const postConatainer = document.querySelector(".posts");

buttonSub.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const starValue = starInput.value;
  const subjectValue = subjectInput.value;

  if (subjectValue == "" || starValue == "" || nameValue == "") {
    alert("THIS IS AN EMPTY SUBJECT");
  }

  try {
    const post = { name: nameValue, stars: starValue, subject: subjectValue };
    console.log(post);

    await axios.post(`${url}/upload`, post);

    fetchPosts();

    nameInput.value = "";
    starInput.value = "";
    subjectInput.value = "";
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`${url}/upload`);

    const postSetup = posts
      .map((post) => {
        return `<div>
            <h2>${post.name}</h2>
            <h3>${post.stars}</h3>
            <p>${post.subject}</p>
            </div>`;
      })
      .join("");

    postConatainer.innerHTML = postSetup;
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();
