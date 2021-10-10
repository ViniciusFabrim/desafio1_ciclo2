window.onload = function(){

    let produtos = [

        {descricao: "Mamão papaia", preco:3.50},
        {descricao: "Laranja", preco:4.00},
        {descricao: "Manga", preco:5.50},
        {descricao: "Melão", preco:5.00},
        {descricao:"Melancia", preco:3.00},
    ]


const ulListaProdutos = document.querySelector("#produtos");
const total = document.querySelector("#mostraTotalCompra");

(() => {

    let totalCompra = 0
    for(let pro of produtos){

        const filhoLi = document.createElement('li');

        for(listaP in pro){
            if(listaP == 'preco'){
                ulListaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP])
                totalCompra += pro[listaP];
            } else {

                ulListaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
        
            }

        }
    }
         total.value = totalCompra;
} ) (produtos)

}

