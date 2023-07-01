// Obtener el elemento del título del logo
const logoTitle = document.querySelector('.logo a');

// Obtener el botón de ingreso del modal
const ingresarButton = document.querySelector('#staticBackdrop button[type="submit"]');

// Agregar un event listener al botón de ingreso
ingresarButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario
  
  // Obtener el rol seleccionado
  const roleSelect = document.querySelector('#role');
  const rolUsuario = roleSelect.options[roleSelect.selectedIndex].text.toLowerCase();
  const menu = document.getElementById ('navbar');
  const links = menu.getElementsByTagName('a');
  const hero = document.getElementById('hero');
  const tituloElemento = document.querySelector("#hero h1");
  const tituloElement = document.querySelector("#hero h2");
  const boton = document.getElementById("boton-iniciar-sesion");
  const section = document.getElementById("about");
 const parent = section.parentNode;
 const sectionTitle = document.querySelector('#titprof');
 const trainersSection = document.getElementById('trainers');
 const seccion = document.getElementById("why-us");
 const countsSection = document.getElementById('counts');
 const seccionTitle = document.querySelector('#testimonials .section-title p');
seccionTitle.textContent = " materias";
const tituloProfesores = document.querySelector("#titprof h3");
const descripcion = document.querySelector("#titprof p");
const imgen = document.querySelector('.member img');
const imageElement = document.getElementById("myImage");
const ad2 = document.getElementById("ad2");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const panel3 = document.getElementById("panel3");
const admin = document.getElementById("admin");
const closeButton = document.getElementById("closeButton");
const titue = document.getElementById('es1');
const listaElement = document.querySelector('.content ul');

  if (rolUsuario === 'estudiante') {
    logoTitle.innerText = 'Estudiante';
    links[0].innerHTML = 'materias';
    links[1].innerHTML = 'mis clases';
    links[2].innerHTML = 'postulaciones';
    links[3].innerHTML = '';
    links[4].innerHTML = '';
    links[5].innerHTML = '';
    links[6].innerHTML = '';
    hero.style.background = 'url("/mentor/assets/img/principal3.webp") top center';
    tituloElemento.style.display = "none";
    tituloElement.innerText = "El conocimiento es el poder que te lleva a descubrir nuevos horizontes y conquistar tus sueños.  ";
    tituloElement.innerText ="¡Atrévete a educarte y serás dueño de tu destino!"
    tituloElemento.style.textAlign = "center";
    tituloElement.style.fontFamily = "roboto";
    boton.textContent = "Cerrar sesión";
    titue.textContent = "¡En Educatio, creemos que cada estudiante tiene el potencial de alcanzar grandes logros y conquistar sus metas académicas. Nuestro objetivo es ofrecerte una plataforma integral que te permita aprender de forma interactiva, dinámica y personalizada. Imagina un mundo donde no existen barreras geográficas ni horarios restrictivos. Con Educatio, podrás acceder a una amplia variedad de cursos impartidos por profesores altamente cualificados desde cualquier lugar y en cualquier momento. ¡La educación se adapta a tu estilo de vida! No importa si prefieres la comodidad de aprender desde casa o la emoción de asistir a clases presenciales, en Educatio encontrarás todo lo que necesitas para sobresalir. Nuestro equipo de expertos ha diseñado una interfaz intuitiva y fácil de usar que te permitirá interactuar con tus compañeros de clase, realizar actividades interactivas y acceder a recursos educativos de calidad.En Educatio, la innovación es nuestra bandera. Estamos constantemente actualizando nuestras herramientas y contenidos para asegurarnos de que recibas una educación de vanguardia. Además, contamos con un sistema de seguimiento y evaluación que te ayudará a medir tu progreso y alcanzar tus metas de manera eficiente. Ya sea que estés comenzando tu trayectoria académica o buscando mejorar tus habilidades existentes, Educatio te brinda la oportunidad de crecer y destacarte en el mundo académico. Estamos comprometidos con tu éxito y estamos aquí para apoyarte en cada paso del camino.Prepárate para sumergirte en un mundo de conocimiento sin límites. En Educatio, el aprendizaje es inspirador, desafiante y lleno de oportunidades. ¡Juntos alcanzaremos las estrellas!¡Bienvenido a Educatio, donde tu futuro comienza a tomar forma!";
    listaElement.remove();
    boton.addEventListener("click", function() {
      window.location.href = "/Mentor/index.html";
    parent.removeChild(section);
    sectionTitle.remove();
    trainersSection.remove();
    seccionTitle.textContent = "nuestras materias!";
   
});
    
  } else if (rolUsuario === 'docente') {
    logoTitle.innerText = 'Docente';
    links[0].innerHTML = 'solicitudes';
    links[1].innerHTML = 'clases';
    links[2].innerHTML = 'contraofertas';
    links[3].innerHTML = '';
    links[4].innerHTML = '';
    links[4].innerHTML = '';
    hero.style.background = 'url("/mentor/assets/img/58.jpg") top center';
    tituloElemento.style.display = "none";
    tituloElement.innerText = "El conocimiento es el poder que te lleva a descubrir nuevos horizontes y conquistar tus sueños.  ";
    tituloElement.innerText ="¡Tu pasión educativa transforma vidas.!"
    tituloElemento.style.textAlign = "center";
    tituloElement.style.fontFamily = "roboto";
    admin.src = "/Mentor/assets/img/doc.jpg";
    titue.textContent = "¡Bienvenido, docente, a Educatio! Aquí encontrarás un espacio dinámico y flexible para impartir clases virtuales o presenciales. Conecta con una comunidad de estudiantes ávidos de aprender y disfruta de herramientas innovadoras para hacer tus clases aún más impactantes. ¡Únete a nosotros y se parte del cambio educativo en Educatio!";
    listaElement.remove();
    boton.textContent = "Cerrar sesión";
    boton.addEventListener("click", function() {
      window.location.href = "/Mentor/index.html";
    });
    
    
    seccion.parentNode.removeChild(seccion);
    countsSection.parentNode.removeChild(countsSection);
    seccionTitle.textContent = "tus especializaciones";
  } else if (rolUsuario === 'administrador') {
    logoTitle.innerText = 'Administrador';
    links[0].innerHTML = 'usuarios';
    links[1].innerHTML = 'configuracion';
    links[2].innerHTML = '';
    links[3].innerHTML = '';
    links[4].innerHTML = '';
    links[4].innerHTML = '';
    hero.style.background = 'url("/mentor/assets/img/admin.jpg") top center';
    tituloElemento.style.display = "none";
    tituloElement.innerText = "El conocimiento es el poder que te lleva a descubrir nuevos horizontes y conquistar tus sueños.  ";
    tituloElement.innerText ="¡El poder de la educación en tus manos: Administrador, transformando realidades.!"
    tituloElemento.style.textAlign = "center";
    tituloElement.style.fontFamily = "roboto";
    
    boton.textContent = "Cerrar sesión";
    boton.addEventListener("click", function() {
      window.location.href = "/Mentor/index.html";
    });
    
    seccionTitle.textContent = "tus especializaciones";
    tituloProfesores.textContent = ""; 
    descripcion.textContent = "panel de control"; 
    imgen.src = '/Mentor/assets/img/a1.jpg';
    imageElement.src = "/Mentor/assets/img/a2.jpg";
    ad2.src='/Mentor/assets/img/a3.jpg';
    panel1.textContent = "clases";
    panel2.textContent = "calificaciones";
    panel3.textContent = "rendimiento";
    admin.src = "/Mentor/assets/img/adprin.jpg";
  } else {
    logoTitle.innerText = 'Otro Rol';
  }

 
  const usuarioInput = document.getElementById('username').value;
  const contraseñaInput = document.getElementById('password').value;

  if (usuarioInput === 'adso2556678' && contraseñaInput === 'adso2023') {
    
    if (rolUsuario === 'docente') {
      logoTitle.innerText = 'Profesor';
    } else {
      
      if (rolUsuario === 'estudiante') {
        logoTitle.innerText = 'Estudiante';
      } else if (rolUsuario === 'administrador') {
        logoTitle.innerText = 'Administrador';
      } else {
        window.location.href = '/Mentor/index.html';
      }
    }
  } else {
    
    const mensajeError = document.getElementById('mensaje-error');
    mensajeError.textContent = 'Usuario o contraseña inválidos';
    mensajeError.style.display = 'block';

    
    window.location.href = '/Mentor/registro.html';
  }

  
  const modal = document.querySelector('#staticBackdrop');
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
});


function redirectToIndex2(event) {
  event.preventDefault();
  window.location.href = '/Mentor/index.html';
}




function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  redirigir();
}

function redirigir() {
  window.location.href = '/Mentor/index.html';
}

window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("modal").style.display = "flex";

  var closeButton = document.querySelector("#modal > div > span");
  closeButton.addEventListener("click", cerrarModal);
});
