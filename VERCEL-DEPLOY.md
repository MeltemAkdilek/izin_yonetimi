# Vercel'e Otomatik Deploy - Adım Adım

## 🚀 Hızlı Deploy (2 Dakika)

### 1. Vercel'e Giriş Yapın
- Tarayıcınızda [https://vercel.com/login](https://vercel.com/login) adresine gidin
- **"Continue with GitHub"** butonuna tıklayın
- GitHub hesabınızla giriş yapın (MeltemAkdilek)

### 2. Yeni Proje Ekleyin
- Vercel dashboard açıldığında **"Add New..."** butonuna tıklayın (sağ üst)
- **"Project"** seçeneğini seçin

### 3. Repository'yi Import Edin
- **"Import Git Repository"** bölümünde arama yapın
- `izin_yonetimi` repository'sini bulun
- **"Import"** butonuna tıklayın

### 4. Proje Ayarlarını Yapılandırın

**Framework Preset:**
```
Other (veya None)
```

**Root Directory:**
```
./
```
(değiştirmeyin, varsayılan olarak kalabilir)

**Build and Output Settings:**
```
Build Command: (BOŞ BIRAKIN veya Override et ve boş bırak)
Output Directory: ./ (nokta)
Install Command: (BOŞ BIRAKIN)
```

**Environment Variables:**
```
(Hiç bir şey eklemeyin)
```

### 5. Deploy Edin
- **"Deploy"** butonuna tıklayın
- Vercel otomatik olarak projeyi build edip yayınlayacak (30-60 saniye)

### 6. Sonuç 🎉

Deploy tamamlandığında:
- ✅ Production URL'iniz hazır: `https://izin-yonetimi-XXXX.vercel.app`
- ✅ Her GitHub push'ta otomatik yeniden deploy
- ✅ Preview URL'leri her commit için

---

## 🔗 Beklenen URL Formatı

**Production (Ana Dal):**
```
https://izin-yonetimi.vercel.app
```
veya
```
https://izin-yonetimi-meltemakdileks-projects.vercel.app
```

**Preview (Her Commit İçin):**
```
https://izin-yonetimi-git-main-meltemakdileks-projects.vercel.app
```

---

## ✅ Deploy Sonrası Test Listesi

1. Ana sayfayı açın: `https://your-url.vercel.app/`
2. 4 hızlı giriş butonunu test edin:
   - ✅ Personel (Ahmet Yılmaz) → Dashboard açılmalı
   - ✅ Yönetici (Mehmet Kaya) → Yönetici panel açılmalı
   - ✅ İK (Ayşe Demir) → İK panel açılmalı
   - ✅ Müşteri İlişkileri (Zeynep Yıldız) → MİL panel açılmalı

3. Personel olarak yeni izin talebi oluşturun:
   - ✅ Personel bilgileri otomatik dolu mu?
   - ✅ İzin bakiyeleri görünüyor mu?
   - ✅ İzin tipi seçimi çalışıyor mu?
   - ✅ Tarih seçimleri çalışıyor mu?

4. Responsive test:
   - ✅ Mobil görünümde açın (375px)
   - ✅ Tablet görünümde test edin (768px)
   - ✅ Desktop görünümde test edin (1280px)

---

## 🔄 Güncelleme Yapmak İçin

Artık her değişiklik otomatik deploy olacak:

```bash
cd /Users/meltemakdilek/Desktop/my-claude-project/izin-yonetim-mockup

# Değişiklik yapın, sonra:
git add .
git commit -m "Açıklama mesajı"
git push origin main
```

Vercel otomatik olarak yeni versiyonu deploy edecek! 🚀

---

## 🚨 Sorun Giderme

### "Repository not found" hatası
- GitHub hesabınızda Vercel'e repository erişim izni verdiğinizden emin olun
- Vercel dashboard → Settings → GitHub → Install/Configure

### "Build failed" hatası
- Bu mockup için build gerektirmez
- Build Command'ı boş bıraktığınızdan emin olun

### "404 Not Found" hatası
- Output Directory'nin `./` olduğundan emin olun
- index.html dosyasının root'ta olduğunu kontrol edin

---

## 📞 İhtiyaç Olursa

Herhangi bir adımda takılırsanız veya sorun yaşarsanız, bana haber verin.
Deploy tamamlandığında URL'i paylaşın, birlikte test edelim! 🎉
