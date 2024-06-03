


// Sayfa yüklendiğinde veya yeniden boyutlandırıldığında navbar yüksekliğini hesaplayın
function adjustBodyPadding() {
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';
  }
  
  // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında fonksiyonu çağırın
  window.addEventListener("load", adjustBodyPadding);
  window.addEventListener("resize", adjustBodyPadding);
  



  const form = document.querySelector('footer form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Formun varsayılan gönderme işlemini engelle

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = 'Yeni Mesaj: Başar Eğitim Kurumları';
  const body = `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`;

  const mailtoLink = `mailto:sevgibasar564@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});





const courseItems = document.querySelectorAll("#courses .course-item");

function animateCourseItems() {
  courseItems.forEach((item, index) => {
    item.style.animation = 'none'; // Animasyonu sıfırla
    item.style.opacity = 0; // Öğeleri gizle
    void item.offsetWidth; // Reflow tetikle (animasyonu yeniden başlatmak için)
    item.style.animation = `slideInFromTop 1s ease-out ${index * 0.3}s` ; // Animasyonu tekrar uygula
  });
}

const coursesSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCourseItems(); // Kurslar bölümü göründüğünde animasyonu başlat
      // coursesSectionObserver.unobserve(entry.target); // Gözlemlemeyi durdurma
    } else {
      // Bölüm görünür alandan çıktığında animasyonu sıfırla (isteğe bağlı)
      courseItems.forEach(item => {
        item.style.animation = 'none';
        item.style.opacity = 0;
      });
    }
  });
});



const coursesItems = document.querySelectorAll("#courses .course-item");

// Animasyon fonksiyonu (slideInFromTop'u kullanarak)
function animateCourseItems() {
  courseItems.forEach((item, index) => {
    item.style.animation = 'none'; // Animasyonu sıfırla
    item.style.opacity = 1; // Öğeleri gizle
    void item.offsetWidth; // Reflow tetikle (animasyonu yeniden başlatmak için)
    item.style.animation = `slideInFromTop 1s ease-out ${index * 0.3}s`; // Animasyonu tekrar uygula
  });
}

// Sayfa yüklendiğinde animasyonu başlat
animateCourseItems();

// 5 saniyede bir animasyonu tekrarla
setInterval(animateCourseItems, 5000); // 5000 milisaniye = 5 saniye



// ... diğer JavaScript kodlarınız ...

// Ana sayfa butonunu seç
const anasayfaBtn = document.querySelector('a[data-page="home"]'); // data-page attribute'unu kullanarak seçin

// Butona tıklama olayını dinle
anasayfaBtn.addEventListener("click", function (event) {
  // Eğer zaten ana sayfadaysanız
  if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/') {
    event.preventDefault(); // Varsayılan link davranışını engelle
    window.scrollTo({ top: 0, behavior: "smooth" }); // Sayfanın en başına smooth bir şekilde kaydır

    alert("Zaten Ana sayfadasınız!");
  }
});










