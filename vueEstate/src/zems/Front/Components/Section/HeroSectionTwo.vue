<template>
  <section class="hero-bright">
    <div class="hero-container">
      <!-- Left: Text Content -->
      <div class="hero-text">
        <h1>
          Find Your <span>Perfect Home</span><br />
          with VueEstate
        </h1>
        <p>
          Explore modern homes designed for comfort, elegance, and convenience —
          where every detail feels just right.
        </p>

        <div class="hero-buttons">
          <button class="primary-btn">Explore Homes</button>
          <button class="secondary-btn">Contact Agent</button>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="hero-image">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
          alt="Modern luxury home"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBright",
};
</script>

<style scoped>
.hero-bright {
  background: #f9f9f9;
  padding: 6rem 2rem;
}

.hero-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 3rem;
}

/* Text Section */
.hero-text h1 {
  font-size: 2.8rem;
  color: #1e1e1e;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.hero-text h1 span {
  color: #13443c;
}

.hero-text p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn {
  background: #13443c;
  color: #fff;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  background: #0f332e;
  transform: translateY(-2px);
}

.secondary-btn {
  background: transparent;
  color: #13443c;
  border: 2px solid #13443c;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  background: #13443c;
  color: #fff;
}

/* Image Section */
.hero-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: floatIn 1.2s ease forwards;
}

/* Animation */
@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-image img {
    margin-top: 2rem;
  }
}
</style>
