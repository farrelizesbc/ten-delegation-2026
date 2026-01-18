// --- 1. INITIALIZE & VISUAL EFFECTS ---
document.addEventListener('DOMContentLoaded', () => {
    // Render Kartu Kelas (Hanya satu kali di sini)
    const container = document.getElementById('kelasContainer');
    if(container) {
        dataKelas.forEach(k => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="img/12${k.id}.jpg" onerror="this.src='https://via.placeholder.com/450x600'">
                <h2>CLASS 12 ${k.id}</h2>
            `;
            card.onclick = () => openModal(k);
            container.appendChild(card);
        });
    }

    // Efek Preloader
    setTimeout(() => {
        const loader = document.getElementById('loader') || document.querySelector('.loading-screen');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }
    }, 2000);
});

// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    if(cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    }
});

// Gold Dust Particles (Debu Emas)
function createDust() {
    const dust = document.createElement('div');
    dust.style.cssText = `position:fixed; width:2px; height:2px; background:rgba(212,175,55,0.4); z-index:1; pointer-events:none; border-radius:50%;`;
    dust.style.left = Math.random() * 100 + 'vw';
    dust.style.top = '-10px';
    document.body.appendChild(dust);
    
    dust.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { opacity: 1, offset: 0.2 },
        { transform: `translateY(100vh) translateX(${Math.random() * 100 - 50}px)`, opacity: 0 }
    ], { duration: Math.random() * 3000 + 5000 });
    
    setTimeout(() => dust.remove(), 8000);
}
setInterval(createDust, 300);

// --- 2. DATA KELAS ---
const dataKelas = [
    { 
        id: 'A', 
        names: ["Agus", "Budi", "Citra"], 
        groupCaptions: ["Vibes A1", "Vibes A2", "Vibes A3", "Vibes A4", "Vibes A5"] 
    },
    { id: 'B', names: ["Lia", "Mira"], groupCaptions: ["B1", "B2", "B3", "B4", "B5"] },
    { id: 'C', names: ["Vino", "Wati"], groupCaptions: ["C1", "C2", "C3", "C4", "C5"] },
    { 
        id: 'D', 
        names: [
            "Ahri", "Annisa Luthfiyah Napitupulu", "Annisa Putri Zahra", "Ardiani Kayla Radisty", 
            "Audya Rahmadina Kamila", "Augustine Almaghfira", "Brilliant Ayu Widia Putri", 
            "Bunga Nur Aprilia", "Chelsea Meirianni Magirintua", "Davin Anjarianto", 
            "Devan Rama Radithya", "Farrel Akbar Naufal Ramadhan", "Hasna Khalilah Hadi", 
            "Jihan Aqilah Azzahra", "Kalyca Alisha Aurellia", "Luthfiya Margaretha", 
            "Marsel Nehemia Barus", "Mohammad Aria Kundrat", "Mohammad Youri Januar", 
            "Mozha Faulina", "Muhammad Anfi", "Muhammad Faathir Milanneto", 
            "Muhammad Refin Al Fachrizi", "Nadya Delia Permata", "Naufal Ahmadinejad", 
            "Raisa Zafira Rahmayani", "Raisya Putri Gunawan", "Revalina Gryska Zivanna Usior", 
            "Rizky Noval Prasetyo", "Sheila Aulia Febriyanti", "Shevira Bianika Candra", 
            "Silvia Anggraeni", "Talitha Edgina Fikra Prameswari Pountung", "Vina Khoirunnisa", "Zahiroh Syifa Qolbi"
        ],
        groupCaptions: [
            "Kebersamaan di depan kelas setelah olahraga", 
            "Momen seru saat jam kosong",                   
            "Squad kantin favorit 12D",                     
            "Persiapan acara perpisahan",                   
            "The Golden Moments of Twelve Delta"           
        ]
    },
    { id: 'E', names: ["Pita", "Rama"], groupCaptions: ["E1", "E2", "E3", "E4", "E5"] },
    { id: 'F', names: ["Bobi", "Cika"], groupCaptions: ["F1", "F2", "F3", "F4", "F5"] },
    { id: 'G', names: ["Lulu", "Mono"], groupCaptions: ["G1", "G2", "G3", "G4", "G5"] },
    { id: 'H', names: ["Vero", "Wira"], groupCaptions: ["H1", "H2", "H3", "H4", "H5"] },
    { id: 'I', names: ["Fahri", "Ghea"], groupCaptions: ["I1", "I2", "I3", "I4", "I5"] }
];

const quotes = ["Stay Gold.", "Eternal Class.", "Legacy 2026.", "Limitless.", "One Dream.", "Beyond the Sky."];

// --- 3. MODAL & NAVIGATION ---
function openModal(kelas) {
    const m = document.getElementById('modal');
    const classId = `12${kelas.id}`;
    document.getElementById('mTitle').innerText = "CLASS " + classId;
    document.getElementById('mMainImg').src = `img/${classId}.jpg`;
    document.getElementById('player').src = `music/${classId}.mp3`;

    // Render Members
    const sCont = document.getElementById('mStudents');
    sCont.innerHTML = "";
    kelas.names.forEach((nama, index) => {
        const absen = index + 1;
        const q = quotes[index % quotes.length];
        const fotoMurid = `img/murid/${classId}_${absen}.jpg`;
        sCont.innerHTML += `
            <div class="student-card" onclick="openZoom('${fotoMurid}', '${nama}', '${q}')">
                <img src="${fotoMurid}" onerror="this.src='https://via.placeholder.com/200'">
                <span class="name">${nama}</span>
                <span class="quote">"${q}"</span>
            </div>`;
    });

    // Render Groups
    const gCont = document.getElementById('mGroups');
    gCont.innerHTML = "";
    for(let i=1; i<=5; i++) {
        const imgSrc = `img/${classId}_g${i}.jpg`;
        const captionText = kelas.groupCaptions[i-1] || "Memories of " + classId;
        gCont.innerHTML += `
            <div class="group-item" onclick="openZoom('${imgSrc}', 'Memory #${i}', '${captionText}')">
                <img src="${imgSrc}" onerror="this.style.display='none'">
                <div class="group-caption">
                    <h4>MOMENT #${i}</h4>
                    <p>${captionText}</p>
                </div>
            </div>`;
    }

    m.style.display = "block";
    document.body.style.overflow = "hidden";
    
    // Aktifkan animasi transisi masuk
    setTimeout(() => {
        m.classList.add('active');
    }, 10);

    loadComments(classId);
}

function closeModal() {
    const m = document.getElementById('modal');
    m.classList.remove('active');
    
    setTimeout(() => {
        m.style.display = "none";
        document.body.style.overflow = "auto";
        const p = document.getElementById('player');
        if(p) p.pause();
    }, 500);
}

// Zoom System
function openZoom(src, name, quote) {
    const zm = document.getElementById('zoomModal');
    document.getElementById('zoomImg').src = src;
    document.getElementById('zoomName').innerText = name;
    document.getElementById('zoomQuote').innerText = quote ? `"${quote}"` : "";
    zm.style.display = "flex";
}

function closeZoom() { document.getElementById('zoomModal').style.display = "none"; }

// Music Control
function toggleMusic() {
    const p = document.getElementById('player');
    const s = document.getElementById('speakerIcon');
    if (p.paused) { p.play(); s.className = "fas fa-volume-up fa-beat"; } 
    else { p.pause(); s.className = "fas fa-volume-mute"; }
}

// --- 4. COMMENT & SEARCH SYSTEM ---
function saveComment() {
    const name = document.getElementById('userName').value;
    const msg = document.getElementById('commentMsg').value;
    const classId = document.getElementById('mTitle').innerText.replace(/\s/g, '');
    if(!name || !msg) return alert("Mohon lengkapi nama dan pesan!");

    const cmtData = { name, msg, time: new Date().toLocaleString('id-ID') };
    const all = JSON.parse(localStorage.getItem('memo_' + classId) || "[]");
    all.unshift(cmtData);
    localStorage.setItem('memo_' + classId, JSON.stringify(all));
    
    document.getElementById('userName').value = "";
    document.getElementById('commentMsg').value = "";
    loadComments(classId);
}

function loadComments(classId) {
    const display = document.getElementById('commentDisplay');
    const all = JSON.parse(localStorage.getItem('memo_' + classId) || "[]");
    display.innerHTML = all.map(c => `
        <div class="comment-item">
            <strong>${c.name}</strong>
            <p>${c.msg}</p>
            <small>${c.time}</small>
        </div>
    `).join("");
}

function filterKelas() {
    let val = document.getElementById('search').value.toUpperCase();
    document.querySelectorAll('.card').forEach(c => c.style.display = c.innerText.includes(val) ? "" : "none");
}