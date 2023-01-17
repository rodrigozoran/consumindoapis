function weather(){
        
    const api = {
        key: "da3b477bbf0b6fcd5bb4600d5418ccb4",
        base_url: "https://api.openweathermap.org/data/2.5/weather?q=",
        lang: "pt-BR",           
        units: "metric"
    }

    const ccity = document.getElementById("campocidade").value;

    fetch(`${api.base_url}${ccity}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
        .then(res => {
            if(!res.ok){
                throw new Error(`Não foi possível processar os dados digitados. Erro ${res.status}: ${res.statusText}`)
            }
            return res.json()
                .then(data => showDataWeather(data))
        })
        .catch(error => {
            alert(error.message)
        })

    const showDataWeather = (resw) => {
        for(const fieldsw in resw){
            if(document.querySelector("#"+fieldsw)){
                document.querySelector("#name").value = resw.name + ", " + resw.sys.country;
                document.querySelector("#temp_min").value = parseInt(resw.main.temp_min);
                document.querySelector("#temp_max").value = parseInt(resw.main.temp_max);
                document.querySelector("#feelsLike").value = parseInt(resw.main.feels_like);
            }
        }
    }
    


}


//API CONSULTA DE CEP

function searchCep(){
    let cep = document.querySelector("#campocep").value; //captura a input com o id #campocep
    const api_via_cep = "https://viacep.com.br/ws/"; //atribui a url a uma variavel
    const strJson = "/json"; //atribui a parte final da url a uma variavel
    const url_api_via_cep = api_via_cep + cep + strJson; //concatena as partes da url para que a api consulte

    fetch(url_api_via_cep) //método fetch api para acessar e manipular partes do pipeline HTTP
        .then(res => { //definindo resposta
            res.json() //resposta em formato json
                .then(data => showData(data)) //nomeando a função pra exibir os dados
        })

    const showData = (result) => { //definindo a função que irá exibir os dados nos campos
        for(const fields in result){ //fields foi um nome criado para variável, mas poderia ser qualquer outro
            //console.log(fields) //apenas para exibir os campos que a api retorna
            if(document.querySelector("#"+fields)){ //seleciona os elementos da página que tem o id correspondente ao nome dos campos retornados pela API
                document.querySelector("#"+fields).value = result[fields] //insere o valor dos campos retornados pela api na página
                console.log(result[fields])
                console.log(fields)
            }
        }
    }
}

