import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

/**
 * Sends the email for my user with the corresponding properties
 * env file could be used
 * @param {object} spacefarer 
 */
export async function sendWelcomeEmail(spacefarer) {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Bye",
        text: `Hello ${spacefarer.name || "Spacefarer"}!
                Stardust collection: ${spacefarer.stardustCollection}
                Wormhole navigation: ${spacefarer.wormholeNav}

            After I helped you out, you are more then enough to start your journey! Good luck!`
    });
}