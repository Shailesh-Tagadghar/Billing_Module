document.addEventListener('DOMContentLoaded', function () {
    const addCustomerForm = document.getElementById('add-customer-form');
    const customerItems = document.getElementById('customer-items');
  
    addCustomerForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const mobileNo = document.getElementById('mobileNo').value;
      const shopName = document.getElementById('shopName').value;
  
      // You should send this data to your server and save it to MongoDB.
      // For simplicity, we're just adding it to the list here.
      const customerItem = document.createElement('li');
      customerItem.innerHTML = `<b>Name:</b> ${name}, <b>Mobile No:</b> ${mobileNo}, <b>Shop Name:</b> ${shopName}`;
      customerItems.appendChild(customerItem);
  
      // Clear the form inputs
      addCustomerForm.reset();
    });
  });
  