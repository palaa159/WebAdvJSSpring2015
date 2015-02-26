/* Your code starts here */

var app = {};
app.init = function() {
    console.log('Your code starts here!');

    hashRouter();
    //location is built in, can test in browser console
    //whatever hash you come from empty it
    location.hash = '';
    //change hash to register, if I don't check if user exists
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

    //listener: hashchange is built in
    $(window).on('hashchange', function(){
        console.log('Current hash is ' + location.hash);
        if(location.hash == '#register'){
            console.log ('Render register page');
            renderRegister();
        } else if (location.hash == '#projects'){
            console.log ('Render projects page');
            renderProjects();
        } else if (location.hash == '#create'){
            console.log ('Render create page');
            renderCreate();
        } else {
            console.log ('Render the default page (projects page)');
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

    //.off removes event listener, so there are no duplicates & it only runs once

    // register page
    $('#btnRegister').off('click').on('click', function() {

        $.post('/register', {
            //value from input field
            email: $('#iptEmailRegister').val()
        }, function(result){
            console.log(result);
            //localStorage built in, can check in browser like location
            localStorage['user'] = result.email;
            alert('Registered');
            location.hash = '#projects';
        });

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
    });
    // create button
    $('#btnCreate').off('click').on('click', function() {
        location.hash = '#create';
    });
    // // submit button
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
        $.ajax({
            url: '/project',
            //type = method
            type: 'DELETE',
            data: {
                user: localStorage['user'],
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

    //take the html from index.html
    var tplToCompile = $('#tpl_register').html();
    //_ - underscore.js // .template - underscore method // (take the html, put sth in there)
    var compiled = _.template(tplToCompile, {
        title: 'My first app',
        date: new Date(),
    });
    $('#view').html(compiled);
    attachEvents();

    // This is how we compile underscore template
    // Usually, it may be applied to other template brands as well
    // var tplToCompile = $('#tpl_register').html();
    // var compiled = _.template(tplToCompile, {
    //     title: 'DT Project Tracker',
    //     date: new Date()
    // });
    // $('#view').html(compiled);
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