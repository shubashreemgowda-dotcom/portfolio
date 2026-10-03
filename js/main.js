/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT
 * Candidate: SHUBHASHREE M
 * Profile: Civil Engineering Student | Technology Enthusiast | Project Builder
 * Features: Project Filter, Detailed Project Modals, Mobile Menu, Scroll Spy,
 *           Contact Form Validation, Accessible Modal Controls
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initProjectFilter();
  initProjectModals();
  initContactForm();
  setCurrentYear();
});

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT & SCROLL SPY
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Add shadow when scrolled
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Scroll spy: highlight current section in navigation
    let currentId = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const toggleIcon = navToggle?.querySelector('i');

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    if (toggleIcon) {
      toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  });

  // Close mobile drawer upon selecting any section
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. PROJECT CATEGORY FILTER
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Toggle active tab style
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categoryAttr = card.getAttribute('data-category') || '';
        const categories = categoryAttr.split(' ');

        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. DETAILED PROJECT MODALS (FACTUAL DATA ONLY)
   -------------------------------------------------------------------------- */
const PROJECT_DETAILS = {
  bloodconnect: {
    name: 'BloodConnect',
    category: 'Healthcare / Web Development',
    team: 'SparkVision',
    event: 'Healthcare Web Initiative',
    problem: 'Difficulty and critical delays in coordination between hospitals, blood banks, donors, colleges, and blood seekers during sudden shortages and emergency blood requirements.',
    solution: 'A specialized digital coordination website providing designated, role-based dashboards to streamline donor identification, hospital approvals, and inventory monitoring.',
    dashboards: [
      'Hospital Dashboard',
      'Blood Bank Dashboard',
      'Donor Dashboard',
      'College Dashboard',
      'Blood Seeker Dashboard'
    ],
    features: [
      'Hospital-controlled SOS approval system',
      'Real-time blood stock management',
      'Automated blood shortage detection',
      'Demand tracking and historical information logging',
      'Proximity-based donor matching',
      'SOS donor notification using structured distance waves (0–2 km, 2–5 km, 5–10 km, 10–20 km)',
      'Hospital and blood-bank verification workflows',
      'Role-based dashboards and permissions',
      'Blood availability coordination'
    ],
    tech: 'Python, Django, Web Development',
    role: 'Project contributor as part of Team SparkVision, focusing on coordination workflows and role-based portal concepts.',
    design: 'Clean, premium healthcare user interface designed for urgent and high-reliability scenarios.'
  },

  industrialshield: {
    name: 'IndustrialShield',
    category: 'Industrial Cybersecurity',
    team: 'Hackathon Team',
    event: '24-Hour Hackathon',
    problem: 'Industrial control systems and connected operational assets face severe security gaps from unauthorized physical and network access that standard perimeter firewalls cannot adequately monitor.',
    solution: 'An industrial threat detection and security platform designed to protect industrial environments by monitoring assets, detecting suspicious behaviour, calculating risk scores, and supporting authorized operator access.',
    features: [
      'Automated asset discovery and device identification',
      'Network traffic monitoring and anomaly detection',
      'Baseline behaviour analysis for normal operating states',
      'Dynamic risk scoring and threat detection pipeline',
      'Potential exposure identification across industrial infrastructure',
      'Authorized Operator Verification system',
      'Face-ID based operator verification',
      'Instant security alerts for unauthorized physical/digital attempts',
      'Liveness detection concept for protection against photo spoofing'
    ],
    concepts: [
      'Asset discovery',
      'Behaviour baselines',
      'Protocol and frequency analysis',
      'Anomaly detection',
      'Risk scoring',
      'Threat detection pipeline',
      'Network and device relationships',
      'Breadth-First Search (BFS) concepts where applicable'
    ],
    sampleOutput: {
      status: 'NORMAL',
      flow: 'Sensor-01 → Gateway-01',
      protocol: 'MQTT',
      score: '20 (Risk Level: LOW)',
      devices: 'Gateway, PLC, HMI, SCADA'
    },
    tech: 'Python, Cybersecurity Architecture, Network Graph Concepts, Face Verification Modules',
    role: 'Technical and detection-focused contributor responsible for detection pipeline logic, asset discovery, anomaly detection baselines, risk scoring, and threat analysis concepts (collaborative team project; not solely responsible).'
  },

  trustinbox: {
    name: 'TrustInbox',
    category: 'Blockchain & Cybersecurity / Software',
    team: 'Code Breakers (Team ID: 123735)',
    event: 'Smart India Hackathon 2026 (Problem Statement ID: SIH26106)',
    fullTitle: 'AI-Powered Email Threat Detection, GeoLocation and Forensic Intelligence Platform',
    problem: 'Conventional email security classifies emails simply as spam after delivery, failing to prevent user exploitation prior to opening or supply actionable forensic intelligence.',
    solution: 'A unified platform that connects AI email threat detection with geolocation and forensic intelligence so suspicious emails are intercepted before opening and investigated beyond basic spam classification.',
    workflow: 'Install/Login → Email → Pre-Opening Protection → Threat Detection → Geolocation → Relationship Graph → Forensic Investigation → Forensic Report',
    dualLayer: [
      '1. Common Users Layer: Fast pre-opening safety indicators and summaries preventing accidental malware/phishing triggers.',
      '2. Cybersecurity Teams / Investigators Layer: Deep forensic tools, attack relationship graphs, IP geolocation intelligence, and comprehensive forensic report generation.'
    ],
    features: [
      'Pre-opening threat summary before viewing suspicious content',
      'AI-powered email threat detection logic',
      'Active protection before opening high-risk emails',
      'Geolocation intelligence mapping',
      'Attack relationship graphs showing source connections',
      'Forensic investigation workbench',
      'Automated forensic report generation',
      'Dual-layer protection architecture'
    ],
    tech: 'AI Concepts, Email Security Protocols, Geolocation APIs, Graph Analytics, Python',
    role: 'Core team contributor with Team Code Breakers for SIH 2026, working on workflow architecture and dual-layer security interfaces.'
  },

  foodloop: {
    name: 'FoodLoop AI',
    category: 'AI / Sustainability',
    team: 'Independent Project Initiative',
    event: 'AI & Sustainable Tech Showcase',
    fullTitle: 'AI-Powered Smart Food Waste Reduction and Sustainable Redistribution Ecosystem for Institutional Kitchens and Food Processing Units',
    problem: 'Substantial quantities of consumable surplus food are generated daily in institutional kitchens and processing plants, often discarded because of uncoordinated redistribution systems.',
    solution: 'An AI-powered software ecosystem created to minimize food waste at the source and enable smarter, coordinated redistribution of usable surplus food.',
    targetEnvironments: [
      'Institutional kitchens (universities, hostels, cafeterias)',
      'Food processing units and distribution warehouses'
    ],
    features: [
      'Institutional food waste tracking',
      'AI-assisted decision-making for inventory consumption and shelf-life',
      'Sustainable redistribution logistics coordination',
      'Better utilization of edible surplus food stocks',
      'Environmental and waste impact reduction focus'
    ],
    tech: 'Artificial Intelligence Concepts, Decision Logic, Web Interfaces, Data Analytics',
    role: 'Project conceptualization and system workflow designer for the AI + sustainability framework.'
  },

  irrigation: {
    name: 'Smart Irrigation System',
    category: 'IoT / Agriculture',
    team: 'Hackathon Project',
    event: 'MSME Idea Hackathon 6.0 (SVCE Host Institution)',
    problem: 'Over-irrigation and unmonitored agricultural water supply deplete valuable water resources and degrade soil conditions in rural and institutional agricultural plots.',
    solution: 'An automated IoT irrigation system designed to reduce unnecessary water usage by monitoring soil moisture and environmental rainfall in real time.',
    budgetDetails: {
      prototype: 'Approximately ₹3,000 – ₹4,000',
      proposed: 'Approximately ₹1 Lakh'
    },
    features: [
      'Real-time soil moisture sensor monitoring',
      'Rain sensor integration to prevent watering during precipitation',
      'Automated irrigation decision controller',
      'IoT-based environmental status monitoring',
      'Significant reduction in freshwater wastage'
    ],
    tech: 'Soil Moisture Sensors, Rain Sensor Module, Microcontroller logic, IoT Architecture',
    role: 'Idea formulation, sensor integration concept, budget estimation, and hackathon presentation at SVCE.'
  },

  traffic: {
    name: 'Smart Traffic Management System',
    category: 'Smart City / Engineering + Technology',
    team: 'Engineering Showcase',
    event: 'Civil & Smart City Innovation',
    problem: 'Urban congestion, static signaling delays, and traffic bottlenecks waste commuter hours and heighten carbon emissions in expanding metropolitan centers.',
    solution: 'A technology-based solution focused on improving traffic management and reducing inefficiencies in urban traffic flow, combining Civil Engineering transportation fundamentals with digital control logic.',
    features: [
      'Urban traffic flow optimization concepts',
      'Coordination between road layout geometries and digital signaling',
      'Traffic queue reduction strategies',
      'Application of smart city civil infrastructure principles'
    ],
    tech: 'Civil Engineering Transportation Concepts, Digital Control Flow, Smart City Systems',
    role: 'Developer bridging Civil Engineering transportation planning with digital optimization algorithms.'
  },

  civilab: {
    name: 'CiviLab',
    category: 'Civil Engineering + Technology',
    team: 'Engineering Project',
    event: 'Civil Tech Digital Project',
    problem: 'Civil engineering laboratory workflows and material calculation formulas frequently rely on disconnected paper recording or static manual calculations.',
    solution: 'A dedicated project uniting core Civil Engineering concepts with a modern digital and software approach to improve engineering computation accessibility.',
    features: [
      'Digital computation for core Civil Engineering formulas',
      'Software-based testing and data entry workflows',
      'Intuitive user interface tailored to engineering students and technicians',
      'Integration of traditional civil criteria into digital utilities'
    ],
    tech: 'Civil Engineering Principles, Web Technologies (HTML, CSS, JS), Computational Logic',
    role: 'Creator and developer implementing civil engineering formulas into accessible digital software interfaces.'
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');
  const viewBtns = document.querySelectorAll('.view-details-btn');

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const data = PROJECT_DETAILS[projId];
      if (!data) return;

      modalTitle.textContent = data.name;
      modalCategory.textContent = data.category;

      let bodyHtml = '';

      if (data.fullTitle) {
        bodyHtml += `<p class="modal-lead"><strong>Full Title:</strong> ${data.fullTitle}</p>`;
      }

      if (data.team || data.event) {
        bodyHtml += `<div class="modal-meta-bar" style="background:#eff6ff; padding:0.6rem 0.85rem; border-radius:6px; margin:0.85rem 0; font-size:0.88rem; color:#1e40af;">`;
        if (data.team) bodyHtml += `<strong>Team:</strong> ${data.team} &nbsp;&bull;&nbsp; `;
        if (data.event) bodyHtml += `<strong>Event / Context:</strong> ${data.event}`;
        bodyHtml += `</div>`;
      }

      bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-triangle-exclamation"></i> Problem Statement</h4>`;
      bodyHtml += `<p>${data.problem}</p>`;

      bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-lightbulb"></i> Proposed Solution</h4>`;
      bodyHtml += `<p>${data.solution}</p>`;

      if (data.workflow) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-arrow-right-arrow-left"></i> Core Workflow</h4>`;
        bodyHtml += `<div class="modal-code-block">${data.workflow}</div>`;
      }

      if (data.dualLayer) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Dual-Layer Architecture</h4><ul class="modal-bullet-list">`;
        data.dualLayer.forEach((item) => {
          bodyHtml += `<li>${item}</li>`;
        });
        bodyHtml += `</ul>`;
      }

      if (data.dashboards) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-table-columns"></i> Dedicated Role Dashboards</h4><ul class="modal-bullet-list">`;
        data.dashboards.forEach((d) => {
          bodyHtml += `<li>${d}</li>`;
        });
        bodyHtml += `</ul>`;
      }

      if (data.features && data.features.length) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-circle-check"></i> Key Features</h4><ul class="modal-bullet-list">`;
        data.features.forEach((feat) => {
          bodyHtml += `<li>${feat}</li>`;
        });
        bodyHtml += `</ul>`;
      }

      if (data.concepts && data.concepts.length) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-brain"></i> Technical Concepts Applied</h4><ul class="modal-bullet-list">`;
        data.concepts.forEach((concept) => {
          bodyHtml += `<li>${concept}</li>`;
        });
        bodyHtml += `</ul>`;
      }

      if (data.sampleOutput) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-terminal"></i> Example Detection Output</h4>`;
        bodyHtml += `<div class="modal-code-block">STATUS: ${data.sampleOutput.status}\nTRAFFIC: ${data.sampleOutput.flow}\nPROTOCOL: ${data.sampleOutput.protocol}\nRISK SCORE: ${data.sampleOutput.score}\nPOTENTIALLY EXPOSED: ${data.sampleOutput.devices}</div>`;
      }

      if (data.budgetDetails) {
        bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-indian-rupee-sign"></i> Budget Overview</h4>`;
        bodyHtml += `<p><strong>Prototype Budget:</strong> ${data.budgetDetails.prototype}<br/><strong>Proposed Idea Budget:</strong> ${data.budgetDetails.proposed}</p>`;
      }

      bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-laptop-code"></i> Technologies &amp; Environment</h4>`;
      bodyHtml += `<p>${data.tech}</p>`;

      bodyHtml += `<h4 class="modal-section-title"><i class="fa-solid fa-user-tag"></i> Candidate Contribution &amp; Role</h4>`;
      bodyHtml += `<p>${data.role}</p>`;

      modalBody.innerHTML = bodyHtml;
      openModal();
    });
  });

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);

  // Close when clicking backdrop outside dialog
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM HANDLING
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const status = document.getElementById('contact-form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

    // Simulate sending message locally with clean feedback
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      status.className = 'form-status success';
      status.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you for your message. SHUBHASHREE M has received your inquiry and will connect with you shortly.';
      form.reset();

      setTimeout(() => {
        status.style.display = 'none';
        status.className = 'form-status';
      }, 6000);
    }, 900);
  });
}

/* --------------------------------------------------------------------------
   6. DYNAMIC CURRENT YEAR
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
