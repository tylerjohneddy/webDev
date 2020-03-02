let hangmanImage = document.getElementById("hangmanImage");
let hangmanWord = document.getElementById("hangmanWord");
let body = document.body;
let image = document.createElement("img");
let word = document.createElement("h1");
let string = "hangman"
let aphabet = "abcdefghijklmnopqrstuvwxyz";
let count = 1;
image.src = "./HangmanPics/Hangman1.PNG";
image.alt = "picture";
image.setAttribute("src", "./HangmanPics/Hangman1.PNG")
hangmanImage.append(image);
let filler =  "_".repeat(string.length).split("");




body.appendChild(hangmanImage);
body.append(hangmanWord);


body.addEventListener("keypress", () => {
    if (aphabet.includes(event.key)){
    aphabet = aphabet.replace(event.key,"")
    console.log(aphabet);

    if (count < 12) {
        if (!string.includes(event.key)) {
            count++;
            image.setAttribute("src", "./HangmanPics/Hangman" + count + ".PNG")
            hangmanImage.append(image);
        }else{
            updateWord(event.key);
        }

        console.log(count);
    }else{

    }
}

});

function setCharAt(chr) {
    for(let i = 0; i<=string.length-1;i++){
        console.log(string[i]);
        if(string[i]==chr){
            console.log("asdfghjk");
            filler[i]=chr;
            console.log(filler)

        }
    }
    return filler
}
let updateWord=(key)=>{
    console.log(string.indexOf(key))
    let temp =filler;

    setCharAt(key)
 

    hangmanWord.innerText = filler.join(" ");
    console.log(filler);


}