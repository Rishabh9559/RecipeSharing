
import http from 'http';
import nodemailer from 'nodemailer'

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS

        }
    });

    const receiver = {
        from : GMAIL_USER,
        to : "rishabhkushwaha9559@gmail.com",
        subject : "yyguy",
        text : "Hello this is a text mail!",
        // html: "<h1>hello rishabh</h1>",
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(8080);