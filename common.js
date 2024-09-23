function getElementByText(id){
    const textValue = document.getElementById(id).innerText 
    const textValues = parseFloat(textValue)
    return textValues

}

function getElementsByInput(id){
    const inputValue = document.getElementById(id).value 
    const inputValues = parseFloat(inputValue)
    return inputValues
}