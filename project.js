function placeholderBox(width, height) {
  const sizeStyle = (width && height) ? `style="width:${width}px; height:${height}px;"` : "";
  return `
    <div class="placeholder-box" ${sizeStyle}>
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="1"/>
        <circle cx="16" cy="9" r="1.5" fill="#ffffff"/>
        <path d="M2 17l6-6 4 4 4-5 6 7"/>
      </svg>
    </div>
  `;
}

function imageOrPlaceholder(src, width, height) {
  if (src) {
    const sizeStyle = (width && height) ? `width:${width}px; height:${height}px;` : `width:100%; height:100%;`;
    return `<img src="${src}" alt="" style="${sizeStyle} object-fit:cover; border:4px solid #ffffff;">`;
  }
  return placeholderBox(width, height);
}

function bulletList(items) {
  return `<ul class="bullet-list">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function paragraphs(items, className) {
  return items.map(p => `<p class="${className || ''}">${p}</p>`).join("");
}

function renderTechGroup(items, cssClass) {
  if (!items || !items.length) return "";
  return `<div class="tech-group">${items.map(t => `<span class="tech-badge ${cssClass}">${t}</span>`).join("")}</div>`;
}

function renderProject(project) {
  const root = document.getElementById("project-root");

  let html = "";

  // Title
  html += `<h1 class="project-detail-title">${project.title.toUpperCase()}</h1>`;

  // Hero image
  html += `<div class="project-hero-image">${imageOrPlaceholder(project.heroImage, 260, 170)}</div>`;

  // About the project
  html += `
    <div class="about-project">
      <h3>ABOUT THE PROJECT</h3>
      ${paragraphs(project.about)}
    </div>
  `;

  // Project info
  html += `<h2 class="section-title">PROJECT INFO</h2>`;
  html += `
    <div class="project-info-grid">
      <div class="nes-container is-dark info-box">
        <dl class="info-rows">
          <dt>Genre:</dt><dd>${project.info.genre}</dd>
          <dt>Platform:</dt><dd>${project.info.platform}</dd>
          <dt>Engine:</dt><dd>${project.info.engine}</dd>
          <dt>Development Time:</dt><dd>${project.info.devTime}</dd>
          <dt>Team Size:</dt><dd>${project.info.teamSize}</dd>
        </dl>
      </div>
      <div class="nes-container is-dark info-box is-audience">
        <h4>Target Audience</h4>
        ${bulletList(project.info.targetAudience)}
      </div>
    </div>
  `;

  // My Role
  html += `<h2 class="section-title">MY ROLE</h2>`;
  html += `
    <div class="role-text">
      ${paragraphs(project.myRole.intro)}
      ${bulletList(project.myRole.bullets)}
    </div>
  `;

  // Technical Challenges
  if (project.technicalChallenges && project.technicalChallenges.length) {
    html += `<h2 class="section-title">TECHNICAL CHALLENGES</h2>`;
    project.technicalChallenges.forEach(c => {
      html += `
        <div class="nes-container is-dark challenge-box">
          <span class="challenge-tag">Challenge</span>
          <h4>Problem</h4>
          <p>${c.problem}</p>
          <h4>Solution</h4>
          <p>${c.solution}</p>
          <h4>Result</h4>
          <p>${c.result}</p>
        </div>
      `;
    });
  }

  // Interesting Features
  if (project.features && project.features.length) {
    html += `<h2 class="section-title">INTERESTING FEATURES</h2>`;
    project.features.forEach((f, i) => {
      const reverse = i % 2 === 1 ? "reverse" : "";
      html += `
        <div class="nes-container is-dark feature-box ${reverse}">
          <div class="feature-text">
            <h4>Feature</h4>
            <p>${f.text}</p>
          </div>
          <div class="feature-image">${imageOrPlaceholder(f.image, 170, 120)}</div>
        </div>
      `;
    });
  }

  // Technologies Used
  html += `<h2 class="section-title">TECHNOLOGIES USED</h2>`;
  html += renderTechGroup(project.technologies.programming, "is-programming");
  html += renderTechGroup(project.technologies.tools, "is-tools");
  html += renderTechGroup(project.technologies.concepts, "is-concepts");

  // What I Learned
  html += `<h2 class="section-title">WHAT I LEARNED</h2>`;
  html += `<div class="learned-text">${paragraphs(project.whatILearned)}</div>`;

  // Project Outcome / If I Had More Time
  html += `<h2 class="section-title">PROJECT OUTCOME / IF I HAD MORE TIME</h2>`;
  html += bulletList(project.outcome);

  // Media
  if (project.media && project.media.length) {
    html += `<h2 class="section-title">MEDIA</h2>`;
    html += `<div class="media-grid">`;
    project.media.forEach(m => {
      html += `
        <div class="media-item">
          ${imageOrPlaceholder(m.image, 0, 0)}
          <span>${m.caption}</span>
        </div>
      `;
    });
    html += `</div>`;
  }

  // Links
  if (project.links && project.links.length) {
    html += `<h2 class="section-title">LINKS</h2>`;
    html += `<div class="project-links">`;
    project.links.forEach(l => {
      html += `<a href="${l.url}" target="_blank" class="nes-btn"><i class="nes-icon ${l.icon} is-small"></i> ${l.label}</a>`;
    });
    html += `</div>`;
  }

  root.innerHTML = html;
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const root = document.getElementById("project-root");

  if (!id || !projectsData[id]) {
    root.innerHTML = `
      <div style="padding:24px;">
        <h1 class="project-detail-title">PROJECT NOT FOUND</h1>
        <p style="font-size:10px;">
          No project matches "${id || ''}". Check the link, or edit
          projects-data.js to add this project.
        </p>
      </div>
    `;
    return;
  }

  renderProject(projectsData[id]);
  document.title = project_title_for(id) + " — Piper's Portfolio";
}

function project_title_for(id) {
  return projectsData[id].title;
}

init();