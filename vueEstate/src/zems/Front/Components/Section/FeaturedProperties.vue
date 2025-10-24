<template>
  <section class="featured">
    <div class="title">
      <h2>Featured <span>Properties</span></h2>
      <p>Explore our most sought-after residences, combining sophistication with comfort.</p>
    </div>

   <div class="container">
     <div class="property-grid">
      <div v-for="(item, i) in properties" :key="i" class="property-card">
        <div class="image">
          <img :src="item.image" :alt="item.title" />
          <div class="price-tag">${{ item.price.toLocaleString() }}</div>
        </div>

        <div class="info">
          <h3>{{ item.title }}</h3>
          <p class="location">📍 {{ item.location }}</p>
          <ul class="features">
            <li>{{ item.beds }} Beds</li>
            <li>{{ item.baths }} Baths</li>
            <li>{{ item.area }} sqft</li>
          </ul>
          <button @click="openTour(item.virtualTour)" class="virtual-btn">
            🎥 Virtual Tour
          </button>
        </div>
      </div>
    </div>
   </div>

    <!-- Popup Modal -->
    <div v-if="tourUrl" class="modal" @click.self="closeTour">
      <div class="modal-content">
        <iframe
          :src="tourUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button class="close-btn" @click="closeTour">✕</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tourUrl = ref(null);

const properties = [
  {
    title: "Emerald Heights Residence",
    location: "Downtown, California",
    price: 320000,
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Palm View Apartment",
    location: "Miami, Florida",
    price: 280000,
    beds: 2,
    baths: 2,
    area: 1500,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4df26?auto=format&fit=crop&w=900&q=80",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Skyline Penthouse",
    location: "New York City",
    price: 460000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585153931-70e3aa0c291b?auto=format&fit=crop&w=900&q=80",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

function openTour(url) {
  tourUrl.value = url;
}

function closeTour() {
  tourUrl.value = null;
}
</script>

<style scoped>
.featured {
  padding: 3.75rem 0;
  background: #f9fcfb;
}

.title {
  text-align: center;
  margin-bottom: 3rem;
}

.title h2 {
  font-size: 2.6rem;
  font-weight: 700;
  color: #13443C;
}

.title h2 span {
  color: #00bfa5;
}

.title p {
  color: #555;
  font-size: 1.1rem;
  margin-top: 0.8rem;
}

/* --- GRID --- */
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
}

/* --- CARD --- */
.property-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.property-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

/* Image Section */
.image {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.property-card:hover img {
  transform: scale(1.08);
}

.price-tag {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(19, 68, 60, 0.85);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Info Section */
.info {
  padding: 1.5rem;
}

.info h3 {
  color: #13443C;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.location {
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.features {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 1.2rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0.6rem 0;
}

.virtual-btn {
  background: #00bfa5;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.virtual-btn:hover {
  background: #13443C;
}

/* --- Modal --- */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
}

.modal-content iframe {
  width: 100%;
  height: 500px;
  border: none;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(19,68,60,0.85);
  color: #fff;
  border: none;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.close-btn:hover {
  background: #00bfa5;
}
</style>
