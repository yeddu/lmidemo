export const numeric=(id)=>{
   var invalidChar=/[^0-9]/gi;
   var mob= document.getElementsByClassName(id);
   console.log(mob.value)
   if(invalidChar.test(mob.value)){
   var  newstring = mob.value.replace(invalidChar, "");
   mob.value=newstring;
   }



}