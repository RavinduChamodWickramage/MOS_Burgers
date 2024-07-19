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

const items = [
  // Burgers
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

  // Submarines
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

  // Fries
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

  // Pasta
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

  // Chicken
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

  // Beverages
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

function clearForm(formId) {
  document.getElementById(formId).reset();
}

function adminLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const admin = admins.find((admin) => admin.username === username);

  if (admin) {
    if (admin.password === password) {
      window.location.href = "adminPage.html";
    } else {
      alert("Invalid password. Please try again.");
    }
  } else {
    alert("Invalid username and/or password. Please try again.");
  }
}

function loginStaff(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const staff = staffs.find((staff) => staff.username === username);

  if (staff) {
    if (staff.staffNIC === password) {
      window.location.href = "staffPage.html";
    } else {
      alert("Invalid password. Please try again.");
    }
  } else {
    alert("Invalid username. Please try again.");
  }
}

function updateLoginId() {
  const loginId = "MOS" + (staffs.length + 1).toString().padStart(4, "0");
  document.getElementById("loginId").textContent = loginId;
}

function addStaff(event) {
  event.preventDefault();

  const staffId = document.getElementById("staffId").value;
  const staffName = document.getElementById("staffName").value;
  const staffAddress = document.getElementById("staffAddress").value;
  const staffNIC = document.getElementById("staffNIC").value;

  const loginId = "MOS" + (staffs.length + 1).toString().padStart(4, "0");

  const newStaff = {
    username: loginId,
    password: staffNIC,
    staffId: staffId,
    staffName: staffName,
    staffAddress: staffAddress,
    staffNIC: staffNIC,
  };

  staffs.push(newStaff);

  alert(
    `Staff added successfully! Login ID: ${loginId}, Password: ${staffNIC}`
  );
  clearForm("staff-form");
  populateStaffTable();
}

function searchStaff() {
  const searchTerm = document
    .getElementById("searchItemId")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    alert("Please enter a NIC or Name to search.");
    return;
  }

  const staff = staffs.find(
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

function updateStaff(event) {
  event.preventDefault();

  const loginId = document.getElementById("loginId").textContent.trim();
  const staffId = document.getElementById("staffId").value.trim();
  const staffName = document.getElementById("staffName").value.trim();
  const staffAddress = document.getElementById("staffAddress").value.trim();
  const staffNIC = document.getElementById("staffNIC").value.trim();

  const staffIndex = staffs.findIndex((staff) => staff.username === loginId);

  if (staffIndex !== -1) {
    staffs[staffIndex] = {
      ...staffs[staffIndex],
      staffId: staffId,
      staffName: staffName,
      staffAddress: staffAddress,
      staffNIC: staffNIC,
      password: staffNIC,
    };

    alert("Staff details updated successfully!");

    clearForm("updateStaffForm");
    populateStaffTable();
  } else {
    alert("Staff member not found. Please search again.");
  }
}

function deleteStaff(event) {
  event.preventDefault();

  const searchTerm = document
    .getElementById("searchStaffId")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    alert("Please enter a NIC or Name to search.");
    return;
  }

  const staffIndex = staffs.findIndex(
    (staff) =>
      staff.staffNIC.toLowerCase() === searchTerm ||
      staff.staffName.toLowerCase() === searchTerm
  );

  if (staffIndex !== -1) {
    staffs.splice(staffIndex, 1);
    alert("Staff member deleted successfully!");
    clearForm("deleteStaffForm");
    populateStaffTable();
  } else {
    alert("No staff member found with the provided NIC or Name.");
    clearForm("deleteStaffForm");
  }
}

function populateStaffTable() {
  const tableBody = document.getElementById("staffTableBody");
  tableBody.innerHTML = "";

  staffs.forEach((staff, index) => {
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
  populateStaffTable();
});

document.addEventListener("DOMContentLoaded", function () {
  updateLoginId();
});

function addCustomer(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value;
  const customerName = document.getElementById("customerName").value;
  const customerAddress = document.getElementById("customerAddress").value;

  const newCustomer = {
    customerId: customerId,
    customerName: customerName,
    customerAddress: customerAddress,
  };

  customers.push(newCustomer);

  alert(`Customer added successfully! ID: ${customerId}`);
  clearForm("customer-form");
  populateCustomerTable();
}

function searchCustomer() {
  const searchId = document.getElementById("searchCustomerId").value;
  const customer = customers.find((c) => c.customerId === searchId);

  if (customer) {
    document.getElementById("customerId").value = customer.customerId;
    document.getElementById("customerName").value = customer.customerName;
    document.getElementById("customerAddress").value = customer.customerAddress;
  } else {
    alert("Customer not found");
  }
}

function updateCustomer(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value;
  const customerName = document.getElementById("customerName").value;
  const customerAddress = document.getElementById("customerAddress").value;

  const customerIndex = customers.findIndex((c) => c.customerId === customerId);

  if (customerIndex !== -1) {
    customers[customerIndex] = {
      customerId: customerId,
      customerName: customerName,
      customerAddress: customerAddress,
    };

    alert(`Customer updated successfully! ID: ${customerId}`);
    clearForm("updateCustomerForm");
    populateCustomerTable();
  } else {
    alert("Customer not found");
  }
}

function deleteCustomer(event) {
  event.preventDefault();

  const customerId = document.getElementById("customerId").value;

  const customerIndex = customers.findIndex((c) => c.customerId === customerId);

  if (customerIndex !== -1) {
    customers.splice(customerIndex, 1);

    alert(`Customer deleted successfully! ID: ${customerId}`);
    clearForm("deleteCustomerForm");
    populateCustomerTable();
  } else {
    alert("Customer not found");
  }
}

function populateCustomerTable() {
  const tableBody = document.getElementById("customerTableBody");
  tableBody.innerHTML = "";

  customers.forEach((customer, index) => {
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

document.addEventListener("DOMContentLoaded", function () {
  populateCustomerTable();
});

// function updateItemCode() {
//   const itemCode = "B" + (items.length + 1001).toString().padStart(4, "0");
//   document.getElementById("itemCode").textContent = itemCode;
// }

function updateItemCode() {
  const highestCode = items.reduce((max, item) => {
    const code = parseInt(item.itemCode.substring(1), 10);
    return code > max ? code : max;
  }, 1000);

  const newCode = "B" + (highestCode + 1).toString().padStart(4, "0");

  document.getElementById("itemCode").textContent = newCode;
}

function addItem(event) {
  event.preventDefault();

  const itemCode = document.getElementById("itemCode").textContent;
  const category = document.getElementById("category").value;
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const itemDiscount = parseFloat(
    document.getElementById("itemDiscount").value
  );

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
  } else {
    alert("Item not found.");
    clearForm("updateItemForm");
  }
}

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
  populateItemTable();
});

document.addEventListener("DOMContentLoaded", function () {
  updateItemCode();
});
