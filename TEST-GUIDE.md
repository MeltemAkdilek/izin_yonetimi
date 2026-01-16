# Test Kılavuzu - 4 Rol Doğrulama

Bu doküman, tüm 4 rol için kullanıcı bilgilerinin doğru yüklendiğini test etmek için hazırlanmıştır.

## Test Kullanıcıları

| Rol | Ad Soyad | Email | Şifre | ID |
|-----|----------|-------|-------|-----|
| **Personel (Saha)** | Ahmet Yılmaz | ahmet.yilmaz@tezmedikal.com | 123456 | 1 |
| **Yönetici** | Fatma Şahin | fatma.sahin@tezmedikal.com | 123456 | 4 |
| **İK Personeli** | Ayşe Demir | ayse.demir@tezmedikal.com | 123456 | 2 |
| **Müşteri İlişkileri** | Zeynep Arslan | zeynep.arslan@tezmedikal.com | 123456 | 6 |

---

## Test Senaryosu 1: Personel (Saha) - Ahmet Yılmaz

### Adımlar:
1. `index.html` dosyasını tarayıcıda açın
2. "Ahmet Yılmaz - Personel (Saha)" hızlı giriş butonuna tıklayın
3. Dashboard'a yönlendirildiğinizi doğrulayın

### Kontrol Edilecekler:
- ✅ **URL**: `/personel/dashboard.html`
- ✅ **Navbar'da kullanıcı adı**: "Ahmet" görünmeli
- ✅ **Hoşgeldiniz mesajı**: "Hoş geldin, Ahmet!" görünmeli
- ✅ **Kullanıcı bilgisi**: "İş Güvenliği Uzmanı - OSGB | Saha" görünmeli
- ✅ **İzin bakiyeleri**:
  - Kalan İzin: 12 gün
  - Hak Edilen: 20 gün
  - Kullanılan: 8 gün
- ✅ **Console log**: "Kullanıcı bilgileri yüklendi: Ahmet Yılmaz" mesajı olmalı

### Ek Test: Yeni İzin Talebi Formu
1. "Yeni İzin Talebi Oluştur" butonuna tıklayın
2. Form sayfasında otomatik doldurulan alanları kontrol edin:
   - Ad Soyad: Ahmet Yılmaz
   - Unvan: İş Güvenliği Uzmanı
   - Departman: OSGB
   - İş Yeri: Saha
   - Kalan İzin: 12 gün

---

## Test Senaryosu 2: Yönetici - Fatma Şahin

### Adımlar:
1. `index.html` dosyasını tarayıcıda açın
2. "Fatma Şahin - OSGB Mesul Müdür (Yönetici)" hızlı giriş butonuna tıklayın
3. Yönetici dashboard'a yönlendirildiğinizi doğrulayın

### Kontrol Edilecekler:
- ✅ **URL**: `/yonetici/dashboard.html`
- ✅ **Navbar'da kullanıcı adı**: "Fatma" görünmeli
- ✅ **Kullanıcı bilgisi**: "OSGB Mesul Müdür - OSGB" görünmeli
- ✅ **Başlık**: "Yönetici Yönetim Paneli" görünmeli
- ✅ **İstatistikler**:
  - Onay Bekleyen: 1 (veya mock data'ya göre)
  - Bu Ay Onaylanan: 3
  - Toplam Personel: 5
- ✅ **Console log**: "Kullanıcı bilgileri yüklendi: Fatma Şahin" mesajı olmalı

### Ek Test: Talep Detay Modal
1. "Detay" butonuna tıklayın
2. Modal'ın açıldığını doğrulayın
3. Personel bilgilerinin doğru göründüğünü kontrol edin

---

## Test Senaryosu 3: İK Personeli - Ayşe Demir

### Adımlar:
1. `index.html` dosyasını tarayıcıda açın
2. "Ayşe Demir - İK Personeli" hızlı giriş butonuna tıklayın
3. İK dashboard'a yönlendirildiğinizi doğrulayın

### Kontrol Edilecekler:
- ✅ **URL**: `/ik/dashboard.html`
- ✅ **Navbar'da kullanıcı adı**: "Ayşe" görünmeli
- ✅ **Başlık**: "İnsan Kaynakları Yönetim Paneli" görünmeli
- ✅ **Alt başlık**: "Belge kontrolleri, evrak takibi ve raporlama" görünmeli
- ✅ **3 Tab görünümü**:
  - Belge Kontrolü Bekleyenler (aktif)
  - Fiziki Evrak Bekleyenler
  - Tamamlanan İzinler
- ✅ **Console log**: "Kullanıcı bilgileri yüklendi: Ayşe Demir" mesajı olmalı

### Ek Test: Belge Kontrol Modal
1. Belge kontrolü bekleyen bir talebe "İncele" butonuna tıklayın
2. Modal'ın açıldığını doğrulayın
3. "Belge Uygun - Onayla" ve "Belge Uygun Değil" butonlarının görünür olduğunu kontrol edin

---

## Test Senaryosu 4: Müşteri İlişkileri - Zeynep Arslan

### Adımlar:
1. `index.html` dosyasını tarayıcıda açın
2. "Zeynep Arslan - Müşteri İlişkileri" hızlı giriş butonuna tıklayın
3. Müşteri İlişkileri dashboard'a yönlendirildiğinizi doğrulayın

### Kontrol Edilecekler:
- ✅ **URL**: `/musteri-iliskileri/dashboard.html`
- ✅ **Navbar'da kullanıcı adı**: "Zeynep" görünmeli
- ✅ **Başlık**: "Müşteri İlişkileri Yönetim Paneli" görünmeli
- ✅ **Alt başlık**: "Müşteri bildirim gönderme, talep takibi ve görevlendirme kararları" görünmeli
- ✅ **3 Tab görünümü**:
  - Bildirim Gönderilecek İzinler (aktif)
  - Müşteri Dönüşü Bekleyenler
  - Tamamlanan Bildirimler
- ✅ **İstatistik kartları**:
  - Bildirim Gönderilecek: 0
  - Müşteri Dönüşü Bekleniyor: 0
  - Bu Ay Tamamlanan: 0
- ✅ **Console log**: "Kullanıcı bilgileri yüklendi: Zeynep Arslan" mesajı olmalı

---

## Rol Bazlı Erişim Kontrolü Testi

### Test Adımları:
Her rol için aşağıdaki kontrolü yapın:

1. **Personel olarak giriş yapın**
   - `/yonetici/dashboard.html` adresine gitmeyi deneyin
   - **Beklenen**: "Bu sayfaya erişim yetkiniz yok!" uyarısı ve `index.html`'e yönlendirme

2. **Yönetici olarak giriş yapın**
   - `/ik/dashboard.html` adresine gitmeyi deneyin
   - **Beklenen**: "Bu sayfaya erişim yetkiniz yok!" uyarısı ve `index.html`'e yönlendirme

3. **İK olarak giriş yapın**
   - `/musteri-iliskileri/dashboard.html` adresine gitmeyi deneyin
   - **Beklenen**: "Bu sayfaya erişim yetkiniz yok!" uyarısı ve `index.html`'e yönlendirme

4. **Müşteri İlişkileri olarak giriş yapın**
   - `/personel/dashboard.html` adresine gitmeyi deneyin
   - **Beklenen**: "Bu sayfaya erişim yetkiniz yok!" uyarısı ve `index.html`'e yönlendirme

---

## Null Safety Testi

### Test Amacı:
localStorage'da kullanıcı bilgisi olmadığında veya bozuk veri olduğunda sistemin çökmemesini doğrulamak.

### Test Adımları:

1. **Tarayıcı Console'u açın** (F12 veya Cmd+Option+I)

2. **localStorage'ı temizleyin**:
   ```javascript
   localStorage.clear()
   ```

3. **Herhangi bir dashboard sayfasına gitmeyi deneyin**:
   - `/personel/dashboard.html`
   - **Beklenen**: Otomatik olarak `index.html`'e yönlendirme

4. **Bozuk veri testi**:
   ```javascript
   localStorage.setItem('currentUser', '{invalid json}')
   ```
   - Dashboard sayfasına gitmeyi deneyin
   - **Beklenen**: Console'da hata mesajı ve `index.html`'e yönlendirme

5. **Eksik alan testi**:
   ```javascript
   localStorage.setItem('currentUser', '{"id": 999, "rol": "personel"}')
   ```
   - Dashboard sayfasına gitmeyi deneyin
   - **Beklenen**: Varsayılan değerler görünmeli ("Personel" gibi) ve console'da uyarı mesajı

---

## Browser Console Kontrol Listesi

Her rol için giriş yaptıktan sonra browser console'da şu mesajları görmelisiniz:

### Personel Dashboard:
```
Kullanıcı bilgileri yüklendi: Ahmet Yılmaz
Tez Medikal İzin Yönetim Sistemi - Mockup initialized
```

### Yönetici Dashboard:
```
Kullanıcı bilgileri yüklendi: Fatma Şahin
Tez Medikal İzin Yönetim Sistemi - Mockup initialized
```

### İK Dashboard:
```
Kullanıcı bilgileri yüklendi: Ayşe Demir
Tez Medikal İzin Yönetim Sistemi - Mockup initialized
```

### Müşteri İlişkileri Dashboard:
```
Kullanıcı bilgileri yüklendi: Zeynep Arslan
Tez Medikal İzin Yönetim Sistemi - Mockup initialized
```

**HATA OLMAMALI**: Console'da kırmızı hata mesajı görünmemeli!

---

## Responsive Test

### Test Cihazları:
1. **Mobile** (375px): iPhone SE
2. **Tablet** (768px): iPad
3. **Desktop** (1024px+): Laptop/Desktop

### Her rol dashboard'unda test edin:
1. Chrome DevTools'u açın (F12)
2. Device Toolbar'ı aktif edin (Cmd+Shift+M veya Ctrl+Shift+M)
3. Farklı cihaz boyutlarını seçin
4. Her boyutta düzenin bozulmadığını kontrol edin

### Kontrol Edilecekler:
- ✅ Navbar mobilde düzgün görünüyor
- ✅ İstatistik kartları tek sütun halinde diziliyor (mobile)
- ✅ Tablolar yatay scroll yapabiliyor
- ✅ Butonlar tıklanabilir boyutta
- ✅ Modal'lar ekrana sığıyor

---

## Hızlı Test Scripti

Tüm rolleri hızlıca test etmek için tarayıcı console'da bu scripti çalıştırabilirsiniz:

```javascript
// Test Script
const testUsers = [
  { id: 1, name: 'Ahmet Yılmaz', role: 'personel', url: './personel/dashboard.html' },
  { id: 4, name: 'Fatma Şahin', role: 'yonetici', url: './yonetici/dashboard.html' },
  { id: 2, name: 'Ayşe Demir', role: 'ik', url: './ik/dashboard.html' },
  { id: 6, name: 'Zeynep Arslan', role: 'musteri_iliskileri', url: './musteri-iliskileri/dashboard.html' }
];

// Her kullanıcıyı test et
testUsers.forEach(user => {
  console.log(`\n--- Testing ${user.name} (${user.role}) ---`);

  // Set user in localStorage
  const userData = window.MockData.getPersonelById(user.id);
  localStorage.setItem('currentUser', JSON.stringify(userData));

  console.log(`✅ User data set for ${user.name}`);
  console.log(`📍 Navigate to: ${user.url}`);
  console.log(`Expected to see: ${user.name.split(' ')[0]} in navbar`);
});

console.log('\n🎉 All test users prepared! Navigate to each URL to verify.');
```

---

## Test Sonuçları - Checklist

### ✅ Tamamlanan Testler

- [ ] Test Senaryosu 1: Personel Dashboard - Tüm kontroller başarılı
- [ ] Test Senaryosu 2: Yönetici Dashboard - Tüm kontroller başarılı
- [ ] Test Senaryosu 3: İK Dashboard - Tüm kontroller başarılı
- [ ] Test Senaryosu 4: Müşteri İlişkileri Dashboard - Tüm kontroller başarılı
- [ ] Rol Bazlı Erişim Kontrolü - Tüm roller için başarılı
- [ ] Null Safety Testi - Tüm senaryolar başarılı
- [ ] Console Log Kontrolü - Hata yok
- [ ] Responsive Test - Tüm cihazlarda düzgün

### 🐛 Bulunan Hatalar

_(Buraya test sırasında bulunan hataları not alın)_

---

## İletişim

Herhangi bir hata veya sorun bulursanız, lütfen belgelendirin:
- Hangi rol ile test edildi
- Hangi tarayıcı kullanıldı
- Hatanın ekran görüntüsü
- Console'daki hata mesajları

---

**Test Tarihi**: 16 Ocak 2026
**Test Eden**: _______________
**Tarayıcı**: _______________
**Sonuç**: ✅ Başarılı / ⚠️ Uyarılar Var / ❌ Başarısız
