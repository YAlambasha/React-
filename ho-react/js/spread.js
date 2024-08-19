//the syntax is three dots(...)followed by the array(ot iteriable).it rxpands the array into indivial elements.so,it can be used to ex
//pand the array in a places where zero or more elements are expected



const fullname=['alam','basha'];
const biodata=[1,26,"male",...fullname];
console.log(fullname);
console.log(biodata);

var shooterGames=["call of duty",'far cry','resident evil'];
var racingGames=['Need for speed','gran tur','driver'];
var games=[...shooterGames,...racingGames];

console.log(games);
//destrucing
var shooterGames=["call of duty",'far cry','resident evil'];
var [first,...remaining]=shooterGames;


console.log(first);
console.log(remaining);



const fulname={
    fname:"alam",
    lname:"basha",
};
const bioda={
    id:1,
    ...fulname,
    age:26,
    gender:'male',
};
console.log(bioda)