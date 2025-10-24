<script setup>
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import SubTitle from '@/components/element/SubTitle.vue';

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
<template>
  <section class="amenities">
    <div class="container">
      <div class="text-center mb-2">
        <h2 class="section-title">
        World-Class <span>Amenities</span>
      </h2>
      <p class="section-subtitle">
        Experience the art of fine living with facilities that redefine comfort and convenience.
      </p>
      </div>

      <div class="small-2 large-3 gap-1">
        <div class="amenity-card relative" v-for="(item, i) in amenities" :key="i">
          <div class="icon">
            <i :class="item.icon" class="fa-3x"></i>
          </div>
          <SubTitle>{{ item.title }}</SubTitle>
          <BaseParagraph>{{ item.desc }}</BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.amenities {
  padding: 3.75rem 0;
}

.amenity-card {
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 1rem;
  border-top: 2px solid transparent;
  transition: .5s ease-in-out;
}

.amenity-card .icon {
  color: #1abc9c;
  margin-bottom: .75rem;
}

.amenity-card p {
  margin: .75rem 0;
}

.amenity-card:hover {
  border-top: 2px solid #1abc9c;
}
</style>
