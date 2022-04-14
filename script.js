//Getting the content of input
function copyKey(){
    let keyContent = document.getElementById("key-content")
    
    if(keyContent.value){
        document.getElementById("button-copy").innerHTML = "Copiado!"
        
        keyContent.select();//Get value at desktop?
        keyContent.setSelectionRange(0, 99999);//Get value at mobile?
        navigator.clipboard.writeText(keyContent.value);//Just that line make the function work...
    }else{
        //Using SweetAlert in case of no ramdon key in input
        swal({
            title: "Não foi possível copiar",
            text: "O campo de Chave do Pix está vazio!",
            icon: "error"
        })
    }
}
