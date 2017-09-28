var name = "Ashley Glime";
var role = "associate";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);
/* this formatting results in prepend placing the role at the start of the header tag, then using prepend agaim places the name before the role. That is why they are reversed below */
$ ("#header").prepend(formattedRole);
$ ("#header").prepend(formattedName);