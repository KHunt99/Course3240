// Helper function to get an element by ID
var $ = function (id) { return document.getElementById(id); };

// Array to store the list of volunteers
var volunteerArray = [];

// Function to display the volunteers in the text area using a loop
var displayVolunteers = function () {
    // Clear the current list in the text area
    $("volunteerList").value = "";

    // Loop through the array and display each volunteer with a running count
    for (var i = 0; i < volunteerArray.length; i++) {
        $("volunteerList").value += (i + 1) + ". " + volunteerArray[i] + "\n";
    }
};

// Function to add a volunteer to the list
var addVolunteer = function () {
    // Get the data from the form
    var firstName = $("first_name").value.trim();
    var lastName = $("last_name").value.trim();

    // Ensure the input is not empty
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }

    // Combine first and last name and add to the array
    var volunteerString = firstName + " " + lastName;
    volunteerArray.push(volunteerString);

    // Display the updated list and clear the form
    displayVolunteers();
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

// Function to delete a specific volunteer from the list
var deleteVolunteer = function () {
    var firstName = $("first_name").value.trim();
    var lastName = $("last_name").value.trim();

    if (!firstName || !lastName) {
        alert("Please enter both first and last names to delete.");
        return;
    }

    var volunteerString = firstName + " " + lastName;

    // Find and remove the volunteer from the array
    var index = volunteerArray.indexOf(volunteerString);
    if (index !== -1) {
        volunteerArray.splice(index, 1);
        displayVolunteers();
        $("first_name").value = "";
        $("last_name").value = "";
        $("first_name").focus();
    } else {
        alert(`Volunteer "${volunteerString}" not found.`);
    }
};

// Function to clear the entire volunteer list
var clearList = function () {
    volunteerArray = [];
    $("volunteerList").value = "";
    $("first_name").focus();
};

// Function to sort the volunteer list alphabetically
var sortList = function () {
    volunteerArray.sort();
    displayVolunteers();
};

// Map buttons to their respective functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;
    $("sort_button").onclick = sortList;
    $("first_name").focus();
};
