document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {
    $('html').fadeIn(500);
})