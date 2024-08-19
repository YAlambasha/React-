const oldarr=['alam','basha','dell','yab'];
console.log(oldarr[0]);
console.log(oldarr[1]);
console.log(oldarr[2]);

const newarr=oldarr.map(function(cvalue,i,arr)
{
    console.log(arr);
    // return i + " : " +cvalue +"alam";

});
console.log(newarr);