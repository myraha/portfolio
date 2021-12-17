//user clicks on side bar arrow and menu pulls out

//event listeners to open/close navigation panel
$('#openNavigation').on('click', function () {
  $('#container').toggleClass('hero--sidebarOpen');
  $('#closeNavigation').css('display', 'block');
  $('#openNavigation').css('display', 'none');
});

$('#closeNavigation').on('click', function () {
  $('#container').toggleClass('hero--sidebarOpen');
  $('#openNavigation').css('display', 'block');
  $('#closeNavigation').css('display', 'none');
});

$('#closeNavigation').css('display', 'none');
