const contact = {
  firstName: "Hasan",
  lastName: "Saed Ahmad",
  fullName: "Hasan Saed Ahmad",
  jobTitle: "Frontend Developer | React.js | JavaScript",
  phone: "+201127346533",
  email: "alkhwlyhasan777@gmail.com",
  website: "https://portfoilo-ux8i.vercel.app/",
  linkedin: "https://www.linkedin.com/in/hassan-saed1/",
  github: "https://github.com/alkhwlyhasan777-coder"
};

function escapeVCard(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function createVCard(data) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(data.lastName)};${escapeVCard(data.firstName)};;;`,
    `FN:${escapeVCard(data.fullName)}`,
    `TITLE:${escapeVCard(data.jobTitle)}`,
    `TEL;TYPE=CELL:${data.phone}`,
    `EMAIL;TYPE=INTERNET:${data.email}`,
    `URL:${data.website}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}`,
    `X-SOCIALPROFILE;TYPE=github:${data.github}`,
    "END:VCARD"
  ];

  return lines.join("\r\n") + "\r\n";
}

function downloadContact() {
  const vCardContent = createVCard(contact);
  const blob = new Blob([vCardContent], {
    type: "text/vcard;charset=utf-8"
  });

  const objectUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");

  downloadLink.href = objectUrl;
  downloadLink.download = "Hasan-Saed-Ahmad.vcf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

  const feedback = document.getElementById("button-feedback");
  feedback.textContent = "Your contact card has been downloaded.";
}

document.getElementById("save-contact").addEventListener("click", downloadContact);
document.getElementById("year").textContent = new Date().getFullYear();
