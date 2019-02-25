// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const submitButton = document.getElementById('sizePicker')

    submitButton.addEventListener('click',(event)=>{
        event.preventDefault()
    })

}

makeGrid()