<template>
  <section class="gallery container">
    <div class="title text-center mb-2">
      <h2>Our Exclusive <span>Gallery</span></h2>
      <p>Discover breathtaking spaces and architectural excellence captured through every frame.</p>
    </div>

    <div class="all-2 medium-3 large-4 gap-1 masonry">
      <div v-for="(image, i) in gallery" :key="i" class="masonry-item relative">
        <img :src="image.src" :alt="image.alt" />
        <div class="caption flex-center">{{ image.title }}</div>
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
  padding: 3.75rem 0;
}

.masonry-item {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.caption {
  position: absolute;
  inset: 0;
  background: rgb(from var(--primary-color)r g b / 35%);
  border-radius: 1rem;
  color: var(--white-color);
  font-weight: bold;
  font-size: 1.25rem;
  opacity: 0;
  pointer-events: none;
  transition: all .5s ease-in-out;
}

.masonry-item:hover .caption {
  opacity: 1;
}

@media (min-width: 768px) {
  .masonry {
    grid-auto-rows: 200px;
  }

  .masonry-item:nth-child(1) {
    grid-column: span 2
  }

  .masonry-item:nth-child(2) {
    grid-row: span 2
  }

  .masonry-item:nth-child(3) {
    grid-row: span 2
  }
}

@media (min-width: 992px) {
  .masonry {
    grid-auto-rows: 250px;
  }

  .masonry-item:nth-child(1) {
    grid-column: span 2
  }

  .masonry-item:nth-child(2) {
    grid-row: inherit;
  }

  .masonry-item:nth-child(3) {
    grid-row: span 2
  }

  .masonry-item:nth-child(4) {
    grid-row: span 2
  }

  .masonry-item:nth-child(5) {
    grid-column: span 2
  }

  .masonry-item:nth-child(6) {
    grid-column: span 3
  }
}
</style>
