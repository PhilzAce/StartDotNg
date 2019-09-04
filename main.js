
function validate() {
    if (document.email - form.name.value == "" || document.email - form.name.value < 4) {
        alert("Please provide your name! and make sure it is up to four");
        document.email - form.name.focus();
        return false;
    }
    if (document.email - form.email.value == "" || document.email - form.email.value < 4) {
        alert("Please provide your Email!");
        document.email - form.email.focus();
        return false;
    }

    if (document.email - form.title.value == "" || document.email - form.title.value < 4) {
        alert("Please provide your Email!");
        document.email - form.title.focus();
        return false;
    }

    if (document.email - form.email.message == "" || document.email - form.name.value < 20) {
        alert("Please provide your Email!");
        document.email - form.message.focus();
        return false;
    }

    return (true);
}
