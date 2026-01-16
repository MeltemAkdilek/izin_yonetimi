# Tez Medikal İzin Yönetim Sistemi - Mockup Demo

Tez Medikal firması için tasarlanan kapsamlı izin yönetim sistemi mockup'ı. HTML/CSS/JavaScript ile geliştirilmiş, fonksiyonel ve responsive bir prototiptir.

## 📋 Proje Durumu

### ✅ Tamamlanan Çalışmalar

#### 1. Analiz ve Dokümantasyon
- **Kapsamlı Analiz Dokümanı**: `../.claude/plans/piped-tumbling-starlight.md`
  - 10 izin tipi detayları ve evrak gereksinimleri
  - 14 ekran planı ve detaylı açıklamaları
  - Genel Merkez ve Saha çalışanları için farklı süreç akışları
  - Logo ve Hipotez entegrasyon planları
  - Rol tabanlı yetkilendirme matrisi
  - Bildirim ve otomasyon kuralları
  - Test senaryoları ve kabul kriterleri

#### 2. Temel Altyapı
- ✅ **Design System** (`assets/css/`)
  - CSS Variables ile tasarım token'ları
  - Yeniden kullanılabilir komponentler (Button, Card, Form, Table, Modal, Toast, vb.)
  - Responsive utility class'ları
  - Mobile-first yaklaşım

- ✅ **Mock Data** (`assets/js/mockup-data.js`)
  - 6 gerçek test kullanıcısı
  - 10 izin tipi tanımı
  - 4 örnek izin talebi
  - Saha atamaları ve müşteri bildirimleri
  - Yardımcı fonksiyonlar (tarih formatlama, validasyon, vb.)

- ✅ **Global JavaScript** (`assets/js/main.js`)
  - Modal, dropdown, toast yönetimi
  - Form validasyonu
  - Kullanıcı oturum yönetimi

#### 3. Tamamlanan Ekranlar

##### **E1: Giriş Ekranı** (`index.html`)
- Modern ve şık tasarım
- Email/şifre ile giriş
- Hızlı giriş butonları (demo için)
- Rol bazlı otomatik yönlendirme
- **Test Kullanıcıları:**
  - Ahmet Yılmaz (Personel - Saha): `ahmet.yilmaz@tezmedikal.com`
  - Ayşe Demir (İK Personeli): `ayse.demir@tezmedikal.com`
  - Fatma Şahin (OSGB Mesul Müdür): `fatma.sahin@tezmedikal.com`
  - Zeynep Arslan (Müşteri İlişkileri): `zeynep.arslan@tezmedikal.com`

##### **E2: Personel Dashboard** (`personel/dashboard.html`)
- İzin bakiye kartları (Kalan, Hak Edilen, Kullanılan)
- Hızlı aksiyonlar (Yeni talep, Geçmiş)
- Bekleyen işlemler bölümü
- İzin talepleri tablosu (filtreleme, detay görüntüleme)
- Bildirim merkezi entegrasyonu
- Empty state yönetimi
- Null safety checks for user data

##### **E3: Yeni İzin Talebi Formu** (`personel/yeni-izin.html`)
- Otomatik doldurulan personel bilgileri
- İzin bakiye gösterimi
- Dinamik izin tipi seçimi
- Tarih seçimleri ve otomatik süre hesaplama
- Dinamik evrak yükleme alanı (izin tipine göre)
- Ölüm izni için özel yakınlık derecesi seçimi
- **Saha personeli özel bölümü:**
  - Hipotez'den çekilen atamalar listesi
  - Eksik hizmet girişi tablosu
  - Çoklu atama seçimi
- Form validasyonları
- Taslak kaydetme
- Null safety checks for user data

##### **E4: Yönetici Dashboard** (`yonetici/dashboard.html`)
- Onay bekleyen talepler tablosu
- İstatistik kartları (Bekleyen, Onaylanan, Toplam Personel)
- Talep detay modalı
- Onayla/Reddet/Revize Et aksiyonları
- Yönetici notları alanı
- Null safety checks for user data

##### **E6: İK Dashboard** (`ik/dashboard.html`)
- 3 sekmeli yapı (Belge Kontrolü, Fiziki Evrak, Tamamlanan)
- İstatistik dashboard
- Belge doğrulama modalı
- İK notları alanı
- Excel/PDF export butonları
- Null safety checks for user data

##### **E10: Müşteri İlişkileri Dashboard** (`musteri-iliskileri/dashboard.html`)
- 3 sekmeli yapı (Bildirim Gönderilecek, Müşteri Dönüşü, Tamamlanan)
- İstatistik kartları
- Otomatik bildirim gönderme
- 3 iş günü sayaç sistemi
- Müşteri bildirim modalı
- Null safety checks for user data

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Localhost sunucusu (opsiyonel, doğrudan HTML dosyası açarak da çalıştırılabilir)

### Kurulum Adımları

1. **Proje Klasörünü Açın**
   ```bash
   cd /Users/meltemakdilek/Desktop/my-claude-project/izin-yonetim-mockup
   ```

2. **Tarayıcıda Açın**
   - `index.html` dosyasına çift tıklayın
   - VEYA bir localhost sunucusu başlatın:
     ```bash
     # Python 3
     python3 -m http.server 8000

     # Node.js (npx)
     npx http-server -p 8000
     ```
   - Tarayıcıda `http://localhost:8000` adresine gidin

3. **Giriş Yapın**
   - Hızlı giriş butonlarından birini kullanın
   - Veya email/şifre ile giriş yapın (şifre: `123456`)

---

## 📱 Ekran Yapısı

```
izin-yonetim-mockup/
├── index.html                 # ✅ E1: Giriş Ekranı
├── personel/
│   ├── dashboard.html        # ✅ E2: Personel Dashboard
│   ├── yeni-izin.html        # ✅ E3: Yeni İzin Talebi Formu
│   ├── form-olustur.html     # ⏳ E8: Onay Sonrası Form Oluştur
│   └── dijital-onay.html     # ⏳ E9: İzin Sonrası Dijital Onay
├── yonetici/
│   └── dashboard.html        # ✅ E4: Yönetici Dashboard
├── ik/
│   ├── dashboard.html        # ✅ E6: İK Dashboard
│   ├── belge-kontrol.html    # ⏳ E7: Belge Kontrol Modal (Included in dashboard)
│   ├── raporlama.html        # ⏳ E12: Raporlama
│   └── ayarlar.html          # ⏳ E14: Ayarlar
├── musteri-iliskileri/
│   ├── dashboard.html        # ✅ E10: Müşteri İlişkileri Dashboard
│   └── musteri-formu.html    # ⏳ E11: Müşteri Formu
└── components/
    └── notification-center.html  # ⏳ E13: Bildirim Merkezi
```

**Açıklama:**
- ✅ = Tam fonksiyonel, detaylı ekran
- ⏳ = Henüz oluşturulmadı (temel yapı hazır)

---

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary (Tez Medikal Mavi)**: #2563EB
- **Success (Yeşil)**: #10B981
- **Warning (Sarı)**: #F59E0B
- **Error (Kırmızı)**: #EF4444
- **Neutral (Gri Tonları)**: #F9FAFB → #111827

### Tipografi
- **Font**: Inter (Google Fonts)
- **Heading 1**: 24px, Bold
- **Heading 2**: 20px, Semibold
- **Body**: 16px, Regular
- **Small**: 14px, Regular

### Komponentler
- Buttons (Primary, Secondary, Outline, Danger)
- Cards
- Forms (Input, Select, Date Picker, File Upload)
- Tables
- Modals
- Toast Notifications
- Badges
- Tabs
- Dropdowns

---

## 💡 Özellikler

### Mevcut Özellikler
- ✅ Kullanıcı oturum yönetimi (localStorage)
- ✅ Rol bazlı yönlendirme
- ✅ Dinamik form alanları
- ✅ Tarih validasyonu ve hesaplama
- ✅ Dosya yükleme simülasyonu
- ✅ Toast bildirimleri
- ✅ Modal yönetimi
- ✅ Responsive tasarım
- ✅ Empty state yönetimi
- ✅ Filtreleme ve arama
- ✅ Mock data ile gerçekçi test

### Henüz Uygulanmayan Özellikler
- ⏳ Gerçek API entegrasyonu
- ⏳ Veritabanı bağlantısı
- ⏳ Email gönderimi
- ⏳ PDF oluşturma
- ⏳ Gerçek dosya yükleme
- ⏳ Logo/Hipotez entegrasyonu

---

## 🧪 Test Senaryoları

### Senaryo 1: Personel İzin Talebi Oluşturma
1. `index.html` dosyasını açın
2. "Ahmet Yılmaz - Personel (Saha)" hızlı giriş butonuna tıklayın
3. Dashboard'da izin bakiyelerini kontrol edin
4. "Yeni İzin Talebi Oluştur" butonuna tıklayın
5. İzin tipi olarak "Hastalık İzni" seçin
6. Tarih seçimlerini yapın
7. Evrak yükleyin (simülasyon)
8. Saha personeli için eksik hizmet seçimi yapın
9. "Gönder" butonuna tıklayın
10. Başarı mesajını görün ve dashboard'a dönün

### Senaryo 2: İzin Geçmişini Görüntüleme
1. Personel olarak giriş yapın
2. Dashboard'da "İzin Taleplerim" tablosunu inceleyin
3. Filtreleme butonlarını deneyin (Tümü, Bekleyen, Onaylanan)
4. Bir talebe "Detay" butonuna tıklayın
5. Modal'da talep detaylarını görüntüleyin

---

## 📊 Mock Data Yapısı

### Personeller
```javascript
{
  id: 1,
  adSoyad: "Ahmet Yılmaz",
  email: "ahmet.yilmaz@tezmedikal.com",
  unvan: "İş Güvenliği Uzmanı",
  departman: "OSGB",
  isYeri: "Saha",
  hakEdilenIzin: 20,
  kullanilanIzin: 8,
  kalanIzin: 12,
  rol: "personel"
}
```

### İzin Tipleri
- Evlilik İzni (İK onayı gerekli)
- Doğum İzni (İK onayı gerekli)
- Süt İzni (İK onayı gerekli)
- Ölüm İzni (İK onayı gerekli, yakınlık derecesi seçimi)
- Babalık İzni (İK onayı gerekli)
- Hastalık İzni (İK onayı gerekli)
- Evlat Edinme İzni (İK onayı gerekli)
- Eğitim İzni (İK onayı gerekli)
- Diğer Ücretli İzin (İK onayı bypass)
- Diğer Ücretsiz İzin (İK onayı bypass)

---

## 🔧 Geliştirme

### Yeni Ekran Ekleme
1. İlgili klasöre yeni HTML dosyası oluşturun
2. Temel şablonu kopyalayın (`personel/dashboard.html` iyi bir başlangıç noktasıdır)
3. CSS ve JS dosyalarını include edin
4. Mock data kullanarak dinamik içerik oluşturun

### Yeni Komponent Ekleme
1. `assets/css/components.css` dosyasına yeni komponent stilini ekleyin
2. Gerekirse `assets/js/main.js` dosyasına JavaScript fonksiyonları ekleyin
3. Dokümante edin

---

## 📖 Dokümantasyon

### Detaylı Analiz Dokümanı
Projenin kapsamlı analiz ve planlama dökümanı için:
```
/Users/meltemakdilek/.claude/plans/piped-tumbling-starlight.md
```

Bu dokümanda bulunabilirler:
- İzin tipleri ve evrak matrisi
- Süreç akış diyagramları
- 14 ekranın detaylı açıklamaları
- Entegrasyon planları
- Risk analizi
- Test senaryoları

---

## 🎯 Sonraki Adımlar

### Kısa Vadeli (1-2 Hafta)
1. ✅ E4: Yönetici Dashboard'u tamamla
2. ✅ E6: İK Dashboard'u tamamla
3. ✅ E10: Müşteri İlişkileri Dashboard'u tamamla
4. ✅ Tüm 4 rol için null safety checks ekle
5. ⏳ Kalan ekranlar için temel şablonlar oluştur (E5, E7-E9, E11-E14)
6. ⏳ Tüm ekranlar arası navigasyonu tamamla
7. ⏳ Mobile responsive testlerini yap

### Orta Vadeli (2-4 Hafta)
1. Backend API tasarımı
2. Logo ve Hipotez entegrasyon planlaması
3. Gerçek veritabanı şeması
4. Email şablonları tasarımı
5. PDF form şablonları

### Uzun Vadeli (1-3 Ay)
1. Backend geliştirme (Node.js/Python)
2. Veritabanı kurulumu (PostgreSQL/MySQL)
3. Gerçek entegrasyonlar
4. Kullanıcı testleri ve geri bildirim
5. Production deploy

---

## 🤝 Katkıda Bulunma

Bu proje Tez Medikal firması için geliştirilmektedir. Değişiklik önerileri için:
1. Analiz dokümanını inceleyin
2. Mevcut tasarım sistemine uygun kalın
3. Mock data yapısını koruyun
4. Responsive tasarıma dikkat edin

---

## 📝 Notlar

- Bu bir **mockup/prototip** projesidir
- Gerçek API ve veritabanı entegrasyonu bulunmamaktadır
- Mock data `localStorage` ile simüle edilmektedir
- Production kullanımı için backend geliştirme gereklidir

---

## 📞 İletişim

**Proje Sahibi**: Tez Medikal A.Ş.
**Geliştirme**: Claude Code ile oluşturulmuştur
**Tarih**: 13 Ocak 2026

---

## 🎉 Demo İçin Hızlı Başlangıç

1. `index.html` dosyasını tarayıcıda açın
2. "Ahmet Yılmaz - Personel (Saha)" butonuna tıklayın
3. Dashboard'ı inceleyin
4. "Yeni İzin Talebi Oluştur" butonuna tıklayın
5. Formu doldurun ve "Gönder"e basın
6. Dashboard'a dönün ve talebinizi görün

**İyi çalışmalar!** 🚀
