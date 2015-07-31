// add scripts

function createGraph(percent){
  var graph = "";

  var viewedHeight = (percent)/5;
  var graphHeight = 20 - viewedHeight;
  for (var i = 0; i < viewedHeight; i++)
    graph += "<div class='block'>"+i*5+" %</div>";
  for (var i = 0; i < graphHeight; i++)
    graph += "<div class='dark-block'></div>";
  return graph;
}

$(document).on('ready', function() {

  var distance = 0;
  var measure = 0;
  var stopSession = false;
  var pageHeight = $(document).height();
  var percentViewed;
  var start = event.timeStamp;
  var clickCount;



  // while scrolling keep track of the lowest point on the page viewed
  $(document).scroll(function (){
    measure = $(window).scrollTop();
    if (measure > distance && ! stopSession){
      distance = measure;
    }
    // calculate percent viewed
    percentViewed = (((distance)/pageHeight)*100).toFixed(1);
  });





  $("#btn-view").on("click", function(){
    $("#analytics").show();
    $("#btn-hide").show();
    $("#graph").show();
    var end = event.timeStamp;
    var timeSurfed = (end - start)/1000;
    $("#analytics").html("<h3>Time Surfed: "+timeSurfed+"sec.<h3>"+
                         "<h3>Amount Viewed: "+percentViewed+"%<h3>");
    $("#graph").html(createGraph(percentViewed));
    stopSession = true;
  });

  $("#btn-hide").on("click", function (){
    $("#analytics").hide();
    $("#btn-hide").hide();
    $("#graph").hide();

    stopSession = false;
  });

});
