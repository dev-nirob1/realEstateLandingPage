<template>
  <section class="featured">
    <div class="title">
      <h2>Featured <span>Properties</span></h2>
      <p>Explore our most sought-after residences, combining sophistication with comfort.</p>
    </div>

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
          <a href="#" class="details">View Details →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const properties = [
  {
    title: "Emerald Heights Residence",
    location: "Downtown, California",
    price: 320000,
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600585154154-7b5e57a1a4f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Palm View Apartment",
    location: "Miami, Florida",
    price: 280000,
    beds: 2,
    baths: 2,
    area: 1500,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4df26?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Skyline Penthouse",
    location: "New York City",
    price: 460000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585153931-70e3aa0c291b?auto=format&fit=crop&w=900&q=80",
  },
];
</script>

<style scoped>
.featured {
  padding: 6rem 8%;
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

.details {
  text-decoration: none;
  color: #00bfa5;
  font-weight: 600;
  transition: 0.3s;
}

.details:hover {
  color: #13443C;
}
</style>
