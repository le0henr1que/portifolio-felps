import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { email, message, subject, name } = req.body;

  const content = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: process.env.SENDGRID_TO_EMAIL,
    subject,
    text: message,
    html: `<p>
    Email de: ${name} - ${email} <br>
        ${message}
    </p>`,
  };

  try {
    const response = await sgMail.send(content);
    console.log(response);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error.response.body);
    res.status(400).send("Message not sent.");
  }
}
