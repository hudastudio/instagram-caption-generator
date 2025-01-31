import { title } from "process";

export const templates = [
    {
        id: 1,
        title: "Promosi Produk",
        content:
            "Tampilkan produk terbaru kami - [nama produk]! Hadir dengan [fitur unggulan] untuk memenuhi kebutuhan Anda. Dapatkan penawaran khusus hari ini. Kunjungi link di bio! ✨🛍️",
        topic: "Produk, Penawaran, Promo",
    },{
        id: 2,
        title: "Flash Sale Announcement",
        content: "⚡ FLASH SALE ALERT! ⚡\nHanya [durasi] jam!\n[nama produk] dengan diskon hingga [persentase]%\nKode promo: [kode]\nBerlaku hingga: [waktu berakhir]\n🏃‍♂️ Jangan sampai kehabisan!",
        topic: "Promosi, Flash Sale, Diskon"
    },
    {
        id: 3,
        title: "Service Promotion",
        content: "Need [jenis layanan]? We've got you covered! 💪\nLayanan profesional dengan:\n✓ [benefit 1]\n✓ [benefit 2]\n✓ [benefit 3]\nKonsultasi GRATIS untuk 10 pendaftar pertama! 📞",
        topic: "Layanan, Jasa, Konsultasi"
    },
    {
        id: 4,
        title: "Business Partnership",
        content: "🤝 PARTNERSHIP OPPORTUNITY 🤝\nBergabunglah menjadi mitra [nama brand]!\nKeuntungan:\n💰 [benefit finansial]\n📈 [benefit pengembangan]\n🎯 [benefit target market]\nDaftar sekarang di [link]",
        topic: "Kemitraan, Bisnis"
    },
    {
        id: 5,
        title: "Limited Edition Release",
        content: "🌟 LIMITED EDITION 🌟\n[nama produk] - Exclusive [tema/edisi]\nHanya tersedia [jumlah unit] unit!\nFeatures:\n✨ [fitur spesial 1]\n✨ [fitur spesial 2]\nOrder sekarang sebelum kehabisan!",
        topic: "Produk Terbatas, Eksklusif"
    },
    {
        id: 6,
        title: "Workshop Promotion",
        content: "📚 WORKSHOP ALERT! 📚\n[judul workshop]\nBersama [nama pembicara]\n📅 [tanggal]\n⏰ [waktu]\n📍 [lokasi]\nInvestasi: [harga]\nEarly bird discount [persentase]% sampai [tanggal]",
        topic: "Workshop, Event, Edukasi"
    },
    {
        id: 7,
        title: "Seasonal Sale",
        content: "🎊 [nama season] SALE! 🎊\nDiskon besar-besaran untuk semua [kategori produk]!\n🏷️ Diskon hingga [persentase]%\n📅 [tanggal mulai] - [tanggal selesai]\nGratis [bonus] untuk pembelian minimal [nominal]",
        topic: "Sale, Musiman, Diskon"
    },
    {
        id: 8,
        title: "Customer Testimonial",
        content: "❤️ CUSTOMER STORY ❤️\n\"[testimoni]\"\n- [nama customer], [profesi/lokasi]\nTerima kasih telah mempercayai [nama brand]!\nOrder sekarang dan rasakan manfaatnya sendiri! ✨",
        topic: "Testimonial, Review"
    },
    {
        id: 9,
        title: "Online Course Promotion",
        content: "🎓 ONLINE COURSE 🎓\n[judul kursus]\nPelajari:\n📱 [materi 1]\n💡 [materi 2]\n✨ [materi 3]\nBonus:\n🎁 [bonus 1]\n🎁 [bonus 2]\nDaftar sekarang dengan harga spesial!",
        topic: "Kursus, Edukasi"
    },
    {
        id: 10,
        title: "Product Bundle",
        content: "📦 BUNDLE DEAL! 📦\nGet [produk 1] + [produk 2] + [produk 3]\nNormal price: [harga normal]\nBundle price: [harga bundle]\nHemat [persentase]%!\nStok terbatas, order sekarang! 🏃‍♂️",
        topic: "Bundle, Paket, Promosi"
    },
    {
        id: 11,
        title: "Membership Program",
        content: "👑 EXCLUSIVE MEMBERSHIP 👑\nJoin [nama program] dan dapatkan:\n💎 [benefit 1]\n💎 [benefit 2]\n💎 [benefit 3]\nBiaya keanggotaan hanya [harga]/tahun\nDaftar sekarang!",
        topic: "Membership, Loyalty Program"
    },
    {
        id: 12,
        title: "Property Listing",
        content: "🏠 FOR SALE 🏠\n[tipe properti] di [lokasi]\n📐 [luas]\n🛏️ [jumlah kamar] Bedrooms\n✨ Features:\n• [fitur 1]\n• [fitur 2]\n💰 [harga]\nJadwalkan viewing sekarang!",
        topic: "Properti, Real Estate"
    },
    {
        id: 13,
        title: "Food Delivery Promo",
        content: "🍽️ HUNGRY? ORDER NOW! 🍽️\n[nama resto/brand]\nPromo spesial:\n🎉 [promo 1]\n🎉 [promo 2]\nMinimum order: [nominal]\nGratis ongkir radius [jarak]km\nOrder via [platform]",
        topic: "Makanan, Delivery"
    },
    {
        id: 14,
        title: "Fitness Program",
        content: "💪 TRANSFORM YOUR BODY 💪\n[nama program] - [durasi] Program\nIncludes:\n🏋️‍♂️ [komponen 1]\n🥗 [komponen 2]\n📱 [komponen 3]\nStart your journey for only [harga]!",
        topic: "Fitness, Kesehatan"
    },
    {
        id: 15,
        title: "Travel Package",
        content: "✈️ TRAVEL PACKAGE ✈️\n[destinasi] - [durasi] Days\n📍 Highlights:\n• [tempat 1]\n• [tempat 2]\n• [tempat 3]\n💰 [harga]/pax\n🎁 Free [bonus]\nBook sebelum [tanggal]!",
        topic: "Travel, Wisata"
    },
    {
        id: 16,
        title: "Beauty Service",
        content: "✨ BEAUTY TREATMENT ✨\n[nama treatment]\nBenefits:\n💫 [manfaat 1]\n💫 [manfaat 2]\nSpecial Price: [harga]\nBooking slot: [kontak]\nPromo valid until [tanggal]",
        topic: "Kecantikan, Perawatan"
    },
    {
        id: 17,
        title: "Tech Product",
        content: "🔥 NEW TECH ALERT 🔥\n[nama produk] - [tagline]\nSpecs:\n⚡ [spesifikasi 1]\n⚡ [spesifikasi 2]\n⚡ [spesifikasi 3]\nPre-order price: [harga]\nBonus: [aksesori]",
        topic: "Teknologi, Gadget"
    },
    {
        id: 18,
        title: "Business Consulting",
        content: "📈 SCALE YOUR BUSINESS 📈\n[nama layanan] Consulting\nSolusi untuk:\n🎯 [masalah 1]\n🎯 [masalah 2]\n🎯 [masalah 3]\nJadwalkan konsultasi GRATIS sekarang!",
        topic: "Konsultasi, Bisnis"
    },
    {
        id: 19,
        title: "Fashion Collection",
        content: "👗 NEW COLLECTION 👗\n[nama koleksi] - [tema]\nHighlights:\n✨ [item 1]\n✨ [item 2]\n✨ [item 3]\nAvailable sizes: [ukuran]\nOrder via [platform]",
        topic: "Fashion, Pakaian"
    },
    {
        id: 20,
        title: "Educational Program",
        content: "📚 LEARNING PROGRAM 📚\n[nama program]\nPerfect for [target audience]\nCurriculum:\n📖 [materi 1]\n📖 [materi 2]\n📖 [materi 3]\nInvestasi: [harga]",
        topic: "Pendidikan, Kursus"
    },
    {
        id: 21,
        title: "Home Service",
        content: "🏠 HOME SERVICE 🏠\n[jenis layanan]\nLayanan meliputi:\n✅ [layanan 1]\n✅ [layanan 2]\n✅ [layanan 3]\nBooking slot: [kontak]\nArea layanan: [wilayah]",
        topic: "Jasa, Layanan Rumah"
    },
    {
        id: 22,
        title: "Digital Product",
        content: "💻 DIGITAL PRODUCT 💻\n[nama produk]\nFeatures:\n🚀 [fitur 1]\n🚀 [fitur 2]\n🚀 [fitur 3]\nLifetime access!\nLaunch price: [harga]",
        topic: "Produk Digital"
    },
    {
        id: 23,
        title: "Automotive Service",
        content: "🚗 AUTO SERVICE 🚗\n[jenis servis]\nPackage includes:\n🔧 [layanan 1]\n🔧 [layanan 2]\n🔧 [layanan 3]\nEstimated time: [durasi]\nBooking: [kontak]",
        topic: "Otomotif, Servis"
    },
    {
        id: 24,
        title: "Wedding Package",
        content: "💍 WEDDING PACKAGE 💍\n[nama paket]\nIncludes:\n👰 [layanan 1]\n📸 [layanan 2]\n🎉 [layanan 3]\nPackage price: [harga]\nBook sebelum [tanggal]!",
        topic: "Pernikahan, Event"
    },
    {
        id: 25,
        title: "Restaurant Promo",
        content: "🍽️ RESTAURANT PROMO 🍽️\n[nama resto]\nSpecial menu:\n🍴 [menu 1] - [harga 1]\n🍴 [menu 2] - [harga 2]\nValid hours: [waktu]\nReservasi: [kontak]",
        topic: "Restoran, Kuliner"
    },
    {
        id: 26,
        title: "Photography Service",
        content: "📸 PHOTO SESSION 📸\n[jenis foto]\nPackage includes:\n📱 [item 1]\n📱 [item 2]\n📱 [item 3]\nDuration: [durasi]\nPrice: [harga]",
        topic: "Fotografi, Jasa"
    },
    {
        id: 27,
        title: "Investment Product",
        content: "💰 INVESTMENT OPPORTUNITY 💰\n[nama produk]\nBenefits:\n📈 [benefit 1]\n📈 [benefit 2]\n📈 [benefit 3]\nMin. investment: [nominal]\nReturn: [persentase]%",
        topic: "Investasi, Keuangan"
    },
    {
        id: 28,
        title: "Furniture Sale",
        content: "🛋️ FURNITURE SALE 🛋️\n[nama produk]\nSpesifikasi:\n📏 [ukuran]\n🎨 [warna]\n✨ [material]\nNormal price: [harga normal]\nSale price: [harga diskon]",
        topic: "Furnitur, Interior"
    },
    {
        id: 29,
        title: "Pet Service",
        content: "🐾 PET CARE 🐾\n[jenis layanan]\nServices:\n🐱 [layanan 1]\n🐱 [layanan 2]\n🐱 [layanan 3]\nOperating hours: [jam]\nBooking: [kontak]",
        topic: "Hewan Peliharaan"
    },
    {
        id: 30,
        title: "Insurance Product",
        content: "🛡️ PROTECTION PLAN 🛡️\n[nama produk]\nCoverage:\n✅ [perlindungan 1]\n✅ [perlindungan 2]\n✅ [perlindungan 3]\nPremium: [harga]/bulan",
        topic: "Asuransi, Keuangan"
    },
    {
        id: 31,
        title: "Job Vacancy",
        content: "💼 WE'RE HIRING! 💼\nPosition: [posisi]\nRequirements:\n📋 [syarat 1]\n📋 [syarat 2]\n📋 [syarat 3]\nBenefit:\n✨ [benefit 1]\n✨ [benefit 2]",
        topic: "Lowongan, Karir"
    },
    {
        id: 32,
        title: "Gym Membership",
        content: "💪 GYM MEMBERSHIP 💪\n[nama gym]\nFacilities:\n🏋️‍♂️ [fasilitas 1]\n🏋️‍♂️ [fasilitas 2]\n🏋️‍♂️ [fasilitas 3]\nMembership fee: [harga]/bulan",
        topic: "Fitness, Olahraga"
    },
    {
        id: 33,
        title: "Art Workshop",
        content: "🎨 ART WORKSHOP 🎨\n[nama workshop]\nLearn:\n✏️ [materi 1]\n✏️ [materi 2]\n✏️ [materi 3]\nAll materials included!\nPrice: [harga]",
        topic: "Seni, Workshop"
    },
    {
        id: 34,
        title: "Language Course",
        content: "🗣️ LANGUAGE COURSE 🗣️\n[bahasa] for [level]\nProgram includes:\n📚 [materi 1]\n📚 [materi 2]\n📚 [materi 3]\nDuration: [durasi]\nFee: [harga]",
        topic: "Bahasa, Pendidikan"
    },
    {
        id: 35,
        title: "Car Sale",
        content: "🚗 CAR FOR SALE 🚗\n[merk & model]\nSpecs:\n⚡ [spesifikasi 1]\n⚡ [spesifikasi 2]\n⚡ [spesifikasi 3]\nYear: [tahun]\nPrice: [harga]",
        topic: "Otomotif, Jual Beli"
    },
    {
        id: 36,
        title: "Catering Service",
        content: "🍽️ CATERING SERVICE 🍽️\n[nama layanan]\nMenu includes:\n🍱 [menu 1]\n🍱 [menu 2]\n🍱 [menu 3]\nMin. order: [jumlah porsi]\nPrice/pax: [harga]",
        topic: "Katering, Makanan"
    },
    {
        id: 37,
        title: "Mobile App",
        content: "📱 NEW APP RELEASE 📱\n[nama aplikasi] - [tagline]\nFeatures:\n✨ [fitur 1]\n✨ [fitur 2]\n✨ [fitur 3]\nDownload now on [platform]!",
        topic: "Aplikasi, Teknologi"
    },
    {
        id: 38,
        title: "Interior Design",
        content: "🏠 INTERIOR DESIGN 🏠\n[jenis layanan]\nServices:\n🎨 [layanan 1]\n🎨 [layanan 2]\n🎨 [layanan 3]\nConsultation fee: [harga]\nArea: [wilayah]",
        topic: "Interior, Desain"
    },
    {
        id: 39,
        title: "Music Class",
        content: "🎵 MUSIC CLASS 🎵\n[alat musik/vokal]\nLearn:\n🎼 [materi 1]\n🎼 [materi 2]\n🎼 [materi 3]\nClass size: [jumlah]\nFee: [harga]/bulan",
        topic: "Musik, Pendidikan"
    },
    {
        id: 40,
        title: "Office Space",
        content: "🏢 OFFICE SPACE 🏢\n[lokasi]\nFeatures:\n✨ [fasilitas 1]\n✨ [fasilitas 2]\n✨ [fasilitas 3]\nSize: [luas]\nRent: [harga]/bulan",
        topic: "Properti, Bisnis"
    },
    {
        id: 41,
        title: "Dental Service",
        content: "🦷 DENTAL CARE 🦷\n[jenis perawatan]\nIncludes:\n✨ [prosedur 1]\n✨ [prosedur 2]\n✨ [prosedur 3]\nSpecial price: [harga]\nBooking: [kontak]",
        topic: "Kesehatan, Gigi"
    },
    {
        id: 42,
        title: "Website Package",
        content: "🌐 WEBSITE PACKAGE 🌐\n[jenis website]\nFeatures:\n💻 [fitur 1]\n💻 [fitur 2]\n💻 [fitur 3]\nDevelopment time: [durasi]\nPrice: [harga]",
        topic: "Website, Digital"
    },
    {
        id: 43,
        title: "Rental Service",
        content: "📦 RENTAL SERVICE 📦\n[jenis barang]\nSpecs:\n✨ [spesifikasi 1]\n✨ [spesifikasi 2]\n✨ [spesifikasi 3]\nRental fee: [harga]/hari\nDeposit: [nominal]",
        topic: "Rental, Jasa"
    },
    {
        id: 44,
        title: "Scholarship Program",
        content: "🎓 SCHOLARSHIP 🎓\n[nama program]\nBenefits:\n📚 [benefit 1]\n📚 [benefit 2]\n📚 [benefit 3]\nDeadline: [tanggal]\nApply: [link]",
        topic: "Pendidikan, Beasiswa"
    },
    {
        id: 45,
        title: "Garden Service",
        content: "🌿 GARDEN SERVICE 🌿\n[jenis layanan]\nServices:\n🌱 [layanan 1]\n🌱 [layanan 2]\n🌱 [layanan 3]\nArea covered: [wilayah]\nStarting from: [harga]",
        topic: "Taman, Jasa"
    },
    {
        id: 46,
        title: "Event Space",
        content: "🎉 EVENT SPACE 🎉\n[nama venue]\nCapacity: [kapasitas] pax\nFeatures:\n✨ [fasilitas 1]\n✨ [fasilitas 2]\n✨ [fasilitas 3]\nRental fee: [harga]/hari",
        topic: "Venue, Event"
    },
    {
        id: 47,
        title: "Moving Service",
        content: "🚛 MOVING SERVICE 🚛\n[jenis layanan]\nServices:\n📦 [layanan 1]\n📦 [layanan 2]\n📦 [layanan 3]\nArea: [wilayah]\nStarting from: [harga]",
        topic: "Pindahan, Jasa"
    },
    {
        id: 48,
        title: "Security System",
        content: "🔒 SECURITY SYSTEM 🔒\n[nama produk]\nFeatures:\n🛡️ [fitur 1]\n🛡️ [fitur 2]\n🛡️ [fitur 3]\nInstallation: [harga]\nWarranty: [durasi]",
        topic: "Keamanan, Teknologi"
    },
    {
        id: 49,
        title: "Franchise Opportunity",
        content: "💼 FRANCHISE OPPORTUNITY 💼\n[nama brand]\nInvestment includes:\n💰 [item 1]\n💰 [item 2]\n💰 [item 3]\nROI: [persentase]%\nInvestment: [nominal]",
        topic: "Franchise, Bisnis"
    },
    {
        id: 50,
        title: "Wellness Program",
        content: "🧘‍♀️ WELLNESS PROGRAM 🧘‍♀️\n[nama program]\nIncludes:\n✨ [aktivitas 1]\n✨ [aktivitas 2]\n✨ [aktivitas 3]\nDuration: [durasi]\nInvestment: [harga]",
        topic: "Kesehatan, Wellness"
    },
    {
        id: 51,
        title: "Review Tempat",
        content:
            "Menemukan surga tersembunyi di [lokasi]! 🌟 Tempat ini menawarkan [keunikan/kelebihan]. Perfect untuk [aktivitas]. Must visit! 📍",
        topic: "Tempat, Review, Travel",
    },
    {
        id: 52,
        title: "Tips & Trick",
        content:
            "3 tips jitu untuk [topik]:\n1. [tip pertama]\n2. [tip kedua]\n3. [tip ketiga]\nSimpan post ini untuk referensi! 🎯✅",
        topic: "Tips, Trik, Tutorial",
    },
    {
        id: 53,
        title: "Promosi Rumah",
        content:
            "Rumah impian di kluster Perumahan dekat Pantai Ria, Kenjeran, Surabaya! 🌟 Tempat ini menawarkan [keunikan/kelebihan]. Dekat dengan akses Rumah Sakit, Suramadu, dan Mall seperti Galaxy Mall dan Tunjungan Plaza 📍 🏡✨ Dengan [fitur unggulan], rumah ini cocok untuk [target market]. Dapatkan penawaran spesial hari ini! 📞🔑",
        topic: "Rumah, Properti, Penawaran",
    },
    {
        id: 54,
        title: "Event Announcement",
        content:
            "🎉 Save the date! Bergabunglah dengan kami di [nama event] pada [tanggal]! Featuring [highlight event]. Early bird tickets tersedia sekarang! 🎫✨",
        topic: "Event, Acara, Entertainment",
    },
    {
        id: 55,
        title: "Food Review",
        content:
            "Mencicipi kelezatan [nama makanan] di [nama restoran]! 😋 [deskripsi rasa] dengan [keunikan/special point]. Must try menu dengan harga [rentang harga] 🍽️⭐",
        topic: "Makanan, Kuliner, Review",
    },
    {
        id: 56,
        title: "Fashion OOTD",
        content:
            "Today's look! 💫 Mix & match [item pakaian] dengan [item pakaian] untuk tampilan [style yang diinginkan]. Perfect untuk [occasion]! 👗👠",
        topic: "Fashion, OOTD, Style",
    },
    {
        id: 57,
        title: "Inspirational Quote",
        content:
            "“The only way to do great work is to love what you do.” - Steve Jobs 💡✨",
        topic: "Motivasi, Quote, Inspirasi",
    },
    {
        id: 58,
        title: "Health & Wellness",
        content:
            "Jaga kesehatanmu dengan [tips kesehatan]. Mulai dengan [aktivitas sehat] dan [makanan sehat]. Stay healthy, stay happy! 🥗🏋️‍♀️",
        topic: "Kesehatan, Wellness, Tips",
    },
    {
        id: 59,
        title: "Travel Bucket List",
        content:
            "Dreaming of [destinasi wisata]? 🌍✈️ Tandai temanmu yang ingin kamu ajak ke destinasi ini! #bucketlist",
        topic: "Travel, Destinasi, Impian",
    },
    {
        id: 60,
        title: "Beauty Tips",
        content:
            "5 tips kecantikan untuk kulit sehat:\n1. [tip pertama]\n2. [tip kedua]\n3. [tip ketiga]\n4. [tip keempat]\n5. [tip kelima]\nJangan lupa untuk selalu merawat kulitmu! 💄🌸",
        topic: "Kecantikan, Tips, Kulit",
    },
];
