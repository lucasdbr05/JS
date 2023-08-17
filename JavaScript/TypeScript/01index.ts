function sendSpaceship(name:string, captain: string){
    const spaceship={
        name, 
        captain,
        speed: 20,
        inMission: true,
        crew:[]
    }
    alert(`A nave ${spaceship.name}, comandada peo capitão ${spaceship.captain}, foi enviada em missão.`)
    return spaceship
}

function acceleratess(targetSpeed: number, spaceship:{name: string, speed: number}){
    if (spaceship.speed> targetSpeed){
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Velocidade de ${targetSpeed} alcançada.`)
    }
}

const ssName = String(window.prompt('Insira o nome da nave a ser enviada:\n'))
const ssCaptain = String(window.prompt('Insira o nome do capitão da nave a ser enviada:\n'))

const currentShip = sendSpaceship(ssName, ssCaptain)

const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar'))
acceleratess(speed, currentShip)