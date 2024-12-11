// signup-> on signup send email , welcome
// preparation welcome email template -> placeholders for name
// execution -> take that template -> read -> string -> replace -> actual value
const {USER_EMAIL, USER_PASS} = process.env;
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASS,
  },
});

function updateTemplate(htmlString,emailObject){
    let keysArr=Object.keys(emailObject);
    keysArr.forEach((key)=>{
        htmlString=htmlString.replace(`#{${key}}`,emailObject[key])
    });
    return htmlString;
}
// let email2
async function emailSender(template, receiverEmail, emailObject) {
  try {
    const templatePath = path.join(__dirname, "templates", template);
    const htmlString = await fs.promises.readFile(templatePath, "utf-8");
    const finalEmailContent = updateTemplate(htmlString, emailObject);
    if(template=="promotion.html"){
      msg = {
        from: "Activa Clinics Reception activamarketing6610@gmail.com", // sender address
        to: receiverEmail,
        // list of receivers
        subject: "Appointment Confirmation", // Subject line
        // cc : "sidtomar@outlook.com",
        // bcc: "workspace969@gmail.com",
        attachments:[
          // {
          //   filename:"paySlip.png",
          //   path:'1a.png'
          // },
          {
            filename: 'Activa Logo.png',
            path: 'Activa Logo.png',
            cid: 'logo' // same cid value as in the HTML img src
          },
          {
            filename: 'promo-image-2.jpg',
            path: 'promo-image-2.jpg',
            cid: 'promo-image-2'
          },
          {
            filename: 'promo-image.jpg',
            path: 'promo-image.jpg',
            cid: 'promo-image'
          }
        ],
        text: "", // plain text body
        html: finalEmailContent, // html body
      };
    }else{
      msg = {
        from: "Activa Clinics Reception activamarketing6610@gmail.com", // sender address
        to: receiverEmail,
        // list of receivers
        subject: "Appointment Confirmation", // Subject line
        // cc : "sidtomar@outlook.com",
        // bcc: "workspace969@gmail.com",
        attachments:[
          // {
          //   filename:"paySlip.png",
          //   path:'1a.png'
          // },
          {
            filename: 'Activa Logo.png',
            path: 'Activa Logo.png',
            cid: 'logo' // same cid value as in the HTML img src
          },
          {
            filename: 'promo-image.jpg',
            path: 'promo-image.jpg',
            cid: 'promo-image'
          }
        ],
        text: "", // plain text body
        html: finalEmailContent, // html body
      };
    }
    await transporter.sendMail(msg);
  } catch (err) {
    console.log(err);
  }
}

// emailSender("appointmentEmail.html", "goelabhishek694@gmail.com , management@activaclinics.com", { name: "Abhishek", service: "Physiotherapy", day:"Tuesday", month:"July", date:"30", location:"Missisaugua" }).then(()=>console.log("email sent"));

module.exports = {emailSender};
