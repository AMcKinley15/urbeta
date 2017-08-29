var Brother = function(name, roll, photo, gradYear, pledgeClass, 
	hometown, major, isEagle, activities, about, featured, isEboard)
{
	this.name = name;
	this.roll = roll;
	this.photo = photo;
	this.gradYear = gradYear;
	this.pledgeClass = pledgeClass;
	this.hometown = hometown;
	this.major = (major + "").split(",");
	this.isEagle = isEagle;
	this.activities = activities;
	this.about = about;
	this.featured = featured;
	this.isEboard = isEboard;
}
function splitOnComma(string)
{
	var x = "hello, world";
	return x.split(",");
}