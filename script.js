let joueur = document.getElementById("joueur")
let robot = document.getElementById("robot")
let Titre = document.getElementById("titre")


    let buttonRock = document.getElementById("rock")
    buttonRock.addEventListener('click', () => {
        joueur.src = `images/rock_face.png`
    })


    let buttonPaper = document.getElementById("paper")
    buttonPaper.addEventListener('click', () => {
        joueur.src = `images/paper_face.png`
    })

    let buttonScissors = document.getElementById("scissors")
    buttonScissors.addEventListener('click', () => {
        joueur.src = `images/scissors_face.png`
    })

function whenRock(joueur2) {
    if (joueur.src.endsWith("rock_face.png") && robot.src.endsWith("rock_face.png")) {
     Titre.innerHTML = "SAME"
    } else if (joueur.src.endsWith("rock_face.png") && robot.src.endsWith("paper_face.png")) {
        Titre.innerHTML = "LOSE"} else if (joueur.src.endsWith("rock_face.png") && robot.src.endsWith("scissors_face.png")) {
            Titre.innerHTML = "WIN"
    }
}

function whenPaper(joueur2) {
    if (joueur2.src.endsWith("paper_face.png") && robot.src.endsWith("rock_face.png")) {
        Titre.innerHTML = "WIN"
    } else if (joueur2.src.endsWith("paper_face.png") && robot.src.endsWith("paper_face.png")) {
        Titre.innerHTML = "SAME" } else if (joueur2.src.endsWith("paper_face.png") && robot.src.endsWith("scissors_face.png")) {
            Titre.innerHTML = "LOSE"
    }
}

function whenScissors(joueur2) {
    if (joueur2.src.endsWith("scissors_face.png") && robot.src.endsWith("rock_face.png")) {
        Titre.innerHTML = "LOSE"
    } else if (joueur2.src.endsWith("scissors_face.png") && robot.src.endsWith("paper_face.png")) {
        Titre.innerHTML = "WIN" } else if (joueur2.src.endsWith("scissors_face.png") && robot.src.endsWith("scissors_face.png")) {
            Titre.innerHTML = "SAME"
    }
}


function Robot(robot){
let max = 3
let randomInt = Math.floor(Math.random()*max+1)
    if (randomInt===1) {
        robot.src = `images/rock_face.png` } else if
        (randomInt===2) {
            robot.src = `images/paper_face.png`} else if
            (randomInt===3) {
                robot.src = `images/scissors_face.png`
            }
        }




function LancerJeu() {
    if (joueur.src.endsWith("rock_face.png")) {
        whenRock(joueur)
    } else if (joueur.src.endsWith("paper_face.png")) {
        whenPaper(joueur) } else if (joueur.src.endsWith("scissors_face.png")) {
            whenScissors(joueur)
        }
}


let buttonStart = document.getElementById("startbutton")
buttonStart.addEventListener('click', () => {
    Robot(robot)
    LancerJeu()
})