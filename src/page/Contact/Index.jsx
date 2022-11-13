import ContactForm from './ContactForm'
import Container from '../../components/utils/Container'
import { Mail, Phone } from "@mui/icons-material";
import contact from './css/contact.module.css'
const Contact = () => {
  return (
    <main className={contact.main}>
      <Container>
        <h3 className={contact.h3}>Contact us</h3>
        <section className={contact.grid}>
          <article className={contact.item2}>
            <ContactForm contact={contact} />
          </article>
          <article>
          <h2>You can also Get in Touch with us</h2>
          <section>
          <article className={contact.item1}>
            <a href='tel:09176076234'>
              <div className={contact.icon}><Phone /></div>
              <div className={contact.h3}>Call us</div>
            </a>
          </article>
          <article className={contact.item2}>
            <a href='mailto:test@gmail.com'>
              <div className={contact.icon} ><Mail /></div>
              <div className={contact.h3}>Email us</div>
            </a>
          </article>
          <div></div>
        </section>
          </article>
        </section>
        {/* next section*/}
      </Container>
    </main>
  );
}

export default Contact;