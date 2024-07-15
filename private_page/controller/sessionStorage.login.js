const form = document.getElementById('login')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userEmail = document.getElementById('email').value
    let userPass = document.getElementById('pass').value
   
    fetch('/private_page/data/users.json').then(res => res.json()).then(users => {
        const user = users.find(e => e.email === userEmail && e.pass === userPass)            
        if(user){
            sessionStorage.setItem('userData', JSON.stringify(user))
            window.location.href = 'http://127.0.0.1:5501/private_page/home/index.html';
        }else{
            document.getElementById('lblError').textContent="Error al ingresar los datos";                                 
        }
    })
})

