 // Create a new Date object
 const currentDate = new Date();
 // Get the current year
 const currentYear = currentDate.getFullYear();
 years= document.getElementsByClassName('year')
for (var i=0; i<years.length; i++) {
    years[i].innerHTML = currentYear;
}


