var svg ;

function drawProgress(end){ 
d3.select("svg").remove() 
  if(svg){
  svg.selectAll("*").remove();
  
}
var wrapper = document.getElementById('radialprogress');
var start = 0;
 if(end<0.6){
    var colours = {
        fill: '#FF0000',
        track: '#555555',
        text: '#FF0000',
        stroke: '#FFFFFF',
      }

 }

 else if(end>=0.8){
    var colours = {
        fill: '#008000',
        track: '#555555',
        text: '#008000',
        stroke: '#FFFFFF',
      }
 }

 else{
    var colours = {
        fill: '#ffbe37',
        track: '#555555',
        text: '#ffbe37',
        stroke: '#FFFFFF',
      }
 }




var radius = 80;
var border = 12;
var strokeSpacing = 4;
var endAngle = Math.PI * 2;
var formatText = d3.format('.0%');
var boxSize = radius * 2;
var count = end;
var progress = start;
var step = end < start ? -0.01 : 0.01;

//Define the circle
var circle = d3.svg.arc()
  .startAngle(0)
  .innerRadius(radius)
  .outerRadius(radius - border);

//setup SVG wrapper
svg = d3.select(wrapper)
  .append('svg')
  .attr('width', boxSize)
  .attr('height', boxSize);

  
// ADD Group container
var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

//Setup track
var track = g.append('g').attr('class', 'radial-progress');
track.append('path')
  .attr('fill', colours.track)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px')
  .attr('d', circle.endAngle(endAngle));

//Add colour fill
var value = track.append('path')
  .attr('fill', colours.fill)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px');

//Add text value
var numberText = track.append('text')
  .attr('fill', colours.text)
  .attr('text-anchor', 'middle')
  .attr('dy', '.5rem'); 

  //update position of endAngle
  value.attr('d', circle.endAngle(endAngle * end));
  //update text value
  numberText.text(formatText(end));
  
}

$('#submitClick').click(function(){
  var val = parseInt($('#percent').val());
   drawProgress(val/100);

    var valorBarra=$('#percent').val();
    var colorBarra='#ffbe37';

     if(val >= 80){
        colorBarra= '#008000';

     }

     else if (val<60) {
        colorBarra='#FF0000';
     }

     

    
   
   $('#dynamicProgress').attr("aria-valuenow" , valorBarra).css("background-color", colorBarra).css("width", val + "%");  

   $('#dynamicProgress').text(valorBarra + '%');

   
})
 
drawProgress(70/100)