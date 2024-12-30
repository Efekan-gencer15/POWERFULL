//Navbar arkaplan değişimi için:

window.onscroll = function() {   
    const navbar = document.getElementById("navbar-container"); //navbarımı idsinden yakaladım
    
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");  // Sayfa 50 piksel veya daha fazla aşağı kaydırıldığında 'scrolled' sınıfı eklenicek
    } else {
        navbar.classList.remove("scrolled");
    }
};


//Hamburger Menu:

const navHamburger = document.querySelector(".nav-hamburger");
const btnToggleNavHamburger = document.querySelector(".btn-toggle-nav-hamburger");

btnToggleNavHamburger.addEventListener("click", handleToggleNavHamburger);

function handleToggleNavHamburger(e){
    navHamburger.classList.toggle("expanded");
}




//OUR CLASSES'ta butonların dersleri göstermesi için:

// Tüm class butonlarını seçelim
const buttons = document.querySelectorAll('.class-btn');
// Tüm ders içeriklerini seçelim
const classInfos = document.querySelectorAll('.class-info');

// Her butona event listener ekleyelim
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Öncelikle tüm dersleri gizleyelim
    classInfos.forEach(info => info.style.display = 'none');
    
    // Tıklanan butondaki data-class değerine göre ilgili dersi gösterelim
    const className = button.getAttribute('data-class');
    document.getElementById(className).style.display = 'flex'; // Flex yapısında olduğundan dolayı 'flex' dedik.

    // Tüm butonlardan ok işaretini kaldıralım
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tıklanan butona 'active' sınıfını ekleyelim
    button.classList.add('active');
  });
});

// BMI hesaplayıcı kodu
document.getElementById('calculate-btn').addEventListener('click', function() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  if (height && weight) {
      const heightInMeters = height / 100; // cm'yi metreye çeviriyoruz
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI hesaplaması
      
      let resultText = `Your BMI is ${bmi}. `;
      
      if (bmi < 18.5) {
          resultText += 'You are underweight.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          resultText += 'You have a normal weight.';
      } else if (bmi >= 25 && bmi < 29.9) {
          resultText += 'You are overweight.';
      } else {
          resultText += 'You are obese.';
      }

      document.getElementById('bmi-result').innerText = resultText;
  } else {
      document.getElementById('bmi-result').innerText = 'Please enter valid values for height and weight.';
  }
});



