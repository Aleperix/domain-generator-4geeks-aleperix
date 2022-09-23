//Definimos los pronombres, adjetivos, sustantivos y extensiones de dominio que se van a utilizar en el programa.
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['com', 'net', 'us', 'io', 'ger', 'on']

//Creamos un bucle for para cada uno de los arrays respetando su longitud para cada ciclo.
for (let i = 0; i < ext.length; i++) {
    for (let j = 0; j < pronoun.length; j++) {
        for (let k = 0; k < adj.length; k++) {
            for (let l = 0; l < noun.length; l++) {
                /* 
                   Aquí preguntamos: si el sustantivo seleccionado termina con la extensión seleccionada,
                   eliminamos esa terminación y agregamos la extensión para aprovechar el hack.
                   Si no es así, no eliminamos nada e imprimimos el nombre de dominio en el orden definido.
                */
                if (noun[l].substring(noun[l].length - ext[i].length) == ext[i]) {  
                    console.log(pronoun[j]+adj[k]+noun[l].substring(0, noun[l].length - ext[i].length)+"."+ext[i]);
                } else {
                    console.log(pronoun[j]+adj[k]+noun[l]+"."+ext[i]);
                }
            }
        }
    }
}