const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'namitarastogimwn@gmail.com',
        subject: 'Thanks for joining in!!',
        html: `<html>

        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
                integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Sumex Welcome Email</title><!-- Designed by https://github.com/kaytcat -->
            <!-- Robot header image designed by Freepik.com -->
            <style type="text/css">
                @import url(https://fonts.googleapis.com/css?family=Nunito);
        
                /* Take care of image borders and formatting */
                img {
                    max-width: 600px;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
        
                html {
                    margin: 0;
                    padding: 0;
                }
        
                a {
                    text-decoration: none;
                    border: 0;
                    outline: none;
                    color: #bbbbbb;
                }
        
                a img {
                    border: none;
                }
        
                /* General styling */
                td,
                h1,
                h2,
                h3 {
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: 400;
                }
        
                td {
                    text-align: center;
                }
        
                body {
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-size-adjust: none;
                    width: 100%;
                    height: 100%;
                    color: #666;
                    background: #fff;
                    font-size: 16px;
                    height: 100vh;
                    width: 100%;
                    padding: 0px;
                    margin: 0px;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                .headline {
                    color: #444;
                    font-size: 36px;
                }
        
                .force-full-width {
                    width: 100% !important;
                }
            </style>
            <style media="screen" type="text/css">
                @media screen {
        
                    td,
                    h1,
                    h2,
                    h3 {
                        font-family: 'Nunito', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
                    }
                }
            </style>
            <style media="only screen and (max-width: 480px)" type="text/css">
                /* Mobile styles */
                @media only screen and (max-width: 480px) {
                    table[class="w320"] {
                        width: 320px !important;
                    }
                }
            </style>
            <style type="text/css"></style>
        
        </head>
        
        <body bgcolor="#fff" class="body"
            style="padding:20px; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
            <table align="center" cellpadding="0" cellspacing="0" height="100%" width="100%">
                <tbody>
                    <tr>
                        <td align="center" bgcolor="#fff" class="" valign="top" width="100%">
                            <center class="">
                                <table cellpadding="0" cellspacing="0" class="w320" style="margin: 0 auto;" width="600">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="" valign="top">
                                                <table cellpadding="0" cellspacing="0" style="margin: 0 auto;" width="100%">
                                                </table>
                                                <table bgcolor="#fff" cellpadding="0" cellspacing="0" class=""
                                                    style="margin: 0 auto; width: 100%; margin-top: 100px;">
                                                    <tbody style="margin-top: 15px;">
                                                        <tr class="">
                                                            <td class="">
                                                            </td>
                                                        </tr>
                                                        <tr class="">
                                                            <td class="headline">Welcome to Sumex Investment Bank!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <center class="">
                                                                    <table cellpadding="0" cellspacing="0" class=""
                                                                        style="margin: 0 auto;" width="75%">
                                                                        <tbody class="">
                                                                            <tr class="">
                                                                                <td class=""
                                                                                    style="color:#444; font-weight: 400;">
                                                                                    <br><br>
                                                                                    You have successfully been registered.
                                                                                    Sumex provide safe and secure platform for
                                                                                    all your transactions.<br><br>
                                                                                    We look forward ot working with you in
                                                                                    future.<br>
                                                                                    <br>
                                                                                    Your login credentials are provided below:
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Email:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">email@email.com</span>
                                                                                    <br>
                                                                                    <br><br>
                                                                                    <br>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </center>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="">
                                                                <div class="">
                                                                    <a style="background-color:#674299;border-radius:4px;color:#fff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:50px;text-align:center;text-decoration:none;width:350px;-webkit-text-size-adjust:none;"
                                                                        href="https://proptech-kenya.firebaseapp.com">Go to your
                                                                        account</a>
                                                                </div>
                                                                <br>
                                                            </td>
                                                        </tr>
                                                    </tbody>
        
                                                </table>
        
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>`
    })
}
const sendCancelationMail = (email) => {
    sgMail.send({
        to: email,
        from: 'namitarastogimwn@gmail.com',
        subject: 'Sorry to see you go!',
        html: `<html>

        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
                integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Sumex Welcome Email</title><!-- Designed by https://github.com/kaytcat -->
            <!-- Robot header image designed by Freepik.com -->
            <style type="text/css">
                @import url(https://fonts.googleapis.com/css?family=Nunito);
        
                /* Take care of image borders and formatting */
                img {
                    max-width: 600px;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
        
                html {
                    margin: 0;
                    padding: 0;
                }
        
                a {
                    text-decoration: none;
                    border: 0;
                    outline: none;
                    color: #bbbbbb;
                }
        
                a img {
                    border: none;
                }
        
                /* General styling */
                td,
                h1,
                h2,
                h3 {
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: 400;
                }
        
                td {
                    text-align: center;
                }
        
                body {
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-size-adjust: none;
                    width: 100%;
                    height: 100%;
                    color: #666;
                    background: #fff;
                    font-size: 16px;
                    height: 100vh;
                    width: 100%;
                    padding: 0px;
                    margin: 0px;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                .headline {
                    color: #444;
                    font-size: 36px;
                }
        
                .force-full-width {
                    width: 100% !important;
                }
            </style>
            <style media="screen" type="text/css">
                @media screen {
        
                    td,
                    h1,
                    h2,
                    h3 {
                        font-family: 'Nunito', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
                    }
                }
            </style>
            <style media="only screen and (max-width: 480px)" type="text/css">
                /* Mobile styles */
                @media only screen and (max-width: 480px) {
                    table[class="w320"] {
                        width: 320px !important;
                    }
                }
            </style>
            <style type="text/css"></style>
        
        </head>
        
        <body bgcolor="#fff" class="body"
            style="padding:20px; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
            <table align="center" cellpadding="0" cellspacing="0" height="100%" width="100%">
                <tbody>
                    <tr>
                        <td align="center" bgcolor="#fff" class="" valign="top" width="100%">
                            <center class="">
                                <table cellpadding="0" cellspacing="0" class="w320" style="margin: 0 auto;" width="600">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="" valign="top">
                                                <table cellpadding="0" cellspacing="0" style="margin: 0 auto;" width="100%">
                                                </table>
                                                <table bgcolor="#fff" cellpadding="0" cellspacing="0" class=""
                                                    style="margin: 0 auto; width: 100%; margin-top: 100px;">
                                                    <tbody style="margin-top: 15px;">
                                                        <tr class="">
                                                            <td class="">
                                                            </td>
                                                        </tr>
                                                        <tr class="">
                                                            <td class="headline">Sumex Investment Bank!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <center class="">
                                                                    <table cellpadding="0" cellspacing="0" class=""
                                                                        style="margin: 0 auto;" width="75%">
                                                                        <tbody class="">
                                                                            <tr class="">
                                                                                <td class=""
                                                                                    style="color:#444; font-weight: 400;">
                                                                                    <br><br>
                                                                                    Your account has been deleted.
                                                                                    Thanks for signing in.<br><br>
                                                                                    We look forward to your future visits.<br>
                                                                                    <br>
                                                                                   
                                                                                    <br><br>
                                                                                    <br>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </center>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="">
                                                                <div class="">
                                                                    <a style="background-color:#674299;border-radius:4px;color:#fff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:50px;text-align:center;text-decoration:none;width:350px;-webkit-text-size-adjust:none;"
                                                                        href="https://proptech-kenya.firebaseapp.com">Go to our home page</a>
                                                                </div>
                                                                <br>
                                                            </td>
                                                        </tr>
                                                    </tbody>
        
                                                </table>
        
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>`
    })
}

const sendTransactionEmail = (email, transaction) => {
    console.log(transaction);
    sgMail.send({
        to: email,
        from: 'namitarastogimwn@gmail.com',
        subject: "A TRANSACTION JUST HAPPENDED",
        html:  `<html>

        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
                integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Sumex Welcome Email</title><!-- Designed by https://github.com/kaytcat -->
            <!-- Robot header image designed by Freepik.com -->
            <style type="text/css">
                @import url(https://fonts.googleapis.com/css?family=Nunito);
        
                /* Take care of image borders and formatting */
                img {
                    max-width: 600px;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
        
                html {
                    margin: 0;
                    padding: 0;
                }
        
                a {
                    text-decoration: none;
                    border: 0;
                    outline: none;
                    color: #bbbbbb;
                }
        
                a img {
                    border: none;
                }
        
                /* General styling */
                td,
                h1,
                h2,
                h3 {
                    font-family: Helvetica, Arial, sans-serif;
                    font-weight: 400;
                }
        
                td {
                    text-align: center;
                }
        
                body {
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-size-adjust: none;
                    width: 100%;
                    height: 100%;
                    color: #666;
                    background: #fff;
                    font-size: 16px;
                    height: 100vh;
                    width: 100%;
                    padding: 0px;
                    margin: 0px;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                .headline {
                    color: #444;
                    font-size: 36px;
                }
        
                .force-full-width {
                    width: 100% !important;
                }
            </style>
            <style media="screen" type="text/css">
                @media screen {
        
                    td,
                    h1,
                    h2,
                    h3 {
                        font-family: 'Nunito', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
                    }
                }
            </style>
            <style media="only screen and (max-width: 480px)" type="text/css">
                /* Mobile styles */
                @media only screen and (max-width: 480px) {
                    table[class="w320"] {
                        width: 320px !important;
                    }
                }
            </style>
            <style type="text/css"></style>
        
        </head>
        
        <body bgcolor="#fff" class="body"
            style="padding:20px; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
            <table align="center" cellpadding="0" cellspacing="0" height="100%" width="100%">
                <tbody>
                    <tr>
                        <td align="center" bgcolor="#fff" class="" valign="top" width="100%">
                            <center class="">
                                <table cellpadding="0" cellspacing="0" class="w320" style="margin: 0 auto;" width="600">
                                    <tbody>
                                        <tr>
                                            <td align="center" class="" valign="top">
                                                <table cellpadding="0" cellspacing="0" style="margin: 0 auto;" width="100%">
                                                </table>
                                                <table bgcolor="#fff" cellpadding="0" cellspacing="0" class=""
                                                    style="margin: 0 auto; width: 100%; margin-top: 100px;">
                                                    <tbody style="margin-top: 15px;">
                                                        <tr class="">
                                                            <td class="">
                                                            </td>
                                                        </tr>
                                                        <tr class="">
                                                            <td class="headline">Sumex Investment Bank!</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <center class="">
                                                                    <table cellpadding="0" cellspacing="0" class=""
                                                                        style="margin: 0 auto;" width="75%">
                                                                        <tbody class="">
                                                                            <tr class="">
                                                                                <td class=""
                                                                                    style="color:#444; font-weight: 400;">
                                                                                    <span style="font-weight:bold;">Transaction Date:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">${transaction.transactionDate.slice(0, 10)}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Transaction Time:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">${transaction.transactionDate.slice(11, 16)}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Account Number:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">${transaction.accNo}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Transaction Amount:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">$${transaction.amount}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Transaction type:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">${transaction.transactionType}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">bank Type:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">${transaction.bankType}</span>
                                                                                    <br>
                                                                                    <span style="font-weight:bold;">Final Balance:
                                                                                        &nbsp;</span><span
                                                                                        style="font-weight:lighter;"
                                                                                        class="">$${transaction.finalBal}</span>
                                                                                    <br>
                                                                                    <br><br>
                                                                                    <br>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </center>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="">
                                                                <div class="">
                                                                    <a style="background-color:#674299;border-radius:4px;color:#fff;display:inline-block;font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:normal;line-height:50px;text-align:center;text-decoration:none;width:350px;-webkit-text-size-adjust:none;"
                                                                        href="https://proptech-kenya.firebaseapp.com">Go to your
                                                                        account</a>
                                                                </div>
                                                                <br>
                                                            </td>
                                                        </tr>
                                                    </tbody>
        
                                                </table>
        
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>`
    })
}
module.exports = {
    sendWelcomeMail,
    sendCancelationMail,
    sendTransactionEmail
}