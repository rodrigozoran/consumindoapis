const btn = document.querySelector("#searchCep");

btn.addEventListener('click', function(event){
    event.preventDefault();

    const campoCep = document.querySelector("#campocep");
    const value = campoCep.value;
})


function change(x){
    return x.replace("\d{3}[.\s]?\d{3}[.\s]?\d{3}[-.\s]?\d{2}")
}

let input1 = document.querySelector("#campocep");
let input2 = document.querySelector("#cep");

input1.onkeyup = function(){
    input2.value = change(input1.value)
}









