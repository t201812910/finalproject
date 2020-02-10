/*(function(){
    var loader = document.getElementById("loader-wrapper");
    var loading = 0;
    var id = setInterval(frame, 50)
    function frame() {
        if(loading == 100){
            clearInterval(id);
            window.open("Index.html");
        } else {
            loading = loading + 1;
            if(loading == 90) {
                loader.style.animation = "fadeout 1s ease";  
            }
        }
    } 
})();*/

var loader1 = 
document.getElementById("loader-wrapper");

window.addEventListener('load', function(){
    loader1.style.animationDuration = '3s';
    loader1.style.display = 'none';
})

