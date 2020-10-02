let picture1 = document.querySelector("#onceMore");
let picture2 = document.querySelector("#mi");
Element.prototype.changePicture1 = function() {
    picture1.style.display = "none";
}
Element.prototype.changePicture2 = function() {
    picture2.style.display = "unset";
}
// még mindig nem működik....
function callChangePicture() {
    picture1.changePicture2();
    picture1.changePicture1();
    } 
function setTimeDelay() {
    6000;
    return ( callChangePicture() );
}
setTimeDelay();


// Próbálkozások 

/*
let setTimeDelay = () => {
    delay( () => {
        return (picture1.changePicture2(), picture1.changePicture1());
    }, 30);
};
setTimeDelay();


function setTimeout( () {
    let picture1 = document.querySelector("#onceMore");
    let picture2 = document.querySelector("#mi");
    let changePicture1 = picture1.setAttribute("style", "display: none");
    let changePicture2 = picture2.setAttribute("style", "display: unset");
    picture1.innerHTML = changePicture1;
    picture2.innerHTML = changePicture2;
    }, 3000);
setTimeout();


function changePicture1() {
    picture1.setAttribute("style", "display: none");
};
function changePicture2() {
    picture2.setAttribute("style", "display: unset");                                                                                          
};
function setTimeout( () {
    changePicture1(), 
    changePicture2()
    }, 3000);
setTimeout();


let myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve({name: "Piri"});
    }, 3000);
});
myPromise.then(
    data => console.log(data),
    err => console.error(err)
);



let asyncCall = () => {
    delay( () => {
        return (changePicture1(), changePicture2());
    }, 6000);
};
asyncCall();

 
picture1.addEventListener ("click", changePicture1(), changePicture2());
   

changePicture1();
changePicture2();
*/
