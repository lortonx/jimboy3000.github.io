ProLicenceUsersTable = {};
ProLicenceUsersTable = {
    "ProLicenceUsers": {
        "1ad344c0-40c4-4ffe-b1b0-142f6918d437": {
            "reason": "LMauthor",
            "notes": "Jimboy3100"
        },
        "da4499e5-17a7-4159-8ca5-e80e4d87065f": {
            "reason": "Aus Taipan",
            "notes": "Greek australian girl"
        },
        "7bea1cb9-7e14-4e14-824c-c2682036b0a6": {
            "reason": "℄🌀βurNouT",
            "notes": "℄🌀"
        },
        "960e1b2a-58b2-42ca-aa74-2645da3c6ccb": {
            "reason": "✵ΕΛ✵Gio",
            "notes": "✵ΕΛ✵"
        }
    },
    "versionsInfo": ["v-0.3", "LM-v2.5"]
};




if (ProLicenceUsersTable.ProLicenceUsers[window.ironrv_userId] != undefined) {
    console.log("Authorised User");
    buydeals();
} else {
    console.log("Non Authorised User");
    var containsnickname = $("#nick").val();
    if (~containsnickname.indexOf("℄") || ~containsnickname.indexOf("ΕΛ")) {
        toastr["info"]("If you are Lc or EA player, contact Skype Id: Jimboy3100 and refer your <font color='red'><b>UID</b></font color='red'>", "", {
            timeOut: 10000,
            extendedTimeOut: 10000
        }).css("width", "300px");
    } else {
        toastr["info"]("This Function is enabled to those who donated 6$ to author, contact Skype Id: Jimboy3100 and refer your <font color='red'><b>UID</b></font color='red'>", "", {
            timeOut: 10000,
            extendedTimeOut: 10000
        }).css("width", "300px");
    }
}
