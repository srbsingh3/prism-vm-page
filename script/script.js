const tableItems = {
    "row1" : "1",
    "row2" : "2",
    "row3" : "3"
}


// $('.table').append('<tr><td>test</td></tr>')

const arrayItems = ['1', '2', '3'];

arrayItems.map(item => $('.ntnxtable').append(`<tr><td>${item}</td></tr>`));

console.log("test");


// Use an array for the sidebar menu items.


$(".filter").click(function(){
    $(".filter-bar").css({"width":"0"});
});
