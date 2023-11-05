// $("#toggle").click(function(){
//     $("#cat").toggle();
// })

// $.ajax('https://pokeapi.co/api/v2/pokemon', {
//     dataType: 'json',
//     data: {limit: 10},
//     success: function(result){
//         console.log(result);
//     },
//     error: function(xhr){
//         console.log(xhr.statusText);
//     }
// })

$("#toggle").click(function () {
  $("#toggle").attr("disabled", true);
  $.ajax("http://www.boredapi.com/api/activity/", {
    success: function (result) {
      $("#activity").html(`
                <p>Activity: ${result.activity}</p>
                <p>Price: ${result.price}</p>
                <p>Type: ${result.type}</p>
            `);
    },
    error: function (hxr) {
      console.log(xhr.statusText);
      $("#activity").html(`<div>ERROR - ${xhr.statusText}</div>`);
    },
  });
  $("#toggle").attr("disabled", false);
});
