<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseImage from '@/components/element/BaseImage.vue';
import BaseParagraph from '@/components/element/BaseParagraph.vue';
import HeroTitle from '@/components/element/HeroTitle.vue';
import SubTitle from '@/components/element/SubTitle.vue';

</script>

<template>
  <section class="hero relative">
    <div class=" content">
      <SubTitle>Premium Residence</SubTitle>
      <HeroTitle>
        Discover <span>Modern Living</span> <br />
        in the Heart of the City
      </HeroTitle>
      <BaseParagraph>
        Elevate your lifestyle at Emerald Heights — where architectural brilliance meets natural tranquility.
      </BaseParagraph>
      <BaseButton class="bg-primary">Schedule A Visit</BaseButton>
    </div>
    <div class="image">
      <BaseImage image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
        alt="hero image" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: rgb(from var(--primary-color) r g b / 3%);
}

.hero .content {
  max-width: 40%;
  margin-left: 7rem;
}
.content span {
  color: #1abc9c;
}

.content .sub-title {
  background: #1abc9c;
  width: fit-content;
  padding: .25rem .5rem;
  border-radius: .25rem;
  color: var(--white-color);
}
.image {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  overflow: hidden;
}

@media (min-width: 1400px) {

  .hero .content {
    margin-left: 10rem;
  }
}
</style>
