// Global scope

/*
var globalName = "Joe";
function something() {
    var globalName = "Jack";
    console.log(globalName);
}
something();
console.log(globalName);
*/

// Jack, Joe  _function scope


/*
var globalName = "Joe";
function something() {
    globalName = "Piri";
    console.log(globalName);
}
something();
console.log(globalName);
*/

// Piri, Piri  _function scope


/*
let name = "Sanyi";
{
    let name = "Pisti";
    console.log(name);
}
console.log(name);
*/

// Pisti, Sanyi  _local scope


/*
let name = "Sanyi";
{
    name = "Pisti";
    console.log(name);
}
console.log(name);
*/

// Pisti, Pisti  _local scope


/*
const NAME = "Sanyi";
{
    const NAME = "Pisti";
    console.log(NAME);
}
console.log(NAME);
*/

// Pisti, Sanyi  _local scope


/*
const NAME = "Sanyi";
{
    NAME = "Pisti";
    console.log(NAME);
}
console.log(NAME);
*/

// hiba  _local scope