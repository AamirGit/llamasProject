// jquery for wiki app
$(document).ready(function () {

  $('#searchTerm').keypress(function (e) {
    if (e.keyCode === 13) {
      getResults();
    }
  });

  $("#search").on("click", function () {

    getResults();
    
  });

});

function getResults() {

  // Get input from search box
  const searchTerm = $('#searchTerm').val();

  // Create URL from search term
  const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';

  // console.log(url);

  $.ajax({
    url: url,
    type: 'GET',
    async: false,
    dataType: 'json',
    success: function (data, status, jgXHR) {
      $('#outputSearch').html('');

      console.log(data);

      // Need for loop to ouput the search term data
      for (let i = 0; i < data[1].length; i++) {
        $('#outputSearch').append('<li><a href=" + data[3][i] + "><h2>' + data[1][i] + '</h2>' + '<p>' + data[2][i] + '</p></a></li>');
      }

      // fix prepend bug - use append

    }
  })
}