// animasi untuk class section 
const section = document.querySelectorAll('.section');
// menambahkan listener yaitu action animasi akan dilakukan ketika ada action scroll dari user
window.addEventListener('scroll',moveSect);

moveSect();

// fungsi untuk menambahkan class 'show' sehingga konten akan ditampilkan dengan animasi / transform 
function moveSect(){
    const triggerBottom = window.innerHeight / 5 * 4;
    section.forEach(sect =>{
        const sectTop = sect.getBoundingClientRect().top;
        if(sectTop < triggerBottom){
            sect.classList.add('show');
        } else {
            sect.classList.remove('show');
        }
    })
}