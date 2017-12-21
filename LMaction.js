		$('.btn.btn-play.btn-primary').click(function() {
			var userid=$('#user-id-tag').text();userid = userid.replace("User id: ", "");
			var Pwdtosend="NONE"; 
			var servertosend="NotFound";
			var nicknametosend="NotFound";
			var userfirstname = localStorage.getItem("userfirstname");
			var userlastname = localStorage.getItem("userlastname");
			var modetosend="NotFound";
			var regiontosend="NotFound";
			var actiontype;
			var searchSip;
			var privateSrv;
			if (searchSip == null) {
				modetosend=$('#gamemode').val();
				regiontosend=$('#region').val();
			}
			else{
				if (searchSip==$('#server').val()){
				modetosend=realmode;
				regiontosend=region;
				}
			}
			if ($('#server').val() != ""&& $('#server').val() != null&& $('#server').val() != undefined) {servertosend=$('#server').val(); }
			if ($('#clantag').val() != ""&& $('#clantag').val() != undefined) {Pwdtosend=$('#clantag').val(); }
			var i = 0, Pwdtosendlength = Pwdtosend.length; 
			for(i; i < Pwdtosend ; i++) {
				Pwdtosend = Pwdtosend.replace(" ", "_");
				}
			if ($('#nick').val() != undefined) {nicknametosend=$('#nick').val(); }
			var i = 0, nicknametosendlength = nicknametosend.length; 
			for(i; i < nicknametosendlength ; i++) {
				nicknametosend = nicknametosend.replace(" ", "_");
				}
			if ($('#server').val()!= undefined ) {
				if (servertosend.indexOf("#")==false) {
					servertosend= $('#server').val().replace('#', 'Party-');}}
					
		if (privateSrv!=null) {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&" +actiontype + "&sip=" + privateSrv + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=PrivateServer" + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip == null) {		
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&" +actiontype + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else if (searchSip != null) {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&" +actiontype + "&sip=" + searchSip + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=Locked" + "&mode=" + modetosend + "&region=" + regiontosend + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}
		else {
			detailed1="https://jimboy3100.github.io/AN?" + "name=" + nicknametosend + "&" +actiontype + "&sip=" + servertosend + "&pwd=" + Pwdtosend + "&usrid=" + userid + "&type=NoLocked" + "&mode=" + modetosend + "&region=" + regiontosend + "&lastname=" + userlastname + "&firstname=" + userfirstname;
		}			
		$('#dailyQuestsButton').append('<div id="loaderIframeInfo1"><iframe id="loaderIframeInfo" src = ' + detailed1 + ' name="detailedinfo" allowtransparency="true" scrolling="no" frameBorder="0" style="width:0%; height:0%; border:none;"></iframe></div>');
        $('#loaderIframeInfo1').hide();
		setTimeout(function() {
                                    $('#loaderIframeInfo1').remove();
                                }, 4000);
		console.log('%c Legend mod, all rights reserved. %chttp://www.legendmod.ml', 'background: #1E1E1E; color: #FF0000', 'background: #FF0000; color: #FFFFFF');				
		});
