let InpPassword = document.querySelector('input#password')

function getPassword(){
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&/()=?@{}[]'
    let tamPassword = 16
    let password = ""

    for (let i=0; i<tamPassword; i++){
        var numAletoreo = Math.floor(Math.random() * chars.length)
        password += chars.substring(numAletoreo,numAletoreo+1)
    }
    InpPassword.value = password
}