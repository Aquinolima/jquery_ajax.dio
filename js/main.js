function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function consultaCep(){
    
    $("#loader").show();                
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);    
    await delay(1);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            // console.log(response);
            $("#num_cep").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#loader").hide();                
            $("#resultado").show();
        }
    })
}
