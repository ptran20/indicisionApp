var nameVar ="Andrew";
nameVar='Mike';
console.log('nameVar', nameVar);

function res(str){
   var final="";
   for(var i=str.length-1; i>=0;i--){
       final+=str[i];
   }
   return final;
}

console.log(res("hello"));