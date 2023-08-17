interface   CelestialBody {
    name : string
    mass : number
}

interface Star extends CelestialBody{
    age: number
    planets: Planeta[]
}

interface Planeta extends CelestialBody{
    population: number
    createStellite: (name:string)=> void
}

let sun: Star

sun.name = "Sol"
sun.mass = 1989*(10**30)
sun.age = 4603 * (10**9)
sun.planets = []