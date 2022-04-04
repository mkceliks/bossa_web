//Grafiğin ortasına text yazıldı.
//ŞUANDA BU SAYFA KULLANILMIYOR GRAFİĞİN ORTASINA TEXTİ İPTAL ETTİĞİMİZ İÇİN...
//ŞUANDA BU SAYFA KULLANILMIYOR GRAFİĞİN ORTASINA TEXTİ İPTAL ETTİĞİMİZ İÇİN...
//ŞUANDA BU SAYFA KULLANILMIYOR GRAFİĞİN ORTASINA TEXTİ İPTAL ETTİĞİMİZ İÇİN...
function chart_plugins(){
    Chart.plugins.register({ 
        beforeDraw: function(myChart) {
          if (myChart.config.options.elements.center) {
            var ctx = myChart.chart.ctx;
            var centerConfig = myChart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (myChart.innerRadius * 2)
            ctx.font = "35px " + fontStyle;
        
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (myChart.innerRadius * 2) - sidePaddingCalculated;
        
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (myChart.innerRadius * 2);
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;
        
            if (minFontSize === undefined) {
              minFontSize = 20;
            }
        
            if (minFontSize && fontSizeToUse < minFontSize) {
              fontSizeToUse = minFontSize;
              wrapText = true;
            }
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((myChart.chartArea.left + myChart.chartArea.right) / 2);
            var centerY = ((myChart.chartArea.top + myChart.chartArea.bottom)) / 1.6;
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;
        
            if (!wrapText) {
              ctx.fillText(txt, centerX, centerY);
              return;
            }
        
            var words = txt.split(' ');
            var line = '';
            var lines = [];
            for (var n = 0; n < words.length; n++) {
              var testLine = line + words[n] + ' ';
              var metrics = ctx.measureText(testLine);
              var testWidth = metrics.width;
              if (testWidth > elementWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
              } else {
                line = testLine;
              }
            }
            centerY -= (lines.length / 2) * lineHeight;
        
            for (var n = 0; n < lines.length; n++) {
              ctx.fillText(lines[n], centerX, centerY);
              centerY += lineHeight;
            }
            ctx.fillText(line, centerX, centerY);

          }
        }
      }); 
}
//export {chart_plugins};