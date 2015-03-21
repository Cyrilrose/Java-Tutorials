/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${play2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pause}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         // insert code for mouse click here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(60000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goback}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("../game.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'flowers'
   (function(symbolName) {   
   
   })("flowers");
   //Edge symbol end:'flowers'

   //=========================================================
   
   //Edge symbol: 'row'
   (function(symbolName) {   
   
   })("row");
   //Edge symbol end:'row'

   //=========================================================
   
   //Edge symbol: 'column'
   (function(symbolName) {   
   
   })("column");
   //Edge symbol end:'column'

   //=========================================================
   
   //Edge symbol: 'star'
   (function(symbolName) {   
   
   })("star");
   //Edge symbol end:'star'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-345301125");