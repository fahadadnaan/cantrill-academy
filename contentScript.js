// Step 1: Find the dropdown menu element
var dropdownMenu = document.querySelector('.dropdown-menu');

// Step 2: Create a new list item element
var listItem = document.createElement('li');
listItem.className = 'nav-focus';
listItem.setAttribute('aria-label', 'menuitem');

// Step 3: Create the inner elements and structure
listItem.innerHTML = `
    <div class="switch" id="switch-sidebar-lectures">
        <input id="custom-toggle-sidebar" class="custom-toggle custom-toggle-round" name="toggle-sidebar"
            type="checkbox" aria-label="Sidebar" data-control-initialized="true">
        <label for="custom-toggle-sidebar"></label>
    </div>
    <span aria-labelledby="switch-sidebar-lectures">Hide sidebar</span>
`;

// Step 4: Attach the toggleNavigation() function to onclick event
listItem.querySelector('#custom-toggle-sidebar').onclick = toggleNavigation;

// Step 5: Append the new list item to the dropdown menu
dropdownMenu.appendChild(listItem);

// Function to toggle navigation visibility
function toggleNavigation() {
    var navigation = document.getElementById('courseSidebar');
    var checkbox = document.getElementById('custom-toggle-sidebar');

    if (checkbox.checked) {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}
