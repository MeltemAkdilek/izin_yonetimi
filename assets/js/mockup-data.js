/*
 * Tez Medikal İzin Yönetim Sistemi
 * Mock Data - Gerçek Test Verileri
 * Version: 1.0
 */

// ===== İZİN TİPLERİ =====
const izinTipleri = [
  {
    id: 1,
    ad: "Evlilik İzni",
    gerekliEvrak: "Evlilik cüzdanının ilk 3 sayfasının fotokopisi",
    ikOnayiGerekli: true,
    sureSiniri: 3
  },
  {
    id: 2,
    ad: "Doğum İzni",
    gerekliEvrak: "Hamilelik Durum Bildirim Formu / Doktor Raporu / Doğum Belgesi",
    ikOnayiGerekli: true,
    sureSiniri: null
  },
  {
    id: 3,
    ad: "Süt İzni",
    gerekliEvrak: "Süt İzni dilekçe formu",
    ikOnayiGerekli: true,
    sureSiniri: null
  },
  {
    id: 4,
    ad: "Ölüm İzni",
    gerekliEvrak: "Dilekçe Formu (Yakınlık Derecesi seçimi)",
    ikOnayiGerekli: true,
    sureSiniri: 3,
    yakinlikDerecesi: true
  },
  {
    id: 5,
    ad: "Babalık İzni",
    gerekliEvrak: "Doğum Belgesi",
    ikOnayiGerekli: true,
    sureSiniri: 5
  },
  {
    id: 6,
    ad: "Hastalık İzni",
    gerekliEvrak: "İstirahat Raporu",
    ikOnayiGerekli: true,
    sureSiniri: null
  },
  {
    id: 7,
    ad: "Evlat Edinme İzni",
    gerekliEvrak: "Fiilen Teslim Formu / Tutanağı",
    ikOnayiGerekli: true,
    sureSiniri: null
  },
  {
    id: 8,
    ad: "Eğitim İzni",
    gerekliEvrak: "Eğitim Başvuru/Katılım Belgesi",
    ikOnayiGerekli: true,
    sureSiniri: null
  },
  {
    id: 9,
    ad: "Diğer Ücretli İzin",
    gerekliEvrak: null,
    ikOnayiGerekli: false,
    sureSiniri: null
  },
  {
    id: 10,
    ad: "Diğer Ücretsiz İzin",
    gerekliEvrak: null,
    ikOnayiGerekli: false,
    sureSiniri: null
  }
];

// ===== PERSONEL VERİLERİ =====
const personeller = [
  {
    id: 1,
    adSoyad: "Ahmet Yılmaz",
    tcNo: "12345678901",
    email: "ahmet.yilmaz@tezmedikal.com",
    unvan: "İş Güvenliği Uzmanı",
    departman: "OSGB",
    isYeri: "Saha",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2021-03-15",
    hakEdilenIzin: 20,
    kullanilanIzin: 8,
    kalanIzin: 12,
    izinHakEdisTarihi: "2024-03-15",
    yoneticiId: 4,
    rol: "personel"
  },
  {
    id: 2,
    adSoyad: "Ayşe Demir",
    tcNo: "98765432109",
    email: "ayse.demir@tezmedikal.com",
    unvan: "İnsan Kaynakları Uzmanı",
    departman: "İK",
    isYeri: "Genel Merkez",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2019-07-01",
    hakEdilenIzin: 26,
    kullanilanIzin: 15,
    kalanIzin: 11,
    izinHakEdisTarihi: "2023-07-01",
    yoneticiId: 5,
    rol: "ik"
  },
  {
    id: 3,
    adSoyad: "Mehmet Kara",
    tcNo: "11223344556",
    email: "mehmet.kara@tezmedikal.com",
    unvan: "İş Güvenliği Uzmanı",
    departman: "OSGB",
    isYeri: "Saha",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2020-09-10",
    hakEdilenIzin: 22,
    kullanilanIzin: 12,
    kalanIzin: 10,
    izinHakEdisTarihi: "2023-09-10",
    yoneticiId: 4,
    rol: "personel"
  },
  {
    id: 4,
    adSoyad: "Fatma Şahin",
    tcNo: "55667788990",
    email: "fatma.sahin@tezmedikal.com",
    unvan: "OSGB Mesul Müdür",
    departman: "OSGB",
    isYeri: "Genel Merkez",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2018-01-15",
    hakEdilenIzin: 28,
    kullanilanIzin: 10,
    kalanIzin: 18,
    izinHakEdisTarihi: "2023-01-15",
    yoneticiId: null,
    rol: "yonetici"
  },
  {
    id: 5,
    adSoyad: "Ali Yıldırım",
    tcNo: "66778899001",
    email: "ali.yildirim@tezmedikal.com",
    unvan: "İK Müdürü",
    departman: "İK",
    isYeri: "Genel Merkez",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2017-05-20",
    hakEdilenIzin: 28,
    kullanilanIzin: 14,
    kalanIzin: 14,
    izinHakEdisTarihi: "2023-05-20",
    yoneticiId: null,
    rol: "yonetici"
  },
  {
    id: 6,
    adSoyad: "Zeynep Arslan",
    tcNo: "77889900112",
    email: "zeynep.arslan@tezmedikal.com",
    unvan: "Müşteri İlişkileri Uzmanı",
    departman: "Müşteri İlişkileri",
    isYeri: "Genel Merkez",
    kurum: "Tez Medikal A.Ş.",
    isBasiTarihi: "2020-03-01",
    hakEdilenIzin: 22,
    kullanilanIzin: 6,
    kalanIzin: 16,
    izinHakEdisTarihi: "2023-03-01",
    yoneticiId: null,
    rol: "musteri_iliskileri"
  }
];

// ===== İZİN TALEPLERİ =====
const izinTalepleri = [
  {
    id: 101,
    personelId: 1,
    izinTipiId: 6,
    izinTipi: "Hastalık İzni",
    baslangicTarihi: "2026-01-20",
    bitisTarihi: "2026-01-22",
    isBaslamaTarihi: "2026-01-23",
    sure: 3,
    durum: "Yönetici Onayı Bekliyor",
    talepTarihi: "2026-01-13",
    evrakYuklendi: true,
    evrakDosya: "istirahat_raporu_202601.pdf",
    aciklama: "Grip nedeniyle istirahat raporu mevcut",
    yoneticiOnayTarihi: null,
    yoneticiAciklama: null,
    ikOnayTarihi: null,
    ikAciklama: null
  },
  {
    id: 102,
    personelId: 3,
    izinTipiId: 1,
    izinTipi: "Evlilik İzni",
    baslangicTarihi: "2026-02-10",
    bitisTarihi: "2026-02-12",
    isBaslamaTarihi: "2026-02-13",
    sure: 3,
    durum: "İK Onayı Bekliyor",
    talepTarihi: "2026-01-10",
    evrakYuklendi: true,
    evrakDosya: "evlilik_cuzdani.pdf",
    aciklama: "Evlilik töreni için izin talebi",
    yoneticiOnayTarihi: "2026-01-11",
    yoneticiAciklama: "Onaylandı",
    ikOnayTarihi: null,
    ikAciklama: null
  },
  {
    id: 103,
    personelId: 2,
    izinTipiId: 9,
    izinTipi: "Diğer Ücretli İzin",
    baslangicTarihi: "2026-01-25",
    bitisTarihi: "2026-01-27",
    isBaslamaTarihi: "2026-01-28",
    sure: 3,
    durum: "Onaylandı",
    talepTarihi: "2026-01-08",
    evrakYuklendi: false,
    evrakDosya: null,
    aciklama: "Kişisel işlerim için izin talebi",
    yoneticiOnayTarihi: "2026-01-09",
    yoneticiAciklama: "Onaylandı",
    ikOnayTarihi: null,
    ikAciklama: null
  },
  {
    id: 104,
    personelId: 1,
    izinTipiId: 9,
    izinTipi: "Diğer Ücretli İzin",
    baslangicTarihi: "2025-12-20",
    bitisTarihi: "2025-12-24",
    isBaslamaTarihi: "2025-12-25",
    sure: 5,
    durum: "Tamamlandı",
    talepTarihi: "2025-12-01",
    evrakYuklendi: false,
    evrakDosya: null,
    aciklama: "Yıl sonu izni",
    yoneticiOnayTarihi: "2025-12-02",
    yoneticiAciklama: "Onaylandı",
    ikOnayTarihi: null,
    ikAciklama: null,
    dijitalOnayTarihi: "2025-12-25",
    fizikiEvrakTeslimTarihi: "2025-12-28"
  }
];

// ===== SAHA ATAMA VERİLERİ (Hipotez Entegrasyonu) =====
const sahaAtamalari = [
  {
    id: 1,
    personelId: 1,
    firma: "ABC İnşaat Ltd. Şti.",
    proje: "Ankara Konut Projesi",
    tarih: "2026-01-20",
    baslangicSaat: "08:00",
    bitisSaat: "17:00",
    onayDurumu: "Onaylı"
  },
  {
    id: 2,
    personelId: 1,
    firma: "XYZ Sanayi A.Ş.",
    proje: "İstanbul Fabrika İSG Denetimi",
    tarih: "2026-01-21",
    baslangicSaat: "09:00",
    bitisSaat: "18:00",
    onayDurumu: "Onaylı"
  },
  {
    id: 3,
    personelId: 3,
    firma: "DEF Ticaret Ltd.",
    proje: "İzmir Depo İSG Denetimi",
    tarih: "2026-02-10",
    baslangicSaat: "08:30",
    bitisSaat: "17:30",
    onayDurumu: "Onaylı"
  }
];

// ===== MÜŞTERİ BİLDİRİMLERİ =====
const musteriBildirimleri = [
  {
    id: 1,
    izinTalebiId: 101,
    personelId: 1,
    firma: "ABC İnşaat Ltd. Şti.",
    bildirimTarihi: "2026-01-13",
    bildirimGonderildi: false,
    musteriYaniti: null,
    musteriYanitTarihi: null,
    otomatikKararTarihi: "2026-01-18"
  }
];

// ===== BİLDİRİMLER =====
const bildirimler = [
  {
    id: 1,
    aliciId: 4,
    tip: "izin_talebi",
    baslik: "Yeni İzin Talebi",
    mesaj: "Ahmet Yılmaz - Hastalık İzni talebi onayınızı bekliyor",
    okundu: false,
    tarih: "2026-01-13T10:30:00",
    link: "#izin-talep-101"
  },
  {
    id: 2,
    aliciId: 1,
    tip: "izin_onaylandi",
    baslik: "İzin Talebiniz Onaylandı",
    mesaj: "Diğer Ücretli İzin talebiniz onaylandı. Form oluşturabilirsiniz.",
    okundu: true,
    tarih: "2026-01-09T14:20:00",
    link: "#form-olustur-103"
  },
  {
    id: 3,
    aliciId: 2,
    tip: "ik_belge_kontrol",
    baslik: "Belge Kontrolü Bekleniyor",
    mesaj: "3 adet izin talebi belge kontrolünüzü bekliyor",
    okundu: false,
    tarih: "2026-01-13T09:15:00",
    link: "#ik-belge-kontrol"
  }
];

// ===== DEPARTMANLAR =====
const departmanlar = [
  { id: 1, ad: "OSGB", aciklama: "İş Sağlığı ve Güvenliği Birimi" },
  { id: 2, ad: "İK", aciklama: "İnsan Kaynakları" },
  { id: 3, ad: "Müşteri İlişkileri", aciklama: "Müşteri İlişkileri Yönetimi" },
  { id: 4, ad: "Finans", aciklama: "Finans ve Muhasebe" },
  { id: 5, ad: "IT", aciklama: "Bilgi Teknolojileri" }
];

// ===== YARDIMCI FONKSİYONLAR =====

// Personel ID'sine göre personel bilgisi getir
function getPersonelById(id) {
  return personeller.find(p => p.id === id);
}

// Personelin aktif izin taleplerini getir
function getPersonelIzinTalepleri(personelId) {
  return izinTalepleri.filter(t => t.personelId === personelId);
}

// Yöneticiye atanmış bekleyen talepleri getir
function getYoneticiOnayBekleyenTalepler(yoneticiId) {
  const yoneticiPersonelleri = personeller.filter(p => p.yoneticiId === yoneticiId);
  const personelIds = yoneticiPersonelleri.map(p => p.id);

  return izinTalepleri.filter(t =>
    personelIds.includes(t.personelId) &&
    t.durum === "Yönetici Onayı Bekliyor"
  ).map(t => {
    const personel = getPersonelById(t.personelId);
    return {
      ...t,
      personelAdi: personel.adSoyad,
      personelDepartman: personel.departman
    };
  });
}

// İK onayı bekleyen talepleri getir
function getIkOnayBekleyenTalepler() {
  return izinTalepleri.filter(t => t.durum === "İK Onayı Bekliyor").map(t => {
    const personel = getPersonelById(t.personelId);
    return {
      ...t,
      personelAdi: personel.adSoyad,
      personelDepartman: personel.departman,
      personelIsYeri: personel.isYeri
    };
  });
}

// Personelin saha atamalarını getir
function getPersonelSahaAtamalari(personelId, tarih) {
  return sahaAtamalari.filter(a => a.personelId === personelId && a.tarih === tarih);
}

// Okunmamış bildirimleri getir
function getOkunmamisBildirimler(aliciId) {
  return bildirimler.filter(b => b.aliciId === aliciId && !b.okundu);
}

// İzin tipi bilgisini ID'ye göre getir
function getIzinTipiById(id) {
  return izinTipleri.find(i => i.id === id);
}

// Tarihi formatla (DD/MM/YYYY)
function formatTarih(tarih) {
  const d = new Date(tarih);
  const gun = String(d.getDate()).padStart(2, '0');
  const ay = String(d.getMonth() + 1).padStart(2, '0');
  const yil = d.getFullYear();
  return `${gun}/${ay}/${yil}`;
}

// Tarih aralığı hesapla
function hesaplaTarihAraligi(baslangic, bitis) {
  const b = new Date(baslangic);
  const s = new Date(bitis);
  const fark = Math.ceil((s - b) / (1000 * 60 * 60 * 24)) + 1;
  return fark;
}

// Durum badge rengi belirle
function getDurumBadgeClass(durum) {
  const durumMap = {
    "Yönetici Onayı Bekliyor": "badge-warning",
    "İK Onayı Bekliyor": "badge-info",
    "Onaylandı": "badge-success",
    "Reddedildi": "badge-error",
    "Tamamlandı": "badge-secondary",
    "Fiziki Evrak Bekleniyor": "badge-warning"
  };
  return durumMap[durum] || "badge-secondary";
}

// Export (Tarayıcı ortamında window'a ekle)
if (typeof window !== 'undefined') {
  window.MockData = {
    izinTipleri,
    personeller,
    izinTalepleri,
    sahaAtamalari,
    musteriBildirimleri,
    bildirimler,
    departmanlar,
    getPersonelById,
    getPersonelIzinTalepleri,
    getYoneticiOnayBekleyenTalepler,
    getIkOnayBekleyenTalepler,
    getPersonelSahaAtamalari,
    getOkunmamisBildirimler,
    getIzinTipiById,
    formatTarih,
    hesaplaTarihAraligi,
    getDurumBadgeClass
  };
}
