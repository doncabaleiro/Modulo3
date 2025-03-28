document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault()
    const errores = []; // aquí iremos guardando los distintos mensajes/enlaces de error
    const resumenErrores = document.getElementById("resumenErrores"); // parde del documento donde mostraremos los mensajes de error
    resumenErrores.innerHTML = ""; // vaciamos los posibles mensajes
    resumenErrores.style.display = "none"; // por ahora, ocultamos los mensajes de error
  
    // Obtenemos una referencia a cada uno de los elementos para comprobar sus valores

    const numeroPersonas = document.getElementById("numeroPersonas");
    const nombreUsuario = document.getElementById("nombreUsuario");
    const email = document.getElementById("email");
    const telefonoPersonas = document.getElementById("telefonoPersonas");
    const fechaReserva = document.getElementById("fechaReserva");
    const horaReserva = document.getElementById("horaReserva");
  
    // Validación de campos
    if (fechaReserva.value.length < 1) {
      errores.push({ campo: "fechaReserva", mensaje: "Introduzca una fecha válida." });
    }

    if (horaReserva.value.length < 1) {
      errores.push({ campo: "horaReserva", mensaje: "Introduzca una hora de reserva válida." });
    }

    if (numeroPersonas.value.length < 1) {
      errores.push({ campo: "numeroPersonas", mensaje: "Indique para cuantas personas desea la reserva." });
    }

    if (nombreUsuario.value.length < 1) {
      errores.push({ campo: "nombreUsuario", mensaje: "Escriba a nombre de quién va la reserva." });
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errores.push({ campo: "email", mensaje: "El correo electrónico no es válido." });
    }

    if (telefonoPersonas.value.length < 1) {
      errores.push({ campo: "telefonoPersonas", mensaje: "Escriba un número de teléfono válido." });
    }
  
    // Si la longitud del array de errores es > 0, significa que hay algún error)
    if (errores.length > 0) {
        let h3 = document.createElement('h3')
        h3.id='encabezado_errores' // creamos un h3 para indicar que hay errores
        h3.innerHTML = `Hay ${errores.length} errores en la reserva`
        resumenErrores.appendChild(h3)

        let ol = document.createElement('ol')
      errores.forEach(error => {
        const enlaceError = document.createElement("a");
        enlaceError.href = "#";
        enlaceError.textContent = error.mensaje;
        enlaceError.addEventListener("click", function (event) {
          event.preventDefault();
          document.getElementById(error.campo).focus();
        });
        const errorLi = document.createElement("li");
        errorLi.appendChild(enlaceError);
        ol.appendChild(errorLi)

      });
      resumenErrores.appendChild(ol);
      resumenErrores.style.display = "block";
      resumenErrores.focus();
    } else {
      alert("Reserva realizada con ´éxito");
    }
  });
  
  