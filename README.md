<h1><a href="https://riiifkiii.github.io/PickRandomNumber" target="_blank">Pick Random Number Generator</a></h1>

![image](https://github.com/riiifkiii/pick-random-number/assets/24253726/8fd9f7b8-4d03-448e-bdf3-770c2097928d)

## Variabel State

- `min`: Menyimpan nilai minimum yang dimasukkan pengguna.
- `max`: Menyimpan nilai maksimum yang dimasukkan pengguna.
- `number`: Menyimpan angka yang dipilih secara acak.

## Fungsi

### `PickNumber`

Fungsi `PickNumber` adalah fungsi yang dipanggil ketika pengguna menekan tombol "Pick". Fungsi ini melakukan validasi input rentang, memilih angka acak dalam rentang yang ditentukan, dan memperbarui state `number`.

#### Validasi Input Rentang

1. Jika `min` atau `max` kosong, maka fungsi akan menampilkan pesan peringatan "Silakan masukkan angka".
2. Jika `min` lebih besar atau sama dengan `max`, maka fungsi akan menampilkan pesan peringatan "Angka maksimum harus lebih besar dari angka minimum".
3. Jika `min` kurang dari 0, maka fungsi akan menampilkan pesan peringatan "Angka minimum harus lebih besar atau sama dengan 0".

#### Pemilihan Angka Acak

1. Fungsi akan melakukan iterasi hingga `num` lebih besar dari `min`.
2. Pada setiap iterasi, fungsi akan menghitung nilai acak baru dalam rentang `min` hingga `max`.

#### Pembaruan State Angka

1. Setelah angka acak dipilih, fungsi akan memanggil `setNumber` dengan nilai yang dipilih.
