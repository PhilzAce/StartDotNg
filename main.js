
function validate() {
    if (document.form.name.value == "" || document.email - form.name.value < 4) {
        alert("Please provide your name! and make sure it is up to four");
        document.form.name.focus();
        return false;
    }

    if (document.form.email.value == "" || document.email - form.email.value < 4) {
        alert("Please provide your Email!");
        document.form.email.focus();
        return false;
    }

    if (document.form.title.value == "" || document.email - form.title.value < 4) {
        alert("Please provide your Email!");
        document.form.title.focus();
        return false;
    }

    if (document.email.form.email.message == "" || document.email - form.name.value < 20) {
        alert("Please provide your Email!");
        document.form.message.focus();
        return false;
    }

    return (true);
}
// added