/* Your code starts here */

var app = {};
app.init = function() {
    console.log('Your code starts here!');

    hashRouter();
    location.hash = '';
    //location.hash = '#register';

    // deploy hash listener
    // hashRouter();
    // // Refresh hash
    // location.hash = '';
    // // check if user exists in localStorage
     if (localStorage['user']) {
        location.hash = '#projects';
     } else {
         // render first page
         location.hash = '#register';
     }

};

// A function where we detect the change of '#' on the browser address field
var hashRouter = function() {

    //'hashchange' is build-in JS listener function
    $(window).on('hashchange', function() {

            console.log('The current hash is ' + location.hash );
            if(location.hash == '#register') {
                console.log('Render register page!');
                renderRegister();

            } else if (location.hash == '#projects') {
                console.log('Render projects page!');
                renderProjects();

            } else if (location.hash == '#create') {
                console.log('Render create page!');
                renderCreate();
            } else {
                console.log('Render the default page! (projects)');
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
    //.off('click') below stands for "remove event listener"
    //like debouncing
    $('#btnRegister').off('click').on('click', function() {
        //AJAX call with no 'ajax'!
        $.post('/register', {
            email: $('#iptEmailRegister').val()
        }, function(result) {
            //'result' is whatever the server sends back
            console.log(result);
            //store user's email in the localStorage
            localStorage['user'] = result.email;
            //chage the location to projects
            location.hash = '#projects';
        });

    });

    // create button
    $('#btnCreate').off('click').on('click', function() {
         location.hash = '#create';
    });
    // // submit button
    $('#btnSubmit').off('click').on('click', function() {
        $.post('/project', {
            user: localStorage['user'],
            //gets data from fields:
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
                //data-id ... this calls the special item id...
                id: $(this).siblings().attr('data-id')
            },
            success: function(result) {
                // delete item in view
                $(that).parent().slideUp(function() {
                    location.reload();
                });
            }
        });
    });

    // Log out --> localStorage.clear()
    $('#btnLogout').on('click', function() {
        localStorage.clear();
        location.hash = '#register';
    });
};

/*
	functions to render different pages
*/
var renderRegister = function() {

    var tplToCompile = $('#tpl_register').html();
    var compiled = _.template(tplToCompile, {
        //if you don't parse this or put it in your template, it will break
        title: 'My first tracking app...',
        date: new Date(),
        version: '1.01'
    });

    $('#view').html(compiled);

    attachEvents();

    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well

};

var renderProjects = function() {
    // Fetch projects from database
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
    var compiled = _.template(tplToCompile, {
        title: 'DT Project Tracker',
        date: new Date()
    });
    $('#view').html(compiled);
    attachEvents();
};

app.init();