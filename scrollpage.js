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
      hoverCssText = "";
  
  cssText = parseStyles(css);
  hoverCssText = parseStyles(hoverCss);

  styles = document.createElement('style');
  styles.type = 'text/css';
  styles.innerHTML = '#' + scrollerId + '{\n' + cssText + '}\n' + '#' + scrollerId + ':hover{\n' + hoverCssText + '}\n';
  document.getElementsByTagName('head')[0].appendChild(styles);
  
  //scroller
  scroller = document.createElement('a');
  scroller.href = "javascript:void(null)";
  scroller.id = "ui-scroller-scrollButton";
  scroller.innerText = 'Scroll Top';
  scroller.style.display = 'none';
  
  //attach click handler
  scroller.onclick = function(e){
    window.scroll(0,0);
    return false;
  }

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
  }

  //parse css styles into text
  function parseStyles(stylez){
    var parsedStyles = "";

    for(var i = 0; i < stylez.length; i++){
      var s = stylez[i];

      for(var key in s){
        parsedStyles += key + ':' + s[key] + ';\n';
      }
    }

    return parsedStyles;
  }
})();