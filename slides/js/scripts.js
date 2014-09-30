var php_wvl = (function(){
	var konami = {
		// the url for the konami javascript
		url: "js/konami.min.js",
		// setup the konami
		setup: function() {
			var me = this;

			// dynamically add konami script file
			var script = document.createElement("script")
		    script.type = "text/javascript";
		    
		    if (script.readyState){  //IE
		        script.onreadystatechange = function(){
		            if (script.readyState == "loaded" ||
		                    script.readyState == "complete"){
		                script.onreadystatechange = null;
		                me.doKonami(); // add the konami code
		            }
		        };
		    } else {
		        script.onload = function(){
		            me.doKonami(); // add the konami code
		        };
		    }

		    script.src = this.url;
		    document.getElementsByTagName("head")[0].appendChild(script);
		},
		// add the konami javascript code
		doKonami: function() {
			var konami = new Konami();
			konami.code = function() {
				window.scrollTo(0, 0);
				document.getElementsByTagName('body')[0].className+=' konami';
			}
			konami.load();
		}
	};

	return {
		init:function() {
			// do the konami
			konami.setup();
		}
	}
})();

$(function() {
	php_wvl.init();
});