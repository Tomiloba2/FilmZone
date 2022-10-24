import ContactForm from './ContactForm'
import Container from '../../components/utils/Container'
import Card from "../../components/utils/Card";
import { Mail, Phone } from "@mui/icons-material";
import contact from './css/contact.module.css'
import svg2 from './css/svg2.webp'
const Contact = () => {
  return (
    <main className={contact.main}>
      <Container>
        <section className={contact.grid}>
          <article></article>
          <article className={contact.item1}>
            <img src={svg2}
              alt="contact" className={contact.img}
            />
          </article>
          <article className={contact.item2}>
            <Card>
              <h3 className={contact.h3}>Send us your feedback</h3>
              <ContactForm contact={contact} />
            </Card>
          </article>
          <article></article>
        </section>
        {/* next section*/}
        <h2 className={contact.h3}>You can also Get in Touch with us</h2>
        <section className={contact.grid}>
          <div></div>
          <article className={contact.item1}>
            <Card>
              <a href='tel:08166076235'>
                <div><Phone className={contact.icon} /></div>
                <div className={contact.h3}>Call us</div>
              </a>
            </Card>
          </article>
          <article className={contact.item2}>
            <Card>
              <a href='mailto:test@gmail.com'>
                <div><Mail className={contact.icon} /></div>
                <div className={contact.h3}>Email us</div>
              </a>
            </Card>
          </article>
          <div></div>
        </section>
      </Container>
    </main>
  );
}

export default Contact;