function getConfirmation(){
    var returnConfirm = confirm("You are about to download My CV in PDF format.\n\n Do you wish to continue?")

    if(returnConfirm == true){
        redirect("docs/Mark Langa CV.pdf");
    }else{
        
    }
}

function redirect(path){
    window.location = path;
}