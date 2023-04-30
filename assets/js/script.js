function actividad() {

    let selectOption = document.getElementById('select').value;

    if (selectOption == '1') {

        let actividad = document.getElementById('select')[0].textContent;

        document.getElementById('imagen').innerHTML = ` <div class="card mb-3 w-75 mx-auto mt-5">
                                                            <img id="imagenuno" src="./assets/img/${actividad}.jpg" class="card-img-top" alt="${actividad}.jpg" style="z-index:0;">
                                                            <img id="imagendos" src="./assets/img/backdrop.png" class="card-img-top">
                                                            <div id="imagentexto" class="center container">
                                                                <h3>${actividad.toUpperCase()}</h3>
                                                                <p><i class="bi bi-geo-alt"></i> Ubicacion</p>
                                                            </div>
                                                        </div>`;

        document.getElementById('descripcion').innerHTML = `<div id="descripcion">
                                                                <div class="card mb-5 w-75 mx-auto mt-5">
                                                                    <div class="card-body text-center">
                                                                        <h5 id="titulo" class="card-title">${actividad}</h5>
                                                                        <p id="contenido" class="card-text">El ${actividad} es muy bacán Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. Rem culpa mollitia corporis,
                                                                        possimus animi voluptatum. Vitae recusandae sunt nobis quae, eveniet possimus odit eaque
                                                                        reiciendis
                                                                        veniam temporibus voluptatibus perspiciatis? Repudiandae.</p>
                                                                        <a href="http://www.google.com">Conocer más</a>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        efectoImagen();

    } else if (selectOption == '2') {

        let actividad = document.getElementById('select')[1].textContent;

        document.getElementById('imagen').innerHTML = ` <div class="card mb-3 w-75 mx-auto mt-5">
                                                            <img id="imagenuno" src="./assets/img/${actividad}.jpg" class="card-img-top" alt="${actividad}.jpg" style="z-index:0;">
                                                            <img id="imagendos" src="./assets/img/backdrop.png" class="card-img-top">
                                                            <div id="imagentexto" class="center container">
                                                                <h3>${actividad.toUpperCase()}</h3>
                                                                <p><i class="bi bi-geo-alt"></i> Ubicacion</p>
                                                            </div>
                                                        </div>`;

        document.getElementById('descripcion').innerHTML = `<div id="descripcion">
                                                                <div class="card mb-5 w-75 mx-auto mt-5">
                                                                    <div class="card-body text-center">
                                                                        <h5 id="titulo" class="card-title">${actividad}</h5>
                                                                        <p id="contenido" class="card-text">La ${actividad} es muy bacán Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. Rem culpa mollitia corporis,
                                                                        possimus animi voluptatum. Vitae recusandae sunt nobis quae, eveniet possimus odit eaque
                                                                        reiciendis
                                                                        veniam temporibus voluptatibus perspiciatis? Repudiandae.</p>
                                                                        <a href="http://www.google.com">Conocer más</a>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        efectoImagen();

    } else if (selectOption == '3') {

        let actividad = document.getElementById('select')[2].textContent;

        document.getElementById('imagen').innerHTML = ` <div class="card mb-3 w-75 mx-auto mt-5">
                                                            <img id="imagenuno" src="./assets/img/${actividad}.jpg" class="card-img-top" alt="${actividad}.jpg" style="z-index:0;">
                                                            <img id="imagendos" src="./assets/img/backdrop.png" class="card-img-top">
                                                            <div id="imagentexto" class="center container">
                                                                <h3>${actividad.toUpperCase()}</h3>
                                                                <p><i class="bi bi-geo-alt"></i> Ubicacion</p>
                                                            </div>
                                                        </div>`;

        document.getElementById('descripcion').innerHTML = `<div id="descripcion">
                                                                <div class="card mb-5 w-75 mx-auto mt-5">
                                                                    <div class="card-body text-center">
                                                                        <h5 id="titulo" class="card-title">${actividad}</h5>
                                                                        <p id="contenido" class="card-text">El ${actividad} es muy bacán Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. Rem culpa mollitia corporis,
                                                                        possimus animi voluptatum. Vitae recusandae sunt nobis quae, eveniet possimus odit eaque
                                                                        reiciendis
                                                                        veniam temporibus voluptatibus perspiciatis? Repudiandae.</p>
                                                                        <a href="http://www.google.com">Conocer más</a>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        efectoImagen();
    };

};

function efectoImagen (){

    let backdrop = document.getElementById('imagenuno');
    backdrop.addEventListener('mouseenter', backdropOn);
    backdrop.addEventListener('mouseleave', backdropOff);

};

function backdropOn(){

    document.getElementById('imagendos').style.display='block';
    document.getElementById('imagentexto').style.display='block';

};

function backdropOff(){

    document.getElementById('imagendos').style.display='none';
    document.getElementById('imagentexto').style.display='none';

};
