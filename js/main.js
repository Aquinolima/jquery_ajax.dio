
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);    
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
            $("#resultado").show();                
        }
    })
}
