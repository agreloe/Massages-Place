import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Font
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}


export const ContactEmail: React.FC<ContactEmailProps> = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>{message}</Preview>
    <Font
          fontFamily="new-reason, sans-serif"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://use.typekit.net/af/8a1167/00000000000000007735fe27/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3",
            format: "woff"
          }}
          fontWeight={400}
          fontStyle="normal"
        />

    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://ik.imagekit.io/masajescompostela/logo-mc-redisign.png`}
            width="64"
            height="64"
            alt="Lugar de masajes"
          />
          <Hr style={hr} />
          <Text style={paragraphUnderline}>
            Nuevo mensaje de:
          </Text>
          <Text style={paragraph}>{name}</Text>
          <Text style={paragraphUnderline}>
            Contenido:
          </Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>
            Responder por mail: <Link href={`mailto:${email}`}>{email}</Link>
          </Text>


          <Hr style={hr} />




          <Text style={paragraph}>— Lugar de masajes</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Recibido desde masajescompostela.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f6f9fc"
};

const container = {
  backgroundColor: "#EBE5E0",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#DBBFBB",
  margin: "20px 0",
};

const paragraph = {
  color: "#39383A",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const paragraphUnderline = {
  color: "#39383A",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  textDecoration: "underline",
};

const footer = {
  color: "#39383A",
  fontSize: "12px",
  lineHeight: "16px",
};
