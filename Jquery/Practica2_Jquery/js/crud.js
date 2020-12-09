$(document).ready(function() {
    obtenerTareas();
    let modificar = false;

    function obtenerTareas() {
        //alert("pruebas");
        $.ajax({ //invocamos a ajax
            url: 'listar.php',
            type: "GET",
            success: function(response) {
                let task = JSON.parse(response)
                let template = '';
                task.forEach(task => {
                    template += `.
                    <tr taskId="${task.id}">
                        <td>${task.id}</td>
                        <td><a href='#' class="task-item">${task.name}</a></td>
                        <td>${task.description}</td>
                        <td> <button class="btn btn-danger">ELIMINAR</button></td>
                    </tr>
                    `
                });
                $('#tasks').html(template); //obtenemos el task
            }
        });
    }

    $('#task-form').submit(e => {
        const datos = {
            name: $('#name').val(),
            description: $('#description').val(),
            id: $('#id').val(),
        }
        console.log(datos)
        const url = modificar === false ? 'insertar.php' : 'modificar.php';
        $.post(url, datos, (response) => {
            obtenerTareas();
        });
    }); //invocamos obten el control de todo el formulario

    $(document).on('click', '.task-item', (e) => {
        const elemento = $(this)[0].activeElement.parentElement.parentElement; //tr
        const id = $(elemento).attr('taskId');
        console.log(id);
        //getTareas.php
        $.post('getTareas.php', { id }, (response) => {
            console.log(response);
            const task = JSON.parse(response);
            $('#name').val(task.name);
            $('#decription').val(task.description);
            $('#id').val(task.id);
            console.log(task)
            modificar = true;
        });
    });

});