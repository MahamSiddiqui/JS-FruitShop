var val = 0, purchase = 0, count_apple = 0, count_orange = 0, count_banana = 0, total_purchas = 0;
function valuse(){
    val=document.querySelector("input").value;

}
function result(){
    document.querySelector("span").innerHTML = total_purchas;

}

function dec_apple(){
    if (val >= 10){
        count_apple += 1;
        purchase += 10;
        val = val - purchase;
        total_purchas = purchase + total_purchas;
        purchase = 0;
        document.querySelector(".apple").value = count_apple;
        result();
        
    }
    else{
        alert("Not enough money to buy more Apples,try to buy another fruits.Thank You!")
    }
}