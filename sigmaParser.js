$(document).ready(function () {

  var initial = 'Understand how the impact of individuals and teams in your network.';
  $('#netwrkGraph').html('<h3><strong>' + initial + '</strong></h3>');
  var influencers = 'influencer';
  var clicks = 'on';
  var clicksButton2 = 'on';
  var data = {
    nodes: [
      { id: "Richard" },
      { id: "Larry" },
      { id: "Marta" },
      { id: "Jane" },
      { id: "Norma" },
      { id: "Frank" },
      { id: "Brett" },
      { id: "Tommy" },
      { id: "Harry" },
      { id: "Jerry" },
      { id: "Tom" },
      { id: "Dick" },
      { id: "Rock" },
      { id: "Mike" },
      { id: "Coco" },
      { id: "Bob" },
      { id: "Evelyn Lau" },
      { id: "Lucy" },
      { id: "Jackson" },
      { id: "Michael" },
      { id: "Ray" },
      { id: "Edge" },
      { id: "John" },
      { id: "Grey" },
      { id: "Martine" },
      { id: "Isabell" },
      { id: "Jenifer" },
      { id: "Marry" },
      { id: "Lisa" },
      { id: "Sandra" },
      { id: "Cathy" },
      { id: "Rose" },
      { id: "Angelina" },
      { id: "Ashton Lai" },
      { id: "Jeff" },
      { id: "Peter" },
      { id: "Anthony" },
      { id: "Hussy" },
      { id: "Ricky" },
    ],
    edges: [
      { from: "Richard", to: "Marta" },
      { from: "Larry", to: "Marta" },
      { from: "Marta", to: "Jane" },
      { from: "Jane", to: "Norma" },
      { from: "Grey", to: "Frank" },
      { from: "Brett", to: "Richard" },
      { from: "Harry", to: "Jerry" },
      { from: "Larry", to: "Tom" },
      { from: "Marta", to: "Dick" },
      { from: "Dick", to: "Rock" },
      { from: "Jane", to: "Mike" },
      { from: "Harry", to: "Coco" },
      { from: "Coco", to: "Bob" },
      { from: "Bob", to: "Evelyn Lau" },
      { from: "Evelyn Lau", to: "Brett" },
      { from: "Lucy", to: "Tommy" },
      { from: "Jane", to: "Tommy" },
      { from: "Jackson", to: "Tommy" },
      { from: "Frank", to: "T32" },
      { from: "Norma", to: "Rock" },
      { from: "Grey", to: "Michael" },
      { from: "Edge", to: "Bob" },
      { from: "Ray", to: "Jerry" },
      { from: "Jackson", to: "Jerry" },
      { from: "Evelyn Lau", to: "John" },
      { from: "Evelyn Lau", to: "Grey" },
      { from: "Harry", to: "Martine" },
      { from: "Coco", to: "Isabell" },
      { from: "Mike", to: "John" },
      { from: "Jerry", to: "Jenifer" },
      { from: "Jenifer", to: "Marry" },
      { from: "Jenifer", to: "Lisa" },
      { from: "Jenifer", to: "Sandra" },
      { from: "Sandra", to: "Cathy" },
      { from: "Sandra", to: "Anthony" },
      { from: "Lucy", to: "Rose" },
      { from: "Rose", to: "Angelina" },
      { from: "Hussy", to: "Ricky" },
      { from: "Brett", to: "Ricky" },
      { from: "Jackson", to: "Ashton Lai" },
      { from: "Lucy", to: "Ashton Lai" },
      { from: "Isabell", to: "Jeff" },
      { from: "Isabell", to: "Peter" },
      { from: "Edge", to: "Anthony" },
    ]
  };

  var chart = anychart.graph(data);
  chart.fit();
  chart.zoomIn();
  chart.fitAll();

  anychart.onDocumentReady(function () {

    var nodes = chart.nodes();

    nodes.normal().height(30);
    nodes.normal().stroke(null);
    nodes.normal().fill("#f3f3f3");
    chart.edges().normal().stroke("#f3f3f3");
    chart.interactivity().zoomOnMouseWheel(false);
    chart.interactivity().scrollOnMouseWheel(false);
    chart.container("networkcontainer").draw();

  });
  $("#b1").click(function () {
    if (clicks === 'on') {
      $('#b1').css({ "background-color": "#f1c232", "color": "#000000" });
      var checkText = $('#netwrkGraph').text();
      if (checkText == 'Showing connectors within your organization.') {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #f1c232">' + 'influencers' + '</span> and <span style="background-color: #91cb3e; color: #ffffff">' + 'connectors' + '</span> within your organization.</strong></h3>');
      } else {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #f1c232">' + 'influencers' + '</span> within your organization.</strong></h3>');
      }
      for (i = 0; i < data.nodes.length; ++i) {
        if (data.nodes[i]['id'] === "Richard") {
          data.nodes[i]['height'] = 60;
          data.nodes[i]["tColor"] = '#f1c232'
          data.nodes[i]["tImage"] = './images/star.png'
          data.nodes[i]['fill'] = {
            src: "https://cdn.anychart.com/samples-data/graph/avengers/pepper.jpg"
          };
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 4
            },
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Evelyn Lau") {
          data.nodes[i]['height'] = 60;
          data.nodes[i]['fill'] = {
            src: "./images/Evelyn.png"
          };
          data.nodes[i]["tColor"] = '#f1c232'
          data.nodes[i]["tImage"] = './images/star.png'
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 4
            },
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Isabell") {
          data.nodes[i]['height'] = 15;
          data.nodes[i]['fill'] = '#f1c232';
          data.nodes[i]["tColor"] = '#f1c232';
          data.nodes[i]["tImage"] = './images/star.png';
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 4
            },
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Angelina") {
          data.nodes[i]['height'] = 5;
          data.nodes[i]['fill'] = '#f1c232';
          data.nodes[i]["tColor"] = '#f1c232';
          data.nodes[i]["tImage"] = './images/star.png';
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 4
            },
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#f1c232",
              "thickness": 15
            },
          };
        }
      }
      clicks = "off";
    }
    else if (clicks === "off") {
      $('#b1').css({ "background-color": "#ffffff", "border": "none", "color": "#bec3d5" });
      var checkText = $('#netwrkGraph').text();
      if (checkText == 'Showing influencers and connectors within your organization.') {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #91cb3e; color: #ffffff">' + 'connectors' + '</span> within your organization.</strong></h3>');
      } else {
        $('#netwrkGraph').html('<h3><strong>' + initial + '</strong></h3>');
      }
      for (i = 0; i < data.nodes.length; ++i) {
        if (data.nodes[i]['id'] === "Richard" || data.nodes[i]['id'] === "Evelyn Lau" || data.nodes[i]['id'] === "Isabell" || data.nodes[i]['id'] === "Angelina") {
          delete data.nodes[i]['fill'];
          delete data.nodes[i]['normal'];
          delete data.nodes[i]['hovered'];
          delete data.nodes[i]['selected'];
          delete data.nodes[i]['height'];
        }
      }
      clicks = "on";
    }
    chart.dispose();
    chart = anychart.graph(data);
    chart.tooltip().background().fill('#3c3c3b');
    nodes = chart.nodes();
    nodes.normal().height(30);
    nodes.hovered().height(45);
    nodes.selected().height(45);
    nodes.normal().stroke(null);
    nodes.normal().fill("#f3f3f3");
    chart.edges().normal().stroke("#f3f3f3");
    chart.interactivity().zoomOnMouseWheel(false);
    chart.interactivity().scrollOnMouseWheel(false);
    chart.container("networkcontainer").draw();
    chart.nodes().tooltip().useHtml(true);
    chart.nodes().tooltip().height(20);
    chart.nodes().tooltip().format(
      `<span style='font-weight:bold highlight'> <img class="tooltipLinks" src="{%tImage}"></img> 
          <u style='color :{%tColor}'>{%id}</u>
            <span>(Operation Manager)</span>
            <br>
            <span class="font-italic">is your connector.</span><br>
            <span><span style= 'color :{%tColor};'>600</span> Emails sent</span><br>
            <span><span style= 'color :{%tColor}'>5,000</span> Slack messages sent</span><br>
            <span><span style= 'color :{%tColor}'>90</span> people interaction</span><br>
            <span><span style= 'color :{%tColor}'>100</span> Slack group chats</span><br>
          </span>`
    );
  });

  $("#b2").click(function () {
    if (clicksButton2 == 'on') {
      var checkText = $('#netwrkGraph').text();
      if (checkText == 'Showing influencers within your organization.') {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #f1c232">' + 'influencers' + '</span> and <span style="background-color: #91cb3e; color: #ffffff">' + 'connectors' + '</span> within your organization.</strong></h3>');
      } else {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #91cb3e; color: #ffffff">' + 'connectors' + '</span> within your organization.</strong></h3>');
      }
      $('#b2').css({ "background-color": "#91cb3e", "border": "none", "color": "#ffffff" });
      for (i = 0; i < data.nodes.length; ++i) {
        if (data.nodes[i]['id'] === "Ashton Lai") {
          data.nodes[i]['height'] = 60;
          data.nodes[i]["tColor"] = '#91cb3e';
          data.nodes[i]["tImage"] = './images/broken-link.png';
          data.nodes[i]['fill'] = {
            src: "./images/Ashton.png"
          };
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 4
            }
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Rock") {
          data.nodes[i]['height'] = 60;
          data.nodes[i]["tColor"] = '#91cb3e';
          data.nodes[i]["tImage"] = './images/broken-link.png';
          data.nodes[i]['fill'] = {
            src: "https://cdn.anychart.com/samples-data/graph/avengers/hawkeye.jpg"
          };
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 4
            }
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Jerry") {
          data.nodes[i]['height'] = 25;
          data.nodes[i]['fill'] = "#91cb3e";
          data.nodes[i]["tColor"] = '#91cb3e';
          data.nodes[i]["tImage"] = './images/broken-link.png';
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 4
            }
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Cathy") {
          data.nodes[i]['height'] = 15;
          data.nodes[i]['fill'] = "#91cb3e";
          data.nodes[i]["tColor"] = '#91cb3e';
          data.nodes[i]["tImage"] = './images/broken-link.png';
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 4
            }
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
        }
        if (data.nodes[i]['id'] === "Michael") {
          data.nodes[i]['height'] = 5;
          data.nodes[i]['fill'] = "#91cb3e";
          data.nodes[i]["tColor"] = '#91cb3e';
          data.nodes[i]["tImage"] = './images/broken-link.png';
          data.nodes[i]['normal'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 4
            }
          };
          data.nodes[i]['hovered'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
          data.nodes[i]['selected'] = {
            "stroke": {
              "color": "#91cb3e",
              "thickness": 15
            },
          };
        }
      }
      clicksButton2 = "off";
    } else if (clicksButton2 == 'off') {
      $('#b2').css({ "background-color": "#ffffff", "border": "none", "color": "#bec3d5" });
      var checkText = $('#netwrkGraph').text();
      if (checkText == 'Showing influencers and connectors within your organization.') {
        $('#netwrkGraph').html('<h3><strong>Showing <span style="background-color: #f1c232">' + 'influencers' + '</span> within your organization.</strong></h3>');
      } else if (checkText == 'Showing connectors within your organization.') {
        $('#netwrkGraph').html('<h3><strong>' + initial + '</strong></h3>');
      } else {
        $('#netwrkGraph').html('<h3><strong>' + initial + '</strong></h3>');
      }
      clicksButton2 = 'on';
      for (i = 0; i < data.nodes.length; ++i) {
        if (data.nodes[i]['id'] === "Rock" || data.nodes[i]['id'] === "Ashton Lai" || data.nodes[i]['id'] === "Jerry" || data.nodes[i]['id'] === "Cathy" || data.nodes[i]['id'] === "Michael") {
          delete data.nodes[i]['fill'];
          delete data.nodes[i]['normal'];
          delete data.nodes[i]['hovered'];
          delete data.nodes[i]['selected'];
          delete data.nodes[i]['height'];
        }
      }
    }

    chart.dispose();
    chart = anychart.graph(data);
    chart.tooltip().background().fill('#3c3c3b');
    nodes = chart.nodes();


    nodes.normal().height(30);
    nodes.hovered().height(45);
    nodes.selected().height(45);
    nodes.normal().stroke(null);
    nodes.normal().fill("#f3f3f3");
    chart.edges().normal().stroke("#f3f3f3");
    chart.interactivity().zoomOnMouseWheel(false);
    chart.interactivity().scrollOnMouseWheel(false);
    chart.container("networkcontainer").draw();
    chart.nodes().tooltip().useHtml(true);
    console.log(data);
    chart.nodes().tooltip().format(
      `<span style='font-weight:bold highlight'> <img class="tooltipLinks" src="{%tImage}"></img> 
        <u style= 'color :{%tColor}'>{%id}</u>
        <span>(Operation Manager)</span>
        <br>
        <span class="font-italic">is your connector.</span><br>
        <span><span style= 'color :{%tColor}'>600</span> Emails sent</span><br>
        <span><span style= 'color :{%tColor}'>5,000</span> Slack messages sent</span><br>
        <span><span style= 'color :{%tColor}'>90</span> people interaction</span><br>
        <span><span style= 'color :{%tColor}'>100</span> Slack group chats</span><br>
      </span>`

    );

  });
});

