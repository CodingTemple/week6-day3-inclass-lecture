document.getElementsByTagName('h1')[0].setAttribute('class','AnotherClass')

document.getElementsByClassName('center')[0]

let text = document.getElementById('left').children[0].innerHTML

console.log(text.replace(/\./g,'').replace(/,/g,'').split(' '))


function loadText(){
    document.getElementById('customText').children[0].innerHTML = text;
    document.getElementsByTagName('button')[0].setAttribute('class','removeButton')
}

function submitForm(){
    console.log(document.getElementsByTagName('form')[0].children[0].value)
    console.log($("#testForm")[0].children[1].value)
    console.log($("#testForm input[name=last_name]").val())
}

$("#moreStuff").click(function (){
    $("#jQueryStuff p").html(text);
    $("#moreStuff").addClass("removeButton")


// Grab data from an API using jQuery AJAX calls

    $.get('https://ergast.com/api/f1/2019/1/driverStandings.json', function (data){
        console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName)
    })

})