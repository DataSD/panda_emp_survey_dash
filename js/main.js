$(document).ready(function(){

  var main = function() {
    var gauges = new Array();
    $('#dept-search').val('');
    Tabletop.init({ key: '1T4jpCzCSk8WiUHqjRPx7UVMFZdYlTkDpDHZsvt-nRRE',
      callback: function(data, tabletop) {
          console.log(data);
        _.each(data, function(element, index) {
          // Find box.
          var el = $('.chart-wrapper:eq(' + index + ')');
          $('.chart-title', el).html(element['Department']);
          $('.chart-stage', el).attr('id', 'stageId-' + index);
          gauges.push(new JustGage({
            id: 'stageId-' + index,
            value: element['Final PCT'],
            min: 0,
            max: 100,
            title: "Records Compliance",
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
      wanted: ['dash']
    });
  };



  if($('body').hasClass('main'))
    main();



});
