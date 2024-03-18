import { NextRequest } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body.data;

  console.log({ name, email, message });

  try {
    const data = await resend.emails.send({
      from: "info@payamfakoorziba.com",
      to: ["payamfakoor@gmail.com", "info@payamfakoorziba.com"],
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({
        name,
        email,
        message,
      }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
