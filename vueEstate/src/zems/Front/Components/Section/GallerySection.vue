<template>
  <section class="gallery">
    <div class="title">
      <h2>Our Exclusive <span>Gallery</span></h2>
      <p>Discover breathtaking spaces and architectural excellence captured through every frame.</p>
    </div>

    <div class="masonry">
      <div v-for="(image, i) in gallery" :key="i" class="masonry-item">
        <img :src="image.src" :alt="image.alt" />
        <div class="caption">{{ image.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const gallery = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', title: 'Modern Living Room' },
  { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', title: 'Modern Living Room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', title: 'Modern Living Room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', title: 'Modern Living Room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', title: 'Modern Living Room' },
];
</script>

<style scoped>
.gallery {
  padding: 6rem 8%;
  background: linear-gradient(135deg, #f8fdfb, #eaf4f3);
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

/* ✅ True Masonry Grid */
.masonry {
  column-count: 4;
  column-gap: 1.5rem;
}

.masonry-item {
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 16px;
  display: inline-block;
  width: 100%;
  transition: transform 0.4s ease;
}

.masonry-item img {
  width: 100%;
  border-radius: 16px;
  display: block;
  transition: transform 0.5s ease, filter 0.4s ease;
}

.masonry-item:hover img {
  transform: scale(1.05);
  filter: brightness(0.8);
}
.masonry-item img {
  height: auto;
  aspect-ratio: auto;
}
.masonry-item:nth-child(2n) img {
  height: 280px;
}
.masonry-item:nth-child(3n) img {
  height: 340px;
}
.masonry-item:nth-child(4n) img {
  height: 400px;
}
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
  color: #fff;
  padding: 1rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
}

.masonry-item:hover .caption {
  opacity: 1;
}

/* Responsive Columns */
@media (max-width: 1200px) {
  .masonry {
    column-count: 4;
  }
}
@media (max-width: 768px) {
  .masonry {
    column-count: 2;
  }
}
@media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
}
</style>
