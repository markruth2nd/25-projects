
/* Below I will add the 3 youtube links which when the user clicks on the card, it will take them to the youtube video */
document.getElementsByClassName("fa-brands fa-youtube")[0].addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=EQ7Ze3eGAgI");
});

document.getElementsByClassName("fa-brands fa-youtube")[1].addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=3-2Pj5hxwrw");
});

document.getElementsByClassName("fa-brands fa-youtube")[2].addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=r1iul4uRFuE");
});

/* Below I will do the same as above however, this will take the user to an article of choice */
document.getElementsByClassName("article")[0].addEventListener("click", function() {
    window.open("https://resources.github.com/copilot-for-business/?ef_id=_k_Cj0KCQjw98ujBhCgARIsAD7QeAjUGcsDGMOdSdshsJqMHFXOW8yenW0L9a1cYDqXjwz3VNnZt4mYsp8aAnRREALw_wcB_k_&OCID=AIDcmm4lwmjeex_SEM__k_Cj0KCQjw98ujBhCgARIsAD7QeAjUGcsDGMOdSdshsJqMHFXOW8yenW0L9a1cYDqXjwz3VNnZt4mYsp8aAnRREALw_wcB_k_&gclid=Cj0KCQjw98ujBhCgARIsAD7QeAjUGcsDGMOdSdshsJqMHFXOW8yenW0L9a1cYDqXjwz3VNnZt4mYsp8aAnRREALw_wcB");
});
document.getElementsByClassName("article")[1].addEventListener("click", function() {
    window.open("https://www.formget.com/how-to-create-pop-up-contact-form-using-javascript/");
});
document.getElementsByClassName("article")[2].addEventListener("click", function() {
    window.open("https://www.w3schools.com/howto/howto_js_popup_form.asp");
});