FB.api("me/friends?limit=100","GET",{
                        fields: "id, name, picture, canReceiveGift"
                    }, function(response) {
						if (response != null && response.data != null) {
							window.facebookFriends=response.data;							
                            var _g = 0;
                            while (_g < response.data.length) {
                                var friend = response.data[_g];
                                ++_g;
                                console.log(friend)
                            }							
                        } else {
                            console.log("Error calling: FP.api");
                        }
});
