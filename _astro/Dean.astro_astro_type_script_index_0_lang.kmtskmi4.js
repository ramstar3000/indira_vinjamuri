const i="/indira_vinjamuri",a={"train-to-gain":{icon:"I",title:"Train to Gain",subtitle:"Excellence & Consistency in Training",body:`<p>Every resident doctor, wherever they train, deserves fair, high-quality education.</p>
        <p><strong>I will deliver on the following:</strong></p>
        <ul>
          <li>Recruitment and retention in psychiatry are current necessary areas — I am already working on Phase 2 of the medical training review and will continue to deliver the best we can.</li>
          <li>A nationally standardised MRCPsych course with consistent expectations — I have been trying to work with MRCPsych leads across the 4 nations to standardise learning and develop exam support.</li>
          <li>Clearer support and structure for supervisors and tutors, to deliver training fit for purpose and understand curricular requirements — I have been working on the College supervision guidance document to make it fit for purpose.</li>
          <li>Integration of neuroscience and psychological formulation as a connected continuum, by improving teaching and supervision structures.</li>
          <li>Equal access to teaching, placements and development for LTFT, rural/remote and IMG resident doctors — I am part of College working groups, and I have written a <a href="${i}/documents/rural-remote-proposal.pdf" target="_blank">proposal for rural/remote run-through training</a>.</li>
        </ul>`},"time-to-thrive":{icon:"II",title:"Time to Thrive",subtitle:"Protecting Time, Capacity & Consultant Wellbeing",body:`<p>Our trainers are the backbone of psychiatry. Their contribution must be recognised, protected and appreciated.</p>
        <p><strong>I will champion:</strong></p>
        <ul>
          <li>The <a href="${i}/documents/rcpsych-bridge-programme.pdf" target="_blank">RCPsych Bridge Programme</a>, supporting the transition from resident doctor to consultant.</li>
          <li>Setting clear expectations for educational roles, with protected time in job plans that allows and promotes training — I am working with the College in understanding this better.</li>
          <li>Stronger boundaries between educational oversight and Trust processes, strengthening recruitment — including developing flexible job plans, adapting dual training to lead to dual clinical practice, e.g. protected sessions for consultants to practice therapy alongside or dual specialty posts.</li>
          <li>Practical steps to reduce burnout and improve consultant wellbeing, and help people understand and engage with the College.</li>
          <li>An opportunity for established consultants with experience and wisdom to contribute to academia — I am writing a <a href="${i}/documents/academia-for-consultants.pdf" target="_blank">proposal paper</a> to sit with the Academic strategy from the College.</li>
        </ul>`},"support-to-soar":{icon:"III",title:"Support to Soar",subtitle:"Supporting Educators & SAS Doctors Through a Clear College-Led Pathway",body:`<p>We must support those who support our resident doctors.</p>
        <p><strong>I will introduce:</strong></p>
        <ul>
          <li>A structured Educator Development Pathway, acknowledged and appreciated in job plans and appraisals.</li>
          <li>Standardised, competency-based training for supervisors, TPDs, tutors and Heads of School, spanning across Foundation, GP and Psychiatry training.</li>
          <li>Enhanced career development and recognition for SAS doctors — train them to train. Work on enhanced portfolio pathways for LED doctors — I am in conversation with portfolio providers regarding this.</li>
          <li>CPD-accredited modules to understand and develop education, and a College-approved educator status.</li>
          <li>Support the wellbeing of residents and trainers and identify local, regional and national pathways for this.</li>
        </ul>`},"nourish-to-flourish":{icon:"IV",title:"Nourish to Flourish",subtitle:"Modernising Psychiatry for the Future",body:`<p>Our training must evolve with the changing landscape of mental health.</p>
        <p><strong>I will promote:</strong></p>
        <ul>
          <li>Quality recruitment in Psychiatry and work on job satisfaction and retention.</li>
          <li>Digital psychiatry, academic psychiatry, simulation and AI-enabled learning — this becomes a must in our lives. I will aim to bring in regional, national and international expertise to enhance our local learning.</li>
          <li>A holistic model integrating neuroscience, psychological formulation and social determinants, and establish multi-disciplinary team working. I have worked on the PA guidance and MPAC committees.</li>
          <li>Training aligned with community transformation and new service models — prepare residents for change management. I have been part of GA faculty and participated in preparing for change for years.</li>
          <li>Leadership and management development for residents and early-career consultants, to prevent burnout.</li>
          <li>Academic support and opportunities for experienced consultants who can contribute to the profession.</li>
        </ul>`}},n=document.getElementById("pillar-modal"),r=document.getElementById("modal-icon"),l=document.getElementById("modal-title"),s=document.getElementById("modal-subtitle"),d=document.getElementById("modal-body");function c(e){const t=a[e];t&&(r.textContent=t.icon,l.textContent=t.title,s.textContent=t.subtitle,d.innerHTML=t.body,n.classList.add("active"),document.body.style.overflow="hidden")}function o(){n.classList.remove("active"),document.body.style.overflow=""}document.querySelectorAll(".pillar[data-pillar]").forEach(e=>{e.addEventListener("click",()=>c(e.dataset.pillar))});n.querySelector(".pillar-modal-close").addEventListener("click",o);n.addEventListener("click",e=>{e.target===n&&o()});document.addEventListener("keydown",e=>{e.key==="Escape"&&o()});
