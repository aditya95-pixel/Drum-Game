for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(sound){
    switch(sound){
        case 'w':
            var file="tom-1";
            break;
        case 'a':
            var file="tom-2";
            break;
        case 's':
            var file="tom-3";
            break;
        case 'd':
            var file="tom-4";
            break;
        case 'j':
            var file="snare";
            break;
        case 'k':
            var file="crash";
            break;
        case 'l':
            var file="kick-bass";                   
    }
    var audio=new Audio("sounds/"+file+".mp3");
    audio.play();
}
function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed")},200);
}