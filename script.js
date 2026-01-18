/**
 * ============================================================
 * PROJECT   : TEN DELEGATION 2026 - SMAN 10 BOGOR
 * AUTHOR    : FARREL AKBAR NAUFAL RAMADHAN
 * INSTAGRAM : @farrelize
 * VERSION   : 1.0.0 (The Golden Legacy Edition)
 * ============================================================
 */

// --- 1. INITIALIZE & VISUAL EFFECTS ---
document.addEventListener('DOMContentLoaded', () => {
    // Render Kartu Kelas (Urutan A-I)
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

    // Render List Ekskul dengan Quote Eksklusif
    const ekskulCont = document.getElementById('ekskulContainer');
    const dataEkskul = [
        { nama: "Paskib", q: "Disiplin adalah nafas kami, kehormatan adalah segalanya." },
        { nama: "Pramuka", q: "Satu pandu, satu nusa, abadi dalam karya." },
        { nama: "Pmr", q: "Inter Arma Caritas, kemanusiaan di atas segalanya." },
        { nama: "Literasi", q: "Membaca dunia, menuliskan sejarah baru." },
        { nama: "EC", q: "Language is the bridge to the global future." },
        { nama: "Kirs", q: "Inovasi lahir dari rasa ingin tahu yang tak terbatas." },
        { nama: "Basket", q: "Win the heart before you win the game." },
        { nama: "Futsal", q: "Solidaritas di lapangan, saudara di kehidupan." },
        { nama: "Tradi", q: "Melestarikan akar, mempercantik masa depan." },
        { nama: "Moderen", q: "Express yourself through every beat and move." },
        { nama: "Teater", q: "Dunia adalah panggung, dan kita adalah pemeran utamanya." },
        { nama: "Rohis", q: "Membangun karakter mulia di bawah ridho-Nya." },
        { nama: "Rohkris", q: "Kasih yang mempersatukan, iman yang menguatkan." },
        { nama: "Handball", q: "Power, speed, and unstoppable teamwork." },
        { nama: "Rumpalas", q: "Alam adalah guru terbaik bagi mereka yang mendaki." },
        { nama: "Padus", q: "Harmoni suara, menyatukan jiwa dalam nada." },
        { nama: "DCS", q: "Digital creativity, shaping the world of tomorrow." }
    ];

    if(ekskulCont) {
        dataEkskul.forEach(e => {
            const div = document.createElement('div');
            div.className = 'ekskul-card';
            div.innerHTML = `<span>${e.nama.toUpperCase()}</span>`;
            div.onclick = () => openOrg(e.nama, e.q); 
            ekskulCont.appendChild(div);
        });
    }

    // Preloader Logic
    setTimeout(() => {
        const loader = document.getElementById('loader') || document.querySelector('.loading-screen');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }
    }, 2000);
});

// Efek Partikel & Cursor Custom
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    if(cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    }
});

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
setInterval(createDust, 400);

// --- 2. DATA KELAS ---
const dataKelas = [
    { id: 'A', names: [{ nama: "Agus S", ttl: "Bogor, 01 Jan 2008", alamat: "Pajajaran", ig: "@agus", quote: "Pioneer of Class A." }], groupCaptions: ["Alpha vibes"] },
    { id: 'B', names: [{ nama: "Budi P", ttl: "Bogor, 02 Feb 2008", alamat: "Baranangsiang", ig: "@budi", quote: "Bravo spirit." }], groupCaptions: ["Bravo moments"] },
    { id: 'C', names: [{ nama: "Citra L", ttl: "Bogor, 03 Mar 2008", alamat: "Taman Yasmin", ig: "@citra", quote: "Charlie's pride." }], groupCaptions: ["Charlie story"] },
    { 
        id: 'D', 
        names: [
            { nama: "Ahri", ttl: "Bogor, 12 Mei 2008", alamat: "Jl. Pajajaran No. 10", ig: "@ahri_id", quote: "Stay Gold, Legacy Untold." },
            { nama: "Annisa Luthfiyah Napitupulu", ttl: "Jakarta, 05 April 2008", alamat: "Komp. IPB", ig: "@annisa_luth", quote: "Bukan sekadar kawan, tapi bagian dari sejarah." },
            { nama: "Annisa Putri Zahra", ttl: "Bogor, 18 Ags 2008", alamat: "Ciomas", ig: "@annisa_pz", quote: "Beyond the horizon." },
            { nama: "Ardiani Kayla Radisty", ttl: "Bogor, 21 Okt 2008", alamat: "Laladon", ig: "@kayla", quote: "The golden era of youth." },
            { nama: "Audya Rahmadina Kamila", ttl: "Bogor, 02 Feb 2008", alamat: "Paledang", ig: "@audya", quote: "Not just a class, but a dynasty." },
            { nama: "Augustine Almaghfira", ttl: "Bogor, 15 Ags 2008", alamat: "Ciwaringin", ig: "@augustine", quote: "Menolak lupa pada setiap tawa." },
            { nama: "Brilliant Ayu Widia Putri", ttl: "Bogor, 03 Mar 2008", alamat: "Kedung Halang", ig: "@brilliant", quote: "Satu dekade, seribu cerita." },
            { nama: "Bunga Nur Aprilia", ttl: "Bogor, 10 Apr 2008", alamat: "Tanah Baru", ig: "@bunga", quote: "Gold of memories." },
            { nama: "Chelsea Meirianni Magirintua", ttl: "Medan, 22 Mei 2008", alamat: "Semplak", ig: "@chelsea", quote: "The legend continues." },
            { nama: "Davin Anjarianto", ttl: "Bogor, 11 Jan 2008", alamat: "Cibinong", ig: "@davin", quote: "Jejak yang tak terhapus." },
            { nama: "Devan Rama Radithya", ttl: "Bogor, 30 Jun 2008", alamat: "Vila Bogor Indah", ig: "@devan", quote: "Still dreaming, still achieving." },
            { nama: "Farrel Akbar Naufal Ramadhan", ttl: "Bogor, 14 Okt 2008", alamat: "Cimanggu", ig: "@farrel", quote: "Classic taste, future pace." },
            { nama: "Hasna Khalilah Hadi", ttl: "Bogor, 07 Jul 2008", alamat: "Yasmin", ig: "@hasna", quote: "Make it gold." },
            { nama: "Jihan Aqilah Azzahra", ttl: "Bogor, 25 Des 2008", alamat: "Katulampa", ig: "@jihan", quote: "Elegance never fades." },
            { nama: "Kalyca Alisha Aurellia", ttl: "Bogor, 09 Sep 2008", alamat: "Bogor Baru", ig: "@kalyca", quote: "Limitless vision." },
            { nama: "Luthfiya Margaretha", ttl: "Bogor, 16 Mar 2008", alamat: "Bantarjati", ig: "@luthfiya", quote: "The future is ours." },
            { nama: "Marsel Nehemia Barus", ttl: "Bogor, 01 Mei 2008", alamat: "Sindang Barang", ig: "@marsel", quote: "Keep the vibe." },
            { nama: "Mohammad Aria Kundrat", ttl: "Bogor, 19 Nov 2008", alamat: "Ciomas Permai", ig: "@aria", quote: "Golden memories." },
            { nama: "Mohammad Youri Januar", ttl: "Bogor, 01 Jan 2008", alamat: "Gunung Batu", ig: "@youri", quote: "Warisan abadi 2026." },
            { nama: "Mozha Faulina", ttl: "Bogor, 14 Feb 2008", alamat: "Mulyaharja", ig: "@mozha", quote: "Classy and flashy." },
            { nama: "Muhammad Anfi", ttl: "Bogor, 20 Jun 2008", alamat: "Kebon Pedes", ig: "@anfi", quote: "Two thousand twenty six." },
            { nama: "Muhammad Faathir Milanneto", ttl: "Bogor, 05 Mei 2008", alamat: "Dramaga", ig: "@faathir", quote: "High spirits." },
            { nama: "Muhammad Refin Al Fachrizi", ttl: "Bogor, 11 Ags 2008", alamat: "Bubulak", ig: "@refin", quote: "The journey is the reward." },
            { nama: "Nadya Delia Permata", ttl: "Bogor, 03 Sep 2008", alamat: "Taman Kencana", ig: "@nadya", quote: "Boundless heart." },
            { nama: "Naufal Ahmadinejad", ttl: "Bogor, 12 Jul 2008", alamat: "Bojong Gede", ig: "@naufal", quote: "Memories last forever." },
            { nama: "Raisa Zafira Rahmayani", ttl: "Bogor, 17 Apr 2008", alamat: "Tajur", ig: "@raisa", quote: "To the moon." },
            { nama: "Raisya Putri Gunawan", ttl: "Bogor, 24 Mei 2008", alamat: "Ciawi", ig: "@raisya", quote: "A story worth telling." },
            { nama: "Revalina Gryska Zivanna Usior", ttl: "Papua, 13 Ags 2008", alamat: "Komp. Brimob", ig: "@reva", quote: "In love with moments." },
            { nama: "Rizky Noval Prasetyo", ttl: "Bogor, 08 Nov 2008", alamat: "Curug", ig: "@rizky", quote: "Forever young." },
            { nama: "Sheila Aulia Febriyanti", ttl: "Bogor, 01 Feb 2008", alamat: "Pajajaran Regency", ig: "@sheila", quote: "Legacy starts here." },
            { nama: "Shevira Bianika Candra", ttl: "Bogor, 28 Mar 2008", alamat: "Sukaraja", ig: "@shevira", quote: "Defining excellence." },
            { nama: "Silvia Anggraeni", ttl: "Bogor, 06 Jun 2008", alamat: "Empang", ig: "@silvia", quote: "Hati bersahaja." },
            { nama: "Talitha Edgina Fikra Prameswari Pountung", ttl: "Bogor, 20 Okt 2008", alamat: "Sentul", ig: "@talitha", quote: "Big memories." },
            { nama: "Vina Khoirunnisa", ttl: "Bogor, 15 Jul 2008", alamat: "Menteng", ig: "@vina", quote: "Classy vibes." },
            { nama: "Zahiroh Syifa Qolbi", ttl: "Bogor, 29 Sep 2008", alamat: "Cilendek", ig: "@zahiroh", quote: "Shine bright." }
        ],
        groupCaptions: ["Squad Kantin", "Study Hard", "Class Vibes", "Delta Force", "The Legacy"] 
    },
    { id: 'E', names: [{ nama: "Eka W", ttl: "Bogor, 04 Apr 2008", alamat: "Cimanggu", ig: "@", quote: "Echo pride." }], groupCaptions: ["Echo story"] },
    { id: 'F', names: [{ nama: "Fahri A", ttl: "Bogor, 05 Mei 2008", alamat: "Semplak", ig: "@", quote: "Foxtrot legend." }], groupCaptions: ["Foxtrot vibes"] },
    { id: 'G', names: [{ nama: "Gita R", ttl: "Bogor, 06 Jun 2008", alamat: "Sentul", ig: "@", quote: "Golf unity." }], groupCaptions: ["Golf story"] },
    { id: 'H', names: [{ nama: "Hendra K", ttl: "Bogor, 07 Jul 2008", alamat: "Dramaga", ig: "@", quote: "Hotel legacy." }], groupCaptions: ["Hotel vibes"] },
    { id: 'I', names: [{ nama: "Indra M", ttl: "Bogor, 08 Agu 2008", alamat: "Ciomas", ig: "@", quote: "India vision." }], groupCaptions: ["India story"] }
];

// --- 3. MODAL & NAVIGATION ---
function openModal(kelas) {
    const m = document.getElementById('modal');
    const classId = `12${kelas.id}`;
    document.getElementById('mTitle').innerText = "CLASS " + classId;
    document.getElementById('mMainImg').src = `img/${classId}.jpg`;
    document.getElementById('player').src = `music/${classId}.mp3`;

    const sCont = document.getElementById('mStudents');
    sCont.innerHTML = "";
    kelas.names.forEach((murid, index) => {
        const fotoMurid = `img/murid/${classId}_${index + 1}.jpg`;
        const q = murid.quote || "Stay Gold."; 
        
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <img src="${fotoMurid}" onerror="this.src='https://via.placeholder.com/200'">
            <span class="name">${murid.nama}</span>
            <span class="quote">"${q}"</span>
        `;
        card.onclick = () => openZoom(fotoMurid, murid.nama, q, murid);
        sCont.appendChild(card);
    });

    const gCont = document.getElementById('mGroups');
    gCont.innerHTML = "";
    for(let i=1; i<=5; i++) {
        const imgSrc = `img/${classId}_g${i}.jpg`;
        const cap = kelas.groupCaptions[i-1] || "Memories";
        gCont.innerHTML += `
            <div class="group-item" onclick="openZoom('${imgSrc}', 'Moment #${i}', '${cap}', null)">
                <img src="${imgSrc}" onerror="this.style.display='none'">
                <div class="group-caption"><h4>MOMENT #${i}</h4><p>${cap}</p></div>
            </div>`;
    }

    m.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => m.classList.add('active'), 10);
    loadComments(classId);
}

function closeModal() {
    const m = document.getElementById('modal');
    m.classList.remove('active');
    setTimeout(() => {
        m.style.display = "none";
        document.body.style.overflow = "auto";
        if(document.getElementById('player')) document.getElementById('player').pause();
    }, 500);
}

function openZoom(src, name, quote, bio) {
    const zm = document.getElementById('zoomModal');
    document.getElementById('zoomImg').src = src;
    document.getElementById('zoomName').innerText = name;
    document.getElementById('zoomQuote').innerText = quote ? `"${quote}"` : "";
    
    const bioCont = document.getElementById('zoomBio');
    if(bio && bio.ttl) {
        bioCont.innerHTML = `
            <div class="bio-item"><i class="fas fa-calendar-alt"></i> <span>${bio.ttl}</span></div>
            <div class="bio-item"><i class="fas fa-map-marker-alt"></i> <span>${bio.alamat}</span></div>
            <div class="bio-item"><i class="fab fa-instagram"></i> <span>${bio.ig}</span></div>
        `;
    } else { bioCont.innerHTML = ""; }
    zm.style.display = "flex";
}

function closeZoom() { document.getElementById('zoomModal').style.display = "none"; }

function openOrg(title, subtitle) {
    openZoom(`img/org/${title.toLowerCase()}.jpg`, title.toUpperCase(), subtitle, null);
}

function toggleMusic() {
    const p = document.getElementById('player');
    const s = document.getElementById('speakerIcon');
    if (p.paused) { p.play(); s.className = "fas fa-volume-up fa-beat"; } 
    else { p.pause(); s.className = "fas fa-volume-mute"; }
}

// --- 4. COMMENT & SEARCH ---
function saveComment() {
    const name = document.getElementById('userName').value;
    const msg = document.getElementById('commentMsg').value;
    const title = document.getElementById('mTitle').innerText.replace(/\s/g, '');
    if(!name || !msg) return alert("Isi data!");
    const cmt = { name, msg, time: new Date().toLocaleString('id-ID') };
    const all = JSON.parse(localStorage.getItem('memo_' + title) || "[]");
    all.unshift(cmt);
    localStorage.setItem('memo_' + title, JSON.stringify(all));
    document.getElementById('userName').value = "";
    document.getElementById('commentMsg').value = "";
    loadComments(title);
}

function loadComments(id) {
    const display = document.getElementById('commentDisplay');
    const all = JSON.parse(localStorage.getItem('memo_' + id) || "[]");
    display.innerHTML = all.map(c => `<div class="comment-item"><strong>${c.name}</strong><p>${c.msg}</p><small>${c.time}</small></div>`).join("");
}

function filterKelas() {
    let val = document.getElementById('search').value.toUpperCase();
    document.querySelectorAll('.card').forEach(c => c.style.display = c.innerText.includes(val) ? "" : "none");
}