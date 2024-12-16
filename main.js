
let principal = document.getElementById('cont-principal');

/* para saber si se llama a la funcion mezclar*/
let mezclar = false;

/* array para la posicion de los iconos*/
posicion = new Array();
/*array para cargar las canciones mezcladas*/
musicas = new Array();
/* array para inicializar las canciones */
canciones = new Array();

/*se inicializa las canciones*/
canciones[0] = ['img/squabble_up.jpeg', 'KENDRICK LAMAR', 'SQUABBLE UP'],
canciones[1] = ['img/stars_will_align.jpeg', 'KIGO & IMAGINE DRAGONS', 'STARS WILL ALIGN'],
canciones[2] = ['img/told_you_so.jpeg', 'MARTIN GARRIX & JEX', 'TOLD YOU SO'],
canciones[3] = ['img/demasiada_informacion.jpeg', 'THE BACALAOS', 'DEMASIADA INFORMACIÓN'],
canciones[4] = ['img/hamaca_paraguaya.jpg', 'KCHIPORROS', 'HAMACA PARAGUAYA'];

/*inicializamos el array musica con las canciones */
musicas=canciones;

/*inicializamos los iconos para las posiciones */
posicion[0] = ['iconos/uno.png'];
posicion[1] = ['iconos/dos.png'];
posicion[2] = ['iconos/tres.png'];
posicion[3] = ['iconos/cuatro.png'];
posicion[4] = ['iconos/cinco.png'];

inicial = new Array();/*array para inicializar las posiciones iniciales*/
final = new Array();/*array para inicialiar las nuevas posiciones */

/* cargamos la posicion inicial de las canciones*/
inicial[0] = [1];
inicial[1] = [2];
inicial[2] = [3];
inicial[3] = [4];
inicial[4] = [5];

/* cargamos la posicion final de las canciones*/
final[0] = [1];
final[1] = [2];
final[2] = [3];
final[3] = [4];
final[4] = [5];

/*si existe el id principal en el html*/
if(principal){

    main();
}

function main(){
    /*recorremos el array de las posiciones iniciales */
    for(i = 0; i < inicial.length; i++){
        /*creamos un elemento imagen y asignamos con los valores del array posicion*/
        let createIco = document.createElement('img');
        createIco.setAttribute('src', posicion[i]);

        /*recorremos las nuevas posiciones */
        for(f = 0; f < final.length; f++){          
            if(Number(inicial[i]) == Number(final[f])){
                let createForma = document.createElement('img');
                if(Number(i) == Number(f)){
                    if(mezclar){
                        createForma.setAttribute('src', 'iconos/estrella.png');
                    }   
                }else{
                    if(Number(i) < Number(f)){
                        if(mezclar){
                            createForma.setAttribute('src', 'iconos/arriba.png');
                        }
                    }else{
                        if(mezclar){
                            createForma.setAttribute('src', 'iconos/abajo.png');
                        }
                    }
                }
                /*creamos las etiquetas html*/
                let createDiv = document.createElement('div');
                let createImg = document.createElement('img');
                let createPri = document.createElement('div');
                let createDivC = document.createElement('div');/*div nombre canciones */
                let createInf = document.createElement('div'); /*div nombre cantante */
                let createFoto = document.createElement('div');
                let createForm = document.createElement('div');/*div para los iconos */
                

                createPri.setAttribute('class', 'musica');
                createDiv.setAttribute('class', 'cantante');
                createDivC.setAttribute('class', 'cancion');
                createInf.setAttribute('class', 'info');
                createForm.setAttribute('class', 'forma');
                createFoto.setAttribute('class', 'foto');

                createDiv.innerHTML= musicas[f][1];
                createDivC.innerHTML= musicas[f][2];

                createForm.appendChild(createIco);
                if(createForma){
                    createForm.appendChild(createForma);
                }

                createImg.setAttribute('src', musicas[f][0]);
                createFoto.appendChild(createImg);
                
                createInf.appendChild(createDivC);
                createInf.appendChild(createDiv);

                createPri.appendChild(createFoto);
                createPri.appendChild(createForm);
                createPri.appendChild(createInf);

                principal.appendChild(createPri);
            } 
        }   
    }
    /*limpiamos */
    musicas = [];
    /*inicializamos con las canciones con las nuevas posiciones */
    for(p=0; p<inicial.length; p++){
        for(f=0; f<final.length; f++){
            if(Number(inicial[p]) == Number(final[f])){
                musicas[p]= canciones[f];
            }
        }   
    }
    /*limpiamos */
    canciones = [];
    /*inicializamos con las canciones con las nuevas posiciones */
    canciones = musicas;
}

function mezclarRanking() {
    let numero;
    let j = 0;
    mezclar = true;
    final = [];
    
    while(j < musicas.length){
        /*generamos el numero aleatorio */
        numero = Math.floor(Math.random() * musicas.length+1);
        if(! busqueda(numero)){
            final[i] = numero;
            j++;
        }
    }
    console.log(' nuevas posiciones');
    console.log(final);
    /*se limpia la pantalla */
    principal.innerHTML = "";
    /* se llama de vuelta a la funcion main para mostrar los nuevos valores*/
    main();
}

/*funcion para no repetir las nuevas posiciones */
function busqueda(numero){
    for(i=0; i < final.length; i++ ){
        if(numero == final[i]){
            return true;
        }
    }
}

