# เริ่มใช้งาน BOON BALANCE

## 1. ดาวน์โหลด ZIP ใหม่และแตกไฟล์ไว้ใน Downloads

โฟลเดอร์ที่แตกได้ต้องชื่อ BoonBalance-Restored และมี App.js, package.json, package-lock.json, screens, data, assets

## 2. เปิดใน VS Code และรัน

ติดตั้ง Node.js 22 LTS ก่อน แล้วเปิดโฟลเดอร์ BoonBalance-Restored ใน VS Code
เลือก Terminal → New Terminal และวาง:

```bash
npm ci
npm run web
```

เปิด URL ที่ Terminal แสดง กด Log In โดยไม่ต้องใส่อีเมล

## 3. ใส่โค้ดใน GitHub repository ที่สร้างแล้ว

หลังทดสอบ กด Control+C หยุด server จากนั้นเปิด Terminal ของ Mac และวางชุดนี้ (สมมติแตก ZIP ไว้ใน Downloads ตามข้อ 1):

```bash
cd "$HOME/Downloads"
git clone https://github.com/minthiraaa/BoonBalance.git BoonBalance-GitHub
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.expo' --exclude='dist' "$HOME/Downloads/BoonBalance-Restored/" "$HOME/Downloads/BoonBalance-GitHub/"
cd "$HOME/Downloads/BoonBalance-GitHub"
git add .
git commit -m "Restore BoonBalance app with bundled place data"
git push origin main
```

หาก GitHub ขอเข้าสู่ระบบ ให้ใช้การยืนยันผ่าน VS Code/GitHub credential manager ห้ามใส่รหัสผ่านหรือ token ลงในโค้ด หากโฟลเดอร์ BoonBalance-GitHub มีอยู่แล้ว ควรเปิดดูให้แน่ใจก่อน ไม่ต้องลบหรือเขียนทับโดยไม่ตรวจสอบ

## 4. เปิดเว็บสาธารณะ

ไปที่ GitHub → minthiraaa/BoonBalance → Settings → Pages → Source เลือก GitHub Actions
จากนั้น Actions → Deploy Expo web to GitHub Pages → Run workflow
รอให้ build และ deploy ผ่านแล้วกด URL ที่งาน deploy แสดง

URL ที่คาดว่าจะได้: https://minthiraaa.github.io/BoonBalance/
URL นี้จะยังไม่เปิดจนกว่าจะอัปโหลดและ deploy สำเร็จ

แอปนี้เป็นโหมดสาธิต ไม่มีระบบล็อกอินจริง ข้อมูลสถานที่สร้างใหม่จากภาพและข้อความอ้างอิง ไม่ใช่ฐานข้อมูลเดิมที่ถูกลบ
