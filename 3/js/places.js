/*Creación del arreglo con la información a mostrar en el mapa, alternativamente se pudo usar un .JSON */
const places = [
    {
        //Posición en X del lugar
        x: 490,
        //Posición en Y del lugar
        y: 540,
        //Título a mostrar
        title: 'Capital de la Nación del Fuego',
        //Información completa del lugar
        information: 'La capital de la Nación del Fuego es la sede del gobierno de la Nación del Fuego. Es el hogar del Señor del Fuego, la familia real y los nobles. La capital se encuentra la isla capital, una gran isla en la región occidental de la Nación del Fuego. \n \n La capital de la Nación del Fuego en gran parte se mantuvo fuera de la guerra de los Cien Años, debido a la destreza de la Armada de la Nación del Fuego. Sin embargo, fueron atacados en al menos una ocasión, durante la fallida invasión de la Nación del Fuego en el Día del Sol Negro.',
        //Imagen a cargar
        img: '../img/map/capital_fuego.jpg',
        orientation: 'right',
        //Lugar del menú en la que se va a mostrar
        button: 'fire_button'
        //Icono del boton
    },
    /*Esto se repite para los demás botones */
    {
        x: 830,
        y: 380,
        title: 'Aldea colonial de la Nación del Fuego',
        information: 'LA Aldea colonial de la Nación del Fuego estaba ubicada en el noroeste del Reino Tierra. A pesar de ser un asentamiento relativamente pequeño, la ciudad era un centro cultural bastante conocido durante la época de las colonias, siendo el lugar donde se celebraba el Festival de los Días del Fuego cada año. \n\n Esta aldea es un lugar conocido por sus hermosos eventos culturales, además de su arquitectura extravagante y grandiosa. Tal vez los puntos más reconocidos de esta aldea son las tres pagodas que se encuentran en el centro del pueblo. La pagoda central es la más grande de todas, mientras que las dos que se encuentran a lado y lado de la central son más pequeñas pero idénticas.',
        img: '../img/map/colonia_fuego.webp',
        orientation: 'left',
        button: 'fire_button'
    },
    {
        x: 920,
        y: 290,
        title: 'Templo Aire del Norte',
        information: 'El Templo Aire del Norte es uno de los cuatro templos originales que pertenecían a los Nómadas Aire. Ubicado en las montañas a lo largo de la costa norte de la Reino Tierra, este templo fue uno de los dos templos que albergaban exclusivamente Maestros Aire masculinos, siendo el otro el Templo Aire del Sur. Su población original, sin embargo, fue eliminada en el comienzo de la Guerra de los Cien Años, durante el Genocidio de los Nómadas Aire.',
        img: '../img/map/templo_aire_norte.png',
        orientation: 'left',
        button: 'air_button'
    },
    {
        x: 550,
        y: 370,
        title: 'Templo Aire del Oeste',
        information: 'El Templo Aire del Oeste es uno de los cuatro templos originales de los Nómadas Aire y uno de los dos, siendo el otro el Templo Aire del Este, que alojaba exclusivamente Maestros Aire femeninos. \n\n Esta ubicado en las montañas al norte de la Nación del Fuego. El templo es notable, ya que, a diferencia de los otros tres templos, se sitúa por debajo del borde de un acantilado en lugar de la cima de una montaña. Las torres parecen como si hubieran sido creadas al revés, y por eso, el templo está oculto para transeúntes. Su diseño permite que el viento fluya incluso en las cámaras más profundas, que dieron que los Nómadas Aire se sientan como en casa.',
        img: '../img/map/templo_aire_oeste.webp',
        orientation: 'right',
        button: 'air_button'
    },
    {
        x: 1190,
        y: 620,
        title: 'Templo Aire del Este',
        information: 'El Templo Aire del Este es uno de los cuatro templos originales que le pertenecían a los Nómadas Aire, y actualmente está habitada por un grupo de Acólitos del Aire, y uno de los dos que albergaba Maestros Aire femeninos antes de la Guerra de los Cien Años, el otro siendo el Templo Aire del Oeste. Sin embargo, su población fue aniquilada durante el comienzo de la Guerra de los Cien Años con el Genocidio de los Nómadas Aire en el 0 DG. \n\n El Gurú Pathik vivió en el templo durante un período prolongado, donde enseñó finalmente al Avatar Aang cómo controlar la Estado Avatar a voluntad, setenta y un años después, Korra es guiada aquí para entrar en el Mundo de los Espíritus por Jinora.',
        img: '../img/map/templo_aire_este.webp',
        orientation: 'left',
        button: 'air_button'
    },
    {
        x: 690,
        y: 720,
        title: 'Templo Aire del Sur',
        information: 'El Templo Aire del Sur es uno de los cuatro templos originales que pertenecen a los Nómadas Aire, ubicado en las remotas Montañas Patola, y uno de los dos que alojaba exclusivamente Nómadas Aire masculinos, siendo el otro el Templo Aire del Norte. Aunque se creía que este lugar solo era accesible a través de bisontes voladores, la Nación del Fuego logró llegar a ellos acabando con todos los habitantes del templo al estallar la Guerra de los Cien Años con el Genocidio de los Nómadas Aire, terminando abruptamente milenios de su uso por monjes y monjas.',
        img: '../img/map/templo_aire_este.webp',
        orientation: 'right',
        button: 'air_button'
    },
    {
        x: 800,
        y: 220,
        title: 'Tribu Agua del Norte',
        information: 'Su ciudad más grande se conoce con el mismo nombre. Construida dentro de altos muros de hielo, y rodeada de tundra y un inhóspito terreno, la ciudad prospera en su aislamiento. \n\n No hubo ataque por parte de la Nación del Fuego a la ciudad durante la Guerra de los Cien Años que haya tenido éxito, incluyendo el "Asedio del Norte". Después de la caída de Ba Sing Se, la Ciudad Capital Tribu Agua del Norte fue la única gran ciudad que no había sido conquistada por la Nación del Fuego, siendo el único país en no verse afectado por la Gran Guerra, a pesar de grandes ataques fallidos hacia su ciudad capital.',
        img: '../img/map/tribu_norte.jpg',
        orientation: 'left',
        button: 'water_button'
    },
    {
        x: 730,
        y: 830,
        title: 'Tribu Agua del Sur',
        information: 'La Tribu Agua del Sur tiene una historia llena de grandes acontecimientos, y vivió tiempos de prosperidad y libertad antes de su disminución y casi desaparición. Antes de la Guerra de los Cien Años, la Tribu Agua del Sur no era una gran potencia como su tribu hermana, pero fue creciendo y prosperando. Tenía una cultura única al igual que un estilo de Agua Control único, y tuvo su epicentro en una gran ciudad del interior. Sin embargo, la Guerra de los Cien Años llegó a la tribu en 40 DG. \n\nCon el fin de eliminar una posible amenaza para sus esfuerzos de guerra, la Nación del Fuego inició una serie de brutales ataques, devastando el Polo Sur y matando o capturando a todos los Maestros Agua.',
        img: '../img/map/tribu_sur.webp',
        orientation: 'right',
        button: 'water_button'
    },
    {
        x: 1050,
        y: 390,
        title: 'Ba Sing Se',
        information: 'Ba Sing Se es la gigantesca capital del Reino Tierra, que abarca casi todo el sector nororiental del continente. Fue la última ciudad en caer bajo la conquista de la Nación del Fuego, después de Omashu. \n\n Es la más grande capital de las cuatro naciones. Ba Sing Se significa "La Ciudad Impenetrable", debido a los famosos muros que tiene en la periferia y a las puertas que solamente pueden ser abiertas usando Tierra Control. En las partes exteriores pero cercanas a los muros existen extensos campos, el Lago Laogai y numerosas montañas. En el interior se encuentra la ciudad misma. La ciudad es también destacada por tener un único sistema de división de la población de acuerdo al estatus social.',
        img: '../img/map/basingse.webp',
        orientation: 'left',
        button: 'earth_button'
    },
    {
        x: 880,
        y: 560,
        title: 'Omashu',
        information: 'Omashu es la segunda ciudad más grande del Reino Tierra y la capital de una de sus provincias. Sólo Ba Sing Se, la capital titánica del Reino Tierra, es más grande. Fue uno de los últimos reductos grandes del Reino Tierra, un proveedor de hombres y armamento antes de su caída en los meses antes de la final de la guerra. La ciudad fue también muy conocida por su famoso Sistema de correo de Omashu impulsado por Tierra Control y gravedad. \n\nOmashu se encuentra en la cordillera de las Montañas Kolau en el suroeste de Reino Tierra. La ciudad está construida sobre una serie de colinas, y está rodeada por un barranco ancho. Omashu está fuertemente fortificada.',
        img: '../img/map/omashu.png',
        orientation: 'left',
        button: 'earth_button'
    },
    {
        x: 855,
        y: 680,
        title: 'Isla Kyoshi',
        information: 'La Isla Kyoshi está situada en el Mar del Sur debajo de la costa sur del Reino Tierra, y poblada en muchas pequeñas aldeas. Predominantemente funcionando como un puerto pesquero, esta pequeña isla es un destino popular entre comerciantes y viajeros.[2] Es bien conocida por ser el hogar adoptivo del Avatar Kyoshi y la residencia del grupo de élite conocido como las Guerreras Kyoshi, un equipo de lucha conformado únicamente por mujeres. \n\nComo resultado, todos los pueblos de la isla albergan una estatua de su Avatar venerado, y uno de los pueblos ha convertido el templo en un santuario dedicado a ella. La isla se caracteriza por su aislamiento y clima templado.',
        img: '../img/map/islaKyoshi.webp',
        orientation: 'left',
        button: 'earth_button'
    },

];

/* Se exporta la variable para ser usada en el archivo main */
export default places;