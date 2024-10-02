import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='contact'>
      {/* <p class="section__text__p1">Get in Touch</p> */}
      <h1 class="title">Contacter Moi</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <p><i className="fa-solid fa-envelope"></i> <a href="mailto:examplemail@gmail.com">ousmanendom901@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <p><i className="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/ousmane-ndome-655984258" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <div class="contact-info-container">
          <p><i className="fa-solid fa-phone"></i> +33 6 67 92 57 84</p>
        </div>
      </div>
    </section>
  )
}
