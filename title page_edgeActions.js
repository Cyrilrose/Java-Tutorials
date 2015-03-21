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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         yepnope({
            load:"http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.js",
            complete:function(){
         
               EC.centerStage(sym);
         
            }
         });
         
         sym.$("bubbleCopy19").hide();
         sym.$("bubbleCopy20").hide();
         sym.$("bubbleCopy21").hide();
         sym.$("bubbleCopy22").hide();
         sym.$("bubbleCopy23").hide();
         sym.$("bubbleCopy24").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy4}", "mouseover", function(sym, e) {
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("bubbles2").play(3000);
         // Play an audio track 
         
         // Jump to a playback time (in seconds) 
         sym.$("bubble_sound")[0].play();
         
         // Show an element 
         sym.$("bubbleCopy19").show();
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${welcome4}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BACKGROUND2}", "mouseover", function(sym, e) {
         
         // Hide an element 
         sym.$("bubbleCopy19").hide();
         sym.$("bubbleCopy20").hide();
         sym.$("bubbleCopy21").hide();
         sym.$("bubbleCopy22").hide();
         sym.$("bubbleCopy23").hide();
         sym.$("bubbleCopy24").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseover", function(sym, e) {
         sym.$("bubbleCopy19").show();
         sym.$("bubbleCopy20").show();
         sym.$("bubbleCopy21").show();
         sym.$("bubbleCopy22").show();
         sym.$("bubbleCopy23").show();
         sym.$("bubbleCopy24").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4}", "mouseover", function(sym, e) {
         sym.$("bubbleCopy19").show();
         sym.$("bubbleCopy20").show();
         sym.$("bubbleCopy21").show();
         sym.$("bubbleCopy22").show();
         sym.$("bubbleCopy23").show();
         sym.$("bubbleCopy24").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy3}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy21").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy3}", "mouseout", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy21").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy4}", "mouseout", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("bubbles2").play(3000);
         // Play an audio track 
         
         // Jump to a playback time (in seconds) 
         sym.$("bubble_sound")[0].play();
         
         // Show an element 
         sym.$("bubbleCopy19").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy20").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "mouseout", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy20").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy6}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy22").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy6}", "mouseout", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy22").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy23").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy}", "mouseout", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy23").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy8}", "mouseover", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy24").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy8}", "mouseout", function(sym, e) {
         sym.getSymbol("bubbles2").play(3000);
         sym.$("bubble_sound")[0].play();
         sym.$("bubbleCopy24").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy4}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter1.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubble}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter2.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter3.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy6}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter4.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter5.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bubbleCopy8}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("Chapters/Chapter/Chapter7.html", "_blank");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bubbles'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
      });
      //Edge binding end

   })("bubbles");
   //Edge symbol end:'bubbles'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-41125858");