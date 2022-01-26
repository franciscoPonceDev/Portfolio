const projects = [
  {
    title: 'Multi Post Stories',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 1,
  },
  {
    title: 'Professional Art Printing Data',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 2,
  },
  {
    title: 'Multi Post Stories',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 3,
  },
  {
    title: 'Professional Art Printing Data',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 4,
  },
  {
    title: 'Multi Post Stories',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 5,
  },
  {
    title: 'Professional Art Printing Data',
    languages: ['html', 'Bootstrap', 'Ruby'],
    imageUrl: './assets/Img_Placeholder_3.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    id: 6,
  },
];

const cardsSection = document.getElementById('cardsSection');

function generateHTML(details) {
  const template = `
    <div class="work-card" title="Project: Professional Art Printing Data">
        <div class="card-content">
            <h4>${details.title}</h4>
            <p>${details.desc}</p>
            <ul>
                <li>${details.languages[0]}</li>
                <li>${details.languages[1]}</li>
                <li>${details.languages[2]}</li>
            </ul>
        </div>
        <button id="${details.id}" type="button" class="modal-open" data-modal="modal-${details.id}">See Project</button>
    </div>

    <div class="modal" id="modal-${details.id}">
        <div class="modal-content">
            <div class="modal-close-btn">
                <i id="modal-close" class="fas fa-times modal-close"></i>
            </div>
            <h4>${details.title}</h4>
            <ul class="modal-tags">
            <li class="tech-used">${details.languages[0]}</li>
            <li class="tech-used">${details.languages[1]}</li>
            <li class="tech-used">${details.languages[2]}</li>
            </ul>
            <div class="modal-img-container">
                <img class="modal-img" src="${details.imageUrl}" alt="${details.title}" />
            </div>
            <div>
                <p>${details.body}</p>
            </div>
            <div class="modal-links">
                <a href="./index.html"><button type="button">See Live &nbsp;&nbsp;<i class="fas fa-eye"></i></button></a>
                <a href="./index.html"><button style="display:flex; align-items: center; width: auto;" type="button">See Source&nbsp;&nbsp;<i id="github-icon-modal" class="fab fa-github-alt"></i></button></a>
            </div>
        </div>
    </div>

    `;
  return template;
}

// eslint-disable-next-line array-callback-return
projects.map((project) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(project);
  cardsSection.appendChild(HTMLElement);
});