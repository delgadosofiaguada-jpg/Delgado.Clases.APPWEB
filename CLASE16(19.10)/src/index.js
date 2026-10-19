//FUNCIONES:

//Declaracion

//function suma(a,b){
    //console.log(a+b)
   // return a+b
//}

//const resultado =suma(10,2)
//console.log(resultado)


//Funcion flecha -> anónima
const resta1 =(a,b)=>{
    return a-b
}

const resta= a=> a-5 //Return automaticamente(sin llave)


//CALLBACK

const a=(cb)=>{
    console.log('Se ejecuto a')
    cb()
}

const b=()=>{
    console.log('Se ejecuto b')
}

a(b)

//Metodos de arreglos

const numeros=[2,8,12,50]

//ForEach -> loop , no devuelve nada
//El callback se ejecuta una vez por elemento

numeros.forEach((numero, indice, arreglo)=> {
    console.log(numero, indice, arreglo)
})

// Map -> loop -> devuelve un nuevo arreglo

const numerosIncrementados=numeros.map((numero)=>{
    return numero + 1 //Vuelve a numerosIncrementados
})

console.log(numerosIncrementados)


//Filter(nuevo arreglo) y Find (valor)


