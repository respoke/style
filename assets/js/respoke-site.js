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


// Showing and login and signup
(function () {
    var token = $.cookie('token');
    var $login = $('.log-in');
    var $logout = $('.log-out');
    var $signup = $('.sign-up');
    var $portal = $('.portal');
    var $wwwlink = $('.www-link');
    var $logo = $('img.logo');

    function loggedIn() {
        $login.remove();
        $signup.remove();

        $portal.css('display', 'inline-block');
        $logout.css('display', 'inline-block');
    }
    function notLoggedIn() {
        $portal.remove();
        $logout.remove();
    }

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
            success: loggedIn,
            error: notLoggedIn
        });
    }
    else {
        notLoggedIn();
    }

    $portal.attr('href', portalUrl + $portal.attr('href'));
    $wwwlink.each(function () {
        $(this).attr('href', publicUrl + $(this).attr('href'))
    });
    $logo.attr('src', publicUrl + $logo.attr('src').replace('https://www.respoke.io',''));
})();

function logout() {
    $.removeCookie('token', { domain: '.' + window.location.hostname.split('.').slice(-2).join('.') });
    window.location.reload();
}
