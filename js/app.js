// CODE EXPLAINED channel

const list = document.getElementById("list");
function addToDo(toDo ){
const text = <li class="item">
<i class="co fa fa-circle-thin" job="complete"></i> <p class="text"> ${toDo} </p>
<i class="de fa fa-trash-o" job="delete"></i> </li>`
}
const position = "beforeend";
list.insertAdjacentHTML(position, text);
addToDo("Drink Coffee");

const input = document.getElementById("input");
document.addEventListener( "keyup",function(event){ if(event.keyCode == 13 ){ const toDo= input.value;
if(toDo){
}
addToDo(toDo);
input.value = "";
});
}

document.addEventListener("keyup",function(event){ if(event.keyCode == 13){
const toDo= input.value;
if(toDo){
addTod(toDo, id, false, false); LIST.push(
{
name: toDo,
id: id,
}
}
});
done: false,
trash:false
}
);
input.value = "";
id++;
*

const CHECK="fa-check-circle"; const UNCHECK="fa-circle-thin"; const LINE_THROUGH = "line Through";
function addToDo ( toDo,id, done, trash){
if( trash ){ return; }
const DONE = done? CHECK
UNCHECK;
const LINE = done? LINE_THROUGH: "";
const text='<li class="item">
<i class="fa
${DONE} complete" job="complete" id="${id}"></i>
}
<p class="text ${LINE}"> ${toDo} </p>
<i class="fa fa-trash-o delete" job="delete" id="${id}"></i> </li>`;
const position = "beforeend";
list.insertAdjacentHTML(position, text);
>
M
