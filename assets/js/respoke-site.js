//
// Syntax highlighting http://highlightjs.org/usage/
//
hljs.configure({classPrefix: 'hljs-'});
hljs.initHighlightingOnLoad(['javascript','css','html','json','bash']);

$.ajax({
    url: 'https://d3px1qgagsf6ei.cloudfront.net/Scripts/f772acdb-7c45-430c-8c5a-28c3bcbb420e',
    crossDomain: true,
    dataType: 'script',
    success: function () {
        Payboard.Events.trackPage;
    },
    error: function () {
        console.log("There was an error retrieving the payboard tracking script");
    }
});

$(function jqOnReady() {
    $('.navbar a.toggler').click(toggleMainMenu);
});


// Showing and login and signup
(function initVariousThings() {
    var token = $.cookie('token');
    var $login = $('.login');
    var $signup = $('.signup');
    var $wwwlink = $('.www-link');

    var apiBase = window.location.host.replace('docs', 'api').replace(':2003', ':2000');
    var apiUrl = apiBase.indexOf('testing.digiumlabs.com') !== -1 ? 'http://' : 'https://';
    apiUrl += apiBase + '/v1/admins/me';
    var publicBase = window.location.host.replace('docs', 'www').replace(':2003', ':2001');
    var publicUrl = publicBase.indexOf('testing.digiumlabs.com') !== -1 ? 'http://' : 'https://';
    publicUrl += publicBase;
    var portalBase = window.location.host.replace('docs', 'portal').replace(':2003', ':2002');
    var portalUrl = portalBase.indexOf('testing.digiumlabs.com') !== -1 ? 'http://' : 'https://';
    portalUrl += portalBase;

    if (token) {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            headers: {
                'Admin-Token': token
            },
            success: function () {

            },
            error: function () {

            }
        });
    }

    $signup.attr('href', portalUrl + $signup.attr('href'));
    $wwwlink.each(function () {
        $(this).attr('href', publicUrl + $(this).attr('href'))
    });

})();

function logout() {
    $.removeCookie('token', { domain: '.' + window.location.hostname.split('.').slice(-2).join('.') });
    window.location.reload();
}

function toggleMainMenu (e) {
    e && e.preventDefault();

    $('.navbar img.logo, .navbar .nav-links, .navbar a.signup, .navbar a.login')
    .each(function () {
        this.style.display = !this.style.display || this.style.display === 'none' ? 'inline-block' : 'none';
    });
}
