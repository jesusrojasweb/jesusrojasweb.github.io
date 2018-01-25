<?php

/****************************************************************
Recibe los datos ingresados
****************************************************************/
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$comentario = $_POST['mensaje'];

if( empty($nombre) || empty($email) || empty($comentario) ) {

  $error = true;

}


/****************************************************************
Aquí debes ingresar el asunto del mail
****************************************************************/
$subject = 'Contacto desde tu pagina de: ' . $nombre ;
$comentario = stripcslashes($comentario);



/****************************************************************
Aquí se genera el cuerpo del mensaje
****************************************************************/
$mensaje = "De: $nombre \n
E-mail: $email \n
Mensaje: $comentario \n
\n";

$from = "From: $email\r\n";



/****************************************************************
ingresa mail receptor
****************************************************************/

if( !$error ) {
  mail("jesusrojas.frontend@gmail.com", $subject, $mensaje, $from);
}
?>
<!DOCTYPE html>
<html lang="en"></html>
<head>
  <meta charset="UTF-8"/>
  <title>Jesús Rojas</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
  <link rel="stylesheet" href="css/normalize.css"/>
  <link rel="stylesheet" href="css/bootstrap.min.css"/>
  <link rel="stylesheet" href="css/font-awesome.min.css"/>
</head>
<body id="top">
  <section class="JesusHero" id="JesusHero">
    <div class="JesusHero-header" id="navbar">
      <figure class="JesusHero-header-logo"><a href="/"><img src="img/logo.png" alt="logo"/></figure></a>
      <nav class="JesusHero-header-navbar"><span class="JesusHero-header-navbar-menu--burguer fa fa-bars" id="burguer"></span>
        <ul class="JesusHero-header-navbar-menu" id="menu">
          <li class="JesusHero-header-navbar-menu-item"><a href="/#habilidades">Habilidades</a></li>
          <li class="JesusHero-header-navbar-menu-item"><a href="/#educacion">Educacion</a></li>
          <li class="JesusHero-header-navbar-menu-item"><a href="/#portafolio">Proyectos</a></li>
          <!--li.JesusHero-header-navbar-menu-itema(href="#") Precios
          -->
          <li class="JesusHero-header-navbar-menu-item"><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="JesusContacto u-wrapp">
    <h2 class="JesusContacto-title title">Contactame</h2>
    <?php if( $error ) { ?>
    <div class="JesusContacto-grid u-Grid">
      <ul class="JesusContacto-informacion u-Grid-column">
        <li class="JesusContacto-informacion-item">
          <div class="JesusContacto-informacion-item-header"><span class="fa fa-home"></span>
            <h3 class="JesusContacto-informacion-item-header-title">Localización</h3>
          </div>
          <p class="Jesuscontacto-infromacion-item-info">Maturín, Monagas, Venezuela</p>
        </li>
        <li class="JesusContacto-informacion-item">
          <div class="JesusContacto-informacion-item-header"><span class="fa fa-envelope-open-o"></span>
            <h3 class="JesusContacto-informacion-item-header-title">Contacto</h3>
          </div>
          <p class="Jesuscontacto-infromacion-item-info">jesusrojas.frontend@gmail.com <br> +58 424-934-7744</p>
        </li>
        <li class="JesusContacto-informacion-item">
          <ul class="JesusContacto-informacion-item-red">
            <li class="JesusContacto-informacion-item-red-icono"><a class="JesusContacto-informacion-item-red-icono-social" href="https://www.linkedin.com/in/jesusrojas-frontend/" target="_blank"><span class="fa fa-linkedin"></span></a></li>
            <li class="JesusContacto-informacion-item-red-icono"><a class="JesusContacto-informacion-item-red-icono-social" href="https://github.com/jesusrojas-frontend" target="_blank"><span class="fa fa-github"></span></a></li>
          </ul>
        </li>
      </ul>
      <form class="JesusContacto-formulario form-group u-Grid-column" action="enviar.php" method="post">
        <input class="JesusContacto-formulario-input form-control" type="text" required="required" id="nombre" name="nombre" placeholder="Su Nombre"/>
        <input class="JesusContacto-formulario-input form-control" type="email" id="email" name="email" placeholder="Su correo"/>
        <input class="JesusContacto-formulario-input form-control" type="text" id="mensaje" name="mensaje" placeholder="El asunto"/>
        <textarea class="JesusContacto-formulario-input--textarea form-control" name="comentarios" cols="30" rows="5" placeholder="Mensaje a dejar"></textarea>
        <input class="JesusContacto-formulario-btn btn" type="submit" value="Enviar"/>
      </form>
    </div>
  <?php } else { ?>
  <p class="JesusContacto-parrafo">Gracias por ponerse en contacto conmigo. Le respondere lo mas pronto que sea posible</p>
  <?php } ?>
  </section>
  <script src="js/jquery.js"></script>
  <script src="js/app.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Exo:400,500|Nunito:400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="/css/estilos.css">
</body>
</html>
</html>