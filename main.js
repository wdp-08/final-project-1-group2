// UNTUK MEMUNCULKAN TABLE PADA WEB
const beliBtns = document.querySelectorAll('.btn-primary');
const biodataForm = document.querySelector('.container');

beliBtns.forEach(function(beliBtn) {
  beliBtn.addEventListener('click', function() {
    biodataForm.style.display = 'block';
  });
});

// memunculkan data card 1 kedalam table
let stok = 2;
let stok1 = 2;
let stok_produk = 0;
const harga_produk = 430000;

function beli1() {
  if (stok > 0) {
    stok_produk++;
    stok--;

    const nama_produk1 = document.getElementById("nama-produk1");
    const harga_produk1 = document.getElementById("harga-produk1");
    const stok_produk1 = document.getElementById("stok-produk1");

    if (nama_produk1 && harga_produk1 && stok_produk1) { // periksa apakah elemen HTML masih ada atau tidak
      nama_produk1.innerHTML = "Sang Sekerta";
      harga_produk1.innerHTML = harga_produk * stok_produk;
      stok_produk1.innerHTML = stok_produk;
    }

    if (stok === -1) {
      alert("Stok habis!");
    }
  } else {
    alert("Stok habis!");
  }
}

// Fungsi untuk mereset stok ke nilai awal
function resetStok() {
  stok = 2;
  stok_produk = 0;
}

// Fungsi untuk menghapus data dari local storage
function deleteData() {
  localStorage.removeItem('data_produk_1');
}

// Fungsi untuk menghapus elemen HTML dari tabel
function deleteRow() {
  var namaProduk = document.getElementById("nama-produk1");
  var hargaProduk = document.getElementById("harga-produk1");
  var stokProduk = document.getElementById("stok-produk1");

  namaProduk.innerHTML = "";
  hargaProduk.innerHTML = "";
  stokProduk.innerHTML = "";
}

// Menambahkan event listener pada tombol "Hapus"
var deleteButton = document.querySelector('[data-id="btn-1"]');
deleteButton.addEventListener('click', function() {
  deleteData();
  deleteRow();
  resetStok();
});

// Mendapatkan elemen button dengan class 'btn-warning' dan data-id 'btn-edit-1'
const editButton1 = document.querySelector('button.btn.btn-warning[data-id="btn-edit-1"]');

// Mendapatkan elemen td dengan id 'stok-produk1'
const stokProduk1 = document.querySelector('#stok-produk1');

// Mendapatkan elemen td dengan id 'harga-produk1'
const hargaProduk1 = document.querySelector('#harga-produk1');

// Menambahkan event listener pada tombol edit
editButton1.addEventListener('click', () => {
  // Cek apakah data produk sudah diisi atau belum
  const namaProduk1 = document.querySelector('#nama-produk1').textContent;
  if (namaProduk1 === '') {
    alert('Silahkan pesan terlebih dahulu sebelum melakukan edit.');
    return;
  }

  // Memunculkan pop-up dan meminta input jumlah produk yang ingin dibeli
  const jumlahBeli1 = prompt('Masukkan jumlah produk yang ingin dibeli:');

  // Mengubah nilai pada elemen td dengan id 'stok-produk1' sesuai input pengguna
  if (jumlahBeli1 !== null) {
    const stokSekarang1 = stok1;
    const jumlahBeliInt1 = parseInt(jumlahBeli1);
    if (jumlahBeliInt1 <= stokSekarang1) {
      stokProduk1.textContent = jumlahBeliInt1;

      // Menghitung harga baru
      const hargaBaru1 = harga_produk * jumlahBeliInt1;

      // Mengubah nilai pada elemen td dengan id 'harga-produk1' sesuai harga baru
      hargaProduk1.textContent = hargaBaru1;
      resetStok();
      alert('Pengeditan berhasil.');
    } else {
      alert('Mohon maaf, stok tidak cukup.');
    }
  }
});
// TUTUP CARD 1

function beli2() {
  alert("Stok habis!");
}



// memunculkan data card 3 kedalam table
let stok3 = 12; // variabel stok produk
let stok_produk3 = 0; // variabel jumlah produk yang dibeli
const harga_produk3 = 450000; // harga produk

function beli3() {
  if (stok3 > 0) { // jika stok masih tersedia
    stok_produk3++; // menambah jumlah produk yang dibeli
    stok3--; // mengurangi stok produk

    // menampilkan data pada tabel
    document.getElementById("nama-produk3").innerHTML = "Armor Denim";
    document.getElementById("harga-produk3").innerHTML = harga_produk3 * stok_produk3;
    document.getElementById("stok-produk3").innerHTML = stok_produk3;

    // menampilkan pesan jika stok sudah habis
    if (stok3 === -1) {
      alert("Stok habis!");
    }
  } else { // jika stok sudah habis
    alert("Stok habis!");
  }
}

// Fungsi untuk mereset stok ke nilai awal
function resetStok3() {
  stok3 = 12;
  stok_produk3 = 0;
}

// Fungsi untuk menghapus data dari local storage
function deleteData3() {
  localStorage.removeItem('data_produk_3');
}

// Fungsi untuk menghapus elemen HTML dari tabel
function deleteRow3() {
  var namaProduk3 = document.getElementById("nama-produk3");
  var hargaProduk3 = document.getElementById("harga-produk3");
  var stokProduk3 = document.getElementById("stok-produk3");

  namaProduk3.innerHTML = "";
  hargaProduk3.innerHTML = "";
  stokProduk3.innerHTML = "";
}

// Menambahkan event listener pada tombol "Hapus"
var deleteButton3 = document.querySelector('[data-id="btn-3"]');
deleteButton3.addEventListener('click', function() {
  deleteData3();
  deleteRow3();
  resetStok3();
});

// Mendapatkan elemen button dengan class 'btn-warning' dan data-id 'btn-edit-3'
const editButton3 = document.querySelector('button.btn.btn-warning[data-id="btn-edit-3"]');

// Mendapatkan elemen td dengan id 'stok-produk3'
const stokProduk3 = document.querySelector('#stok-produk3');

// Mendapatkan elemen td dengan id 'harga-produk3'
const hargaProduk3 = document.querySelector('#harga-produk3');

// Menambahkan event listener pada tombol edit
editButton3.addEventListener('click', () => {
  // Cek apakah data produk sudah diisi atau belum
  const namaProduk3 = document.querySelector('#nama-produk3').textContent;
  if (namaProduk3 === '') {
    alert('Silahkan pesan terlebih dahulu sebelum melakukan edit.');
    return;
  }

  // Memunculkan pop-up dan meminta input jumlah produk yang ingin dibeli
  const jumlahBeli3 = prompt('Masukkan jumlah produk yang ingin dibeli:');

  // Mengubah nilai pada elemen td dengan id 'stok-produk3' sesuai input pengguna
  if (jumlahBeli3 !== null) {
    const stokSekarang3 = stok3;
    const jumlahBeliInt3 = parseInt(jumlahBeli3);
    if (jumlahBeliInt3 <= stokSekarang3) {
      stokProduk3.textContent = jumlahBeliInt3;

      // Menghitung harga baru
      const hargaBaru3 = harga_produk3 * jumlahBeliInt3;

      // Mengubah nilai pada elemen td dengan id 'harga-produk3' sesuai harga baru
      hargaProduk3.textContent = hargaBaru3;
      resetStok3();
      alert('Pengeditan berhasil.');
    } else {
      alert('Mohon maaf, stok tidak cukup.');
    }
  }
});
// TUTUP CARD 3





// memunculkan data card 4 kedalam table
let stok4 = 20; // variabel stok produk
let stok_produk4 = 0; // variabel jumlah produk yang dibeli
const harga_produk4 = 480000; // harga produk

function beli4() {
  if (stok4 > 0) { // jika stok masih tersedia
    stok_produk4++; // menambah jumlah produk yang dibeli
    stok4--; // mengurangi stok produk

    // menampilkan data pada tabel
    document.getElementById("nama-produk4").innerHTML = "Lite Collection";
    document.getElementById("harga-produk4").innerHTML = harga_produk4 * stok_produk4;
    document.getElementById("stok-produk4").innerHTML = stok_produk4;

    // menampilkan pesan jika stok sudah habis
    if (stok4 === -1) {
      alert("Stok habis!");
    }
  } else { // jika stok sudah habis
    alert("Stok habis!");
  }
}

// Fungsi untuk mereset stok ke nilai awal
function resetStok4() {
  stok4 = 20;
  stok_produk4 = 0;
}

// Fungsi untuk menghapus data dari local storage
function deleteData4() {
  localStorage.removeItem('data_produk_4');
}

// Fungsi untuk menghapus elemen HTML dari tabel
function deleteRow4() {
  var namaProduk4 = document.getElementById("nama-produk4");
  var hargaProduk4 = document.getElementById("harga-produk4");
  var stokProduk4 = document.getElementById("stok-produk4");

  namaProduk4.innerHTML = "";
  hargaProduk4.innerHTML = "";
  stokProduk4.innerHTML = "";
}

// Menambahkan event listener pada tombol "Hapus"
var deleteButton4 = document.querySelector('[data-id="btn-4"]');
deleteButton4.addEventListener('click', function() {
  deleteData4();
  deleteRow4();
  resetStok4();
});

  // Mendapatkan elemen button dengan class 'btn-warning' dan data-id 'btn-edit-4'
  const editButton4 = document.querySelector('button.btn.btn-warning[data-id="btn-edit-4"]');

  // Mendapatkan elemen td dengan id 'stok-produk4'
  const stokProduk4 = document.querySelector('#stok-produk4');

  // Mendapatkan elemen td dengan id 'harga-produk4'
  const hargaProduk4 = document.querySelector('#harga-produk4');

  // Menambahkan event listener pada tombol edit
  editButton4.addEventListener('click', () => {
  // Cek apakah data produk sudah diisi atau belum
  const namaProduk4 = document.querySelector('#nama-produk4').textContent;
  if (namaProduk4 === '') {
  alert('Silahkan pesan terlebih dahulu sebelum melakukan edit.');
  return;
  }

  // Memunculkan pop-up dan meminta input jumlah produk yang ingin dibeli
  const jumlahBeli4 = prompt('Masukkan jumlah produk yang ingin dibeli:');

  // Mengubah nilai pada elemen td dengan id 'stok-produk4' sesuai input pengguna
  if (jumlahBeli4 !== null) {
  const stokSekarang4 = stok4;
  const jumlahBeliInt4 = parseInt(jumlahBeli4);
  if (jumlahBeliInt4 <= stokSekarang4) {
  stokProduk4.textContent = jumlahBeliInt4;
    // Menghitung harga baru
    const hargaBaru4 = harga_produk4 * jumlahBeliInt4;

    // Mengubah nilai pada elemen td dengan id 'harga-produk4' sesuai harga baru
    hargaProduk4.textContent = hargaBaru4;
    resetStok4();
    alert('Pengeditan berhasil.');
  } else {
    alert('Mohon maaf, stok tidak cukup.');
    }
  }
});
// TUTUP CARD 4





// memunculkan data card 5 kedalam table
let stok5 = 25; // variabel stok produk
let stok_produk5 = 0; // variabel jumlah produk yang dibeli
const harga_produk5 = 500000; // harga produk

function beli5() {
  if (stok5 > 0) { // jika stok masih tersedia
    stok_produk5++; // menambah jumlah produk yang dibeli
    stok5--; // mengurangi stok produk

    // menampilkan data pada tabel
    document.getElementById("nama-produk5").innerHTML = "Urban";
    document.getElementById("harga-produk5").innerHTML = harga_produk5 * stok_produk5;
    document.getElementById("stok-produk5").innerHTML = stok_produk5;

    // menampilkan pesan jika stok sudah habis
    if (stok5 === -1) {
      alert("Stok habis!");
    }
  } else { // jika stok sudah habis
    alert("Stok habis!");
  }
}

// Fungsi untuk mereset stok ke nilai awal
function resetStok5() {
  stok5 = 25;
  stok_produk5 = 0;
}

// Fungsi untuk menghapus data dari local storage
function deleteData5() {
  localStorage.removeItem('data_produk_5');
}

// Fungsi untuk menghapus elemen HTML dari tabel
function deleteRow5() {
  var namaProduk5 = document.getElementById("nama-produk5");
  var hargaProduk5 = document.getElementById("harga-produk5");
  var stokProduk5 = document.getElementById("stok-produk5");

  namaProduk5.innerHTML = "";
  hargaProduk5.innerHTML = "";
  stokProduk5.innerHTML = "";
}

// Menambahkan event listener pada tombol "Hapus"
var deleteButton5 = document.querySelector('[data-id="btn-5"]');
deleteButton5.addEventListener('click', function() {
  deleteData5();
  deleteRow5();
  resetStok5();
});

// Mendapatkan elemen button dengan class 'btn-warning' dan data-id 'btn-edit-5'
const editButton5 = document.querySelector('button.btn.btn-warning[data-id="btn-edit-5"]');

// Mendapatkan elemen td dengan id 'stok-produk5'
const stokProduk5 = document.querySelector('#stok-produk5');

// Mendapatkan elemen td dengan id 'harga-produk5'
const hargaProduk5 = document.querySelector('#harga-produk5');

// Menambahkan event listener pada tombol edit
editButton5.addEventListener('click', () => {
  // Cek apakah data produk sudah diisi atau belum
  const namaProduk5 = document.querySelector('#nama-produk5').textContent;
  if (namaProduk5 === '') {
    alert('Silahkan pesan terlebih dahulu sebelum melakukan edit.');
    return;
  }

  // Memunculkan pop-up dan meminta input jumlah produk yang ingin dibeli
  const jumlahBeli5 = prompt('Masukkan jumlah produk yang ingin dibeli:');

  // Mengubah nilai pada elemen td dengan id 'stok-produk5' sesuai input pengguna
  if (jumlahBeli5 !== null) {
    const stokSekarang5 = stok5;
    const jumlahBeliInt5 = parseInt(jumlahBeli5);
    if (jumlahBeliInt5 <= stokSekarang5) {
      stokProduk5.textContent = jumlahBeliInt5;

      // Menghitung harga baru
      const hargaBaru5 = harga_produk5 * jumlahBeliInt5;

      // Mengubah nilai pada elemen td dengan id 'harga-produk5' sesuai harga baru
      hargaProduk5.textContent = hargaBaru5;
      resetStok5();
      alert('Pengeditan berhasil.');
    } else {
      alert('Mohon maaf, stok tidak cukup.');
    }
  }
});
// TUTUP CARD 5





// memunculkan data card 6 kedalam table
let stok6 = 25; // variabel stok produk
let stok_produk6 = 0; // variabel jumlah produk yang dibeli
const harga_produk6 = 550000; // harga produk


function beli6() {
  
  if (stok6 > 0) { // jika stok masih tersedia
    stok_produk6++; // menambah jumlah produk yang dibeli
    stok6--; // mengurangi stok produk

    // menampilkan data pada tabel
    document.getElementById("nama-produk6").innerHTML = "Basic Series Low";
    document.getElementById("harga-produk6").innerHTML = harga_produk6 * stok_produk6;
    document.getElementById("stok-produk6").innerHTML = stok_produk6;

    // menampilkan pesan jika stok sudah habis
    if (stok6 === -1) {
      alert("Stok habis!");
    }
  } else { // jika stok sudah habis
    alert("Stok habis!");
  }
}


// Fungsi untuk mereset stok ke nilai awal
function resetStok6() {
  stok6 = 25;
  stok_produk6 = 0;
}

// Fungsi untuk menghapus data dari local storage
function deleteData6() {
  localStorage.removeItem('data_produk_6');
}

// Fungsi untuk menghapus elemen HTML dari tabel
function deleteRow6() {
  var namaProduk6 = document.getElementById("nama-produk6");
  var hargaProduk6 = document.getElementById("harga-produk6");
  var stokProduk6 = document.getElementById("stok-produk6");

  namaProduk6.innerHTML = "";
  hargaProduk6.innerHTML = "";
  stokProduk6.innerHTML = "";
}

// Menambahkan event listener pada tombol "Hapus"
var deleteButton6 = document.querySelector('[data-id="btn-6"]');
deleteButton6.addEventListener('click', function() {
  deleteData6();
  deleteRow6();
  resetStok6();
});

// Mendapatkan elemen button dengan class 'btn-warning' dan data-id 'btn-edit-6'
const editButton6 = document.querySelector('button.btn.btn-warning[data-id="btn-edit-6"]');

// Mendapatkan elemen td dengan id 'stok-produk6'
const stokProduk6 = document.querySelector('#stok-produk6');

// Mendapatkan elemen td dengan id 'harga-produk6'
const hargaProduk6 = document.querySelector('#harga-produk6');

// Menambahkan event listener pada tombol edit
editButton6.addEventListener('click', () => {
  // Mendapatkan elemen td dengan id 'nama-produk6'
  const namaProduk6 = document.querySelector('#nama-produk6');
  
  // Memeriksa apakah data sudah diisi
  if (namaProduk6.textContent === '') {
    alert('Silahkan pesan terlebih dahulu sebelum melakukan edit.');
  } else {
    // Memunculkan pop-up dan meminta input jumlah produk yang ingin dibeli
    const jumlahBeli6 = prompt('Masukkan jumlah produk yang ingin dibeli:');
  
    // Mengubah nilai pada elemen td dengan id 'stok-produk6' sesuai input pengguna
    if (jumlahBeli6 !== null) {
      const stokSekarang6 = stok6;
      const jumlahBeliInt6 = parseInt(jumlahBeli6);
      if (jumlahBeliInt6 <= stokSekarang6) {
        stokProduk6.textContent = jumlahBeliInt6;
  
        // Menghitung harga baru
        const hargaBaru6 = harga_produk6 * jumlahBeliInt6;
  
        // Mengubah nilai pada elemen td dengan id 'harga-produk6' sesuai harga baru
        hargaProduk6.textContent = hargaBaru6;
        resetStok6();
        alert('Pengeditan berhasil.');
      } else {
        alert('Mohon maaf, stok tidak cukup.');
      }
    }
  }
});
// TUTUP CARD 6





// Memasukan data table ke dalam lokal stronge 
function submit() {
  // Variabel untuk memasukan data card 1 ke lokal stronge
  var nama_produk = document.getElementById("nama-produk1").textContent;
  var harga_produk = document.getElementById("harga-produk1").textContent;
  var stok_produk = document.getElementById("stok-produk1").textContent;

  // cek jika data pada tabel 1 tidak kosong
  if (nama_produk && harga_produk && stok_produk) {
    var data = {
      namaProduk: nama_produk,
      hargaProduk: harga_produk,
      stokProduk: stok_produk
    };
    localStorage.setItem("data_produk_1", JSON.stringify(data));
  }

  // Variabel untuk memasukan data card 3 ke lokal stronge
  var nama_produk3 = document.getElementById("nama-produk3").textContent;
  var harga_produk3 = document.getElementById("harga-produk3").textContent;
  var stok_produk3 = document.getElementById("stok-produk3").textContent;

  // cek jika data pada tabel 3 tidak kosong
  if (nama_produk3 && harga_produk3 && stok_produk3) {
    var data3 = {
      namaProduk: nama_produk3,
      hargaProduk: harga_produk3,
      stokProduk: stok_produk3
    };
    localStorage.setItem("data_produk_3", JSON.stringify(data3));
  }

  // Variabel untuk memasukan data card 4 ke lokal stronge
  var nama_produk4 = document.getElementById("nama-produk4").textContent;
  var harga_produk4 = document.getElementById("harga-produk4").textContent;
  var stok_produk4 = document.getElementById("stok-produk4").textContent;

  // cek jika data pada tabel 4 tidak kosong
  if (nama_produk4 && harga_produk4 && stok_produk4) {
    var data4 = {
      namaProduk: nama_produk4,
      hargaProduk: harga_produk4,
      stokProduk: stok_produk4
    };
    localStorage.setItem("data_produk_4", JSON.stringify(data4));
  }

  // Variabel untuk memasukan data card 5 ke lokal stronge
  var nama_produk5 = document.getElementById("nama-produk5").textContent;
  var harga_produk5 = document.getElementById("harga-produk5").textContent;
  var stok_produk5 = document.getElementById("stok-produk5").textContent;

  // cek jika data pada tabel 5 tidak kosong
  if (nama_produk5 && harga_produk5 && stok_produk5) {
    var data5 = {
      namaProduk: nama_produk5,
      hargaProduk: harga_produk5,
      stokProduk: stok_produk5
    };
    localStorage.setItem("data_produk_5", JSON.stringify(data5));
  }

  // Variabel untuk memasukan data card 6 ke lokal stronge
  var nama_produk6 = document.getElementById("nama-produk6").textContent;
  var harga_produk6 = document.getElementById("harga-produk6").textContent;
  var stok_produk6 = document.getElementById("stok-produk6").textContent;

  // cek jika data pada tabel 6 tidak kosong
  if (nama_produk6 && harga_produk6 && stok_produk6) {
    var data6 = {
      namaProduk: nama_produk6,
      hargaProduk: harga_produk6,
      stokProduk: stok_produk6
    };
    localStorage.setItem("data_produk_6", JSON.stringify(data6));
  }

  deleteRow();
  deleteRow3();
  deleteRow4();
  deleteRow5();
  deleteRow6();
  
  alert("Pembelian berhasil, Terima kasih sudah belanja di toko kami☺️")
}