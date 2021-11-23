var html = $("html")

$(function darkmode() {
    $(".toggle").click(function() {
        if (html.hasClass("dark-mode")) {
            html.removeClass("dark-mode");
            // mengatur local storage dengan value "false" :
            localStorage.setItem("dark-mode", false);
        }

        else {
            html.addClass("dark-mode");
            // mengatur local storage dengan value "true" :
            localSotrage.setItem("dark-mode", true);
        }
    })
})
        
// Fungsi jika local storage memiliki key "dark-mode" dengan value "true" :
if (localStorage.getItem("dark-mode") == "true") {
	$(" html").addClass("dark-mode");
}