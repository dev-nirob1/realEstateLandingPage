<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left Side: Contact Info -->
      <div class="contact-info">
        <h2>Let’s Talk About Your Dream Home</h2>
        <p>
          Whether you’re interested in buying, renting, or just want more information —
          we’re here to help. Reach out to us today.
        </p>

        <ul>
          <li><strong>Address:</strong> 52 Green Valley, Dhaka, Bangladesh</li>
          <li><strong>Phone:</strong> +880 1700 123 456</li>
          <li><strong>Email:</strong> info@vueestate.com</li>
        </ul>
      </div>

      <!-- Right Side: Contact Form + Map -->
      <div class="contact-right">
        <div class="form-card">
          <h3>Send Us a Message</h3>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input v-model="form.name" type="text" placeholder="Full Name" required />
            </div>
            <div class="form-group">
              <input v-model="form.email" type="email" placeholder="Email Address" required />
            </div>
            <div class="form-group">
              <textarea v-model="form.message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div class="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9030507770957!2d90.39122107468897!3d23.750876789141468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b895f4c4d2c9%3A0xb4efb0b4f490b173!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1698012345678"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: { name: "", email: "", message: "" },
    };
  },
  methods: {
    handleSubmit() {
      alert(`Thanks ${this.form.name}! We’ll get back to you soon.`);
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contact-section {
  background: #13443c;
  color: #fff;
  padding: 5rem 2rem;
  position: relative;
}

.contact-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  align-items: center;
}

.contact-info h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-info p {
  color: #cfcfcf;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 0.7rem;
  color: #eaeaea;
}

.contact-info strong {
  color: #cba135;
}

/* Contact Right */
.contact-right {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Floating Form Card */
.form-card {
  position: absolute;
  z-index: 2;
  background: #ffffff;
  color: #1e1e1e;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  width: 320px;
  right: 5%;
  top: 80%;
  transform: translateY(-20%);
}

.form-card h3 {
  color: #13443c;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.7rem;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  font-size: 0.95rem;
  outline: none;
  transition: border 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #cba135;
}

button {
  width: 100%;
  background: #cba135;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #b58f2e;
  transform: translateY(-2px);
}

/* Map Box */
.map-box {
  flex: 1;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.map-box iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  .contact-right {
    flex-direction: column;
  }
  .form-card {
    position: relative;
    right: 0;
    transform: none;
    width: 100%;
    margin-top: 1rem;
  }
  .map-box {
    width: 100%;
  }
}
</style>
