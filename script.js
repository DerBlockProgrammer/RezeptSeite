let portion = [250, 2, 1, 80, 2, 150];

function calculate() {

   let portions = document.getElementById('text').value;
   if (portions < 1) { 
    document.getElementById('portions').value = 1;
   calculate = portion;
    return;

    
   }

   
   //document.getElementById(`ingrediant0`).innerHTML = result;

   for (let index = 0; index < portion.length; index++) {
    let result1 = portions * portion[index];
   //let result1 = portion = portion[index];
   document.getElementById(`ingrediant${index}`).innerHTML = result1;
}
   

   

  
}
