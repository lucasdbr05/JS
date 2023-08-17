function first<Type>(array: Type[]):Type| undefined {
    return array[0]
  }
  
  function last<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
  }
  
  const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']
  
  // Tipo any
  const firstPilot = first(pilots)
  
  // Tipo inferido
  const lastPilot = last(pilots)



  interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
  // Se deixássemos sem o tipo Ship desativaríamos
  // totalmente o typescript para esse argumento
  // Veja que agora ao passar o mouse o retorno da função usará o ShipType
// Porém agora as propriedades name e pilot estão acusando um erro
function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // Agora a cópia funciona e os tipos inferidos estão corretos
  // copy1 é do tipo Ship e copy2 do tipo Fighter
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')



  interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
  }
  
  // O tipo Ship não estaria correto aqui
  const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
  // Mas podemos explicitamente passar o tipo para a função
  // e agora temos o tipo EnemyShip atribuido corretamente
  const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')
  
  // Aqui temos um erro por conta do tipo Ship
  enemyCopy2.flag = 'Imperial'
  // Já aqui temos a propriedade opcional flag
  enemyCopy2.flag = 'Imperial'


  // Segue a mesma implementação das funções
// e o mesmo valeria para as interfaces
class Pilot <ShipType> {
    name: string
    ship: ShipType
  
    constructor(name: string, ship: ShipType) {
      this.name = name
      this.ship = ship
    }
  }
  
  // Apesar de não ser necessário aqui, seria
  // possível explicitar o tipo da mesma forma
  const han = new Pilot('Han Solo', falcon)
  const luke = new Pilot<Fighter>('Luke Skywalker', xWing)