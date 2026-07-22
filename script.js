// ==========================================
// 1. Database Mock (Doctors & Departments)
// ==========================================
const doctorsDB = [
    { name: "Dr. Shafiqur Rahman", dept: "Anaesthesia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBXoSzG9JJbaIj3GKnZoWPcGt1T3b2fXqgSrsijMKsg&s=10" },
    { name: "Dr. Amina Begum", dept: "Blood Bank", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiw8PlNVck2OLCdOn_Z-x8sTcBlSH-wyUteJ2rN1vNHg&s=10" },
    { name: "Prof. Dr. Hasan Mahmud", dept: "Breast, Colorectal & Laparoscopic Surgery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHHp3UfQcFjqbv3EtAG6Pc_TjcuZrgXveVm8sBfoSdQ&s=10" },
    { name: "Dr. Tariqul Islam", dept: "Cardiac surgery", img: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Prof. Dr. A.K.M. Fazlur Rahman", dept: "Cardiology", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Dr. Laila Parveen", dept: "Cardiology", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Dr. Kamal Hossain", dept: "Clinical Hematology", img: "https://randomuser.me/api/portraits/men/14.jpg" },
    { name: "Dr. Rasheda Akhter", dept: "Colorectal Surgery", img: "https://randomuser.me/api/portraits/women/15.jpg" },
    { name: "Mr. Salimullah", dept: "Corporate Affairs Department", img: "https://randomuser.me/api/portraits/men/16.jpg" },
    { name: "Dr. Farhan Ali", dept: "Dental and Maxillofacial Surgery", img: "https://randomuser.me/api/portraits/men/17.jpg" },
    { name: "Dr. Taslima Akhter", dept: "Dermatology", img: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Prof. Dr. Zafar Ahmed", dept: "Diabetes & Endocrinology", img: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: "Dr. Emtiaz Hossain", dept: "EMERGENCY", img: "https://randomuser.me/api/portraits/men/19.jpg" },
    { name: "Dr. Rubina Yasmin", dept: "ENT, Head & Neck Surgery", img: "https://randomuser.me/api/portraits/women/20.jpg" },
    { name: "Prof. Dr. M.A. Jalil", dept: "Gastroenterology & Hepatology", img: "https://randomuser.me/api/portraits/men/21.jpg" },
    { name: "Prof. Dr. Saiful Islam", dept: "General & Laparoscopic Surgery", img: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Dr. Nusrat Jahan", dept: "Health Check Up", img: "https://randomuser.me/api/portraits/women/23.jpg" },
    { name: "Dr. Anwarul Azim", dept: "Hepatobiliary & Pancreatic Surgery", img: "https://randomuser.me/api/portraits/men/24.jpg" },
    { name: "Dr. S.M. Abu Zafar", dept: "ICU", img: "https://randomuser.me/api/portraits/men/55.jpg" },
    { name: "Dr. Mahmudul Hasan", dept: "Internal Medicine", img: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: "Prof. Dr. Badrul Alam", dept: "Neurosurgery", img: "https://randomuser.me/api/portraits/men/41.jpg" },
    { name: "Dr. Shirin Sultana", dept: "NICU", img: "https://randomuser.me/api/portraits/women/26.jpg" },
    { name: "Ms. Fahima Khatun", dept: "Nutrition & Dietetic Department", img: "https://randomuser.me/api/portraits/women/27.jpg" },
    { name: "Dr. Salma Begum", dept: "Obstetrics & Gynecology", img: "https://randomuser.me/api/portraits/women/28.jpg" },
    { name: "Prof. Dr. Golam Mustafa", dept: "Oncology", img: "https://randomuser.me/api/portraits/men/29.jpg" },
    { name: "Prof. Dr. Rezaul Karim", dept: "Orthopedics, Arthroscopy & Joint Replacement", img: "https://randomuser.me/api/portraits/men/60.jpg" },
    { name: "Dr. Mahbubur Rahman", dept: "Pediatric & Neonatology", img: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Dr. Asif Iqbal", dept: "Pediatric Cardiology", img: "https://randomuser.me/api/portraits/men/30.jpg" },
    { name: "Dr. Nabila Chowdhury", dept: "Pediatric Surgery", img: "https://randomuser.me/api/portraits/women/31.jpg" },
    { name: "Dr. Kazi Ariful", dept: "Physical Medicine", img: "https://randomuser.me/api/portraits/men/33.jpg" },
    { name: "Dr. Tanjina Noor", dept: "Plastic & Aesthetic Surgery", img: "https://randomuser.me/api/portraits/women/34.jpg" },
    { name: "Dr. Helal Uddin", dept: "Psychiatry", img: "https://randomuser.me/api/portraits/men/35.jpg" },
    { name: "Dr. Fahmidur Rahman", dept: "Radiology & Imaging", img: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Dr. Imran Hossain", dept: "Respiratory Medicine", img: "https://randomuser.me/api/portraits/men/37.jpg" },
    { name: "Dr. Shahinur Islam", dept: "Rheumatology", img: "https://randomuser.me/api/portraits/men/38.jpg" },
    { name: "Dr. Mizanur Rahman", dept: "Surgical Oncology", img: "https://randomuser.me/api/portraits/men/39.jpg" },
    { name: "Dr. Tarek Aziz", dept: "Thoracic Surgery", img: "https://randomuser.me/api/portraits/men/40.jpg" },
    { name: "Dr. Shafiqul Alam", dept: "Urology", img: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: "Dr. Sabrina Haque", dept: "Vaccination Center", img: "https://randomuser.me/api/portraits/women/43.jpg" },
    { name: "Dr. Kamrul Hasan", dept: "Vascular Surgery", img: "https://randomuser.me/api/portraits/men/45.jpg" }
];

let patientsDB = [];

// ==========================================
// 1.5 Auto-Populate Department Dropdowns
// ==========================================
function populateDepartments() {
    const departments = [...new Set(doctorsDB.map(doc => doc.dept))].sort();
    
    const enrollDeptSelect = document.getElementById('enroll-dept');
    const pDeptSelect = document.getElementById('p-department');
    
    if(enrollDeptSelect && pDeptSelect) {
        enrollDeptSelect.innerHTML = '';
        pDeptSelect.innerHTML = '';
        
        departments.forEach(dept => {
            const option1 = document.createElement('option');
            option1.className = "text-dark";
            option1.value = dept;
            option1.textContent = dept;
            enrollDeptSelect.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = dept;
            option2.textContent = dept;
            pDeptSelect.appendChild(option2);
        });
    }
}
populateDepartments();

// ==========================================
// 2. Authentication Logic
// ==========================================
const authSection = document.getElementById('auth-section');
const portalSection = document.getElementById('portal-section');
const loginForm = document.getElementById('login-form');
const enrollForm = document.getElementById('enroll-form');
const logoutBtn = document.getElementById('logout-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authSection.classList.add('hidden');
    portalSection.classList.remove('hidden');
    renderDashboard();
    updateDoctorDropdown();
});

enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Patient Self-Enrollment Successful! Please wait at the reception.");
    enrollForm.reset();
});

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    portalSection.classList.add('hidden');
    authSection.classList.remove('hidden');
});

// ==========================================
// 3. Tab Navigation Logic
// ==========================================
const sidebarTabs = document.querySelectorAll('.sidebar-menu li[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');

sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        sidebarTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach(content => content.classList.add('hidden'));
        
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).classList.remove('hidden');

        if (targetId === 'doctors-tab') renderDoctorsDirectory();
    });
});

// ==========================================
// 4. New Admission & Billing Logic (UPDATED)
// ==========================================
const pDepartmentSelect = document.getElementById('p-department');
const pDoctorSelect = document.getElementById('p-doctor');
const admissionForm = document.getElementById('patient-crud-form');

function updateDoctorDropdown() {
    const selectedDept = pDepartmentSelect.value;
    pDoctorSelect.innerHTML = "";

    const filteredDocs = doctorsDB.filter(doc => doc.dept === selectedDept);
    
    if (filteredDocs.length === 0) {
        pDoctorSelect.innerHTML = `<option value="">No doctors available</option>`;
    } else {
        filteredDocs.forEach(doc => {
            const option = document.createElement('option');
            option.value = doc.name;
            option.textContent = doc.name;
            pDoctorSelect.appendChild(option);
        });
    }
}

pDepartmentSelect.addEventListener('change', updateDoctorDropdown);

admissionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('p-name').value;
    const age = document.getElementById('p-age').value;
    const gender = document.getElementById('p-gender').value;
    const dept = document.getElementById('p-department').value;
    const doctor = document.getElementById('p-doctor').value;
    const accType = document.getElementById('p-accommodation').value;
    const days = parseInt(document.getElementById('p-days').value) || 0;
    const medicineFee = parseFloat(document.getElementById('p-medicine-fee').value) || 0;
    
    // Read Doctor Visit Fee (If input field exists)
    const doctorFeeInput = document.getElementById('p-doctor-fee');
    const doctorFee = doctorFeeInput ? (parseFloat(doctorFeeInput.value) || 0) : 0;

    // Parse Room Rate from string (e.g. BDT 2,500)
    const rateMatch = accType.match(/BDT ([\d,]+)/);
    let dailyRate = 0;
    if (rateMatch) {
        dailyRate = parseFloat(rateMatch[1].replace(/,/g, ''));
    }

    // Total Calculation with Doctor Fee
    const totalBill = (dailyRate * days) + medicineFee + doctorFee;

    const newPatient = {
        id: Date.now(),
        name, age, gender, dept, doctor, accType, days, dailyRate, 
        medicineFee, doctorFee, totalBill,
        status: 'Active'
    };

    patientsDB.push(newPatient);
    alert(`${name} has been admitted successfully!`);
    
    admissionForm.reset();
    updateDoctorDropdown(); 
    
    document.querySelector('[data-tab="registry-tab"]').click();
    renderRegistryTable();
    renderDashboard();
});

// ==========================================
// 5. Patient Registry & Dashboard Render
// ==========================================
function renderRegistryTable(filteredList = null) {
    const tableBody = document.getElementById('patient-table-body');
    tableBody.innerHTML = "";

    const listToRender = filteredList || patientsDB;

    listToRender.forEach(p => {
        const tr = document.createElement('tr');
        const statusClass = p.status === 'Active' ? 'status-active' : 'status-discharged';

        tr.innerHTML = `
            <td><strong>${p.name}</strong></td>
            <td>${p.age} / ${p.gender}</td>
            <td>${p.dept}</td>
            <td>${p.doctor}</td>
            <td>${p.accType.split('(')[0]}</td>
            <td style="color: #34d399; font-weight: 600;">৳ ${p.totalBill.toLocaleString()}</td>
            <td><span class="status-badge ${statusClass}">${p.status}</span></td>
            <td style="display: flex; gap: 5px;">
                <button class="btn-small print" onclick="printBill(${p.id})"><i class="fa-solid fa-print"></i></button>
                ${p.status === 'Active' ? `<button class="btn-small discharge" onclick="dischargePatient(${p.id})">Discharge</button>` : ''}
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderDashboard() {
    const activeCount = patientsDB.filter(p => p.status === 'Active').length;
    const totalCountElem = document.getElementById('stat-total-patients');
    if (totalCountElem) totalCountElem.textContent = activeCount;

    const doctorStatCard = document.querySelector('.stat-card:nth-child(2) h3');
    if (doctorStatCard) doctorStatCard.textContent = doctorsDB.length + '+';
}

// ==========================================
// 6. Action Functions (Discharge & Print)
// ==========================================
window.dischargePatient = function(id) {
    if (confirm("Are you sure you want to discharge this patient?")) {
        const patient = patientsDB.find(p => p.id === id);
        if (patient) {
            patient.status = 'Discharged';
            renderRegistryTable();
            renderDashboard();
        }
    }
}

window.printBill = function(id) {
    const patient = patientsDB.find(p => p.id === id);
    if (!patient) return;

    const printContent = document.getElementById('print-content');
    const date = new Date().toLocaleDateString();

    const roomTotal = (patient.dailyRate || 0) * (patient.days || 0);

    printContent.innerHTML = `
        <div style="font-family: Arial, sans-serif;">
            <h2 style="text-align: center; margin-bottom: 5px;">Bangabandhu Sheikh Mujib Medical University / General Hospital</h2>
            <p style="text-align: center; color: #666; margin-bottom: 20px;">Patient Admission & Billing Invoice</p>
            <hr style="margin-bottom: 20px; border: 0.5px solid #ccc;"/>
            
            <table style="width: 100%; margin-bottom: 20px; font-size: 14px;">
                <tr>
                    <td><strong>Patient Name:</strong> ${patient.name}</td>
                    <td style="text-align: right;"><strong>Date:</strong> ${date}</td>
                </tr>
                <tr>
                    <td><strong>Age / Gender:</strong> ${patient.age} Yrs / ${patient.gender}</td>
                    <td style="text-align: right;"><strong>Invoice ID:</strong> BSH-${patient.id}</td>
                </tr>
                <tr>
                    <td><strong>Department:</strong> ${patient.dept}</td>
                    <td style="text-align: right;"><strong>Consultant:</strong> ${patient.doctor}</td>
                </tr>
            </table>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
                <thead>
                    <tr style="background: #f3f4f6; text-align: left;">
                        <th style="border: 1px solid #ddd; padding: 10px;">Description</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: center;">Qty / Days</th>
                        <th style="border: 1px solid #ddd; padding: 10px; text-align: right;">Amount (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">${patient.accType}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${patient.days}</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: right;">৳ ${roomTotal.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">Doctor Visit Fee</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">1</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: right;">৳ ${(patient.doctorFee || 0).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 10px;">Medicines & Pathological Tests</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">-</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: right;">৳ ${(patient.medicineFee || 0).toLocaleString()}</td>
                    </tr>
                    <tr style="font-weight: bold; background: #eef2ff;">
                        <td colspan="2" style="border: 1px solid #ddd; padding: 10px; text-align: right;">Grand Total:</td>
                        <td style="border: 1px solid #ddd; padding: 10px; text-align: right;">৳ ${patient.totalBill.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    window.print();
}

// ==========================================
// 7. Doctors Directory Render
// ==========================================
function renderDoctorsDirectory(filteredDocs = null) {
    const container = document.getElementById('doctors-directory-container');
    if(!container) return;
    
    container.innerHTML = "";
    const docsToRender = filteredDocs || doctorsDB;

    docsToRender.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'doc-card';
        card.innerHTML = `
            <img src="${doc.img}" alt="${doc.name}">
            <h4>${doc.name}</h4>
            <p><i class="fa-solid fa-stethoscope"></i> ${doc.dept}</p>
        `;
        container.appendChild(card);
    });
}

// ==========================================
// 8. Global Search Functionality
// ==========================================
const searchInput = document.querySelector('.search-container input');
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Search Patients
        const filteredPatients = patientsDB.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.dept.toLowerCase().includes(query) ||
            p.doctor.toLowerCase().includes(query)
        );
        renderRegistryTable(filteredPatients);

        // Search Doctors
        const filteredDoctors = doctorsDB.filter(doc => 
            doc.name.toLowerCase().includes(query) || 
            doc.dept.toLowerCase().includes(query)
        );
        renderDoctorsDirectory(filteredDoctors);
    });
}
