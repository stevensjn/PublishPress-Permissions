jQuery(document).ready(function ($) {
    $("div.pp-user-meta-search select").each(function () {  // deal with browser retention of dropdown selection prior to page reload
        if ($(this).val()) {
            $(this).parent().show();
            $(this).siblings().show();
        }
    });

    $(".pp-user-meta-search select").click(function (e) {
        $(this).siblings().show();
    });

    $(".pp-user-meta-search select").change(function (e) {
        $(this).parent().find('input').focus();
    });

    $("span.pp-usermeta-field-more").click(function (e) {
        $(this).parent().next('div.pp-user-meta-search').show().find('select').focus();
        $(this).parent().next('div.pp-user-meta-search').children().show();
        $(this).hide();
    });

    $('div.pp-user-meta-search input').keydown(function (e) {
        // this will catch pressing enter and call find function
        if (e.keyCode == 13) {
            $(this).closest('td').find('button.pp-agent-search-submit').click();
            //ajax_request($(this).val());
            e.preventDefault();
        }
    });
});

function presspermitPrepareID(selector) {
    return selector.replace(/:/g, '\\:');
}

jQuery(document).ready(function ($) {
    $(".pp-hidden-subdiv h3").click(function (e) {
        e.preventDefault();
        $(this).siblings(".hide-if-js").show();
    });

    //$('#userprofile_groupsdiv_pp ul.pp-agents-list li label').live('mouseenter', function() {
    $(document).on('mouseenter', '#userprofile_groupsdiv_pp ul.pp-agents-list li label', function () {
        var func = function (lbl) {
            //if ( $(lbl).is(':hover') )
            $(lbl).closest('li').find('a').show();
        }
        window.setTimeout(func, 300, $(this));
    });

    $('span.pp-alert').each(function () {
        var msg = $(this).html();
        if (msg) {
            $('<div id="message" class="error fade">' + msg + '</div>').insertAfter('#wpbody h2');
        }
    });
});

function presspermitEscapeID(myid) {
    return myid.replace(/(:|\.)/g, '\\$1');
}

function presspermitShowElement(classAttrib, $) {
    if (-1 == classAttrib.indexOf(' ')) {
        $('#' + classAttrib).show();
    } else {
        ppClass = presspermitMatchClass(classAttrib);
        if (ppClass)
            $('#' + ppClass).show();
    }
}

function presspermitShowClass(classAttrib, $) {
    if (-1 == classAttrib.indexOf(' ')) {
        $('.' + classAttrib).show();
    } else {
        ppClass = presspermitMatchClass(classAttrib);
        if (ppClass)
            $('.' + ppClass).show();
    }
}

function presspermitMatchClass(classAttrib, $) {
    var elemClasses = classAttrib.split(' ');
    for (i = 0; i < elemClasses.length; i++) {
        if (elemClasses[i].indexOf("pp-") == 0 || elemClasses[i].indexOf("pp_") == 0 || elemClasses[i].indexOf("-pp_") >= 0) {
            return elemClasses[i];
            break;
        }
    }

    return false;
}