



$(function () {
  $('[data-toggle="popover"]').popover()
})


$(document).ready(function() {




$.ajax({
  url: "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<zillowID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA",
  method: "GET"
}).done(function(response) {

  console.log(response)
})




})
