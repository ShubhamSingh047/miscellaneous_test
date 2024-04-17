const jokesContainer = document.getElementById("jokes");

const btn = document.getElementById("btn");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist,explicit";

const getJoke = async () => {
  jokesContainer.classList.remove("fade");
  try {
    const res = await fetch(url);
    const data = await res.json();
    const joke =
      data && data.joke ? data.joke : `${data.setup} \n ${data.delivery}`;
    jokesContainer.textContent = joke;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    console.log("I am here ");
    jokesContainer.classList.add("fade");
  }
};
btn.addEventListener("click", getJoke);
getJoke();
