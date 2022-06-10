let body=document.querySelector("body");
let box=document.querySelector(".container");

let url="https://www.anapioficeandfire.com/api/books";
let work=[];

function fetchData(){
    fetch(url)
    .then((res)=>res.json())
    .then(data=>{
        display(data);
        work = data;
        console.log(data)
    })
    .catch((error)=>{
        body.innerHTML=''    
        body.innerHTML= `<p> 1 of errors on the page</p>
        <h1>${error}</h1>
        <p>The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this The cause of the error is pretty straightforward, the onClick expects a function but got a string type instead. A quick fix for this is taking out the surrounding quotes and replacing with {} like this </p>        
        <h2> 20 stack frame collapsed</h2>        
        <h3>Conclusion</h3>
        <p>Errors are part of our development now and we see them even in code that works. What we do when they are found is what counts. I have a feeling you have at a point seen these errors or still have them at this moment in time. I hope this helps you fix those.
        </p>`
        let h1 = document.querySelector("h1");
        h1.style.color = "red"
        console.log("error");
        console.log(error);
    })
    }
    function display(user){
     user.forEach(elem => {
        elem.user
    //    console.log(elem,'vfgvgs')  
    body.style.margin = "50px";
        let box1 = document.createElement("div");
        box1.style.height = "200px"
        box1.style.width = "600px"
        box1.style.border = "2px dotted red"
        let title = document.createElement("h3");
        title.innerText = elem.name;
        let author = document.createElement("p");
        author.innerText = elem.authors;
        let charaterBtn = document.createElement("button");
        charaterBtn.innerHTML = `Show Character (${elem["characters"].length})`
        charaterBtn.classList.add(elem["characters"].length);
        charaterBtn.style.color = "white"
        charaterBtn.style.backgroundColor = "black"
        box1.append(title,author,charaterBtn);
        box.append(box1);
     });   
     let ch = document.querySelectorAll("button");
     console.log(ch);
     ch.forEach((v)=>{
         v.addEventListener("click",(event)=>{
             if( v.className === event.target.innerText.split(" ").slice(-1)[0].slice(1,-1) ){  
                 console.log("Working properly")
                 body.innerHTML = "";
                 body.style.backgroundColor = "purple" ; 
                 let box2 = document.createElement("a"); 
                     box2.innerText = "close";
                     box2.href = "index.html" 
                     box2.style.backgroundColor = "blue"; 
                     let h1 = document.createElement("h1");
                         h1.innerText = "Charater"
                         body.append(box2) 
                         body.append(h1)
                     
 
                 box.addEventListener("click",()=>{
                     body.innerHTML = " ";                    
                 })
                 user.forEach((e,i)=>{
                     console.log(e)
                     e["characters"].forEach((v)=>{
                     fetch(v).then(res=>res.json()).then(data => { 
                         console.log(data);
                         let wrap = document.createElement("div");
                         wrap.style.border = "2px solid white"
                     let characterName = document.createElement("h2")
                     characterName.innerText = data.name 
                     wrap.append(characterName);
                     body.append(wrap);
                      })
                     })
                 })
             }
         })
     })
    }

    fetchData();
    