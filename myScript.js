$('#pg1, #pg2, #pg3, #pg4').hover(
  function () {
    $(this).css('background-color', 'lavender');
  },

  function () {
    $(this).css('background-color', '#dedede'); /*uses original colour*/
  }
);
