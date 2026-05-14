/* ============================================================
   अवधूत चिंतन गोशाळा निमित्त प्रॉडक्ट — Shared Data & Utilities
   All pages import this file. No Node.js, no server needed.
   ============================================================ */

// ===== PRODUCTS =====
const PRODUCTS = [
  {
    id: 1, emoji: '',
    name: 'गणपती',
    category: 'शेणापासून',
    desc:'.',
    price: 280, mrp: 350, weight: 'नग',
    bestseller: true
  },
  {
    id: 2, emoji: '',
    name: 'अगरबत्ती',
    category: 'घरगुती सुगंधित उत्पादने',
    desc: 'पूजा, ध्यान, सुगंधित वातावरण निर्मिती.',
    price: 320, mrp: 420, weight: 'नग.',
    bestseller: true
  },
  {
    id: 1, emoji: '',
    name: 'धूप',
    category: 'घरगुती सुगंधित उत्पादने',
    desc:'पूजा, ध्यान, सुगंधित वातावरण निर्मिती.',
    price: 280, mrp: 350, weight: 'नग',
    bestseller: true 
  },
  {
    id: 4, emoji: '🍃',
    name: 'पणती',
    category: 'शेणामातीपासुन',
    desc:'.',
    price: 120, mrp: 160, weight: 'नग',
    bestseller: true
  },
  {
    id: 5, emoji: '',
    name: 'गौरी',
    category: 'नैसर्गिक',
    desc: .',
    price: 450, mrp: 600, weight: 'नग',
    bestseller: true
  },
  {
    id: 6, emoji: '',
    name: '',
    category: '',
    desc: '.',
    price: 80, mrp: 100, weight: '1 किलो',
    bestseller: false
  },
  {
    id: 7, emoji: '🌽',
    name: 'ज्वारी पीठ',
    category: 'पीठ',
    desc: 'ताज्या ज्वारीपासून दगडी चक्कीवर दळलेले पीठ. भाकरीसाठी अत्युत्तम.',
    price: 60, mrp: 80, weight: '1 किलो',
    bestseller: false
  },
  {
    id: 8, emoji: '🥥',
    name: 'सुका खोबरा',
    category: 'नैसर्गिक',
    desc: 'कोकणातील ताज्या नारळापासून तयार केलेला उच्च दर्जाचा सुका खोबरा.',
    price: 180, mrp: 240, weight: '250 ग्रॅम',
    bestseller: false
  },
  {
    id: 9, emoji: '🟡',
    name: 'हळद पावडर',
    category: 'मसाले',
    desc: 'सांगली हळदीपासून तयार केलेली शुद्ध आणि सुगंधी हळद. औषधी गुणधर्माने भरपूर.',
    price: 90, mrp: 120, weight: '200 ग्रॅम',
    bestseller: false
  },
  {
    id: 10, emoji: '🫙',
    name: 'आंबा लोणचे',
    category: 'लोणचे',
    desc: 'कोकणच्या हापूस आंब्यापासून घरगुती पद्धतीने तयार केलेले चविष्ट लोणचे.',
    price: 200, mrp: 260, weight: '500 ग्रॅम',
    bestseller: true
  },
  {
    id: 11, emoji: '🫙',
    name: 'लिंबू लोणचे',
    category: 'लोणचे',
    desc: 'खास मराठमोळ्या पद्धतीने तयार केलेले तिखट-मसाल्याचे लिंबू लोणचे.',
    price: 160, mrp: 200, weight: '400 ग्रॅम',
    bestseller: false
  },
  {
    id: 12, emoji: '🌿',
    name: 'कढीपत्ता पावडर',
    category: 'मसाले',
    desc: 'सुकवलेल्या ताज्या कढीपत्त्यापासून बनवलेली पावडर. चटणी व भाजीत उपयोगी.',
    price: 70, mrp: 100, weight: '100 ग्रॅम',
    bestseller: false
  }
];

// ===== EVENTS =====
const EVENTS = [
  {
    day: '२५', month: 'जून', year: '२०२५',
    title: 'ग्रामोद्योग मेळावा — पुणे',
    desc: 'पुणे येथे होणाऱ्या भव्य ग्रामोद्योग मेळाव्यात आमची उत्पादने प्रदर्शित होतील. थेट खरेदीवर विशेष सवलत.',
    location: 'फर्ग्युसन कॉलेज मैदान, पुणे',
    time: 'सकाळी ९ ते संध्याकाळी ७',
    type: 'मेळावा', free: true,
    organizer: 'महाराष्ट्र ग्रामोद्योग संघ',
    status: 'upcoming'
  },
  {
    day: '०२', month: 'जुलै', year: '२०२५',
    title: 'नैसर्गिक उत्पादने प्रदर्शन — नाशिक',
    desc: 'नाशिकच्या प्रतिष्ठित कृषी मेळ्यात सहभाग. सेंद्रिय शेती व नैसर्गिक उत्पादनांचे प्रदर्शन.',
    location: 'जिल्हा परिषद सभागृह, नाशिक',
    time: 'सकाळी १० ते रात्री ८',
    type: 'प्रदर्शन', free: true,
    organizer: 'नाशिक कृषी विभाग',
    status: 'upcoming'
  },
  {
    day: '१५', month: 'जुलै', year: '२०२५',
    title: 'घरगुती मसाले बनवण्याची कार्यशाळा',
    desc: 'घरीच शुद्ध मसाले कसे बनवावेत याची व्यावहारिक कार्यशाळा. सर्वांसाठी मोफत प्रवेश.',
    location: 'श्री गणेश उत्पादन केंद्र, पुणे',
    time: 'सकाळी ११ ते दुपारी २',
    type: 'कार्यशाळा', free: true,
    organizer: 'श्री गणेश उत्पादने',
    status: 'upcoming'
  },
  {
    day: '२०', month: 'जुलै', year: '२०२५',
    title: 'गुरुपौर्णिमा विशेष सवलत उत्सव',
    desc: 'गुरुपौर्णिमेनिमित्त सर्व उत्पादनांवर ३०% विशेष सवलत. एक दिवसाचा महा-उत्सव.',
    location: 'ऑनलाइन (WhatsApp ऑर्डर)',
    time: 'संपूर्ण दिवस (२४ तास)',
    type: 'सवलत', free: false,
    organizer: 'श्री गणेश उत्पादने',
    status: 'upcoming'
  },
  {
    day: '०५', month: 'ऑगस्ट', year: '२०२५',
    title: 'महिला बचत गट मेळावा — कोल्हापूर',
    desc: 'कोल्हापूर जिल्ह्यातील महिला उद्योजकांचा मेळावा. स्वयंरोजगार व उत्पादनांचे प्रदर्शन.',
    location: 'शाहू महाराज सभागृह, कोल्हापूर',
    time: 'सकाळी ९ ते संध्याकाळी ५',
    type: 'मेळावा', free: true,
    organizer: 'जिल्हा महिला आयोग',
    status: 'upcoming'
  }
];

const PAST_EVENTS = [
  {
    day: '१५', month: 'मार्च', year: '२०२५',
    title: 'गुढीपाडवा विशेष उत्सव — पुणे',
    location: 'शनिवारवाडा, पुणे',
    attendees: '१२०+'
  },
  {
    day: '२६', month: 'जानेवारी', year: '२०२५',
    title: 'प्रजासत्ताक दिन कृषी मेळावा',
    location: 'लाल महाल प्रांगण, पुणे',
    attendees: '२५०+'
  },
  {
    day: '०१', month: 'जानेवारी', year: '२०२५',
    title: 'नवीन वर्ष सवलत उत्सव',
    location: 'ऑनलाइन (WhatsApp)',
    attendees: '५०० + ऑर्डर'
  },
  {
    day: '२५', month: 'डिसेंबर', year: '२०२४',
    title: 'हिवाळी उत्पादन प्रदर्शन',
    location: 'सिंहगड रोड, पुणे',
    attendees: '१८०+'
  },
  {
    day: '०१', month: 'नोव्हेंबर', year: '२०२४',
    title: 'दिवाळी महोत्सव फराळ मेळावा',
    location: 'बालगंधर्व सभागृह, पुणे',
    attendees: '३५०+'
  },
  {
    day: '२', month: 'ऑक्टोबर', year: '२०२४',
    title: 'गांधी जयंती — नैसर्गिक जीवन मेळावा',
    location: 'आगाखान पॅलेस, पुणे',
    attendees: '४०+'
  }
];

// ===== DEFAULT REVIEWS =====
const DEFAULT_REVIEWS = [
  {
    id: 1000, name: 'सुनीता पाटील', city: 'पुणे',
    product: 'शेंगदाणा तेल', rating: 5,
    text: 'अप्रतिम! खरोखरच शुद्ध तेल आहे. आमच्या घरात वापरून आता ३ महिने झाले. चव आणि सुगंध एकदम घरगुती घाण्याप्रमाणे आहे. आता बाजारचे तेल वापरणेच बंद केले.',
    date: '१५ मे २०२५', verified: true, helpful: 12, custom: false
  },
  {
    id: 1001, name: 'राजेंद्र शिंदे', city: 'नाशिक',
    product: 'कोल्हापुरी मसाला', rating: 5,
    text: 'कोल्हापुरी मसाला एकदम झकास आहे! मटण आमटी करताना टाकला आणि घर सुगंधाने भरून गेले. हॉटेलच्या चवीपेक्षा जास्त छान लागते घरची भाजी या मसाल्याने.',
    date: '०८ मे २०२५', verified: true, helpful: 8, custom: false
  },
  {
    id: 1002, name: 'प्रिया देशमुख', city: 'कोल्हापूर',
    product: 'आंबा लोणचे', rating: 5,
    text: 'आजीच्या हातचे लोणचे आठवले! एकदम घरगुती चव आहे. तिखट, मीठ आणि आंबट यांचे परफेक्ट balance आहे. मुलांनाही खूप आवडले. नक्कीच पुन्हा मागवेन.',
    date: '२ मे २०२५', verified: true, helpful: 15, custom: false
  },
  {
    id: 1003, name: 'संदीप कुलकर्णी', city: 'औरंगाबाद',
    product: 'गोडा मसाला', rating: 4,
    text: 'गोडा मसाला खूप सुगंधी आहे. आमटी एकदम वेगळ्या चवीची झाली. थोडा जास्त धणे जिरे असता तर आणखी चांगला झाला असता. एकूण खूप समाधानी आहे.',
    date: '२८ एप्रिल २०२५', verified: true, helpful: 5, custom: false
  },
  {
    id: 1004, name: 'मेघा जोशी', city: 'सोलापूर',
    product: 'शुद्ध मधुमक्षिका मध', rating: 5,
    text: 'खरोखरच शुद्ध मध आहे. बाजारात मिळणाऱ्या भेसळयुक्त मधाशी तुलनाच होत नाही. रंग, चव, घट्टपणा सगळे नैसर्गिक. मुलाच्या खोकल्यावर आल्याबरोबर मधाने खूप फरक पडला.',
    date: '२० एप्रिल २०२५', verified: true, helpful: 20, custom: false
  },
  {
    id: 1005, name: 'विजय तांबे', city: 'सातारा',
    product: 'नाचणी पीठ', rating: 4,
    text: 'नाचणी पीठ अतिशय चांगले आहे. थाळी आणि भाकरी एकदम मऊ झाली. पॅकेजिंग ही चांगली होती, वेळेत डिलिव्हरी झाली. कंपनीच्या सेवेबद्दल खूश आहे.',
    date: '१२ एप्रिल २०२५', verified: false, helpful: 3, custom: false
  }
];

// ===== LOCAL STORAGE HELPERS =====
function getReviews() {
  try {
    const stored = localStorage.getItem('shrigenasha_reviews');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return [...DEFAULT_REVIEWS];
}

// ===== REVIEW CARD HTML =====
function reviewCard(r) {
  return `
    <div class="card review-card">
      <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="review-text">"${r.text.length > 140 ? r.text.substring(0, 140) + '...' : r.text}"</p>
      <div class="reviewer">
        <div class="reviewer-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-place">📍 ${r.city} · ${r.date}</div>
        </div>
      </div>
    </div>`;
}

// ===== TOAST =====
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}
