/*two array eg, arr1 and arr2*/
let arr1 = ["001",92,83,54,55,"welcome",66,"salam",9.5,60];
let arr2 = [12,"HELLO",45,"hi",55,"hola",34,68,93,120];

    /*pick the random no for index values for individual array*/
let randomIndex1 = Math.floor(Math.random()*arr1.length+1)-1;
let randomIndex2 = Math.floor(Math.random()*arr2.length+1)-1;
    
      /*conditions for both array*/   
if(randomIndex1!==randomIndex2 || randomIndex1==10 || randomIndex1==0){
   console.log ("arr1["+randomIndex1+"]="  +arr1[randomIndex1]+ " & "+ "arr2["+randomIndex2+"]="  +arr2[randomIndex2]);
}
else{
    alert('both array have same number of index ');
}