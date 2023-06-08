
        function menuToggle(){
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active')
        }
       
        
        document.getElementById("profile-link").addEventListener("click", function() {
    
            window.location.href = "profil.html"; // Profil sayfasının adresini buraya yazın
        });
    
        document.getElementById("account-link").addEventListener("click", function() {
            window.location.href = "hesap_ayarlari.html"; // Hesap ayarları sayfasının adresini buraya yazın
        });
    
        document.getElementById("upgrade-link").addEventListener("click", function() {
            window.location.href = "premium.html"; // Premium yükseltme sayfasının adresini buraya yazın
        });
    
    