<?php

/****************************************************************
Recibe los datos ingresados
****************************************************************/
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$comentario = $_POST['mensaje'];

if( empty($nombre) || empty($email) || empty($comentario) ) {

  $error = true;

}


/****************************************************************
Aquí debes ingresar el asunto del mail
****************************************************************/
$subject = 'Contacto: ' . $asunto ;
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
  <title>Contacto</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
  <link rel="stylesheet" href="css/estilos.css"/>
  <link rel="stylesheet" href="css/informacion.css"/>
</head>
<body id="top">
  <header class="header">
    <figure class="logo">
      <img src="img/logo-blanco.png" alt="logo"/>
    </figure>
    <nav class="navbar">
      <ul class="menu" id="menu">
        <li class="item">
          <a href="informacion.html">Información</a>
        </li>
        <li class="item">
          <a href="#proyectos">Proyectos</a>
        </li>
        <li class="item"><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
    <button class="burger" id="burger"><span class="fa fa-bars"></span>
    </button>
  </header>

    <?php if( $error ) { ?>
    <section class="contacto" id="contacto">
      <div class="contenedor">
        <h2 class="title">Contacto</h2>
        <form class="formulario" action="enviar.php">
          <span class="far fa-user icono"></span>
          <input class="input" id="nombre" type="text" placeholder="Nombre" name="nombre"/>
          <span class="far fa-envelope icono"></span>
          <input class="input" id="email" type="email" name="email" placeholder="Correo"/>
          <span class="fas fa-paperclip icono"></span>
          <input class="input" id="asunto" type="text" name="asunto" placeholder="Asunto"/>
          <span class="far fa-file icono"></span>
          <textarea class="textarea" id="mensaje" name="mensaje" cols="30" rows="5" placeholder="Mensaje"></textarea>
          <button class="btn" type="submit"><span class="far fa-paper-plane"></span>
          </button>
        </form>
      </div>
    </section>
  <?php } else { ?>
  <p>Gracias por ponerse en contacto conmigo. Le respondere lo mas pronto que sea posible</p>
  <?php } ?>
  <script src="js/jquery.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
</html>