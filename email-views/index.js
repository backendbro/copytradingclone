const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const verifyEmailSource = fs.readFileSync( path.resolve(__dirname, './verify.handlebars'), 'utf8' );
const forgotPasswordEmailSource = fs.readFileSync( path.resolve(__dirname, './forgotpassword.handlebars'), 'utf-8')
const fa2AuthSorurce = fs.readFileSync( path.resolve(__dirname, './fA2Auth.handlebars'), 'utf-8')
const adminMessageSource = fs.readFileSync( path.resolve(__dirname, './adminMessage.handlebars'), 'utf-8')
const updateEmailMessageSource = fs.readFileSync( path.resolve(__dirname, './updateEmailMessage.handlebars'), 'utf-8')
const contactUsTemplateSource = fs.readFileSync( path.resolve(__dirname, './contactUsMessage.handlebars'), 'utf-8')

const verifyEmailTemplate = handlebars.compile(verifyEmailSource);
const forgotPasswordTemplate = handlebars.compile(forgotPasswordEmailSource)
const fA2AuthTemplate = handlebars.compile(fa2AuthSorurce)
const adminMessageTemplate = handlebars.compile(adminMessageSource)
const updateEmailMessageTemplate = handlebars.compile(updateEmailMessageSource)
const contactUsTemplate = handlebars.compile(contactUsTemplateSource)

module.exports = {
  verifyEmailTemplate,
  forgotPasswordTemplate,
  fA2AuthTemplate,
  adminMessageTemplate,
  updateEmailMessageTemplate,
  contactUsTemplate
};
