const input = document.querySelector("input");
const body = document.querySelector("body");
let div= document.querySelector(".img-div");

function handleCheck(event){
    var query = event.target.value;
if(event.keyCode === 13){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://api.unsplash.com/search/photos/?client_id=bDYd2RH-Mft4a5AOCS3wfel0e2NWxCG2v-36kSj1ovc&query=${query}`)
    xhr.onload=function(){
        let imageData = JSON.parse(xhr.response);
        displayImg(imageData.results);
    }
    xhr.send();
    event.target.value = " ";
}
}

function displayImg(arr = []) {
    div.innerHTML = '';
    arr.forEach((item, i) => {
        div.innerHTML += `
            <img src=${item.urls.small}  alt=${item.alt_description || 'unsplashImg'}>
        `
    })
}

input.addEventListener('keyup',handleCheck);