"use strict";
let a=[1,6,5,4,3];
let j=a.length-1;
let ar=[];
for(var i=0; i<a.length; i++)
{
    ar[j]=a[i];
    j-=1;
}
console.log(ar);