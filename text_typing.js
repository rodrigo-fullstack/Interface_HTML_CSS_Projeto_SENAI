function type_writer(elemento){
    textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    setTimeout(() => {
        textoArray.forEach((letra,i) => {
            setTimeout(function (){
                elemento.innerHTML += letra
            }, 100*i)
        })
    }, 3000)
}

var text = document.querySelector(".p-content")
type_writer(text)