document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('wrapper');
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');
    const btnPopup = document.getElementById('btnLoginPopup');
    const popupClose = document.getElementById('popupClose');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
  
    btnPopup.addEventListener('click', function () {
      wrapper.classList.add('active-popup');
      loginForm.style.transform = 'translateX(0)';
      registerForm.style.transform = 'translateX(400px)';
    });
  
    popupClose.addEventListener('click', function () {
      wrapper.classList.remove('active-popup');
    });
  
    registerLink.addEventListener('click', function () {
      loginForm.style.transform = 'translateX(-400px)';
      registerForm.style.transform = 'translateX(0)';
    });
  
    loginLink.addEventListener('click', function () {
      loginForm.style.transform = 'translateX(0)';
      registerForm.style.transform = 'translateX(400px)';
    });

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      window.location.href = 'homepage.html';
    });

  });

  function showAboutPopup() {
    document.getElementById("aboutPopup").style.display = "block";
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }

  function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';
    }
  }
  
  function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
  popup.style.display = 'none';
  }
  }

  function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'block';
    }
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'none';
    }
  }