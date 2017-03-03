$(document).ready(function(){
  var main = function() {
    _.templateSettings.variable = "rc";
    var dashBoxTemplate = _.template($( "script.dashBox" ).html());
    var gauges = new Array();
    $('#dept-search').val('');
    Tabletop.init({ key: '1NFJTa-u4p8JgqIZk_el9Cy0P5DF_9mHNNsmqIonOln0',
      callback: function(data, tabletop) {
        var row;
        //console.log(data);
        var gaugeTest = 0;
        _.each(data, function(element, index) {
          if (index % 4 === 0) {
            row = $("<div class='row'></div>");
            $('.main-container').append(row);
          }
          $(row).append(dashBoxTemplate({
            title: element["Department"],
            index: index
          }));


          gauges.push(new JustGage({
            id: 'stageId-' + index,
            value: element['Percent'],
            //value: gaugeTest,
            noGradient: true,
            levelColorsGradient: false,
            min: 0,
            max: 100,
            title: 'Survey Participation',
            titleFontColor: '#0098db',
            label: "%",
            levelColors: ['#ffa02f', '#fcd900', '#754C78', '#0098db', '#007b69']
            // orange, yellow, purple blue, green
          }));

          gaugeTest = gaugeTest + 10;
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
