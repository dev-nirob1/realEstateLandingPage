<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="tagline">Premium Residence</div>
      <h1>
        Discover <span>Modern Living</span> <br />
        in the Heart of the City
      </h1>
      <p>
        Elevate your lifestyle at Emerald Heights — where architectural brilliance meets natural tranquility.
      </p>
      <button class="btn">Schedule a Visit</button>
    </div>

    <div class="info-card">
      <h3>🏡 3BHK Luxury Apartments</h3>
      <p>Starting from <strong>$220,000</strong></p>
      <p>Smart home systems | City view | Swimming pool</p>
      <a href="#" class="more">Learn more →</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f6f9f8;
  display: flex;
  align-items: center;
  padding: 0 8%;
}

.hero-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  filter: brightness(0.9);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.tagline {
  background: #1abc9c;
  display: inline-block;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.hero-content h1 {
  font-size: 3rem;
  color: #13443C;
  font-weight: 700;
  margin-top: 1rem;
  line-height: 1.2;
}

.hero-content h1 span {
  color: #1abc9c;
}

.hero-content p {
  margin-top: 1rem;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
}

.btn {
  margin-top: 2rem;
  background-color: #13443C;
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 40px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn:hover {
  background-color: #1abc9c;
  transform: translateY(-2px);
}

/* Floating Info Card */
.info-card {
  position: absolute;
  bottom: 10%;
  right: 5%;
  background: white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  width: 300px;
  z-index: 3;
  border-left: 6px solid #1abc9c;
}

.info-card h3 {
  color: #13443C;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #555;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.more {
  color: #1abc9c;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;
  transition: color 0.3s;
}

.more:hover {
  color: #13443C;
}
</style>
