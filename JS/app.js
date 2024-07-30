const admins = [
  { username: "admin1", password: "password1" },
  { username: "admin2", password: "password2" },
  { username: "admin3", password: "password3" },
];

let staffs = [
  {
    username: "MOS0001",
    staffId: "0714811327",
    staffName: "Ravindu Wickramage",
    staffAddress: "432/7/B, Naduna, Ganemulla",
    staffNIC: "982391890V",
  },
];

let customers = [
  {
    customerId: "0771234567",
    customerName: "Kasun Perera",
    customerAddress: "No. 12, Galle Road, Colombo 3",
  },
  {
    customerId: "0712316741",
    customerName: "Rohini Senasinghe",
    customerAddress: "456, Kandy Road, Peradeniya",
  },
  {
    customerId: "0769876543",
    customerName: "Shanika Fernando",
    customerAddress: "789, High Level Road, Nugegoda",
  },
  {
    customerId: "0723456789",
    customerName: "Dinesh Gunawardena",
    customerAddress: "101, Lake Road, Negombo",
  },
  {
    customerId: "0734567890",
    customerName: "Anushka Wijesinghe",
    customerAddress: "234, Station Road, Mount Lavinia",
  },
];

let items = [
  {
    itemCode: "B1001",
    category: "Burgers",
    itemName: "Classic Burger (Large)",
    price: 750.0,
    discount: 0,
  },
  {
    itemCode: "B1002",
    category: "Burgers",
    itemName: "Classic Burger (Regular)",
    price: 1500.0,
    discount: 15,
  },
  {
    itemCode: "B1003",
    category: "Burgers",
    itemName: "Turkey Burger",
    price: 1600.0,
    discount: 0,
  },
  {
    itemCode: "B1004",
    category: "Burgers",
    itemName: "Chicken Burger (Large)",
    price: 1400.0,
    discount: 0,
  },
  {
    itemCode: "B1005",
    category: "Burgers",
    itemName: "Chicken Burger (Regular)",
    price: 800.0,
    discount: 20,
  },
  {
    itemCode: "B1006",
    category: "Burgers",
    itemName: "Cheese Burger (Large)",
    price: 1000.0,
    discount: 0,
  },
  {
    itemCode: "B1007",
    category: "Burgers",
    itemName: "Cheese Burger (Regular)",
    price: 600.0,
    discount: 0,
  },
  {
    itemCode: "B1008",
    category: "Burgers",
    itemName: "Bacon Burger",
    price: 650.0,
    discount: 15,
  },
  {
    itemCode: "B1009",
    category: "Burgers",
    itemName: "Shawarma Burger",
    price: 800.0,
    discount: 0,
  },
  {
    itemCode: "B1010",
    category: "Burgers",
    itemName: "Olive Burger",
    price: 1800.0,
    discount: 0,
  },
  {
    itemCode: "B1012",
    category: "Burgers",
    itemName: "Double-Cheese Burger",
    price: 1250.0,
    discount: 20,
  },
  {
    itemCode: "B1013",
    category: "Burgers",
    itemName: "Crispy Chicken Burger (Regular)",
    price: 1200.0,
    discount: 0,
  },
  {
    itemCode: "B1014",
    category: "Burgers",
    itemName: "Crispy Chicken Burger (Large)",
    price: 1600.0,
    discount: 10,
  },
  {
    itemCode: "B1015",
    category: "Burgers",
    itemName: "Paneer Burger",
    price: 900.0,
    discount: 0,
  },

  {
    itemCode: "B1016",
    category: "Submarines",
    itemName: "Crispy Chicken Submarine (Large)",
    price: 2000.0,
    discount: 0,
  },
  {
    itemCode: "B1017",
    category: "Submarines",
    itemName: "Crispy Chicken Submarine (Regular)",
    price: 1500.0,
    discount: 0,
  },
  {
    itemCode: "B1018",
    category: "Submarines",
    itemName: "Chicken Submarine (Large)",
    price: 1800.0,
    discount: 3,
  },
  {
    itemCode: "B1019",
    category: "Submarines",
    itemName: "Chicken Submarine (Regular)",
    price: 1400.0,
    discount: 0,
  },
  {
    itemCode: "B1020",
    category: "Submarines",
    itemName: "Grinder Submarine",
    price: 2300.0,
    discount: 0,
  },
  {
    itemCode: "B1021",
    category: "Submarines",
    itemName: "Cheese Submarine",
    price: 2200.0,
    discount: 0,
  },
  {
    itemCode: "B1022",
    category: "Submarines",
    itemName: "Double Cheese n Chicken Submarine",
    price: 1900.0,
    discount: 16,
  },
  {
    itemCode: "B1023",
    category: "Submarines",
    itemName: "Special Horgie Submarine",
    price: 2800.0,
    discount: 0,
  },
  {
    itemCode: "B1024",
    category: "Submarines",
    itemName: "MOS Special Submarine",
    price: 3000.0,
    discount: 0,
  },

  {
    itemCode: "B1025",
    category: "Fries",
    itemName: "Steak Fries (Large)",
    price: 1200.0,
    discount: 0,
  },
  {
    itemCode: "B1026",
    category: "Fries",
    itemName: "Steak Fries (Medium)",
    price: 600.0,
    discount: 0,
  },
  {
    itemCode: "B1027",
    category: "Fries",
    itemName: "French Fries (Large)",
    price: 800.0,
    discount: 0,
  },
  {
    itemCode: "B1028",
    category: "Fries",
    itemName: "French Fries (Medium)",
    price: 650.0,
    discount: 0,
  },
  {
    itemCode: "B1029",
    category: "Fries",
    itemName: "French Fries (Small)",
    price: 450.0,
    discount: 0,
  },
  {
    itemCode: "B1030",
    category: "Fries",
    itemName: "Sweet Potato Fries (Large)",
    price: 600.0,
    discount: 0,
  },

  {
    itemCode: "B1031",
    category: "Pasta",
    itemName: "Chicken n Cheese Pasta",
    price: 1600.0,
    discount: 15,
  },
  {
    itemCode: "B1032",
    category: "Pasta",
    itemName: "Chicken Penne Pasta",
    price: 1700.0,
    discount: 0,
  },
  {
    itemCode: "B1033",
    category: "Pasta",
    itemName: "Ground Turkey Pasta Bake",
    price: 2900.0,
    discount: 10,
  },
  {
    itemCode: "B1034",
    category: "Pasta",
    itemName: "Creamy Shrimp Pasta",
    price: 2000.0,
    discount: 0,
  },
  {
    itemCode: "B1035",
    category: "Pasta",
    itemName: "Lemon Butter Pasta",
    price: 1950.0,
    discount: 0,
  },
  {
    itemCode: "B1036",
    category: "Pasta",
    itemName: "Tagliatelle Pasta",
    price: 2400.0,
    discount: 1,
  },
  {
    itemCode: "B1037",
    category: "Pasta",
    itemName: "Baked Ravioli",
    price: 2000.0,
    discount: 1,
  },

  {
    itemCode: "B1038",
    category: "Chicken",
    itemName: "Fried Chicken (Small)",
    price: 1200.0,
    discount: 0,
  },
  {
    itemCode: "B1039",
    category: "Chicken",
    itemName: "Fried Chicken (Regular)",
    price: 2300.0,
    discount: 10,
  },
  {
    itemCode: "B1040",
    category: "Chicken",
    itemName: "Fried Chicken (Large)",
    price: 3100.0,
    discount: 5,
  },
  {
    itemCode: "B1041",
    category: "Chicken",
    itemName: "Hot Wings (Large)",
    price: 2400.0,
    discount: 0,
  },
  {
    itemCode: "B1042",
    category: "Chicken",
    itemName: "Devilled Chicken (Large)",
    price: 900.0,
    discount: 0,
  },
  {
    itemCode: "B1043",
    category: "Chicken",
    itemName: "BBQ Chicken (Regular)",
    price: 2100.0,
    discount: 0,
  },

  {
    itemCode: "B1044",
    category: "Beverages",
    itemName: "Pepsi (330ml)",
    price: 990.0,
    discount: 5,
  },
  {
    itemCode: "B1045",
    category: "Beverages",
    itemName: "Coca-Cola (330ml)",
    price: 1230.0,
    discount: 0,
  },
  {
    itemCode: "B1046",
    category: "Beverages",
    itemName: "Sprite (330ml)",
    price: 1500.0,
    discount: 3,
  },
  {
    itemCode: "B1047",
    category: "Beverages",
    itemName: "Mirinda (330ml)",
    price: 850.0,
    discount: 7,
  },
];

let orders = [
  {
    orderId: "O0001",
    customerId: "0771234567",
    customerName: "Kasun Perera",
    orderDateTime: "2024-07-23 12:34:56",
    orderedItems: [
      {
        itemCode: "B1001",
        itemName: "Classic Burger (Large)",
        price: 750.0,
        quantity: 2,
        discount: 0,
        itemTotal: 1500.0,
      },
      {
        itemCode: "B1025",
        itemName: "Steak Fries (Large)",
        price: 1200.0,
        quantity: 1,
        discount: 0,
        itemTotal: 1200.0,
      },
    ],
    totalDiscount: 0,
    totalAmount: 2700.0,
  },
  {
    orderId: "O0002",
    customerId: "0712316741",
    customerName: "Rohini Senasinghe",
    orderDateTime: "2024-07-23 13:45:32",
    orderedItems: [
      {
        itemCode: "B1002",
        itemName: "Classic Burger (Regular)",
        price: 1500.0,
        quantity: 1,
        discount: 15,
        itemTotal: 1275.0,
      },
      {
        itemCode: "B1033",
        itemName: "Ground Turkey Pasta Bake",
        price: 2900.0,
        quantity: 1,
        discount: 10,
        itemTotal: 2610.0,
      },
    ],
    totalDiscount: 515.0,
    totalAmount: 3885.0,
  },
  {
    orderId: "O0003",
    customerId: "0769876543",
    customerName: "Shanika Fernando",
    orderDateTime: "2024-07-23 14:56:43",
    orderedItems: [
      {
        itemCode: "B1045",
        itemName: "Coca-Cola (330ml)",
        price: 1230.0,
        quantity: 3,
        discount: 0,
        itemTotal: 3690.0,
      },
      {
        itemCode: "B1010",
        itemName: "Olive Burger",
        price: 1800.0,
        quantity: 1,
        discount: 0,
        itemTotal: 1800.0,
      },
    ],
    totalDiscount: 0,
    totalAmount: 5490.0,
  },
  {
    orderId: "O0004",
    customerId: "0723456789",
    customerName: "Dinesh Gunawardena",
    orderDateTime: "2024-07-23 15:07:54",
    orderedItems: [
      {
        itemCode: "B1038",
        itemName: "Fried Chicken (Small)",
        price: 1200.0,
        quantity: 2,
        discount: 0,
        itemTotal: 2400.0,
      },
      {
        itemCode: "B1029",
        itemName: "French Fries (Small)",
        price: 450.0,
        quantity: 2,
        discount: 0,
        itemTotal: 900.0,
      },
    ],
    totalDiscount: 0,
    totalAmount: 3300.0,
  },
  {
    orderId: "O0005",
    customerId: "0734567890",
    customerName: "Anushka Wijesinghe",
    orderDateTime: "2024-07-23 16:18:25",
    orderedItems: [
      {
        itemCode: "B1008",
        itemName: "Bacon Burger",
        price: 650.0,
        quantity: 2,
        discount: 15,
        itemTotal: 1105.0,
      },
      {
        itemCode: "B1034",
        itemName: "Creamy Shrimp Pasta",
        price: 2000.0,
        quantity: 1,
        discount: 0,
        itemTotal: 2000.0,
      },
    ],
    totalDiscount: 195.0,
    totalAmount: 3105.0,
  },
];

// Clear form fields and table contents
function clearForm(formId) {
  document.getElementById(formId).reset();

  const tableBody = document.querySelector(".add-order-table tbody");
  if (tableBody) {
    tableBody.innerHTML = "";
  }

  const itemCodeElement = document.getElementById("itemCode");
  const loginIdElement = document.getElementById("loginId");
  const orderIdElement = document.getElementById("orderId");

  if (itemCodeElement) {
    itemCodeElement.textContent = "";
  }
  if (loginIdElement) {
    loginIdElement.textContent = "";
  }
  if (orderIdElement) {
    orderIdElement.textContent = "";
  }

  if (typeof updateOrderSummary === "function") {
    updateOrderSummary();
  }
}

// Page type checking functions
function isUpdateItemPage() {
  return window.location.pathname.endsWith("updateItem.html");
}

function isUpdateOrderPage() {
  return window.location.pathname.endsWith("updateOrder.html");
}

function isUpdateStaffPage() {
  return window.location.pathname.endsWith("updateStaff.html");
}

function isDeleteItemPage() {
  return window.location.pathname.endsWith("deleteItem.html");
}

function isDeleteOrderPage() {
  return window.location.pathname.endsWith("deleteOrder.html");
}

function isDeleteStaffPage() {
  return window.location.pathname.endsWith("deleteStaff.html");
}

function isLoadOrderPage() {
  return window.location.pathname.endsWith("addOrder.html");
}

// On window load
window.onload = function () {
  if (isUpdateItemPage()) {
    document.getElementById("itemCode").textContent = "";
  } else if (isUpdateOrderPage()) {
    document.getElementById("orderId").textContent = "";
  } else if (isUpdateStaffPage()) {
    document.getElementById("loginId").textContent = "";
  } else if (isDeleteItemPage()) {
    document.getElementById("itemCode").textContent = "";
  } else if (isDeleteOrderPage()) {
    document.getElementById("orderId").textContent = "";
  } else if (isDeleteStaffPage()) {
    document.getElementById("loginId").textContent = "";
  } else if (isLoadOrderPage()) {
    document.getElementById("orderId").textContent = setOrderId();
  } else {
    updateItemCode();
    updateLoginId();
  }
};

// Admin login function
function adminLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const admin = admins.find((admin) => admin.username === username);

  if (admin) {
    if (admin.password === password) {
      localStorage.setItem("userType", "admin");
      window.location.href = "adminPage.html";
    } else {
      alert("Invalid password. Please try again.");
    }
  } else {
    alert("Invalid username and/or password. Please try again.");
  }
}

// Staff login function
function loginStaff(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const staff = staffs.find((staff) => staff.username === username);

  if (staff) {
    if (staff.staffNIC === password) {
      localStorage.setItem("userType", "staff");
      window.location.href = "staffPage.html";
    } else {
      alert("Invalid password. Please try again.");
    }
  } else {
    alert("Invalid username. Please try again.");
  }
}

// Update Staff Login ID
function updateLoginId() {
  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  const loginId = "MOS" + (staffArray.length + 1).toString().padStart(4, "0");
  document.getElementById("loginId").textContent = loginId;
}

// Add new Staff Member
function addStaff(event) {
  event.preventDefault();

  const staffId = document.getElementById("staffId").value.trim();
  const staffName = document.getElementById("staffName").value.trim();
  const staffAddress = document.getElementById("staffAddress").value.trim();
  const staffNIC = document.getElementById("staffNIC").value.trim();

  if (!staffId || !staffName || !staffAddress || !staffNIC) {
    alert("All fields are required to add a staff member.");
    return;
  }

  if (!validatePhoneNumber("staffId")) {
    alert(
      "Invalid phone number. Please enter a valid Sri Lankan mobile number."
    );
    return;
  }

  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  const loginId = "MOS" + (staffArray.length + 1).toString().padStart(4, "0");

  const newStaff = {
    username: loginId,
    password: staffNIC,
    staffId: staffId,
    staffName: staffName,
    staffAddress: staffAddress,
    staffNIC: staffNIC,
  };

  staffArray.push(newStaff);

  let updatedStaff = JSON.stringify(staffArray);

  localStorage.setItem("staffDetails", updatedStaff);

  console.log(localStorage.getItem("staffDetails"));

  alert(
    `Staff added successfully! Login ID: ${loginId}, Password: ${staffNIC}`
  );
  clearForm("staff-form");
  populateStaffTable();
  updateLoginId();
}

// Search Staff Member
function searchStaff() {
  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  const searchTerm = document
    .getElementById("searchStaffId")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    alert("Please enter a NIC or Name to search.");
    return;
  }

  const staff = staffArray.find(
    (staff) =>
      staff.staffNIC.toLowerCase() === searchTerm ||
      staff.staffName.toLowerCase() === searchTerm
  );

  if (staff) {
    document.getElementById("loginId").textContent = staff.username;
    document.getElementById("staffId").value = staff.staffId;
    document.getElementById("staffName").value = staff.staffName;
    document.getElementById("staffAddress").value = staff.staffAddress;
    document.getElementById("staffNIC").value = staff.staffNIC;
  } else {
    alert("No staff member found with the provided NIC or Name.");
    clearForm("updateStaffForm");
  }
}

// Update Staff Member
function updateStaff(event) {
  event.preventDefault();

  const loginId = document.getElementById("loginId").textContent.trim();
  const staffId = document.getElementById("staffId").value.trim();
  const staffName = document.getElementById("staffName").value.trim();
  const staffAddress = document.getElementById("staffAddress").value.trim();
  const staffNIC = document.getElementById("staffNIC").value.trim();

  if (!staffId || !staffName || !staffAddress || !staffNIC) {
    alert("All fields are required to update a staff member.");
    return;
  }

  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  const staffIndex = staffArray.findIndex(
    (staff) => staff.username === loginId
  );

  if (staffIndex !== -1) {
    staffArray[staffIndex] = {
      ...staffArray[staffIndex],
      staffId: staffId,
      staffName: staffName,
      staffAddress: staffAddress,
      staffNIC: staffNIC,
      password: staffNIC,
    };

    localStorage.setItem("staffDetails", JSON.stringify(staffArray));

    alert("Staff details updated successfully!");

    clearForm("updateStaffForm");
    populateStaffTable();
  } else {
    alert("Staff member not found. Please search again.");
  }
}

// Delete Staff Member
function deleteStaff(event) {
  event.preventDefault();

  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  const searchTerm = document
    .getElementById("searchStaffId")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    alert("Please enter a NIC or Name to search.");
    return;
  }

  const staffIndex = staffArray.findIndex(
    (staff) =>
      staff.staffNIC.toLowerCase() === searchTerm ||
      staff.staffName.toLowerCase() === searchTerm
  );

  if (staffIndex !== -1) {
    staffArray.splice(staffIndex, 1);
    localStorage.setItem("staffDetails", JSON.stringify(staffArray));

    alert("Staff member deleted successfully!");
    clearForm("deleteStaffForm");
    populateStaffTable();
  } else {
    alert("No staff member found with the provided NIC or Name.");
    clearForm("deleteStaffForm");
  }
}

// Details of Staff
function populateStaffTable() {
  const tableBody = document.getElementById("staffTableBody");
  tableBody.innerHTML = "";

  let staffArray = JSON.parse(localStorage.getItem("staffDetails")) || [];

  staffArray.forEach((staff, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="staff-no">${index + 1}</td>
      <td>${staff.username}</td>
      <td>${staff.staffId}</td>
      <td>${staff.staffName}</td>
      <td>${staff.staffAddress}</td>
      <td>${staff.staffNIC}</td>
    `;

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateLoginId();
});

// Add Customer
function addCustomer(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value.trim();
  const customerName = document.getElementById("customerName").value.trim();
  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  if (!customerId || !customerName || !customerAddress) {
    alert("All fields are required to add a customer.");
    return;
  }

  if (!validatePhoneNumber("customerId")) {
    alert(
      "Invalid phone number. Please enter a valid Sri Lankan mobile number."
    );
    return;
  }

  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  const newCustomer = {
    customerId: customerId,
    customerName: customerName,
    customerAddress: customerAddress,
  };

  customerArray.push(newCustomer);

  let updatedCustomer = JSON.stringify(customerArray);

  localStorage.setItem("customerDetails", updatedCustomer);

  console.log(localStorage.getItem("customerDetails"));

  alert(`Customer added successfully! ID: ${customerId}`);
  clearForm("customer-form");
  populateCustomerTable();
}

// Search Customer
function searchCustomer() {
  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  const searchId = document.getElementById("searchCustomerId").value;
  const customer = customerArray.find((c) => c.customerId === searchId);

  if (customer) {
    document.getElementById("customerId").value = customer.customerId;
    document.getElementById("customerName").value = customer.customerName;
    document.getElementById("customerAddress").value = customer.customerAddress;
  } else {
    alert("Customer not found");
  }
}

// Update Customer
function updateCustomer(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value.trim();
  const customerName = document.getElementById("customerName").value.trim();
  const customerAddress = document
    .getElementById("customerAddress")
    .value.trim();

  if (!customerId || !customerName || !customerAddress) {
    alert("All fields are required to update a customer.");
    return;
  }

  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  const customerIndex = customerArray.findIndex(
    (c) => c.customerId === customerId
  );

  if (customerIndex !== -1) {
    customerArray[customerIndex] = {
      customerId: customerId,
      customerName: customerName,
      customerAddress: customerAddress,
    };

    localStorage.setItem("customerDetails", JSON.stringify(customerArray));

    alert(`Customer updated successfully! ID: ${customerId}`);
    clearForm("updateCustomerForm");
    populateCustomerTable();
  } else {
    alert("Customer not found");
  }
}

// Delete Customer
function deleteCustomer(event) {
  event.preventDefault();

  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  const customerId = document.getElementById("customerId").value;

  const customerIndex = customerArray.findIndex(
    (c) => c.customerId === customerId
  );

  if (customerIndex !== -1) {
    customerArray.splice(customerIndex, 1);
    localStorage.setItem("customerDetails", JSON.stringify(customerArray));

    alert(`Customer deleted successfully! ID: ${customerId}`);
    clearForm("deleteCustomerForm");
    populateCustomerTable();
  } else {
    alert("Customer not found");
  }
}

// Details of Customers
function populateCustomerTable() {
  const tableBody = document.getElementById("customerTableBody");
  tableBody.innerHTML = "";

  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  customerArray.forEach((customer, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="customer-no">${index + 1}</td>
      <td>${customer.customerId}</td>
      <td>${customer.customerName}</td>
      <td>${customer.customerAddress}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Update Item Code
function updateItemCode() {
  const highestCode = items.reduce((max, item) => {
    const code = parseInt(item.itemCode.substring(1), 10);
    return code > max ? code : max;
  }, 1000);

  const newCode = "B" + (highestCode + 1).toString().padStart(4, "0");

  document.getElementById("itemCode").textContent = newCode;
}

// Add Item
function addItem(event) {
  event.preventDefault();

  const itemCode = document.getElementById("itemCode").textContent;
  const category = document.getElementById("category").value;
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const itemDiscount = parseFloat(
    document.getElementById("itemDiscount").value
  );

  if (!itemCode) {
    alert("Item Code is required.");
    return;
  }
  if (!category) {
    alert("Category is required.");
    return;
  }
  if (!itemName) {
    alert("Item Name is required.");
    return;
  }
  if (isNaN(itemPrice) || itemPrice <= 0) {
    alert("Item Price must be a positive number.");
    return;
  }
  if (isNaN(itemDiscount) || itemDiscount < 0) {
    alert("Item Discount must be a non-negative number.");
    return;
  }

  const newItem = {
    itemCode: itemCode,
    category: category,
    itemName: itemName,
    price: itemPrice,
    discount: itemDiscount,
  };

  items.push(newItem);

  alert(`Item added successfully! Code: ${itemCode}`);
  clearForm("item-form");
  updateItemCode();
}

// Search Item
function searchItem() {
  const searchItemId = document.getElementById("searchItemId").value;
  const item = items.find(
    (item) => item.itemCode === searchItemId || item.itemName === searchItemId
  );

  if (item) {
    document.getElementById("itemCode").textContent = item.itemCode;
    document.getElementById("category").value = item.category;
    document.getElementById("itemName").value = item.itemName;
    document.getElementById("itemPrice").value = item.price.toFixed(2);
    document.getElementById("itemDiscount").value = item.discount;

    console.log(`Setting category value to: ${item.category}`);
    console.log(
      `Current category value is: ${document.getElementById("category").value}`
    );
  } else {
    alert("Item not found.");
    clearForm("updateItemForm");
  }
}

// Update Item
function updateItem(event) {
  event.preventDefault();

  const itemCode = document.getElementById("itemCode").textContent;
  const category = document.getElementById("category").value;
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const itemDiscount = parseFloat(
    document.getElementById("itemDiscount").value
  );

  const itemIndex = items.findIndex((item) => item.itemCode === itemCode);
  if (itemIndex !== -1) {
    items[itemIndex] = {
      itemCode: itemCode,
      category: category,
      itemName: itemName,
      price: itemPrice,
      discount: itemDiscount,
    };

    alert(`Item updated successfully! Code: ${itemCode}`);
  } else {
    alert(`Item with code ${itemCode} not found.`);
  }

  clearForm("updateItemForm");
  updateItemCode();
}

// Delete Item
function deleteItem(event) {
  event.preventDefault();

  const itemCode = document.getElementById("itemCode").textContent;

  const itemIndex = items.findIndex((item) => item.itemCode === itemCode);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);

    alert(`Item with code ${itemCode} has been deleted.`);
  } else {
    alert(`Item with code ${itemCode} not found.`);
  }

  clearForm("deleteItemForm");
}

// Details of Items
function populateItemTable() {
  const tableBody = document.getElementById("itemTableBody");
  tableBody.innerHTML = "";

  items.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="item-no">${index + 1}</td>
      <td>${item.itemCode}</td>
      <td>${item.category}</td>
      <td>${item.itemName}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.discount.toFixed(2)}%</td>
    `;

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateItemCode();
});

// Add a new row to the order table
function addItem() {
  let tableBody = document.querySelector(".add-order-table tbody");
  let newRow = tableBody.insertRow();

  newRow.innerHTML = `
    <td class="itemCodeCell">
        <input type="text" class="itemSearch" placeholder="Enter Item Code" oninput="updateItemDetails(this)" />
    </td>
    <td class="itemCategory"></td>
    <td class="itemName"></td>
    <td class="itemPrice"></td>
    <td class="itemDiscount">0.00</td>
    <td>
        <i class="fa-regular fa-square-minus" onclick="decrementQuantity(this)"></i>
        <span class="quantity">1</span>
        <i class="fa-regular fa-square-plus" onclick="incrementQuantity(this)"></i>
    </td>
    <td class="itemTotal">0.00</td>
    <td class="deleteBtn">
        <i class="fa-solid fa-trash" onclick="deleteItem(this)"></i>
    </td>
  `;

  updateOrderSummary();
}

// Update item details in the row based on item code input
function updateItemDetails(input) {
  let row = input.closest("tr");
  let itemCode = input.value.trim().toLowerCase();

  let item = items.find((i) => i.itemCode.toLowerCase() === itemCode);

  if (item) {
    row.querySelector(".itemCategory").textContent = item.category;
    row.querySelector(".itemName").textContent = item.itemName;
    row.querySelector(".itemPrice").textContent = item.price.toFixed(2);
    row.querySelector(".itemDiscount").textContent = item.discount.toFixed(2);
    row.querySelector(".quantity").textContent = "1";
    updateItemTotal(row);
  } else {
    row.querySelector(".itemCategory").textContent = "";
    row.querySelector(".itemName").textContent = "";
    row.querySelector(".itemPrice").textContent = "";
    row.querySelector(".itemDiscount").textContent = "0.00";
    row.querySelector(".itemTotal").textContent = "0.00";
  }
  updateOrderSummary();
}

// Update the total for an item based on price, discount, and quantity
function updateItemTotal(row) {
  let price = parseFloat(row.querySelector(".itemPrice").textContent) || 0;
  let discount =
    parseFloat(row.querySelector(".itemDiscount").textContent) || 0;
  let quantity = parseInt(row.querySelector(".quantity").textContent) || 1;
  let total = price * quantity * (1 - discount / 100);
  row.querySelector(".itemTotal").textContent = total.toFixed(2);
  updateOrderSummary();
}

// Decrement the quantity of an item
function decrementQuantity(element) {
  let quantityElement = element.nextElementSibling;
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantityElement.textContent = quantity - 1;
    updateItemTotal(element.closest("tr"));
  }
}

// Increment the quantity of an item
function incrementQuantity(element) {
  let quantityElement = element.previousElementSibling;
  let quantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = quantity + 1;
  updateItemTotal(element.closest("tr"));
}

// Delete a row from the order table
function deleteItem(element) {
  let row = element.closest("tr");
  row.remove();
  updateOrderSummary();
}

// Update the order summary with total discount and amount
function updateOrderSummary() {
  let totalDiscount = 0;
  let totalAmount = 0;

  let rows = document.querySelectorAll(".add-order-table tbody tr");
  rows.forEach((row) => {
    let itemPrice =
      parseFloat(row.querySelector(".itemPrice").textContent) || 0;
    let quantity = parseInt(row.querySelector(".quantity").textContent) || 1;
    let itemDiscount =
      parseFloat(row.querySelector(".itemDiscount").textContent) || 0;
    let itemTotal =
      parseFloat(row.querySelector(".itemTotal").textContent) || 0;

    totalDiscount += itemPrice * quantity * (itemDiscount / 100);
    totalAmount += itemTotal;
  });

  document.getElementById("discount").value = totalDiscount.toFixed(2);
  document.getElementById("total").value = totalAmount.toFixed(2);
}

// Set Order ID
function setOrderId() {
  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];

  let orderNumber = orderArray.length + 1;
  let newOrderId = "O" + orderNumber.toString().padStart(4, "0");
  document.getElementById("orderId").textContent = newOrderId;
  return newOrderId;
}

// Add Order
function addOrder(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value.trim();
  const discount = document.getElementById("discount").value.trim();
  const total = document.getElementById("total").value.trim();

  if (!customerId || !discount || !total) {
    alert("All fields are required to add an order.");
    return;
  }

  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];
  let customerArray = JSON.parse(localStorage.getItem("customerDetails")) || [];

  const customer = customerArray.find((c) => c.customerId === customerId);

  if (!customer) {
    alert("Invalid Customer ID");
    return;
  }

  let orderId = setOrderId();

  let orderItems = [];
  let rows = document.querySelectorAll(".add-order-table tbody tr");

  rows.forEach((row) => {
    let itemCode = row.querySelector(".itemSearch").value;
    let itemCategory = row.querySelector(".itemCategory").textContent;
    let itemName = row.querySelector(".itemName").textContent;
    let itemPrice =
      parseFloat(row.querySelector(".itemPrice").textContent) || 0;
    let itemDiscount =
      parseFloat(row.querySelector(".itemDiscount").textContent) || 0;
    let quantity = parseInt(row.querySelector(".quantity").textContent) || 1;
    let itemTotal =
      parseFloat(row.querySelector(".itemTotal").textContent) || 0;

    if (itemCode) {
      orderItems.push({
        itemCode,
        itemCategory,
        itemName,
        itemPrice,
        itemDiscount,
        quantity,
        itemTotal,
      });
    }
  });

  let totalDiscount =
    parseFloat(document.getElementById("discount").value) || 0;
  let totalAmount = parseFloat(document.getElementById("total").value) || 0;

  let newOrder = {
    orderId: orderId,
    customerId: customerId,
    customerName: customer.customerName,
    orderDateTime: new Date().toLocaleString(),
    orderedItems: orderItems,
    totalDiscount: totalDiscount,
    totalAmount: totalAmount,
  };

  orderArray.push(newOrder);

  let updatedOrder = JSON.stringify(orderArray);

  localStorage.setItem("orderDetails", updatedOrder);

  console.log(localStorage.getItem("orderDetails"));

  alert("Order added successfully!");
  clearForm("order-form");
  populateOrderTable();
  setOrderId();
}

// Search Order
function searchOrder() {
  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];

  const orderId = document.getElementById("searchOrderId").value.trim();
  const order = orderArray.find((o) => o.orderId === orderId);

  if (order) {
    console.log("Order found:", order);

    document.getElementById("orderId").textContent = order.orderId;
    document.getElementById("customerId").value = order.customerId;
    document.getElementById("discount").value = order.totalDiscount.toFixed(2);
    document.getElementById("total").value = order.totalAmount.toFixed(2);

    let tableBody = document.querySelector(".add-order-table tbody");
    tableBody.innerHTML = "";

    order.orderedItems.forEach((item) => {
      console.log("Item:", item);

      let newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td class="itemCode">${item.itemCode}</td>
        <td class="itemCategory">${item.itemCategory || "N/A"}</td>
        <td class="itemName">${item.itemName}</td>
        <td class="itemPrice">${item.itemPrice.toFixed(2)}</td>
        <td class="itemDiscount">${item.itemDiscount.toFixed(2)}</td>
        <td>
            <i class="fa-regular fa-square-minus" onclick="decrementQuantity(this)"></i>
            <span class="quantity">${item.quantity}</span>
            <i class="fa-regular fa-square-plus" onclick="incrementQuantity(this)"></i>
        </td>
        <td class="itemTotal">${item.itemTotal.toFixed(2)}</td>
        <td class="deleteBtn">
            <i class="fa-solid fa-trash" onclick="deleteItem(this)"></i>
        </td>
      `;
    });

    updateOrderSummary();
  } else {
    alert("Order not found!");
    clearForm("updateOrderForm");
  }
}

// Update Order
function updateOrder(event) {
  event.preventDefault();

  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const customerArray =
    JSON.parse(localStorage.getItem("customerDetails")) || [];

  const orderId = document.getElementById("orderId").textContent.trim();
  const orderIndex = orderArray.findIndex((o) => o.orderId === orderId);

  if (orderIndex === -1) {
    alert("Order not found!");
    return;
  }

  const customerId = document.getElementById("customerId").value.trim();
  const customer = customerArray.find((c) => c.customerId === customerId);

  if (!customer) {
    alert("Invalid Customer ID");
    return;
  }

  const orderItems = [];
  const rows = document.querySelectorAll(".add-order-table tbody tr");

  rows.forEach((row) => {
    const itemCode = row.querySelector(".itemCode").textContent.trim();
    const itemCategory = row.querySelector(".itemCategory").textContent.trim();
    const itemName = row.querySelector(".itemName").textContent.trim();
    const itemPrice =
      parseFloat(row.querySelector(".itemPrice").textContent.trim()) || 0;
    const itemDiscount =
      parseFloat(row.querySelector(".itemDiscount").textContent.trim()) || 0;
    const quantity =
      parseInt(row.querySelector(".quantity").textContent.trim()) || 1;
    const itemTotal =
      parseFloat(row.querySelector(".itemTotal").textContent.trim()) || 0;

    if (itemCode) {
      orderItems.push({
        itemCode,
        itemCategory,
        itemName,
        itemPrice,
        itemDiscount,
        quantity,
        itemTotal,
      });
    }
  });

  const totalDiscount =
    parseFloat(document.getElementById("discount").value.trim()) || 0;
  const totalAmount =
    parseFloat(document.getElementById("total").value.trim()) || 0;

  orderArray[orderIndex] = {
    orderId,
    customerId,
    customerName: customer.customerName,
    orderDateTime: new Date().toLocaleString(),
    orderedItems: orderItems,
    totalDiscount,
    totalAmount,
  };

  localStorage.setItem("orderDetails", JSON.stringify(orderArray));

  alert("Order updated successfully!");
  clearForm("updateOrderForm");
  populateOrderTable();
}

// Delete Odere
function deleteOrder(event) {
  event.preventDefault();

  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];

  let orderId = document.getElementById("orderId").textContent;
  let orderIndex = orders.findIndex((o) => o.orderId === orderId);

  if (orderIndex === -1) {
    alert("Order not found.");
    return;
  }

  orderArray.splice(orderIndex, 1);
  localStorage.setItem("orderDetails", JSON.stringify(orderArray));

  alert("Order deleted successfully!");
  clearForm("deleteOrderForm");
  populateOrderTable();
}

// Details of Orders
function populateOrderTable() {
  const tableBody = document.getElementById("orderTableBody");
  tableBody.innerHTML = "";

  let orderArray = JSON.parse(localStorage.getItem("orderDetails")) || [];

  orderArray.forEach((order, index) => {
    const itemList = order.orderedItems
      .map((item) => `${item.itemName} (x${item.quantity})`)
      .join(", ");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="order-no">${index + 1}</td>
      <td>${order.orderId}</td>
      <td>${order.customerId}</td>
      <td>${order.customerName}</td>
      <td>${order.orderDateTime}</td>
      <td>${itemList}</td>
      <td>${order.totalDiscount.toFixed(2)}</td>
      <td>${order.totalAmount.toFixed(2)}</td>
    `;

    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("staffTableBody")) {
    populateStaffTable();
  }
  if (document.getElementById("customerTableBody")) {
    populateCustomerTable();
  }
  if (document.getElementById("itemTableBody")) {
    populateItemTable();
  }
  if (document.getElementById("orderTableBody")) {
    populateOrderTable();
  }
});

// Display the correct user-specific buttons
function displayUserButtons() {
  const userType = localStorage.getItem("userType");

  if (userType === "admin") {
    document.getElementById("adminButton").style.display = "block";
    document.getElementById("staffButton").style.display = "none";
  } else if (userType === "staff") {
    document.getElementById("staffButton").style.display = "block";
    document.getElementById("adminButton").style.display = "none";
  } else {
    document.getElementById("adminButton").style.display = "none";
    document.getElementById("staffButton").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", displayUserButtons);

if (document.getElementById("customerId")) {
  document
    .getElementById("customerId")
    .addEventListener("input", () => validatePhoneNumber("customerId"));
}

if (document.getElementById("staffId")) {
  document
    .getElementById("staffId")
    .addEventListener("input", () => validatePhoneNumber("staffId"));
}

function validatePhoneNumber(inputId) {
  const phoneInput = document.getElementById(inputId);
  const phonePattern = /^(07[0-9]{8})$/;

  if (phonePattern.test(phoneInput.value)) {
    phoneInput.style.borderColor = "initial";
    return true;
  } else {
    phoneInput.style.borderColor = "red";
    return false;
  }
}
