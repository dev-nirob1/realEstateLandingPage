<template>
  <section class="about-project">
    <div class="container">
      <div class="image-side">
        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80" alt="The Skyline Tower" />
        <span class="project-status">Ready to Move</span>
      </div>

      <div class="content-side">
        <h2>The Skyline Tower</h2>
        <p>
          The Skyline Tower redefines urban luxury with timeless architecture,
          premium materials, and serene surroundings. Experience comfort,
          privacy, and elegance — all within the city’s finest location.
        </p>

        <ul class="details">
          <li><strong>Total Units:</strong> 120 Apartments</li>
          <li><strong>Completion:</strong> Q4 — 2026 (Estimated)</li>
          <li><strong>Size Range:</strong> 650 sq. ft. – 2100 sq. ft.</li>
        </ul>

        <div class="buttons">
          <button class="btn-primary">Schedule a Visit</button>
          <button class="btn-outline">View Floorplans</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:root {
  --primary-color: #13443c;
  --secondary-color: #1abc9c;
  --accent-color: #cba135;
  --white-color: #ffffff;
  --dark-color: #000000;
  --light-color: #6c757d;
}

.about-project {
  padding: 60px 20px;
  background: var(--white-color);
  font-family: "Poppins", sans-serif;
  color: var(--dark-color);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
}

/* Left Side */
.image-side {
  flex: 1 1 45%;
  position: relative;
}

.image-side img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
}

.project-status {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

/* Right Side */
.content-side {
  flex: 1 1 50%;
}

.content-side h2 {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.content-side p {
  color: var(--light-color);
  line-height: 1.6;
  margin-bottom: 20px;
}

.details {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.details li {
  margin-bottom: 8px;
  color: var(--dark-color);
  font-size: 15px;
}

/* Buttons */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
}

.btn-outline {
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .content-side h2 {
    font-size: 1.8rem;
  }

  .buttons {
    justify-content: center;
  }
}
</style>
