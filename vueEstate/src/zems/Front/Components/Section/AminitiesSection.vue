<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2>Features & Amenities</h2>
        <p>
          Everything you need for a comfortable and modern lifestyle in one
          premium property.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesSection",
  data() {
    return {
      features: [
        { icon: "🏊‍♂️", title: "Swimming Pool", desc: "Infinity pool with city view." },
        { icon: "🏋️‍♂️", title: "Gym & Fitness", desc: "State-of-the-art gym facilities." },
        { icon: "🛡️", title: "24/7 Security", desc: "Professional security for safety." },
        { icon: "🌳", title: "Green Spaces", desc: "Lush landscaped gardens and parks." },
        { icon: "🚗", title: "Parking", desc: "Secure underground parking spaces." },
        { icon: "🏢", title: "Community Hall", desc: "Space for events and gatherings." },
      ],
    };
  },
};
</script>

<style scoped>
.features-section {
  background: #f9f9f9;
  padding: 6rem 2rem;
  color: #13443C;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #555;
}

/* Grid Layout */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

/* Feature Card */
.feature-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #cba135;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 0.95rem;
  color: #555;
}
</style>

