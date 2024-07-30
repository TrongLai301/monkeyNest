## Docs tutorial

- [Discord.js](https://discord.js.org)
- [Discord.js-Guild](https://discordjs.guide/#before-you-begin)

## I. Cách chạy project

```
1. Setup NodeJS (20.11.1 'Xem youtube cách cài đặt')
2. Clone source-code (HTTPS cho window) 
3. Open source-code (mở terminal cd đến file / mở trực tiếp file trên công cụ)
4. Chạy dự án (mở terminal trên công cụ)
5. [npm install] (để cập nhật package)
6. [node .]
```
## II. Cấu trúc project
```
* Các folder trong project
- src
    -- assets: Tài nguyên chung của project (ảnh, gif,...)
    -- commands: Chứa các req của người dùng
        + action: Chứa các hành động
        + tag: Chứa các req tag người dùng
        + utility: Chứa các req sử dụng Slash
        + other: Khác
    -- schemas: Chứa các bảng của database (MongoDB)
    -- Simsimi: Chứa bot tự động rep mess người dùng
- .env: File cấu hình môi trường dev
- index.js: File chạy chính của project
- slash-deploy: File config cho Slash
```

```
Lưu ý: file .env do bạn tự thêm
- tạo 1 file .env nằm ngoài thư mục gốc
- file .env gồm các biến
    + BOT_API_TOKEN : Mã token của bot
    + BOT_APP_ID : Id của bot
    + BOT_PUBLIC_KEY : Key của bot
    + BOT_SERVER_ID : Chưa dùng đến
    + MONGO_URL : đường dẫn connect đến mongo DB
```