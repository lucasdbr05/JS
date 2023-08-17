function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, ", comandada peo capit\u00E3o ").concat(spaceship.captain, ", foi enviada em miss\u00E3o."));
    return spaceship;
}
function acceleratess(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Velocidade de ".concat(targetSpeed, " alcan\u00E7ada."));
    }
}
var ssName = String(window.prompt('Insira o nome da nave a ser enviada:\n'));
var ssCaptain = String(window.prompt('Insira o nome do capitão da nave a ser enviada:\n'));
var currentShip = sendSpaceship(ssName, ssCaptain);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar'));
acceleratess(speed, currentShip);
