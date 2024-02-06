// Jaskeerat Randhawa
// 02/02/2024
// 100901805

// Get all of the boxes
let boxes = $('.red-box, .blue-box, .green-box');


// Go through all of the box's in boxes 
boxes.each(function (index, box) {

 // set currentClass to the current class of the box
    let currentClass = $(box).attr('class');

// nest if statements to finding out what color the box is and changing it a different box
    if (currentClass === 'red-box') {
        $(box).attr('class', 'blue-box');
    } else if (currentClass === 'blue-box') {
        $(box).attr('class', 'green-box');
    } else if (currentClass === 'green-box') {
        $(box).attr('class', 'red-box');
    }
});


// add the script for making a button and add it to the button variable 
let button = $('<button>open modal</button>');

// append the button to the content
$('#content').append(button);


// when the button is clicked show the box
button.on('click', function () {
    $('.lightbox').show();
});
