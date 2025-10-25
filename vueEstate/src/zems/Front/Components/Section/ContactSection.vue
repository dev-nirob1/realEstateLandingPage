<script setup lang="ts">
import BaseButton from '@/components/element/BaseButton.vue';
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import BaseTextArea from '@/components/element/BaseTextArea.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';

</script>

<template>
  <section class="contact bg-primary">
    <div class="container">
      <div class="medium-2 align-center gap-1">
        <div class="contact-info">
          <BaseTitle>Let's Talk About Your Dream Home.</BaseTitle>
          <BaseParagraph>Whether you're interest in buying, renting or just more information - we are here to help.
            Reach Out to us Today.</BaseParagraph>
          <ul>
            <li><span>Address:</span> 52 Green Valley, Dhaka, Bangladesh</li>
            <li><span>Phone:</span> +8801234567890</li>
            <li><span>Email:</span> info@realEastate.com</li>
          </ul>
        </div>

        <div class="form">
          <form>
            <div class="medium-2 align-center gap-2">
              <label for="name">Name
                <InputField id="name" type="text" placeholder="Enter Your Name" />
              </label>
              <label for="email">Email
                <InputField id="email" type="email" placeholder="Enter Your Email" />
              </label>
            </div>
            <label for="phone"> Number
              <InputField type="tel" id="phone" placeholder="Enter Your Phone Number" />
            </label>
            <label for="message"> Message
              <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
            </label>
            <BaseButton>
              Send Message</BaseButton>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact {
  padding: 3.75rem 0;
  color: var(--white-color);
}

.contact ul li {
  padding: .15rem 0;
}

.contact ul li span {
  color: #cba135;
  font-weight: bold;
}

.form {
  padding: 2rem;
  max-width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  background: var(--white-color);
  color: var(--light-color);
}

.form .btn {
  background: #cba135;
}
</style>
