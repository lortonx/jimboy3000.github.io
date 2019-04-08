
   var tcm2 = {
      prototypes:  {
         canvas: (CanvasRenderingContext2D.prototype),
         old:    {}
      },
      f: {
         prototype_override: function(type, name, runat, callback) {
            if ( !(type in tcm2.prototypes.old) )       tcm2.prototypes.old[type]       = {};
            if ( !(name in tcm2.prototypes.old[type]) ) tcm2.prototypes.old[type][name] = tcm2.prototypes[type][name];
            tcm2.prototypes[type][name] = function() {
               (runat == 'before' && callback(this, arguments));
               tcm2.prototypes.old[type][name].apply(this, arguments);
               (runat == 'after'  && callback(this, arguments));
            };
         },
		   gradient: function(a) {
		      var c = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
		      var g = a.createLinearGradient(0, 0, a.canvas.width, 0);
		      g.addColorStop(0, c[Math.floor(Math.random() * c.length)]);
		      g.addColorStop(1, c[Math.floor(Math.random() * c.length)]);
		      return g;
		   },
         override: function() {
			  tcm2.f.prototype_override('canvas', 'fillText', 'before', function(a, b) {
				  if (a.canvas.id!="minimap" && a.canvas.id!="minimap-sectors" && a.canvas.id!="ao2t-minimap"){
				  //console.log(a.canvas.id);
				  a.fillStyle   = tcm2.f.gradient(a);
				  }
			  }
);
         }
      }
   };

   tcm2.f.override();
