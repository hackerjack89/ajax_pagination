$(function() {
    $(".pagination a").live("click", function() {
      //$(".pagination").html("page is loding!")
      $.get(this.href,null,null,"script");
      return false;
    });

});

