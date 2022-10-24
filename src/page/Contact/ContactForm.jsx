import { useState } from "react";

const ContactForm = ({ contact }) => {
    const [formValues, setFormValues] = useState({
        name: '', email: '', message: ''
    })
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    return (
        <main className={contact.flex}>
            <form action='https://formspree.io/f/xrgdybly' method="POST">
                <div className={contact.inputField}>
                    <input type="text" name="name" placeholder="Your name" value={formValues.name}
                        onChange={handleChange} className={contact.input} required />
                </div>
                <div className={contact.inputField}>
                    <input type="" name="email" placeholder="Your email" value={formValues.email}
                        onChange={handleChange} className={contact.input} required />
                </div>
                <div className={contact.inputField}>
                    <textarea name="message" placeholder="How do you feel about us" value={formValues.message}
                        onChange={handleChange} className={contact.input} required />
                </div>
                <div className={contact.inputField}>
                    <input type="submit" value="send" className={contact.submit} required />
                </div>
            </form>
        </main>
    );
}

export default ContactForm;