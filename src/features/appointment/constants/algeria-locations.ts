/* eslint-disable sort-keys */
import type { AppLocale } from "@/i18n/direction";

type LocationOption = {
  value: string;
  label: string;
};

type WilayaEntry = {
  code: string;
  nameFr: string;
  nameAr: string;
};

type CommuneEntry = {
  wilayaCode: string;
  nameFr: string;
  nameAr: string;
};

export const ALGERIA_WILAYAS: WilayaEntry[] = [
  {
    code: "01",
    nameFr: "Adrar",
    nameAr: "أدرار"
  },
  {
    code: "02",
    nameFr: "Chlef",
    nameAr: "الشلف"
  },
  {
    code: "03",
    nameFr: "Laghouat",
    nameAr: "الأغواط"
  },
  {
    code: "04",
    nameFr: "Oum El Bouaghi",
    nameAr: "أم البواقي"
  },
  {
    code: "05",
    nameFr: "Batna",
    nameAr: "باتنة"
  },
  {
    code: "06",
    nameFr: "Béjaïa",
    nameAr: "بجاية"
  },
  {
    code: "07",
    nameFr: "Biskra",
    nameAr: "بسكرة"
  },
  {
    code: "08",
    nameFr: "Bechar",
    nameAr: "بشار"
  },
  {
    code: "09",
    nameFr: "Blida",
    nameAr: "البليدة"
  },
  {
    code: "10",
    nameFr: "Bouira",
    nameAr: "البويرة"
  },
  {
    code: "11",
    nameFr: "Tamanrasset",
    nameAr: "تمنراست"
  },
  {
    code: "12",
    nameFr: "Tbessa",
    nameAr: "تبسة"
  },
  {
    code: "13",
    nameFr: "Tlemcen",
    nameAr: "تلمسان"
  },
  {
    code: "14",
    nameFr: "Tiaret",
    nameAr: "تيارت"
  },
  {
    code: "15",
    nameFr: "Tizi Ouzou",
    nameAr: "تيزي وزو"
  },
  {
    code: "16",
    nameFr: "Alger",
    nameAr: "الجزائر"
  },
  {
    code: "17",
    nameFr: "Djelfa",
    nameAr: "الجلفة"
  },
  {
    code: "18",
    nameFr: "Jijel",
    nameAr: "جيجل"
  },
  {
    code: "19",
    nameFr: "Se9tif",
    nameAr: "سطيف"
  },
  {
    code: "20",
    nameFr: "Saefda",
    nameAr: "سعيدة"
  },
  {
    code: "21",
    nameFr: "Skikda",
    nameAr: "سكيكدة"
  },
  {
    code: "22",
    nameFr: "Sidi Bel Abbes",
    nameAr: "سيدي بلعباس"
  },
  {
    code: "23",
    nameFr: "Annaba",
    nameAr: "عنابة"
  },
  {
    code: "24",
    nameFr: "Guelma",
    nameAr: "قالمة"
  },
  {
    code: "25",
    nameFr: "Constantine",
    nameAr: "قسنطينة"
  },
  {
    code: "26",
    nameFr: "Medea",
    nameAr: "المدية"
  },
  {
    code: "27",
    nameFr: "Mostaganem",
    nameAr: "مستغانم"
  },
  {
    code: "28",
    nameFr: "M'Sila",
    nameAr: "المسيلة"
  },
  {
    code: "29",
    nameFr: "Mascara",
    nameAr: "معسكر"
  },
  {
    code: "30",
    nameFr: "Ouargla",
    nameAr: "ورقلة"
  },
  {
    code: "31",
    nameFr: "Oran",
    nameAr: "وهران"
  },
  {
    code: "32",
    nameFr: "El Bayadh",
    nameAr: "البيض"
  },
  {
    code: "33",
    nameFr: "Illizi",
    nameAr: "إليزي"
  },
  {
    code: "34",
    nameFr: "Bordj Bou Arreridj",
    nameAr: "برج بوعريريج"
  },
  {
    code: "35",
    nameFr: "Boumerdes",
    nameAr: "بومرداس"
  },
  {
    code: "36",
    nameFr: "El Tarf",
    nameAr: "الطارف"
  },
  {
    code: "37",
    nameFr: "Tindouf",
    nameAr: "تندوف"
  },
  {
    code: "38",
    nameFr: "Tissemsilt",
    nameAr: "تيسمسيلت"
  },
  {
    code: "39",
    nameFr: "El Oued",
    nameAr: "الوادي"
  },
  {
    code: "40",
    nameFr: "Khenchela",
    nameAr: "خنشلة"
  },
  {
    code: "41",
    nameFr: "Souk Ahras",
    nameAr: "سوق أهراس"
  },
  {
    code: "42",
    nameFr: "Tipaza",
    nameAr: "تيبازة"
  },
  {
    code: "43",
    nameFr: "Mila",
    nameAr: "ميلة"
  },
  {
    code: "44",
    nameFr: "Ain Defla",
    nameAr: "عين الدفلى"
  },
  {
    code: "45",
    nameFr: "Naama",
    nameAr: "النعامة"
  },
  {
    code: "46",
    nameFr: "Ain Temouchent",
    nameAr: "عين تموشنت"
  },
  {
    code: "47",
    nameFr: "Ghardaefa",
    nameAr: "غرداية"
  },
  {
    code: "48",
    nameFr: "Relizane",
    nameAr: "غليزان"
  },
  {
    code: "49",
    nameFr: "El M'ghair",
    nameAr: "المغير"
  },
  {
    code: "50",
    nameFr: "El Menia",
    nameAr: "المنيعة"
  },
  {
    code: "51",
    nameFr: "Ouled Djellal",
    nameAr: "أولاد جلال"
  },
  {
    code: "52",
    nameFr: "Bordj Baji Mokhtar",
    nameAr: "برج باجي مختار"
  },
  {
    code: "53",
    nameFr: "Béni Abbès",
    nameAr: "بني عباس"
  },
  {
    code: "54",
    nameFr: "Timimoun",
    nameAr: "تيميمون"
  },
  {
    code: "55",
    nameFr: "Touggourt",
    nameAr: "تقرت"
  },
  {
    code: "56",
    nameFr: "Djanet",
    nameAr: "جانت"
  },
  {
    code: "57",
    nameFr: "In Salah",
    nameAr: "عين صالح"
  },
  {
    code: "58",
    nameFr: "In Guezzam",
    nameAr: "عين قزام"
  }
];

export const ALGERIA_COMMUNES: CommuneEntry[] = [
  {
    wilayaCode: "01",
    nameFr: "Adrar",
    nameAr: "أدرار"
  },
  {
    wilayaCode: "01",
    nameFr: "Tamest",
    nameAr: "تأماست"
  },
  {
    wilayaCode: "01",
    nameFr: "Charouine",
    nameAr: "شروين"
  },
  {
    wilayaCode: "01",
    nameFr: "Reggane",
    nameAr: "رڨان"
  },
  {
    wilayaCode: "01",
    nameFr: "In Zghmir",
    nameAr: "ان زغمير"
  },
  {
    wilayaCode: "01",
    nameFr: "Tit",
    nameAr: "تــيـــت"
  },
  {
    wilayaCode: "01",
    nameFr: "Ksar Kaddour",
    nameAr: "قصر قدور"
  },
  {
    wilayaCode: "01",
    nameFr: "Tsabit",
    nameAr: "تسابيت"
  },
  {
    wilayaCode: "01",
    nameFr: "Timimoun",
    nameAr: "تيميمون"
  },
  {
    wilayaCode: "01",
    nameFr: "Ouled Said",
    nameAr: "أولاد سعيد"
  },
  {
    wilayaCode: "01",
    nameFr: "Zaouiet Kounta",
    nameAr: "زاوية كنتة"
  },
  {
    wilayaCode: "01",
    nameFr: "Aoulef",
    nameAr: "أولف"
  },
  {
    wilayaCode: "01",
    nameFr: "Timokten",
    nameAr: "تيمقتن"
  },
  {
    wilayaCode: "01",
    nameFr: "Tamentit",
    nameAr: "تامنطيت"
  },
  {
    wilayaCode: "01",
    nameFr: "Fenoughil",
    nameAr: "فنوغيل"
  },
  {
    wilayaCode: "01",
    nameFr: "Tinerkouk",
    nameAr: "زاوية دباغ"
  },
  {
    wilayaCode: "01",
    nameFr: "Deldoul",
    nameAr: "دﻟﺪول"
  },
  {
    wilayaCode: "01",
    nameFr: "Sali",
    nameAr: "سالى"
  },
  {
    wilayaCode: "01",
    nameFr: "Akabli",
    nameAr: "أقبلي"
  },
  {
    wilayaCode: "01",
    nameFr: "Metarfa",
    nameAr: "المطارفة"
  },
  {
    wilayaCode: "01",
    nameFr: "Ouled Ahmed Tammi",
    nameAr: "أولاد أحمد تيمى"
  },
  {
    wilayaCode: "01",
    nameFr: "Bouda",
    nameAr: "بودة"
  },
  {
    wilayaCode: "01",
    nameFr: "Aougrout",
    nameAr: "أوقروت"
  },
  {
    wilayaCode: "01",
    nameFr: "Talmine",
    nameAr: ""
  },
  {
    wilayaCode: "01",
    nameFr: "Bordj Badji Mokhtar",
    nameAr: "برج باجي مختار"
  },
  {
    wilayaCode: "01",
    nameFr: "Sbaa",
    nameAr: "السبع"
  },
  {
    wilayaCode: "01",
    nameFr: "Ouled Aissa",
    nameAr: "أولاد عيسى"
  },
  {
    wilayaCode: "01",
    nameFr: "Timiaouine",
    nameAr: "تيمياوين"
  },
  {
    wilayaCode: "02",
    nameFr: "Chlef",
    nameAr: "الشلف"
  },
  {
    wilayaCode: "02",
    nameFr: "Tenes",
    nameAr: "تنس"
  },
  {
    wilayaCode: "02",
    nameFr: "Benairia",
    nameAr: "بنايرية"
  },
  {
    wilayaCode: "02",
    nameFr: "El Karimia",
    nameAr: "الكريمية"
  },
  {
    wilayaCode: "02",
    nameFr: "Tadjna",
    nameAr: "تاجنة"
  },
  {
    wilayaCode: "02",
    nameFr: "Taougrite",
    nameAr: "تاوقريت"
  },
  {
    wilayaCode: "02",
    nameFr: "Beni Haoua",
    nameAr: "بني حواء"
  },
  {
    wilayaCode: "02",
    nameFr: "Sobha",
    nameAr: "صبحة"
  },
  {
    wilayaCode: "02",
    nameFr: "Harchoun",
    nameAr: "حرشون"
  },
  {
    wilayaCode: "02",
    nameFr: "Ouled Fares",
    nameAr: "أولاد فارس"
  },
  {
    wilayaCode: "02",
    nameFr: "Sidi Akacha",
    nameAr: "سيدي عكاشة"
  },
  {
    wilayaCode: "02",
    nameFr: "Boukadir",
    nameAr: "بوقدير"
  },
  {
    wilayaCode: "02",
    nameFr: "Beni Rached",
    nameAr: "بني راشد"
  },
  {
    wilayaCode: "02",
    nameFr: "Talassa",
    nameAr: "تلعصة"
  },
  {
    wilayaCode: "02",
    nameFr: "Herenfa",
    nameAr: "الهرنفة"
  },
  {
    wilayaCode: "02",
    nameFr: "Oued Goussine",
    nameAr: "واد ڨوسين"
  },
  {
    wilayaCode: "02",
    nameFr: "Dahra",
    nameAr: "الظهرة"
  },
  {
    wilayaCode: "02",
    nameFr: "Ouled Abbes",
    nameAr: "أولاد عباس"
  },
  {
    wilayaCode: "02",
    nameFr: "Sendjas",
    nameAr: "سنجاس"
  },
  {
    wilayaCode: "02",
    nameFr: "Zeboudja",
    nameAr: "الزبوجة"
  },
  {
    wilayaCode: "02",
    nameFr: "Oued Sly",
    nameAr: "واد سلي"
  },
  {
    wilayaCode: "02",
    nameFr: "Abou El Hassen",
    nameAr: "أبو الحسن"
  },
  {
    wilayaCode: "02",
    nameFr: "El Marsa",
    nameAr: "المرصى"
  },
  {
    wilayaCode: "02",
    nameFr: "Chettia",
    nameAr: "الشطية"
  },
  {
    wilayaCode: "02",
    nameFr: "Sidi Abderrahmane",
    nameAr: "سيدي عبد الرحمان"
  },
  {
    wilayaCode: "02",
    nameFr: "Moussadek",
    nameAr: "مصدق"
  },
  {
    wilayaCode: "02",
    nameFr: "El Hadjadj",
    nameAr: "الحجاج"
  },
  {
    wilayaCode: "02",
    nameFr: "Labiod Medjadja",
    nameAr: "الأبيض مجاجة"
  },
  {
    wilayaCode: "02",
    nameFr: "Oued Fodda",
    nameAr: "واد الفضة"
  },
  {
    wilayaCode: "02",
    nameFr: "Ouled Ben Abdelkader",
    nameAr: "أولاد بن عبد القادر"
  },
  {
    wilayaCode: "02",
    nameFr: "Bouzghaia",
    nameAr: "بوزغاية"
  },
  {
    wilayaCode: "02",
    nameFr: "Ain Merane",
    nameAr: "عين مران"
  },
  {
    wilayaCode: "02",
    nameFr: "Oum Drou",
    nameAr: "أم الذروع"
  },
  {
    wilayaCode: "02",
    nameFr: "Breira",
    nameAr: "بريرة"
  },
  {
    wilayaCode: "02",
    nameFr: "Beni Bouateb",
    nameAr: "بني بوعتاب"
  },
  {
    wilayaCode: "03",
    nameFr: "Laghouat",
    nameAr: "الأغواط"
  },
  {
    wilayaCode: "03",
    nameFr: "Ksar El Hirane",
    nameAr: "قصر الحيران"
  },
  {
    wilayaCode: "03",
    nameFr: "Benacer Ben Chohra",
    nameAr: "بن ناصر بن شهرة"
  },
  {
    wilayaCode: "03",
    nameFr: "Sidi Makhlouf",
    nameAr: "سيدي مخلوف"
  },
  {
    wilayaCode: "03",
    nameFr: "Hassi Delaa",
    nameAr: "حاسي دلاعة"
  },
  {
    wilayaCode: "03",
    nameFr: "Hassi R'Mel",
    nameAr: "حاسي الرمل"
  },
  {
    wilayaCode: "03",
    nameFr: "Ain Mahdi",
    nameAr: "عــيــن مـــاضــي"
  },
  {
    wilayaCode: "03",
    nameFr: "Tadjmout",
    nameAr: "تاجموت"
  },
  {
    wilayaCode: "03",
    nameFr: "El Kheneg",
    nameAr: "الخنق"
  },
  {
    wilayaCode: "03",
    nameFr: "Gueltat Sidi Saad",
    nameAr: "قلتة سيدي سعد"
  },
  {
    wilayaCode: "03",
    nameFr: "Ain Sidi Ali",
    nameAr: "عين سيدي علي"
  },
  {
    wilayaCode: "03",
    nameFr: "Beidha",
    nameAr: "بيضاء"
  },
  {
    wilayaCode: "03",
    nameFr: "Brida",
    nameAr: "بريدة"
  },
  {
    wilayaCode: "03",
    nameFr: "El Ghicha",
    nameAr: "الغيشة"
  },
  {
    wilayaCode: "03",
    nameFr: "Hadj Mechri",
    nameAr: "الحاج المشري"
  },
  {
    wilayaCode: "03",
    nameFr: "Sebgag",
    nameAr: "سبقاق"
  },
  {
    wilayaCode: "03",
    nameFr: "Taouiala",
    nameAr: "تاويالة"
  },
  {
    wilayaCode: "03",
    nameFr: "Tadjrouna",
    nameAr: "تاجرونة"
  },
  {
    wilayaCode: "03",
    nameFr: "Aflou",
    nameAr: "أفلو"
  },
  {
    wilayaCode: "03",
    nameFr: "El Assafia",
    nameAr: "العسافية"
  },
  {
    wilayaCode: "03",
    nameFr: "Oued Morra",
    nameAr: "وادي مرة"
  },
  {
    wilayaCode: "03",
    nameFr: "Oued M'Zi",
    nameAr: "وادي مزي"
  },
  {
    wilayaCode: "03",
    nameFr: "El Haouaita",
    nameAr: "الهوارية"
  },
  {
    wilayaCode: "03",
    nameFr: "Sidi Bouzid",
    nameAr: "سيدي بوزيد"
  },
  {
    wilayaCode: "04",
    nameFr: "Oum El Bouaghi",
    nameAr: "أم البواقي"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Beida",
    nameAr: "عين البيضاء"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain M'lila",
    nameAr: "عين مليلة"
  },
  {
    wilayaCode: "04",
    nameFr: "Behir Chergui",
    nameAr: "بحير الشرڨي"
  },
  {
    wilayaCode: "04",
    nameFr: "El Amiria",
    nameAr: "العامرية"
  },
  {
    wilayaCode: "04",
    nameFr: "Sigus",
    nameAr: "سيقوس"
  },
  {
    wilayaCode: "04",
    nameFr: "El Belala",
    nameAr: "البلالة"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Babouche",
    nameAr: "عين بابوش"
  },
  {
    wilayaCode: "04",
    nameFr: "Berriche",
    nameAr: "بريش"
  },
  {
    wilayaCode: "04",
    nameFr: "Ouled Hamla",
    nameAr: "أولاد حملة"
  },
  {
    wilayaCode: "04",
    nameFr: "Dhala",
    nameAr: "الضلعة"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Kercha",
    nameAr: "عين كرشة"
  },
  {
    wilayaCode: "04",
    nameFr: "Hanchir Toumghani",
    nameAr: "هنشير تومغني"
  },
  {
    wilayaCode: "04",
    nameFr: "El Djazia",
    nameAr: "الجازيـــــــة"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Diss",
    nameAr: "عين الديس"
  },
  {
    wilayaCode: "04",
    nameFr: "Fkirina",
    nameAr: "فكرينة"
  },
  {
    wilayaCode: "04",
    nameFr: "Souk Naamane",
    nameAr: "سوق نعمان"
  },
  {
    wilayaCode: "04",
    nameFr: "Zorg",
    nameAr: "الزرڨ"
  },
  {
    wilayaCode: "04",
    nameFr: "El Fedjoudj Boughrara Saoudi",
    nameAr: "الفجوج بوغرارة سعودى"
  },
  {
    wilayaCode: "04",
    nameFr: "Ouled Zouai",
    nameAr: "أولاد زواي"
  },
  {
    wilayaCode: "04",
    nameFr: "Bir Chouhada",
    nameAr: "بئر الشهداء"
  },
  {
    wilayaCode: "04",
    nameFr: "Ksar Sbahi",
    nameAr: "قصر صباحي"
  },
  {
    wilayaCode: "04",
    nameFr: "Oued Nini",
    nameAr: "وادي نيني"
  },
  {
    wilayaCode: "04",
    nameFr: "Meskiana",
    nameAr: "مسكيانة"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Fekroune",
    nameAr: "عين فكرون"
  },
  {
    wilayaCode: "04",
    nameFr: "Rahia",
    nameAr: "الراحية"
  },
  {
    wilayaCode: "04",
    nameFr: "Ain Zitoun",
    nameAr: "عين الزيتون"
  },
  {
    wilayaCode: "04",
    nameFr: "Ouled Gacem",
    nameAr: "أولاد ڨاسم"
  },
  {
    wilayaCode: "04",
    nameFr: "El Harmilia",
    nameAr: "الحرملية"
  },
  {
    wilayaCode: "05",
    nameFr: "Batna",
    nameAr: "باتنة"
  },
  {
    wilayaCode: "05",
    nameFr: "Ghassira",
    nameAr: "غسيرة"
  },
  {
    wilayaCode: "05",
    nameFr: "Maafa",
    nameAr: "معافة"
  },
  {
    wilayaCode: "05",
    nameFr: "Merouana",
    nameAr: "مروانة"
  },
  {
    wilayaCode: "05",
    nameFr: "Seriana",
    nameAr: "سريانة"
  },
  {
    wilayaCode: "05",
    nameFr: "Menaa",
    nameAr: "منعة"
  },
  {
    wilayaCode: "05",
    nameFr: "El Madher",
    nameAr: "المعذر"
  },
  {
    wilayaCode: "05",
    nameFr: "Tazoult",
    nameAr: "تازولت"
  },
  {
    wilayaCode: "05",
    nameFr: "Ngaous",
    nameAr: "نڨاوس"
  },
  {
    wilayaCode: "05",
    nameFr: "Guigba",
    nameAr: "قيقبة"
  },
  {
    wilayaCode: "05",
    nameFr: "Inoughissen",
    nameAr: "إينوغيسن"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouyoun El Assafir",
    nameAr: "عيون العصافير"
  },
  {
    wilayaCode: "05",
    nameFr: "Djerma",
    nameAr: "جرمة"
  },
  {
    wilayaCode: "05",
    nameFr: "Bitam",
    nameAr: "بيطام"
  },
  {
    wilayaCode: "05",
    nameFr: "Metkaouak",
    nameAr: "عزيل عبد القادر"
  },
  {
    wilayaCode: "05",
    nameFr: "Arris",
    nameAr: "اريس"
  },
  {
    wilayaCode: "05",
    nameFr: "Kimmel",
    nameAr: "كيمل"
  },
  {
    wilayaCode: "05",
    nameFr: "Tilatou",
    nameAr: "تيلاطو"
  },
  {
    wilayaCode: "05",
    nameFr: "Ain Djasser",
    nameAr: "عين جاسر"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouled Selam",
    nameAr: "أولاد سلام"
  },
  {
    wilayaCode: "05",
    nameFr: "Tigherghar",
    nameAr: "تيغرغار"
  },
  {
    wilayaCode: "05",
    nameFr: "Ain Yagout",
    nameAr: "عين ياقوت"
  },
  {
    wilayaCode: "05",
    nameFr: "Fesdis",
    nameAr: "فسديس"
  },
  {
    wilayaCode: "05",
    nameFr: "Sefiane",
    nameAr: "سفيان"
  },
  {
    wilayaCode: "05",
    nameFr: "Rahbat",
    nameAr: "الرحبات"
  },
  {
    wilayaCode: "05",
    nameFr: "Tighanimine",
    nameAr: "تيغانمين"
  },
  {
    wilayaCode: "05",
    nameFr: "Lemsane",
    nameAr: "لمسان"
  },
  {
    wilayaCode: "05",
    nameFr: "Ksar Belezma",
    nameAr: "قصر بلازمة"
  },
  {
    wilayaCode: "05",
    nameFr: "Seggana",
    nameAr: "سقانة"
  },
  {
    wilayaCode: "05",
    nameFr: "Ichmoul",
    nameAr: "ايشمول"
  },
  {
    wilayaCode: "05",
    nameFr: "Foum Toub",
    nameAr: "فم الطوب"
  },
  {
    wilayaCode: "05",
    nameFr: "Beni Foudhala El Hakania",
    nameAr: "بنى فضالة الحقانية"
  },
  {
    wilayaCode: "05",
    nameFr: "Oued El Ma",
    nameAr: "واد الماء"
  },
  {
    wilayaCode: "05",
    nameFr: "Talkhamt",
    nameAr: "تالخمت"
  },
  {
    wilayaCode: "05",
    nameFr: "Bouzina",
    nameAr: "بوزينة"
  },
  {
    wilayaCode: "05",
    nameFr: "Chemora",
    nameAr: "الشمرة"
  },
  {
    wilayaCode: "05",
    nameFr: "Oued Chaaba",
    nameAr: "واد الشعبة"
  },
  {
    wilayaCode: "05",
    nameFr: "Taxlent",
    nameAr: "تاكسلانت"
  },
  {
    wilayaCode: "05",
    nameFr: "Gosbat",
    nameAr: "القصبات"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouled Aouf",
    nameAr: "أولاد عوف"
  },
  {
    wilayaCode: "05",
    nameFr: "Boumagueur",
    nameAr: "بــومقر"
  },
  {
    wilayaCode: "05",
    nameFr: "Barika",
    nameAr: "بريكة"
  },
  {
    wilayaCode: "05",
    nameFr: "Djezzar",
    nameAr: "الجزار"
  },
  {
    wilayaCode: "05",
    nameFr: "Tkout",
    nameAr: "تكوت"
  },
  {
    wilayaCode: "05",
    nameFr: "Ain Touta",
    nameAr: "عين التوتة"
  },
  {
    wilayaCode: "05",
    nameFr: "Hidoussa",
    nameAr: "حيدوسة"
  },
  {
    wilayaCode: "05",
    nameFr: "Teniet El Abed",
    nameAr: "نية العابد"
  },
  {
    wilayaCode: "05",
    nameFr: "Oued Taga",
    nameAr: "وادي الطاقة"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouled Fadel",
    nameAr: "أولاد فاضل"
  },
  {
    wilayaCode: "05",
    nameFr: "Timgad",
    nameAr: "تيمقاد"
  },
  {
    wilayaCode: "05",
    nameFr: "Ras El Aioun",
    nameAr: "رأس العيون"
  },
  {
    wilayaCode: "05",
    nameFr: "Chir",
    nameAr: "شير"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouled Si Slimane",
    nameAr: "أولاد سي سليمان"
  },
  {
    wilayaCode: "05",
    nameFr: "Zanat El Beida",
    nameAr: "زانة البيضاء"
  },
  {
    wilayaCode: "05",
    nameFr: "M'doukel",
    nameAr: "أمدوكال"
  },
  {
    wilayaCode: "05",
    nameFr: "Ouled Ammar",
    nameAr: "أولاد عمار"
  },
  {
    wilayaCode: "05",
    nameFr: "El Hassi",
    nameAr: "الحاسي"
  },
  {
    wilayaCode: "05",
    nameFr: "Lazrou",
    nameAr: "لازرو"
  },
  {
    wilayaCode: "05",
    nameFr: "Boumia",
    nameAr: "بومية"
  },
  {
    wilayaCode: "05",
    nameFr: "Boulhilat",
    nameAr: "بولهيلات"
  },
  {
    wilayaCode: "05",
    nameFr: "Larbaa",
    nameAr: "الاربعاء"
  },
  {
    wilayaCode: "06",
    nameFr: "Bejaia",
    nameAr: "بجاية"
  },
  {
    wilayaCode: "06",
    nameFr: "Amizour",
    nameAr: "اميزور"
  },
  {
    wilayaCode: "06",
    nameFr: "Ferraoun",
    nameAr: "فرعون"
  },
  {
    wilayaCode: "06",
    nameFr: "Taourirt Ighil",
    nameAr: "تاوريرت اغيل"
  },
  {
    wilayaCode: "06",
    nameFr: "Chelata",
    nameAr: "شلاطة"
  },
  {
    wilayaCode: "06",
    nameFr: "Tamokra",
    nameAr: "تامقرة"
  },
  {
    wilayaCode: "06",
    nameFr: "Timzrit",
    nameAr: "تيمزريت"
  },
  {
    wilayaCode: "06",
    nameFr: "Souk El Thenine",
    nameAr: "ﺳﻮق اﻻﺛﻨﻴﻦ"
  },
  {
    wilayaCode: "06",
    nameFr: "M'cisna",
    nameAr: "مسيسنة"
  },
  {
    wilayaCode: "06",
    nameFr: "Thinabdher",
    nameAr: "تينبذار"
  },
  {
    wilayaCode: "06",
    nameFr: "Tichi",
    nameAr: "تيشي"
  },
  {
    wilayaCode: "06",
    nameFr: "Semaoun",
    nameAr: "سمعون"
  },
  {
    wilayaCode: "06",
    nameFr: "Kendira",
    nameAr: "كنديرة"
  },
  {
    wilayaCode: "06",
    nameFr: "Tifra",
    nameAr: "تيفرة"
  },
  {
    wilayaCode: "06",
    nameFr: "Ighram",
    nameAr: "إغرم"
  },
  {
    wilayaCode: "06",
    nameFr: "Amalou",
    nameAr: "امالو"
  },
  {
    wilayaCode: "06",
    nameFr: "Ighil Ali",
    nameAr: "إغيل على"
  },
  {
    wilayaCode: "06",
    nameFr: "Ifelain Ilmathen",
    nameAr: "افناين الماثن"
  },
  {
    wilayaCode: "06",
    nameFr: "Toudja",
    nameAr: "توجة"
  },
  {
    wilayaCode: "06",
    nameFr: "Darguina",
    nameAr: "درقينة"
  },
  {
    wilayaCode: "06",
    nameFr: "Sidi Ayad",
    nameAr: "سيدي عياد"
  },
  {
    wilayaCode: "06",
    nameFr: "Aokas",
    nameAr: "أوقاس"
  },
  {
    wilayaCode: "06",
    nameFr: "Ait Djellil",
    nameAr: "آيث جليل"
  },
  {
    wilayaCode: "06",
    nameFr: "Adekar",
    nameAr: "آدكار"
  },
  {
    wilayaCode: "06",
    nameFr: "Akbou",
    nameAr: "أقبو"
  },
  {
    wilayaCode: "06",
    nameFr: "Seddouk",
    nameAr: "صدوق"
  },
  {
    wilayaCode: "06",
    nameFr: "Tazmalt",
    nameAr: "تازمالت"
  },
  {
    wilayaCode: "06",
    nameFr: "Ait R'zine",
    nameAr: "آيت أرزين"
  },
  {
    wilayaCode: "06",
    nameFr: "Chemini",
    nameAr: "شميني"
  },
  {
    wilayaCode: "06",
    nameFr: "Souk Oufella",
    nameAr: "سوق أوفلة"
  },
  {
    wilayaCode: "06",
    nameFr: "Taskriout",
    nameAr: "تاسقريوت"
  },
  {
    wilayaCode: "06",
    nameFr: "Tibane",
    nameAr: "طيبان"
  },
  {
    wilayaCode: "06",
    nameFr: "Tala Hamza",
    nameAr: "ثالة حمزة"
  },
  {
    wilayaCode: "06",
    nameFr: "Barbacha",
    nameAr: "برباشة"
  },
  {
    wilayaCode: "06",
    nameFr: "Beni Ksila",
    nameAr: "بنى كسيلة"
  },
  {
    wilayaCode: "06",
    nameFr: "Ouzallaguen",
    nameAr: "أوزلاقن"
  },
  {
    wilayaCode: "06",
    nameFr: "Bouhamza",
    nameAr: "بوحمزة"
  },
  {
    wilayaCode: "06",
    nameFr: "Beni Melikeche",
    nameAr: "بنى مليكش"
  },
  {
    wilayaCode: "06",
    nameFr: "Sidi Aich",
    nameAr: "سيدي عيش"
  },
  {
    wilayaCode: "06",
    nameFr: "El Kseur",
    nameAr: "القصر"
  },
  {
    wilayaCode: "06",
    nameFr: "Melbou",
    nameAr: "ملبو"
  },
  {
    wilayaCode: "06",
    nameFr: "Akfadou",
    nameAr: "اكفادو"
  },
  {
    wilayaCode: "06",
    nameFr: "Leflaye",
    nameAr: "لفلاى"
  },
  {
    wilayaCode: "06",
    nameFr: "Kherrata",
    nameAr: "خراطة"
  },
  {
    wilayaCode: "06",
    nameFr: "Draa Kaid",
    nameAr: "ذراع القايد"
  },
  {
    wilayaCode: "06",
    nameFr: "Tamridjet",
    nameAr: "تامريجت"
  },
  {
    wilayaCode: "06",
    nameFr: "Ait Smail",
    nameAr: "آيت سماعيل"
  },
  {
    wilayaCode: "06",
    nameFr: "Boukhelifa",
    nameAr: "بوخليفة"
  },
  {
    wilayaCode: "06",
    nameFr: "Tizi N'berber",
    nameAr: "تيزى نبربر"
  },
  {
    wilayaCode: "06",
    nameFr: "Beni Maouch",
    nameAr: "بني معوش"
  },
  {
    wilayaCode: "06",
    nameFr: "Oued Ghir",
    nameAr: "وادي غير"
  },
  {
    wilayaCode: "06",
    nameFr: "Boudjellil",
    nameAr: "بوجليل"
  },
  {
    wilayaCode: "07",
    nameFr: "Biskra",
    nameAr: "بسكرة"
  },
  {
    wilayaCode: "07",
    nameFr: "Oumache",
    nameAr: "أوماش"
  },
  {
    wilayaCode: "07",
    nameFr: "Branis",
    nameAr: "البرانس"
  },
  {
    wilayaCode: "07",
    nameFr: "Chetma",
    nameAr: "شتمة"
  },
  {
    wilayaCode: "07",
    nameFr: "Ouled Djellal",
    nameAr: "أولاد جلال"
  },
  {
    wilayaCode: "07",
    nameFr: "Ras El Miaad",
    nameAr: "راس الميعاد"
  },
  {
    wilayaCode: "07",
    nameFr: "Besbes",
    nameAr: "البسباس"
  },
  {
    wilayaCode: "07",
    nameFr: "Sidi Khaled",
    nameAr: "سيدي خالد"
  },
  {
    wilayaCode: "07",
    nameFr: "Doucen",
    nameAr: "الدوسن"
  },
  {
    wilayaCode: "07",
    nameFr: "Ech Chaiba",
    nameAr: "أولاد رحمة"
  },
  {
    wilayaCode: "07",
    nameFr: "Sidi Okba",
    nameAr: "سيدي عقبة"
  },
  {
    wilayaCode: "07",
    nameFr: "Mchouneche",
    nameAr: "مشونش"
  },
  {
    wilayaCode: "07",
    nameFr: "El Haouch",
    nameAr: "الحوش"
  },
  {
    wilayaCode: "07",
    nameFr: "Ain Naga",
    nameAr: "عين الناقة"
  },
  {
    wilayaCode: "07",
    nameFr: "Zeribet El Oued",
    nameAr: "زريبة الوادي"
  },
  {
    wilayaCode: "07",
    nameFr: "El Feidh",
    nameAr: "الفيض"
  },
  {
    wilayaCode: "07",
    nameFr: "El Kantara",
    nameAr: "القنطرة"
  },
  {
    wilayaCode: "07",
    nameFr: "Ain Zaatout",
    nameAr: "عين زعطوط"
  },
  {
    wilayaCode: "07",
    nameFr: "El Outaya",
    nameAr: "لوطاية"
  },
  {
    wilayaCode: "07",
    nameFr: "Djemorah",
    nameAr: "جمورة"
  },
  {
    wilayaCode: "07",
    nameFr: "Tolga",
    nameAr: "طولقة"
  },
  {
    wilayaCode: "07",
    nameFr: "Lioua",
    nameAr: "لواء"
  },
  {
    wilayaCode: "07",
    nameFr: "Lichana",
    nameAr: "لشانة"
  },
  {
    wilayaCode: "07",
    nameFr: "Ourlal",
    nameAr: "أورلال"
  },
  {
    wilayaCode: "07",
    nameFr: "M'lili",
    nameAr: "مليلي"
  },
  {
    wilayaCode: "07",
    nameFr: "Foughala",
    nameAr: "فوغالة"
  },
  {
    wilayaCode: "07",
    nameFr: "Bordj Ben Azzouz",
    nameAr: "برج بن عزوز"
  },
  {
    wilayaCode: "07",
    nameFr: "M'ziraa",
    nameAr: "مزيرعة"
  },
  {
    wilayaCode: "07",
    nameFr: "Bouchagroun",
    nameAr: "بوشقرون"
  },
  {
    wilayaCode: "07",
    nameFr: "Mekhadma",
    nameAr: "مخادمة"
  },
  {
    wilayaCode: "07",
    nameFr: "El Ghrous",
    nameAr: "الغروس"
  },
  {
    wilayaCode: "07",
    nameFr: "El Hadjab",
    nameAr: "الحاجب"
  },
  {
    wilayaCode: "07",
    nameFr: "Khanguet Sidinadji",
    nameAr: "خنڨة سيدي ناجي"
  },
  {
    wilayaCode: "08",
    nameFr: "Bechar",
    nameAr: "بشار"
  },
  {
    wilayaCode: "08",
    nameFr: "Erg Ferradj",
    nameAr: "عرق فراج"
  },
  {
    wilayaCode: "08",
    nameFr: "Ouled Khoudir",
    nameAr: "أولاد خدير"
  },
  {
    wilayaCode: "08",
    nameFr: "Meridja",
    nameAr: "مريجة"
  },
  {
    wilayaCode: "08",
    nameFr: "Timoudi",
    nameAr: "تيمودى"
  },
  {
    wilayaCode: "08",
    nameFr: "Lahmar",
    nameAr: "لحمر"
  },
  {
    wilayaCode: "08",
    nameFr: "Beni Abbes",
    nameAr: "بني عباس"
  },
  {
    wilayaCode: "08",
    nameFr: "Beni Ikhlef",
    nameAr: "بني يخلف"
  },
  {
    wilayaCode: "08",
    nameFr: "Mechraa Houari Boumedienne",
    nameAr: "مشرع ھوارى بومدين"
  },
  {
    wilayaCode: "08",
    nameFr: "Kenedsa",
    nameAr: "القنادسة"
  },
  {
    wilayaCode: "08",
    nameFr: "Igli",
    nameAr: "إقلي"
  },
  {
    wilayaCode: "08",
    nameFr: "Tabalbala",
    nameAr: "تبلبالة"
  },
  {
    wilayaCode: "08",
    nameFr: "Taghit",
    nameAr: "تــــاغـيــث"
  },
  {
    wilayaCode: "08",
    nameFr: "El Ouata",
    nameAr: "الوطى"
  },
  {
    wilayaCode: "08",
    nameFr: "Boukais",
    nameAr: "بوكايس"
  },
  {
    wilayaCode: "08",
    nameFr: "Mogheul",
    nameAr: "موغل"
  },
  {
    wilayaCode: "08",
    nameFr: "Abadla",
    nameAr: "العبادلة"
  },
  {
    wilayaCode: "08",
    nameFr: "Kerzaz",
    nameAr: "كرزاز"
  },
  {
    wilayaCode: "08",
    nameFr: "Ksabi",
    nameAr: "قصابى"
  },
  {
    wilayaCode: "08",
    nameFr: "Tamtert",
    nameAr: "تامترت"
  },
  {
    wilayaCode: "08",
    nameFr: "Beni Ounif",
    nameAr: "بني ونيف"
  },
  {
    wilayaCode: "09",
    nameFr: "Blida",
    nameAr: "البليدة‎"
  },
  {
    wilayaCode: "09",
    nameFr: "Chebli",
    nameAr: "الشبلي"
  },
  {
    wilayaCode: "09",
    nameFr: "Bouinan",
    nameAr: "بوعينان"
  },
  {
    wilayaCode: "09",
    nameFr: "Oued El Alleug",
    nameAr: "واد العلايڨ"
  },
  {
    wilayaCode: "09",
    nameFr: "Ouled Yaich",
    nameAr: "اولاد يعيش"
  },
  {
    wilayaCode: "09",
    nameFr: "Chrea",
    nameAr: "الشريعة"
  },
  {
    wilayaCode: "09",
    nameFr: "El Affroun",
    nameAr: "العفرون"
  },
  {
    wilayaCode: "09",
    nameFr: "Chiffa",
    nameAr: "الشفة"
  },
  {
    wilayaCode: "09",
    nameFr: "Hammam Melouane",
    nameAr: "حمام ملوان"
  },
  {
    wilayaCode: "09",
    nameFr: "Ben Khlil",
    nameAr: "بني خليل"
  },
  {
    wilayaCode: "09",
    nameFr: "Soumaa",
    nameAr: "صومعة"
  },
  {
    wilayaCode: "09",
    nameFr: "Mouzaia",
    nameAr: "موزاية"
  },
  {
    wilayaCode: "09",
    nameFr: "Souhane",
    nameAr: "صوحان"
  },
  {
    wilayaCode: "09",
    nameFr: "Meftah",
    nameAr: "مفتاح"
  },
  {
    wilayaCode: "09",
    nameFr: "Ouled Selama",
    nameAr: "أولاد سلامة"
  },
  {
    wilayaCode: "09",
    nameFr: "Boufarik",
    nameAr: "بوفاريك"
  },
  {
    wilayaCode: "09",
    nameFr: "Larbaa",
    nameAr: "الاربعاء"
  },
  {
    wilayaCode: "09",
    nameFr: "Oued Djer",
    nameAr: "واد جر"
  },
  {
    wilayaCode: "09",
    nameFr: "Beni Tamou",
    nameAr: "بني تامو"
  },
  {
    wilayaCode: "09",
    nameFr: "Bouarfa",
    nameAr: "بوعرفة"
  },
  {
    wilayaCode: "09",
    nameFr: "Beni Mered",
    nameAr: "بني مراد"
  },
  {
    wilayaCode: "09",
    nameFr: "Bougara",
    nameAr: "بوڨرة"
  },
  {
    wilayaCode: "09",
    nameFr: "Guerrouaou",
    nameAr: "ڨرواو"
  },
  {
    wilayaCode: "09",
    nameFr: "Ain Romana",
    nameAr: "عين الرمانة"
  },
  {
    wilayaCode: "09",
    nameFr: "Djebabra",
    nameAr: "جبابرة"
  },
  {
    wilayaCode: "10",
    nameFr: "Bouira",
    nameAr: "البويرة"
  },
  {
    wilayaCode: "10",
    nameFr: "El Asnam",
    nameAr: "الأصنام"
  },
  {
    wilayaCode: "10",
    nameFr: "Guerrouma",
    nameAr: "قرومة"
  },
  {
    wilayaCode: "10",
    nameFr: "Souk El Khemis",
    nameAr: "سوق الخميس"
  },
  {
    wilayaCode: "10",
    nameFr: "Kadiria",
    nameAr: "قادرية"
  },
  {
    wilayaCode: "10",
    nameFr: "Hanif",
    nameAr: "احنيف"
  },
  {
    wilayaCode: "10",
    nameFr: "Dirah",
    nameAr: "ديــرة"
  },
  {
    wilayaCode: "10",
    nameFr: "Ait Laaziz",
    nameAr: "آيت لعزيز"
  },
  {
    wilayaCode: "10",
    nameFr: "Taghzout",
    nameAr: "تاغزوت"
  },
  {
    wilayaCode: "10",
    nameFr: "Raouraoua",
    nameAr: "الروراوة"
  },
  {
    wilayaCode: "10",
    nameFr: "Mezdour",
    nameAr: "مسدور"
  },
  {
    wilayaCode: "10",
    nameFr: "Haizer",
    nameAr: "حيزر"
  },
  {
    wilayaCode: "10",
    nameFr: "Lakhdaria",
    nameAr: "الأخضرية"
  },
  {
    wilayaCode: "10",
    nameFr: "Maala",
    nameAr: "معالة"
  },
  {
    wilayaCode: "10",
    nameFr: "El Hachimia",
    nameAr: "الھاشمية"
  },
  {
    wilayaCode: "10",
    nameFr: "Aomar",
    nameAr: "أعمر"
  },
  {
    wilayaCode: "10",
    nameFr: "Chorfa",
    nameAr: "الشرفاء"
  },
  {
    wilayaCode: "10",
    nameFr: "Bordj Oukhriss",
    nameAr: "برج أوخريص"
  },
  {
    wilayaCode: "10",
    nameFr: "El Adjiba",
    nameAr: "العجيبة"
  },
  {
    wilayaCode: "10",
    nameFr: "El Hakimia",
    nameAr: "الحاكمية"
  },
  {
    wilayaCode: "10",
    nameFr: "El Khebouzia",
    nameAr: "الخبوزية"
  },
  {
    wilayaCode: "10",
    nameFr: "Ahl El Ksar",
    nameAr: "أھل القصر"
  },
  {
    wilayaCode: "10",
    nameFr: "Bouderbala",
    nameAr: "بودربالة"
  },
  {
    wilayaCode: "10",
    nameFr: "Zbarbar",
    nameAr: "زبربر"
  },
  {
    wilayaCode: "10",
    nameFr: "Ain El Hadjar",
    nameAr: "عين الحجر"
  },
  {
    wilayaCode: "10",
    nameFr: "Djebahia",
    nameAr: "الجباحية"
  },
  {
    wilayaCode: "10",
    nameFr: "Aghbalou",
    nameAr: "أغبالو"
  },
  {
    wilayaCode: "10",
    nameFr: "Taguedit",
    nameAr: "تاڨديت"
  },
  {
    wilayaCode: "10",
    nameFr: "Ain Turk",
    nameAr: "عين الترك"
  },
  {
    wilayaCode: "10",
    nameFr: "Saharidj",
    nameAr: "الصهاريج"
  },
  {
    wilayaCode: "10",
    nameFr: "Dechmia",
    nameAr: "الدشمية"
  },
  {
    wilayaCode: "10",
    nameFr: "Ridane",
    nameAr: "ريدان"
  },
  {
    wilayaCode: "10",
    nameFr: "Bechloul",
    nameAr: "بشلول"
  },
  {
    wilayaCode: "10",
    nameFr: "Boukram",
    nameAr: "بوكرام"
  },
  {
    wilayaCode: "10",
    nameFr: "Ain Bessam",
    nameAr: "عين بسام"
  },
  {
    wilayaCode: "10",
    nameFr: "Bir Ghbalou",
    nameAr: "بئر غبالو"
  },
  {
    wilayaCode: "10",
    nameFr: "Mchedallah",
    nameAr: "مشدا الله"
  },
  {
    wilayaCode: "10",
    nameFr: "Sour El Ghozlane",
    nameAr: "سور الغزلان"
  },
  {
    wilayaCode: "10",
    nameFr: "Maamora",
    nameAr: "المعمورة"
  },
  {
    wilayaCode: "10",
    nameFr: "Ouled Rached",
    nameAr: "أولاد راشد"
  },
  {
    wilayaCode: "10",
    nameFr: "Ain Laloui",
    nameAr: "عين العلوي"
  },
  {
    wilayaCode: "10",
    nameFr: "Hadjera Zerga",
    nameAr: "الحجرة الزرقاء"
  },
  {
    wilayaCode: "10",
    nameFr: "Ath Mansour",
    nameAr: "آث منصور"
  },
  {
    wilayaCode: "10",
    nameFr: "El Mokrani",
    nameAr: "المقراني"
  },
  {
    wilayaCode: "10",
    nameFr: "Oued El Berdi",
    nameAr: "وادى البردي"
  },
  {
    wilayaCode: "11",
    nameFr: "Tamanghasset",
    nameAr: "تمنراست"
  },
  {
    wilayaCode: "11",
    nameFr: "Abalessa",
    nameAr: "أبلسة"
  },
  {
    wilayaCode: "11",
    nameFr: "In Ghar",
    nameAr: "عـيـن غــار"
  },
  {
    wilayaCode: "11",
    nameFr: "In Guezzam",
    nameAr: "عين قزام"
  },
  {
    wilayaCode: "11",
    nameFr: "Idles",
    nameAr: "إدلس"
  },
  {
    wilayaCode: "11",
    nameFr: "Tazouk",
    nameAr: "تاظروك"
  },
  {
    wilayaCode: "11",
    nameFr: "Tinzaouatine",
    nameAr: "تين زاوتين"
  },
  {
    wilayaCode: "11",
    nameFr: "In Salah",
    nameAr: "عين صالح"
  },
  {
    wilayaCode: "11",
    nameFr: "In Amguel",
    nameAr: "ان أمقل"
  },
  {
    wilayaCode: "11",
    nameFr: "Foggaret Ezzaouia",
    nameAr: "فقارة الزوى"
  },
  {
    wilayaCode: "12",
    nameFr: "Tebessa",
    nameAr: "تبسة"
  },
  {
    wilayaCode: "12",
    nameFr: "Bir El Ater",
    nameAr: "بئر العاتر"
  },
  {
    wilayaCode: "12",
    nameFr: "Cheria",
    nameAr: "الــشــريــعـة"
  },
  {
    wilayaCode: "12",
    nameFr: "Stah Guentis",
    nameAr: "سطح قنطيس"
  },
  {
    wilayaCode: "12",
    nameFr: "El Aouinet",
    nameAr: "العوينات"
  },
  {
    wilayaCode: "12",
    nameFr: "Lahouidjbet",
    nameAr: "الحويجبات"
  },
  {
    wilayaCode: "12",
    nameFr: "Safsaf El Ouesra",
    nameAr: "صفصاف الوسرة"
  },
  {
    wilayaCode: "12",
    nameFr: "Hammamet",
    nameAr: "الحمامات"
  },
  {
    wilayaCode: "12",
    nameFr: "Negrine",
    nameAr: "نقرين"
  },
  {
    wilayaCode: "12",
    nameFr: "Bir El Mokadem",
    nameAr: "بــئــر مــقـدم"
  },
  {
    wilayaCode: "12",
    nameFr: "El Kouif",
    nameAr: "الكويف"
  },
  {
    wilayaCode: "12",
    nameFr: "Morsott",
    nameAr: "مرسط"
  },
  {
    wilayaCode: "12",
    nameFr: "El Ogla",
    nameAr: "العقلة"
  },
  {
    wilayaCode: "12",
    nameFr: "Bir Dheb",
    nameAr: "بٔير الذھب"
  },
  {
    wilayaCode: "12",
    nameFr: "El Ogla",
    nameAr: "العقلة"
  },
  {
    wilayaCode: "12",
    nameFr: "Gorriguer",
    nameAr: "قوريقر"
  },
  {
    wilayaCode: "12",
    nameFr: "Bekkaria",
    nameAr: "بكارية"
  },
  {
    wilayaCode: "12",
    nameFr: "Boukhadra",
    nameAr: "بوخضرة"
  },
  {
    wilayaCode: "12",
    nameFr: "Ouenza",
    nameAr: "الونزة"
  },
  {
    wilayaCode: "12",
    nameFr: "El Ma El Biodh",
    nameAr: "الماء الأبيض"
  },
  {
    wilayaCode: "12",
    nameFr: "Oum Ali",
    nameAr: "أم على"
  },
  {
    wilayaCode: "12",
    nameFr: "Tlidjene",
    nameAr: "ثليجان"
  },
  {
    wilayaCode: "12",
    nameFr: "Ain Zerga",
    nameAr: "عين الزرقاء"
  },
  {
    wilayaCode: "12",
    nameFr: "El Meridj",
    nameAr: "المريج"
  },
  {
    wilayaCode: "12",
    nameFr: "Boulhaf Dyr",
    nameAr: "بولحاف الدير"
  },
  {
    wilayaCode: "12",
    nameFr: "Bedjene",
    nameAr: "بجن"
  },
  {
    wilayaCode: "12",
    nameFr: "El Mazeraa",
    nameAr: "المزرعة"
  },
  {
    wilayaCode: "12",
    nameFr: "Ferkane",
    nameAr: "فـــــــركـــــان"
  },
  {
    wilayaCode: "13",
    nameFr: "Tlemcen",
    nameAr: "تلمسان"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Mester",
    nameAr: "بني مستار"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Tallout",
    nameAr: "عين تالوت"
  },
  {
    wilayaCode: "13",
    nameFr: "Remchi",
    nameAr: "الرمشي"
  },
  {
    wilayaCode: "13",
    nameFr: "El Fehoul",
    nameAr: "الفحول"
  },
  {
    wilayaCode: "13",
    nameFr: "Sabra",
    nameAr: "صبرة"
  },
  {
    wilayaCode: "13",
    nameFr: "Ghazaouet",
    nameAr: "الغزوات"
  },
  {
    wilayaCode: "13",
    nameFr: "Souani",
    nameAr: "السواني"
  },
  {
    wilayaCode: "13",
    nameFr: "Djebala",
    nameAr: "جبالة"
  },
  {
    wilayaCode: "13",
    nameFr: "El Gor",
    nameAr: "الغور"
  },
  {
    wilayaCode: "13",
    nameFr: "Oued Chouly",
    nameAr: "وادى الشولى"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Fezza",
    nameAr: "عين فزّة"
  },
  {
    wilayaCode: "13",
    nameFr: "Ouled Mimoun",
    nameAr: "أولاد ميمون"
  },
  {
    wilayaCode: "13",
    nameFr: "Amieur",
    nameAr: "عمير"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Youcef",
    nameAr: "عين يوسف"
  },
  {
    wilayaCode: "13",
    nameFr: "Zenata",
    nameAr: "زناتة"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Snous",
    nameAr: "بنى سنوس"
  },
  {
    wilayaCode: "13",
    nameFr: "Bab El Assa",
    nameAr: "باب العسة"
  },
  {
    wilayaCode: "13",
    nameFr: "Dar Yaghmouracene",
    nameAr: "دار يغمراسن"
  },
  {
    wilayaCode: "13",
    nameFr: "Fellaoucene",
    nameAr: "فلاوسن"
  },
  {
    wilayaCode: "13",
    nameFr: "Azails",
    nameAr: "العزايل"
  },
  {
    wilayaCode: "13",
    nameFr: "Sebbaa Chioukh",
    nameAr: "سبعة شيوخ"
  },
  {
    wilayaCode: "13",
    nameFr: "Terni Beni Hediel",
    nameAr: "تيرني بني هديل"
  },
  {
    wilayaCode: "13",
    nameFr: "Bensekrane",
    nameAr: "بن سكران"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Nehala",
    nameAr: "عين نحالة"
  },
  {
    wilayaCode: "13",
    nameFr: "Hennaya",
    nameAr: "الحناية"
  },
  {
    wilayaCode: "13",
    nameFr: "Maghnia",
    nameAr: "مغنية"
  },
  {
    wilayaCode: "13",
    nameFr: "Hammam Boughrara",
    nameAr: "حمام بوغرارة"
  },
  {
    wilayaCode: "13",
    nameFr: "Souahlia",
    nameAr: "تونان"
  },
  {
    wilayaCode: "13",
    nameFr: "Msirda Fouaga",
    nameAr: "مسيردة الفواقة"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Fetah",
    nameAr: "عين فتاح"
  },
  {
    wilayaCode: "13",
    nameFr: "El Aricha",
    nameAr: "العريشة"
  },
  {
    wilayaCode: "13",
    nameFr: "Souk Thlata",
    nameAr: "سوق الثلاثاء"
  },
  {
    wilayaCode: "13",
    nameFr: "Sidi Abdelli",
    nameAr: "سيدي العبدلي"
  },
  {
    wilayaCode: "13",
    nameFr: "Sebdou",
    nameAr: "سبدو"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Ouarsous",
    nameAr: "برج عريمة"
  },
  {
    wilayaCode: "13",
    nameFr: "Sidi Medjahed",
    nameAr: "سيدي مجاهد"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Boussaid",
    nameAr: "بني بوسعيد"
  },
  {
    wilayaCode: "13",
    nameFr: "Marsa Ben Mhidi",
    nameAr: "مرسى بن مھيدي"
  },
  {
    wilayaCode: "13",
    nameFr: "Nedroma",
    nameAr: "ندرومة"
  },
  {
    wilayaCode: "13",
    nameFr: "Sidi Djillali",
    nameAr: "سيدي الجيلالي"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Bahdel",
    nameAr: "بني بهدل"
  },
  {
    wilayaCode: "13",
    nameFr: "El Bouihi",
    nameAr: "البويھي"
  },
  {
    wilayaCode: "13",
    nameFr: "Honaine",
    nameAr: "هنين"
  },
  {
    wilayaCode: "13",
    nameFr: "Tianet",
    nameAr: "تيانت"
  },
  {
    wilayaCode: "13",
    nameFr: "Ouled Riyah",
    nameAr: "أولاد رياح"
  },
  {
    wilayaCode: "13",
    nameFr: "Bouhlou",
    nameAr: "بوحلو"
  },
  {
    wilayaCode: "13",
    nameFr: "Souk El Khemis",
    nameAr: "سوق الخميس"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Ghoraba",
    nameAr: "عين غرابة"
  },
  {
    wilayaCode: "13",
    nameFr: "Chetouane",
    nameAr: "شتوان"
  },
  {
    wilayaCode: "13",
    nameFr: "Mansourah",
    nameAr: "المنصورة"
  },
  {
    wilayaCode: "13",
    nameFr: "Beni Semiel",
    nameAr: "بني مستار"
  },
  {
    wilayaCode: "13",
    nameFr: "Ain Kebira",
    nameAr: "عين الكبيرة"
  },
  {
    wilayaCode: "14",
    nameFr: "Tiaret",
    nameAr: "تيارت‎"
  },
  {
    wilayaCode: "14",
    nameFr: "Medroussa",
    nameAr: "مدروسة"
  },
  {
    wilayaCode: "14",
    nameFr: "Ain Bouchekif",
    nameAr: "بوشقيف"
  },
  {
    wilayaCode: "14",
    nameFr: "Sidi Ali Mellal",
    nameAr: "سيدي علي ملال"
  },
  {
    wilayaCode: "14",
    nameFr: "Ain Zarit",
    nameAr: "عين زاريت"
  },
  {
    wilayaCode: "14",
    nameFr: "Ain Deheb",
    nameAr: "عين الذهب"
  },
  {
    wilayaCode: "14",
    nameFr: "Sidi Bakhti",
    nameAr: "سيدي بختي"
  },
  {
    wilayaCode: "14",
    nameFr: "Medrissa",
    nameAr: "مدريسة"
  },
  {
    wilayaCode: "14",
    nameFr: "Zmalet El Emir Aek",
    nameAr: "زمالة الأمير عبد القادر"
  },
  {
    wilayaCode: "14",
    nameFr: "Madna",
    nameAr: "مادنة"
  },
  {
    wilayaCode: "14",
    nameFr: "Sebt",
    nameAr: "السبت"
  },
  {
    wilayaCode: "14",
    nameFr: "Mellakou",
    nameAr: "ملاكو"
  },
  {
    wilayaCode: "14",
    nameFr: "Dahmouni",
    nameAr: "دحموني"
  },
  {
    wilayaCode: "14",
    nameFr: "Rahouia",
    nameAr: "رحوية"
  },
  {
    wilayaCode: "14",
    nameFr: "Mahdia",
    nameAr: "المھدية"
  },
  {
    wilayaCode: "14",
    nameFr: "Sougueur",
    nameAr: "سوقر"
  },
  {
    wilayaCode: "14",
    nameFr: "Sidi Abdelghani",
    nameAr: "سيدي عبد الغنى"
  },
  {
    wilayaCode: "14",
    nameFr: "Ain El Hadid",
    nameAr: "عين الحديد"
  },
  {
    wilayaCode: "14",
    nameFr: "Ouled Djerad",
    nameAr: "اولاد جراد"
  },
  {
    wilayaCode: "14",
    nameFr: "Naima",
    nameAr: "نعيمة"
  },
  {
    wilayaCode: "14",
    nameFr: "Meghila",
    nameAr: "مغيلة"
  },
  {
    wilayaCode: "14",
    nameFr: "Guertoufa",
    nameAr: "قرطوفة"
  },
  {
    wilayaCode: "14",
    nameFr: "Sidi Hosni",
    nameAr: "سيدي حسني"
  },
  {
    wilayaCode: "14",
    nameFr: "Djillali Ben Amar",
    nameAr: "جيلالي بن عمار"
  },
  {
    wilayaCode: "14",
    nameFr: "Sebaine",
    nameAr: "سبعين"
  },
  {
    wilayaCode: "14",
    nameFr: "Tousnina",
    nameAr: "توسنينة"
  },
  {
    wilayaCode: "14",
    nameFr: "Frenda",
    nameAr: "فرندة"
  },
  {
    wilayaCode: "14",
    nameFr: "Ain Kermes",
    nameAr: "عين كرمس"
  },
  {
    wilayaCode: "14",
    nameFr: "Ksar Chellala",
    nameAr: "قصر الشلالة"
  },
  {
    wilayaCode: "14",
    nameFr: "Rechaiga",
    nameAr: "الرشايقة"
  },
  {
    wilayaCode: "14",
    nameFr: "Nadorah",
    nameAr: "ملاكو"
  },
  {
    wilayaCode: "14",
    nameFr: "Tagdemt",
    nameAr: "تاقدمت"
  },
  {
    wilayaCode: "14",
    nameFr: "Oued Lilli",
    nameAr: "وادى ليلى"
  },
  {
    wilayaCode: "14",
    nameFr: "Mechraa Safa",
    nameAr: "مشرع الصفاء"
  },
  {
    wilayaCode: "14",
    nameFr: "Hamadia",
    nameAr: "الحمادية"
  },
  {
    wilayaCode: "14",
    nameFr: "Chehaima",
    nameAr: "شحيمة"
  },
  {
    wilayaCode: "14",
    nameFr: "Takhemaret",
    nameAr: "تاخمرت"
  },
  {
    wilayaCode: "14",
    nameFr: "Sidi Abderrahmane",
    nameAr: "سيدي عبدالرحمان"
  },
  {
    wilayaCode: "14",
    nameFr: "Serghine",
    nameAr: "سرغين"
  },
  {
    wilayaCode: "14",
    nameFr: "Bougara",
    nameAr: "بوقرة"
  },
  {
    wilayaCode: "14",
    nameFr: "Faidja",
    nameAr: "الفايجة"
  },
  {
    wilayaCode: "14",
    nameFr: "Tidda",
    nameAr: "تيدة"
  },
  {
    wilayaCode: "15",
    nameFr: "Tizi Ouzou",
    nameAr: "تيزي وزو"
  },
  {
    wilayaCode: "15",
    nameFr: "Ain El Hammam",
    nameAr: "عين الحمام"
  },
  {
    wilayaCode: "15",
    nameFr: "Akbil",
    nameAr: "أقبيل"
  },
  {
    wilayaCode: "15",
    nameFr: "Freha",
    nameAr: "فريحة"
  },
  {
    wilayaCode: "15",
    nameFr: "Souamaa",
    nameAr: "صوامع"
  },
  {
    wilayaCode: "15",
    nameFr: "Mechtrass",
    nameAr: "مشطراس"
  },
  {
    wilayaCode: "15",
    nameFr: "Irdjen",
    nameAr: "إرجن"
  },
  {
    wilayaCode: "15",
    nameFr: "Timizart",
    nameAr: "تيميزارت"
  },
  {
    wilayaCode: "15",
    nameFr: "Makouda",
    nameAr: "ماكودة"
  },
  {
    wilayaCode: "15",
    nameFr: "Draa El Mizan",
    nameAr: "ذراع الميزان"
  },
  {
    wilayaCode: "15",
    nameFr: "Tizi Ghenif",
    nameAr: "تيزي غنيف"
  },
  {
    wilayaCode: "15",
    nameFr: "Bounouh",
    nameAr: "بونوح"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Chaffaa",
    nameAr: "آيت شفعة"
  },
  {
    wilayaCode: "15",
    nameFr: "Frikat",
    nameAr: "فريقات"
  },
  {
    wilayaCode: "15",
    nameFr: "Beni Aissi",
    nameAr: "بني عيسي"
  },
  {
    wilayaCode: "15",
    nameFr: "Beni Zmenzer",
    nameAr: "أيت زمنزر"
  },
  {
    wilayaCode: "15",
    nameFr: "Iferhounene",
    nameAr: "إيفرحونن"
  },
  {
    wilayaCode: "15",
    nameFr: "Azazga",
    nameAr: "عزازقة"
  },
  {
    wilayaCode: "15",
    nameFr: "Iloula Oumalou",
    nameAr: "إيلولة أمالو"
  },
  {
    wilayaCode: "15",
    nameFr: "Yakouren",
    nameAr: "اعكورن"
  },
  {
    wilayaCode: "15",
    nameFr: "Larba Nait Irathen",
    nameAr: "الأربعاء نايت إيراثن"
  },
  {
    wilayaCode: "15",
    nameFr: "Tizi Rached",
    nameAr: "تيزي راشد"
  },
  {
    wilayaCode: "15",
    nameFr: "Zekri",
    nameAr: "زكري"
  },
  {
    wilayaCode: "15",
    nameFr: "Ouaguenoun",
    nameAr: "واقنون"
  },
  {
    wilayaCode: "15",
    nameFr: "Ain Zaouia",
    nameAr: "عين الزاوية"
  },
  {
    wilayaCode: "15",
    nameFr: "Mkira",
    nameAr: "مكيرة"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Yahia",
    nameAr: "أيت يحي"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Mahmoud",
    nameAr: "أيت محمود"
  },
  {
    wilayaCode: "15",
    nameFr: "Maatka",
    nameAr: "المعاتقة"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Boumehdi",
    nameAr: "آيت بومھدى"
  },
  {
    wilayaCode: "15",
    nameFr: "Abi Youcef",
    nameAr: "أبي يوسف"
  },
  {
    wilayaCode: "15",
    nameFr: "Beni Douala",
    nameAr: "بني دوالة"
  },
  {
    wilayaCode: "15",
    nameFr: "Illilten",
    nameAr: "إليلتن"
  },
  {
    wilayaCode: "15",
    nameFr: "Bouzguen",
    nameAr: "بوزقن"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Aggouacha",
    nameAr: "أيت أقواشة"
  },
  {
    wilayaCode: "15",
    nameFr: "Ouadhia",
    nameAr: "واضية"
  },
  {
    wilayaCode: "15",
    nameFr: "Azzefoun",
    nameAr: "أزفون"
  },
  {
    wilayaCode: "15",
    nameFr: "Tigzirt",
    nameAr: "تقزيرت"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Aissa Mimoun",
    nameAr: "آيت عيسى ميمون"
  },
  {
    wilayaCode: "15",
    nameFr: "Boghni",
    nameAr: "بوغني"
  },
  {
    wilayaCode: "15",
    nameFr: "Ifigha",
    nameAr: "ايفيغاء"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Oumalou",
    nameAr: "آيت أومالو"
  },
  {
    wilayaCode: "15",
    nameFr: "Tirmitine",
    nameAr: "ترمتين"
  },
  {
    wilayaCode: "15",
    nameFr: "Akerrou",
    nameAr: "أقرو"
  },
  {
    wilayaCode: "15",
    nameFr: "Yatafen",
    nameAr: "يطافن"
  },
  {
    wilayaCode: "15",
    nameFr: "Beni Ziki",
    nameAr: "بنى زيكى"
  },
  {
    wilayaCode: "15",
    nameFr: "Draa Ben Khedda",
    nameAr: "ذراع بن خدة"
  },
  {
    wilayaCode: "15",
    nameFr: "Ouacif",
    nameAr: "واسيف"
  },
  {
    wilayaCode: "15",
    nameFr: "Idjeur",
    nameAr: "آجر"
  },
  {
    wilayaCode: "15",
    nameFr: "Mekla",
    nameAr: "مقلع"
  },
  {
    wilayaCode: "15",
    nameFr: "Tizi Nthlata",
    nameAr: "تيزي نثلاثة"
  },
  {
    wilayaCode: "15",
    nameFr: "Beni Yenni",
    nameAr: "بني يني"
  },
  {
    wilayaCode: "15",
    nameFr: "Aghrib",
    nameAr: "أغريب"
  },
  {
    wilayaCode: "15",
    nameFr: "Iflissen",
    nameAr: "إفليسن"
  },
  {
    wilayaCode: "15",
    nameFr: "Boudjima",
    nameAr: "بوجيمة"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Yahia Moussa",
    nameAr: "أيت يحي موسى"
  },
  {
    wilayaCode: "15",
    nameFr: "Souk El Thenine",
    nameAr: "سوق الإثنين"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Khelil",
    nameAr: "أيت خليلي"
  },
  {
    wilayaCode: "15",
    nameFr: "Sidi Naamane",
    nameAr: "سيدي نعمان"
  },
  {
    wilayaCode: "15",
    nameFr: "Iboudraren",
    nameAr: "أبودرارن"
  },
  {
    wilayaCode: "15",
    nameFr: "Agouni Gueghrane",
    nameAr: "آقنى قغران"
  },
  {
    wilayaCode: "15",
    nameFr: "Mizrana",
    nameAr: "مزرانة"
  },
  {
    wilayaCode: "15",
    nameFr: "Imsouhal",
    nameAr: "إمسوحال"
  },
  {
    wilayaCode: "15",
    nameFr: "Tadmait",
    nameAr: "تادمايت"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Bouadou",
    nameAr: "أيت بوعدو"
  },
  {
    wilayaCode: "15",
    nameFr: "Assi Youcef",
    nameAr: "أسي يوسف"
  },
  {
    wilayaCode: "15",
    nameFr: "Ait Toudert",
    nameAr: "أيت تودرت"
  },
  {
    wilayaCode: "16",
    nameFr: "Alger Centre",
    nameAr: "الجزائر الوسطى"
  },
  {
    wilayaCode: "16",
    nameFr: "Sidi Mhamed",
    nameAr: "سيدي امحمد"
  },
  {
    wilayaCode: "16",
    nameFr: "El Madania",
    nameAr: "المدنية"
  },
  {
    wilayaCode: "16",
    nameFr: "Belouizdad",
    nameAr: "بلوزداد"
  },
  {
    wilayaCode: "16",
    nameFr: "Bab El Oued",
    nameAr: "باب الواد"
  },
  {
    wilayaCode: "16",
    nameFr: "Bologhine",
    nameAr: "بولوغين"
  },
  {
    wilayaCode: "16",
    nameFr: "Casbah",
    nameAr: "القصبة"
  },
  {
    wilayaCode: "16",
    nameFr: "Oued Koriche",
    nameAr: "وادي قريش"
  },
  {
    wilayaCode: "16",
    nameFr: "Bir Mourad Rais",
    nameAr: "بير مراد رايس"
  },
  {
    wilayaCode: "16",
    nameFr: "El Biar",
    nameAr: "الآبيار"
  },
  {
    wilayaCode: "16",
    nameFr: "Bouzareah",
    nameAr: "بوزريعة"
  },
  {
    wilayaCode: "16",
    nameFr: "Birkhadem",
    nameAr: "بئر خادم"
  },
  {
    wilayaCode: "16",
    nameFr: "El Harrach",
    nameAr: "الحراش"
  },
  {
    wilayaCode: "16",
    nameFr: "Baraki",
    nameAr: "براقي"
  },
  {
    wilayaCode: "16",
    nameFr: "Oued Smar",
    nameAr: "وادي سمار"
  },
  {
    wilayaCode: "16",
    nameFr: "Bourouba",
    nameAr: "بوروبة"
  },
  {
    wilayaCode: "16",
    nameFr: "Hussein Dey",
    nameAr: "حسين داي"
  },
  {
    wilayaCode: "16",
    nameFr: "Kouba",
    nameAr: "القبة"
  },
  {
    wilayaCode: "16",
    nameFr: "Bachedjerah",
    nameAr: "باش جراح"
  },
  {
    wilayaCode: "16",
    nameFr: "Dar El Beida",
    nameAr: "الدار البيضاء"
  },
  {
    wilayaCode: "16",
    nameFr: "Bab Azzouar",
    nameAr: "باب الزوار"
  },
  {
    wilayaCode: "16",
    nameFr: "Ben Aknoun",
    nameAr: "بن عكنون"
  },
  {
    wilayaCode: "16",
    nameFr: "Dely Ibrahim",
    nameAr: "دالي ابراهيم"
  },
  {
    wilayaCode: "16",
    nameFr: "El Hammamet",
    nameAr: "الحمامات"
  },
  {
    wilayaCode: "16",
    nameFr: "Rais Hamidou",
    nameAr: "الرايس حميدو"
  },
  {
    wilayaCode: "16",
    nameFr: "Djasr Kasentina",
    nameAr: "جسر قسنطينة"
  },
  {
    wilayaCode: "16",
    nameFr: "El Mouradia",
    nameAr: "المرادية"
  },
  {
    wilayaCode: "16",
    nameFr: "Hydra",
    nameAr: "حيدرة"
  },
  {
    wilayaCode: "16",
    nameFr: "Mohammadia",
    nameAr: "المحمدية"
  },
  {
    wilayaCode: "16",
    nameFr: "Bordj El Kiffan",
    nameAr: "برج الكيفان"
  },
  {
    wilayaCode: "16",
    nameFr: "El Magharia",
    nameAr: "المقرية"
  },
  {
    wilayaCode: "16",
    nameFr: "Beni Messous",
    nameAr: "بني مسوس"
  },
  {
    wilayaCode: "16",
    nameFr: "Les Eucalyptus",
    nameAr: "الكليتوس"
  },
  {
    wilayaCode: "16",
    nameFr: "Birtouta",
    nameAr: "بئر توتة"
  },
  {
    wilayaCode: "16",
    nameFr: "Tassala El Merdja",
    nameAr: "تسالة المرجة"
  },
  {
    wilayaCode: "16",
    nameFr: "Ouled Chebel",
    nameAr: "أولاد الشبل"
  },
  {
    wilayaCode: "16",
    nameFr: "Sidi Moussa",
    nameAr: "سيدي موسى"
  },
  {
    wilayaCode: "16",
    nameFr: "Ain Taya",
    nameAr: "عين طاية"
  },
  {
    wilayaCode: "16",
    nameFr: "Bordj El Bahri",
    nameAr: "برج البحري"
  },
  {
    wilayaCode: "16",
    nameFr: "Marsa",
    nameAr: "المرسى"
  },
  {
    wilayaCode: "16",
    nameFr: "Haraoua",
    nameAr: "هراوة"
  },
  {
    wilayaCode: "16",
    nameFr: "Rouiba",
    nameAr: "رويبة"
  },
  {
    wilayaCode: "16",
    nameFr: "Reghaia",
    nameAr: "الرغاية"
  },
  {
    wilayaCode: "16",
    nameFr: "Ain Benian",
    nameAr: "عين بنيان"
  },
  {
    wilayaCode: "16",
    nameFr: "Staoueli",
    nameAr: "سطاوالي"
  },
  {
    wilayaCode: "16",
    nameFr: "Zeralda",
    nameAr: "زرالدة"
  },
  {
    wilayaCode: "16",
    nameFr: "Mahelma",
    nameAr: "محالمة"
  },
  {
    wilayaCode: "16",
    nameFr: "Rahmania",
    nameAr: "رحمانية"
  },
  {
    wilayaCode: "16",
    nameFr: "Souidania",
    nameAr: "سويدانية"
  },
  {
    wilayaCode: "16",
    nameFr: "Cheraga",
    nameAr: "شراقة"
  },
  {
    wilayaCode: "16",
    nameFr: "Ouled Fayet",
    nameAr: "أولاد فايت"
  },
  {
    wilayaCode: "16",
    nameFr: "El Achour",
    nameAr: "العاشور"
  },
  {
    wilayaCode: "16",
    nameFr: "Draria",
    nameAr: "درارية"
  },
  {
    wilayaCode: "16",
    nameFr: "Douera",
    nameAr: "دويرة"
  },
  {
    wilayaCode: "16",
    nameFr: "Baba Hassen",
    nameAr: "بابا حسن"
  },
  {
    wilayaCode: "16",
    nameFr: "Khracia",
    nameAr: "خرايسية"
  },
  {
    wilayaCode: "16",
    nameFr: "Saoula",
    nameAr: "السحاولة"
  },
  {
    wilayaCode: "17",
    nameFr: "Djelfa",
    nameAr: "الجلفة"
  },
  {
    wilayaCode: "17",
    nameFr: "Moudjebara",
    nameAr: "مجبرة"
  },
  {
    wilayaCode: "17",
    nameFr: "El Guedid",
    nameAr: "القديد"
  },
  {
    wilayaCode: "17",
    nameFr: "Hassi Bahbah",
    nameAr: "حاسي بحبح"
  },
  {
    wilayaCode: "17",
    nameFr: "Ain Maabed",
    nameAr: "عين معبد"
  },
  {
    wilayaCode: "17",
    nameFr: "Sed Rahal",
    nameAr: "سد رحال"
  },
  {
    wilayaCode: "17",
    nameFr: "Feidh El Botma",
    nameAr: "فيض البطمة"
  },
  {
    wilayaCode: "17",
    nameFr: "Birine",
    nameAr: "البيرين"
  },
  {
    wilayaCode: "17",
    nameFr: "Bouira Lahdeb",
    nameAr: "بويرة الأحداب"
  },
  {
    wilayaCode: "17",
    nameFr: "Zaccar",
    nameAr: "زكار"
  },
  {
    wilayaCode: "17",
    nameFr: "El Khemis",
    nameAr: "الخميس"
  },
  {
    wilayaCode: "17",
    nameFr: "Sidi Baizid",
    nameAr: "سيدي بايزيد"
  },
  {
    wilayaCode: "17",
    nameFr: "M'Liliha",
    nameAr: "المليليحة"
  },
  {
    wilayaCode: "17",
    nameFr: "El Idrissia",
    nameAr: "الإدريسية"
  },
  {
    wilayaCode: "17",
    nameFr: "Douis",
    nameAr: "الدويس"
  },
  {
    wilayaCode: "17",
    nameFr: "Hassi El Euch",
    nameAr: "حاسي العش"
  },
  {
    wilayaCode: "17",
    nameFr: "Messaad",
    nameAr: "مسعد"
  },
  {
    wilayaCode: "17",
    nameFr: "Guettara",
    nameAr: "قتارة"
  },
  {
    wilayaCode: "17",
    nameFr: "Sidi Ladjel",
    nameAr: "سيدي لعجال"
  },
  {
    wilayaCode: "17",
    nameFr: "Had Sahary",
    nameAr: "حد الصحاري"
  },
  {
    wilayaCode: "17",
    nameFr: "Guernini",
    nameAr: "القرنيني"
  },
  {
    wilayaCode: "17",
    nameFr: "Selmana",
    nameAr: "سلمانة"
  },
  {
    wilayaCode: "17",
    nameFr: "Ain Chouhada",
    nameAr: "عين الشهداء"
  },
  {
    wilayaCode: "17",
    nameFr: "Oum Laadham",
    nameAr: "ام العظام"
  },
  {
    wilayaCode: "17",
    nameFr: "Dar Chouikh",
    nameAr: "دار الشيوخ"
  },
  {
    wilayaCode: "17",
    nameFr: "Charef",
    nameAr: "الشارف"
  },
  {
    wilayaCode: "17",
    nameFr: "Beni Yacoub",
    nameAr: "بن يعقوب"
  },
  {
    wilayaCode: "17",
    nameFr: "Zaafrane",
    nameAr: "الزعفران"
  },
  {
    wilayaCode: "17",
    nameFr: "Deldoul",
    nameAr: "دلدول"
  },
  {
    wilayaCode: "17",
    nameFr: "Ain El Ibel",
    nameAr: "عين الابل"
  },
  {
    wilayaCode: "17",
    nameFr: "Ain Oussera",
    nameAr: "عين وسارة"
  },
  {
    wilayaCode: "17",
    nameFr: "Benhar",
    nameAr: "بنهار"
  },
  {
    wilayaCode: "17",
    nameFr: "Hassi Fedoul",
    nameAr: "حاسي فدول"
  },
  {
    wilayaCode: "17",
    nameFr: "Amourah",
    nameAr: "عمورة"
  },
  {
    wilayaCode: "17",
    nameFr: "Ain Fekka",
    nameAr: "عين افقة"
  },
  {
    wilayaCode: "17",
    nameFr: "Tadmit",
    nameAr: "تعضميت"
  },
  {
    wilayaCode: "18",
    nameFr: "Jijel",
    nameAr: "جيجل"
  },
  {
    wilayaCode: "18",
    nameFr: "Erraguene",
    nameAr: "إراڨن"
  },
  {
    wilayaCode: "18",
    nameFr: "El Aouana",
    nameAr: "العوانة"
  },
  {
    wilayaCode: "18",
    nameFr: "Ziamma Mansouriah",
    nameAr: "زيامة منصورية"
  },
  {
    wilayaCode: "18",
    nameFr: "Taher",
    nameAr: "الطاهير"
  },
  {
    wilayaCode: "18",
    nameFr: "Emir Abdelkader",
    nameAr: "الامير عبد القادر"
  },
  {
    wilayaCode: "18",
    nameFr: "Chekfa",
    nameAr: "الشقفة"
  },
  {
    wilayaCode: "18",
    nameFr: "Chahna",
    nameAr: "الشحنة"
  },
  {
    wilayaCode: "18",
    nameFr: "El Milia",
    nameAr: "الميلية"
  },
  {
    wilayaCode: "18",
    nameFr: "Sidi Maarouf",
    nameAr: "سيدي معروف"
  },
  {
    wilayaCode: "18",
    nameFr: "Settara",
    nameAr: "السطارة"
  },
  {
    wilayaCode: "18",
    nameFr: "El Ancer",
    nameAr: "العنصر"
  },
  {
    wilayaCode: "18",
    nameFr: "Sidi Abdelaziz",
    nameAr: "سيدي عبد العزيز"
  },
  {
    wilayaCode: "18",
    nameFr: "Kaous",
    nameAr: "قاوس"
  },
  {
    wilayaCode: "18",
    nameFr: "Ghebala",
    nameAr: "غبالة"
  },
  {
    wilayaCode: "18",
    nameFr: "Bouraoui Belhadef",
    nameAr: "بوراوي بلهادف"
  },
  {
    wilayaCode: "18",
    nameFr: "Djmila",
    nameAr: "جيملة"
  },
  {
    wilayaCode: "18",
    nameFr: "Selma Benziada",
    nameAr: "سلمى بن زيادة"
  },
  {
    wilayaCode: "18",
    nameFr: "Boussif Ouled Askeur",
    nameAr: "أولاد عسكر"
  },
  {
    wilayaCode: "18",
    nameFr: "El Kennar Nouchfi",
    nameAr: "القنار"
  },
  {
    wilayaCode: "18",
    nameFr: "Ouled Yahia Khadrouch",
    nameAr: "اولاد يحيى"
  },
  {
    wilayaCode: "18",
    nameFr: "Boudria Beni Yadjis",
    nameAr: "بودريعة بن ياجيس"
  },
  {
    wilayaCode: "18",
    nameFr: "Kemir Oued Adjoul",
    nameAr: "بني بلعيد"
  },
  {
    wilayaCode: "18",
    nameFr: "Texena",
    nameAr: "تاكسنة"
  },
  {
    wilayaCode: "18",
    nameFr: "Djemaa Beni Habibi",
    nameAr: "الجمعة بني حبيبي"
  },
  {
    wilayaCode: "18",
    nameFr: "Bordj T'her",
    nameAr: "برج الطهر"
  },
  {
    wilayaCode: "18",
    nameFr: "Ouled Rabah",
    nameAr: "ولاد رابح"
  },
  {
    wilayaCode: "18",
    nameFr: "Ouadjana",
    nameAr: "وجانة"
  },
  {
    wilayaCode: "19",
    nameFr: "Setif",
    nameAr: "سطيف‎"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain El Kebira",
    nameAr: "عين الكبيرة"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Aziz",
    nameAr: "بني عزيز"
  },
  {
    wilayaCode: "19",
    nameFr: "Ouled Sidi Ahmed",
    nameAr: "أولاد سي أحمد"
  },
  {
    wilayaCode: "19",
    nameFr: "Boutaleb",
    nameAr: "بوطالب"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Roua",
    nameAr: "عين الروى"
  },
  {
    wilayaCode: "19",
    nameFr: "Draa Kebila",
    nameAr: "ذراع قبيلة"
  },
  {
    wilayaCode: "19",
    nameFr: "Bir El Arch",
    nameAr: "بئر العرش"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Chebana",
    nameAr: "بني شبانة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ouled Tebben",
    nameAr: "أولاد تبــان"
  },
  {
    wilayaCode: "19",
    nameFr: "Hamma",
    nameAr: "حــامة"
  },
  {
    wilayaCode: "19",
    nameFr: "Maaouia",
    nameAr: "معـاويـة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Legraj",
    nameAr: "عين لڨراج"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Abessa",
    nameAr: "عين عباسـة"
  },
  {
    wilayaCode: "19",
    nameFr: "Dehamcha",
    nameAr: "الدهامشة"
  },
  {
    wilayaCode: "19",
    nameFr: "Babor",
    nameAr: "بابور"
  },
  {
    wilayaCode: "19",
    nameFr: "Guidjel",
    nameAr: "قجــال"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Lahdjar",
    nameAr: "عين لحجـر"
  },
  {
    wilayaCode: "19",
    nameFr: "Bousselam",
    nameAr: "بوسلام"
  },
  {
    wilayaCode: "19",
    nameFr: "El Eulma",
    nameAr: "العلمة"
  },
  {
    wilayaCode: "19",
    nameFr: "Djemila",
    nameAr: "جميلـة"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Ouartilane",
    nameAr: "بني ورتيلان"
  },
  {
    wilayaCode: "19",
    nameFr: "Rosfa",
    nameAr: "الرصفة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ouled Addouane",
    nameAr: "أولاد عدوان"
  },
  {
    wilayaCode: "19",
    nameFr: "Belaa",
    nameAr: "البلاعة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Arnat",
    nameAr: "عين أرنـات"
  },
  {
    wilayaCode: "19",
    nameFr: "Amoucha",
    nameAr: "عموشة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Oulmane",
    nameAr: "عين ولمان"
  },
  {
    wilayaCode: "19",
    nameFr: "Beidha Bordj",
    nameAr: "بيضاء برج"
  },
  {
    wilayaCode: "19",
    nameFr: "Bouandas",
    nameAr: "بوعنداس"
  },
  {
    wilayaCode: "19",
    nameFr: "Bazer Sakhra",
    nameAr: "بازر الصخرة"
  },
  {
    wilayaCode: "19",
    nameFr: "Hammam Essokhna",
    nameAr: "حمــام السخنة"
  },
  {
    wilayaCode: "19",
    nameFr: "Mezloug",
    nameAr: "مزلوق"
  },
  {
    wilayaCode: "19",
    nameFr: "Bir Haddada",
    nameAr: "بئر حدادة"
  },
  {
    wilayaCode: "19",
    nameFr: "Serdj El Ghoul",
    nameAr: "سرج الغول"
  },
  {
    wilayaCode: "19",
    nameFr: "Harbil",
    nameAr: "حربيل"
  },
  {
    wilayaCode: "19",
    nameFr: "El Ouricia",
    nameAr: "الأورسية"
  },
  {
    wilayaCode: "19",
    nameFr: "Tizi Nbechar",
    nameAr: "تيزي نبشار"
  },
  {
    wilayaCode: "19",
    nameFr: "Salah Bey",
    nameAr: "صـالح باي"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Azal",
    nameAr: "عين أزال"
  },
  {
    wilayaCode: "19",
    nameFr: "Guenzet",
    nameAr: "ڨنزات"
  },
  {
    wilayaCode: "19",
    nameFr: "Talaifacene",
    nameAr: "تالة إيفاسن"
  },
  {
    wilayaCode: "19",
    nameFr: "Bougaa",
    nameAr: "بوقاعـة"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Fouda",
    nameAr: "بني فودة"
  },
  {
    wilayaCode: "19",
    nameFr: "Tachouda",
    nameAr: "تاشودة"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Mouhli",
    nameAr: "إيث موحلي"
  },
  {
    wilayaCode: "19",
    nameFr: "Ouled Sabor",
    nameAr: "أولاد صـابر"
  },
  {
    wilayaCode: "19",
    nameFr: "Guellal",
    nameAr: "قلال"
  },
  {
    wilayaCode: "19",
    nameFr: "Ain Sebt",
    nameAr: "عين السبت"
  },
  {
    wilayaCode: "19",
    nameFr: "Hammam Guergour",
    nameAr: "حمام قرقور"
  },
  {
    wilayaCode: "19",
    nameFr: "Ait Naoual Mezada",
    nameAr: "آيت نوال مزادة"
  },
  {
    wilayaCode: "19",
    nameFr: "Ksar El Abtal",
    nameAr: "قصرالأبطال"
  },
  {
    wilayaCode: "19",
    nameFr: "Beni Hocine",
    nameAr: "بني حسين"
  },
  {
    wilayaCode: "19",
    nameFr: "Ait Tizi",
    nameAr: "آيت تيزي"
  },
  {
    wilayaCode: "19",
    nameFr: "Maouklane",
    nameAr: "موكلان"
  },
  {
    wilayaCode: "19",
    nameFr: "Guelta Zerka",
    nameAr: "القلتة الزرقاء"
  },
  {
    wilayaCode: "19",
    nameFr: "Oued El Barad",
    nameAr: "واد البارد"
  },
  {
    wilayaCode: "19",
    nameFr: "Taya",
    nameAr: "طاية"
  },
  {
    wilayaCode: "19",
    nameFr: "El Ouldja",
    nameAr: "الولجـة"
  },
  {
    wilayaCode: "19",
    nameFr: "Tella",
    nameAr: "التلة"
  },
  {
    wilayaCode: "20",
    nameFr: "Saida",
    nameAr: "سعيدة"
  },
  {
    wilayaCode: "20",
    nameFr: "Doui Thabet",
    nameAr: "دوى ثابت"
  },
  {
    wilayaCode: "20",
    nameFr: "Ain El Hadjar",
    nameAr: "عين الحجر"
  },
  {
    wilayaCode: "20",
    nameFr: "Ouled Khaled",
    nameAr: "أولاد خالد"
  },
  {
    wilayaCode: "20",
    nameFr: "Moulay Larbi",
    nameAr: "موالي العربي"
  },
  {
    wilayaCode: "20",
    nameFr: "Youb",
    nameAr: "يوب"
  },
  {
    wilayaCode: "20",
    nameFr: "Hounet",
    nameAr: "هونت"
  },
  {
    wilayaCode: "20",
    nameFr: "Sidi Amar",
    nameAr: "يدي عمر"
  },
  {
    wilayaCode: "20",
    nameFr: "Sidi Boubekeur",
    nameAr: "سيدي بوبكر"
  },
  {
    wilayaCode: "20",
    nameFr: "El Hassasna",
    nameAr: "حساسنة"
  },
  {
    wilayaCode: "20",
    nameFr: "Maamora",
    nameAr: "معمورة"
  },
  {
    wilayaCode: "20",
    nameFr: "Sidi Ahmed",
    nameAr: "سيدي أحمد"
  },
  {
    wilayaCode: "20",
    nameFr: "Ain Sekhouna",
    nameAr: "العين السخونة"
  },
  {
    wilayaCode: "20",
    nameFr: "Ouled Brahim",
    nameAr: "أولاد ابراھيم"
  },
  {
    wilayaCode: "20",
    nameFr: "Tircine",
    nameAr: "تيرسين"
  },
  {
    wilayaCode: "20",
    nameFr: "Ain Soltane",
    nameAr: "عين السلطان"
  },
  {
    wilayaCode: "21",
    nameFr: "Skikda",
    nameAr: "سكيكدة"
  },
  {
    wilayaCode: "21",
    nameFr: "Ain Zouit",
    nameAr: "عين زويت"
  },
  {
    wilayaCode: "21",
    nameFr: "El Hadaik",
    nameAr: "الحدايق"
  },
  {
    wilayaCode: "21",
    nameFr: "Azzaba",
    nameAr: "عزابة"
  },
  {
    wilayaCode: "21",
    nameFr: "Djendel",
    nameAr: "جندل"
  },
  {
    wilayaCode: "21",
    nameFr: "Ain Cherchar",
    nameAr: "عين شرشار"
  },
  {
    wilayaCode: "21",
    nameFr: "Bekkouche Lakhdar",
    nameAr: "بكوش لخضر"
  },
  {
    wilayaCode: "21",
    nameFr: "Ben Azzouz",
    nameAr: "بن عزوز"
  },
  {
    wilayaCode: "21",
    nameFr: "Es Sebt",
    nameAr: "السبت"
  },
  {
    wilayaCode: "21",
    nameFr: "Collo",
    nameAr: "القل"
  },
  {
    wilayaCode: "21",
    nameFr: "Beni Zid",
    nameAr: "بنى زيد"
  },
  {
    wilayaCode: "21",
    nameFr: "Kerkera",
    nameAr: "كركرة"
  },
  {
    wilayaCode: "21",
    nameFr: "Ouled Attia",
    nameAr: "أولاد عطية"
  },
  {
    wilayaCode: "21",
    nameFr: "Oued Zehour",
    nameAr: "وادي الزهور"
  },
  {
    wilayaCode: "21",
    nameFr: "Zitouna",
    nameAr: "الزيتونة"
  },
  {
    wilayaCode: "21",
    nameFr: "El Harrouch",
    nameAr: "الحروش"
  },
  {
    wilayaCode: "21",
    nameFr: "Zerdazas",
    nameAr: "زردازة"
  },
  {
    wilayaCode: "21",
    nameFr: "Ouled Hebaba",
    nameAr: "أولاد حبابة"
  },
  {
    wilayaCode: "21",
    nameFr: "Sidi Mezghiche",
    nameAr: "سيدي مزغيش"
  },
  {
    wilayaCode: "21",
    nameFr: "Emdjez Edchich",
    nameAr: "مجاز الدشيش"
  },
  {
    wilayaCode: "21",
    nameFr: "Beni Oulbane",
    nameAr: "بني والبان"
  },
  {
    wilayaCode: "21",
    nameFr: "Ain Bouziane",
    nameAr: "عين بوزيان"
  },
  {
    wilayaCode: "21",
    nameFr: "Ramdane Djamel",
    nameAr: "رمضان جمال"
  },
  {
    wilayaCode: "21",
    nameFr: "Beni Bachir",
    nameAr: "بني بشير"
  },
  {
    wilayaCode: "21",
    nameFr: "Salah Bouchaour",
    nameAr: "صالح بوالشعور"
  },
  {
    wilayaCode: "21",
    nameFr: "Tamalous",
    nameAr: "تمالوس"
  },
  {
    wilayaCode: "21",
    nameFr: "Ain Kechra",
    nameAr: "عين قشرة"
  },
  {
    wilayaCode: "21",
    nameFr: "Oum Toub",
    nameAr: "أم الطوب"
  },
  {
    wilayaCode: "21",
    nameFr: "Bein El Ouiden",
    nameAr: "بين الويدان"
  },
  {
    wilayaCode: "21",
    nameFr: "Filfila",
    nameAr: "فلفلة"
  },
  {
    wilayaCode: "21",
    nameFr: "Cheraia",
    nameAr: "الشرايع"
  },
  {
    wilayaCode: "21",
    nameFr: "Kanoua",
    nameAr: "قنواع"
  },
  {
    wilayaCode: "21",
    nameFr: "El Ghedir",
    nameAr: "الغدير"
  },
  {
    wilayaCode: "21",
    nameFr: "Bouchtata",
    nameAr: "بوشطاطة"
  },
  {
    wilayaCode: "21",
    nameFr: "Ouldja Boulbalout",
    nameAr: "الولجة بو البلوط"
  },
  {
    wilayaCode: "21",
    nameFr: "Kheneg Mayoum",
    nameAr: "خنق مايوم"
  },
  {
    wilayaCode: "21",
    nameFr: "Hamadi Krouma",
    nameAr: "حمادي كرومة"
  },
  {
    wilayaCode: "21",
    nameFr: "El Marsa",
    nameAr: "المرسى"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Bel Abbes",
    nameAr: "سيدي بلعباس"
  },
  {
    wilayaCode: "22",
    nameFr: "Tessala",
    nameAr: "تسالة"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Brahim",
    nameAr: "سيدي ابراهيم"
  },
  {
    wilayaCode: "22",
    nameFr: "Mostefa Ben Brahim",
    nameAr: "مصطفى بن ابراهيم"
  },
  {
    wilayaCode: "22",
    nameFr: "Telagh",
    nameAr: "تلاغ"
  },
  {
    wilayaCode: "22",
    nameFr: "Mezaourou",
    nameAr: "مزاورو"
  },
  {
    wilayaCode: "22",
    nameFr: "Boukhanafis",
    nameAr: "بوخنفيس"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Ali Boussidi",
    nameAr: "سيدي علي بوسيدي"
  },
  {
    wilayaCode: "22",
    nameFr: "Badredine El Mokrani",
    nameAr: "بدر الدين المقراني"
  },
  {
    wilayaCode: "22",
    nameFr: "Marhoum",
    nameAr: "مرحوم"
  },
  {
    wilayaCode: "22",
    nameFr: "Tafissour",
    nameAr: "تفسور"
  },
  {
    wilayaCode: "22",
    nameFr: "Amarnas",
    nameAr: "العمارنة"
  },
  {
    wilayaCode: "22",
    nameFr: "Tilmouni",
    nameAr: "تلموني"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Lahcene",
    nameAr: "سيدي لحسن"
  },
  {
    wilayaCode: "22",
    nameFr: "Ain Thrid",
    nameAr: "عين التريد"
  },
  {
    wilayaCode: "22",
    nameFr: "Makedra",
    nameAr: "مكدرة"
  },
  {
    wilayaCode: "22",
    nameFr: "Tenira",
    nameAr: "تنيرة"
  },
  {
    wilayaCode: "22",
    nameFr: "Moulay Slissen",
    nameAr: "مولاي سليسن"
  },
  {
    wilayaCode: "22",
    nameFr: "El Hacaiba",
    nameAr: "الحصيبة"
  },
  {
    wilayaCode: "22",
    nameFr: "Hassi Zehana",
    nameAr: "حاسي زهانة"
  },
  {
    wilayaCode: "22",
    nameFr: "Tabia",
    nameAr: "طابية"
  },
  {
    wilayaCode: "22",
    nameFr: "Merine",
    nameAr: "مرين"
  },
  {
    wilayaCode: "22",
    nameFr: "Ras El Ma",
    nameAr: "رأس الماء"
  },
  {
    wilayaCode: "22",
    nameFr: "Ain Tindamine",
    nameAr: "عين تندامين"
  },
  {
    wilayaCode: "22",
    nameFr: "Ain Kada",
    nameAr: "عين قادة"
  },
  {
    wilayaCode: "22",
    nameFr: "Mcid",
    nameAr: "مسيد"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Khaled",
    nameAr: "سيدي خالد"
  },
  {
    wilayaCode: "22",
    nameFr: "Ain El Berd",
    nameAr: "عين البرد"
  },
  {
    wilayaCode: "22",
    nameFr: "Sfissef",
    nameAr: "سفيزف"
  },
  {
    wilayaCode: "22",
    nameFr: "Ain Adden",
    nameAr: "عين عدان"
  },
  {
    wilayaCode: "22",
    nameFr: "Oued Taourira",
    nameAr: "واد تاوريرة"
  },
  {
    wilayaCode: "22",
    nameFr: "Dhaya",
    nameAr: "الظاية"
  },
  {
    wilayaCode: "22",
    nameFr: "Zerouala",
    nameAr: "زروالة"
  },
  {
    wilayaCode: "22",
    nameFr: "Lamtar",
    nameAr: "لمطار"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Chaib",
    nameAr: "سيدي شعيب"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Dahou",
    nameAr: "سيدي دحو"
  },
  {
    wilayaCode: "22",
    nameFr: "Oued Sbaa",
    nameAr: "واد السبع"
  },
  {
    wilayaCode: "22",
    nameFr: "Boudjebaa El Bordj",
    nameAr: "بوجبهة البرج"
  },
  {
    wilayaCode: "22",
    nameFr: "Sehala Thaoura",
    nameAr: "سهالة الثورة"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Yacoub",
    nameAr: "سيدي يعقوب"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Hamadouche",
    nameAr: "سيدي حمادوش"
  },
  {
    wilayaCode: "22",
    nameFr: "Belarbi",
    nameAr: "بلعربي"
  },
  {
    wilayaCode: "22",
    nameFr: "Oued Sefioun",
    nameAr: "واد سفيون"
  },
  {
    wilayaCode: "22",
    nameFr: "Teghalimet",
    nameAr: "تغاليمت"
  },
  {
    wilayaCode: "22",
    nameFr: "Ben Badis",
    nameAr: "ابن باديس"
  },
  {
    wilayaCode: "22",
    nameFr: "Sidi Ali Benyoub",
    nameAr: "سيدي علي بن يوب"
  },
  {
    wilayaCode: "22",
    nameFr: "Chetouane Belaila",
    nameAr: "شطوان بلايلة"
  },
  {
    wilayaCode: "22",
    nameFr: "Bir El Hammam",
    nameAr: "بئر الحمام"
  },
  {
    wilayaCode: "22",
    nameFr: "Taoudmout",
    nameAr: "تاودموت"
  },
  {
    wilayaCode: "22",
    nameFr: "Redjem Demouche",
    nameAr: "رجم دموش"
  },
  {
    wilayaCode: "22",
    nameFr: "Benachiba Chelia",
    nameAr: "بن عشيبة شلية"
  },
  {
    wilayaCode: "22",
    nameFr: "Hassi Dahou",
    nameAr: "حاسي دحو"
  },
  {
    wilayaCode: "23",
    nameFr: "Annaba",
    nameAr: "عنابة"
  },
  {
    wilayaCode: "23",
    nameFr: "Berrahel",
    nameAr: "برحال"
  },
  {
    wilayaCode: "23",
    nameFr: "El Hadjar",
    nameAr: "الحجار"
  },
  {
    wilayaCode: "23",
    nameFr: "Eulma",
    nameAr: "العلمة"
  },
  {
    wilayaCode: "23",
    nameFr: "El Bouni",
    nameAr: "البوني"
  },
  {
    wilayaCode: "23",
    nameFr: "Oued El Aneb",
    nameAr: "وادي العنب"
  },
  {
    wilayaCode: "23",
    nameFr: "Cheurfa",
    nameAr: "الشرفة"
  },
  {
    wilayaCode: "23",
    nameFr: "Seraidi",
    nameAr: "سرايدي"
  },
  {
    wilayaCode: "23",
    nameFr: "Ain Berda",
    nameAr: "عين الباردة"
  },
  {
    wilayaCode: "23",
    nameFr: "Chetaibi",
    nameAr: "شطايبي"
  },
  {
    wilayaCode: "23",
    nameFr: "Sidi Amer",
    nameAr: "سيدي عمار"
  },
  {
    wilayaCode: "23",
    nameFr: "Treat",
    nameAr: "التريعات"
  },
  {
    wilayaCode: "24",
    nameFr: "Guelma",
    nameAr: "قالمة"
  },
  {
    wilayaCode: "24",
    nameFr: "Nechmaya",
    nameAr: "نشماية"
  },
  {
    wilayaCode: "24",
    nameFr: "Bouati Mahmoud",
    nameAr: "بوعاتي محمود"
  },
  {
    wilayaCode: "24",
    nameFr: "Oued Zenati",
    nameAr: "وادي الزناتي"
  },
  {
    wilayaCode: "24",
    nameFr: "Tamlouka",
    nameAr: "تاملوكة"
  },
  {
    wilayaCode: "24",
    nameFr: "Oued Fragha",
    nameAr: "وادي فراغة"
  },
  {
    wilayaCode: "24",
    nameFr: "Ain Sandel",
    nameAr: "عين صندل"
  },
  {
    wilayaCode: "24",
    nameFr: "Ras El Agba",
    nameAr: "راس العقبة"
  },
  {
    wilayaCode: "24",
    nameFr: "Dahouara",
    nameAr: "الدهوارة"
  },
  {
    wilayaCode: "24",
    nameFr: "Belkhir",
    nameAr: "بلخير"
  },
  {
    wilayaCode: "24",
    nameFr: "Ben Djarah",
    nameAr: "بن جراح"
  },
  {
    wilayaCode: "24",
    nameFr: "Bou Hamdane",
    nameAr: "بوحمدان"
  },
  {
    wilayaCode: "24",
    nameFr: "Ain Makhlouf",
    nameAr: "عين مخلوف"
  },
  {
    wilayaCode: "24",
    nameFr: "Ain Ben Beida",
    nameAr: "عين بن بيضاء"
  },
  {
    wilayaCode: "24",
    nameFr: "Khezara",
    nameAr: "خزارة"
  },
  {
    wilayaCode: "24",
    nameFr: "Beni Mezline",
    nameAr: "بني مزلين"
  },
  {
    wilayaCode: "24",
    nameFr: "Bou Hachana",
    nameAr: "بوحشانة"
  },
  {
    wilayaCode: "24",
    nameFr: "Guelaat Bou Sbaa",
    nameAr: "قلعة بوصبع"
  },
  {
    wilayaCode: "24",
    nameFr: "Hammam Maskhoutine",
    nameAr: "حمام مسخوطين"
  },
  {
    wilayaCode: "24",
    nameFr: "El Fedjoudj",
    nameAr: "الفجوج"
  },
  {
    wilayaCode: "24",
    nameFr: "Bordj Sabat",
    nameAr: "برج صباط"
  },
  {
    wilayaCode: "24",
    nameFr: "Hamman Nbail",
    nameAr: "حمام النبايل"
  },
  {
    wilayaCode: "24",
    nameFr: "Ain Larbi",
    nameAr: "عين العربى"
  },
  {
    wilayaCode: "24",
    nameFr: "Medjez Amar",
    nameAr: "مجاز عمار"
  },
  {
    wilayaCode: "24",
    nameFr: "Bouchegouf",
    nameAr: "بوشقوف"
  },
  {
    wilayaCode: "24",
    nameFr: "Heliopolis",
    nameAr: "ھيليوبوليس"
  },
  {
    wilayaCode: "24",
    nameFr: "Houari Boumediene",
    nameAr: "هواري بومدين"
  },
  {
    wilayaCode: "24",
    nameFr: "Roknia",
    nameAr: "الركنية"
  },
  {
    wilayaCode: "24",
    nameFr: "Salaoua Announa",
    nameAr: "سلاوة عنونة"
  },
  {
    wilayaCode: "24",
    nameFr: "Medjez Sfa",
    nameAr: "مجاز الصفاء"
  },
  {
    wilayaCode: "24",
    nameFr: "Boumahra Ahmed",
    nameAr: "بومهرة أحمد"
  },
  {
    wilayaCode: "24",
    nameFr: "Ain Reggada",
    nameAr: "عين رقادة"
  },
  {
    wilayaCode: "24",
    nameFr: "Oued Cheham",
    nameAr: "وادي الشحم"
  },
  {
    wilayaCode: "24",
    nameFr: "Djeballah Khemissi",
    nameAr: "جبالة لخميسي"
  },
  {
    wilayaCode: "25",
    nameFr: "Constantine",
    nameAr: "قسنطينة"
  },
  {
    wilayaCode: "25",
    nameFr: "Hamma Bouziane",
    nameAr: "حامة بوزيان"
  },
  {
    wilayaCode: "25",
    nameFr: "Ibn Badis",
    nameAr: "إبن باديس"
  },
  {
    wilayaCode: "25",
    nameFr: "Zighoud Youcef",
    nameAr: "زيغود يوسف"
  },
  {
    wilayaCode: "25",
    nameFr: "Didouche Mourad",
    nameAr: "ديدوش مراد"
  },
  {
    wilayaCode: "25",
    nameFr: "El Khroub",
    nameAr: "الخروب"
  },
  {
    wilayaCode: "25",
    nameFr: "Ain Abid",
    nameAr: "عين عبيد"
  },
  {
    wilayaCode: "25",
    nameFr: "Beni Hamiden",
    nameAr: "بني حميدان"
  },
  {
    wilayaCode: "25",
    nameFr: "Ouled Rahmoune",
    nameAr: "أولاد رحمون"
  },
  {
    wilayaCode: "25",
    nameFr: "Ain Smara",
    nameAr: "عين سمارة"
  },
  {
    wilayaCode: "25",
    nameFr: "Mesaoud Boudjeriou",
    nameAr: "مسعود بوجريو"
  },
  {
    wilayaCode: "25",
    nameFr: "Ibn Ziad",
    nameAr: "ابن زياد"
  },
  {
    wilayaCode: "26",
    nameFr: "Medea",
    nameAr: "المدية"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouzera",
    nameAr: "وزرة"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Maaref",
    nameAr: "أولاد معرف"
  },
  {
    wilayaCode: "26",
    nameFr: "Ain Boucif",
    nameAr: "عين بوسيف"
  },
  {
    wilayaCode: "26",
    nameFr: "Aissaouia",
    nameAr: "العيساوية"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Deide",
    nameAr: "أولاد دايد"
  },
  {
    wilayaCode: "26",
    nameFr: "El Omaria",
    nameAr: "العمارية"
  },
  {
    wilayaCode: "26",
    nameFr: "Derrag",
    nameAr: "دراڨ"
  },
  {
    wilayaCode: "26",
    nameFr: "El Guelbelkebir",
    nameAr: "القلب الكبير"
  },
  {
    wilayaCode: "26",
    nameFr: "Bouaiche",
    nameAr: "بوعيش"
  },
  {
    wilayaCode: "26",
    nameFr: "Mezerena",
    nameAr: "مزغنة"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Brahim",
    nameAr: "أولاد إبراهيم"
  },
  {
    wilayaCode: "26",
    nameFr: "Tizi Mahdi",
    nameAr: "تيزي المهدي"
  },
  {
    wilayaCode: "26",
    nameFr: "Sidi Ziane",
    nameAr: "سيدي زيان"
  },
  {
    wilayaCode: "26",
    nameFr: "Tamesguida",
    nameAr: "تمزڨيدة"
  },
  {
    wilayaCode: "26",
    nameFr: "El Hamdania",
    nameAr: "الحمدانية"
  },
  {
    wilayaCode: "26",
    nameFr: "Kef Lakhdar",
    nameAr: "الكاف الأخضر"
  },
  {
    wilayaCode: "26",
    nameFr: "Chelalet El Adhaoura",
    nameAr: "شلالة العذاورة"
  },
  {
    wilayaCode: "26",
    nameFr: "Bouskene",
    nameAr: "بوسكن"
  },
  {
    wilayaCode: "26",
    nameFr: "Rebaia",
    nameAr: "الربعية"
  },
  {
    wilayaCode: "26",
    nameFr: "Bouchrahil",
    nameAr: "بوشراحيل"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Hellal",
    nameAr: "أولاد هلال"
  },
  {
    wilayaCode: "26",
    nameFr: "Tafraout",
    nameAr: "تافراوت"
  },
  {
    wilayaCode: "26",
    nameFr: "Baata",
    nameAr: "بعطة"
  },
  {
    wilayaCode: "26",
    nameFr: "Boghar",
    nameAr: "بوغار"
  },
  {
    wilayaCode: "26",
    nameFr: "Sidi Naamane",
    nameAr: "سيدي نعمان"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Bouachra",
    nameAr: "أولاد بوعشرة"
  },
  {
    wilayaCode: "26",
    nameFr: "Sidi Zahar",
    nameAr: "سيدي زهار"
  },
  {
    wilayaCode: "26",
    nameFr: "Oued Harbil",
    nameAr: "وادي حربيل"
  },
  {
    wilayaCode: "26",
    nameFr: "Benchicao",
    nameAr: "بن شكاو"
  },
  {
    wilayaCode: "26",
    nameFr: "Sidi Damed",
    nameAr: "سيدي دامد"
  },
  {
    wilayaCode: "26",
    nameFr: "Aziz",
    nameAr: "عزيز"
  },
  {
    wilayaCode: "26",
    nameFr: "Souagui",
    nameAr: "السواڨي"
  },
  {
    wilayaCode: "26",
    nameFr: "Zoubiria",
    nameAr: "الزبيرية"
  },
  {
    wilayaCode: "26",
    nameFr: "Ksar El Boukhari",
    nameAr: "قصر البخاري"
  },
  {
    wilayaCode: "26",
    nameFr: "El Azizia",
    nameAr: "العزيزية"
  },
  {
    wilayaCode: "26",
    nameFr: "Djouab",
    nameAr: "جواب"
  },
  {
    wilayaCode: "26",
    nameFr: "Chahbounia",
    nameAr: "الشهبونية"
  },
  {
    wilayaCode: "26",
    nameFr: "Meghraoua",
    nameAr: "مغراوة"
  },
  {
    wilayaCode: "26",
    nameFr: "Cheniguel",
    nameAr: "شنيڨل"
  },
  {
    wilayaCode: "26",
    nameFr: "Ain Ouksir",
    nameAr: "عين القصير"
  },
  {
    wilayaCode: "26",
    nameFr: "Oum El Djalil",
    nameAr: "أم الجليل"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouamri",
    nameAr: "عوامري"
  },
  {
    wilayaCode: "26",
    nameFr: "Si Mahdjoub",
    nameAr: "سى المحجوب"
  },
  {
    wilayaCode: "26",
    nameFr: "Tlatet Eddouair",
    nameAr: "ثلاثة الدوائر"
  },
  {
    wilayaCode: "26",
    nameFr: "Beni Slimane",
    nameAr: "بني سليمان"
  },
  {
    wilayaCode: "26",
    nameFr: "Berrouaghia",
    nameAr: "البرواڨية"
  },
  {
    wilayaCode: "26",
    nameFr: "Seghouane",
    nameAr: "سغوان"
  },
  {
    wilayaCode: "26",
    nameFr: "Meftaha",
    nameAr: "المفاتحة"
  },
  {
    wilayaCode: "26",
    nameFr: "Mihoub",
    nameAr: "ميهوب"
  },
  {
    wilayaCode: "26",
    nameFr: "Boughezoul",
    nameAr: "بوغزول"
  },
  {
    wilayaCode: "26",
    nameFr: "Tablat",
    nameAr: "تابلاط"
  },
  {
    wilayaCode: "26",
    nameFr: "Deux Bassins",
    nameAr: "فج الحوضين"
  },
  {
    wilayaCode: "26",
    nameFr: "Draa Essamar",
    nameAr: "ذراع السمار"
  },
  {
    wilayaCode: "26",
    nameFr: "Sidi Errabia",
    nameAr: "سيدي الربيع"
  },
  {
    wilayaCode: "26",
    nameFr: "Bir Ben Laabed",
    nameAr: "بئر بن العابد"
  },
  {
    wilayaCode: "26",
    nameFr: "El Ouinet",
    nameAr: "العوينات"
  },
  {
    wilayaCode: "26",
    nameFr: "Ouled Antar",
    nameAr: "أولاد عنتر"
  },
  {
    wilayaCode: "26",
    nameFr: "Bouaichoune",
    nameAr: "بوعيشون"
  },
  {
    wilayaCode: "26",
    nameFr: "Hannacha",
    nameAr: "حناشة"
  },
  {
    wilayaCode: "26",
    nameFr: "Sedraia",
    nameAr: "سدراية"
  },
  {
    wilayaCode: "26",
    nameFr: "Medjebar",
    nameAr: "مجبر"
  },
  {
    wilayaCode: "26",
    nameFr: "Khams Djouamaa",
    nameAr: "خمس جوامع"
  },
  {
    wilayaCode: "26",
    nameFr: "Saneg",
    nameAr: "سانڨ"
  },
  {
    wilayaCode: "27",
    nameFr: "Mostaganem",
    nameAr: "مستغانم"
  },
  {
    wilayaCode: "27",
    nameFr: "Sayada",
    nameAr: "صيادة"
  },
  {
    wilayaCode: "27",
    nameFr: "Fornaka",
    nameAr: "فرناكة"
  },
  {
    wilayaCode: "27",
    nameFr: "Stidia",
    nameAr: "ستيدية"
  },
  {
    wilayaCode: "27",
    nameFr: "Ain Nouissy",
    nameAr: "عين نويسي"
  },
  {
    wilayaCode: "27",
    nameFr: "Hassi Maameche",
    nameAr: "حاسي مماش"
  },
  {
    wilayaCode: "27",
    nameFr: "Ain Tadles",
    nameAr: "عين تادلس"
  },
  {
    wilayaCode: "27",
    nameFr: "Sour",
    nameAr: "صور"
  },
  {
    wilayaCode: "27",
    nameFr: "Oued El Kheir",
    nameAr: "واد الخير"
  },
  {
    wilayaCode: "27",
    nameFr: "Sidi Bellater",
    nameAr: "سيدي بلعاتر"
  },
  {
    wilayaCode: "27",
    nameFr: "Kheiredine",
    nameAr: "خير الدين"
  },
  {
    wilayaCode: "27",
    nameFr: "Sidi Ali",
    nameAr: "سيدي علي"
  },
  {
    wilayaCode: "27",
    nameFr: "Abdelmalek Ramdane",
    nameAr: "عبد المالك رمضان"
  },
  {
    wilayaCode: "27",
    nameFr: "Hadjadj",
    nameAr: "حجاج"
  },
  {
    wilayaCode: "27",
    nameFr: "Nekmaria",
    nameAr: "نقمارية"
  },
  {
    wilayaCode: "27",
    nameFr: "Sidi Lakhdar",
    nameAr: "سيدي لخضر"
  },
  {
    wilayaCode: "27",
    nameFr: "Achaacha",
    nameAr: "عشعاشة"
  },
  {
    wilayaCode: "27",
    nameFr: "Khadra",
    nameAr: "خضراء"
  },
  {
    wilayaCode: "27",
    nameFr: "Bouguirat",
    nameAr: "بوقيراط"
  },
  {
    wilayaCode: "27",
    nameFr: "Sirat",
    nameAr: "سيرات"
  },
  {
    wilayaCode: "27",
    nameFr: "Ain Sidi Cherif",
    nameAr: "عين سيدي شريف"
  },
  {
    wilayaCode: "27",
    nameFr: "Mesra",
    nameAr: "ماسرة"
  },
  {
    wilayaCode: "27",
    nameFr: "Mansourah",
    nameAr: "منصورة"
  },
  {
    wilayaCode: "27",
    nameFr: "Souaflia",
    nameAr: "سوافلية"
  },
  {
    wilayaCode: "27",
    nameFr: "Ouled Boughalem",
    nameAr: "أوالد بوغالم"
  },
  {
    wilayaCode: "27",
    nameFr: "Ouled Maallah",
    nameAr: "أولاد مع اللّه"
  },
  {
    wilayaCode: "27",
    nameFr: "Mezghrane",
    nameAr: "مزغران"
  },
  {
    wilayaCode: "27",
    nameFr: "Ain Boudinar",
    nameAr: "عين بودينار"
  },
  {
    wilayaCode: "27",
    nameFr: "Tazgait",
    nameAr: "تزقايت"
  },
  {
    wilayaCode: "27",
    nameFr: "Safsaf",
    nameAr: "صفصاف"
  },
  {
    wilayaCode: "27",
    nameFr: "Touahria",
    nameAr: "طواھيرية"
  },
  {
    wilayaCode: "27",
    nameFr: "El Hassiane",
    nameAr: "الحسيان"
  },
  {
    wilayaCode: "28",
    nameFr: "Msila",
    nameAr: "المسيلة"
  },
  {
    wilayaCode: "28",
    nameFr: "Maadid",
    nameAr: "المعاضيد"
  },
  {
    wilayaCode: "28",
    nameFr: "Hammam Dhalaa",
    nameAr: "حمـام الضلعة"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Derradj",
    nameAr: "أولاد دراج"
  },
  {
    wilayaCode: "28",
    nameFr: "Tarmount",
    nameAr: "تارمونت"
  },
  {
    wilayaCode: "28",
    nameFr: "Mtarfa",
    nameAr: "مطارفة"
  },
  {
    wilayaCode: "28",
    nameFr: "Khoubana",
    nameAr: "خبانة"
  },
  {
    wilayaCode: "28",
    nameFr: "M'cif",
    nameAr: "مسيف"
  },
  {
    wilayaCode: "28",
    nameFr: "Chellal",
    nameAr: "شلال"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Madhi",
    nameAr: "أولاد مـاضي"
  },
  {
    wilayaCode: "28",
    nameFr: "Magra",
    nameAr: "مقرة"
  },
  {
    wilayaCode: "28",
    nameFr: "Berhoum",
    nameAr: "برهوم"
  },
  {
    wilayaCode: "28",
    nameFr: "Ain Khadra",
    nameAr: "عين الخضراء"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Addi Guebala",
    nameAr: "اولاد عدي لقبالة"
  },
  {
    wilayaCode: "28",
    nameFr: "Belaiba",
    nameAr: "بلعايبة"
  },
  {
    wilayaCode: "28",
    nameFr: "Sidi Aissa",
    nameAr: "سيدي عيسى"
  },
  {
    wilayaCode: "28",
    nameFr: "Ain El Hadjel",
    nameAr: "عين الحجل"
  },
  {
    wilayaCode: "28",
    nameFr: "Sidi Hadjeres",
    nameAr: "سيدي ھجرس"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouanougha",
    nameAr: "ونوغة"
  },
  {
    wilayaCode: "28",
    nameFr: "Bou Saada",
    nameAr: "بوسعادة"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Sidi Brahim",
    nameAr: "أولاد سيدي ابراهيم"
  },
  {
    wilayaCode: "28",
    nameFr: "Sidi Ameur",
    nameAr: "سيدي عامر"
  },
  {
    wilayaCode: "28",
    nameFr: "Tamsa",
    nameAr: "تامسة"
  },
  {
    wilayaCode: "28",
    nameFr: "Ben Srour",
    nameAr: "بن سرور"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Slimane",
    nameAr: "أولاد سليمان"
  },
  {
    wilayaCode: "28",
    nameFr: "El Houamed",
    nameAr: "الحوامد"
  },
  {
    wilayaCode: "28",
    nameFr: "El Hamel",
    nameAr: "الهامل"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Mansour",
    nameAr: "أولاد منصور"
  },
  {
    wilayaCode: "28",
    nameFr: "Maarif",
    nameAr: "المعاريف"
  },
  {
    wilayaCode: "28",
    nameFr: "Dehahna",
    nameAr: "الدهاهنة"
  },
  {
    wilayaCode: "28",
    nameFr: "Bouti Sayah",
    nameAr: "بوطي السايح"
  },
  {
    wilayaCode: "28",
    nameFr: "Khettouti Sed Djir",
    nameAr: "خطوطي سد الجير"
  },
  {
    wilayaCode: "28",
    nameFr: "Zarzour",
    nameAr: "الزرزور"
  },
  {
    wilayaCode: "28",
    nameFr: "Oued Chair",
    nameAr: "محمد بوضياف"
  },
  {
    wilayaCode: "28",
    nameFr: "Benzouh",
    nameAr: "بن الزوه"
  },
  {
    wilayaCode: "28",
    nameFr: "Bir Foda",
    nameAr: "بير الفضة"
  },
  {
    wilayaCode: "28",
    nameFr: "Ain Fares",
    nameAr: "عين فارس"
  },
  {
    wilayaCode: "28",
    nameFr: "Sidi Mhamed",
    nameAr: "سيدي محمد"
  },
  {
    wilayaCode: "28",
    nameFr: "Ouled Atia",
    nameAr: "منعة"
  },
  {
    wilayaCode: "28",
    nameFr: "Souamaa",
    nameAr: "الصوامع"
  },
  {
    wilayaCode: "28",
    nameFr: "Ain El Melh",
    nameAr: "عين الملح"
  },
  {
    wilayaCode: "28",
    nameFr: "Medjedel",
    nameAr: "مجدل"
  },
  {
    wilayaCode: "28",
    nameFr: "Slim",
    nameAr: "سليم"
  },
  {
    wilayaCode: "28",
    nameFr: "Ain Errich",
    nameAr: "عين الريش"
  },
  {
    wilayaCode: "28",
    nameFr: "Beni Ilmane",
    nameAr: "بنى يلمان"
  },
  {
    wilayaCode: "28",
    nameFr: "Oultene",
    nameAr: "ولتام"
  },
  {
    wilayaCode: "28",
    nameFr: "Djebel Messaad",
    nameAr: "جبل مساعد"
  },
  {
    wilayaCode: "29",
    nameFr: "Mascara",
    nameAr: "مـعـسـكـر"
  },
  {
    wilayaCode: "29",
    nameFr: "Bou Hanifia",
    nameAr: "بوحنيفية"
  },
  {
    wilayaCode: "29",
    nameFr: "Tizi",
    nameAr: "تيزي"
  },
  {
    wilayaCode: "29",
    nameFr: "Hacine",
    nameAr: "حسين"
  },
  {
    wilayaCode: "29",
    nameFr: "Maoussa",
    nameAr: "ماوسة"
  },
  {
    wilayaCode: "29",
    nameFr: "Teghennif",
    nameAr: "تيغنيف"
  },
  {
    wilayaCode: "29",
    nameFr: "El Hachem",
    nameAr: "الهاشم"
  },
  {
    wilayaCode: "29",
    nameFr: "Sidi Kada",
    nameAr: "سيدي قادة"
  },
  {
    wilayaCode: "29",
    nameFr: "Zelmata",
    nameAr: "زلماطة"
  },
  {
    wilayaCode: "29",
    nameFr: "Oued El Abtal",
    nameAr: "واد الأبطال"
  },
  {
    wilayaCode: "29",
    nameFr: "Ain Ferah",
    nameAr: "عين فراح"
  },
  {
    wilayaCode: "29",
    nameFr: "Ghriss",
    nameAr: "غريس"
  },
  {
    wilayaCode: "29",
    nameFr: "Froha",
    nameAr: "فروحة"
  },
  {
    wilayaCode: "29",
    nameFr: "Matemore",
    nameAr: "مطمور"
  },
  {
    wilayaCode: "29",
    nameFr: "Makdha",
    nameAr: "ماقضة"
  },
  {
    wilayaCode: "29",
    nameFr: "Sidi Boussaid",
    nameAr: "سيدي بوسعيد"
  },
  {
    wilayaCode: "29",
    nameFr: "El Bordj",
    nameAr: "البرج"
  },
  {
    wilayaCode: "29",
    nameFr: "Ain Fekan",
    nameAr: "عين فكان"
  },
  {
    wilayaCode: "29",
    nameFr: "Benian",
    nameAr: "بنيان"
  },
  {
    wilayaCode: "29",
    nameFr: "Khalouia",
    nameAr: "خلوية"
  },
  {
    wilayaCode: "29",
    nameFr: "El Menaouer",
    nameAr: "المناور"
  },
  {
    wilayaCode: "29",
    nameFr: "Oued Taria",
    nameAr: "واد التاغية"
  },
  {
    wilayaCode: "29",
    nameFr: "Aouf",
    nameAr: "عوف"
  },
  {
    wilayaCode: "29",
    nameFr: "Ain Fares",
    nameAr: "عين فارس"
  },
  {
    wilayaCode: "29",
    nameFr: "Ain Frass",
    nameAr: "عين فراس"
  },
  {
    wilayaCode: "29",
    nameFr: "Sig",
    nameAr: "سيڨ"
  },
  {
    wilayaCode: "29",
    nameFr: "Oggaz",
    nameAr: "عقاز"
  },
  {
    wilayaCode: "29",
    nameFr: "Alaimia",
    nameAr: "العلايمية"
  },
  {
    wilayaCode: "29",
    nameFr: "El Gaada",
    nameAr: "القعدة"
  },
  {
    wilayaCode: "29",
    nameFr: "Zahana",
    nameAr: "زھانة"
  },
  {
    wilayaCode: "29",
    nameFr: "Mohammadia",
    nameAr: "المحمدية"
  },
  {
    wilayaCode: "29",
    nameFr: "Sidi Abdelmoumene",
    nameAr: "سيدي عبد المومن"
  },
  {
    wilayaCode: "29",
    nameFr: "Ferraguig",
    nameAr: "فرقيق"
  },
  {
    wilayaCode: "29",
    nameFr: "El Ghomri",
    nameAr: "الغمري"
  },
  {
    wilayaCode: "29",
    nameFr: "Sedjerara",
    nameAr: "سجرارة"
  },
  {
    wilayaCode: "29",
    nameFr: "Moctadouz",
    nameAr: "مقطع الدوز"
  },
  {
    wilayaCode: "29",
    nameFr: "Bou Henni",
    nameAr: "بوهني"
  },
  {
    wilayaCode: "29",
    nameFr: "Guettena",
    nameAr: "القيطنة"
  },
  {
    wilayaCode: "29",
    nameFr: "El Mamounia",
    nameAr: "المامونية"
  },
  {
    wilayaCode: "29",
    nameFr: "El Keurt",
    nameAr: "الكرط"
  },
  {
    wilayaCode: "29",
    nameFr: "Gharrous",
    nameAr: "غروس"
  },
  {
    wilayaCode: "29",
    nameFr: "Gherdjoum",
    nameAr: "ڤرجوم"
  },
  {
    wilayaCode: "29",
    nameFr: "Chorfa",
    nameAr: "الشرفة"
  },
  {
    wilayaCode: "29",
    nameFr: "Ras Ain Amirouche",
    nameAr: "رأس العين عميروش"
  },
  {
    wilayaCode: "29",
    nameFr: "Nesmot",
    nameAr: "نسموط"
  },
  {
    wilayaCode: "29",
    nameFr: "Sidi Abdeldjebar",
    nameAr: "سيدي عبد الجبار"
  },
  {
    wilayaCode: "29",
    nameFr: "Sehailia",
    nameAr: "سحايلية"
  },
  {
    wilayaCode: "30",
    nameFr: "Ouargla",
    nameAr: "ورڨلة"
  },
  {
    wilayaCode: "30",
    nameFr: "Ain Beida",
    nameAr: "عين البيضاء"
  },
  {
    wilayaCode: "30",
    nameFr: "Ngoussa",
    nameAr: "نقوسة"
  },
  {
    wilayaCode: "30",
    nameFr: "Hassi Messaoud",
    nameAr: "حاسي مسعود"
  },
  {
    wilayaCode: "30",
    nameFr: "Rouissat",
    nameAr: "الرويسات"
  },
  {
    wilayaCode: "30",
    nameFr: "Balidat Ameur",
    nameAr: "بليدة عامر"
  },
  {
    wilayaCode: "30",
    nameFr: "Tebesbest",
    nameAr: "تبسبست"
  },
  {
    wilayaCode: "30",
    nameFr: "Nezla",
    nameAr: "نزلة"
  },
  {
    wilayaCode: "30",
    nameFr: "Zaouia El Abidia",
    nameAr: "الزاوية العابدية"
  },
  {
    wilayaCode: "30",
    nameFr: "Sidi Slimane",
    nameAr: "سيدي سليمان"
  },
  {
    wilayaCode: "30",
    nameFr: "Sidi Khouiled",
    nameAr: "سيدي خويلد"
  },
  {
    wilayaCode: "30",
    nameFr: "Hassi Ben Abdellah",
    nameAr: "حاسي بن عبد ﷲ"
  },
  {
    wilayaCode: "30",
    nameFr: "Touggourt",
    nameAr: "توقرت"
  },
  {
    wilayaCode: "30",
    nameFr: "El Hadjira",
    nameAr: "الحجيرة"
  },
  {
    wilayaCode: "30",
    nameFr: "Taibet",
    nameAr: "الطيبات"
  },
  {
    wilayaCode: "30",
    nameFr: "Tamacine",
    nameAr: "تماسين"
  },
  {
    wilayaCode: "30",
    nameFr: "Benaceur",
    nameAr: "بن ناصر"
  },
  {
    wilayaCode: "30",
    nameFr: "Mnaguer",
    nameAr: "المنقر"
  },
  {
    wilayaCode: "30",
    nameFr: "Megarine",
    nameAr: "المقارين"
  },
  {
    wilayaCode: "30",
    nameFr: "El Allia",
    nameAr: "العالية"
  },
  {
    wilayaCode: "30",
    nameFr: "El Borma",
    nameAr: "البرمة"
  },
  {
    wilayaCode: "31",
    nameFr: "Oran",
    nameAr: "وهران"
  },
  {
    wilayaCode: "31",
    nameFr: "Gdyel",
    nameAr: "ڨديل"
  },
  {
    wilayaCode: "31",
    nameFr: "Bir El Djir",
    nameAr: "بئر الجير"
  },
  {
    wilayaCode: "31",
    nameFr: "Hassi Bounif",
    nameAr: "حاسيْ بُونِيف"
  },
  {
    wilayaCode: "31",
    nameFr: "Es Senia",
    nameAr: "السانية"
  },
  {
    wilayaCode: "31",
    nameFr: "Arzew",
    nameAr: "أرزيو"
  },
  {
    wilayaCode: "31",
    nameFr: "Bethioua",
    nameAr: "ﺑﻃﻴﻭة"
  },
  {
    wilayaCode: "31",
    nameFr: "Marsat El Hadjadj",
    nameAr: "مَرس ألحَجَاج"
  },
  {
    wilayaCode: "31",
    nameFr: "Ain Turk",
    nameAr: "عيْن التُرْكْ"
  },
  {
    wilayaCode: "31",
    nameFr: "El Ancar",
    nameAr: "العنصر"
  },
  {
    wilayaCode: "31",
    nameFr: "Oued Tlelat",
    nameAr: "وادى تليلات"
  },
  {
    wilayaCode: "31",
    nameFr: "Tafraoui",
    nameAr: "طفراوي"
  },
  {
    wilayaCode: "31",
    nameFr: "Sidi Chami",
    nameAr: "سيدي الشحمي"
  },
  {
    wilayaCode: "31",
    nameFr: "Boufatis",
    nameAr: "بوفاطيس"
  },
  {
    wilayaCode: "31",
    nameFr: "Mers El Kebir",
    nameAr: "المرسى الكبير"
  },
  {
    wilayaCode: "31",
    nameFr: "Bousfer",
    nameAr: "بوسفر"
  },
  {
    wilayaCode: "31",
    nameFr: "El Karma",
    nameAr: "الكرمة"
  },
  {
    wilayaCode: "31",
    nameFr: "El Braya",
    nameAr: "ألبْرَيَ"
  },
  {
    wilayaCode: "31",
    nameFr: "Hassi Ben Okba",
    nameAr: "حاسي بن عقبة"
  },
  {
    wilayaCode: "31",
    nameFr: "Ben Freha",
    nameAr: "بن فريحة"
  },
  {
    wilayaCode: "31",
    nameFr: "Hassi Mefsoukh",
    nameAr: "حاسي مفسوخ"
  },
  {
    wilayaCode: "31",
    nameFr: "Sidi Ben Yabka",
    nameAr: "سيدي بن يبقى"
  },
  {
    wilayaCode: "31",
    nameFr: "Messerghin",
    nameAr: "مسرغين"
  },
  {
    wilayaCode: "31",
    nameFr: "Boutlelis",
    nameAr: "بوتليليس"
  },
  {
    wilayaCode: "31",
    nameFr: "Ain Kerma",
    nameAr: "عين الكرمة"
  },
  {
    wilayaCode: "31",
    nameFr: "Ain Biya",
    nameAr: "عين البية"
  },
  {
    wilayaCode: "32",
    nameFr: "El Bayadh",
    nameAr: "الـبـيـض"
  },
  {
    wilayaCode: "32",
    nameFr: "Rogassa",
    nameAr: "روقاصة"
  },
  {
    wilayaCode: "32",
    nameFr: "Stitten",
    nameAr: "ستيتين"
  },
  {
    wilayaCode: "32",
    nameFr: "Brezina",
    nameAr: "بريزينة"
  },
  {
    wilayaCode: "32",
    nameFr: "Ghassoul",
    nameAr: "غسول"
  },
  {
    wilayaCode: "32",
    nameFr: "Boualem",
    nameAr: "بوعلام"
  },
  {
    wilayaCode: "32",
    nameFr: "El Abiodh Sidi Cheikh",
    nameAr: "الابيض سيدي الشيخ"
  },
  {
    wilayaCode: "32",
    nameFr: "Ain El Orak",
    nameAr: "عين العراك"
  },
  {
    wilayaCode: "32",
    nameFr: "Arbaouat",
    nameAr: "أربوات"
  },
  {
    wilayaCode: "32",
    nameFr: "Bougtoub",
    nameAr: "بوقطب"
  },
  {
    wilayaCode: "32",
    nameFr: "El Kheither",
    nameAr: "الخيثر"
  },
  {
    wilayaCode: "32",
    nameFr: "Kef El Ahmar",
    nameAr: "الكاف الاحمر"
  },
  {
    wilayaCode: "32",
    nameFr: "Boussemghoun",
    nameAr: "بوسمغون"
  },
  {
    wilayaCode: "32",
    nameFr: "Chellala",
    nameAr: "شلالة"
  },
  {
    wilayaCode: "32",
    nameFr: "Krakda",
    nameAr: "كراكدة"
  },
  {
    wilayaCode: "32",
    nameFr: "El Bnoud",
    nameAr: "البنود"
  },
  {
    wilayaCode: "32",
    nameFr: "Cheguig",
    nameAr: "الشقيق"
  },
  {
    wilayaCode: "32",
    nameFr: "Sidi Ameur",
    nameAr: "سيدي عامر"
  },
  {
    wilayaCode: "32",
    nameFr: "El Mehara",
    nameAr: "المھارة"
  },
  {
    wilayaCode: "32",
    nameFr: "Tousmouline",
    nameAr: "توسمولين"
  },
  {
    wilayaCode: "32",
    nameFr: "Sidi Slimane",
    nameAr: "سيدي سليمان"
  },
  {
    wilayaCode: "32",
    nameFr: "Sidi Tifour",
    nameAr: "سيدي طيفور"
  },
  {
    wilayaCode: "33",
    nameFr: "Illizi",
    nameAr: "إلـيـزي"
  },
  {
    wilayaCode: "33",
    nameFr: "Djanet",
    nameAr: "جانت"
  },
  {
    wilayaCode: "33",
    nameFr: "Debdeb",
    nameAr: "دبداب"
  },
  {
    wilayaCode: "33",
    nameFr: "Bordj Omar Driss",
    nameAr: "برج عمر ادريس"
  },
  {
    wilayaCode: "33",
    nameFr: "Bordj El Haouasse",
    nameAr: "برج الحواس"
  },
  {
    wilayaCode: "33",
    nameFr: "In Amenas",
    nameAr: "إن أميناس"
  },
  {
    wilayaCode: "34",
    nameFr: "Bordj Bou Arreridj",
    nameAr: "برج بوعريريج"
  },
  {
    wilayaCode: "34",
    nameFr: "Ras El Oued",
    nameAr: "رأس الوادي"
  },
  {
    wilayaCode: "34",
    nameFr: "Bordj Zemoura",
    nameAr: "برج زمورة"
  },
  {
    wilayaCode: "34",
    nameFr: "Mansoura",
    nameAr: "منصورة"
  },
  {
    wilayaCode: "34",
    nameFr: "El Mhir",
    nameAr: "المھير"
  },
  {
    wilayaCode: "34",
    nameFr: "Ben Daoud",
    nameAr: "بن داود"
  },
  {
    wilayaCode: "34",
    nameFr: "El Achir",
    nameAr: "العشير"
  },
  {
    wilayaCode: "34",
    nameFr: "Ain Taghrout",
    nameAr: "عين تاغروت"
  },
  {
    wilayaCode: "34",
    nameFr: "Bordj Ghdir",
    nameAr: "برج غدير"
  },
  {
    wilayaCode: "34",
    nameFr: "Sidi Embarek",
    nameAr: "سيدي مبارك"
  },
  {
    wilayaCode: "34",
    nameFr: "El Hamadia",
    nameAr: "الحمادية"
  },
  {
    wilayaCode: "34",
    nameFr: "Belimour",
    nameAr: "بليمور"
  },
  {
    wilayaCode: "34",
    nameFr: "Medjana",
    nameAr: "مجانة"
  },
  {
    wilayaCode: "34",
    nameFr: "Teniet En Nasr",
    nameAr: "ثنية النصر"
  },
  {
    wilayaCode: "34",
    nameFr: "Djaafra",
    nameAr: "جعافرة"
  },
  {
    wilayaCode: "34",
    nameFr: "El Main",
    nameAr: "إلماين"
  },
  {
    wilayaCode: "34",
    nameFr: "Ouled Brahem",
    nameAr: "أولاد ابراھم"
  },
  {
    wilayaCode: "34",
    nameFr: "Ouled Dahmane",
    nameAr: "أولاد دحمان"
  },
  {
    wilayaCode: "34",
    nameFr: "Hasnaoua",
    nameAr: "حسناوة"
  },
  {
    wilayaCode: "34",
    nameFr: "Khelil",
    nameAr: "خليل"
  },
  {
    wilayaCode: "34",
    nameFr: "Taglait",
    nameAr: "تاقلعيت"
  },
  {
    wilayaCode: "34",
    nameFr: "Ksour",
    nameAr: "القصور"
  },
  {
    wilayaCode: "34",
    nameFr: "Ouled Sidi Brahim",
    nameAr: "آث سيذى پراهم."
  },
  {
    wilayaCode: "34",
    nameFr: "Tafreg",
    nameAr: "تفرڨ"
  },
  {
    wilayaCode: "34",
    nameFr: "Colla",
    nameAr: "القلة"
  },
  {
    wilayaCode: "34",
    nameFr: "Tixter",
    nameAr: "تقصطر"
  },
  {
    wilayaCode: "34",
    nameFr: "El Ach",
    nameAr: "العش"
  },
  {
    wilayaCode: "34",
    nameFr: "El Anseur",
    nameAr: "العناصر"
  },
  {
    wilayaCode: "34",
    nameFr: "Tesmart",
    nameAr: "تسمارت"
  },
  {
    wilayaCode: "34",
    nameFr: "Ain Tesra",
    nameAr: "عين تسرة"
  },
  {
    wilayaCode: "34",
    nameFr: "Bir Kasdali",
    nameAr: "بئر قصد علي"
  },
  {
    wilayaCode: "34",
    nameFr: "Ghilassa",
    nameAr: "غيلاسة"
  },
  {
    wilayaCode: "34",
    nameFr: "Rabta",
    nameAr: "الرابطة"
  },
  {
    wilayaCode: "34",
    nameFr: "Haraza",
    nameAr: "الحرازة"
  },
  {
    wilayaCode: "35",
    nameFr: "Boumerdes",
    nameAr: "بومرداس"
  },
  {
    wilayaCode: "35",
    nameFr: "Boudouaou",
    nameAr: "بودواو"
  },
  {
    wilayaCode: "35",
    nameFr: "Afir",
    nameAr: "أفير"
  },
  {
    wilayaCode: "35",
    nameFr: "Bordj Menaiel",
    nameAr: "برج منايل"
  },
  {
    wilayaCode: "35",
    nameFr: "Baghlia",
    nameAr: "بغلية"
  },
  {
    wilayaCode: "35",
    nameFr: "Sidi Daoud",
    nameAr: "سيدي داود"
  },
  {
    wilayaCode: "35",
    nameFr: "Naciria",
    nameAr: "الناصرية"
  },
  {
    wilayaCode: "35",
    nameFr: "Djinet",
    nameAr: "جنات"
  },
  {
    wilayaCode: "35",
    nameFr: "Isser",
    nameAr: "يسر"
  },
  {
    wilayaCode: "35",
    nameFr: "Zemmouri",
    nameAr: "زموري"
  },
  {
    wilayaCode: "35",
    nameFr: "Si Mustapha",
    nameAr: "سي مصطفى"
  },
  {
    wilayaCode: "35",
    nameFr: "Tidjelabine",
    nameAr: "تيجلابين"
  },
  {
    wilayaCode: "35",
    nameFr: "Chabet El Ameur",
    nameAr: "شعبة العامر"
  },
  {
    wilayaCode: "35",
    nameFr: "Thenia",
    nameAr: "الثنية"
  },
  {
    wilayaCode: "35",
    nameFr: "Timezrit",
    nameAr: "تمزريت"
  },
  {
    wilayaCode: "35",
    nameFr: "Corso",
    nameAr: "قورصو"
  },
  {
    wilayaCode: "35",
    nameFr: "Ouled Moussa",
    nameAr: "أولاد موسى"
  },
  {
    wilayaCode: "35",
    nameFr: "Larbatache",
    nameAr: "الأربعطاش"
  },
  {
    wilayaCode: "35",
    nameFr: "Bouzegza Keddara",
    nameAr: "بوزقزة قدارة"
  },
  {
    wilayaCode: "35",
    nameFr: "Taourga",
    nameAr: "تورقة"
  },
  {
    wilayaCode: "35",
    nameFr: "Ouled Aissa",
    nameAr: "أولاد عيسى"
  },
  {
    wilayaCode: "35",
    nameFr: "Ben Choud",
    nameAr: "بن شود"
  },
  {
    wilayaCode: "35",
    nameFr: "Dellys",
    nameAr: "دلس"
  },
  {
    wilayaCode: "35",
    nameFr: "Ammal",
    nameAr: "عمال"
  },
  {
    wilayaCode: "35",
    nameFr: "Beni Amrane",
    nameAr: "بنى عمران"
  },
  {
    wilayaCode: "35",
    nameFr: "Souk El Had",
    nameAr: "سوق الحد"
  },
  {
    wilayaCode: "35",
    nameFr: "Boudouaou El Bahri",
    nameAr: "بودواو البحرى"
  },
  {
    wilayaCode: "35",
    nameFr: "Ouled Hedadj",
    nameAr: "أولاد ھداج"
  },
  {
    wilayaCode: "35",
    nameFr: "Laghata",
    nameAr: "لقاطة"
  },
  {
    wilayaCode: "35",
    nameFr: "Hammedi",
    nameAr: "حمادى"
  },
  {
    wilayaCode: "35",
    nameFr: "Khemis El Khechna",
    nameAr: "خميس الخشنة"
  },
  {
    wilayaCode: "35",
    nameFr: "El Kharrouba",
    nameAr: "الخروبة"
  },
  {
    wilayaCode: "36",
    nameFr: "El Tarf",
    nameAr: "الطارف"
  },
  {
    wilayaCode: "36",
    nameFr: "Bouhadjar",
    nameAr: "بوحجار"
  },
  {
    wilayaCode: "36",
    nameFr: "Ben Mhidi",
    nameAr: "بن مهيدى"
  },
  {
    wilayaCode: "36",
    nameFr: "Bougous",
    nameAr: "بوقوس"
  },
  {
    wilayaCode: "36",
    nameFr: "El Kala",
    nameAr: "القالة"
  },
  {
    wilayaCode: "36",
    nameFr: "Ain El Assel",
    nameAr: "عين العسل"
  },
  {
    wilayaCode: "36",
    nameFr: "El Aioun",
    nameAr: "العيون"
  },
  {
    wilayaCode: "36",
    nameFr: "Bouteldja",
    nameAr: "بوثلجة"
  },
  {
    wilayaCode: "36",
    nameFr: "Souarekh",
    nameAr: "السوارخ"
  },
  {
    wilayaCode: "36",
    nameFr: "Berrihane",
    nameAr: "برحان"
  },
  {
    wilayaCode: "36",
    nameFr: "Lac Des Oiseaux",
    nameAr: "بحيرة الطيور"
  },
  {
    wilayaCode: "36",
    nameFr: "Chefia",
    nameAr: "الشافية"
  },
  {
    wilayaCode: "36",
    nameFr: "Drean",
    nameAr: "الذرعان"
  },
  {
    wilayaCode: "36",
    nameFr: "Chihani",
    nameAr: "شهانى"
  },
  {
    wilayaCode: "36",
    nameFr: "Chebaita Mokhtar",
    nameAr: "شبيطة مختار"
  },
  {
    wilayaCode: "36",
    nameFr: "Besbes",
    nameAr: "البسباس"
  },
  {
    wilayaCode: "36",
    nameFr: "Asfour",
    nameAr: "عصفور"
  },
  {
    wilayaCode: "36",
    nameFr: "Echatt",
    nameAr: "الشط"
  },
  {
    wilayaCode: "36",
    nameFr: "Zerizer",
    nameAr: "زريزر"
  },
  {
    wilayaCode: "36",
    nameFr: "Zitouna",
    nameAr: "الزيتونة"
  },
  {
    wilayaCode: "36",
    nameFr: "Ain Kerma",
    nameAr: "عين الكرمة"
  },
  {
    wilayaCode: "36",
    nameFr: "Oued Zitoun",
    nameAr: "وادى الزيتون"
  },
  {
    wilayaCode: "36",
    nameFr: "Hammam Beni Salah",
    nameAr: "حمام بنى صالح"
  },
  {
    wilayaCode: "36",
    nameFr: "Raml Souk",
    nameAr: "رمل سوق"
  },
  {
    wilayaCode: "37",
    nameFr: "Tindouf",
    nameAr: "تندوف"
  },
  {
    wilayaCode: "37",
    nameFr: "Oum El Assel",
    nameAr: "أم العسل"
  },
  {
    wilayaCode: "38",
    nameFr: "Tissemsilt",
    nameAr: "تـيـسـمـسـيـلـت"
  },
  {
    wilayaCode: "38",
    nameFr: "Bordj Bou Naama",
    nameAr: "برج بونعامة"
  },
  {
    wilayaCode: "38",
    nameFr: "Theniet El Had",
    nameAr: "ثنية الاحد"
  },
  {
    wilayaCode: "38",
    nameFr: "Lazharia",
    nameAr: "الازھرية"
  },
  {
    wilayaCode: "38",
    nameFr: "Beni Chaib",
    nameAr: "بنى شعيب"
  },
  {
    wilayaCode: "38",
    nameFr: "Lardjem",
    nameAr: "لارجم"
  },
  {
    wilayaCode: "38",
    nameFr: "Melaab",
    nameAr: "ملعب"
  },
  {
    wilayaCode: "38",
    nameFr: "Sidi Lantri",
    nameAr: "سيدي العنترى"
  },
  {
    wilayaCode: "38",
    nameFr: "Bordj El Emir Abdelkader",
    nameAr: "برج الامير عبد القادر"
  },
  {
    wilayaCode: "38",
    nameFr: "Layoune",
    nameAr: "العيون"
  },
  {
    wilayaCode: "38",
    nameFr: "Khemisti",
    nameAr: "خميستى"
  },
  {
    wilayaCode: "38",
    nameFr: "Ouled Bessem",
    nameAr: "أولاد بسام"
  },
  {
    wilayaCode: "38",
    nameFr: "Ammari",
    nameAr: "عمارى"
  },
  {
    wilayaCode: "38",
    nameFr: "Youssoufia",
    nameAr: "اليوسفية"
  },
  {
    wilayaCode: "38",
    nameFr: "Sidi Boutouchent",
    nameAr: "سيدي بوتوشنت"
  },
  {
    wilayaCode: "38",
    nameFr: "Larbaa",
    nameAr: "الاربعاء"
  },
  {
    wilayaCode: "38",
    nameFr: "Maasem",
    nameAr: "المعاصم"
  },
  {
    wilayaCode: "38",
    nameFr: "Sidi Abed",
    nameAr: "سيدي عابد"
  },
  {
    wilayaCode: "38",
    nameFr: "Tamalaht",
    nameAr: "تاملاحت"
  },
  {
    wilayaCode: "38",
    nameFr: "Sidi Slimane",
    nameAr: "سيدي سليمان"
  },
  {
    wilayaCode: "38",
    nameFr: "Boucaid",
    nameAr: "بوقايد"
  },
  {
    wilayaCode: "38",
    nameFr: "Beni Lahcene",
    nameAr: "بنى لحسن"
  },
  {
    wilayaCode: "39",
    nameFr: "El Oued",
    nameAr: "الوادي"
  },
  {
    wilayaCode: "39",
    nameFr: "Robbah",
    nameAr: "رباح"
  },
  {
    wilayaCode: "39",
    nameFr: "Oued El Alenda",
    nameAr: "وادى العلندة"
  },
  {
    wilayaCode: "39",
    nameFr: "Bayadha",
    nameAr: "البياضة"
  },
  {
    wilayaCode: "39",
    nameFr: "Nakhla",
    nameAr: "النخلة"
  },
  {
    wilayaCode: "39",
    nameFr: "Guemar",
    nameAr: "ڨمار"
  },
  {
    wilayaCode: "39",
    nameFr: "Kouinine",
    nameAr: "كوينين"
  },
  {
    wilayaCode: "39",
    nameFr: "Reguiba",
    nameAr: "الرڨيبة"
  },
  {
    wilayaCode: "39",
    nameFr: "Hamraia",
    nameAr: "الحمراية"
  },
  {
    wilayaCode: "39",
    nameFr: "Taghzout",
    nameAr: "تغزوت"
  },
  {
    wilayaCode: "39",
    nameFr: "Debila",
    nameAr: "الدبيلة"
  },
  {
    wilayaCode: "39",
    nameFr: "Hassani Abdelkrim",
    nameAr: "بلدية حساني عبد الكريم"
  },
  {
    wilayaCode: "39",
    nameFr: "Hassi Khelifa",
    nameAr: "حاسى خليفة"
  },
  {
    wilayaCode: "39",
    nameFr: "Taleb Larbi",
    nameAr: "طالب العربي"
  },
  {
    wilayaCode: "39",
    nameFr: "Douar El Ma",
    nameAr: "دوار الماء"
  },
  {
    wilayaCode: "39",
    nameFr: "Sidi Aoun",
    nameAr: "سيدي عون"
  },
  {
    wilayaCode: "39",
    nameFr: "Trifaoui",
    nameAr: "تريفاوى"
  },
  {
    wilayaCode: "39",
    nameFr: "Magrane",
    nameAr: "المڨرن"
  },
  {
    wilayaCode: "39",
    nameFr: "Beni Guecha",
    nameAr: "بن ڨشة"
  },
  {
    wilayaCode: "39",
    nameFr: "Ourmas",
    nameAr: "أورماس"
  },
  {
    wilayaCode: "39",
    nameFr: "Still",
    nameAr: "سطيل"
  },
  {
    wilayaCode: "39",
    nameFr: "Mrara",
    nameAr: "مرارة"
  },
  {
    wilayaCode: "39",
    nameFr: "Sidi Khellil",
    nameAr: "سيدي خليل"
  },
  {
    wilayaCode: "39",
    nameFr: "Tendla",
    nameAr: "تندلة"
  },
  {
    wilayaCode: "39",
    nameFr: "El Ogla",
    nameAr: "العقلة"
  },
  {
    wilayaCode: "39",
    nameFr: "Mih Ouansa",
    nameAr: "مية ونسة"
  },
  {
    wilayaCode: "39",
    nameFr: "El Mghair",
    nameAr: "المغير"
  },
  {
    wilayaCode: "39",
    nameFr: "Djamaa",
    nameAr: "جامعة"
  },
  {
    wilayaCode: "39",
    nameFr: "Oum Touyour",
    nameAr: "أم الطيور"
  },
  {
    wilayaCode: "39",
    nameFr: "Sidi Amrane",
    nameAr: "سيدي عمران"
  },
  {
    wilayaCode: "40",
    nameFr: "Khenchela",
    nameAr: "خنشلة"
  },
  {
    wilayaCode: "40",
    nameFr: "Mtoussa",
    nameAr: "متوسة"
  },
  {
    wilayaCode: "40",
    nameFr: "Kais",
    nameAr: "قايس"
  },
  {
    wilayaCode: "40",
    nameFr: "Baghai",
    nameAr: "بغاي"
  },
  {
    wilayaCode: "40",
    nameFr: "El Hamma",
    nameAr: "الحامة"
  },
  {
    wilayaCode: "40",
    nameFr: "Ain Touila",
    nameAr: "عين الطويلة"
  },
  {
    wilayaCode: "40",
    nameFr: "Taouzianat",
    nameAr: "تاوزيانت"
  },
  {
    wilayaCode: "40",
    nameFr: "Bouhmama",
    nameAr: "بوحمامة"
  },
  {
    wilayaCode: "40",
    nameFr: "El Oueldja",
    nameAr: "الولجة"
  },
  {
    wilayaCode: "40",
    nameFr: "Remila",
    nameAr: "الرميلة"
  },
  {
    wilayaCode: "40",
    nameFr: "Cherchar",
    nameAr: "ششار"
  },
  {
    wilayaCode: "40",
    nameFr: "Djellal",
    nameAr: "جلال"
  },
  {
    wilayaCode: "40",
    nameFr: "Babar",
    nameAr: "بابار"
  },
  {
    wilayaCode: "40",
    nameFr: "Tamza",
    nameAr: "تامزة"
  },
  {
    wilayaCode: "40",
    nameFr: "Ensigha",
    nameAr: "انسيغة"
  },
  {
    wilayaCode: "40",
    nameFr: "Ouled Rechache",
    nameAr: "أولاد رشاش"
  },
  {
    wilayaCode: "40",
    nameFr: "El Mahmal",
    nameAr: "المحمل"
  },
  {
    wilayaCode: "40",
    nameFr: "Msara",
    nameAr: "أمصارة"
  },
  {
    wilayaCode: "40",
    nameFr: "Yabous",
    nameAr: "يابوس"
  },
  {
    wilayaCode: "40",
    nameFr: "Khirane",
    nameAr: "خيران"
  },
  {
    wilayaCode: "40",
    nameFr: "Chelia",
    nameAr: "شلية"
  },
  {
    wilayaCode: "41",
    nameFr: "Souk Ahras",
    nameAr: "سوق أهراس"
  },
  {
    wilayaCode: "41",
    nameFr: "Sedrata",
    nameAr: "سدراتة"
  },
  {
    wilayaCode: "41",
    nameFr: "Hanancha",
    nameAr: "الحنانشة"
  },
  {
    wilayaCode: "41",
    nameFr: "Mechroha",
    nameAr: "المشروحة"
  },
  {
    wilayaCode: "41",
    nameFr: "Ouled Driss",
    nameAr: "أولاد ادريس"
  },
  {
    wilayaCode: "41",
    nameFr: "Tiffech",
    nameAr: "تيفاش"
  },
  {
    wilayaCode: "41",
    nameFr: "Zaarouria",
    nameAr: "الزعرورية"
  },
  {
    wilayaCode: "41",
    nameFr: "Taoura",
    nameAr: "تاورة"
  },
  {
    wilayaCode: "41",
    nameFr: "Drea",
    nameAr: "الدريعة"
  },
  {
    wilayaCode: "41",
    nameFr: "Haddada",
    nameAr: "الحدادة"
  },
  {
    wilayaCode: "41",
    nameFr: "Khedara",
    nameAr: "لخضارة"
  },
  {
    wilayaCode: "41",
    nameFr: "Merahna",
    nameAr: "المراهنة"
  },
  {
    wilayaCode: "41",
    nameFr: "Ouled Moumen",
    nameAr: "أولاد مؤمن"
  },
  {
    wilayaCode: "41",
    nameFr: "Bir Bouhouche",
    nameAr: "بئر بوحوش"
  },
  {
    wilayaCode: "41",
    nameFr: "Mdaourouche",
    nameAr: "مداوروش"
  },
  {
    wilayaCode: "41",
    nameFr: "Oum El Adhaim",
    nameAr: "أم العظائم"
  },
  {
    wilayaCode: "41",
    nameFr: "Ain Zana",
    nameAr: "عين الزانة"
  },
  {
    wilayaCode: "41",
    nameFr: "Ain Soltane",
    nameAr: "عين السلطان"
  },
  {
    wilayaCode: "41",
    nameFr: "Quillen",
    nameAr: "ويلان"
  },
  {
    wilayaCode: "41",
    nameFr: "Sidi Fredj",
    nameAr: "سيدي فرج"
  },
  {
    wilayaCode: "41",
    nameFr: "Safel El Ouiden",
    nameAr: "سافل الويدان"
  },
  {
    wilayaCode: "41",
    nameFr: "Ragouba",
    nameAr: "الرقوبة"
  },
  {
    wilayaCode: "41",
    nameFr: "Khemissa",
    nameAr: "خميسة"
  },
  {
    wilayaCode: "41",
    nameFr: "Oued Keberit",
    nameAr: "وادى الكبريت"
  },
  {
    wilayaCode: "41",
    nameFr: "Terraguelt",
    nameAr: "ترقالت"
  },
  {
    wilayaCode: "41",
    nameFr: "Zouabi",
    nameAr: "الزوابى"
  },
  {
    wilayaCode: "42",
    nameFr: "Tipaza",
    nameAr: "تيبازة"
  },
  {
    wilayaCode: "42",
    nameFr: "Menaceur",
    nameAr: "مناصر"
  },
  {
    wilayaCode: "42",
    nameFr: "Larhat",
    nameAr: "الأرهاط"
  },
  {
    wilayaCode: "42",
    nameFr: "Douaouda",
    nameAr: "دواودة"
  },
  {
    wilayaCode: "42",
    nameFr: "Bourkika",
    nameAr: "بورقيقة"
  },
  {
    wilayaCode: "42",
    nameFr: "Khemisti",
    nameAr: "خميستي"
  },
  {
    wilayaCode: "42",
    nameFr: "Aghabal",
    nameAr: "أغابال"
  },
  {
    wilayaCode: "42",
    nameFr: "Hadjout",
    nameAr: "حجوط"
  },
  {
    wilayaCode: "42",
    nameFr: "Sidi Amar",
    nameAr: "سيدي عمر"
  },
  {
    wilayaCode: "42",
    nameFr: "Gouraya",
    nameAr: "ڨورايا"
  },
  {
    wilayaCode: "42",
    nameFr: "Nodor",
    nameAr: "الناظور"
  },
  {
    wilayaCode: "42",
    nameFr: "Chaiba",
    nameAr: "الشعيبة"
  },
  {
    wilayaCode: "42",
    nameFr: "Ain Tagourait",
    nameAr: "عين تڨورايت"
  },
  {
    wilayaCode: "42",
    nameFr: "Cherchel",
    nameAr: "شرشال"
  },
  {
    wilayaCode: "42",
    nameFr: "Damous",
    nameAr: "الداموس"
  },
  {
    wilayaCode: "42",
    nameFr: "Meurad",
    nameAr: "مراد"
  },
  {
    wilayaCode: "42",
    nameFr: "Fouka",
    nameAr: "فوكة"
  },
  {
    wilayaCode: "42",
    nameFr: "Bou Ismail",
    nameAr: "بو اسماعيل"
  },
  {
    wilayaCode: "42",
    nameFr: "Ahmer El Ain",
    nameAr: "أحمر العين"
  },
  {
    wilayaCode: "42",
    nameFr: "Bou Haroun",
    nameAr: "بوهارون"
  },
  {
    wilayaCode: "42",
    nameFr: "Sidi Ghiles",
    nameAr: "سيدي غيلاس"
  },
  {
    wilayaCode: "42",
    nameFr: "Messelmoun",
    nameAr: "مسلمون"
  },
  {
    wilayaCode: "42",
    nameFr: "Sidi Rached",
    nameAr: "سيدي راشد"
  },
  {
    wilayaCode: "42",
    nameFr: "Kolea",
    nameAr: "القليعة"
  },
  {
    wilayaCode: "42",
    nameFr: "Attatba",
    nameAr: "الحطاطبة"
  },
  {
    wilayaCode: "42",
    nameFr: "Sidi Semiane",
    nameAr: "سيدي سميان"
  },
  {
    wilayaCode: "42",
    nameFr: "Beni Milleuk",
    nameAr: "بني ميلك"
  },
  {
    wilayaCode: "42",
    nameFr: "Hadjerat Ennous",
    nameAr: "حجرة النص"
  },
  {
    wilayaCode: "43",
    nameFr: "Mila",
    nameAr: "ميلة"
  },
  {
    wilayaCode: "43",
    nameFr: "Ferdjioua",
    nameAr: "فرجيوة"
  },
  {
    wilayaCode: "43",
    nameFr: "Chelghoum Laid",
    nameAr: "شلغوم العيد"
  },
  {
    wilayaCode: "43",
    nameFr: "Oued Athmenia",
    nameAr: "وادي العثمانية"
  },
  {
    wilayaCode: "43",
    nameFr: "Ain Mellouk",
    nameAr: "عين ملوك"
  },
  {
    wilayaCode: "43",
    nameFr: "Telerghma",
    nameAr: "تلاغمة"
  },
  {
    wilayaCode: "43",
    nameFr: "Oued Seguen",
    nameAr: "وادى سقان"
  },
  {
    wilayaCode: "43",
    nameFr: "Tadjenanet",
    nameAr: "تاجنانت"
  },
  {
    wilayaCode: "43",
    nameFr: "Benyahia Abderrahmane",
    nameAr: "بن يحيى عبد الرحمان"
  },
  {
    wilayaCode: "43",
    nameFr: "Oued Endja",
    nameAr: "وادى النجاء"
  },
  {
    wilayaCode: "43",
    nameFr: "Ahmed Rachedi",
    nameAr: "أحمد راشدي"
  },
  {
    wilayaCode: "43",
    nameFr: "Ouled Khalouf",
    nameAr: "أولاد خلوف"
  },
  {
    wilayaCode: "43",
    nameFr: "Tiberguent",
    nameAr: "تيبرقنت"
  },
  {
    wilayaCode: "43",
    nameFr: "Bouhatem",
    nameAr: "بوحاتم"
  },
  {
    wilayaCode: "43",
    nameFr: "Rouached",
    nameAr: "رواشد"
  },
  {
    wilayaCode: "43",
    nameFr: "Tessala Lamatai",
    nameAr: "تسالة لمطاي"
  },
  {
    wilayaCode: "43",
    nameFr: "Grarem Gouga",
    nameAr: "القرارم قوقة"
  },
  {
    wilayaCode: "43",
    nameFr: "Sidi Merouane",
    nameAr: "سيدي مروان"
  },
  {
    wilayaCode: "43",
    nameFr: "Tassadane Haddada",
    nameAr: "تسدان حدادة"
  },
  {
    wilayaCode: "43",
    nameFr: "Derradji Bousselah",
    nameAr: "دراحي بوصلاح"
  },
  {
    wilayaCode: "43",
    nameFr: "Minar Zarza",
    nameAr: "مينار زرزة"
  },
  {
    wilayaCode: "43",
    nameFr: "Amira Arras",
    nameAr: "عميرة أراس"
  },
  {
    wilayaCode: "43",
    nameFr: "Terrai Bainen",
    nameAr: "ترعى بينان"
  },
  {
    wilayaCode: "43",
    nameFr: "Hamala",
    nameAr: "حمالة"
  },
  {
    wilayaCode: "43",
    nameFr: "Ain Tine",
    nameAr: "عين التين"
  },
  {
    wilayaCode: "43",
    nameFr: "El Mechira",
    nameAr: "المشيرة"
  },
  {
    wilayaCode: "43",
    nameFr: "Sidi Khelifa",
    nameAr: "سيدي خليفة"
  },
  {
    wilayaCode: "43",
    nameFr: "Zeghaia",
    nameAr: "زغاية"
  },
  {
    wilayaCode: "43",
    nameFr: "Elayadi Barbes",
    nameAr: "العياضى برباس"
  },
  {
    wilayaCode: "43",
    nameFr: "Ain Beida Harriche",
    nameAr: "عين البيضاء حريش"
  },
  {
    wilayaCode: "43",
    nameFr: "Yahia Beniguecha",
    nameAr: "يحيى بنى قشة"
  },
  {
    wilayaCode: "43",
    nameFr: "Chigara",
    nameAr: "الشيقارة"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Defla",
    nameAr: "عين دفلة - عين الدفلى"
  },
  {
    wilayaCode: "44",
    nameFr: "Miliana",
    nameAr: "مليانة"
  },
  {
    wilayaCode: "44",
    nameFr: "Boumedfaa",
    nameAr: "بومدفع"
  },
  {
    wilayaCode: "44",
    nameFr: "Khemis Miliana",
    nameAr: "خميس مليانة"
  },
  {
    wilayaCode: "44",
    nameFr: "Hammam Righa",
    nameAr: "حمام ريغة"
  },
  {
    wilayaCode: "44",
    nameFr: "Arib",
    nameAr: "عريب"
  },
  {
    wilayaCode: "44",
    nameFr: "Djelida",
    nameAr: "جليدة"
  },
  {
    wilayaCode: "44",
    nameFr: "El Amra",
    nameAr: "العامرة"
  },
  {
    wilayaCode: "44",
    nameFr: "Bourached",
    nameAr: "بوراشد"
  },
  {
    wilayaCode: "44",
    nameFr: "El Attaf",
    nameAr: "العطاف"
  },
  {
    wilayaCode: "44",
    nameFr: "El Abadia",
    nameAr: "العبادية"
  },
  {
    wilayaCode: "44",
    nameFr: "Djendel",
    nameAr: "جندل"
  },
  {
    wilayaCode: "44",
    nameFr: "Oued Chorfa",
    nameAr: "وادى الشرفاء"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Lechiakh",
    nameAr: "عين االشياخ"
  },
  {
    wilayaCode: "44",
    nameFr: "Oued Djemaa",
    nameAr: "وادى جمعة"
  },
  {
    wilayaCode: "44",
    nameFr: "Rouina",
    nameAr: "روينة"
  },
  {
    wilayaCode: "44",
    nameFr: "Zeddine",
    nameAr: "زدين"
  },
  {
    wilayaCode: "44",
    nameFr: "El Hassania",
    nameAr: "الحسنية"
  },
  {
    wilayaCode: "44",
    nameFr: "Bir Ouled Khelifa",
    nameAr: "بئر ولد خليفة"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Soltane",
    nameAr: "عين السلطان"
  },
  {
    wilayaCode: "44",
    nameFr: "Tarik Ibn Ziad",
    nameAr: "طارق بن زياد"
  },
  {
    wilayaCode: "44",
    nameFr: "Bordj Emir Khaled",
    nameAr: "برج الأمير خالد"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Torki",
    nameAr: "عين التركى"
  },
  {
    wilayaCode: "44",
    nameFr: "Sidi Lakhdar",
    nameAr: "سيدي لخضر"
  },
  {
    wilayaCode: "44",
    nameFr: "Ben Allal",
    nameAr: "بن علال"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Benian",
    nameAr: "عين البنيان"
  },
  {
    wilayaCode: "44",
    nameFr: "Hoceinia",
    nameAr: "حسينية"
  },
  {
    wilayaCode: "44",
    nameFr: "Barbouche",
    nameAr: "بربوش"
  },
  {
    wilayaCode: "44",
    nameFr: "Djemaa Ouled Chikh",
    nameAr: "جمعة أولاد الشيخ"
  },
  {
    wilayaCode: "44",
    nameFr: "Mekhatria",
    nameAr: "المخاطرية"
  },
  {
    wilayaCode: "44",
    nameFr: "Bathia",
    nameAr: "بطحية"
  },
  {
    wilayaCode: "44",
    nameFr: "Tachta Zegagha",
    nameAr: "تاشتة زقاغة"
  },
  {
    wilayaCode: "44",
    nameFr: "Ain Bouyahia",
    nameAr: "عين بويحى"
  },
  {
    wilayaCode: "44",
    nameFr: "El Maine",
    nameAr: "الماين"
  },
  {
    wilayaCode: "44",
    nameFr: "Tiberkanine",
    nameAr: "تبركانين"
  },
  {
    wilayaCode: "44",
    nameFr: "Belaas",
    nameAr: "بالعاص"
  },
  {
    wilayaCode: "45",
    nameFr: "Naama",
    nameAr: "النــعـامـة"
  },
  {
    wilayaCode: "45",
    nameFr: "Mechria",
    nameAr: "مشرية"
  },
  {
    wilayaCode: "45",
    nameFr: "Ain Sefra",
    nameAr: "عين الصفراء"
  },
  {
    wilayaCode: "45",
    nameFr: "Tiout",
    nameAr: "تيوت"
  },
  {
    wilayaCode: "45",
    nameFr: "Sfissifa",
    nameAr: "صفيصيفة"
  },
  {
    wilayaCode: "45",
    nameFr: "Moghrar",
    nameAr: "مغرار"
  },
  {
    wilayaCode: "45",
    nameFr: "Assela",
    nameAr: "عسلة"
  },
  {
    wilayaCode: "45",
    nameFr: "Djeniane Bourzeg",
    nameAr: "جنين بورزق"
  },
  {
    wilayaCode: "45",
    nameFr: "Ain Ben Khelil",
    nameAr: "عين بن خليل"
  },
  {
    wilayaCode: "45",
    nameFr: "Makman Ben Amer",
    nameAr: "مكمن بن عمر"
  },
  {
    wilayaCode: "45",
    nameFr: "Kasdir",
    nameAr: "قصدير"
  },
  {
    wilayaCode: "45",
    nameFr: "El Biod",
    nameAr: "البيوض"
  },
  {
    wilayaCode: "46",
    nameFr: "Ain Temouchent",
    nameAr: "عـيـن تـمـوشـنـت"
  },
  {
    wilayaCode: "46",
    nameFr: "Chaabet El Ham",
    nameAr: "شعبة اللحم"
  },
  {
    wilayaCode: "46",
    nameFr: "Ain Kihal",
    nameAr: "عين الكيحل"
  },
  {
    wilayaCode: "46",
    nameFr: "Hammam Bouhadjar",
    nameAr: "حمام بو حجر"
  },
  {
    wilayaCode: "46",
    nameFr: "Bou Zedjar",
    nameAr: "بوزجار"
  },
  {
    wilayaCode: "46",
    nameFr: "Oued Berkeche",
    nameAr: "وادى برقش"
  },
  {
    wilayaCode: "46",
    nameFr: "Aghlal",
    nameAr: "أغلال"
  },
  {
    wilayaCode: "46",
    nameFr: "Terga",
    nameAr: "تارقة"
  },
  {
    wilayaCode: "46",
    nameFr: "Ain El Arbaa",
    nameAr: "عين الاربعاء"
  },
  {
    wilayaCode: "46",
    nameFr: "Tamzoura",
    nameAr: "تامزوغة"
  },
  {
    wilayaCode: "46",
    nameFr: "Chentouf",
    nameAr: "شنتوف"
  },
  {
    wilayaCode: "46",
    nameFr: "Sidi Ben Adda",
    nameAr: "سيدي بن عدة"
  },
  {
    wilayaCode: "46",
    nameFr: "Aoubellil",
    nameAr: "عقب الليل"
  },
  {
    wilayaCode: "46",
    nameFr: "El Malah",
    nameAr: "المالح"
  },
  {
    wilayaCode: "46",
    nameFr: "Sidi Boumediene",
    nameAr: "سيدي بومدين"
  },
  {
    wilayaCode: "46",
    nameFr: "Oued Sabah",
    nameAr: "وادى الصباح"
  },
  {
    wilayaCode: "46",
    nameFr: "Ouled Boudjemaa",
    nameAr: "أولاد بوجمعة"
  },
  {
    wilayaCode: "46",
    nameFr: "Ain Tolba",
    nameAr: "عين الطلبة"
  },
  {
    wilayaCode: "46",
    nameFr: "El Amria",
    nameAr: "العامرية"
  },
  {
    wilayaCode: "46",
    nameFr: "Hassi El Ghella",
    nameAr: "حاسى الغلة"
  },
  {
    wilayaCode: "46",
    nameFr: "Hassasna",
    nameAr: "الحساسنة"
  },
  {
    wilayaCode: "46",
    nameFr: "Ouled Kihal",
    nameAr: "أولاد الكيحل"
  },
  {
    wilayaCode: "46",
    nameFr: "Beni Saf",
    nameAr: "بني صاف"
  },
  {
    wilayaCode: "46",
    nameFr: "Sidi Safi",
    nameAr: "سيدي الصافي"
  },
  {
    wilayaCode: "46",
    nameFr: "Oulhaca El Gheraba",
    nameAr: "ولهاصة الغرابة"
  },
  {
    wilayaCode: "46",
    nameFr: "Sidi Ouriache",
    nameAr: "سيدي وريلش"
  },
  {
    wilayaCode: "46",
    nameFr: "El Emir Abdelkader",
    nameAr: "الأمير عبد القادر"
  },
  {
    wilayaCode: "46",
    nameFr: "El Messaid",
    nameAr: "المساعيد"
  },
  {
    wilayaCode: "47",
    nameFr: "Ghardaia",
    nameAr: "غرداية"
  },
  {
    wilayaCode: "47",
    nameFr: "El Meniaa",
    nameAr: "المنيعة"
  },
  {
    wilayaCode: "47",
    nameFr: "Dhayet Bendhahoua",
    nameAr: "ضاية بن ضحوة"
  },
  {
    wilayaCode: "47",
    nameFr: "Berriane",
    nameAr: "بريان"
  },
  {
    wilayaCode: "47",
    nameFr: "Metlili",
    nameAr: "متليلي الشعانبة"
  },
  {
    wilayaCode: "47",
    nameFr: "El Guerrara",
    nameAr: "الڨرارة"
  },
  {
    wilayaCode: "47",
    nameFr: "El Atteuf",
    nameAr: "العطف"
  },
  {
    wilayaCode: "47",
    nameFr: "Zelfana",
    nameAr: "زلفانة"
  },
  {
    wilayaCode: "47",
    nameFr: "Sebseb",
    nameAr: "سبسب"
  },
  {
    wilayaCode: "47",
    nameFr: "Bounoura",
    nameAr: "بونورة"
  },
  {
    wilayaCode: "47",
    nameFr: "Hassi Fehal",
    nameAr: "حاسي الفحل"
  },
  {
    wilayaCode: "47",
    nameFr: "Hassi Gara",
    nameAr: "حاسي قارة"
  },
  {
    wilayaCode: "47",
    nameFr: "Mansoura",
    nameAr: "منصورة"
  },
  {
    wilayaCode: "48",
    nameFr: "Relizane",
    nameAr: "غيليزان"
  },
  {
    wilayaCode: "48",
    nameFr: "Oued Rhiou",
    nameAr: "وادي رهيو"
  },
  {
    wilayaCode: "48",
    nameFr: "Belaassel Bouzegza",
    nameAr: "بلعسل بوزقزة"
  },
  {
    wilayaCode: "48",
    nameFr: "Sidi Saada",
    nameAr: "سيدي سعادة"
  },
  {
    wilayaCode: "48",
    nameFr: "Ouled Aiche",
    nameAr: "أولاد يعيش"
  },
  {
    wilayaCode: "48",
    nameFr: "Sidi Lazreg",
    nameAr: "سيدي لزرق"
  },
  {
    wilayaCode: "48",
    nameFr: "El Hamadna",
    nameAr: "الحمادنة"
  },
  {
    wilayaCode: "48",
    nameFr: "Sidi Mhamed Ben Ali",
    nameAr: "سيدي امحمد بن علي"
  },
  {
    wilayaCode: "48",
    nameFr: "Mediouna",
    nameAr: "مديونة"
  },
  {
    wilayaCode: "48",
    nameFr: "Sidi Khettab",
    nameAr: "سيدي خطاب"
  },
  {
    wilayaCode: "48",
    nameFr: "Ammi Moussa",
    nameAr: "عمي موسى"
  },
  {
    wilayaCode: "48",
    nameFr: "Zemmoura",
    nameAr: "زمورة"
  },
  {
    wilayaCode: "48",
    nameFr: "Beni Dergoun",
    nameAr: "بني درقن"
  },
  {
    wilayaCode: "48",
    nameFr: "Djidiouia",
    nameAr: "جيديوة"
  },
  {
    wilayaCode: "48",
    nameFr: "El Guettar",
    nameAr: "القطارة"
  },
  {
    wilayaCode: "48",
    nameFr: "Hamri",
    nameAr: "الحمري"
  },
  {
    wilayaCode: "48",
    nameFr: "El Matmar",
    nameAr: "المطمار"
  },
  {
    wilayaCode: "48",
    nameFr: "Sidi Mhamed Ben Aouda",
    nameAr: "سيدي بن عودة"
  },
  {
    wilayaCode: "48",
    nameFr: "Ain Tarek",
    nameAr: "عين طارق"
  },
  {
    wilayaCode: "48",
    nameFr: "Oued Essalem",
    nameAr: "وادي السلام"
  },
  {
    wilayaCode: "48",
    nameFr: "Ouarizane",
    nameAr: "ﻭﺍﺭﻳﺯﺍﻥ"
  },
  {
    wilayaCode: "48",
    nameFr: "Mazouna",
    nameAr: "مازونة"
  },
  {
    wilayaCode: "48",
    nameFr: "Kalaa",
    nameAr: "قلعة"
  },
  {
    wilayaCode: "48",
    nameFr: "Ain Rahma",
    nameAr: "عين الرحمة"
  },
  {
    wilayaCode: "48",
    nameFr: "Yellel",
    nameAr: "يلل"
  },
  {
    wilayaCode: "48",
    nameFr: "Oued El Djemaa",
    nameAr: "وادى الجمعة"
  },
  {
    wilayaCode: "48",
    nameFr: "Ramka",
    nameAr: "رمكة"
  },
  {
    wilayaCode: "48",
    nameFr: "Mendes",
    nameAr: "مندس"
  },
  {
    wilayaCode: "48",
    nameFr: "Lahlef",
    nameAr: "لحلاف"
  },
  {
    wilayaCode: "48",
    nameFr: "Beni Zentis",
    nameAr: "بني زنتيس"
  },
  {
    wilayaCode: "48",
    nameFr: "Souk El Haad",
    nameAr: "سوق الحد"
  },
  {
    wilayaCode: "48",
    nameFr: "Dar Ben Abdellah",
    nameAr: "دار بن عبد الله"
  },
  {
    wilayaCode: "48",
    nameFr: "El Hassi",
    nameAr: "الحاسى"
  },
  {
    wilayaCode: "48",
    nameFr: "Had Echkalla",
    nameAr: "حد الشقالة"
  },
  {
    wilayaCode: "48",
    nameFr: "Bendaoud",
    nameAr: "بن داود"
  },
  {
    wilayaCode: "48",
    nameFr: "El Ouldja",
    nameAr: "العلجة"
  },
  {
    wilayaCode: "48",
    nameFr: "Merdja Sidi Abed",
    nameAr: "مرجة سيدي عابد"
  },
  {
    wilayaCode: "48",
    nameFr: "Ouled Sidi Mihoub",
    nameAr: "أولاد سيدي ميهوب"
  }
];

export function getWilayasByLocale(locale: AppLocale) {
  return ALGERIA_WILAYAS.map((entry) => ({
    code: entry.code,
    label: locale === "ar" ? entry.nameAr : entry.nameFr,
  }));
}

export function getCommunesByWilaya(locale: AppLocale) {
  return ALGERIA_COMMUNES.reduce<Record<string, LocationOption[]>>(
    (accumulator, entry) => {
      const options = accumulator[entry.wilayaCode] ?? [];
      const label = locale === "ar" ? entry.nameAr : entry.nameFr;

      options.push({
        value: label,
        label,
      });

      accumulator[entry.wilayaCode] = options;
      return accumulator;
    },
    {},
  );
}
