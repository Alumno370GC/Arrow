//An arrow function

const miNumeroFlecha =(max)=>{
return Math.floor(Math.random() * (max-1)) + 1 ;

}

console.log(miNumeroFlecha(11));


let sum = (a,b)=> a+b;
alert(sum(1,2));//3