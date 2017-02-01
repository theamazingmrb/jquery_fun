$( document ).ready(function(){

  var foods = ['burgers', 'fries', 'pasta', 'shrimp', 'sushi']

  // for (var i = 0; i < foods.length; i++) {
  //   $('#foods').append('<li>' + foods[i] + '</li>')
  // }

  foods.forEach(function(food){
    $('#foods').append('<li>' + food + '</li>')
  })

  $('#drinks').append('<li>Mountain Dew</li><li>Sprite</li><li>Dr. Pepper</li>')

  $('#addFood').on('click', function(){
    var newFood = $('#foodInput').val()
    if(newFood != '') {
      $('#foods').append('<li>' + newFood + '</li>')
      // $('<li />', {html: newFood}).appendTo('ul#foods')
      $('#foodInput').val('')
    }
  })

  $('#addDrink').on('click', function(){
    var newDrink = $('#drinkInput').val()
    if(newDrink != '') {
      $('#drinks').append('<li>' + newDrink + '</li>')
      $('#drinkInput').val('')
    }
  })

  $('#drinkInput').keydown(function(e){
    if(e.keyCode === 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink !== '') {
        $('#drinks').append('<li class="purpleText">' + newDrink + '</li>')
        $('#drinkInput').val('')
        $('#drinkInput').removeClass('purple')
      }
    } else {
      $('#drinkInput').addClass('purple')
    }
  })

})






//

//
// $( document ).ready(function(){
//
// $('#myBtn').on('click', function(){
//   alert('you clicked me')
//   event.stopPropagation()  //stops the bubbling of the click, so container and my bttn wont run
// })
//
// $('#container').on('click', function(){
//   alert('you clicked the container div')
// })
//
// $('#dontShoot').on('click', function(){
//   alert('you shot me')
// })
//
// $('#drinks').append("<li>Sprite</li> <li>dr pepper</li>")
// $('#foods').append("<li>tacos</li> <li>cheese toast</li>")
//
// ///////////////food
//
// $('#addFood').on('click', function(){
//   if($('#foodInput').val() != ''){ /// val is needed for input
//
//   var newFood = $('#foodInput').val()
//   $('#foods').append('<li>' + newFood + '</li>')
//   $('#foodInput').val('')
// }
// })
// //////////////drink
// $('#addDrink').on('click', function(){
//   if($('#drinkInput').val() != ''){
//
//   var newDrink = $('#drinkInput').val()
//   $('#drinks').append('<li>' + newDrink + '</li>')
//   $('#drinkInput').val('')
// }
// })
// //val() grabs the info  val('') set the text
// })
