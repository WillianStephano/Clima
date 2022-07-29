var campoPesquisa = document.querySelector('.campo_pesquisa')


campoPesquisa.addEventListener('keyup', () => {
   var valorPesquisa = document.querySelector('.campo_pesquisa').value
   
   localAPI(valorPesquisa)
})



//acha local
const localAPI = async (valorPesquisa) => {
   const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=nfdfeQp8LuYjVh0gyhEACRpwjMUGDyVG&q=${valorPesquisa}`
   const dadosGerais = await fetch(url)
   const dadosLocal = await dadosGerais.json()
   
   document.querySelector('.titulo_local').textContent = dadosLocal[0].LocalizedName
   document.querySelector('.pais_local').textContent = dadosLocal[0].Country.LocalizedName
   document.querySelector('.estado_local').textContent = dadosLocal[0].ParentCity.LocalizedName
   
   previsaoAPI(dadosLocal)
   climaAPI(dadosLocal)
}

//previsao do tempo
const previsaoAPI = async (dados) => {
   const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${dados[0].Key}?apikey=nfdfeQp8LuYjVh0gyhEACRpwjMUGDyVG`
   const dadosGerais = await fetch(url)
   const dadosPrevisao = await dadosGerais.json()
   
   insereClima(dadosPrevisao)
}


function insereClima(dados) {  
   let tempMax = document.querySelector('.temp_max')
   let tempMin = document.querySelector('.temp_min')
   
   tempMax.textContent = `Temp maxima: ${converteTemp(dados.DailyForecasts[0].Temperature.Maximum.Value)}`
   tempMin.textContent = `Temp minima: ${converteTemp(dados.DailyForecasts[0].Temperature.Minimum.Value)}`
}



const climaAPI = async (dados) => {
   const url = `http://dataservice.accuweather.com/currentconditions/v1/${dados[0].Key}?apikey=nfdfeQp8LuYjVh0gyhEACRpwjMUGDyVG`
   const dadosGerais = await fetch(url)
   const dadosClima = await dadosGerais.json()
   
   document.querySelector('.temp_atual').textContent = `${dadosClima[0].Temperature.Metric.Value}`
   document.querySelector('.txt_clima').textContent = dadosClima[0].WeatherText  
   
   //console.log(dadosClima);
   
   alteraImgClima()
}


function converteTemp(fahrenheit) {
   let celsius = (fahrenheit - 32) / 1.8
   
   return celsius.toFixed(1)
}