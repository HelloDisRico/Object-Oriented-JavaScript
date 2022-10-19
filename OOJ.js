console.log("Ninja")
/* " Everything in Js, is an Object"
-Objects in Js are quite like objects in real life
- They have properties and things they can do (methods)
----------------------------------------------------------------------------------
Introduction(#1)

Ninja
names
(3) ['ryu', 'crysta', 'mario']0: "ryu"1: "crysta"2: "mario"length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
names.length
3
names.sort()
(3) ['crysta', 'mario', 'ryu']
window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
window.innerWidth
685
null
null
let name = 'mario'
undefined
name
'mario'
name.length
5
var name2 = new String('ryu')
undefined
name2
String {'ryu'}
var names = ['ryu','crysta','mario']
---------------------------------------------------------------------------------

// #2
let userOne ={
    email:'ryu@ninjas.com',
    name:'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }

};

let userTwo ={
    email:'Yoshi@ninjas.com',
    name:'Yoshi',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }

};

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'score is now',this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
         return u.email != user.email;
        })
    } 
}

*/
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');}
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}
function Admin(...args){   // ... Definition of 3 dots= 
    User.apply(this, args)
    this.role = 'super admin';
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(users => {
        return userOne.email != u.email;
    });
};


let userOne = new User('kevin@gmail.com', 'kevin');
let userTwo = new User ('rico@gmail.com', 'rico'); //Classes
let admin = new Admin('kein@gmailk','iuashd')

let users = [userOne, userTwo, admin];
console.log(admin)

//let nums = [1,2,3]
//console.log(nums)
//console.log(nums.sort())

//let admin = new Admin ('shaun@ninjas.com','shaun');
//let users = [userOne, userTwo, admin];


// admin.deleteUser(userOne);
// userOne.deleteUser(userTwo);
// console.log(users)
//userTwo.login().updateScore().updateScore().logout();




//console.log(userOne)
//console.log(userTwo)
// the 'new keyword
// - creates a new empyty object{}
// - sets the value of 'this' to be the new empty object
// - calls the constrctor method
/*
console.log(userOne.name)
console.log(userOne.login())
console.log(userOne.logout())

userOne.name ='Yoshi';
console.log(userOne.name)  
console.log(userOne['email'])
//console.log(userone['name'])

let prop = 'name'
userOne[prop]
prop = 'email'


userOne.age = 25
console.log(userOne.age)
userOne.logInfo = function(){}

*/
