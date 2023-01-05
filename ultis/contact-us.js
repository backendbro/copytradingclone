const nodemailer = require("nodemailer");
const { contactUsTemplate} = require('../email-views/index')


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user:"chikanzube03@gmail.com", 
      pass: "naakobayvicgypoo"
    }
  });


  const sendEmailContact = async (subject, payload) => {
    const {name, phoneNumber, message, userEmail} = payload
    const template = contactUsTemplate({name, message, phoneNumber, userEmail})
  


  const info = {
    from: userEmail,
    to:"backendbomafiaso@gmail.com",
    subject,
    html:template
  }
  
  await transporter.sendMail(info)
}

module.exports = sendEmailContact
