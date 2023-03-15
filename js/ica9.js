let btn = document.querySelector("#button");

function Btnchange(){
    btn.textContent = "Wow! Someone Can Follow Instructions";
    btn.style.backgroundColor = "Yellow"
}

btn.addEventListener('click', Btnchange);



let greetingBtn= document.querySelector("#greetingBtn");

function alertUser(){
    alert("Hello! Welcome to my page.")
}

greetingBtn.addEventListener('click', alertUser)



let btn2 = document.querySelector("#button2");

function Btn2change(){
    btn2.textContent = "Hey! You changed the content of this box!";
    btn2.style.backgroundColor = "Blue";
    btn2.style.border = "40px solid green"
}

btn2.addEventListener('click',Btn2change)
