let val = 0;
let purchase = 0;
let count_apple = 0;
let count_orange = 0;
let count_banana = 0;
let total_purchas = 0;
//access input value.
function values() {
    val = document.querySelector("input").value;

}

function result() {
    document.querySelector("span").innerHTML = total_purchas;

}
// for apple inc-button.

function inc_apple() {
    if (val >= 10) {
        count_apple += 1;
        purchase += 10;
        val = val - purchase;
        total_purchas = purchase + total_purchas;
        purchase = 0;
        document.querySelector(".apple").value = count_apple;
        result();

    }
    else {
        alert("Not enough money to buy more Apples,try to buy another fruits.Thank You!" )
    }
    // for apple dec-button.
}
function dec_apple() {
    if (total_purchas > 0 && count_apple > 0) {
        count_apple -= 1;
        purchase += 10;
        val = val + purchase;
        total_purchas = total_purchas - purchase;
        purchase = 0;
        document.querySelector(".apple").value = count_apple;
        result();

    }
    
    // for orange inc-button.

}
function inc_orange() {
    if (val >= 15) {
        count_orange += 1;
        purchase += 15;
        val = val - purchase;
        total_purchas = purchase + total_purchas;
        purchase = 0;
        document.querySelector(".orange").value = count_apple;
        result();

    }
    else {
        alert("Not enough money to buy more Oranges,try to buy another fruits.Thank You!")
    }
}
// for orange dec-button.
function dec_orange() {
    if (total_purchas > 0 && count_orange > 0) {
        count_orange -= 1;
        purchase += 15;
        val = val + purchase;
        total_purchas = total_purchas - purchase;
        purchase = 0;
        document.querySelector(".orange").value = count_orange;
        result();

    } 

}
// for banana inc-button.
function inc_banana() {
    if (val >= 7) {
        count_banana += 1;
        purchase += 7;
        val = val - purchase;
        total_purchas = purchase + total_purchas;
        purchase = 0;
        document.querySelector(".banana").value = count_banana;
        result();

    }
    else {
        alert("Not enough money to buy more Oranges,try to buy another fruits.Thank You!")
    }
}
// for banana dec-button
function dec_banana() {
    if (total_purchas > 0 && count_orange > 0) {
        count_banana -= 1;
        purchase += 7;
        val = val + purchase;
        total_purchas = total_purchas - purchase;
        purchase = 0;
        document.querySelector(".banana").value = count_banana;
        result();

    } 
}
// document.querySelector("#input").autofocus
