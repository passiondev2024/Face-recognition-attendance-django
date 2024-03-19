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

        if ($('#school').val() == 'Science Technology And Environmental Studies') {
            $('#department').append($('<option>', {
                value: 'Mathematics, Statistics and Computing',
                text: 'Department of Mathematics and Computing'
            }));
            $('#department').append($('<option>', {
                value: 'Physical Sciences',
                text: 'Department of Physical Sciences'
            }));
            $('#department').append($('<option>', {
                value: 'Biological Sciences',
                text: 'Department of Biological Sciences'
            }));
        } else if ($('#school').val() == 'Infocoms') {
            $('#department').append($('<option>', {
                value: 'department2',
                text: 'Department 2'
            }));
        } else if ($('#school').val() == 'Business') {
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

        if ($('#department').val() == 'Mathematics, Statistics and Computing') {
            $('#course').append($('<option>', {
                value: 'Computer Science',
                text: 'Computer Science'
            }));
            $('#course').append($('<option>', {
                value: 'Statistics',
                text: 'Statistics'
            }));
            $('#course').append($('<option>', {
                value: 'Pure Mathematics',
                text: 'Pure Mathematics'
            }));
        } else if ($('#department').val() == 'Physical Sciences') {
            $('#course').append($('<option>', {
                value: 'course2',
                text: 'Course 2'
            }));
        } else if ($('#department').val() == 'Biological Sciences') {
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

        if (($('#course').val() == 'Computer Science')
            || ($('#course').val() == 'Statistics')
            || ($('#course').val() == 'Pure Mathematics')) {
            $('#year').append($('<option>', {
                value: 'Year 1',
                text: 'Year 1'
            }));
            $('#year').append($('<option>', {
                value: 'Year 2',
                text: 'Year 2'
            }));
            $('#year').append($('<option>', {
                value: 'Year 3',
                text: 'Year 3'
            }));
            $('#year').append($('<option>', {
                value: 'Year 4',
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

        if (($('#year').val() == 'Year 1')
            || ($('#year').val() == 'Year 2')
            || ($('#year').val() == 'Year 3')
            || ($('#year').val() == 'Year 4')) {
            $('#semester').append($('<option>', {
                value: 'Semester 1',
                text: 'Semester 1'
            }));
            $('#semester').append($('<option>', {
                value: 'Semester 2',
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
        if (($('#semester').val() == 'Semester 1') && ($('#year').val() == 'Year 1') && ($('#course').val() == 'Computer Science')) {
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
        else if (($('#semester').val() == 'Semester 2') && ($('#year').val() == 'Year 1') && ($('#course').val() == 'Computer Science')) {
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
        else if (($('#semester').val() == 'Semester 1') && ($('#year').val() == 'Year 2') && ($('#course').val() == 'Computer Science')) {
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
                    day: 'Tuesday', lecturer: 'E003',
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
            ]
        }
        else if (($('#semester').val() == 'Semester 2') && ($('#year').val() == 'Year 2') && ($('#course').val() == 'Computer Science')) {
            units = [
                {
                    code: 'COM 220',
                    name: 'Software Engineering I',
                    day: 'Monday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture Room 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '11:59 AM'
                },
                {
                    code: 'COM 221',
                    name: 'Computer Organization',
                    day: 'Tuesday', lecturer: 'Francis Onyango',
                    room: {
                        name: 'Lecture room 9',
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
                    code: 'COM 223',
                    name: 'Operating Systems and Networks',
                    day: 'Wednesday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture room 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '12:00 PM',
                    endTime: '1:00 PM'
                },
                {
                    code: 'COM 224',
                    name: 'Data Structures',
                    day: 'Thursday', lecturer: 'Abanti Cyrus',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '7:00 AM',
                    endTime: '10:00 AM'
                },
                {
                    code: 'COM 225',
                    name: 'Mathematics for Computer Science',
                    day: 'Friday', lecturer: 'Oyaro Cyrus',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '11:00 AM'
                },
                {
                    code: 'MAT 220',
                    name: 'Linear Algebra II',
                    day: 'Tuesday', lecturer: 'Anyango George',
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
            ]
        }
        // YEAR 3
        else if (($('#semester').val() == 'Semester 1') && ($('#year').val() == 'Year 3') && ($('#course').val() == 'Computer Science')) {
            units = ['COM 310', 'COM 311']
        }
        else if (($('#semester').val() == 'semester2') && ($('#year').val() == 'Year 3') && ($('#course').val() == 'Computer Science')) {
            units = ['COM 320: Computer 5', 'COM 326: Computer 6']
        }
        // YEAR FOUR
        else if (($('#semester').val() == 'Semester 1') && ($('#year').val() == 'Year 4') && ($('#course').val() == 'Computer Science')) {
            units = [
                {
                    code: 'COM 410',
                    name: 'User interface design',
                    day: 'Tuesday', lecturer: 'Dr. Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '11:59 AM'
                },
                {
                    code: 'COM 415',
                    name: 'Design Techniques for Websites',
                    day: 'Monday', lecturer: 'Francis Onyango',
                    room: {
                        name: 'Lecture room 9',
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
                    code: 'COM 414',
                    name: 'Computer Graphics',
                    day: 'Wednesday', lecturer: 'Abanti Cyrus',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '7:00 AM',
                    endTime: '11:00 AM'
                },
                {
                    code: 'COM 411',
                    name: 'Distributed Systems',
                    day: 'Thursday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture room 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '10:00 AM'
                },
                {
                    code: 'COM 412',
                    name: 'Neural Networks',
                    day: 'Thursday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture room 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '11:00 AM',
                    endTime: '11:59 AM'
                },
                {
                    code: 'COM 416',
                    name: 'Expert Systems',
                    day: 'Friday', lecturer: 'Jane Juma',
                    room: {
                        name: 'Lecture Room 13',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '10:30 AM'
                },
                {
                    code: 'COM 413',
                    name: 'Object Oriented Programming',
                    day: 'Thursday', lecturer: 'Abanti Cyrus',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '7:00 AM',
                    endTime: '11:00 AM'
                },
            ]
        }
        else if (($('#semester').val() == 'Semester 2') && ($('#year').val() == 'Year 4') && ($('#course').val() == 'Computer Science')) {
            units = [
                {
                    code: 'TEST 100',
                    name: 'Test Unit',
                    day: 'Tuesday', lecturer: 'Test Lecturer',
                    room: {
                        name: 'Rongo University',
                        coordinates: [
                            {"latitude": -0.8271909 - 0.05, "longitude": 34.61829111 - 0.05},
                            {"latitude": -0.8271909 - 0.05, "longitude": 34.61829111 + 0.05},
                            {"latitude": -0.8271909 + 0.05, "longitude": 34.61829111 + 0.05},
                            {"latitude": -0.8271909 + 0.05, "longitude": 34.61829111 - 0.05}
                        ]                   
                    },
                    startTime: '12:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 421',
                    name: 'Engineering and Software Law',
                    day: 'Friday', lecturer: 'Dr. Charles Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 PM',
                    endTime: '11:59 PM'
                },
                {
                    code: 'COM 423',
                    name: 'Computer Science Project II',
                    day: 'Tuesday', lecturer: 'Dr. Amuomo',
                    room: {
                        name: 'Computer Lab',
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
                    code: 'COM 424',
                    name: 'Simulation and Modelling',
                    day: 'Thursday', lecturer: 'Dr Abanti Cyrus',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '7:00 AM',
                    endTime: '11:59 AM'
                },
                {
                    code: 'COM 425',
                    name: 'Data Communications, Antennas and Propagation',
                    day: 'Monday', lecturer: 'Dr. Amuomo',
                    room: {
                        name: 'Computer Lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '10:00 AM',
                    endTime: '11:00 AM'
                },
                {
                    code: 'COM 426',
                    name: 'Signal Processing',
                    day: 'Friday', lecturer: 'Dr. Charles Oguk',
                    room: {
                        name: 'E409',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '9:00 AM',
                    endTime: '10:30 AM'
                },
                {
                    code: 'COM 427',
                    name: 'Analog and Digital Modulation',
                    day: 'Monday', lecturer: 'Dr. Amuomo',
                    room: {
                        name: 'Computer lab',
                        coordinates:  [
                            {"latitude": -0.82719733592, "longitude": 34.618297577905},
                            {"latitude": -0.82719733592, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577906},
                            {"latitude": -0.82719733593, "longitude": 34.618297577905}
                        ]                      
                    },
                    startTime: '11:00 AM',
                    endTime: '11:59 AM'
                },
                {
                    code: 'COM 428',
                    name: 'Human Computer Factors',
                    day: 'Thursday', lecturer: 'Dr. Charlse Oguk',
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
                    code: 'BCE 411',
                    name: 'Enterprenuarship and Employability',
                    day: 'Friday', lecturer: 'Omondi Justus',
                    room: {
                        name: 'MPH',
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
            ]
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