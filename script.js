document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// --- Language Switcher --- //
const translations = {
    hu: {
        nav_about: "Rólam",
        nav_experience: "Tapasztalat",
        nav_education: "Végzettség",
        nav_skills: "Készségek",
        nav_contact: "Kapcsolat",
        about_title: "Rólam",
        about_text: "Következetesen eredményeket érek el a tanulás, az elemzés és a problémamegoldás bevált módszertani megközelítésének alkalmazásával minden kihívás leküzdése érdekében. Bár szeretek önállóan dolgozni, erős együttműködési készségeket hozok a csapatkörnyezetbe. Gyorsan alkalmazkodom az új csapatdinamikához, produktív munkakapcsolatokat alakítok ki. Szisztematikus megközelítésem biztosítja az egyes feladatok alapos elvégzését a tovább lepés előtt, maximalizálva a hatékonyságot. Megingathatatlan összpontosítással folyamatosan hatékony megoldásokat dolgozok ki komplex problémákra.",
        experience_title: "Szakmai tapasztalat",
        experience_job_title: "Pénzügyi és számviteli ügyintéző | 2020-2025",
        experience_text: "Motivált középiskolás diákként nagy lelkesedéssel és tanulási vággyal tekintek a lehetőségre, hogy megismerjem a szakmai környezetet és a munkafolyamatokat. Tanulmányaim során igyekeztem aktívan részt venni különböző iskolai projektekben és csoportmunkákban, melyek révén betekintést nyertem a közös célokért való együttműködésbe és a feladatok szervezésébe. Ezek a tevékenységek fejlesztették az önálló munkavégzésre való képességemet, ugyanakkor megtanultam, hogyan tudok hatékonyan hozzájárulni egy csapat sikeréhez. Gyorsan alkalmazkodom az új helyzetekhez, és proaktívan keresem a lehetőséget új ismeretek és készségek elsajátítására.",
        education_title: "Végzettség",
        education_school: "Szent Benedek Budaörsi Tagintézmény és Technikum",
        education_degree: "Pénzügyi és számviteli ügyintéző",
        education_studies_title: "Tanulmányok:",
        education_study1: "Gazdaság",
        education_study2: "Pénzügy",
        education_study3: "Könyvelés",
        skills_title: "Készségek",
        skills_professional_title: "Szakmai Készség:",
        skills_prof1: "Nyelvek",
        skills_prof2: "IT tudás",
        skills_prof3: "Gazdasági ismeretek",
        skills_personal_title: "Személyes készségek:",
        skills_pers1: "Alkalmazkodóképesség",
        skills_pers2: "Problémamegoldás",
        skills_pers3: "Elhatározás",
        contact_title: "Kapcsolat",
        contact_intro: "Mindig nyitott vagyok új lehetőségekre és együttműködésekre. Keressen bátran!",
        contact_phone_label: "Telefon",
        contact_email_label: "Email",
        contact_address_label: "Cím",
        footer_text: "Minden jog fenntartva."
    },
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_contact: "Contact",
        about_title: "About Me",
        about_text: "I consistently achieve results by applying a proven methodological approach to learning, analysis, and problem-solving to overcome every challenge. Although I enjoy working independently, I bring strong collaborative skills to a team environment. I quickly adapt to new team dynamics, forming productive working relationships. My systematic approach ensures thorough completion of each task before moving on, maximizing efficiency. With unwavering focus, I continuously develop effective solutions for complex problems.",
        experience_title: "Professional Experience",
        experience_job_title: "Financial and Accounting Administrator | 2020-2025",
        experience_text: "As a motivated high school student, I look forward with great enthusiasm and a desire to learn about the professional environment and work processes. During my studies, I actively participated in various school projects and group work, through which I gained insight into collaboration for common goals and task organization. These activities developed my ability to work independently, while also teaching me how to effectively contribute to a team's success. I quickly adapt to new situations and proactively seek opportunities to acquire new knowledge and skills.",
        education_title: "Education",
        education_school: "Szent Benedek Budaörs Branch Institution and Technical School",
        education_degree: "Financial and Accounting Administrator",
        education_studies_title: "Studies:",
        education_study1: "Economics",
        education_study2: "Finance",
        education_study3: "Accounting",
        skills_title: "Skills",
        skills_professional_title: "Professional Skills:",
        skills_prof1: "Languages",
        skills_prof2: "IT knowledge",
        skills_prof3: "Economic knowledge",
        skills_personal_title: "Personal Skills:",
        skills_pers1: "Adaptability",
        skills_pers2: "Problem-solving",
        skills_pers3: "Determination",
        contact_title: "Contact Me",
        contact_intro: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
        contact_phone_label: "Phone",
        contact_email_label: "Email",
        contact_address_label: "Address",
        footer_text: "All rights reserved."
    }
};

const langButtons = document.querySelectorAll('.lang-button');
const translatableElements = document.querySelectorAll('[data-key]');

function changeLanguage(lang) {
    translatableElements.forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active button state
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        }
    });

    // Store selected language in local storage
    localStorage.setItem('selectedLang', lang);
}

// Event listeners for language buttons
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        changeLanguage(button.dataset.lang);
    });
});

// Set initial language on page load
const savedLang = localStorage.getItem('selectedLang') || 'hu'; // Default to Hungarian
changeLanguage(savedLang);