import * as lodash from 'lodash';
// Veja que esse alerta aparecerá ao passar o mouse sobre o 'lodash':
// Não foi possível localizar o arquivo de declaração para o módulo 'lodash'.
// Tente `npm i --save-dev @types/lodash` caso exista
export interface Spaceship {
    name: string
    pilot: string
    speed: number
  }

interface AttackSpaceship extends Spaceship {
    weapons: number
  }

let xwing: AttackSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
  }
// Além disso, se tentarmos usar o lodash
// ele não trará nenhuma sugestão no autocompletar
lodash.camelCase()

console.log(lodash.camelCase(xwing.name))
console.log(lodash.kebabCase(xwing.pilot))