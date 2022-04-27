function MyFunction() {
    var val = document.getElementById('persontype').value;

    if (val == 'Owner') {
        window.location.replace('owner.html'); 
    }
    else if (val == 'Coworker') {
        window.location.replace('coworker.html'); 
    }
}