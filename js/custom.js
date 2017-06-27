// jquery for wiki app
$(document).ready(function () {

      $('#searchTerm').keypress(function (e) {
            if (e.keyCode === 13) {
              var searchTerm = $('#searchTerm').val(); // gets what is typed in search box
              var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm +
              '&format=json&callback=?';
              //adds typed into url search string e.g. if you put "dog" in searchTerms place you would get reasults for dog7

              console.log(url);

              // next NEED TO USE AN AJAX CALL USING JQUERY
              $.ajax({ //obj lateral
                url: url,
                type: 'GET',
                async: false,
                dataType: 'json',
                success: function (data, status, jgXHR) {
                  $('#outputSearch').html('');
                  console.log(data);
                  for (var i = 0; i < data[1].length; i++) {
                    $('#outputSearch').prepend('<li><a href=" + data[3][i] + "><h2>' + data[1][i] + '</h2>' + '<p>' + data[2][i] + '</p></a></li>');

                  }

                },

              });
                                   }
  });

    $("#search").on("click", function(){
      var searchTerm = $("#searchTerm").val(); // gets what is typed in search box
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&format=json&callback=?"; // adds typed into url search string e.g. if you put "dog" in searchTerms place you would get reasults for dog
  console.log(url);

  // next NEED TO USE AN AJAX CALL USING JQUERY
  $.ajax({ //obj lateral
        url: url,
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function(data, status, jgXHR) {
            $('#outputSearch').html('');
            console.log(data);
            for (var i = 0; i < data[1].length; i++) {
              $('#outputSearch').prepend('<li><a href=' + data[3][i] + '><h2>' + data[1][i] + '</h2>' + '<p>' + data[2][i] + '</p></a></li>');
      }

    },
  });

  //need for loop to ouput the search term data
  // fix prepend bug
  });

 });
