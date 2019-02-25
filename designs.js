// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const submitButton = document.getElementById('button');
    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');
    const pixelCanvas = document.getElementById('pixelCanvas');
    const getColor = document.getElementById('colorPicker')

    submitButton.addEventListener('click',(event)=>{
        let creaetTr;
        let tdList ;
            event.preventDefault();
        for (let i=0;i<inputHeight.value;i++){
            creaetTr =  document.createElement('tr')
            for(let i=0;i<inputWidth.value;i++){
                tdList = document.createElement('td')
                creaetTr.appendChild(tdList)
                console.log('inputWidth.value',inputWidth.value)
            }
        pixelCanvas.appendChild(creaetTr)
        }

    })
}

makeGrid()