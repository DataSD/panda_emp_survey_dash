$(document).ready(function(){
  var main = function() {
    _.templateSettings.variable = "rc";
    var dashBoxTemplate = _.template($( "script.dashBox" ).html());
    var gauges = new Array();
    $('#dept-search').val('');
    Tabletop.init({ key: '1T4jpCzCSk8WiUHqjRPx7UVMFZdYlTkDpDHZsvt-nRRE',
      callback: function(data, tabletop) {
        var row;
        //console.log(data);
        _.each(data, function(element, index) {
          if (index % 4 === 0) {
            row = $("<div class='row'></div>");
            $('.main-container').append(row);
          }
          $(row).append(dashBoxTemplate({
            title: element["Department/Agency Name/Commission"],
            rdsLink: element["RDSLink"] || "",
            index: index
          }));

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
