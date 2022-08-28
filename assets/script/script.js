function iconMenu() {
    let nav = document.getElementById("nav-links");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

function submitData() {
  const nama = document.getElementById("nama").value;
  const nmPerguruan = document.getElementById("nmPerguruan").value;
  const result = document.getElementById("result");

  result.style.display = "block";
  if (nama === "") {
    result.innerHTML = "Data Tidak Boleh Kosong..!!"
  }
  else {
    result.innerHTML = "~ Selamat " + nama + ", kamu cocok untuk mengikuti Perguruan Pencak Silat " + nmPerguruan + " ~";
  }
}

function clearData() {
  let nama = document.getElementById("nama");
  let nmPerguruan = document.getElementById("nmPerguruan");
  const result = document.getElementById("result");

  if (result.style.display === "block") {
    nama.value = "";
    nmPerguruan.value = "PSHT";
    result.innerHTML = "";
  }
}