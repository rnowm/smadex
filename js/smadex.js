$(document).ready(function() {
  //Fancybox
  $(".fancybox")
    .fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
        padding     : 0,
        margin      : [20, 60, 20, 60] // Increase left/right margin
    });

  // Create slideshow instances
  var $slideshow = $('.slideshow').slides()
  // Access an instance API
  api = $slideshow.data('slides');

  //Smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
    location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });

  // Highlight menu
  var topMenu = $("#sections"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
     .parent().removeClass("active")
     .end().filter("[href=#"+id+"]").parent().addClass("active");
  });

  $(".nav-toggle").click(function() {
    $(".main-header nav").toggleClass("show");
  });

  $(".main-header nav a").click(function() {
    $(".main-header nav").toggleClass("show");
  });

});