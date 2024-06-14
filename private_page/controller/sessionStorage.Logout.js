const getUserData = (key)=>{
    return JSON.parse(sessionStorage.getItem(key))   
}

const logOut = (key)=>{
    sessionStorage.removeItem(key)
}

window.addEventListener('load',()=>{
    
    const userInfo = getUserData('userData')

    document.getElementById('btnLogout').addEventListener('click',()=>{
        logOut('userData')
        window.location.href = 'http://127.0.0.1:5500/public_page/login.html';
    })

})