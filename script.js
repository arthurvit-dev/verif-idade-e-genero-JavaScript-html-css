function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert("[ERRO] verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'imagens/meninoBebe.webp')
            }else if(idade < 12){
                //criança
                img.setAttribute('src', 'imagens/meninoCriança.avif')
            }else if(idade < 18){
                img.setAttribute('src', 'imagens/meninoAdolescente.jpg')
                //adolescente
            }else if(idade < 30) {
                img.setAttribute('src', 'imagens/homemJovem.jpeg')
                //jovem
            }else if (idade < 59){
                img.setAttribute('src', 'imagens/homemAdulto.jpeg')
                //adulto
            }else{
                img.setAttribute('src', 'imagens/homemIdoso.jpeg')
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'imagens/meninaBebe.png')
            }else if(idade < 12){
                //criança
                img.setAttribute('src', 'imagens/meninaCriança.jpg')
            }else if(idade < 18){
                img.setAttribute('src', 'imagens/mulherAdolescente.jpeg')
                //adolescente
            }else if(idade < 30) {
                img.setAttribute('src', 'imagens/mulherJovem.jpeg')
                //jovem
            }else if (idade < 59){
                img.setAttribute('src', 'imagens/mulherAdulta.jpeg')
                //adulto
            }else{
                img.setAttribute('src', 'imagens/mulherIdosa.jpeg')
                //idoso
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Dectamos gênero ${genero} com ${idade} ano(s)`
        res.appendChild(img)
    }
}