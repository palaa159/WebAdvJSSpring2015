/* Your code starts here */

var app = {};
app.init = function() {
    console.log('Your code starts here!');

    hashRouter();
    location.hash = '';

    // location.hash = '#register';
    // deploy hash listener
    // hashRouter();
    // // Refresh hash
    // location.hash = '';
    // check if user exists in localStorage
    if (localStorage['user']) {
        location.hash = '#projects';
    } else {
        // render first page
        location.hash = '#register';
    }
};

// A function where we detect the change of '#' on the browser address field
var hashRouter = function() {

    // hashchange is a built-in JS listener
    $(window).on('hashchange', function() {
        console.log('The Current hash is ' + location.hash);
        if(location.hash == '#register') {
            console.log('Render register page!');
            renderRegister();
        } else if(location.hash == '#projects') {
            console.log('Render projects page!');
            renderProjects();
        } else if(location.hash == '#create') {
            console.log('Render create page!');
            renderCreate();
        } else {
            console.log('Render the default page! (Projects page)');
            renderProjects();
        }
    });


    // $(window).off('hashchange').on('hashchange', function() {
    //     console.log('Current hash is ' + location.hash);
    //     if (location.hash == '#register') {
    //         renderRegister();
    //     } else if (location.hash == '#projects') {
    //         renderProjects();
    //     } else if (location.hash == '#create') {
    //         renderCreate();
    //     }
    //     attachEvents();
    // });
};

// A function where we keep all user's interaction listener (buttons, etc)
var attachEvents = function() {
    console.log('Attaching Events');

    // register page
    $('#btnRegister').off('click').on('click', function() {
    //     // Ajax call
    //     $.post('/register', {
    //         email: $('#iptEmailRegister').val()
    //     }, function(result) {
    //         console.log(result);
    //         localStorage['user'] = result.email;
    //         alert('Registered');
    //         // Assuming the email has been through the registeration process
    //         // and return to the user
    //         // the user may now proceed to the next page
    //         location.hash = '#projects';
    //     });
        $.post('/register', {
            email: $('#iptEmailRegister').val()
        }, function(result) {
            // `result` is what the server responds
            console.log(result);
            // Store user's email in the localStorage
            localStorage['user'] = result.email;
            // Direct user to the projects page
            location.hash = '#projects';
        });
    });
    // create button
    $('#btnCreate').off('click').on('click', function() {
        location.hash = '#create';
    });
    // submit button
    $('#btnSubmit').off('click').on('click', function() {
        $.post('/project', {
            user: localStorage['user'],
            p_title: $('#iptProjectTitle').val(),
            p_deadline: $('#iptProjectDeadline').val()
        }, function(result) {
            console.log(result);
            location.hash = '#projects';
        });
    });
    // delete button
    $('.btnDelete').off('click').on('click', function() {
        var that = this;
        // delete item in database
        // $.delete --> invalid
        $.ajax({
            url: '/project',
            type: 'DELETE',
            data: {
                user: localStorage['user'],
                id: $(this).siblings().attr('data-id')
            },
            success: function(result) {
                // delete item in view
                $(that).parent().slideUp(function() {
                    // location.reload();
                });
            }
        });
    });
    // Log out --> localStorage.clear()
    $('#btnLogout').off('click').on('click', function() {
        localStorage.clear();
        location.hash = '#register';
    });
};

/*
	functions to render different pages
*/
var renderRegister = function() {
    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well
    // var tplToCompile = $('#tpl_register').html();
    // var compiled = _.template(tplToCompile, {
    //     title: 'DT Project Tracker',
    //     date: new Date()
    // });
    // $('#view').html(compiled);

    // 1. target the template script
    var tplToCompile = $('#tpl_register').html();
    var compiled = _.template(tplToCompile, {
        title: 'DT Tracker',
        version: 'v0.0.1'
    });
    $('#view').html(compiled);
    attachEvents();
};

var renderProjects = function() {
    // Fetch projects from database
    // console.log('render projects!');
    $.get('/projects', {
        email: localStorage['user']
    }, function(results) {
        console.log(results); // --> data
        var tplToCompile = $('#tpl_projects').html();
        var compiled = _.template(tplToCompile, {
            title: 'All Projects',
            data: results.data,
            user: localStorage['user']
        });
        $('#view').html(compiled);
        console.log('Projects rendered');
        attachEvents();
    });
};

var renderCreate = function() {
    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well
    var tplToCompile = $('#tpl_create').html();
    var compiled = _.template(tplToCompile);
    $('#view').html(compiled);
    attachEvents();
};

app.init();