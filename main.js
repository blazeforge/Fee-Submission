var wait = document.getElementById("wait");
    var body = document.getElementsByTagName("body")[0];
    const form = document.getElementById('myForm');
    function go(){
        if (form.reportValidity()) {
            console.log('Form is valid');
            document.getElementById("myForm").submit();
            body.style.overflow="hidden";
            wait.style.display="flex"; 
        } 
        else {
            console.log('Form is not valid');
        }
    }