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
  alert("Pembelian berhasil, Terima kasih sudah belanja di toko kami☺️")
}