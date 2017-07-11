$(document).ready(function(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
function getQuote(){

    $.getJSON(url, function(data){
        $(".quote").html('"'+data.quoteText+'"');
        $(".author").html(' - '+data.quoteAuthor);
        });
    }

    $("#new_quote").click(function(){
        getQuote();
    });
});