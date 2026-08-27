import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "taldon008@gmail.com",
        pass: "cvdf qflw satn ffle"
    }
});

export async function sendWelcomeEmail(spacefarer) {
    await transporter.sendMail({
        from: "taldon008@gmail.com",
        to: "taldon008@gmail.com",
        subject: "Bye",
        text: `Hello ${spacefarer.name || "Spacefarer"}!
                Stardust collection: ${spacefarer.stardustCollection}
                Wormhole navigation: ${spacefarer.wormholeNav}

            After I helped you out, you are more then enough to start your journey! Good luck!`
    });
}