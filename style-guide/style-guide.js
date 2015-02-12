/* global $ */
'use strict';

$(function () {
    $('input[name="code-theme"]:radio').on('change', function (event) {
        var theme = $(this).val();
        $('link[href^="hljs-"]').attr('disabled', true);
        $('link[href^="hljs-' + theme + '"]').attr('disabled', false);
        $('pre.code--block').toggleClass('dark');
        $('pre.code--block').toggleClass('light');
    }).trigger('change');
});
