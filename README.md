# TestJavan

## Daftar Isi

1. [Summary](#summary)
1. [Tech Stack](#tech-stack)
2. [Deploy di komputer lokal](#deploy-di-komputer-lokal)
4. [Testing dengan Postman](#testing-dengan-postman)

## Summary  

Untuk desain database kami menggunakan desain table sebagai berikut: 

users 
- name 
- gender 
- parent => digunakan untuk menampung parent apabila user ini merupakan member dari user lain

user_devices 
- user_id 
- device_id

devices => pulled from external sevices 
- title
- price

## Tech Stack

Dalam aplikasi ini, saya menggunakan:
- TypeScript
- Node.Js
- ExpressJS
- Nodemon
- Dotenv
- Postman
- VSCode
- ...

## Deploy di komputer lokal

Untuk bisa menjalankan aplikasi ini diperlukan beberapa software yang harus diterinstall di komputer local anda, diantaranya:
- Docker
- Docker Compose
- Node.JS 16+

Setelah requirement diatas terpenuhi, untuk melakukan setup awal, pastikan Anda telah melakukan cloning projek ini.

Setelah anda cloning, repo ini, buka terminal pada komputer anda dan masuk ke folder repo ini:
```
cd Code/javan
```

Setelah kita berada dalam folder javan, jalankan perintah:
```
npm install
```

### Running database service menggunakan docker

Untuk menjalankan database Mongo yang ada dalam projek ini, cukup jalankan perintah:
```
docker compose up -d
docker compose ps # untuk melihat status dari `running container`

=> ⠿ Container testjavan-mysql-1  Running                                                                                                0.0s
=> ⠿ Container testjavan-api-1    Running                                                                                                0.0s
=> ⠿ Container testjavan-web-1    Running                                                                                                0.0s
```

### Endpoints
- API: http://localhost:4000 
- WEB: http://localhost:3000


### Noted

Aplikasi ini supports untuk database:

- MySQL

## Testing dengan Postman

Untuk melakukan testing api, pastikan Anda sudah melakukan import [Javan Postman Collection](docs/Javan.postman_collection.json) yang ada pada folder docs di repository ini.
