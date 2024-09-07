document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('header').innerHTML = `
        <img src="Screenshot (1).png" alt="Laptop Image">
      `;
      document.getElementById('title').textContent = "Нов динамичен текст";
  
      document.getElementById('excerpt').innerHTML = `
        Това е динамично зареден текст за описанието на картата. Можеш да го променяш според нуждите си.
      `;
  
      document.getElementById('profile_img').innerHTML = `
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Author Image">
      `;
  
      document.getElementById('name').textContent = "Иван Иванов";
      document.getElementById('date').textContent = "Сеп 07, 2024";
  
      removeAnimation();
    }, 2000);
  });
  
  function removeAnimation() {
    document.querySelectorAll('.animated-bg').forEach((bg) => bg.classList.remove('animated-bg'));
    document.querySelectorAll('.animated-bg-text').forEach((bg) => bg.classList.remove('animated-bg-text'));
  }
  