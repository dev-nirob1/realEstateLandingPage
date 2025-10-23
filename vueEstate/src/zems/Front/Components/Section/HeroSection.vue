<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
      <h1>Experience Luxury Living at <span>VueEstate</span></h1>
      <p>
        Modern design, premium location, and breathtaking views — your dream
        home awaits.
      </p>
      <button @click="scrollToContact">Schedule a Visit</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  methods: {
    scrollToContact() {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  background: url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1800&q=80')
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(19, 68, 60, 0.8),
    rgba(19, 68, 60, 0.7)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 0 1.5rem;
  animation: fadeUp 1.2s ease forwards;
}

.hero-content h1 {
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content h1 span {
  color: #cba135;
}

.hero-content p {
  font-size: 1.1rem;
  color: #f2f2f2;
  margin-bottom: 1.5rem;
}

button {
  background: #cba135;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #b58f2e;
  transform: translateY(-3px);
}

/* Animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
}
</style>
