/*Copyright (c) 2011 Austin McShan
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or 
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(){ 
  var styles,
      scrollerId = 'ui-scroller-scrollButton',
      scroller,
      borderRadius = 6,
      borderColor = '#a8a8a8',
      scrollThreshold = 200,
      css = [
        {'text-decoration': 'none'},
        {'padding': '20px 10px 30px'},
        {'text-align': 'center'},
        {'display': 'block'},
        {'position': 'fixed'},
        {'bottom': '-10px'},
        {'right': '15px'},
        {'background-color': '#eee'},
        {'color': '#333'},
        {'font-weight': 'bold'},
        {'width': '50px'},
        {'border': '1px solid ' + borderColor},
        {'border-radius': borderRadius + 'px'}],
      hoverCss = [
        {'background-color': '#cecece'}],
      cssText = "",
      hoverCssText = "",
      parseStyles = function(stylez){
        var parsedStyles = "";
        for( var i = 0; i < stylez.length; i++ ){
            var s = stylez[i];
            for( var key in s ){          
                if( s.hasOwnProperty(key) ){
                    parsedStyles += key + ':' + s[key] + ';\n';
                }
            }
        }
        return parsedStyles;
      };
  
  cssText = parseStyles(css);
  hoverCssText = parseStyles(hoverCss);

  styles = document.createElement('style');
  styles.type = 'text/css';
  styles.innerHTML = '#' + scrollerId + '{\n' + cssText + '}\n' + '#' + scrollerId + ':hover{\n' + hoverCssText + '}\n';
  document.getElementsByTagName('head')[0].appendChild(styles);
  
  //scroller
  scroller = document.createElement('a');
  scroller.href = "#";
  scroller.id = "ui-scroller-scrollButton";
  scroller.innerText = 'Scroll Top';
  scroller.style.display = 'none';
  
  //attach click handler
  scroller.onclick = function(e){
    window.scroll(0,0);
    return false;
  };

  //append scroller
  document.body.appendChild(scroller);

  window.onscroll = function(e){
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var diff = yOffset - windowHeight;

    if(diff >= scrollThreshold){
      scroller.style.display = 'block';
    }else{
      scroller.style.display = 'none';
    }
  };
})();