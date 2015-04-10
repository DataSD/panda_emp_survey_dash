var gsheets = require('gsheets');
var Tabletop = require('tabletop');
var Keen = require('keen.io');
var _ = require('lodash');

var client = Keen.configure({
  projectId: "5515bf5ac1e0ab459e04af62",
  writeKey: "8d7f5e68545b38780e6ff26984cb35fc2972083889978c33b9cc25e4b4dd1d79c25d7203e40b3f14faee9623807b648122855c497469874c4fb27b8cdbd6c2e04a43ecd4ea7fd8de1a737b568cead8d9d1da4e969e89742485339a94690bf70ac96adfd0ef76077b693c3dcfcb67ddd5",
  readKey: "95baa2bc2120821d3c6a8b8995b4d1dcc6991af78aaf4cde46d4ecf090e694384182b58d0ad80b0faf880fa50f2b3df77db62930fd9b33786b048a4cebd1bf7c1626b2bc4863330cde763e605ab616ddde7190060e0ab2769c7ab15e44cf212f0009af07a6d7824669f221239116aa3e"
});

Tabletop.init({ key: '1FAQK4XC11BFXcczEy-Dfhl1dHCgoDMrubz7jg8gi484',
  callback: function(data, tabletop) {
    console.log(data);
    client.addEvents({
      "ds3": data
    }, function(err, res) {
      if (err) {
        console.log('err');
        console.log(err);
      }
      else {
        console.log('res');
        console.log(res.ds3[0].error);
      }
    })
  },
  simpleSheet: true,
  wanted: ['i2']
} );

/*gsheets.getWorksheet('1FAQK4XC11BFXcczEy-Dfhl1dHCgoDMrubz7jg8gi484', 'i2', function(err, res) {
  var data = res;
  client.addEvents({
     //"ds3": [{"property name": "property value"}]
     "ds3": data
  }, function(err, res) {
    if (err) {
      console.log('err');
      console.log(err);
    }
    else {
      console.log('res');
      console.log(res.ds3[0].error);
    }
  });
});*/
