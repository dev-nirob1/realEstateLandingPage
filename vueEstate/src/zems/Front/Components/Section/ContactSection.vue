<template>
  <section class="contact-section">
    <div class="contact-container">
      <!-- Left side: Info -->
      <div class="contact-info">
        <h2>Book Your Visit Today</h2>
        <p>
          Experience luxury living in the heart of the city. Fill out the form and
          our representative will contact you shortly to schedule your visit.
        </p>

        <div class="contact-details">
          <p><strong>📍 Address:</strong> 123 Green Avenue, Dhaka</p>
          <p><strong>📞 Phone:</strong> +880 123 456 789</p>
          <p><strong>✉️ Email:</strong> info@vueestate.com</p>
        </div>
      </div>

      <!-- Right side: Form -->
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input id="name" v-model="form.name" type="text" placeholder="Enter your name" required />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input id="email" v-model="form.email" type="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input id="phone" v-model="form.phone" type="tel" placeholder="Enter your phone number" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="4" placeholder="Write your message"></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Inquiry</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.form.name}! We will contact you soon.`);
      this.form = { name: "", email: "", phone: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #13443C, #0F332E);
  color: #fff;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.contact-info {
  padding: 50px 40px;
  background: rgba(19, 68, 60, 0.85);
}

.contact-info h2 {
  font-size: 2rem;
  color: #CBA135;
  margin-bottom: 20px;
}

.contact-info p {
  color: #eaeaea;
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-details p {
  margin: 8px 0;
}

.contact-form {
  padding: 50px 40px;
  background: #fff;
  color: #222;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #13443C;
  outline: none;
  box-shadow: 0 0 8px rgba(19, 68, 60, 0.4);
}

.submit-btn {
  width: 100%;
  background: #CBA135;
  color: #fff;
  border: none;
  padding: 14px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #b18f2f;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info, .contact-form {
    padding: 40px 20px;
  }
}
</style>
