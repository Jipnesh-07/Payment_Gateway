function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }
  
function onSelectOptions(element){ 
  console.log("select option is changed to "+element.value )
  console.log(" first element "+element.children[0].innerHTML)
  if(element.value!=element.children[0].innerHTML){
    element.style.color="#000";
  }else{
    element.style.color="#999";
  }
}

function attachListener(){
   var selectTags = document.getElementsByTagName("select")
   console.log(selectTags)
   console.log(selectTags.length)
   for(let i=0;i<selectTags.length;i++){
    console.log("onchange callback is attached")
    selectTags[i].onchange = function(e){onSelectOptions(selectTags[i]);}
   }
}
 