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
    { id: 1001, name: "Tanvir Ahmed", age: 34, gender: "Male", department: "Cardiology", doctor: "Prof. Dr. Abdul Wadud Chowdhury", accommodation: "VIP Cabin (BDT 10,000/day)", days: 3, medicineFee: 6500, totalBill: 36500, status: "Admitted" },
    { id: 1002, name: "Sumaiya Akter", age: 28, gender: "Female", department: "Neurology", doctor: "Dr. Sirajee Shafiqul Islam", accommodation: "Semi-Private Cabin (BDT 5,000/day)", days: 2, medicineFee: 3000, totalBill: 13000, status: "Admitted" }
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
            if(item.id === "logout-btn" || item.querySelector("#logout-btn")) return;
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

    // Logout Function
    document.getElementById("logout-btn").addEventListener("click", (e) => {
        e.preventDefault();
        portalSection.classList.add("hidden");
        authSection.classList.remove("hidden");
        loginForm.reset();
    });

    // Dynamic Doctor Dropdown Population
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
    updateDoctorsDropdown(); 

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

        // Switch to Registry Tab automatically
        document.querySelectorAll(".sidebar-menu li").forEach(i => i.classList.remove("active"));
        document.getElementById("tab-registry").classList.add("active");
        
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
        document.getElementById("registry-tab").classList.remove("hidden");
    });

    // Global Search Functionality
    const globalSearch = document.getElementById("global-search");
    if(globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            renderPatientTable(searchTerm);
        });
    }

    // Render Patients Table & Doctors Directory
    window.renderAllData = function() {
        document.getElementById("stat-total-patients").textContent = patientsList.length;
        renderPatientTable();

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

    function renderPatientTable(searchTerm = "") {
        const tbody = document.getElementById("patient-table-body");
        tbody.innerHTML = "";

        const filteredPatients = patientsList.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.department.toLowerCase().includes(searchTerm) ||
            p.doctor.toLowerCase().includes(searchTerm)
        );

        filteredPatients.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${p.name}</strong></td>
                <td>${p.age} yrs / ${p.gender}</td>
                <td><span class="badge" style="background: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">${p.department}</span></td>
                <td>${p.doctor}</td>
                <td>${p.accommodation} <br><small>(${p.days} Days)</small></td>
                <td><strong style="color: #1e3a8a;">৳ ${p.totalBill.toLocaleString()}</strong></td>
                <td><span class="status-badge" style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">${p.status}</span></td>
                <td>
                    <div class="action-btns-wrapper" style="display: flex; gap: 8px;">
                        <!-- Print Button Added Here -->
                        <button class="action-btn" onclick="printBill(${p.id})" style="background: #1e3a8a; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer;" title="Print Bill"><i class="fa-solid fa-print"></i></button>
                        
                        <button class="action-btn delete-btn" onclick="deletePatient(${p.id})" style="background: #dc2626; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer;" title="Discharge Patient"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Delete Patient Function
    window.deletePatient = function(id) {
        if(confirm("Are you sure you want to remove this patient record?")) {
            patientsList = patientsList.filter(p => p.id !== id);
            renderAllData();
        }
    };

    // Print Bill Function
    window.printBill = function(id) {
        const patient = patientsList.find(p => p.id === id);
        if(!patient) return;

        const printContent = document.getElementById("print-content");
        const accommodationBill = patient.totalBill - patient.medicineFee;
        const displayId = patient.id.toString().slice(-6); // Shorter ID for bill

        printContent.innerHTML = `
            <table style="width: 100%; text-align: left; margin-bottom: 20px; font-size: 15px;">
                <tr>
                    <th style="padding: 5px 0; width: 20%;">Patient ID:</th><td style="width: 30%;">BSH-${displayId}</td>
                    <th style="padding: 5px 0; width: 20%;">Date:</th><td style="width: 30%;">${new Date().toLocaleDateString('en-GB')}</td>
                </tr>
                <tr>
                    <th style="padding: 5px 0;">Name:</th><td><strong>${patient.name}</strong></td>
                    <th style="padding: 5px 0;">Age/Gender:</th><td>${patient.age} Yrs / ${patient.gender}</td>
                </tr>
                <tr>
                    <th style="padding: 5px 0;">Department:</th><td>${patient.department}</td>
                    <th style="padding: 5px 0;">Consultant:</th><td>${patient.doctor}</td>
                </tr>
            </table>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 15px;" border="1">
                <tr style="background: #f3f4f6;">
                    <th style="padding: 10px; text-align: left;">Description</th>
                    <th style="padding: 10px; text-align: right;">Amount (BDT)</th>
                </tr>
                <tr>
                    <td style="padding: 10px;">Hospital Accommodation: ${patient.accommodation} <br><small>(${patient.days} Days)</small></td>
                    <td style="padding: 10px; text-align: right;">${accommodationBill.toLocaleString()}</td>
                </tr>
                <tr>
                    <td style="padding: 10px;">Medicine, Diagnostics & Additional Services</td>
                    <td style="padding: 10px; text-align: right;">${patient.medicineFee.toLocaleString()}</td>
                </tr>
                <tr>
                    <th style="padding: 10px; text-align: right; font-size: 16px;">Total Amount Payable:</th>
                    <th style="padding: 10px; text-align: right; font-size: 18px; color: #1e3a8a;">৳ ${patient.totalBill.toLocaleString()}</th>
                </tr>
            </table>
            <p style="font-size: 15px;">Payment Status: <strong style="color: #166534;">Cleared / Admitted</strong></p>
        `;

        // Trigger the browser's print dialog
        window.print();
    };
});
