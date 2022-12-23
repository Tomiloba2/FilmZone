import ContactForm from './ContactForm'
import Container from '../../components/utils/Container'
import contact from './css/contact.module.css'
import Card from '../../components/utils/Card';
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
                  <Card>
                    <a href='tel:09176076234'>
                      <div className={contact.h3}>Call us</div>
                    </a>
                  </Card>
                </article>
                <article className={contact.item2}>
                  <Card>
                    <a href='mailto:test@gmail.com'>
                      <div className={contact.h3}>Email us</div>
                    </a>
                  </Card>
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