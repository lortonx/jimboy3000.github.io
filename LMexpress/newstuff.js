<div class="input-group skin colorpicker-element">
   <input id="skin" class="form-control" placeholder="Skin URL (imgur.com direct link)" maxlength="40">
   <input type="hidden" id="color" value="#01d9cc" maxlength="7"><span class="input-group-addon"><i style="background-color: rgb(1, 217, 204);"></i></span>
   <span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span>
</div>

//$("#server-token").css("margin-top", "-10px");
$('#server-token').parent().addClass("input-group skin colorpicker-element");
$('#server-token').parent().css("margin-top", "-=10px");
$('#server-token').after('<span id="Wisperer" class="input-group-btn"><button id="openskinchanger" class="btn btn-info" style="background-color: transparent; text-transform: capitalize;" onclick="BeforeReportFakesSkin();return false;" placeholder="Name" data-original-title="" title=""><i class="fa fa-wpexplorer"></i></button></span>');

$('#server-token').css("width", "-=40px");
$('#Wisperer').css("margin-top", "10px");
$('#Wisperer').css("width", "40px");


$('#server-join').css("width", "-=40px");


$('#server-token').after('<span id="Wisperer" class="input-group-btn"><button id="openskinchanger" class="btn btn-info" style="background-color: transparent; text-transform: capitalize;" onclick="BeforeReportFakesSkin();return false;" placeholder="Name" data-original-title="" title=""><i class="fa fa-wpexplorer"></i></button></span>');
$('#Wisperer').css("margin-left", "-=40px");
$('#server-token').css("z-index", "100");

$('#server-token').after('<button id="Wisperer" class="btn active ogicon-eye" ></button>');

$('#server-token').after('<button id="openskinchanger" class="btn btn-info" style="background-color: transparent; text-transform: capitalize;" onclick="BeforeReportFakesSkin();return false;" placeholder="Name" data-original-title="" title=""><i class="fa fa-wpexplorer"></i></button>');
