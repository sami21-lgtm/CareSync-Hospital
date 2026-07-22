// BSH Doctors Database with Professional Real Profiles & Pictures
const bshDoctors = [
    { name: "Prof. Dr. Abdul Wadud Chowdhury", dept: "Cardiology", qual: "MBBS (DMC), FCPS, MD (Cardiology) Gold Medalist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Khalifa Mahmud Tarik", dept: "Cardiology", qual: "MBBS, Cardiologist & Cardiothoracic Surgeon", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop" },
    { name: "Prof. Dr. Narayan Chandra Kundu", dept: "Neurology", qual: "MBBS, FCPS (Medicine), MD (Neurology)", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Sirajee Shafiqul Islam", dept: "Neurology", qual: "MBBS, MD (Neuromedicine), Stroke & Neuro-intervention Specialist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Md. Mainul Islam", dept: "ICU", qual: "MBBS, FCPS, Consultant & Intensivist (Critical Care)", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=300&auto=format&fit=crop" },
    { name: "Prof. Dr. Tapan Kumar Saha", dept: "Surgery", qual: "MBBS, MS, General & Laparoscopic Surgeon", img: "https://images.unsplash.com/photo-1594824813511-285642d63428?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Mohammad Shahriar Faisal", dept: "Surgery", qual: "MBBS, FCPS, FACS (USA), Colorectal Surgeon", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Sharmin Chowdhury", dept: "Nephrology", qual: "MBBS, MD (Nephrology), Kidney Specialist", img: "https://images.unsplash.com/photo-1594824813511-285642d63428?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Ahmed Zahid Hossain", dept: "Pediatrics", qual: "MBBS, DCH, FCPS (Pediatric Surgery)", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop" },
    { name: "Dr. Rokon Uddin", dept: "Dermatology", qual: "MBBS, DDV, Dermatologist & Aesthetic Specialist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop" }
];

// Initial Sample Patients Data
let patientsList = [
    { id: 1, name: "Tanvir Ahmed", age: 34, gender: "Male", department: "Cardiology", doctor: "Prof. Dr. Abdul Wadud Chowdhury", accommodation: "VIP Cabin (BDT 10,000/day)", days: 3, medicineFee: 6500, totalBill: 36500, status: "Admitted" },
    { id: 2, name: "Sumaiya Akter", age: 28, gender: "Female", department: "Neurology", doctor: "Dr. Sirajee Shafiqul Islam", accommodation: "Semi-Private Cabin (BDT 5,000/day)", days: 2, medicineFee: 3000, totalBill: 13000, status: "Admitted" }
];

document.addEventListener("DOMContentLoaded", () => {
    const authSection = document.getElementById("auth-section");
    const portalSection = document.getElementById("portal-section");
    const loginForm = document.getElementById("login-form");
    const enrollForm = document.getElementById("enroll-form");
    const patientForm = document.getElementById("patient-crud-form");
    const deptSelect = document.getElementById("p-department");
    const doctorSelect = document.getElementById("p-doctor");

    // Staff Login Handler
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("username").value;
        if(user.trim() !== "") {
            authSection.classList.add("hidden");
            portalSection.classList.remove("hidden");
            renderAllData();
        }
    });

    // Self Enroll Quick Registration Handler
    enrollForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("enroll-name").value;
        const age = document.getElementById("enroll-age").value;
        const gender = document.getElementById("enroll-gender").value;
        const dept = document.getElementById("enroll-dept").value;
        
        // Match a doctor from selected department
        const availableDoc = bshDoctors.find(d => d.dept === dept) || bshDoctors[0];

        const newPatient = {
            id: Date.now(),
            name: name,
            age: age,
            gender: gender,
            department: dept,
            doctor: availableDoc.name,
            accommodation: "General Bed (BDT 2,000/day)",
            days: 1,
            medicineFee: 2000,
            totalBill: 4000,
            status: "Self-Enrolled"
        };

        patientsList.unshift(newPatient);
        alert("Self-Enrollment Successful! Welcome to BSH Portal.");
        authSection.classList.add("hidden");
        portalSection.classList.remove("hidden");
        renderAllData();
    });

    // Sidebar Navigation Switching
    const menuItems = document.querySelectorAll(".sidebar-menu li");
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const targetTab = item.getAttribute("data-tab");
            document.querySelectorAll(".tab-content").forEach(tab => {
                tab.classList.add("hidden");
            });
            document.getElementById(targetTab).classList.remove("hidden");
        });
    });

    // Dynamic Doctor Dropdown Population based on Department Selection
    function updateDoctorsDropdown() {
        const selectedDept = deptSelect.value;
        doctorSelect.innerHTML = "";
        
        const filteredDocs = bshDoctors.filter(d => d.dept === selectedDept);
        const docsToDisplay = filteredDocs.length > 0 ? filteredDocs : bshDoctors;

        docsToDisplay.forEach(doc => {
            const opt = document.createElement("option");
            opt.value = doc.name;
            opt.textContent = `${doc.name} (${doc.qual})`;
            doctorSelect.appendChild(opt);
        });
    }

    deptSelect.addEventListener("change", updateDoctorsDropdown);
    updateDoctorsDropdown(); // Initial call

    // Patient Admission & Billing Form Submission
    patientForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("p-name").value;
        const age = document.getElementById("p-age").value;
        const gender = document.getElementById("p-gender").value;
        const dept = deptSelect.value;
        const doctor = doctorSelect.value;
        const accommodation = document.getElementById("p-accommodation").value;
        const days = parseInt(document.getElementById("p-days").value) || 1;
        const medicineFee = parseFloat(document.getElementById("p-medicine-fee").value) || 0;

        // Calculate Cost Automatically
        let dailyRate = 2000;
        if(accommodation.includes("Semi-Private")) dailyRate = 5000;
        else if(accommodation.includes("VIP Cabin")) dailyRate = 10000;
        else if(accommodation.includes("Deluxe Suite")) dailyRate = 18000;
        else if(accommodation.includes("ICU")) dailyRate = 15000;

        const totalBill = (dailyRate * days) + medicineFee;

        const newAdmission = {
            id: Date.now(),
            name, age, gender, department: dept, doctor, accommodation, days, medicineFee, totalBill, status: "Admitted"
        };

        patientsList.unshift(newAdmission);
        alert(`Admission Confirmed! Total Computed Bill: BDT ${totalBill.toLocaleString()}`);
        patientForm.reset();
        updateDoctorsDropdown();
        renderAllData();

        // Switch to Registry Tab to view added patient
        document.querySelector('[data-tab="registry-tab"]').click();
    });

    // Render Patients Table & Doctors Directory
    window.renderAllData = function() {
        // Stats
        document.getElementById("stat-total-patients").textContent = patientsList.length;

        // Patient Table
        const tbody = document.getElementById("patient-table-body");
        tbody.innerHTML = "";

        patientsList.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${p.name}</strong></td>
                <td>${p.age} yrs / ${p.gender}</td>
                <td><span class="badge">${p.department}</span></td>
                <td>${p.doctor}</td>
                <td>${p.accommodation} (${p.days}d)</td>
                <td><strong>BDT ${p.totalBill.toLocaleString()}</strong></td>
                <td><span class="status-badge">${p.status}</span></td>
                <td>
                    <div class="action-btns-wrapper">
                        <button class="action-btn delete-btn" onclick="deletePatient(${p.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });

        // Doctors Directory Grid
        const docGrid = document.getElementById("doctors-directory-container");
        docGrid.innerHTML = "";
        bshDoctors.forEach(doc => {
            const card = document.createElement("div");
            card.className = "doctor-card";
            card.innerHTML = `
                <img src="${doc.img}" alt="${doc.name}">
                <h4>${doc.name}</h4>
                <p class="spec">${doc.dept} Specialist</p>
                <p class="qual">${doc.qual}</p>
            `;
            docGrid.appendChild(card);
        });
    };

    // Delete Patient Function
    window.deletePatient = function(id) {
        if(confirm("Are you sure you want to remove this patient record?")) {
            patientsList = patientsList.filter(p => p.id !== id);
            renderAllData();
        }
    };
});
