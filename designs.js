// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const submitButton = document.getElementById('button');
    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');
    const pixelCanvas = document.getElementById('pixelCanvas');
    const getColor = document.getElementById('colorPicker');
    const fragment = document.createDocumentFragment()

    submitButton.addEventListener('click',(event)=>{
        console.log(event.eventPhase)
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
            fragment.appendChild(creaetTr)
        }
        pixelCanvas.appendChild(fragment)

        console.log(event.target)

    })
    pixelCanvas.addEventListener('click',function (event) {
       if(event.target.nodeName === 'TD'){
           console.log(event.target.style.backgroundColor = getColor.value)
       }
    })

}

makeGrid()