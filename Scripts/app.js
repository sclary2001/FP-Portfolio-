console.log("Login hint: admin / 1234");

let projects = [];

fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    projects = data;
    displayProjects(projects);
  })
  .catch(error => {
    console.error("Error loading projects:", error);
  });

function displayProjects(list) {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  list.forEach(project => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3">
          <h5>${project.title}</h5>
          <p>${project.desc}</p>
        </div>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", event => {
  const value = event.target.value.toLowerCase();

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(value)
  );

  displayProjects(filteredProjects);
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  console.log("Form JSON:", JSON.stringify(formData));

  event.target.reset();
});

sessionStorage.setItem("visited", "true");
