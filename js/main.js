const year = document.querySelector ('#current-year');
year.innerHTML = new Date().getFullYear();




var worktabs = $('.worktabs');
var selector = $('.worktabs').find('a').length;
var activeItem = worktabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".worktabs").on("click","a",function(e){
  e.preventDefault();
  $('.worktabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});


$( function() {
  var $grid = $('.case-studies').isotope({
    itemSelector: 'article'
  });

  // filter buttons
  $('.filters-button-group').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.worktabs').each( function( i, worktabs ) {
    var $worktabs = $( worktabs );
    $worktabs.on( 'click', 'a', function() {
      $worktabs.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});

