spillere = [
    {
        navn:"Freddy",
        bilde:"bilder/placeholder.webp"
    },
    {
        navn:"Henrik",
        bilde:"bilder/henriko.jpg"
    },
    {
        navn:"Jostein",
        bilde:"bilder/stob.jpg"
    },
    {
        navn:"Ola",
        bilde:"bilder/ola.png"
    },
    {
        navn:"Oliver",
        bilde:"bilder/gayo.png"
    },
    {
        navn:"Jakob",
        bilde:"bilder/sunk.jpg"
    },
    {
        navn:"Birk",
        bilde:"bilder/birk.jpg"
    },
    {
        navn:"Amr",
        bilde:"bilder/placeholder.webp"
    },
    {
        navn:"Silfo",
        bilde:"bilder/silfo.png"
    },
    {
        navn:"Sebb",
        bilde:"bilder/sebb.jpg"
    },
    {
        navn:"Amr",
        bilde:"bilder/placeholder.webp"
    },
    {
        navn:"Eirik",
        bilde:"bilder/eirik.jpg"
    },
    {
        navn:"Rasmus",
        bilde:"bilder/rasse.jpg"
    },
    {
        navn:"Tenold",
        bilde:"bilder/tenold.png"
    },
    {
        navn:"Tor",
        bilde:"bilder/placeholder.webp"
    },
    {
        navn:"Jon",
        bilde:"bilder/placeholder.webp"
    },
    {
        navn:"Olav",
        bilde:"bilder/oluf.jpg"
    },
    {
        navn:"Arun",
        bilde:"bilder/placeholder.webp"
    },
]
svRef = document.getElementById("spillerValg")
valgteSpillere=[]
for (spiller in spillere){
    
    let spillerHel = document.createElement("div")
    let spillerNavn = document.createElement("p")
    let spillerBilde = document.createElement("img")
    spillerHel.id = spiller
    
    spillerHel.classList.add("spiller")
    spillerBilde.classList.add("spillerBilde")
    spillerNavn.classList.add("spillerNavn")

    svRef.appendChild(spillerHel)
    spillerHel.appendChild(spillerBilde)
    spillerHel.appendChild(spillerNavn)

    spillerNavn.innerHTML = spillere[spiller].navn
    spillerBilde.src = spillere[spiller].bilde

    spillerHel.addEventListener("click",function(){
        if (valgteSpillere.includes(spillere[(this.id)])) {
            valgteSpillere.pop(spillere[(this.id)])
        } else {
            valgteSpillere.push(spillere[(this.id)])
        }
        console.log(valgteSpillere)
    })

}


let addPlayerField = document.createElement("input")
addPlayerField.id ="addPlayerField"
addPlayerField.placeholder = "andre spillere"

let addButton = document.createElement("div")
addButton.innerText="Add"
addButton.id= "addButton"
svRef.appendChild(addPlayerField)
svRef.appendChild(addButton)

function random(playersToSort){
    team1 = []
    team2 = []
    

// Loop through all the children of the div and remove them one by one
    while (document.querySelector("#team1").firstChild) {
        document.querySelector("#team1").removeChild(document.querySelector("#team1").firstChild);
    }
    while (document.querySelector("#team2").firstChild) {
        document.querySelector("#team2").removeChild(document.querySelector("#team2").firstChild);
    }
    for (player in playersToSort){

        if (playersToSort.length%2!=0){
            playersToSort.push({
                navn:"",
                bilde:"bilder/x.png"
            })
        }
        
        if ((Math.random())<0.5){
            
            if (team1.length < (playersToSort.length)/2){
                team1.push(playersToSort[player])
            }else{
                team2.push(playersToSort[player])
            }
        }else{
            if (team2.length < (playersToSort.length)/2){
                team2.push(playersToSort[player])
            }else{
                team1.push(playersToSort[player])
            }
        }
        
    }
    
    for (i in team1){
        
        let spillerHel1 = document.createElement("div")
        let spillerNavn1 = document.createElement("p")
        let spillerBilde1 = document.createElement("img")
        spillerHel1.id = team1[i].navn
        
        spillerHel1.classList.add("spiller")
        spillerBilde1.classList.add("spillerBilde")
        spillerNavn1.classList.add("spillerNavn")

        document.querySelector("#team1").appendChild(spillerHel1)
        spillerHel1.appendChild(spillerBilde1)
        spillerHel1.appendChild(spillerNavn1)

        spillerNavn1.innerHTML = team1[i].navn
        spillerBilde1.src = team1[i].bilde

        let spillerHel2 = document.createElement("div")
        let spillerNavn2 = document.createElement("p")
        let spillerBilde2 = document.createElement("img")
        spillerHel2.id = team2[i].navn
        
        spillerHel2.classList.add("spiller")
        spillerBilde2.classList.add("spillerBilde")
        spillerNavn2.classList.add("spillerNavn")

        document.querySelector("#team2").appendChild(spillerHel2)
        spillerHel2.appendChild(spillerBilde2)
        spillerHel2.appendChild(spillerNavn2)

        spillerNavn2.innerHTML = team2[i].navn
        spillerBilde2.src = team2[i].bilde

    }
    
}



function reRoll(){
    random(valgteSpillere)
}