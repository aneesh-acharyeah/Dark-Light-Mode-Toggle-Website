$(document).ready(function() {
    // Check local storage for saved mode
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('#toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
    }

    // Toggle dark/light mode on button click
    $('#toggle-btn').click(function() {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            $('#toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            $('#toggle-btn i').removeClass('fa-sun').addClass('fa-moon');
        }
    });
});
