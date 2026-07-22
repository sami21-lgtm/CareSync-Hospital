// Database of Doctors linked to Departments
const doctorDatabase = {
    "Cardiology": ["Dr. A.K.M. Fazlur Rahman", "Dr. Shams Munwar", "Dr. Nabeel"],
    "Neurology": ["Dr. Badrul Alam", "Dr. Shirin Akhter"],
    "Pediatrics": ["Dr. M.A.K. Azad Chowdhury", "Dr. Farzana"],
    "General Medicine": ["Dr. Tariqul Islam", "Dr. Rubel"],
    "ICU": ["Dr. Sayedur Rahman", "Dr. Kazi"]
};

// Initial Patient Data
let defaultDatabase = [
    { id: "P-3211", name: "Tamim Iqbal", age: 34, gender: "Male", department: "Cardiology", doctor: "Dr. Shams Munwar", status: "Admitted" },
    { id: "P-5842", name: "Sara Islam", age: 26, gender: "Female", department: "ICU", doctor: "Dr. Sayedur Rahman", status: "Admitted" }
];

let patients = JSON.parse(localStorage.getItem('cs_portal_patients')) || defaultDatabase;
const totalBedsLimit = 30;

// DOM Elements
const authSection = document.getElementById('auth-section');
const loginForm = document.getElementById('login-form');
const portalSection = document.getElementById('portal-section');
const adminDisplayName = document.getElementById('admin-display-name');

// Views & Tabs
const viewDashboard = document.getElementById('view-dashboard');
const viewRegistry = document.getElementById('view-registry');
const tabDashboard = document.getElementById('tab-dashboard');
const tabRegistry = document.getElementById('tab-registry');

// Form Elements
const patientCrudForm = document.getElementById('patient-crud-form');
const editPatientIdInput = document.getElementById('edit-patient-id');
const patientNameInput = document.getElementById('patient-name');
const patientAgeInput = document.getElementById('patient-age');
const patientGenderInput = document.getElementById('patient-gender');
const patientDeptInput = document.getElementById('patient-dept');
const patientDoctorInput = document.getElementById('patient-doctor');
const formTitle = document.getElementById('form-title');
const formSubmitBtn = document.getElementById('form-submit-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

// Table & Stats
const registryTableBody = document.getElementById('registry-table-body');
const searchInput = document.getElementById('patient-search');
const recordCountEl = document.getElementById('record-count');
const statTotalPatients = document.getElementById('stat-total-patients');
const statAvailableBeds = document.getElementById('stat-available-beds');

// 1. Login Function (Check admin_sami & sami2026)
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameVal = document.getElementById('username').value.trim();
    const passwordVal = document.getElementById('password').value;

    if (usernameVal === "admin_sami" && passwordVal === "sami2026") {
        // Naam html file ei hardcoded ache, tobuo check rakhlam
        authSection.classList.add('hidden');
        portalSection.classList.remove('hidden');
        renderTable();
    } else {
        alert("Incorrect login! Please use ID: admin_sami and Pass: sami2026");
    }
});

function logout() {
    authSection.classList.remove('hidden');
    portalSection.classList.add('hidden');
    loginForm.reset();
}

// 2. Tab Switcher Logic
window.switchTab = function(tab) {
    if (tab === 'dashboard') {
        viewDashboard.classList.remove('hidden');
        viewRegistry.classList.add('hidden');
        tabDashboard.classList.add('active');
        tabRegistry.classList.remove('active');
    } else if (tab === 'registry') {
        viewDashboard.classList.add('hidden');
        viewRegistry.classList.remove('hidden');
        tabDashboard.classList.remove('active');
        tabRegistry.classList.add('active');
        renderTable(); // Refresh table when opening
    }
}

// 3. Dynamic Doctor Dropdown Logic
window.updateDoctorList = function(selectedDoctor = "") {
    const dept = patientDeptInput.value;
    patientDoctorInput.innerHTML = '<option value="" disabled selected>Select Assigned Doctor</option>';
    
    if (dept && doctorDatabase[dept]) {
        doctorDatabase[dept].forEach(doc => {
            const option = document.createElement('option');
            option.value = doc;
            option.textContent = doc;
            if(doc === selectedDoctor) option.selected = true;
            patientDoctorInput.appendChild(option);
        });
    }
}

// 4. Save & Render Data
function savePatients() {
    localStorage.setItem('cs_portal_patients', JSON.stringify(patients));
}

function renderTable(searchTerm = "") {
    registryTableBody.innerHTML = '';
    
    const filtered = patients.filter(p => {
        const term = searchTerm.toLowerCase();
        return (
            p.id.toLowerCase().includes(term) ||
            p.name.toLowerCase().includes(term) ||
            p.department.toLowerCase().includes(term)
        );
    });

    filtered.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${p.id}</strong></td>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${p.department}</td>
            <td style="color: #1e40af; font-weight:500;">${p.doctor}</td>
            <td><span class="status-badge">${p.status}</span></td>
            <td>
                <div class="action-btns-wrapper">
                    <button class="action-btn edit-btn" onclick="startEdit('${p.id}')" title="Edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="dischargePatient('${p.id}')" title="Discharge">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        `;
        registryTableBody.appendChild(tr);
    });

    statTotalPatients.textContent = patients.length;
    statAvailableBeds.textContent = totalBedsLimit - patients.length;
    recordCountEl.textContent = `Records: ${filtered.length}`;
}

searchInput.addEventListener('input', function(e) {
    renderTable(e.target.value);
});

// 5. Add / Update Patient Form Logic
patientCrudForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = patientNameInput.value.trim();
    const age = parseInt(patientAgeInput.value);
    const gender = patientGenderInput.value;
    const department = patientDeptInput.value;
    const doctor = patientDoctorInput.value;
    const targetId = editPatientIdInput.value;

    if (targetId === "") {
        if (patients.length >= totalBedsLimit) {
            alert("No available clinical beds!");
            return;
        }
        const newId = `P-${Math.floor(1000 + Math.random() * 9000)}`;
        patients.push({ id: newId, name, age, gender, department, doctor, status: "Admitted" });
        alert(`Success: Patient ${name} admitted.`);
    } else {
        const index = patients.findIndex(p => p.id === targetId);
        if (index !== -1) {
            patients[index].name = name;
            patients[index].age = age;
            patients[index].gender = gender;
            patients[index].department = department;
            patients[index].doctor = doctor;
            alert(`Updated Patient ID: ${targetId}`);
        }
        resetFormState();
    }

    savePatients();
    renderTable();
    patientCrudForm.reset();
    updateDoctorList(); // Reset doctor list to empty
});

window.startEdit = function(id) {
    const patient = patients.find(p => p.id === id);
    if (patient) {
        // Form puron korchi
        editPatientIdInput.value = patient.id;
        patientNameInput.value = patient.name;
        patientAgeInput.value = patient.age;
        patientGenderInput.value = patient.gender;
        patientDeptInput.value = patient.department;
        
        // Department er upore base kore aage doctor list update korbo, tarpor assign korbo
        updateDoctorList(patient.doctor);

        formTitle.innerHTML = `<i class="fa-solid fa-user-pen"></i> Update Patient ${patient.id}`;
        formSubmitBtn.textContent = "Save Changes";
        cancelEditBtn.classList.remove('hidden');
        
        // Switch to Dashboard view jate form dekhte pay
        switchTab('dashboard');
    }
};

window.resetFormState = function() {
    editPatientIdInput.value = "";
    patientCrudForm.reset();
    updateDoctorList();
    formTitle.innerHTML = `<i class="fa-solid fa-user-plus"></i> Admin Admission`;
    formSubmitBtn.textContent = "Admit Patient";
    cancelEditBtn.classList.add('hidden');
};

window.dischargePatient = function(id) {
    if (confirm(`Are you sure you want to discharge Patient ${id}?`)) {
        patients = patients.filter(p => p.id !== id);
        savePatients();
        renderTable();
        if (editPatientIdInput.value === id) resetFormState();
    }
};
