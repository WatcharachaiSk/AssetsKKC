
## Application Assets Management System RMUTI KKC (Application)

ปริญญานิพนธ์ครั้งนี้มีจุดประสงค์ เพื่อพัฒนาระบบการจัดการครุภัณฑ์ผ่านเว็บไซต์และระบบปฏิบัติการแอนดรอยด์ โดยส่วนประกอบหลักในระบบการทำงานของเว็บไซต์และแอปพลิเคชัน คือการจัดเก็บข้อมูล และตรวจสอบสถานะของครุภัณฑ์ จะทำการตรวจสอบสถานะของครุภัณฑ์ผ่านการสแกนคิวอาร์โค้ด ซึ่งเป็นบาร์โค้ด 2 มิติ ที่มีการอ่านข้อมูลอย่างรวดเร็ว จึงนำมาเป็นเครื่องมือในการช่วยให้เจ้าหน้าที่ผู้รับผิดชอบตรวจสอบครุภัณฑ์หรือผู้ใช้งานสามารถเข้าถึงข้อมูล สถานะ และตำแหน่งของครุภัณฑ์ได้อย่างง่ายและสะดวกมากขึ้น ทดแทนการจัดการและตรวจสอบครุภัณฑ์แบบการใช้เอกสาร และใช้ระยะเวลาในการตรวจสอบ ซึ่งระบบการจัดการครุภัณฑ์ผ่านเว็บไซต์และระบบปฏิบัติการ แอนดรอยด์จะช่วยอำนวยความสะดวกในการตรวจสอบครุภัณฑ์ให้รวดเร็ว และมีประสิทธิภาพมากยิ่งขึ้น

จากการพัฒนาระบบตามขอบเขตและแผนการปฏิบัติงาน จะได้เว็บไซต์การจัดการข้อมูลครุภัณฑ์ที่มีการจัดเก็บรายละเอียดละข้อมูลของครุภัณฑ์ และนำข้อมูลของครุภัณฑ์มาสร้างเป็นคิวอาร์โค้ดหรือบาร์โค้ด 2 มิติ และได้แอปพลิเคชันที่ใช้งานบนระบบปฏิบัติการแอนดรอยด์ ที่สามารถดูรายละเอียดของครุภัณฑ์ ตาม หมวดหมู่ และสถานะของครุภัณฑ์ รวมไปถึงการอัปเดตสถานะ และเปลี่ยนสถานที่ตั้งของครุภัณฑ์ได้ผ่านการสแกนคิวอาร์โค้ด

พัฒนาโดยใช้ React Native (ระบบปฏิบัติการแอนดรอยด์)

# เครดิต
#### Watcharachai Samkhan
#### Isariya Roopkhan

<p align="center">
  <a target="blank"><img src="https://sv1.picz.in.th/images/2023/02/16/L8wDrl.png" width="200" height: "100%" alt="MobileLogo" /></a>
</p>

# คู่มือการติดตั้ง
- พัฒนาบน Node Version: **16.13.0**  
- React Version: **18.0.0**  
- React-Native Version: **0.69.3**
- Java Version:  **15.0.2**
- Android Studio Emulator

## ติดตั้ง Environment (Development)
#### Installing Node.js® and NPM on Windows
 > 1. Download Node.js Installer: [Download | Node.js (nodejs.org)](https://nodejs.org/en/download/)
 > 2. Install Node.js and NPM from Browser
 > 
	1) Once the installer finishes downloading, launch it. Open the  **downloads**  link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.
	2) The system will ask if you want to run the software – click  **Run**.
	3) You will be welcomed to the Node.js Setup Wizard – click  **Next**.
	4) On the next screen, review the license agreement. Click  **Next**  if you agree to the terms and install the software.
	5) The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click  **Next**.
	6) The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking  **Next**.
	7) Finally, click the  **Install**  button to run the installer. When it finishes, click  **Finish**.
>3. Verify Installation 
	>node -v
		npm -v
		-> Output 
			node: v16.10.0
			npm: v1.5.0	
>4. อ้างอิง [How to Install Node.js and NPM on Your Windows System](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

##### ติดตั้ง Java JDK และกำหนด Java Path
-  ตรวจสอบ System type > 32-bit (x86) หรือ 64-bit (x64)
-  ดาวน์โหลด JDK
>เข้าไปที่เว็บไซต์ [JavaSE Download](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- ติดตั้ง JDK
-  กำหนด Java Path (JAVA_HOME)
> 1. ไปที่ search แล้วพิมพ์ environment แล้วคลิกผลการค้นหา
> 2. คลิกปุ่ม Environment Variables 
>  3. คลิกปุ่ม New… ตรงส่วน System variables
>  4. ให้เปิดเข้าไปในส่วนที่ติดตั้ง JDK แล้วคัดลอก path
>  5. กำหนด Variable name เป็น JAVA_HOME และกำหนด Variable value เป็น path ที่คัดลอกมาจากด้านบน จากนั้นคลิกปุ่ม OK
>  6. คลิกไปที่ Path (โดยปกติจะมีอยู่แล้ว ถ้าไม่มีให้สร้างขึ้นมาใหม่) จากนั้นคลิกปุ่ม Edit…
>  7. เปิดเข้าไปในส่วนที่ติดตั้ง JDK แล้วเข้าไปในโฟลเดอร์ bin และคัดลอก path
>  8. คลิกปุ่ม New แล้ววางส่วนที่คัดลอกมาจากด้านบน
>  9. คลิกปุ่ม OK หน้าต่าง Edit environment variable
>  10. คลิกปุ่ม OK หน้าต่าง Environment variable
>  11. คลิกปุ่ม OK หน้าต่าง System Properties ก็เสร็จเรียบร้อย
>  12. อ้างอิง [ติดตั้ง Java JDK และกำหนด Java Path](https://devescapes.wordpress.com/2019/12/07/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-java-jdk-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%94-java-path/)
- ตรวจสอบการใช้งาน Java
>พิมพ์คำสั่งที่ **cmd** `java -version` (ดูเวอร์ชันของ Java)
#####  ติดตั้ง Android Studio
> 1. เข้าไปที่เว็บไซต์ [Download Android Studio](https://developer.android.com/studio)
  >2. เมื่อเราดาวโหลดเสร็จ ก็จะได้ตัว Install มาแล้วครับ กดทำการติดตั้งได้เลย
  >3. เราก็ทำการติดตั้งแบบปกติทั่วๆไปได้เลยครับ เพียง Next-> Next-> Next-> Next->
>4. อ้างอิง [[Android] การติดตั้ง Android Studio](https://medium.com/sathittham/android-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-android-studio-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94-c4729c1f85d4)

  #### git clone โปรแกรม
 - โดยมีเครื่องมือต่างๆรองรับ เช่น **git desktop**, **sourcetree**
 >1. git clone <*repository*>
	 <*repository*> คือ URL ของ repository ที่เราต้องการจะ clone ตัวอย่างถ้าเราต้องการจะ Clone จาก github เราก็สามารถไป Copy URL จาก github ได้เลย
	 
##  เมื่อติดตั้ง Environment (Development) เสร็จ
- ทำการใช้ **git clone** โปรแกรม
	 >clone https://github.../.../BE_Qr.git
 - เปิดโฟลเดอร์ที่ได้ Clone โปรแกรม
 - ให้ทำการติดตั้ง **Package** ของโปรแกรม
	 >  npm install หรือ yarn install
	 > ทดสอบ **Start** ระบบด้วย
	 > **npm run android** 
	 > หรือ
	 > **react-native run-android**

##  เมื่อต้องการ Build 
- ให้ cd เข้าไปใน โฟลเดอร์ **`android`** ใช้คำสั่ง
	 >./gradlew app:assembleRelease
- ที่อยู่ไฟล์ .apk จะอยู่ที่
> >AssetsKKC\android\app\build\outputs\apk\release
##### ***ถ้าหากว่า path ของระบบ Backend เปลี่ยนจะส่งผลต่อระบบ  Frontend และ Application ไปด้วยในการรับส่งข้อมูล**	

## ถ้าหากว่า path ของระบบ Backend เปลี่ยน
- แก้ไขในไฟล์ **config.ts** ในตัวแปล <*APP_API_URL_PROD*>
	>
	> ที่อยู่ไฟล์ **AssetsKKC\src\axios\config.ts**
	> 
	> APP_API_URL_PROD = "new path"
	> 
	> ทำการ **react-native run-android** อีกรอบ
	 
#### *สงวนลิขสิทธิ์ ใช้ภายใน มหาวิทยาลัยเทคโนโลยี ราชมงคลอีสานวิทยาเขต ขอนแก่น.
