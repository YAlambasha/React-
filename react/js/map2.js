const studentdata=[

    {id:1,name:"vinod",degree:"mcs"},
    {id:2,name:"alam",degree:"b.e"},
    {id:3,name:"ana",degree:"btch"},
];
// console.log(studentdata[0].name);
const newdata=studentdata.map((cvalue)=>{
return `my name is ${cvalue.name}.my degree is ${cvalue.degree}`;
});
console.log(newdata);



// {/* <p id="showdata">helooo</p> */}
document.getElementById('showdata').innerHTML=newdata;