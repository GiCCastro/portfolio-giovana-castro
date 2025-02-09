function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `https://api.whatsapp.com/send?phone=${profileData.whatsapp}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.name
    linkedin.href = profileData.linkedin
    linkedin.target = "_blank"
    linkedin.rel = "noopener noreferrer"

    const github = document.getElementById('profile.github')
    github.innerText = profileData.github
    github.href = profileData.github
    github.target = "_blank"
    github.rel = "noopener noreferrer"
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name} title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
    <li>
    <h3${project.github ? ' class="github"' : ''}>${project.name}</h3>
    <a href="${project.url}" target="_blank"  rel="noopener noreferrer">${project.url}</a>
    <a href="${project.page}" target="_blank"  rel="noopener noreferrer">Deploy <i class="fas fa-globe"></i></a>
    </li>`
    }).join('')
}

function updateExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.experience.map(experience => {
        return `
        <li>
        <h2  class="title">${experience.name}</h2>
        <p  class="period">${experience.period}</p>
        <p>${experience.description}</p>
        </li>`
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()

