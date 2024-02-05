document.getElementById("products").innerHTML = "Interests";


var newNavItem = document.createElement("li");
newNavItem.className = "nav-item";

// Create a new link
var newNavLink = document.createElement("a");
newNavLink.className = "nav-link";
newNavLink.href = "humanresources.html";
newNavLink.textContent = "Human Resources";

// Append the link to the list item
newNavItem.appendChild(newNavLink);

// Get the reference to the existing "Contact Us" list item
var contactUsNavItem = document.querySelector(".navbar .nav-item:last-child");

// Insert the new list item before the "Contact Us" list item
contactUsNavItem.parentNode.insertBefore(newNavItem, contactUsNavItem);
       


