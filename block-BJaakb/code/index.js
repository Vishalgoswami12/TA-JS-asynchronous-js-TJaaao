function fetch(url){
    return new Promise((res,rej)=>{
        let xhr=new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onload=()=> res(JSON.parse(xhr.response));
        xhr.onerror=()=>rej('Something wrong');
        xhr.send();
    })
}

let data = fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((data) => {
console.log(data.title);

})
.catch((Error)=> alert('error msg'))