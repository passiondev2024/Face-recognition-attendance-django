$(document).ready(function () {
    $('#school').change(function () {
        $('#department').prop('disabled', false);
        $('#course').prop('disabled', true);
        $('#year').prop('disabled', true);
        $('#semester').prop('disabled', true);
        $('#unit').prop('disabled', true);

        $('#department').empty();
        $('#course').empty();
        $('#year').empty();
        $('#semester').empty();
        $('#unit').empty();

        $('#department').append($('<option>', {
            value: '',
            text: '-- Select Department --'
        }));

        if ($('#school').val() == 'school1') {
            $('#department').append($('<option>', {
                value: 'math_comp',
                text: 'Department of Mathematics and Computing'
            }));
            $('#department').append($('<option>', {
                value: 'phy_sci',
                text: 'Department of Physical Sciences'
            }));
            $('#department').append($('<option>', {
                value: 'bio_sci',
                text: 'Department of Biological Sciences'
            }));
        } else if ($('#school').val() == 'school2') {
            $('#department').append($('<option>', {
                value: 'department2',
                text: 'Department 2'
            }));
        } else if ($('#school').val() == 'school3') {
            $('#department').append($('<option>', {
                value: 'department3',
                text: 'Department 3'
            }));
        }
    });

    $('#department').change(function () {
        $('#course').prop('disabled', false);
        $('#year').prop('disabled', true);
        $('#semester').prop('disabled', true);
        $('#unit').prop('disabled', true);

        $('#course').empty();
        $('#year').empty();
        $('#semester').empty();
        $('#unit').empty();

        $('#course').append($('<option>', {
            value: '',
            text: '-- Select Course --'
        }));

        if ($('#department').val() == 'math_comp') {
            $('#course').append($('<option>', {
                value: 'csc',
                text: 'Computer Science'
            }));
            $('#course').append($('<option>', {
                value: 'asc',
                text: 'Statistics'
            }));
            $('#course').append($('<option>', {
                value: 'mat',
                text: 'Pure Mathematics'
            }));
        } else if ($('#department').val() == 'department2') {
            $('#course').append($('<option>', {
                value: 'course2',
                text: 'Course 2'
            }));
        } else if ($('#department').val() == 'department3') {
            $('#course').append($('<option>', {
                value: 'course3',
                text: 'Course 3'
            }));
        }
    });

    $('#course').change(function () {
        $('#year').prop('disabled', false);
        $('#semester').prop('disabled', true);
        $('#unit').prop('disabled', true);

        $('#year').empty();
        $('#semester').empty();
        $('#unit').empty();

        $('#year').append($('<option>', {
            value: '',
            text: '-- Select Year --'
        }));

        if (($('#course').val() == 'csc')
            || ($('#course').val() == 'asc')
            || ($('#course').val() == 'mat')) {
            $('#year').append($('<option>', {
                value: 'year1',
                text: 'Year 1'
            }));
            $('#year').append($('<option>', {
                value: 'year2',
                text: 'Year 2'
            }));
            $('#year').append($('<option>', {
                value: 'year3',
                text: 'Year 3'
            }));
            $('#year').append($('<option>', {
                value: 'year4',
                text: 'Year 4'
            }));
        }
    });

    $('#year').change(function () {
        $('#semester').prop('disabled', false);
        $('#unit').prop('disabled', true);

        $('#semester').empty();
        $('#unit').empty();

        $('#semester').append($('<option>', {
            value: '',
            text: '-- Select Semester --'
        }));

        if (($('#year').val() == 'year1')
            || ($('#year').val() == 'year2')
            || ($('#year').val() == 'year3')
            || ($('#year').val() == 'year4')) {
            $('#semester').append($('<option>', {
                value: 'semester1',
                text: 'Semester 1'
            }));
            $('#semester').append($('<option>', {
                value: 'semester2',
                text: 'Semester 2'
            }));
        }
    });

    $('#semester').change(function () {
        $('#unit').prop('disabled', false);
        $('#unit-checkboxes').empty(); // Clear existing checkboxes

        var selectedSemester = $('#semester').val();
        var selectedYear = $('#year').val();
        var selectedCourse = $('#course').val();
        var units = [];

        // YEAR ONE
        // COMP
        if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year1') && ($('#course').val() == 'csc')) {
            units = ['COM 110: Computer 1', 'PHY 111: Physics'];
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year1') && ($('#course').val() == 'csc')) {
            units = ['COM 120: Computer', 'PHY 121: Physics']
        }
        // YEAR TWO
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year2') && ($('#course').val() == 'csc')) {
            units = ['COM 210: Computer 2', 'COM 215: Computer']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year2') && ($('#course').val() == 'csc')) {
            units = ['COM 220', 'PHY 226']
        }
        // YEAR 3
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year3') && ($('#course').val() == 'csc')) {
            units = ['COM 310', 'COM 311']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year3') && ($('#course').val() == 'csc')) {
            units = ['COM 320: Computer 5', 'COM 326: Computer 6']
        }
        // YEAR FOUR
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year4') && ($('#course').val() == 'csc')) {
            units = ['COM 410', 'COM 411']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year4') && ($('#course').val() == 'csc')) {
            units = ['COM 420', 'COM 421']
        }

        for (var i = 0; i < units.length; i++) {
            var checkbox = $('<input>').attr({
                type: 'checkbox',
                id: 'unit' + (i + 1),
                name: 'selected_units[]',
                value: units[i]
            });
            var label = $('<label>').attr('for', 'unit' + (i + 1)).text(units[i]);
            $('#unit-checkboxes').append(checkbox).append(label).append('<br>');
        }
    });
});