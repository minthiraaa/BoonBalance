# BOON BALANCE — Restored prototype

โปรเจกต์เดิม React Native + Expo ที่ปรับให้ใช้งานได้โดยไม่เรียกหลังบ้าน Strapi เก่า รองรับ iOS, Android และเว็บ หน้าตายึดภาพอ้างอิงเดิม: Login → Choose a category → Love / Work / Health / Lucky → รายละเอียดสถานที่

## เปิดใน VS Code

ติดตั้ง Node.js 22 LTS และ VS Code แล้วเปิดโฟลเดอร์นี้ (โฟลเดอร์ที่มี package.json) เปิด Terminal → New Terminal:

```bash
npm ci
npm run web
```

เปิด URL ที่ Expo แสดงใน Terminal (ปกติ http://localhost:8081) เว็บบนคอมพิวเตอร์จะแสดงแอปกว้างไม่เกิน 440px ตามลักษณะหน้าจอมือถือ ไม่ใช่ภาพมือถือจำลอง

### ทดสอบบนมือถือ

```bash
npm start
```

ใช้ development build หรือ Expo Go ที่รองรับ Expo SDK 54 บนเครือข่ายเดียวกัน หาก Expo Go ปัจจุบันไม่รองรับ SDK 54 ให้ทดสอบผ่านเว็บบนมือถือ หรือใช้ development build ที่ตรงกับ SDK นี้ โปรเจกต์ไม่ได้อัปเกรด SDK หลักโดยอัตโนมัติ

## สิ่งที่ซ่อม

- แทนการเรียก Strapi ด้วยข้อมูล local 8 สถานที่ ครบ 4 หมวด
- ฝังภาพสถานที่ในโปรเจกต์ ไม่เรียก URL รูปจากเซิร์ฟเวอร์เก่า
- คงดีไซน์เดิมของหน้าหมวด การ์ด ปุ่ม และรายละเอียด
- ปุ่ม Log In เข้าสู่โหมดสาธิต ไม่ต้องกรอกอีเมล
- ปุ่ม Social แสดงคำอธิบายว่ายังไม่เชื่อมบัญชีจริง
- เพิ่มหน้า Sign Up อธิบายสถานะสาธิต แก้ route ที่เคยไม่มีหน้ารองรับ
- ค้นหาหมวดได้ทั้งภาษาไทยและอังกฤษ
- ปุ่มนำทางเปิด Google Maps และมีข้อความหากเปิดไม่สำเร็จ
- ลบ API token เดิมออกจากโค้ด พร้อม GitHub Pages workflow

## ข้อมูลที่กู้คืนได้และข้อจำกัด

ฐานข้อมูลเดิมไม่ได้อยู่ใน ZIP จึงไม่ใช่การกู้คืนฐานข้อมูลต้นฉบับ ข้อมูลใหม่เป็น seed สำหรับสาธิต ชื่อสถานที่ รูป และคะแนนอ้างอิงจากภาพที่ผู้ใช้ส่งมา ภาพสถานที่ถูกตัดจาก screenshot จึงมีความละเอียดจำกัด ข้อความรายละเอียดบางส่วนเขียนขึ้นใหม่ ไม่ใช่ข้อมูลที่ยืนยันกับสถานที่แล้ว เวลาที่ไม่ทราบจะแสดงให้ตรวจสอบโดยตรง ไม่มีการสร้างเวลาเปิดขึ้นเอง คะแนนเป็นตัวเลขจากภาพ ไม่ใช่รีวิวสด

ไม่มีบัญชีผู้ใช้จริง ไม่มีรหัสผ่าน ไม่มีการเก็บอีเมลหรือส่งข้อมูลไปเซิร์ฟเวอร์ ไม่ควรอ้างว่า Social login ใช้งานได้จริง และการสักการะเป็นเรื่องความเชื่อ ไม่ใช่การรักษาพยาบาล

หลังติดตั้ง dependency แล้ว การเปิดรายการ/รายละเอียดไม่ต้องใช้ API ภายนอก การติดตั้ง dependency, เปิด dev server ครั้งแรก และ Google Maps ต้องใช้อินเทอร์เน็ต เว็บยังไม่มี service worker จึงไม่รับประกันการเปิดเว็บใหม่ตอนออฟไลน์

## แก้ไขข้อมูลและรูป

แก้ `data/places.json` สำหรับชื่อ คำอธิบาย ที่อยู่ วิธีบูชา และของถวาย แทนภาพใน `assets/places/` ด้วยรูปของคุณโดยใช้ชื่อเดิม หากเพิ่มสถานที่ใหม่ ให้เพิ่ม static require ของรูปใน `data/places.js` ด้วย

โครงสร้าง:

```text
App.js                       navigation และกรอบหน้าจอเว็บ
screens/                     หน้าจอเดิมที่ปรับปรุง
stylesheets/                 สไตล์เดิม
assets/places/               ภาพสถานที่ที่ฝังในโปรเจกต์
data/places.json             ข้อมูลที่แก้ไขได้
data/places.js               เชื่อมข้อมูลกับรูป
.github/workflows/           ตรวจสอบและเผยแพร่เว็บ
```

## ขึ้น GitHub

สร้าง repository ใหม่ชื่อ `boonbalance` ในบัญชีของคุณโดยไม่เพิ่ม README แล้วใช้ VS Code Source Control → Publish to GitHub หรือรัน (แทน YOUR_USERNAME ด้วยชื่อบัญชีจริง):

```bash
git init
git add .
git commit -m "Restore BoonBalance offline prototype"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/boonbalance.git
git push -u origin main
```

อย่าอัปโหลด ZIP ต้นฉบับขึ้น repository เพราะมี API token เก่า หาก token นั้นยังใช้ได้ ควรให้เจ้าของระบบเดิมเพิกถอน

### เผยแพร่เว็บด้วย GitHub Pages

GitHub repository ใช้เก็บโค้ด ส่วน Pages ทำให้คนอื่นเปิดใช้งานเว็บได้:

1. ใน repository ไป Settings → Pages → Source เลือก **GitHub Actions**
2. ไป Actions → Deploy Expo web to GitHub Pages → Run workflow (หรือ push เข้า main)
3. รอทั้ง build และ deploy ผ่าน แล้วใช้ URL ในงาน deploy

workflow ใช้ base_path จาก GitHub Pages เพื่อให้รูปและ bundle โหลดถูกต้องใต้ชื่อ repository ไม่ต้องใส่ token ใน frontend โปรเจกต์ใช้ single-page output; เปิดเข้าหน้าแรกแล้วกดนำทางในแอป

## ตรวจสอบ

```bash
npm run check
npm test
npm run build:web
```

ดู `VALIDATION.md` สำหรับผลตรวจจากผู้จัดทำ การตรวจข้อมูลและ build ไม่เท่ากับการทดสอบอุปกรณ์จริง
