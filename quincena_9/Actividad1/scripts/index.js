function realizarCuenta() {
    const pTotales = document.getElementsByTagName('p').length
    
    const enlaces = document.getElementsByTagName('a')
    const direccionEnlace = enlaces[enlaces.length - 2].href

    const enlacesValenciaCF = Array.from(enlaces).filter(a => a.href === 'https://www.valenciacf.com/');
    
    const numeroEnlacesValenciaCF = enlacesValenciaCF.length;
    
    alert(` Número de párrafos totales: ${pTotales}\n Dirección a la que enlaza el penúltimo enlace: ${direccionEnlace}\n Número de enlaces que enlazan a https://www.valenciacf.com: ${numeroEnlacesValenciaCF}`)
}

const button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function() {
    realizarCuenta()   
})