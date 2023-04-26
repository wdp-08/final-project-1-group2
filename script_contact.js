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