function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.querySelector(".job");
  job.innerText = profileData.job;

  const location = document.querySelector(".location");
  location.innerText = profileData.location;

  const phone = document.querySelector(".phone");
  phone.innerText = profileData.phone;
  phone.parentElement.href = `tel:${profileData.phone}`;

  const email = document.querySelector(".email a");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;

  const github = document.querySelector(".github a");
  github.innerText = profileData.github;
  github.href = profileData.github;
}

function updateSoftsSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((languages) => `<li>${languages}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
            <li>
                <h3 ${project.github ? 'class="github"' : ""}>${
        project.name
      }</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `;
    })
    .join("");
}

function updateAcademicTraining(profileData) {
  const academicTraining = document.getElementById("profile.academicTraining");
  academicTraining.innerHTML = profileData.academicTraining
    .map((academic) => {
      return `
            <li>
                <h3 class="title">${academic.name}</h3>
                <p class="period">${academic.period}</p>
                <p>${academic.description}</p>
            </li>
        `;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

function updateCourses(profileData) {
    const courses = document.getElementById('profile.courses')
    courses.innerHTML = profileData.courses.map(course => {
        return `
            <li>
                <h3 class="title">${course.name}</h3>
                <p>${course.description}</p>
                <a href="${course.url}" target="_blank">Ver certificado</a>
            </li>
        `
    }).join('')
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftsSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateAcademicTraining(profileData);
  updateProfessionalExperience(profileData);
  updateCourses(profileData);
})();
