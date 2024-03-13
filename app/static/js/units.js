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

        if ($('#school').val() == 'Science_TechnologyAndEngineering') {
            $('#department').append($('<option>', {
                value: 'Mathematics,Statistics&Computing',
                text: 'Department of Mathematics and Computing'
            }));
            $('#department').append($('<option>', {
                value: 'Physical_Sciences',
                text: 'Department of Physical Sciences'
            }));
            $('#department').append($('<option>', {
                value: 'Biological_Sciences',
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

        if ($('#department').val() == 'Mathematics,Statistics&Computing') {
            $('#course').append($('<option>', {
                value: 'Computer_Science',
                text: 'Computer Science'
            }));
            $('#course').append($('<option>', {
                value: 'Statistics',
                text: 'Statistics'
            }));
            $('#course').append($('<option>', {
                value: 'Mathematics',
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

        if (($('#course').val() == 'Computer_Science')
            || ($('#course').val() == 'Statistics')
            || ($('#course').val() == 'Mathematics')) {
            $('#year').append($('<option>', {
                value: 'Year1',
                text: 'Year 1'
            }));
            $('#year').append($('<option>', {
                value: 'Year2',
                text: 'Year 2'
            }));
            $('#year').append($('<option>', {
                value: 'Year3',
                text: 'Year 3'
            }));
            $('#year').append($('<option>', {
                value: 'Year4',
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

        if (($('#year').val() == 'Year1')
            || ($('#year').val() == 'Year2')
            || ($('#year').val() == 'Year3')
            || ($('#year').val() == 'Year4')) {
            $('#semester').append($('<option>', {
                value: 'Semester1',
                text: 'Semester 1'
            }));
            $('#semester').append($('<option>', {
                value: 'Semester2',
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
        // COMPUTER SCIENCE
        if (($('#semester').val() == 'Semester1') && ($('#year').val() == 'Year1') && ($('#course').val() == 'Computer_Science')) {
            units = [
                {
                    code: 'COM 110',
                    name: 'Introduction to Computers',
                    day: 'Monday', lecturer: 'Dr.Amuomo',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                
                {
                    code: 'PHY 110',
                    name: 'Basic Physics 1',
                    day: 'Friday', lecturer: 'Dr.Oguk',
                    room: {
                        name: 'MPH',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },  
                {
                    code: 'COS 100',
                    name: 'Communication Skills',
                    day: 'Tuesday', lecturer: 'Dr.Amuomo',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'MAT 110',
                    name: 'CALCULUS I',
                    day: 'Tuesday', lecturer: 'Onyango',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },            
            ];
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'Year1') && ($('#course').val() == 'Computer_Science')) {
            units = [
                {
                    code: 'COM 120',
                    name: 'System Hardware',
                    day: 'Monday', lecturer: 'Dr.Jane Juma',
                    room: {
                        name: 'Lecture room 4',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 121',
                    name: 'Procedural Programming I',
                    day: 'Tuesday', lecturer: 'Odol',
                    room: {
                        name: 'Lecture room 7',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 122',
                    name: 'Computer Applications',
                    day: 'Wednesday', lecturer: 'Francia Onyango',
                    room: {
                        name: 'Lecture Room 9',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'MAT 120',
                    name: 'Geometry and Applied Mathematics',
                    day: 'Thursday', lecturer: 'Anyango',
                    room: {
                        name: 'E003',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 120',
                    name: 'Basic Physics II',
                    day: 'Friday', lecturer: 'Onyango Martin',
                    room: {
                        name: 'MPH',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
            ]
        }
        // YEAR TWO
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year2') && ($('#course').val() == 'Computer_Science')) {
            units = [
                {
                    code: 'COM 210',
                    name: 'Procedural Programming II',
                    day: 'Monday', lecturer: 'Okemwa Martin',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 211',
                    name: 'System Software',
                    day: 'Tuesday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture Romm 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 212',
                    name: 'Digital Electronics I',
                    day: 'Wednesday', lecturer: 'Dr. Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '8:00 AM',
                    endTime: '11:00 AM'
                },
                {
                    code: 'COM 215',
                    name: 'Electrical Circuits',
                    day: 'Wednesday', lecturer: 'Dr. Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '2:00 PM',
                    endTime: '4:00 PM'
                },
                {
                    code: 'COM 217',
                    name: 'Electronics I',
                    day: 'Thursday', lecturer: 'Dr. Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '2:00 PM',
                    endTime: '4:00 PM'
                },
                {
                    code: 'MAT 210',
                    name: 'Calculus II',
                    day: 'Friday', lecturer: 'Odoyo Wekesa',
                    room: {
                        name: 'E003',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '8:00 AM',
                    endTime: '11:00 AM'
                },
                {
                    code: 'MAT 212',
                    name: 'Linear Algebra I',
                    day: '', lecturer: 'E003',
                    room: {
                        name: '',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
            ]
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year2') && ($('#course').val() == 'Computer_Science')) {
            units = ['COM 220', 'PHY 226']
        }
        // YEAR 3
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year3') && ($('#course').val() == 'Computer_Science')) {
            units = ['COM 310', 'COM 311']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year3') && ($('#course').val() == 'Computer_Science')) {
            units = ['COM 320: Computer 5', 'COM 326: Computer 6']
        }
        // YEAR FOUR
        else if (($('#semester').val() == 'semester1') && ($('#year').val() == 'year4') && ($('#course').val() == 'Computer_Science')) {
            units = ['COM 410', 'COM 411']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'year4') && ($('#course').val() == 'Computer_Science')) {
            units = ['COM 420', 'COM 421']
        }

        for (var i = 0; i < units.length; i++) {
            // Serialize the unit object to JSON
            var unitJSON = JSON.stringify(units[i]);

            // Create a checkbox element
            var checkbox = $('<input>').attr({
                type: 'checkbox',
                id: 'unit' + (i + 1),
                name: 'selected_units[]',
                value: unitJSON
            });

            // Create a label element associated with the checkbox
            var label = $('<label>').attr('for', 'unit' + (i + 1)).text(units[i]['name']); // Use units[i]['name'] to access the 'name' property

            // Append additional information about the unit
            var details = $('<span>').text(` (${units[i]['day']}, ${units[i]['startTime']} - ${units[i]['endTime']})`);

            // Append the checkbox, label, details, and a line break to the element with ID #unit-checkboxes
            $('#unit-checkboxes').append(checkbox).append(label).append(details).append('<br>');
        }

    });
});