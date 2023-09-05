var items = document.getElementsByClassName("itemSelect")
var billCardPath = "./bill-cards/" 
var pages = ["mobile-recharge","electricity-bill","water-bill","movie-ticket-bill","travels","dth-recharge"]

var selectedIndex = 0

function toolbarPage(index,isVisible){
    if(isVisible){
        items[index].style.display = "block";
        $("#home-toolbar-content").load(billCardPath+pages[index]+".html", attachListener);   
        selectedIndex = index
       
    }else{
        items[index].style.display = "none";
    }
}

toolbarPage(selectedIndex,true)

for (let i = 0; i < items.length; i++) {
    document.getElementById('menu-item-'+(i+1)).onclick = function(e){ 
        toolbarPage(selectedIndex,false)
        toolbarPage(i,true)
    }
}



