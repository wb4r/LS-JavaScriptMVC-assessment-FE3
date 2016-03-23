
$(document).ready(function(){
  // $(".list-container-of-ul").draggable();

  // var $draggable = $('.list-container-of-ul').draggabilly({
  //   // options...
  // })

  // initialize Packery
  var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 200
  });

  // make all grid-items draggable
  $grid.find('.grid-item').each( function( i, gridItem ) {
    var draggie = new Draggabilly( gridItem );
    // bind drag events to Packery
    $grid.packery( 'bindDraggabillyEvents', draggie );
  });

  $(".grid").packery({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    rowHeight: 10,
    gutter: 25,
    percentPosition: true
  })


})
//
// $(document).ready(function(){
//   // $(".list-container-of-ul").draggable();
//
//   // initialize Packery
//   var $grid = $('.grid').packery({
//     itemSelector: '.list-container-of-ul',
//     // columnWidth helps with drop positioning
//     columnWidth: 150
//   });
//
//   // make all grid-items draggable
//   $grid.find('.grid-item').each( function( i, gridItem ) {
//     var draggie = new Draggabilly( gridItem );
//     // bind drag events to Packery
//     $grid.packery( 'bindDraggabillyEvents', draggie );
//   });
//
//
// })
