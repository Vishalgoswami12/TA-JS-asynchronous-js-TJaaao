const avatar = document.querySelector('img');
const name = document.querySelector('h2');
const username = document.querySelector('a');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const main = document.querySelector('main');
const input = document.querySelector('input');
const folllowersList = document.querySelector('.followers-list');
const folllowingList = document.querySelector('.following-list');

// Handle Input Function
function handleInput(event) {
  if (event.keyCode === 13) {
    let val = event.target.value;
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://api.github.com/users/${val}`);

    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      avatar.src = userData.avatar_url;
      name.innerText = userData.name;
      username.innerText = userData.login;
      username.href = `https://github.com/${userData.login}`;
      followers.innerText = `Followers: ${userData.followers}`;
      following.innerText = `Following: ${userData.following}`;
      event.target.value = '';

      // Followers Array
      let flrs = new XMLHttpRequest();
      flrs.open(`GET`, `https://api.github.com/users/${val}/followers`);

      flrs.onload = function () {
        let followersArr = JSON.parse(flrs.response);
        folllowersList.innerHTML = '';
        followersArr.forEach((elem) => {
          let div = document.createElement('div');
          div.classList.add('img-box');
          let img = document.createElement('img');
          img.classList.add('full-width');
          img.src = elem.avatar_url;
          div.append(img);
          folllowersList.append(div);
        });
      };
      flrs.send();

      // Following Array

      let flws = new XMLHttpRequest();
      flws.open(`GET`, `https://api.github.com/users/${val}/following`);

      flws.onload = function () {
        let followingArr = JSON.parse(flws.response);
        folllowingList.innerHTML = '';
        followingArr.forEach((elem) => {
          let div = document.createElement('div');
          div.classList.add('img-box');
          let img = document.createElement('img');
          img.classList.add('full-width');
          img.src = elem.avatar_url;
          div.append(img);
          folllowingList.append(div);
        });
      };
      flws.send();
    };
    xhr.onerror = function () {
      main.innerHTML = `<p>Something went wrong...<p>`;
    };

    xhr.send();
  }
}

// Listner at Input
input.addEventListener('keyup', handleInput);


// Get Random cats
var btn = document.querySelector("#btn");
var img = document.querySelector("#random");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      img.src = JSON.parse(XHR.responseText).file;  
    }
  }
  XHR.open("GET", "https://api.thecatapi.com/v1/images/search?limit=1&size=full");
  XHR.send();
});