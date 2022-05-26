let list = document.getElementById("myLinks");
const menu = document.getElementById("menu");


const mediaQuery = window.matchMedia('(max-width: 600px)');

if(mediaQuery.matches){

    function myFunction(){
        console.log("working")
        if(list.style.display === "block"){
            list.style.display ==="none";
        }else{
            list.style.display ==="block";
        }
    }
}

