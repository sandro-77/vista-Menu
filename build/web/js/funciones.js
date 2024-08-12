/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function aumentarCantidad() {
    let valor = document.getElementById("cambiaValor");
    let valorfijo = 1;
    let contador = 1;
    contador = contador + valorfijo;
    valor.innerHTML = contador;
}

function addLine(button) {
            button.classList.toggle('clicked');
}

function showContent(contentId) {
            // Ocultar todos los contenidos
            var contents = document.querySelectorAll('.content');
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Mostrar el contenido correspondiente
            var activeContent = document.getElementById(contentId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }


