/**
 * Function to open external links in separate tab
 */
function external_new_window() {
    for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        if (b.getAttribute("href") && b.hostname !== location.hostname) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}

function active_tab(){
    var path = location.pathname.replace('.html','');
    $(".menu li.leaf a[href='"+path+"']").addClass('active');
}

$(document).ready(function () {
    active_tab();
    external_new_window();
});