const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const verifyEmailSource = fs.readFileSync( path.resolve(__dirname, './verify.handlebars'), 'utf8' );
const forgotPasswordEmailSource = fs.readFileSync( path.resolve(__dirname, './forgotpassword.handlebars'), 'utf-8')

const verifyEmailTemplate = handlebars.compile(verifyEmailSource);
const forgotPasswordTemplate = handlebars.compile(forgotPasswordEmailSource)

module.exports = {
  verifyEmailTemplate,
  forgotPasswordTemplate
};
