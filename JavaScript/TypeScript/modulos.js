"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
};
// Além disso, se tentarmos usar o lodash
// ele não trará nenhuma sugestão no autocompletar
lodash.camelCase();
console.log(lodash.camelCase(xwing.name));
console.log(lodash.kebabCase(xwing.pilot));
