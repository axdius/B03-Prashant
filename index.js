let ContactContainer = document.getElementById('contactBgContainer');
let GroupsContainer = document.getElementById('groupsBgContainer');
let tabContainer = document.getElementById('tabContainer');

tabContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        if (event.target.textContent === 'Contacts') {
            ContactContainer.style.display = 'flex';
            GroupsContainer.style.display = 'none';
        } else if (event.target.textContent === 'Groups') {
            ContactContainer.style.display = 'none';
            GroupsContainer.style.display = 'flex';
        }
    }
});

ContactContainer.style.display = 'flex';
GroupsContainer.style.display = 'none';
