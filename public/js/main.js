function vibrate(ms){
    navigator.vibrate(ms)
}

function vibratePattern(){
    navigator.vibrate(300, 100, 300, 100);
}

getConfirmation = () => {
    vibrate();

    var getConfirm = confirm("You are about to download My CV in PDF format.\n\n Do you wish to continue?")
    if(getConfirm) 
        redirect("docs/Mark Langa CV.pdf");
}

redirect = path => window.location = path