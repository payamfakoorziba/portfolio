import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>
      Hello,
      <br />
      <br />
      You have received a new message from the contact form on your website.
    </p>
    <p>
      Here are the details:
      <br />
      <br />
      <strong>Name:</strong> {name}
      <br />
      <strong>Email:</strong> {email}
      <br />
      <strong>Message:</strong> {message}
    </p>
  </div>
);
