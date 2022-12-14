  const nodemailer = require("nodemailer");
const { 
   verifyEmailTemplate, 
   forgotPasswordTemplate, 
   fA2AuthTemplate,
   adminMessageTemplate,
   updateEmailMessageTemplate
  } = require('../email-views/index')


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


  const sendEmail = async (to, subject, payload) => {
  let template;
  const {firstName, pin} = payload 
  if(subject == 'Verify Email CopyTradingOptions'){
   
   template = verifyEmailTemplate({firstName, pin})
  }

  else if (subject == 'Reset Password'){
    template = forgotPasswordTemplate({firstName, pin})
  }

  else if(subject == "Enter 2FA Code") {
    template = fA2AuthTemplate({firstName, pin})
  }else if(subject == "Update Email CopyTradingOptions"){
    template = updateEmailMessageTemplate({firstName, pin})
  }else if(subject == "Token Resent"){
    template = fA2AuthTemplate({firstName, pin})
  }
  else{
    const {firstName, description} = payload
    template = adminMessageTemplate({firstName, description})
  }


  const info = {
    from: "support@livetradingoptions.live",
    to,
    subject,
    html:template
  }
  
  await transporter.sendMail(info)
}

module.exports = sendEmail
