//Importar la variable creada en places.js
import places from './places.js';

//Creación de la variable con las configuraciones por defecto del mapa
const DCONFIG = {
    //Ancho del mapa
    WIDTH: 1623,
    //Alto del mapa
    HEIGHT: 1085,
    //Ancho de la columnas con información
    IMG_WIDTH: 400,
}

//Definir el estilo de texto de los títulos
const TITLESTYLE = {
    //Fuente
    font: "bold 35px OpenSans",
    //Color de letra
    fill: "#404040",
    //Hacer wrap del texto
    wordWrap: true,
    //Definir el ancho del texto
    wordWrap: { width: 440 },
    //Alinear el texto en el centro
    align: "center",
}

//Definir el estulo de texto con la información
const TXTSTYLE = {
    //Fuente
    font: "20px OpenSans",
    //Color de letra
    fill: "#454545",
    //Wraap del texto
    wordWrap: true,
    //Ancho del texto
    wordWrap: { width: 400 },
    //Justificar el texto
    align: "justify",
}

//Creación de la variable de configuración de Phaser3
const config = {
    //Tipo auto
    type: Phaser.AUTO,
    //Añadir la variable scale para un responsive automático
    scale: {
        //Definir el div padre
        parent: 'mapDiv',
        //Centrar el mapa horizontalmente
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        //Activar el responsive con FIT
        mode: Phaser.Scale.FIT,
        //Deifnir la relación de aspecto
        width: DCONFIG.WIDTH,
        height: DCONFIG.HEIGHT,
    },
    //Definir las funciones a utilizar
    scene: {
        preload: preload,
        create: create,
    },
    //Establecer la transparencia de fondo
    transparent: true,
}

//Crear la variable con
const mapVars = {
    menu: false,
}

//Crear el juego Phaser
var game = new Phaser.Game(config);

/* Crear las variables a utilizar */
//Menu derecho
let menu_derecho;
let hide_menu_der;
let close_button_der;
//Menu izquierdo
let menu_izquierdo;
let hide_menu_izq;
let close_button_izq;
//Título de la ventana
let place_title;
//Imagen del lugar
let place_image;
//Texto del lugar
let place_text;

/* Crear las funciones para ocultar y mostrar los menus */
function showRight() {
    /*Mostrar el menu */
    menu_derecho.visible = true;
    hide_menu_der.visible = true;
    close_button_der.visible = true;
    /*Mostrar y acomodar la información */
    //Titulo
    place_title.x = 1125;
    place_title.visible = true;
    //Imagen
    place_image.x = 1330;
    place_image.y = place_title.y + place_title.displayHeight + (place_image.height * place_image.scaleY / 2) + 40;
    place_image.visible = true;

    //Texto
    place_text.x = 1130;
    place_text.y = place_image.y + (place_image.height * place_image.scaleY / 2) + 40;
    place_text.visible = true;
    //Variable de control
    mapVars.menu = true;
}

function hideRight() {
    /*Ocultar el menu */
    menu_derecho.visible = false;
    hide_menu_der.visible = false;
    close_button_der.visible = false;
    /*Ocultar la información */
    place_title.visible = false;
    place_image.visible = false;
    place_text.visible = false;
    //Variable de control
    mapVars.menu = false;
}

function showLeft() {
    /*Mostrar el menu */
    menu_izquierdo.visible = true;
    hide_menu_izq.visible = true;
    close_button_izq.visible = true;
    /*Mostrar y acomodar la información */
    //Titulo
    place_title.x = 80;
    place_title.visible = true;
    //Imagen
    place_image.x = 290;
    place_image.y = place_title.y + place_title.displayHeight + (place_image.height * place_image.scaleY / 2) + 40;
    place_image.visible = true;
    //Texto
    place_text.x = 90;
    place_text.y = place_image.y + (place_image.height * place_image.scaleY / 2) + 40;
    place_text.visible = true;
    //Variable de control
    mapVars.menu = true;
}

function hideLeft() {
    /*Ocultar el menu */
    menu_izquierdo.visible = false;
    hide_menu_izq.visible = false;
    close_button_izq.visible = false;
    /*Ocultar la información */
    place_title.visible = false;
    place_image.visible = false;
    place_text.visible = false;
    //Variable de control
    mapVars.menu = false;
}


function preload() {
    /* Cargar las imagenes */
    //Mapa de fondo
    this.load.image("map", "./../img/map/map.jpeg");
    //Botones de cada nación
    this.load.image("air_button", "./../img/map/air_button.png");
    this.load.image("fire_button", "./../img/map/fire_button.png");
    this.load.image("water_button", "./../img/map/water_button.png");
    this.load.image("earth_button", "./../img/map/earth_button.png");
    //Menú derecho
    this.load.image("menu_derecho", "./../img/map/menu_derecho.png");
    //Menú izquierdo
    this.load.image("menu_izquierdo", "./../img/map/menu_izquierdo.png");
    //Botón cerrar
    this.load.image("close_button", "./../img/map/close.png");
    //Menu ocultar
    this.load.image("hide_menu", "./../img/map/hide_menu.png");
    /*Cargar cada una de las imagenes de la variable importada */
    for (var i = 0; i < places.length; i++) {
        this.load.image("place_" + i, places[i].img);
    }
}

function create() {
    /* Crear los objetos del mapa */
    // Crear el objeto del mapa
    const map = this.add.image(DCONFIG.WIDTH / 2, DCONFIG.HEIGHT / 2, "map");
    map.setScale(DCONFIG.HEIGHT / map.height);
    /* Crear los menus de información */
    /*  Crear  textos de info */
    place_title = this.add.text(100, 130, "", TITLESTYLE);
    place_text = this.add.text(100, 300, "", TXTSTYLE);
    place_image = this.add.image(290, 480, "place_0");
    /* Ubicar el texto al frente y ocultarlo */
    place_title.depth = 12;
    place_text.depth = 12;
    place_image.depth = 12;
    place_title.visible = false;
    place_text.visible = false;
    place_image.visible = false;
    /* Menu derecho */
    menu_derecho = this.add.image(1320, 542, "menu_derecho");
    hide_menu_der = this.add.image(558, 542, "hide_menu").setInteractive();
    close_button_der = this.add.image(1125, 80, "close_button").setScale(0.4).setInteractive({ useHandCursor: true });
    //Ocultar menu
    hideRight();
    /* Ubicar el menu en detras del texto pero sobre los iconos */
    menu_derecho.depth = 10;
    hide_menu_der.depth = 10;
    close_button_der.depth = 11;
    //Definir el comportamiento del botón de cerrar
    close_button_der.on('pointerover', function () {
        //Definir un tinte negro
        close_button_der.setTint(0x000000);
    });
    // Definir el comportamiento en clic sobre el botón de salir
    close_button_der.on('pointerdown', function () {
        //Ocultar el menu derecho
        hideRight();
    });
    // Definir el comportamiento en clic fuera del menu de información
    hide_menu_der.on('pointerdown', function () {
        //Ocultar el menu derecho
        hideRight();
    });

    /* Menu izquierdo */
    menu_izquierdo = this.add.image(304, 542, "menu_izquierdo");
    /*Definir el setInteractive para ejecutar funciones al hacer clic */
    hide_menu_izq = this.add.image(1067, 542, "hide_menu").setInteractive();
    close_button_izq = this.add.image(500, 80, "close_button").setScale(0.4).setInteractive({ useHandCursor: true });
    //Ocultar menu
    hideLeft();
    /* Ubicar el menu en detras del texto pero sobre los iconos */
    menu_izquierdo.depth = 10;
    hide_menu_izq.depth = 10;
    close_button_izq.depth = 11;
    //Definir el comportamiento del botón de cerrar
    close_button_izq.on('pointerover', function () {
        close_button_izq.setTint(0x000000);
    });
    // Definir el comportamiento en clic sobre el botón de salir
    close_button_izq.on('pointerdown', function () {
        //Ocultar el menu izquierda
        hideLeft();
    });
    // Definir el comportamiento en clic fuera del menu de información
    hide_menu_izq.on('pointerdown', function () {
        //Ocultar el menu izquierda
        hideLeft();
    });
    /* Crear los botones de selección */
    for (var i = 0; i < places.length; i++) {
        /*Se añade el botón usando la variable importada*/
        var btt = this.add.image(places[i].x, places[i].y, places[i].button).setScale(1.2).setInteractive({ useHandCursor: true });
        /*Se añade un atributo al objeto */
        btt.indexBT = i;
    }
    // Definir el comportamiento al interactuar sobre cada botón de información
    this.input.on('pointerover', function (event, targets) {
        /*Si se hace hover sobre el botón, se aplica un tinte */
        if (mapVars.menu == false) {
            //Siempre y cuando el menu no esté activo
            targets[0].setTint(0xFFFFFF);
            targets[0].setAlpha(0.75);
        }
    });
    // Definir el comportamiento en clic
    this.input.on('pointerdown', function (event, targets) {
        //Si se hace clic y el menu no está activo
        if (targets[0] && mapVars.menu == false) {
            //Si tiene un indexBT definido, propiedad añadida al crear el objeto
            if (places[targets[0].indexBT] !== undefined) {
                /*Cargar la información de la nación */
                place_title.text = places[targets[0].indexBT].title;
                //Actualizar la imagen
                place_image.setTexture("place_" + targets[0].indexBT).setScale(DCONFIG.IMG_WIDTH / place_image.width);
                place_text.text = places[targets[0].indexBT].information;
                //Dependiendo del valor de la variable, se muestra el menu a la izquierda o a la derecha
                if (places[targets[0].indexBT].orientation === "left") showLeft();
                else showRight();
            }
        }
    });
    //Definir el comportamiento al soltar el clic
    this.input.on('pointerout', function (event, targets) {
        //Cuando se suelta el clic, el botón vuelve a su color original
        if (targets[0].indexBT !== undefined) {
            //Se verifica la propiedad añadida a los botones
            targets[0].clearTint();
            targets[0].setAlpha(0.9);
        }
    });
}