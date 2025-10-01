// Role-based greeting
const greeting = document.getElementById('greeting');

// Replace these with actual role detection from your backend/session
const userRole = localStorage.getItem('userRole') || 'customer';
// Example: localStorage.setItem('userRole','developer');

greeting.textContent = userRole === 'developer' ? 'Hi Developer' : 'Hi Customer';

// Avatar upload preview
document.getElementById('avatarUpload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    document.getElementById('avatar').src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

// Dynamic project adding
const projectList = document.getElementById('projectList');
const addProjectBtn = document.getElementById('addProject');
let projectCount = 0;

addProjectBtn.addEventListener('click', () => {
  projectCount++;
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="number">${projectCount}</div>
    <img src="assets/default-project.png" alt="Project Preview">
    <h4>Project ${projectCount}</h4>
    <p>Short description of this software.</p>
  `;
  projectList.appendChild(card);
});
