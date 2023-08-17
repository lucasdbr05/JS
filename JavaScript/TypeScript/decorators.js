var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
function Log() {
    return function (target, key, descriptor) {
        // Aqui guardamos o método original para chamá-lo manualmente
        var originalMethod = descriptor.value;
        // Aqui estamos usando a técnica de desestruturar um array
        // de argumentos para repassar quaisquer que sejam os
        // argumentos originais
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('-------------------------------');
            console.log("Chamando o m\u00E9todo ".concat(key, " com os par\u00E2matros: ").concat(JSON.stringify(args)));
            var result = originalMethod.apply(this, args);
            console.log("O m\u00E9todo ".concat(key, " retornou o valor: ").concat(JSON.stringify(result)));
            console.log('-------------------------------');
            return result;
        };
    };
}
var Planet = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _calculate_decorators;
    var _invertName_decorators;
    return _a = /** @class */ (function () {
            function Planet(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.name = name;
            }
            Planet.prototype.calculate = function (value) {
                // ...
                console.log("Calculando ".concat(value, " * 2"));
                return value * 2;
            };
            Planet.prototype.invertName = function () {
                return this.name.split('').reverse().join('');
            };
            return Planet;
        }()),
        (function () {
            _calculate_decorators = [Log()];
            _invertName_decorators = [Log()];
            __esDecorate(_a, null, _calculate_decorators, { kind: "method", name: "calculate", static: false, private: false, access: { has: function (obj) { return "calculate" in obj; }, get: function (obj) { return obj.calculate; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _invertName_decorators, { kind: "method", name: "invertName", static: false, private: false, access: { has: function (obj) { return "invertName" in obj; }, get: function (obj) { return obj.invertName; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var planet = new Planet('Terra');
var result = planet.calculate(5);
console.log("Resultado: ".concat(result));
planet.invertName();
//   function Decorator() {
//     return function (target, key, descriptor) {
//       // descriptor.value é o nosso método decorado
//       // vamos atribuir a ele uma nova função    
//       descriptor.value = function (value: number) {
//         console.log(`Calculando ${value} elevado a 2`);
//         return Math.pow(value, 2)
//       }
//     }
//   }
//   class Planet {
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//     @Decorator()
//     calculate(value: number) {
//       // ...
//       console.log(`Calculando ${value} * 2`);
//       return value * 2
//     }
//   }
//   const planet = new Planet('Terra')
//   const result = planet.calculate(5)
//   console.log(`Resultado: ${result}`)
