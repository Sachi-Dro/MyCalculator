 function funct(val) 
         { 
             document.getElementById("txt").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             let x = document.getElementById("txt").value 
             let y = eval(x) 
             document.getElementById("txt").value = y 
         } 
           
         //function that clear the display 
         function funct_clear() 
         { 
             document.getElementById("txt").value = "" 
         } 