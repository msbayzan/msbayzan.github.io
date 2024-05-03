

var programmingLanguagesList = [
    "Php",
    "JavaScript",
    "ActionScript",
    "AppleScript",
    "Asp",
    "Lisp",
    "Perl",
    "Python",
    "JavaScript",
    "Java",
    "C",
    "C++",
    "Ruby",
    "Scala",
    "Kotlin",
    "Swift",
    "C#",
    "Visual Basic",
    "Go",
    "R",
    "Dart",
    "Rust",
]

$(function () {

    //Prevent user to enter future birthday
    $("#birthday").datepicker({
        maxDate : 0
    });


    //Autocomplete for programming languages
    $("#programming_language").autocomplete({
        source:programmingLanguagesList
    })
});