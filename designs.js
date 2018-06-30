// Select color input
// Select size input
var gColor, gWidth, gHeight;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event)
{
    event.preventDefault();
    gWidth =$('#inputWeight').val();
    gHeight =$('#inputHeight').val();
    makeGrid (gHeight,gWidth);
})
function makeGrid(height,width) {
$('tr').remove();
// Your code goes here!
for (var i = 1; i <= height; i++)
{
    $('#pixelCanvas').append('<tr></tr>'); //create table rows
        for (var j = 1; j <= width; j++)
        {
            $('tr:last').append('<td></td>'); //create table columns
        }
}
/* Color Grid cells */
$('td').click(function(event)
    {
       gColor = $('#colorPicker').val();
    $(event.target).css('background-color', gColor);
    }
    )
}
