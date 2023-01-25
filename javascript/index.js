let gano = 0;
let tirador = "vayne";
let soporte = "nami";
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
    alert("No has acertado, te quedan " + resto + " oportunidades");
    }else if(resto == 1){
        alert("No has acertado, te queda " + resto + " oportunidadad");
    }else{
        alert("No has acertado, por lo tanto no sumas puntos en esta ronda");
    }
}

function resultado(x){
    if(x >= 0 && x < 30){
        alert("Tu puntaje es bajo, debes aprender más")
    }else if(x >= 30 && x < 60){
        alert("Tu puntaje es regular")
    }else{
        alert("Tu puntaje es alto, felicitaciones!")
    }
}

function adivinarCampeon(tipo){
    alert("Adivina el campeón " + tipo + " de league of legends, tienes 3 intentos. Utiliza siempre minúsculas");
    let puntos = 30;
        switch(tipo){
            case "tirador" :
                for(let i = 1; i < 4; i++){
                    if (i == 1){
                        campeonIngresado = prompt("¿Cuál es el campeón? Primera pista... tiene desplazamiento");
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Segunda pista... tiene invisibilidad");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... saca más al tercer ataque"); 
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

            case "soporte" :
                for(let i = 1; i < 4; i++){
                    if (i == 1){
                        campeonIngresado = prompt("¿Cuál es el campeón? Primera pista... cura");
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Segunda pista... tiene control de masas");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... ella decide lo que traerá la marea"); 
                    }
                    if(campeonIngresado == soporte){
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
                        campeonIngresado = prompt("¿Cuál es el campeón? Primera pista... tiene inmovilización");
                        }else if(i == 2){
                        campeonIngresado = prompt("¿Cuál es el campeón? Segunda pista... roba hechizos");
                        }else{
                        campeonIngresado = prompt("¿Cuál es el campeón? Última pista... atraviesa portales"); 
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

let jugador = prompt("Ingresa tu nombre");
alert("Bienvenid@ al juego " + jugador);
alert("Primera ronda");
primeraRonda = adivinarCampeon("tirador");
alert(jugador + " has obtenido " + primeraRonda + " puntos en esta ronda");
let puntajeTotal = primeraRonda;
alert("Tu puntaje total por el momento es de " + puntajeTotal + " puntos");
alert("Segunda ronda");
segundaRonda = adivinarCampeon("soporte");
alert(jugador + " has obtenido " + segundaRonda + " puntos en esta ronda");
puntajeTotal = puntajeTotal + segundaRonda;
alert("Tu puntaje total por el momento es de " + puntajeTotal + " puntos");
alert("Tercera ronda");
terceraRonda = adivinarCampeon("mago");
alert(jugador + " Has obtenido " + terceraRonda + " puntos en esta ronda");
puntajeTotal = puntajeTotal + terceraRonda;
alert("Tu puntaje total es de " + puntajeTotal + " puntos");
resultado(puntajeTotal);


