var fecha = new Date(),
hora = fecha.getHours();

 var saludo  = function (hr){
if (hr <=5){
return 'No me jodas !!!';

}else if(hr >= 6 && hr <=11){
 return 'Buenos dias!!!';

 } else if (hr ===9 && hr === 10){
    return 'Buenas tardes !!!!'
  
 }else{

   return 'Buenas noches!!'

 }

};

console.log(saludo(hora));
