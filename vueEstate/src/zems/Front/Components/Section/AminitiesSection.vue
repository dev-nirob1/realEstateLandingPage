<template>
  <section class="amenities">
    <div class="container">
      <h2 class="section-title">
        World-Class <span>Amenities</span>
      </h2>
      <p class="section-subtitle">
        Experience the art of fine living with facilities that redefine comfort and convenience.
      </p>

      <div class="amenities-grid">
        <div class="amenity-card" v-for="(item, i) in amenities" :key="i">
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Floating shape for premium feel -->
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
  </section>
</template>

<script setup>
const amenities = [
  {
    icon: 'fa-solid fa-water-ladder',
    title: 'Infinity Pool',
    desc: 'Enjoy panoramic skyline views while relaxing in our temperature-controlled infinity pool.'
  },
  {
    icon: 'fa-solid fa-dumbbell',
    title: 'Fitness Studio',
    desc: 'Fully equipped gym with modern cardio and strength training equipment.'
  },
  {
    icon: 'fa-solid fa-spa',
    title: 'Wellness Spa',
    desc: 'Rejuvenate your body and mind with holistic therapies and soothing ambiance.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: '24/7 Security',
    desc: 'Smart surveillance and professional security ensure peace of mind round the clock.'
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Sky Garden',
    desc: 'Lush green rooftop gardens designed for serenity and evening strolls.'
  },
  {
    icon: 'fa-solid fa-car-side',
    title: 'Private Parking',
    desc: 'Ample, secure, and dedicated parking spaces with electric charging stations.'
  },
];
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.amenities {
  position: relative;
  padding: 6rem 8%;
  background: #f8fdfb;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #13443C;
  font-weight: 700;
}

.section-title span {
  color: #1abc9c;
}

.section-subtitle {
  text-align: center;
  color: #555;
  margin-top: 0.8rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-inline: auto;
  line-height: 1.6;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.amenity-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(19, 68, 60, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.amenity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #1abc9c, #13443C);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.amenity-card:hover::before {
  opacity: 1;
}

.amenity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 14px 40px rgba(19, 68, 60, 0.15);
}

.icon {
  font-size: 2rem;
  color: #1abc9c;
  margin-bottom: 1.2rem;
}

.amenity-card h3 {
  color: #13443C;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.amenity-card p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}
.shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index:0;
}

.shape-1 {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle at center, #1abc9c 0%, transparent 70%);
  top: 8%;
  left: -100px;
  opacity: 0.3;
  filter: blur(60px);
}

.shape-2 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle at center, #13443C 0%, transparent 70%);
  bottom: -80px;
  right: -120px;
  opacity: 0.25;
  filter: blur(80px);
}
/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .section-subtitle {
    font-size: 1rem;
  }
  .amenity-card {
    padding: 1.5rem;
  }
}
</style>
