// var sample_data =[{"group": "Bernie Sanders", "name": "berniesanders","value": 1,"detail":'vote'}, 
// {"group": "Bernie Sanders", "name": "vote", "value": 1,"detail":'no'},
// {"group": "Bernie Sanders", "name": "vote", "value": 1,"detail":'vowqeqw'},
// {"group": "Bernie Sanders", "name": "vote", "value": 1,"detail":'tweets4324234234'},
// {"group": "Bernie Sanders", "name": "vote", "value": 1,"detail":'voeet'}
// ]

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

function make_viz(data){
var visualization = d3plus.viz()
    .container("#viz")
    .data(data)
    .type("tree_map")
    .dev(true)
    .color("group")             // groups colored to show ungrouping
    .id({
      "value": ["group","name"],
      "grouping": true          // grouping set to false ungroups parent nesting
    })
    .labels({"align": "left", "valign": "top"})
    .depth(1)
    .size("value")
    .text({"name":"name","group":"group"})
    .font({ "family": "Palanquin"})
    .tooltip({"Candidates":["group"]}) 
    .resize(true)
    // .width(1200)
    .mouse({
    "click": function(d, viz) {
        var candidate= render_viz();
        // console.log(candidate);
        var newdata2 = filter_tweet(newdata,candidate);
        // console.log(newdata2);
        var newdata3 = [];
        newdata3[0] = newdata2
        renderList(newdata2);
        // console.log(newdata2);
        
        scatter_viz(newdata3);
        // console.log(newdata3);

    }
})
    .draw() 
}

getJSON("http://twitter-primary.herokuapp.com/treemap",function(err, data) {
      var sample_data1 =  data;

      make_viz(sample_data1);
});


function render_viz(){
     var priceEls = document.getElementsByClassName("d3plus_tooltip_title");
     // console.log(document.getElementById('d3plus_tooltip_id_tree_map'));
     var check_candidates = document.getElementsByClassName('d3plus_tooltip_data_value');
      for (var i = 0; i < priceEls.length; i++) {
          var price = priceEls[i].innerText;   
      }
      for (var j = 0; j < check_candidates.length; j++) {
          var candidates = check_candidates[j].innerText;
          if (candidates.length > 6){
          return [candidates,price];
        }
            // console.log(candidates)
     // console.log(price);
}
}

function filter_tweet(data,pairs){
  // var filter_candidats = [];
  var filter_data = {}
  for (var j=0; j<data.length;j++){
        if (data[j].key == pairs[0]){ 
          var filter_value = [];
          for (var h=0; h<data[j].values.length;h++){
            // data[j].values[h].label.indexOf(pairs[1].toLowerCase()) >-1) || 
              var lowstring =data[j].values[h]['label'].toLowerCase()
            if (lowstring.indexOf(pairs[1].toLowerCase())>-1)  {
              // "the fox jumped over the fence".replace(/fox/,"<span >"+'fox'+"</span>")
              filter_value[h] = {x: data[j].values[h]["x"],
                                  y: data[j].values[h]["y"],
                                  // label:data[j].values[h]['label']
                                  label:data[j].values[h]['label']
                                };
            }
          }
            // console.log(data[j]);
          }
      }
      resetArr = filter_value.filter(function() {return true;});
      filter_data = {key: pairs[0],
                    values: resetArr};
    // console.log(data);
      // filter_candidats[0] =filter_data;
      return filter_data;
    };


var list = d3.select("#tweetslist")

function renderList(data) {
            var newdata = data.values;
            // console.log(newdata);
            // console.log(newdata);

            var selection = list.selectAll('li')
                  .data(newdata, function(d) {return d['label']})
            
            selection
                .enter()
                .append('li')
                .attr("class", "listItem")
                .text(function(d) {return  d['label']})
            //     .on("mouseenter", function(d,i){
            //         highlight(d.label)
            // })
            //     .on("mouseleave", function(d,i){
            //         unHighlight()
            // });
            
            // $("#tweetslist:contains('Trump')").html(function(_, html) {
            //   return  html.replace(/(Trump)/g, '<span>$1</span>')
            // });
            
            selection.exit().remove();
            
            

        }




