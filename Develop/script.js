// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var schedule = false;
  var now = moment().format('LLLL');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // this displays the present time
  var presentday = $('#CurrentDay');
  presentday.text(now);

  var day = new Date();
  var presentTime = cal.getHours();

  for (var i = 8; i < 18; i++) {
    if (i < presentTime) {
      document.getElementById(i.toString()).classList.add('past');
    } else if (i === presentTime) {
      document.getElementById(i.toString()).classList.add('present');
    } else if (i > presentTime) {
      document.getElementById(i.toString()).classList.add('future');
    }
  }




  // setting the item in local storage

  $(".saveBtn").click(function () {
    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-8", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-9", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-10", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-11", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-12", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-13", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-14", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-15", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-16", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-17", $(this).siblings("textarea").val());

    console.log($(this).siblings("textarea").val())
    localStorage.setItem("hour-18", $(this).siblings("textarea").val());
  });

  // TODO: Add code to display the current date in the header of the page.


  var sched8 = localStorage.getItem('text8');
  document.getElementById('8').value = hour8;
  var sched8 = localStorage.getItem('text9');
  document.getElementById('9').value = hour9;
  var sched8 = localStorage.getItem('text10');
  document.getElementById('10').value = hour10;
  var sched8 = localStorage.getItem('text11');
  document.getElementById('11').value = hour11;
  var sched8 = localStorage.getItem('text12');
  document.getElementById('12').value = hour12;
  var sched8 = localStorage.getItem('text13');
  document.getElementById('13').value = hour13;
  var sched8 = localStorage.getItem('text14');
  document.getElementById('14').value = hour14;
  var sched8 = localStorage.getItem('text15');
  document.getElementById('15').value = hour15;
  var sched8 = localStorage.getItem('text16');
  document.getElementById('16').value = hour16;
  var sched8 = localStorage.getItem('text17');
  document.getElementById('17').value = hour17;
  var sched8 = localStorage.getItem('text18');
  document.getElementById('18').value = hour18;
  var sched8 = localStorage.getItem('text19');
  document.getElementById('19').value = hour19;

});
//$(".col-8",".col-md-10", ".description")
