function login(){

    const USUARIO = document.getElementById('usuario').value;
    const CONTRASEÑA = document.getElementById('contraseña').value;

    if(USUARIO && CONTRASEÑA){

        localStorage.setItem('usuario',USUARIO);
        localStorage.setItem('contraseña',CONTRASEÑA);
        window.location.href = './pages/productos.html';

    }else{
        Swal.fire({
            title: "Datos no validos",
            text: "has ingresados datos incorrectos",
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
        // alert('ingrese nombre y apellido')
    }
}
const reciboUsuario = localStorage.getItem('usuario');
document.getElementById('nombre').textContent = `bienvenido ${reciboUsuario}`;