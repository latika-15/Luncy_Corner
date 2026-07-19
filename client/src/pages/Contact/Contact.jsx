import "./Contact.css";

import ContactForm from "../../components/ContactForm";

function Contact(){

return(

<main className="contact-page section">

<div className="container contact-grid">

<div className="contact-content">

<span>

CONTACT

</span>

<h1>

Let's Create
Something Beautiful.

</h1>

<p>

Whether you're launching a new brand,
refreshing your social media,
or designing a presentation,
I'd love to hear your ideas.

</p>

<div className="contact-info">

<div>

<h3>Email</h3>

<p>

hello@luncycorner.com

</p>

</div>

<div>

<h3>Instagram</h3>

<p>

@luncycorner

</p>

</div>

<div>

<h3>Based In</h3>

<p>

India

</p>

</div>

</div>

</div>

<ContactForm/>

</div>

</main>

)

}

export default Contact;