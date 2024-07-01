function login(){

    const USUARIO = document.getElementById('usuario').value;
    const CONTRASEÑA = document.getElementById('contraseña').value;

    if(USUARIO && CONTRASEÑA){

        localStorage.setItem('usuario',USUARIO);
        localStorage.setItem('contraseña',CONTRASEÑA);
        window.location.href = './pages/Productos.html';

    }else{
        alert('ingrese nombre y apellido')
    }
}
const reciboUsuario = localStorage.getItem('usuario');
document.getElementById('nombre').textContent = `bienvenido ${reciboUsuario}`;