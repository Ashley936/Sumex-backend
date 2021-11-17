const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'namitarastogimwn@gmail.com',
        subject: 'Thanks for joining in!!',
        html: `<h1>Welcome to the app, ${name}</h1>. <h4>Let me know about your experience </h4>with the app.
        I am very open to any suggestions and will immediately look into any issues you have.`
    })
}
const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'namitarastogimwn@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon. Have a nice day!!`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelationMail
}