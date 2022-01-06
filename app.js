// // document.querySelector(".w").addEventListener("click", handleClick);
// //we are using query selector to select the button and adding an event listner on click and next parameter is to call a function


// // //this fucntion gets called when the button is clicked
// // function handleClick() {
// //     alert("hello world");
// // }

// // var getBtnsCount = document.querySelectorAll(".drum").length;
// // //gets the number of buttons with .drum as its class
// // //use querySelectorAll to select the .drum class and .lenght to get the number of btns.

// // //using for loop to add an event listner to all the buttons 
// // for (var i = 0; i < getBtnsCount; i++) {
// //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
// //         alert("hello");
// //     });
// // }

// // var getBtnsCount = document.querySelectorAll(".drum").length;
// // //gets the number of buttons with .drum as its class
// // //use querySelectorAll to select the .drum class and .lenght to get the number of btns.

// // //adding an event listner to all the buttons with drum class and on click 
// // //calling an anonomyous function that palys the audio
// // for (var i = 0; i < getBtnsCount; i++) {
// //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
// //         var audio = new Audio("sounds/tom-1.mp3");
// //         audio.play();
// //     })
// // }

// //this keyword can be used to get the identity of the button



// var getBtnsCount = document.querySelectorAll(".drum").length;
// //gets the number of buttons with .drum as its class
// //use querySelectorAll to select the .drum class and .lenght to get the number of btns.

// //adding an event listner to all the buttons with drum class and on click 
// //calling an anonomyous function that palys the audio
// for (var i = 0; i < getBtnsCount; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         var buttonInnerHtml = this.innnerHTML;
//         switch (buttonInnerHtml) {
//             case 'w':
//                 var audio1 = new Audio('sounds/tom-1.mp3');
//                 audio1.play();
//                 break;
//             case "a":
//                 var audio2 = new Audio('sounds/tom-2.mp3');
//                 audio2.play();
//                 break;
//             case "s":
//                 var audio3 = new Audio('sounds/tom-3.mp3');
//                 audio3.play();
//                 break;
//             case "d":
//                 var audio4 = new Audio('sounds/tom-4.mp3');
//                 audio4.play();
//                 break;
//             case "j":
//                 var audio3 = new Audio('sounds/snare.mp3');
//                 audio3.play();
//                 break;
//             case "k":
//                 var audio4 = new Audio('sounds/kick.mp3');
//                 audio4.play();
//                 break;
//             case "i":
//                 var audio4 = new Audio('sounds/crash.mp3');
//                 audio4.play();
//                 break;
//             default:
//                 console.log("click properly");
//         }
//     })
// }


// keypress is used to listen to key press 
// document.addEventListener("keypress", function() {
//     alert("hello world");
// })


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;


        default:
            console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}