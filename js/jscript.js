$(document).ready(function(){
    var quotesource = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
function getQuote(){

    $.getJSON(quotesource, function(data){
       $(".quote").html('"'+data.quoteText+'"');
       $(".author").html(' - '+data.quoteAuthor);
       console.log(data);
    });
}

    // $("#new_quote").on("click", function(){
    $("#new_quote").click(function(){
        getQuote();
    });
    
});
