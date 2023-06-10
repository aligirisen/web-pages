document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var suggestionList = document.getElementById('suggestionList');
  
    searchInput.addEventListener('input', function() {
      var keyword = searchInput.value.trim();
  
      if (keyword === '') {
        suggestionList.innerHTML = '';
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'suggestions.json', true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var suggestion = JSON.parse(xhr.responseText);
            var suggestions = filterData(suggestion, keyword);
            displaySuggestions(suggestions);
          }
        };
        xhr.send();
      }
    });
  
    function filterData(data, keyword) {
      return data.filter(function(item) {
        return item.toLowerCase().includes(keyword.toLowerCase());
      });
    }
  
    function displaySuggestions(suggestions) {
      suggestionList.innerHTML = '';
  
      for (var i = 0; i < suggestions.length; i++) {
        var suggestion = suggestions[i];
        var li = document.createElement('li');
        li.textContent = suggestion;
        suggestionList.appendChild(li);
      }
    }
  
    suggestionList.addEventListener('click', function(e) {
      if (e.target && e.target.nodeName === 'LI') {
        searchInput.value = e.target.textContent;
        suggestionList.innerHTML = '';
      }
    });
  });
  $(document).ready(function() {
    $('#getRandomCountry').click(function() {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          var country = data.results[0].location.country;
          $('#country').text(country);
        },
        error: function(xhr, status, error) {
          console.log('AJAX error:', error);
        }
      });
    });
  });
  
  let c=0;
  function counter(){
    c++;
    if(c==1){
        document.getElementById('getRandomCountry').disabled=true;
    }
  }