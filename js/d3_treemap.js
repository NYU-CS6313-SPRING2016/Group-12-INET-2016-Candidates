var sample_data =[{"group": "Bernie Sanders", "name": "hillary", "value": 79}, {"group": "Bernie Sanders", "name": "clinton", "value": 66}, {"group": "Bernie Sanders", "name": "feelthebern", "value": 60}, {"group": "Bernie Sanders", "name": "york", "value": 51}, {"group": "Bernie Sanders", "name": "vote", "value": 50}, {"group": "Bernie Sanders", "name": "nyprimary", "value": 40}, {"group": "Bernie Sanders", "name": "trump", "value": 33}, {"group": "Bernie Sanders", "name": "brooklyn", "value": 29}, {"group": "Bernie Sanders", "name": "remember", "value": 28}, {"group": "Bernie Sanders", "name": "nyu", "value": 27}, {"group": "Donald Trump", "name": "vote", "value": 105}, {"group": "Donald Trump", "name": "f**k", "value": 82}, {"group": "Donald Trump", "name": "coachella", "value": 81}, {"group": "Donald Trump", "name": "cruz", "value": 77}, {"group": "Donald Trump", "name": "chanting", "value": 72}, {"group": "Donald Trump", "name": "york", "value": 66}, {"group": "Donald Trump", "name": "realdonaldtrump", "value": 60}, {"group": "Donald Trump", "name": "america", "value": 49}, {"group": "Donald Trump", "name": "https", "value": 44}, {"group": "Donald Trump", "name": "suppo", "value": 38}, {"group": "Hillary Clinton", "name": "trump", "value": 87}, {"group": "Hillary Clinton", "name": "sanders", "value": 68}, {"group": "Hillary Clinton", "name": "bernie", "value": 64}, {"group": "Hillary Clinton", "name": "york", "value": 64}, {"group": "Hillary Clinton", "name": "https", "value": 52}, {"group": "Hillary Clinton", "name": "vote", "value": 38}, {"group": "Hillary Clinton", "name": "crookedhillary", "value": 32}, {"group": "Hillary Clinton", "name": "via", "value": 28}, {"group": "Hillary Clinton", "name": "donald", "value": 27}, {"group": "Hillary Clinton", "name": "america", "value": 26}]
  var visualization = d3plus.viz()
    .container("#viz")
    .data(sample_data)
    .type("tree_map")
    .color("value")                // groups colored to show ungrouping
    .id({
      "value": ["group","name"],
      "grouping": false            // grouping set to false ungroups parent nesting
    })
    .depth(1)
    .size("value")
    .text({"name":"name","group":"group"})
    .tooltip({"Candidates":["group"]})
    .draw() 