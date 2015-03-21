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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Text9Copy3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(60000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goback}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("../index.html","_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'flowers'
   (function(symbolName) {   
   
   })("flowers");
   //Edge symbol end:'flowers'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-345301125");