
//1st solution with using html and js.
let button=document.getElementById('but');

    button.addEventListener('click',function(e){
       if(e.target.classList.contains('button'))
       {
          let button2=document.createElement('button');
              button2.innerHTML="new button2";
              button2.getAttribute('class','button');


         let button3=document.createElement('button');
              button3.innerHTML="new button3";
              button3.getAttribute('class','button');

         this.appendChild(button2);
         this.appendChild(button3);
         this.removeChild(e.target);
       }
    })


//2nd solution only use js code.


 let btn = document.createElement("button");
   
     btn.innerHTML="button";
     document.body.appendChild(btn);
     
     btn.addEventListener('click', function(){


        let btn1= document.createElement("button");
           btn1.innerHTML="button1";


        let btn2 = document.createElement("button");
            btn2.innerHTML="button2";

            document.body.appendChild(btn1);
            document.body.appendChild(btn2);
            this.remove(btn);
     })
