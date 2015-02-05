/* Your code starts here */

var app = {};

app.init = function() {
    console.log('APP INIT...');
    this.events();
};

app.events = function() {
    // a wrapper for event listener

    $('#btnSubmit').on('click', function() {
        var valName = $('#iptName').val();
        var valMsg = $('#iptMessage').val();
        // Post message to server via API
        $.ajax({
            url: '/myApi/message',
            method: 'POST',
            data: {
                message: valMsg,
                name: valName
            },
            success: function(d) {
                console.log('From server: ');
                console.log(d);
                // print on screen
                var messageToPrint = d.allMessage;
                var print = '';
                messageToPrint.forEach(function(msg) {
                    print += msg.name + ' says: ' + msg.message + '<br>';
                });
                $('.messageContainer').html(print);
            },
            fail: function() {

            }
        });
    });
};

//
//
//
//
// Execute when DOM is loaded
$(window).on('load', function() {
    app.init();
});