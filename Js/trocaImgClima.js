//Objeto com todas os icones do clima
const colecaoImgClima = [
   {
      id: 'Sunny',
      img: "Conteudo/clearDay.svg",
   },
   
   {
      id: 'Clouds and sun',
      img: "Conteudo/partlyCloudyDay.svg",
   },
   
   {
      id: 'Cloudy',
      img: "Conteudo/cloudy.svg",
   },
];

function alteraImgClima() {
   let imgClima = document.querySelector('.img_clima');
   let teste = document.querySelector('.txt_clima').textContent;
   
   for (let i = 0; i < colecaoImgClima.length; i++) {
      const elemento = colecaoImgClima[i];
      
      
      if (teste == elemento.id) {
         imgClima.setAttribute('src', elemento.img);
         //console.log(colecaoImgClima);
         
      }
   }
   
}
