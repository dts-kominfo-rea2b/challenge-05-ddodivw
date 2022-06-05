const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (aNama, fnSort) => {
  let aNamaBaru = [];
  let sortingNama = fnSort(aNama);
  for (let i = 0; i < sortingNama.length; i++) {
    const tempNama = `${i + 1}. ${sortingNama[i]}`;
    aNamaBaru.push(tempNama);
  }
  return aNamaBaru;
}
// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (aNama) => {
  return aNama.sort();
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (aNama) => {
  return aNama.sort().reverse();
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
