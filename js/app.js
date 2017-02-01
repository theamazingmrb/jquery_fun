
$( document ).ready(function(){

$('#myBtn').on('click', function(){
  alert('you clicked me')
  event.stopPropagation()  //stops the bubbling of the click, so container and my bttn wont run
})

$('#container').on('click', function(){
  alert('you clicked the container div')
})

$('#dontShoot').on('click', function(){
  alert('you shot me')
})

$('#drinks').append("<li>Sprite</li> <li>dr pepper</li>")
$('#foods').append("<li>tacos</li> <li>cheese toast</li>")

///////////////food

$('#addFood').on('click', function(){
  if($('#foodInput').val() != ''){ /// val is needed for input

  var newFood = $('#foodInput').val()
  $('#foods').append('<li>' + newFood + '</li>')
  $('#foodInput').val('')
}
})
//////////////drink
$('#addDrink').on('click', function(){
  if($('#drinkInput').val() != ''){

  var newDrink = $('#drinkInput').val()
  $('#drinks').append('<li>' + newDrink + '</li>')
  $('#drinkInput').val('')
}
})
//val() grabs the info  val('') set the text
})
