import nodemailer from "nodemailer";

// Configure your email transport
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

// Function to send email
export const sendEmailToRecipient = async (name, email, message) => {
  try {
    // Send email
    await transporter.sendMail({
      from: "your-email@gmail.com", // Sender address
      to: "recipient-email@example.com", // Receiver address
      subject: "New Contact Form Submission", // Email subject
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
