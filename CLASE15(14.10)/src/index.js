//Estructura de control -> de bucle

//for(let i=0; i<10; i++){
//    console.log(i)
//}


// ARREGLOS

const numeros=[1,2,3,4,5,[1,[2]]]

//console.log(numeros[5][1][0])
//numeros[2]=5

//for(let i=0; i<numeros.length;i++){
//    console.log(numeros[i])
//}


//Objetos

const persona={
    // propiedades: valor
    edad:20,
    estudia:true,
    nombre:"Andres",
    redes:[
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros:{
        pasatiempos: 'Pintar',
        mascotas: 2
    },
    caminar: function name(params){
        //
    }
}

persona.nacionalidad='Argentina'

console.log(persona.redes[1])
console.log(persona.otros.pasatiempos)