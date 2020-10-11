
/*var ensemble = [
    {}
];*/
var   eventx = [] ;
var    eventy = [] ;
  for(var i=0 ; i < 44  ; i++){
         //for(var j=0 ; j < 5  ; i++){

       var  thediv = document.createElement("div");
       var  theensemble = document.querySelector(".ensemble");
       thediv.classList.add("car2");
       thediv.style.borderRadius = "12.5px" ;
       //thediv.style.marginLeft = (2*i).toString() + "10px" ;
       thediv.style.marginLeft = "10px" ;
       //thediv.style.marginTop = (5*i).toString() + "px" ;
       thediv.style.marginTop = "10px" ;
       thediv.style.marginBottom = "10px" ;
       thediv.id =  i.toString() ;
        
        theensemble.appendChild(thediv);
         }
   // }
    
 var  minicir = document.querySelectorAll("div")[0];
 document.body.addEventListener("mousemove",(ev)=>{
     //ev.stopPropagation();
     //ev.cancelBubble = true ;
     //ev.releaseEvents();
      //ev.stopImmediatePropagation()
     
     //console.log(minicir);
     minicir.classList.remove("car2");
     //minicir.classList.add("");
     minicir.classList.add("cart");
     minicir.style.marginLeft = (ev.clientX-37).toString() + "px";
     minicir.style.marginTop  = (ev.clientY-37).toString() + "px" ;


 });
/*
var  divel = document.querySelector(".car");

document.body.addEventListener("mousemove",(event)=>{
      
    //console.log(event.ClientX) ;
  
    divel.style.marginLeft = (event.clientX-37).toString() + "px";
    divel.style.marginTop  = (event.clientY-37).toString() + "px" ;
      
},1);
document.body.addEventListener("click",(event)=>{
      
    //console.log(event.clientX) ;
    divel.style.marginLeft = (event.clientX-37).toString() + "px";
    divel.style.marginTop  = (event.clientY-37).toString() + "px" ;

    divel.remove();
    //divel.style.marginLeft = "20px" ;      
    //divel.style.marginTop  = "20px" ;
    
      
});

*/







/*
var  thebtn1 = document.querySelector("#btn1");
  var olel = document.createElement("ol")
         document.body.appendChild(olel);

thebtn1.addEventListener("click", (e)=>{
         var  allevents = [
          { name : "e.AT_TARGET",
             value : e.AT_TARGET },
      
          { name : "e.BUBBLING_PHASE",
             value : e.CAPTURING_PHASE },
       { name : "e.NONE",
             value : e.NONE },

        { name : "e.bubbles",
             value : e.bubbles },
             

        { name : "e.cancelBubble", 
             value : e.cancelBubble },
         { name : "e.cancelable",
             value : e.cancelable},
         ];

/*             { name : "e
             value : e.

   { name : "e
             value : e.
     
        { name : "e
             value : e.

    { name : "e
             value : e.
    
     { name : "e
             value : e.
     { name : "e
             value : e.
            ]
            
          allevents.forEach(elem=>{

          var  liel = document.createElement("li");
          var    myh31 = document.createElement("h3");
          var    myh32 = document.createElement("h3");
          myh31.innerHTML = elem.name ;
          myh32.innerHTML = elem.value ;
         //myh2.style.marginLeft = "150px" ;
         //myh2.style.marginTop = "250px" ;
         liel.appendChild(myh31);
         liel.appendChild(myh32);
         olel.appendChild(liel); 

          })

        });


*/