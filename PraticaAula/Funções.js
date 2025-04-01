export function updateProgressBar(percentege) { //função da barra de carregamento
    const progressBar = document.getElementById('progress');
    progressBar.style.width = percentege + '%';
}
    //Simular do progresso
let progress = 0;
const interval = setInterval(() =>{
    if (progress>=100){
        clearInterval(interval);
    }else{
        progress += 10;
        updateProgressBar(progress);
        }
    }, 1000)


    //função da mensagem de texto
    export const form =  document.getElementById("myForm");
    export const successMessage = document.getElementById('successMessage');

