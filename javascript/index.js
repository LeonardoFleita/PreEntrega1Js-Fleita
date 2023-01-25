let gano = 0;
let tirador = "lucian";
let support = "nami";
let mago = "zoe";
let campeonIngresado = "";
let primeraRonda = 0;
let segundaRonda = 0;
let terceraRonda = 0;


function acertar(){
    alert("Has acertado!");
}

function errar(x){
    let resto = 3 - x;
    if(resto != 1 && resto != 0){
    alert("te quedan " + resto + " oportunidades");
    }else if(resto == 1){
        alert("te queda " + resto + " oportunidadad");
    }else{
        alert("No has acertado, por lo tanto no sumas puntos en esta ronda");
    }
}

function resultado(x){
    if(x >= 0 && x < 30){
        alert("Su puntaje es bajo, debe aprender más")
    }else if(x >= 30 && x < 60){
        alert("Su puntaje es regular")
    }else{
        alert("Su puntaje es alto, felicitaciones!")
    }
}

function adivinarCampeon(tipo){
    alert("Adivine el campeón " + tipo + " de league of legends, tiene 3 intentos. Utilice siempre minúsculas");
    let puntos = 30;
        switch(tipo){
            case "tirador" :
                for(let i = 1; i < 4; i++){
                    if (i == 1){
                        campeonIngresado = prompt("¿Cuál es el campeón?")
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Una pista... tiene desplazamientos");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... tiene pistolas"); 
                    }
                    if(campeonIngresado == tirador){
                        acertar();
                        break;
                    }else{
                        errar(i);
                    }
                    puntos = puntos - 10;
                }

                break;

            case "support" :
                for(let i = 1; i < 4; i++){
                    if (i == 1){
                        campeonIngresado = prompt("¿Cuál es el campeón?")
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Una pista... cura y tiene cc");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... tira burbujas"); 
                    }
                    if(campeonIngresado == support){
                        acertar();
                        break;
                    }else{
                        errar(i);
                    }
                    puntos = puntos - 10;
                }
                break;

            case "mago" : 
                for(let i = 1; i < 4; i++){
                    if (i == 1){
                        campeonIngresado = prompt("¿Cuál es el campeón?")
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Una pista... atraviesa portales");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... juega al ping pong"); 
                    }
                    if(campeonIngresado == mago){
                        acertar();
                        break;
                    }else{
                        errar(i);
                    }
                    puntos = puntos - 10;
                }
                break;    
        }
    return puntos;
    }

primeraRonda = adivinarCampeon("tirador");
alert("Usted ha obtenido " + primeraRonda + " puntos");
let puntajeTotal = primeraRonda;
alert("Su puntaje total es de " + puntajeTotal + " puntos")
segundaRonda = adivinarCampeon("support");
alert("Usted ha obtenido " + segundaRonda + " puntos");
puntajeTotal = puntajeTotal + segundaRonda;
alert("Su puntaje total es de " + puntajeTotal + " puntos")
terceraRonda = adivinarCampeon("mago");
alert("Usted ha obtenido " + terceraRonda + " puntos");
puntajeTotal = puntajeTotal + terceraRonda;
alert("Su puntaje total es de " + puntajeTotal + " puntos");
resultado(puntajeTotal);


