/*
stores.js 
=========

Started: 03-02-2026
Updated: 26-02-2026
---

Data from https://n1citymall.co.za/
- LOUWTJIE ROTHMAN STREET, GOODWOOD, CAPE TOWN, 7463
- https://maps.app.goo.gl/WuWHKGCi14aMY7vA9
---
*/

const stores = {
  "banks": [
    { name: "ABSA", shop_no: "136/137", entrance: "2", phone: "021 596 9700", website: "https://www.absa.co.za/personal/", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
    { name: "AFRICAN BANK", shop_no: "117B", entrance: "1", phone: "021 596 1660", website: "https://www.africanbank.co.za/en/home/", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
    { name: "CAPITEC", shop_no: "40A/40B/41/42", entrance: "5", phone: "021 595 4589", website: "https://www.capitecbank.co.za/", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
    { name: "FNB", shop_no: "134/135", entrance: "2", phone: "087 575 9404", website: "https://www.fnb.co.za/", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
    { name: "NEDBANK", shop_no: "46/46A", entrance: "2", phone: "021 590 6000", website: "https://personal.nedbank.co.za/home.html", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
    { name: "STANDARD BANK", shop_no: "47/48/125/126", entrance: "2", phone: "0860 123 000", website: "https://www.standardbank.co.za/southafrica/personal", hours: { open: 9, close: 17, satClose: 13, sunOpen: false } },
  ],

  "books and stationery": [
    { name: "BARGAIN BOOKS", shop_no: "74/75", entrance: "1", phone: "021 595 4590", website: "https://www.bargainbooks.co.za", hours: { open: 9, close: 18 } },
    { name: "CUM BOOKS", shop_no: "114", entrance: "1", phone: "021 595 1699", website: "https://www.cumbooks.co.za", hours: { open: 9, close: 18 } },
    { name: "PNA", shop_no: "3", entrance: "1", phone: "021 595 0103", website: "https://pna.co.za", hours: { open: 9, close: 18 } },
    { name: "THE CRAZY STORE", shop_no: "101", entrance: "1", phone: "021 595 4310", website: "https://www.crazystore.co.za", hours: { open: 9, close: 18 } },
  ],

  "cellular and electronics": [
    { name: "CELL C", shop_no: "9", entrance: "1", phone: "084 770 0076", website: "https://www.cellc.co.za", hours: { open: 9, close: 18 } },
    { name: "CELL TECH", shop_no: "30", entrance: "3", phone: "021 595 3005", website: "https://n1citymall.co.za/stores/cell-tech/", hours: { open: 9, close: 18 } },
    { name: "CELL WORLD", shop_no: "87", entrance: "1", phone: "021 595 0013", website: "https://n1citymall.co.za/stores/cell-world/", hours: { open: 9, close: 18 } },
    { name: "CELLUCITY", shop_no: "104", entrance: "1", phone: "021 595 4737", website: "https://cellucity.co.za", hours: { open: 9, close: 18 } },
    { name: "HIFI CORP", shop_no: "31", entrance: "5", phone: "021 595 1311", website: "https://www.hificorp.co.za", hours: { open: 9, close: 18 } },
    { name: "INCREDIBLE CONNECTION", shop_no: "32", entrance: "5", phone: "021 595 1422", website: "https://www.incredible.co.za", hours: { open: 9, close: 18 } },
    { name: "MR PRICE CELLULAR", shop_no: "105", entrance: "1", phone: "021 595 4100", website: "https://www.mrprice.com/cellular", hours: { open: 9, close: 18 } },
    { name: "MTN", shop_no: "143", entrance: "3", phone: "083 869 0514", website: "https://www.mtn.co.za", hours: { open: 9, close: 18 } },
    { name: "PEP CELL", shop_no: "142 A", entrance: "3", phone: "021 595 1920", website: "https://www.pepstores.com/pep-cell", hours: { open: 9, close: 18 } },
    { name: "SOUNDTECH", shop_no: "67", entrance: "3", phone: "021 595 2404", website: "https://soundtech.co.za", hours: { open: 9, close: 18 } },
    { name: "TECHNO STOP", shop_no: "43", entrance: "5", phone: "078 614 7862", website: "https://n1citymall.co.za/stores/techno-stop/", hours: { open: 9, close: 18 } },
    { name: "TELKOM DIRECT (WALK IN SERVICE)", shop_no: "140", entrance: "3", phone: "021 595 0108", website: "https://www.telkom.co.za", hours: { open: 9, close: 18 } },
    { name: "TELKOM MOBILE", shop_no: "28/29", entrance: "3", phone: "021 595 0108", website: "https://www.telkom.co.za", hours: { open: 9, close: 18 } },
    { name: "THE REPAIR DESK", shop_no: "115/115A", entrance: "1", phone: "021 824 3317", website: "https://therepairdesk.co.za", hours: { open: 9, close: 18 } },
    { name: "TOP 20", shop_no: "U-4", entrance: "4", phone: "021 595 2108", website: "https://n1citymall.co.za/stores/top-20/", hours: { open: 9, close: 18 } },
    { name: "VODASHOP", shop_no: "96", entrance: "1", phone: "021 595 4443", website: "https://www.vodacom.co.za", hours: { open: 9, close: 18 } }
  ],

  "entertainment": [
    { name: "STER KINEKOR", shop_no: "N/A", entrance: "4", phone: "0861 668 437", website: "https://www.sterkinekor.com", hours: { open: 9, close: 22, friClose: 24, satClose: 24 } },
    { name: "WONDERLAND GAME CENTRE", shop_no: "U-33", entrance: "4", phone: "021 595 1811", website: "https://n1citymall.co.za/stores/wonderland-game-centre/", hours: { open: 9, close: 22 } },
  ],

  "fashion and footwear": [
    { name: "ACKERMANS", shop_no: "141", entrance: "3", phone: "021 595 4230", website: "https://www.ackermans.co.za/", hours: { open: 9, close: 18 } },
    { name: "ARCHIVE", shop_no: "71 & 72", entrance: "3", phone: "021 595 1406", website: "https://bash.com/archive", hours: { open: 9, close: 18 } },
    { name: "AYANA", shop_no: "54", entrance: "2", phone: "021 595 0045", website: "https://ayana.co.za/", hours: { open: 9, close: 18 } },
    { name: "BELLA FASHION", shop_no: "116", entrance: "1", phone: "021 595 3330", website: "", hours: { open: 9, close: 18 } },
    { name: "CHOICE CLOTHING", shop_no: "131/132", entrance: "2", phone: "021 595 3918", website: "https://www.choiceclothing.co.za/", hours: { open: 9, close: 18 } },
    { name: "CHRISTIAN TEE'S", shop_no: "58", entrance: "3", phone: "021 595 4420", website: "https://christiantees.co.za/", hours: { open: 9, close: 18 } },
    { name: "CONTEMPO", shop_no: "129/130", entrance: "2", phone: "021 595 3333", website: "https://contemposhop.co.za/", hours: { open: 9, close: 18 } },
    { name: "EDGARS", shop_no: "23/24", entrance: "3", phone: "021 595 1600", website: "https://www.edgars.co.za/", hours: { open: 9, close: 18 } },
    { name: "EXACT", shop_no: "14/15", entrance: "1", phone: "021 596 9350", website: "https://bash.com/exact", hours: { open: 9, close: 18 } },
    { name: "FARO", shop_no: "34/36", entrance: "5", phone: "021 595 0371", website: "https://www.faro.co/", hours: { open: 9, close: 18 } },
    { name: "FOOTGEAR", shop_no: "52/53", entrance: "5", phone: "021 595 0205", website: "https://www.footgear.co.za/", hours: { open: 9, close: 18 } },
    { name: "FOSCHINI", shop_no: "70", entrance: "3", phone: "021 596 9300", website: "https://bash.com/foschini", hours: { open: 9, close: 18 } },
    { name: "IDENTITY", shop_no: "149", entrance: "3", phone: "021 596 9420", website: "https://www.identity.co.za/", hours: { open: 9, close: 18 } },
    { name: "JACK & JOANS LINGERIE", shop_no: "124", entrance: "1", phone: "021 595 3584", website: "https://www.facebook.com/p/JackJoansLingerie-100063570311613/", hours: { open: 9, close: 18 } },
    { name: "JET STORES", shop_no: "133", entrance: "4", phone: "021 595 4235", website: "https://bash.com/jet", hours: { open: 9, close: 18 } },
    { name: "KINGSMEAD SHOES", shop_no: "150", entrance: "3", phone: "021 595 2414", website: "https://kingsmeadshoes.co.za/", hours: { open: 9, close: 18 } },
    { name: "LEGIT", shop_no: "19/20", entrance: "3", phone: "021 595 3804", website: "https://www.legit.co.za/", hours: { open: 9, close: 18 } },
    { name: "MARKHAM", shop_no: "154", entrance: "1", phone: "021 596 9360", website: "https://bash.com/markham", hours: { open: 9, close: 18 } },
    { name: "MILADYS", shop_no: "102/103", entrance: "1", phone: "021 595 4216", website: "https://www.miladys.com/", hours: { open: 9, close: 18 } },
    { name: "MR PRICE", shop_no: "11/12/13", entrance: "1", phone: "021 595 4100", website: "https://www.mrp.com/en_za/", hours: { open: 9, close: 18 } },
    { name: "MR PRICE KIDS", shop_no: "109/110", entrance: "1", phone: "021 595 4100", website: "https://www.mrp.com/kids", hours: { open: 9, close: 18 } },
    { name: "MR PRICE SPORT", shop_no: "155", entrance: "1", phone: "021 595 4118", website: "https://www.mrpsport.com/en_za/home", hours: { open: 9, close: 18 } },
    { name: "ONLY LOVE BRIDAL STORE", shop_no: "146", entrance: "3", phone: "082 355 4234", website: "https://www.facebook.com/p/Only-Love-Bride-Store-100076174234864/", hours: { open: 9, close: 18 } },
    { name: "PEP STORES", shop_no: "113", entrance: "1", phone: "021 595 1920", website: "https://www.pepstores.com/", hours: { open: 9, close: 18 } },
    { name: "PICK N PAY CLOTHING", shop_no: "148", entrance: "3", phone: "021 595 0300", website: "https://picknpayclothing.co.za/", hours: { open: 9, close: 18 } },
    { name: "QUEUE SHOES", shop_no: "25", entrance: "3", phone: "021 595 4440", website: "https://queueshoes.com/", hours: { open: 9, close: 18 } },
    { name: "REFINERY", shop_no: "95", entrance: "1", phone: "021 595 0109", website: "https://www.refinerystore.co.za/", hours: { open: 9, close: 18 } },
    { name: "RELAY JEANS", shop_no: "70", entrance: "3", phone: "021 596 9314", website: "https://bash.com/relay-jeans", hours: { open: 9, close: 18 } },
    { name: "SHOE CITY", shop_no: "39", entrance: "5", phone: "021 595 4500", website: "https://www.shoecity.co.za/", hours: { open: 9, close: 18 } },
    { name: "SNEAKER FACTORY", shop_no: "92", entrance: "1", phone: "021 595 0014", website: "https://bash.com/sneaker-factory", hours: { open: 9, close: 18 } },
    { name: "SPORTSCENE", shop_no: "117A/118/120", entrance: "1", phone: "021 596 9340", website: "https://bash.com/sportscene", hours: { open: 9, close: 18 } },
    { name: "STUDIO 88", shop_no: "33", entrance: "5", phone: "021 595 1553", website: "https://www.studio-88.co.za/", hours: { open: 9, close: 18 } },
    { name: "TEKKIE TOWN", shop_no: "112", entrance: "1", phone: "021 595 4016", website: "https://tekkietown.co.za/", hours: { open: 9, close: 18 } },
    { name: "THE FIX", shop_no: "21/22", entrance: "3", phone: "021 596 9410", website: "https://bash.com/the-fix", hours: { open: 9, close: 18 } },
    { name: "TOTALSPORTS", shop_no: "10", entrance: "1", phone: "021 596 9380", website: "https://bash.com/totalsports", hours: { open: 9, close: 18 } },
    { name: "TRADERS WAREHOUSE", shop_no: "139", entrance: "2", phone: "021 595 1503", website: "https://traderswarehouse.co.za/", hours: { open: 9, close: 18 } },
    { name: "TRUWORTHS", shop_no: "73", entrance: "1", phone: "021 595 1300", website: "https://www.truworths.co.za/", hours: { open: 9, close: 18 } }
  ],

  "grocery and department stores": [
    { name: "CHECKERS HYPER", shop_no: "N/A", entrance: "5", phone: "021 596 1720", website: "https://www.checkers.co.za/", hours: { open: 8, close: 20 } },
    { name: "CLICKS", shop_no: "6/7/8", entrance: "1", phone: "021 595 1122", website: "https://www.clicks.co.za/", hours: { open: 9, close: 18 } },
    { name: "PICK N PAY", shop_no: "1", entrance: "1", phone: "021 595 1515", website: "https://www.pnp.co.za/", hours: { open: 8, close: 20 } },
    { name: "PICK N PAY LIQUOR", shop_no: "2", entrance: "1", phone: "021 595 1515", website: "https://www.pnp.co.za/", hours: { open: 9, close: 18 } },
    { name: "WOOLWORTHS", shop_no: "17/18", entrance: "1", phone: "021 595 1250", website: "https://www.woolworths.co.za/", hours: { open: 8, close: 19 } }
  ],

  "home": [
    { name: "JET HOME", shop_no: "4/5", entrance: "1", phone: "021 595 4235", website: "https://bash.com/jet/home", hours: { open: 9, close: 18 } },
    { name: "MR PRICE HOME", shop_no: "156", entrance: "1", phone: "021 595 4106", website: "https://www.mrphome.com", hours: { open: 9, close: 18 } },
    { name: "PEP HOME", shop_no: "36 B", entrance: "5", phone: "021 595 1920", website: "https://www.pepstores.com/pages/home", hours: { open: 9, close: 18 } },
    { name: "SHEET STREET", shop_no: "93", entrance: "1", phone: "021 595 3113", website: "https://www.sheetstreet.com", hours: { open: 9, close: 18 } },
  ],

  "jewellery, accessories and beauty": [
    { name: "AMERICAN SWISS", shop_no: "16", entrance: "3", phone: "021 596 9330", website: "https://www.americanswiss.co.za", hours: { open: 9, close: 18 } },
    { name: "BLING", shop_no: "26", entrance: "2", phone: "021 595 4447", website: "https://n1citymall.co.za/stores/bling/", hours: { open: 9, close: 18 } },
    { name: "IN STYLE", shop_no: "130A", entrance: "2", phone: "021 595 3330", website: "https://n1citymall.co.za/stores/in-style/", hours: { open: 9, close: 18 } },
    { name: "LOVISA", shop_no: "152", entrance: "3", phone: "021 595 0306", website: "https://www.lovisa.co.za", hours: { open: 9, close: 18 } },
    { name: "O'BRIEN & D'ARCY JEWELLERS", shop_no: "50/51", entrance: "5", phone: "021 595 2405", website: "https://obrien-darcy.co.za", hours: { open: 9, close: 18 } },
    { name: "PAPILLON JEWELLERS", shop_no: "49", entrance: "2", phone: "021 595 4504", website: "https://papillonjewellers.co.za", hours: { open: 9, close: 18 } },
    { name: "PARTNERS HAIR", shop_no: "153", entrance: "3", phone: "021 595 4110", website: "https://partnershair.co.za", hours: { open: 9, close: 18 } },
    { name: "SIGNATURE COSMETICS", shop_no: "27", entrance: "3", phone: "021 595 4441", website: "https://www.signaturecosmetics.co.za", hours: { open: 9, close: 18 } },
    { name: "SPLASH HAIR STUDIO", shop_no: "94", entrance: "1", phone: "021 595 0221", website: "https://n1citymall.co.za/stores/splash-hair-studio/", hours: { open: 9, close: 18 } },
    { name: "STERNS", shop_no: "98", entrance: "1", phone: "021 596 9320", website: "https://www.sterns.co.za", hours: { open: 9, close: 18 } },
    { name: "THE LEATHER EXPERT", shop_no: "61", entrance: "3", phone: "021 595 0107", website: "https://n1citymall.co.za/stores/the-leather-expert/", hours: { open: 9, close: 18 } },
    { name: "THE PERFUME GARDEN", shop_no: "45B", entrance: "2", phone: "021 595 0207", website: "https://www.perfumegarden.co.za/", hours: { open: 9, close: 18 } },
  ],

  "restaurant, coffee and takeaway": [
    { name: "BENS BUBBLE TEA", shop_no: "69 A", entrance: "3", phone: "021 595 0201", website: "https://bensbubbletea.com", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "CALAMARI FISHERIES", shop_no: "U27", entrance: "4", phone: "021 595 0100", website: "https://n1citymall.co.za/stores/calamari-fisheries/", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "DEBONAIRS", shop_no: "U-26", entrance: "4", phone: "021 595 1301", website: "https://www.debonairspizza.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "DRY'D (NEXT TO CRAZY STORE)", shop_no: "100", entrance: "1", phone: "021 595 1801", website: "https://n1citymall.co.za/stores/dryd/", hours: { open: 9, close: 18 } },
    { name: "DRY'D (NEXT TO THE LOUNGE CAFE)", shop_no: "127", entrance: "2", phone: "021 595 1801", website: "https://n1citymall.co.za/stores/dryd/", hours: { open: 9, close: 18 } },
    { name: "FISHAWAYS", shop_no: "U-26", entrance: "4", phone: "021 595 1301", website: "https://www.fishaways.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "GATSBY WORLD", shop_no: "U-27", entrance: "4", phone: "021 595 0100", website: "https://n1citymall.co.za/stores/gatsby-world/", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "JOHN DORYS", shop_no: "U-3", entrance: "4", phone: "021 595 1914", website: "https://www.johndorys.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "KFC", shop_no: "U30/31", entrance: "4", phone: "021 595 1414", website: "https://www.kfc.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "KING PIE", shop_no: "83A", entrance: "1", phone: "021 595 1201", website: "https://www.kingpie.co.za", hours: { open: 9, close: 18 } },
    { name: "KING PIE (PICK N PAY)", shop_no: "106", entrance: "1", phone: "021 595 1201", website: "https://www.kingpie.co.za", hours: { open: 9, close: 18 } },
    { name: "MARCEL'S FROZEN YOGURT", shop_no: "151", entrance: "3", phone: "021 595 3014", website: "https://marcels.co.za", hours: { open: 9, close: 21 } },
    { name: "MILKY LANE", shop_no: "U-25", entrance: "4", phone: "021 595 1301", website: "https://milkylane.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "MUGG & BEAN", shop_no: "144", entrance: "3", phone: "021 595 3110", website: "https://muggandbean.co.za", hours: { open: 8, close: 21 } },
    { name: "OCEAN BASKET", shop_no: "U29", entrance: "4", phone: "021 595 3133", website: "https://www.oceanbasket.com", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "PANAROTTI'S", shop_no: "U-22", entrance: "4", phone: "021 595 1914", website: "https://www.panarottis.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "PEACOCK COFFEE & TEA", shop_no: "91", entrance: "3", phone: "021 595 1304", website: "https://peacockcoffee.co.za", hours: { open: 8, close: 18 } },
    { name: "ROCKSTAR COFFEE & BAKES", shop_no: "65", entrance: "3", phone: "021 595 1404", website: "https://n1citymall.co.za/stores/rockstar-coffee-bakes/", hours: { open: 8, close: 18 } },
    { name: "ROCOMAMAS", shop_no: "U-28", entrance: "4", phone: "021 595 1334", website: "https://www.rocomamas.com", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "SAUSAGE SALOON", shop_no: "142", entrance: "3", phone: "021 595 2415", website: "https://sausagesaloon.co.za", hours: { open: 9, close: 21 } },
    { name: "STEERS", shop_no: "U-26", entrance: "4", phone: "021 595 1301", website: "https://steers.co.za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "TEXAS SPUR", shop_no: "U1/U2", entrance: "4", phone: "021 595 1165", website: "https://www.spursteakranches.com/za", hours: { open: 9, close: 22, friClose: 22.5, satClose: 22.5, sunClose: 21 } },
    { name: "THE LOUNGE CAFE", shop_no: "128", entrance: "2", phone: "021 595 0202", website: "https://n1citymall.co.za/stores/the-lounge-cafe/", hours: { open: 9, close: 18 } },
    { name: "VIDA E CAFE", shop_no: "57", entrance: "3", phone: "021 595 4404", website: "https://vidaecafe.com", hours: { open: 7, close: 18 } },
    { name: "WIMPY", shop_no: "U-23/24", entrance: "4", phone: "021 595 1305", website: "https://wimpy.co.za", hours: { open: 8, close: 21 } },
    { name: "XPRESSO", shop_no: "U-28b", entrance: "4", phone: "021 595 3301", website: "https://xpresso.co.za", hours: { open: 8, close: 21 } }
  ],

  "service and speciality": [
    { name: "3@1 BUSINESS", shop_no: "147", entrance: "3", phone: "021 595 3976", website: "https://3at1.co.za", hours: { open: 9, close: 18 } },
    { name: "ASR ORNAMENTS", shop_no: "121/122", entrance: "1", phone: "021 595 0101", website: "https://n1citymall.co.za/stores/asr-ornaments/", hours: { open: 9, close: 18 } },
    { name: "AURA WATER", shop_no: "44", entrance: "2", phone: "021 595 1104", website: "https://n1citymall.co.za/stores/aura-water/", hours: { open: 9, close: 18 } },
    { name: "BLOOD DONATION CENTRE", shop_no: "38", entrance: "2", phone: "021 595 4910", website: "https://www.wcbs.org.za", hours: { open: 9, close: 17 } },
    { name: "CANNAFRICA", shop_no: "25A", entrance: "3", phone: "021 595 0110", website: "https://www.cannafricasa.co.za", hours: { open: 9, close: 18 } },
    { name: "COBBLER & CO", shop_no: "107", entrance: "1", phone: "021 595 1702", website: "https://n1citymall.co.za/stores/cobler-co/", hours: { open: 9, close: 18 } },
    { name: "DELIGHT SPICE", shop_no: "111", entrance: "1", phone: "021 595 3111", website: "https://n1citymall.co.za/stores/delight-spice/", hours: { open: 9, close: 18 } },
    { name: "FAIRBAIRN CAFE", shop_no: "126A", entrance: "2", phone: "021 595 0222", website: "https://n1citymall.co.za/stores/fairbairn-cafe/", hours: { open: 9, close: 18 } },
    { name: "HOMEMARK", shop_no: "68", entrance: "3", phone: "021 595 1314", website: "https://homemark.co.za", hours: { open: 9, close: 18 } },
    { name: "HOSSAIN TAILORS", shop_no: "99", entrance: "1", phone: "021 595 3302", website: "https://n1citymall.co.za/stores/hossain-tailors/", hours: { open: 9, close: 18 } },
    { name: "INFINITY CAR WASH", shop_no: "PARKING", entrance: "1", phone: "021 595 0205", website: "https://n1citymall.co.za/stores/infinity-car-wash/", hours: { open: 8, close: 17 } },
    { name: "INKY SHOP", shop_no: "123", entrance: "1", phone: "021 595 3131", website: "https://inkyshop.co.za", hours: { open: 9, close: 18 } },
    { name: "KING CAKE PARTY CITY", shop_no: "55/56", entrance: "1", phone: "021 595 1310", website: "https://www.partycity.co.za", hours: { open: 9, close: 18 } },
    { name: "NEOVISION OPTOMETRISTS", shop_no: "97", entrance: "1", phone: "021 595 4455", website: "https://www.neovision.co.za", hours: { open: 9, close: 18 } },
    { name: "OLD MUTUAL", shop_no: "N/A", entrance: "3", phone: "021 595 4914", website: "https://www.oldmutual.co.za", hours: { open: 9, close: 17, sunOpen: false } },
    { name: "PET SHOP SCIENCE", shop_no: "62 & 63", entrance: "3", phone: "021 595 1515", website: "https://www.petshopscience.co.za", hours: { open: 9, close: 19 } },
    { name: "SALON JEAN PAUL", shop_no: "76", entrance: "1", phone: "021 595 3303", website: "https://www.salonjeanpaul.co.za", hours: { open: 9, close: 18 } },
    { name: "SCHOOL & LEISURE", shop_no: "84A-86", entrance: "1", phone: "021 595 2101", website: "https://www.schoolandleisure.co.za", hours: { open: 9, close: 18 } },
    { name: "SLEEPMASTERS", shop_no: "37", entrance: "5", phone: "021 595 0005", website: "https://www.sleepmasters.co.za", hours: { open: 9, close: 18 } },
    { name: "SPEC SAVERS", shop_no: "59/60", entrance: "3", phone: "021 595 4455", website: "https://www.specsavers.co.za", hours: { open: 9, close: 18 } },
    { name: "SPLASH EXPRESS", shop_no: "64", entrance: "3", phone: "021 595 0221", website: "https://n1citymall.co.za/stores/splash-express/", hours: { open: 9, close: 18 } },
    { name: "SPLASH NAIL & BEAUTY", shop_no: "108", entrance: "1", phone: "021 595 0221", website: "https://n1citymall.co.za/stores/splash-nail-beauty/", hours: { open: 9, close: 18 } },
    { name: "THE COCK 'N BULL", shop_no: "83B", entrance: "1", phone: "021 595 1313", website: "https://n1citymall.co.za/stores/the-cock-n-bull/", hours: { open: 9, close: 18 } },
    { name: "TORGA OPTICAL", shop_no: "88/89", entrance: "1", phone: "021 595 4434", website: "https://www.torgaoptical.co.za", hours: { open: 9, close: 18 } },
    { name: "U LIFE", shop_no: "138", entrance: "2", phone: "021 595 1803", website: "https://n1citymall.co.za/stores/u-life/", hours: { open: 9, close: 18 } },
    { name: "VERIMARK", shop_no: "90", entrance: "1", phone: "021 595 1303", website: "https://www.verimark.co.za", hours: { open: 9, close: 18 } }
  ],
};

// ======================================================


let cardSection = document.getElementById("card-section");

function getStatus(hours) {
  if (!hours) return { text: "Hours N/A", class: "bg-secondary", range: "N/A" };

  const now = new Date();
  const day = now.getDay();
  const hr = now.getHours();
  const min = now.getMinutes();
  const currentTime = hr + (min / 60);

  let open = hours.open;
  let close = hours.close;

  // Direct overrides for Banks (Mon-Fri 17, Sat 13, Sun Closed)
  if (hours.satClose && day === 6) close = hours.satClose;
  if (hours.sunOpen === false && day === 0) return { text: "Closed", class: "bg-danger", range: "Closed today" };

  // Direct overrides for Food (Fri/Sat 22.5, Sun 21)
  if (day === 5 && hours.friClose) close = hours.friClose;
  if (day === 6 && hours.satClose) close = hours.satClose;
  if (day === 0 && hours.sunClose) close = hours.sunClose;

  const isOpen = currentTime >= open && currentTime < close;

  // Formatting for display
  const formatTime = (t) => {
    const h = Math.floor(t);
    const m = (t % 1 === 0) ? "00" : "30";
    return `${h}:${m}`;
  };

  return {
    text: isOpen ? "Open Now" : "Closed",
    class: isOpen ? "bg-success" : "bg-danger",
    range: `${formatTime(open)} - ${formatTime(close)}`
  };
}

function displaySingleCard(store, category) {
  const status = getStatus(store.hours);
  const favorites = JSON.parse(localStorage.getItem('mall_favs')) || [];
  const isFav = favorites.includes(store.name);

  // Inside your store loop:
  const phoneHTML = store.phone ?
    `<a href="tel:${store.phone.replace(/\s/g, '')}" class="btn btn-sm btn-outline-success">
        📞 Call ${store.phone}
     </a>` : '';


  // <div class="card h-100 shadow-sm border-0 glass-card">

  //  <a href="tel:${phoneHTML}" class="btn btn-outline-light btn-sm flex-grow-1">📞 Call</a>
  // <a href="tel:${store.phone}" class="btn btn-outline-light btn-sm flex-grow-1">📞 Call</a>
  cardSection.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <span class="badge ${status.class}">${status.text}</span>
                <button class="btn btn-sm p-0 border-0" onclick="toggleFavorite('${store.name}')">
                  <span style="color: ${isFav ? 'red' : '#ccc'}; font-size: 1.5rem;">
                    ${isFav ? '♥' : '♡'}
                  </span>
                </button>
              </div>

              <h5 class="card-title">${store.name}</h5>
              <span class="badge text-bg-primary text-uppercase mb-3" style="font-size: 0.7rem;">${category}</span>

              <p class="small mb-1"><b>Shop:</b> ${store.shop_no}</p>
              <p class="small mb-1"><b>Entrance:</b> ${store.entrance}</p>
              <p class="small mb-3 text-info"><b>Hours today:</b> ${status.range}</p>

              <div class="d-flex gap-2 mb-3">
                <a href="tel:${store.phone}" class="btn btn-light btn-sm flex-grow-1">📞 Call</a>                
                <button onclick="copyToClipboard('${store.phone}')" class="btn btn-outline-light btn-sm">
                  📋 Copy
                </button>
              </div>

              <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-auto">
                <a href="${store.website}" target="_blank" class="btn btn-outline-primary btn-sm w-100 px-3">
                  Go to website
                </a>
              </div>

            </div>
          </div>
        </div>`;
}

function generateFilterButtons() {
  const filterContainer = document.getElementById("filter-buttons");

  // 1. Clear container and add the "All" and "Favorites" buttons
  // We use d-inline-flex, justify-content-center, and align-items-center to ensure perfect text centering
  filterContainer.innerHTML = `
        <a class="btn btn-outline-primary active d-inline-flex justify-content-center align-items-center" 
           onclick="filterByCategory('all', this)" 
           href="#result-count">
           All
        </a>
        <a class="btn btn-outline-danger d-inline-flex justify-content-center align-items-center" 
           onclick="filterByCategory('favorites', this)" 
           href="#result-count">
           ♥ Favorites
        </a>
    `;

  // 2. Loop through categories and create identical <a> buttons for each
  for (let category in stores) {
    filterContainer.innerHTML += `
            <a class="btn btn-outline-primary text-uppercase d-inline-flex justify-content-center align-items-center" 
               onclick="filterByCategory('${category}', this)" 
               href="#result-count">
               ${category}
            </a>
        `;
  }
}



// Function to update the results text // 
function updateResultCount(count, categoryName = "all") {
  const countText = document.getElementById("result-count");
  if (categoryName === "all") {
    countText.innerText = `Showing ${count} results total`;
  } else {
    countText.innerText = `Showing ${count} results in ${categoryName.toUpperCase()}`;
  }
}

function searchStores() {
  const searchTerm = document.getElementById("storeSearch").value.toLowerCase();
  cardSection.innerHTML = "";
  let count = 0;

  for (let category in stores) {
    stores[category].forEach((store) => {
      if (store.name.toLowerCase().includes(searchTerm) || category.toLowerCase().includes(searchTerm)) {
        displaySingleCard(store, category);
        count++;
      }
    });
  }

  updateResultCount(count);
  if (count === 0) {
    cardSection.innerHTML = `<p class="text-center text-light mt-5">No stores match "${searchTerm}"</p>`;
  }
}


function filterByCategory(selectedCategory, buttonElement) {
  cardSection.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"

  // 1. UI: Handle Active Button Styling
  const buttons = document.querySelectorAll('#filter-buttons .btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');

  // 2. Logic: Filter the display
  cardSection.innerHTML = "";
  let count = 0;
  const favorites = JSON.parse(localStorage.getItem('mall_favs')) || [];

  for (let category in stores) {
    // Condition: If 'all', OR matches category, OR searching 'favorites'
    if (selectedCategory === 'all' || selectedCategory === category || selectedCategory === 'favorites') {

      stores[category].forEach(store => {
        // If we are in "favorites" mode, only show if store is in favs list
        if (selectedCategory === 'favorites') {
          if (favorites.includes(store.name)) {
            displaySingleCard(store, category);
            count++;
          }
        } else {
          // Normal category or 'all' mode
          displaySingleCard(store, category);
          count++;
        }
      });
    }
  }

  // 3. Update result counter
  const displayLabel = selectedCategory === 'favorites' ? 'your favorites' : selectedCategory;
  updateResultCount(count, displayLabel);

  if (count === 0 && selectedCategory === 'favorites') {
    cardSection.className = ""

    cardSection.innerHTML = `
            <div class="col-12 text-center mt-5">
                <p class="text-light fs-5">You haven't added any favorites yet!</p>
                <p class="text-light">Click the ♡ on a store card to save it here.</p>
            </div>`;
  }
}


function clearAllFavorites() {
  if (confirm("Are you sure you want to clear your favorites?")) {
    localStorage.removeItem('mall_favs');

    // Find the "All" button and click it programmatically to refresh the view
    const allBtn = document.querySelector('[onclick*="filterByCategory(\'all\'"]');
    if (allBtn) {
      allBtn.click();
    } else {
      searchStores();
    }
  }
}

// Toggle Favorites using LocalStorage
function toggleFavorite(storeName) {
  let favorites = JSON.parse(localStorage.getItem('mall_favs')) || [];
  if (favorites.includes(storeName)) {
    favorites = favorites.filter(fav => fav !== storeName);
  } else {
    favorites.push(storeName);
  }
  localStorage.setItem('mall_favs', JSON.stringify(favorites));
  searchStores(); // Refresh UI
}


// Simple Share Function
// function shareStore(name, shop) {
//     if (navigator.share) {
//         navigator.share({
//             title: name,
//             text: `Meet me at ${name} (Shop ${shop}) in N1 City Mall!`,
//             url: window.location.href
//         });
//     } else {
//         alert("Sharing not supported on this browser.");
//     }
// }



// --- Back to Top Logic --- // 
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// -----------------------------


const searchInput = document.getElementById('storeSearch');

function prepareForSearch() {
  // 1. Scroll the search bar into view (centered)
  searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // 2. Reset category filters to 'All'
  activateAllButton();
}

// --- 1. MOUSE CLICK FEATURE ---
searchInput.addEventListener('click', () => {
  prepareForSearch();
});

// --- 2. KEYBOARD SHORTCUTS ---
document.addEventListener('keydown', (e) => {
  const isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';

  // Shortcut: '/' key
  if (e.key === '/' && !isTyping) {
    e.preventDefault();
    searchInput.focus();
    prepareForSearch();
  }

  // Shortcut: 'Escape' key
  if (e.key === 'Escape') {
    searchInput.value = '';
    searchInput.blur();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activateAllButton();
    searchStores();
  }
});

/**
 * Finds 'All' button and sets it to active
 */
function activateAllButton() {
  const allBtn = Array.from(document.querySelectorAll('#filter-buttons .btn'))
    .find(btn => btn.textContent.trim() === 'All');

  if (allBtn) {
    document.querySelectorAll('#filter-buttons .btn').forEach(btn => btn.classList.remove('active'));
    allBtn.classList.add('active');
    if (typeof filterByCategory === "function") {
      filterByCategory('all', allBtn);
    }
  }
}


function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Phone number copied to clipboard: " + text);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// -----------------------------
// init
generateFilterButtons();
searchStores(); // This loads "All" by default
// -----------------------------
