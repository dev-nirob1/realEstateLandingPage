<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseImage from '@/components/element/BaseImage.vue';
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import ListItem from '@/components/element/ListItem.vue';
import SubTitle from '@/components/element/SubTitle.vue';
import VideoPlayModal from '@/components/widget/VideoPlayModal.vue';
import { ref } from 'vue';
const isModalOpen = ref(false)

const handleOpenModal = () => {
  isModalOpen.value = true
}
const handleCloseModal = () => {
  isModalOpen.value = false
}
const properties = [
  {
    title: "Emerald Heights Residence",
    location: "Downtown, California",
    price: 320000,
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1684778522663-be47e3cbbb2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Palm View Apartment",
    location: "Miami, Florida",
    price: 280000,
    beds: 2,
    baths: 2,
    area: 1500,
    image: "https://images.unsplash.com/photo-1601462900787-77c5df94d683?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=860",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Skyline Penthouse",
    location: "New York City",
    price: 460000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1719884630688-45ca69d68870?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    virtualTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

</script>
<template>
  <section class="featured bg-light">
    <div class="title text-center mb-2">
      <h2>Featured <span>Properties</span></h2>
      <p>Explore our most sought-after residences, combining sophistication with comfort.</p>
    </div>

    <div class="container">
      <div class="medium-2 large-3 gap-2">

        <div v-for="(data, i) in properties" :key="i" class="property-card">
          <div class="relative image">
            <BaseImage :image="data.image" alt="image" />
          </div>

          <div class="card-body">
            <BaseParagraph><i class="fa-solid fa-location-dot"></i> {{ data.location }}</BaseParagraph>
            <SubTitle>{{ data.title }}</SubTitle>
            <ul class="all-3">
              <ListItem><i class="fa-solid fa-bed"></i> {{ data.beds }} bed</ListItem>
              <ListItem><i class="fa-solid fa-bath"></i> {{ data.baths }} bath</ListItem>
              <ListItem><i class="fa-solid fa-maximize"></i> {{ data.area }} sqft</ListItem>
            </ul>
            <BaseButton @click="handleOpenModal" class="bg-primary">View Details</BaseButton>
          </div>
        </div>
      </div>
    </div>
    <VideoPlayModal :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal" />
  </section>
</template>

<style scoped>
.featured {
  padding: 3.75rem 0;
}

.property-card {
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: all .5s ease-in-out;
  border-radius: 1rem;
  background-color: var(--white-color);
}

.property-card p {
  margin: .5rem 0;
}

.card-body {
  padding: 1rem;
}

.property-card .image {
  height: 260px;
  width: 100%;
}

.property-card ul {
  margin: .75rem 0;
  padding: .5rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
</style>
