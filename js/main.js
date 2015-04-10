$(document).ready(function(){

  var step1 = function() {
    var gauges = new Array();
    $('#dept-search').val('');
    Tabletop.init({ key: '1FAQK4XC11BFXcczEy-Dfhl1dHCgoDMrubz7jg8gi484',
      callback: function(data, tabletop) {
        _.each(data, function(element, index) {
          // Find box.
          var el = $('.chart-wrapper:eq(' + index + ')');
          $('.chart-title', el).html(element['Department']);
          $('.chart-stage', el).attr('id', 'stageId-' + index);
          gauges.push(new JustGage({
            id: 'stageId-' + index,
            value: element['Step 1 %'],
            min: 0,
            max: 100,
            title: "Step 1 Completion",
            label: "%",
            levelColors: ['#bd1f30', '#FFFF00', '#008000']
          }));
        });
        $('#dept-search').keyup(function(event) {
          console.log(event);
          console.log($(this).val());
          var search = ($(this).val()).toLowerCase();
          $('.chart-title').each(function() {
            var dText = ($(this).text()).toLowerCase();
            if(dText.search(search) > -1) {
              $(this).parent().show();
            }
            else {
              $(this).parent().hide();
            }
          });
        });
      },
      simpleSheet: true,
      wanted: ['i2']
    });
  };

  var step1fun = function() {

  }


  if($('body').hasClass('step1'))
    step1();



});
