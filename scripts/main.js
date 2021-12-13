//	Declaraciones
	const d = document
	const Nav = d.querySelector('#nav')
	const Header = d.querySelector('#header')
	const Footer = d.querySelector('#footer')
//	Contenidos
	Nav.innerHTML = `
		<a class="icon logo" href="#"></a>
	    <button class="nav-button fas fa-bars"></button>
	    <ul class="menu">
	        <li><a href="index.html#servicios" tittle="servicios">SERVICIOS</a></li>
	        <li class="dropdown">
	            <a class="sub-button">ESPECIES <i class="fas fa-angle-down"></i></a>
	            <ul class="submenu">
	                <li><a href="seleccion.html">SELECCION</a></li>
	                <li><a href="productos.html">PRODUCTOS</a></li>
	            </ul>
	        </li>
	        <li><a href="cuidados.html">CUIDADOS</a></li>
	        <li><a href="contacto.html">CONTACTO</a></li>
	        <li class="animate__animated animate__tada animate__delay-1s animate__repeat-2">
	            <a target="_blank" href="https://api.whatsapp.com/send?phone=+5492916499028&text=Hola" class="icon whatsapp" src="img/whatsapp.png" alt="whatsapp"></a>
	        </li>
	    </ul>`
	Header.innerHTML = `
		<h1 class="animate__animated animate__bounceInRight">El Maiten Vivero Forestal</h1>
        <p> 
            Somos un vivero ubicado en Bahia Blanca, provincia de Buenos Aires. Contamos con una extensa trayectoria en producción y venta de árboles en la ciudad y la zona. 
        </p>
        <p>
            Nuestro objetivo es acompañar a nuestros clientes en la selección de la especie adecuada de acuerdo a las dimensiones del espacio verde. En tal sentido, ofrecemos asesoramiento para poder lograr que cada árbol plantado pueda desarrollar todo su potencial y llegar a ser una planta con buena sanidad vegetal.
        </p>
        <p>
            Al mismo tiempo, dictamos capacitaciones en paisajismo y jardinería.
        </p>	`
	Footer.innerHTML = `
	    <div class="redes">
	        <h2>Seguinos en nuestras redes</h2>
	        <a href="https://facebook.com" target="_blank" class="fab fa-facebook-square"><a>
	        <a href="https://instagram.com" target="_blank" class="fab fa-instagram"><a>
	    </div>
	    <div class="autor">
	        <h2>Proyecto Integrador HTML-CSS-JS</h2>
	        <p class="sub">
	            &copy; Todos los derechos reservados
	            <a href="#">Clarisa Saade</a>
	        </p>
	    </div>`
// 	Navegacion
	menuBtn = d.querySelector('.nav button')
	menuLst = d.querySelector('.nav .menu')
	submBtn = d.querySelector('.sub-button')
	submLst = d.querySelector('.submenu')
	menuBtn.onclick = () => menuLst.classList.toggle('active')
	submBtn.onclick = () => submLst.classList.toggle('active')