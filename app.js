let tails = 0;
let heads = 0;
let clicks = 0;

let results = document.getElementById("results");
let buttonFlip = document.querySelector("#boxFlip")

function clicked()
{
    
    let flips = document.getElementById("flips");
    clicks += 1;
    flips.innerHTML = clicks;

}
buttonFlip.addEventListener("click", function toss() {
    let rows = 0;
    results.innerHTML = "";
    while (rows < 1) {   
       let flip = new Array();
        for (let i = 0; i < 1; i++) 
        {       
            let val = Math.floor( Math.random() * 2 );
            if (val === 1) {
                flip[i] = imageHeads("images/head.png");
                heads = heads + 1;
                checkHeads();
            } else {
                flip[i] = imageTails("images/tails.png");
                tails = tails + 1;
                checkTails();
            }       
        }
        results.innerHTML += "<br />" + arr;
        delete flip;
        rows++;
    }
    clicked();
})
    



function checkHeads()
{
    let headsDisplay = document.getElementById("headsDisplay");
    headsDisplay.innerHTML = heads;
}

function checkTails()
{
    let tailsDisplay = document.getElementById("tailsDisplay");
    tailsDisplay.innerHTML = tails;
}


function imageHeads(src) {
    let img = document.createElement("img");
    img.src = src;
    img.className = "imgFlip";

   results.appendChild(img);

}

function imageTails(src) {
    let img = document.createElement("img");
    img.src = src;
    img.className = "imgFlip";

    results.appendChild(img);

}



buttonFlip.addEventListener("click", () => {
      let audio = document.createElement("audio")
      audio.setAttribute("src", "./audio/mario-coin.mp3")
      audio.play()
    })
