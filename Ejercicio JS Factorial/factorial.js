function calcula(){
    var numero = document.getElementById("numero").value;
    var factorial = 1;
    while (0 < numero ){
        factorial = factorial * numero--;
    }
    document.getElementById("factorial").textContent = factorial;
    


}