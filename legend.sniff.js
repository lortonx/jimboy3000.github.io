//Legend Mod Sniff Mode by jimboy3100

//preload url 
var url = window.location.href;
localStorage.setItem("url", url);

//load old skins

(function(t, c, m) {
   
   c[t] = new function() {
      this.prototypes = {
         http: (c.XMLHttpRequest.prototype),
         old:  {}
      },
      this.prototype_override = function(type, name, runat, callback) {
         if ( !(type in c[t].prototypes.old) )       c[t].prototypes.old[type]       = {};
         if ( !(name in c[t].prototypes.old[type]) ) c[t].prototypes.old[type][name] = c[t].prototypes[type][name];
         c[t].prototypes[type][name] = function() {
            (runat == 'before' && callback(this, arguments));
            var response = c[t].prototypes.old[type][name].apply(this, arguments);
            (runat == 'after'  && callback(this, arguments));
            return response;
         };
      },
      this.parse_json = function(json) {
         try {
            return JSON.parse(json);
         }
         catch ( error ) {
            return false;
         }
      },
      this.string_to_tabid = function(string) {
         string = string.toUpperCase();
         return string.replace(/[^A-Z0-9]+/, '_');
      },
      this.validate_config = function(config) {
         config = c[t].parse_json(config);
         return ((
            config                                            &&
            'gameConfig'                 in config            &&
            'Wallet - Soft Purchases'    in config.gameConfig &&
            'Visual - Shop Skins Tabs'   in config.gameConfig &&
            'Visual - Tabs Associations' in config.gameConfig &&
            'Shop - Skins'               in config.gameConfig
         ) ? true : false);
      },
      this.priced_products = function(config) {
         for ( var priced = [], i = 0; i < config.gameConfig['Wallet - Soft Purchases'].length; i++ ) {
            priced.push(config.gameConfig['Wallet - Soft Purchases'][i].id);
         }
         return priced;
      },
      this.add_tab = function(config, tabname, tabid, taborder) {
         config.gameConfig['Visual - Shop Skins Tabs'].push({tabDescription: tabid, tabName: tabname, tabOrder: taborder});
         config.gameConfig['Visual - Tabs Associations'].push({skinType: tabid, tabDescription: tabid});
         return config;
      },
      this.modify_config = function(json) {
         var tabname = 'Old - Legend Mod';
         var tabid   = c[t].string_to_tabid(tabname);
         var config  = c[t].add_tab(c[t].parse_json(json), tabname, tabid, 1020);
         var priced  = c[t].priced_products(config);
         for ( var i = 0; i < config.gameConfig['Shop - Skins'].length; i++ ) {
            if ( priced.indexOf(config.gameConfig['Shop - Skins'][i].referenceValue) >= 0 && config.gameConfig['Shop - Skins'][i].visibility == 'promotional' ) {
               config.gameConfig['Shop - Skins'][i].skinType   = tabid;
               config.gameConfig['Shop - Skins'][i].visibility = 'default';
            }
         }
         return JSON.stringify(config);
      },
      this.override = function() {
         c[t].prototype_override('http', 'open', 'before', function(a, b) {
            (b['1'].match(/gameconfiguration\.json/i) && a.addEventListener('readystatechange', function(event) {
               if ( this.readyState === 4 && c[t].validate_config(event.target.responseText) ) {
                  var json = c[t].modify_config(event.target.responseText);
                  Object.defineProperties(this, {'response': {writable: true}, 'responseText': {writable: true}});
                  this.response = this.responseText = json;
                  Object.defineProperties(this, {'response': {writable: false}, 'responseText': {writable: false}});
               }
            }, false));
         });
      },

      this.ready = function(callback) {
         if ( document.getElementsByTagName('body')['0'] !== undefined ) {
            callback();
         }
         else {
            c.setTimeout(function() {
               c[t].ready(callback);
            }, 100);
         }
      };
   };
   c[t].ready(function() {
      c[t].override();
      
   });
})('tcm_old_store_skins', window, document);




//load gooogle analytics
/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  window.ga('create', 'UA-92655864-1', 'auto');
  window.ga('send', 'pageview');
*/
//document.title = "Legend mod v" + modVersion;
//$("#leaderboard-hud > h4").text("LEGENDMOD.ML");

//setTimeout(function () {
//document.getElementById('create-party-btn').click();
//}, 1000);
