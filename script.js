// MEMBERS INFO
const members = {
    games: {
        "Cerine": "https://cerine-it.github.io/2048-Game/",
        "Fatima_zr_hmt": "https://hamitoufatima.github.io/Game-OMC/",
        "Lina": "https://lina-manel.github.io/second-challenge-OMC/",
        "Takemichi": "https://imadzakxy.github.io/osu_mood/",
        "lara coft": "https://githu6girl.github.io/drum-kit/",
        "Samy": "https://rizu-sm.github.io/suggest-the-word/",
        "Maria": "https://its-mg.github.io/Memory-Game/",
        "Zineb": "https://hemaizizineb.github.io/Flappy_bird_JS/",
        "meriem": "https://benfekhadoumeriem.github.io/squid-game/",
        "Houda": "https://hou-da-nour.github.io/Quiz-Game/",
        "Lydia": "https://lydiachal.github.io/minigame/",
        "دعاء شهرزاد": "https://douaachahrazed21.github.io/Word-Puzzle-Game/",
        "Nada": "https://nadameriem.github.io/Color-Logic-Puzzle/",
        "Iness": "https://ines-aouali.github.io/guess_the_number/",
        "منار": "https://manarrezik.github.io/BrainBoost/",
        "Rakaia": "https://rekaia-benhatite.github.io/guess_number/",
        "Nick r": "https://ift-rayan.github.io/xo/",
        "Amira": "https://amirailli.github.io/Challenge2/",
        "Hadjer tlb": "https://hadjertalbi.github.io/PROJET_GAME/",
        "Abdou_2ki": "https://abdou-x-25.github.io/a-quiz-game/",
        "Maybe": "https://may01-cpu.github.io/Hangman-Game/",
        "Aya ": "https://aya047.github.io/game.github.io/"
    },
    profiles: {
        "Ftima_zr_hmt": "https://hamitoufatima.github.io/portfolio/",
        "Cerine": "https://cerine-it.github.io/profile-card/",
        "mehdi": "https://mehdi-prg.github.io/Profil-Card/",
        "Iness": "https://ines-aouali.github.io/profile-card/",
        "Yous": "https://youshs.github.io/Profile_Card/",
        "Hadjer talbi": "https://hadjertalbi.github.io/Hadjer/",
        "rawane": "https://rawane-dev.github.io/profile-card/",
        "Meriem": "https://derbassimeriem.github.io/profile-card-/",
        "Nawel": "https://chellah-nawel.github.io/First-HTML-challenge/",
        "Maybe": "https://may01-cpu.github.io/Profile-card/Profile-Card/",
        "Cru": "https://cru-sudo.github.io/profile_card_/",
        "Achraf malou": "https://achrafamalou77.github.io/OMC-Card-profile/",
        "Meriem rachedi": "https://meriem-rachedi.github.io/challengen1/",
        "Yousra": "https://hassaniyousra.github.io/profile/",
        "Lina": "https://lina-manel.github.io/first-challenge-OMC/",
        "fetoumi": "https://fettoumi.github.io/profil__card-2/",
        "zineb": "https://hemaizizineb.github.io/Profile-card/",
        "Sara": "https://sarasdn25.github.io/victor-card/",
        "Rakaia": "https://rekaia-benhatite.github.io/Profil_Card/",
        "Cerine harfi": "https://cerinehafri.github.io/profile-card-challenge-1/",
        "Amira": "https://amirailli.github.io/challenge1/",
        "oumelkhir": "https://oumelkheirbkh.github.io/omc_first_challenge/",
        "دعاء شهرزاد": "https://douaachahrazed21.github.io/Profile-Card/",
        "nick r": "https://ift-rayan.github.io/profile-card/"
    }
};

function showMembers(category) {
    const listContainer = document.getElementById('members-list');
    listContainer.innerHTML = ""; 
    listContainer.classList.remove("hidden");

    Object.keys(members[category]).forEach(name => {
        let memberElement = document.createElement("div");
        memberElement.classList.add("member-name");
        memberElement.textContent = name;
        memberElement.onclick = function () { openProject(category, name); };
        listContainer.appendChild(memberElement);
    });
} 
function openProject(category, name) {
    const projectUrl = members[category][name];
    if (projectUrl !== "https://github.com/USERNAME/PROJECT") {
        window.open(projectUrl, "_blank");
    } else {
        alert("🚀 no project for this member");
    }
}
// LOADING MEMBERS ONCE CLICKING
function showMembers(category) {
    const membersList = document.getElementById("members-list");
    membersList.innerHTML = "";  
    membersList.classList.remove("hidden");

    Object.keys(members[category]).forEach(name => {
        const memberElement = document.createElement("a");
        memberElement.href = members[category][name]; 
        memberElement.target = "_blank";
        memberElement.textContent = name;
        memberElement.classList.add("member-name");

        membersList.appendChild(memberElement);
    });
}
// MEMBER PROJECT +HIS NAME
function loadProject(memberName, element) {
    const projectDisplay = document.getElementById("project-display");
    
    
    element.style.transform = "rotateY(360deg)";
    element.style.transition = "0.5s ease-in-out";

    setTimeout(() => {
        projectDisplay.innerHTML = `<h2>${memberName}'s Project 🚀</h2>
            <p>🌟 Project details loading...</p>`;
        projectDisplay.classList.remove("hidden");
    }, 500); //DELAY+ORBITTING
}

// OMC INFORMATIONS
function toggleClubInfo() {
    document.getElementById("club-info").classList.toggle("hidden");
}