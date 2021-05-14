$(document).ready(function() {
    
    $('#get_data_button').click(function () {
        $('#students').empty();       // clear the DIV.

        $.ajax({
            type: 'GET',
            url: 'data.xml',           // The file path.
            dataType: 'xml',    
            success: function(xml) {
                $(xml).find('student').each(function() {
                    
                    // Append new data to the DIV element.
                    $('#students').append(
                        '<div>' +
                            '<div><b>First Name: </b>' +
                                $(this).find('firstName').text() + '</div> ' +
                            '<div><b>Last Name: </b>' +
                                $(this).find('lastName').text() + '</div> ' +
                            '<div><b>Roll No: </b>' +
                                $(this).find('rollNo').text() + '</div> ' +
                        '</div>');
                });
            }
        });
    });
});