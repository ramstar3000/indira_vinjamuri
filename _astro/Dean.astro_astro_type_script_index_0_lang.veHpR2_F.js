const o={"train-to-gain":{icon:"I",title:"Train to Gain",subtitle:"Excellence & Consistency in Training",body:`<p>Every resident doctor, wherever they train, deserves fair, high-quality education.</p>
        <p><strong>I will deliver:</strong></p>
        <ul>
          <li>A nationally standardised MRCPsych course with consistent expectations — I have been working with MRCPsych leads across the 4 nations to standardise learning and develop exam support.</li>
          <li>Clearer support and structure for supervisors and tutors, to deliver training fit for purpose and understand curricular requirements.</li>
          <li>Integration of neuroscience and psychological formulation as a connected continuum, by improving teaching and supervision structures.</li>
          <li>Equal access to teaching, placements and development for LTFT, rural/remote and IMG resident doctors — I have written a proposal for rural/remote run-through training.</li>
        </ul>`},"time-to-thrive":{icon:"II",title:"Time to Thrive",subtitle:"Protecting Time, Capacity & Consultant Wellbeing",body:`<p>Our trainers are the backbone of psychiatry. Their contribution must be recognised, protected and appreciated.</p>
        <p><strong>I will champion:</strong></p>
        <ul>
          <li>The RCPsych Bridge Programme, supporting the transition from resident doctor to consultant (see proposal paper).</li>
          <li>Clear expectations for educational roles, with protected time in job plans that allows and promotes training.</li>
          <li>Stronger boundaries between educational oversight and Trust processes, strengthening recruitment — including developing flexible job plans, adapting dual training to lead to dual clinical practice, e.g. protected sessions for consultants to practice therapy alongside or dual specialty posts.</li>
          <li>Practical steps to reduce burnout and improve consultant wellbeing, and help people understand and engage with the College.</li>
        </ul>`},"support-to-soar":{icon:"III",title:"Support to Soar",subtitle:"Supporting Educators & SAS Doctors Through a Clear College-Led Pathway",body:`<p>We must support those who support our resident doctors.</p>
        <p><strong>I will introduce:</strong></p>
        <ul>
          <li>A structured Educator Development Pathway, acknowledged and appreciated in job plans and appraisals.</li>
          <li>Standardised, competency-based training for supervisors, TPDs, tutors and Heads of School, spanning across Foundation, GP and Psychiatry training.</li>
          <li>Enhanced career development and recognition for SAS doctors — train them to train.</li>
          <li>CPD-accredited modules to understand and develop education, and a College-approved educator status.</li>
          <li>Support the wellbeing of residents and trainers.</li>
        </ul>`},"nourish-to-flourish":{icon:"IV",title:"Nourish to Flourish",subtitle:"Modernising Psychiatry for the Future",body:`<p>Our training must evolve with the changing landscape of mental health.</p>
        <p><strong>I will promote:</strong></p>
        <ul>
          <li>Quality recruitment in Psychiatry and work on job satisfaction and retention.</li>
          <li>Digital psychiatry, academic psychiatry, simulation and AI-enabled learning — this becomes a must in our lives.</li>
          <li>A holistic model integrating neuroscience, psychological formulation and social determinants, and establish multi-disciplinary team working.</li>
          <li>Training aligned with community transformation and new service models — prepare residents for change management.</li>
          <li>Leadership and management development for residents and early-career consultants, to prevent burnout.</li>
          <li>Academic support and opportunities for experienced consultants who can contribute to the profession.</li>
        </ul>`}},n=document.getElementById("pillar-modal"),a=document.getElementById("modal-icon"),r=document.getElementById("modal-title"),l=document.getElementById("modal-subtitle"),s=document.getElementById("modal-body");function d(e){const t=o[e];t&&(a.textContent=t.icon,r.textContent=t.title,l.textContent=t.subtitle,s.innerHTML=t.body,n.classList.add("active"),document.body.style.overflow="hidden")}function i(){n.classList.remove("active"),document.body.style.overflow=""}document.querySelectorAll(".pillar[data-pillar]").forEach(e=>{e.addEventListener("click",()=>d(e.dataset.pillar))});n.querySelector(".pillar-modal-close").addEventListener("click",i);n.addEventListener("click",e=>{e.target===n&&i()});document.addEventListener("keydown",e=>{e.key==="Escape"&&i()});
