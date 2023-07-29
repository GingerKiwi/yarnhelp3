const secretMessageFrom = document.querySelector('.secret-message');
// let textMessageInput = document.querySelector('.text-message-input')
let binaryMessageOutput = document.querySelector('.binary-message-output')


//  display user's message in .textMessage

// function ascii to binary

function textToBinary(str) {
    let arrayText = []
    let binaryResult = []
    for (let i = 0; i < str.length; i++) {
        arrayText.push(str.charCodeAt(i))
    }

    for (let i = 0; i < arrayText.length; i++){
        let binary = arrayText[i].toString(2);
        binaryResult.push(binary);
    }
    binaryResult = binaryResult.join(" ");
    console.log(binaryResult)
}




// function binaryToKnitPurl    binary to knit/purl -> 1 = k, 0 = p 

// function binaryToChart    binary to knitting graph -> 1 = coloured rectangle, 0 = blank rectangle

secretMessageFrom.addEventListener('submit', function(evt) {
	evt.preventDefault();

    let str = textMessageInput.value;
    binaryMessageOutput.innerText = binaryResult;
});