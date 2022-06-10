var form=document.querySelector("form")
let inputText=document.querySelector("#text");
let ul= document.querySelector("ul");
let allTodos=[];

function handleInput(event){
    event.preventDefault();
let value = inputText.value
    let todo={
        name:value,
        isDone:false,
    };
    allTodos.push(todo);
    inputText.value = "";
    createUI();
}

function createUI(){
    ul.innerHTML="";
    allTodos.forEach((todo)=>{
        let li= document.createElement("li");
        let input=document.createElement("input");
        input.type="checkbox";
        input.checked=todo.isDone;
        let p =document.createElement("p");
        p.innerText=todo.name;
        let span=document.createElement("span");
        span.innerText="X";
        li.append(input,p,span);
        ul.append(li);
        input.value="";
        allTodos.forEach((e,i)=>{
            span.setAttribute("data-id",e._id)
            span.addEventListener("click",(event)=>{
                if(event.target.dataset.id===e._id){
                    allTodos.splice(i,1)
                    ul.removeChild(ul.children[i])
                }
            })
        })
    })
}
form.addEventListener("submit",handleInput);