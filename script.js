const outputContainer = document.querySelector(".output"),
paragraphSlider = document.getElementById("paragraph"),
wordSlider = document.getElementById("wpp"),
paragraphValue = document.getElementById("paragraphValue"),
wordsValue = document.getElementById("wordsValue");


function start(){
    paragraphSlider.addEventListener("input",updateParagraphValue);
    wordSlider.addEventListener("input",updateWordsValue);
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click",generateLoremIpsum);
}

function updateParagraphValue(){
    paragraphValue.textContent = paragraphSlider.value;
} 

function updateWordsValue(){
    wordsValue.textContent = wordSlider.value;
} 

function generateLoremIpsum() {
    const paragraphs = parseInt(paragraphSlider.value);
    const wordsPerParagraph = parseInt(wordSlider.value);
    const loremIpsumText = generateText(paragraphs,wordsPerParagraph);
    displayLoremIpsum(loremIpsumText); 
}

function generateText( paragraphs, wordsPerParagraph ) { 
    const placeholderText = 
        `Lorem ipsum dolor sit amet  
        consectetur adipiscing elit sed  
        do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.`; 
  
    const loremIpsumArray = new Array( paragraphs ).fill(""); 
  
    for ( let i = 0; i < paragraphs; i++ ) { 
        const words = generateWords( wordsPerParagraph );
        
        loremIpsumArray[i] = words;
    } 
  
    return loremIpsumArray.join("\n"); 
}

function generateWords(numWords) { 
      
    const loremIpsumText = 
        `Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.`; 
  
  
    const words = loremIpsumText.split(" "); 
  
    if (numWords <= words.length) { 
        return words.slice(0, numWords).join(" "); 
    } else { 
        return words.join(" "); 
    } 
}
function displayLoremIpsum(text) { 
    outputContainer.innerHTML = text; 
}

start();