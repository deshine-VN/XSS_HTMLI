function randomPhone() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

const phone = randomPhone();

console.log("🛠️ Creating new payment addresses with phone:", phone);

fetch("/mcheckout/api/2.0/addresses", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    address_line_1: "219, Natraj Market, S V Rd, Malad (e)",
    address_line_2: "219, Natraj Market, S V Rd, Malad (e)",
    address_type: "Home",
    city: "Mumbai",
    landmark: "",
    mobile: phone,
    name: "hihi",
    state: "Maharashtra",
    check_pin: true,
    country_id: 1,
    is_invalid_edit: false,
    pin: "400097",
    user_id: 534170266
  })
})
.then(res => {
  console.log("📥 POST response received");
  return res.text();
})
.then(postData => {
  console.log("📄 POST response body:");
  console.log(postData);

  console.log("📦 Fetching all addresses...");

  return fetch("/mcheckout/api/3.0/addresses", {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json"
    }
  });
})
.then(res => {
  console.log("📥 GET addresses response received");
  return res.text();
})
.then(addressData => {
  console.log("📄 Addresses response body:");
  console.log(addressData);

  console.log("👤 Fetching user profile...");

  return fetch("/api/v1/user_profile", {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json"
    }
  });
})
.then(res => {
  console.log("📥 User profile response received");
  return res.text();
})
.then(profileData => {
  console.log("📄 User profile:");
  console.log(profileData);
})
.catch(err => {
  console.error("❌ Error:", err);
});
