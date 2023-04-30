// animasi untuk class 'animate'
const animate = document.querySelectorAll('.animate');
// menambahkan event listener, animasi akan bekerja ketika ada action scroll dari user
window.addEventListener('scroll',moveSect);

moveSect();

// fungsi untuk menjalankan animasi (menampilkan kontak)
function moveSect(){
    const triggerBottom = window.innerHeight / 5 * 4;
    animate.forEach(anim =>{
        const animTop = anim.getBoundingClientRect().top;

        if(animTop < triggerBottom){
            anim.classList.add('show');
        } else {
            anim.classList.remove('show');
        }
    })
}

function kirim(){
    url = "https://wa.me/+6281357279860";
    var form = document.forms[0];
    var nama = form.querySelector('[name="nama"]').value;
    var konten = form.querySelector('[name="konten"]').value;
    url_full = url + "?text=" + encodeURIComponent("Halo Admin, Saya " + nama + ".  ");
    url_full = url_full + encodeURIComponent("Saya ingin memberikan kritik / saran : " + konten);
    console.log(url_full);
    window.open(url_full, '_blank').focus();
}