import imageproduct from '../image/product-1.jpeg';
import productimage2 from '../image/image-shampo.jpeg';
import productdetais from '../image/deatailsproducr.jpeg';
import hermaskproduct from '../image/hermaskproduct.jpeg';
import hermaskdetalis from '../image/hermaskdetals.jpeg';
import shampoproductditals from '../image/shampoproductdetails.jpeg';
import productsearm from '../image/productsearm.jpeg';
import productsearmdeatalis from '../image/serum2.jpeg';
import conditinal from '../image/image-ditals/conditinal.jpeg';
import conditinimage from '../image/image-ditals/conditin-image.jpeg';
import conditinimageeeee from '../image/image-ditals/conditinimageeeee.jpeg';
import shampoimage from '../image/image-ditals/shampo-image.jpeg';
import shmpoimage from '../image/image-ditals/shmpoimage.jpeg';
import shmpoimagezro from '../image/image-ditals/shamopozero.jpeg';
import shmpoimagezro2 from '../image/image-ditals/shmpozero.jpeg';
import shampozerrrrr from '../image/image-ditals/shampozerrrrr.jpeg';
import zeroooooeytetet from '../image/image-ditals/zeroooooeytetet.jpeg';
import serooolhlh from '../image/image-ditals/serooolhlh.jpeg';
import hairmaskimage from '../image/image-ditals/hirmask-image.jpeg';
import h from '../image/image-ditals/h.jpeg';
import wertyuio from '../image/image-ditals/wertyuio.jpeg';
import asdfiop from '../image/image-ditals/asdfiop.jpeg';
import supproduct1zero from '../image/image-ditals/supproduct1zero.jpeg';
import hirsermimage from '../image/image-ditals/hirserm-image.jpeg';
import aertyuiop from '../image/image-ditals/aertyuiop.jpeg';
import alzlapy from '../image/imagePharmasy/alzlapy.jpeg';
import bewil from '../image/imagePharmasy/bewil.jpeg';
import Healtypharmasy from '../image/imagePharmasy/Healtypharmasy.jpeg';
import abdulahhsydalaya from '../image/imagePharmasy/abdulahhsydalaya.jpeg';
import al5ayre from '../image/imagePharmasy/al5ayre.jpeg';
import alaaam from '../image/imagePharmasy/alaaam.jpeg';
import sehasydalaya from '../image/imagePharmasy/sehasydalaya.jpeg';
import phrama from '../image/imagePharmasy/pharma.jpeg'
import alazabe from '../image/imagePharmasy/alazabe.jpg'






export interface Product {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  thumbnails: string[];
  category: string;
}

export interface Pharmacy {
  id: number;
  name: string;
  nameAr: string;
  image: string;
  branches: Branch[];
}

export interface Branch {
  id: number;
  location: string;
  locationAr: string;
  coordinates: [number, number];
}

export const products: Product[] = [
  { 
    id: 1,
    name: "Conditioner",
    nameAr: "بلسم",
    description: `Nourishing & Restoring Conditioner. Our conditioner is packed with essential vitamins that help bring your hair back to life — adding shine, softness, and strength. It's infused with Argan Oil for deep hydration, Arabic Coffee Seed Extract to refresh the scalp and boost hair growth, and Jojoba Oil to leave your hair smooth and easy to manage. We also added Olive Fruit Extract to deeply nourish your strands and keep them flexible and healthy. It has a light, clean scent that makes your hair feel fresh without weighing it down. Perfect for everyday use and works great on all hair types.`,
    descriptionAr: "بلسم مغذي ومرمم للشعربلسم غني بمزيج من الفيتامينات الأساسية التي تعزز صحة الشعر وتعيد له الحيوية واللمعان. يحتوي على زيت الأرجان المعروف بخصائصه المرطبة والمغذية، وخلاصة بذور القهوة العربية التي تنشط فروة الرأس وتحفز نمو الشعر، وزيت الجوجوبا لترطيب وتنعيم الشعر بشكل طبيعي.مدعّم بخلاصة فاكهة Olea Europaea (الزيتون) التي تغذي الشعر بعمق وتحافظ على مرونته. يتميز البلسم بعطر خفيف ومنعش يمنح شعرك إحساسًا بالنقاء والحيوية دون إثقاله.مثالي للاستخدام اليومي لجميع أنواع الشعر.",
    price: 29.99,
    image: imageproduct,
    thumbnails: [
      imageproduct,
      productdetais,
      conditinimage,
      conditinal,
      conditinimageeeee,
    ],
    category: "Hair-care"
  },
  {
    id: 2,
    name: "Shampoo",
    nameAr: "شامبو",
    description: `Nourishing Shampoo Packed with Essential Vitamins to Strengthen Your Hair and Boost Its Health. It Contains Argan Oil to Repair Dry and Damaged Hair, Aloe Vera Extract to Soothe and Hydrate Your Scalp, and Castor Oil to Promote Hair Growth and Increase Thickness. With a Blend of Humectants, It Locks in Moisture Deep Into Your Hair, Plus Protein Oil That Helps Repair Damaged Strands and Leaves Your Hair Feeling Smooth and Shiny. It’s Totally Sulfate-Free, Making It Gentle on Both Your Hair and Scalp, Perfect for Color-Treated or Chemically Processed Hair.`,
    descriptionAr: "شامبو مغذي للشعرتركيبة متطورة غنية بمجموعة من الفيتامينات الأساسية لتقوية الشعر وتعزيز صحته. يحتوي على زيت الأرجان لترميم الشعر الجاف والتالف، وخلاصة الصبار لتهدئة فروة الرأس وترطيبها، وزيت الخروع لتحفيز نمو الشعر وزيادة كثافته.مزود بمجموعة الهيموكتانت (Humectants) التي تحافظ على رطوبة الشعر بعمق، بالإضافة إلى زيت البروتين الذي يعمل على إصلاح الألياف التالفة ومنح الشعر نعومة ولمعانًا طبيعيًا.خالٍ تمامًا من السلفات، مما يجعله لطيفًا على الشعر وفروة الرأس ومثالي للشعر المصبوغ والمعالج كيميائيًا",
    price: 19.99,
    image: shmpoimagezro,
    thumbnails: [
      shmpoimagezro,
      shampozerrrrr,
      shmpoimagezro2,
      zeroooooeytetet,
      serooolhlh
    ],
    category: "Hair-care"
  },
  {
    id: 3,
    name: "Hair Mask",
    nameAr: "هير ماسك",
    description: `Hair Mask - Nourishing & Revitalizing. This rich formula is packed with natural extracts that bring back life and smoothness to your hair. It includes Argan Oil, known for its nourishing and repairing properties, Olive Fruit Extract for deep hydration and maintaining hair elasticity, and Jojoba Seed Extract to feed your hair and make it even softer. Plus, it's boosted with caffeine to stimulate your scalp and support healthy hair growth. Perfect for repairing dry, damaged hair, giving it a healthy, strong look with lasting softness and shine.`,
    descriptionAr: "هير ماسك مغذي ومجدد للشعرتركيبة غنية بالمستخلصات الطبيعية التي تعيد الحيوية والنعومة للشعر. يحتوي على مستخلص زيت الأرجان المعروف بخصائصه المغذية والمرممة، ومستخلص زيت فاكهة Olea Europaea (الزيتون) الذي يرطب بعمق ويحافظ على مرونة الشعر، ومستخلص بذور السيمونديا الصينية (الجوجوبا) الذي يغذي الشعر ويزيد من نعومته.مدعّم بالكافيين لتحفيز فروة الرأس وتنشيط نمو الشعر الصحي.هير ماسك مثالي لإصلاح الشعر التالف والجاف ومنحه مظهرًا صحيًا وقويًا مع نعومة ولمعان يدومان.",
    price: 24.99,
    image: hermaskproduct,
    thumbnails: [
      hermaskproduct,
      hermaskdetalis,
      hairmaskimage,
      h,
      wertyuio
    ],
    category: "Hair-care"
  },
  { 
    id: 4,
    name: "Serum",
    nameAr: "سيروم",
    description: `Nourishing & Strengthening Hair Serum. A luxurious, high-performance serum infused with a potent blend of vitamins and natural oils designed to revitalize and protect your hair. Enriched with Argan Oil to repair damage and boost natural shine, Jojoba Oil (Simmondsia Chinensis) to deeply hydrate each strand, and Rosemary Oil to stimulate the scalp and encourage stronger, healthier hair growth. This lightweight formula glides effortlessly onto your hair, leaving behind a subtle, long-lasting fragrance without any heaviness or residue. It also forms a protective barrier against heat from styling tools and sun exposure, while shielding your hair from chlorine and salt damage — making it the perfect everyday serum, even in harsh environments.`,
    descriptionAr: "سيروم مغذي ومقوي للشعرسيروم فاخر بتركيبة متطورة غنية بمجموعة من الفيتامينات والزيوت الطبيعية التي تعزز صحة الشعر وتحميه. يحتوي على زيت الأرجان لترميم الشعر ومنحه لمعانًا طبيعيًا، وزيت السيموندا الصينية (الجوجوبا) لترطيب الألياف بعمق، وزيت الروز ماري لتحفيز فروة الرأس ودعم نمو شعر صحي وقوي.يتميز السيروم بتركيبة خفيفة مع عطر ناعم يدوم برقة، دون إثقال الشعر.كما يوفر طبقة حماية فعالة ضد الحرارة الناتجة عن الشمس و أدوات التصفيف، ويحمي الشعر من تأثير الكلور والأملاح، مما يجعله مثاليًا للاستخدام اليومي وللوقاية في البيئات القاسية.",
    price: 14.99,
    image: productsearm,
    thumbnails: [
      productsearm,
      productsearmdeatalis,
      asdfiop,
      supproduct1zero,
      hirsermimage,
    ],
    category: "Hair-care"
  },
  {
    id: 5,
    name: "Anti-Dandruff Shampoo",
    nameAr: "شامبو للقشرة",
    description: `Anti-Dandruff Shampoo and Scalp Cleanser. A specialized formula that combines effectiveness and hydration. It contains Argan Oil Extract to nourish and strengthen hair fibers, and caffeine to stimulate the scalp and activate blood circulation. Fortified with a coco complex for hydration and a blend of humectants and moisturizing ingredients to maintain hair softness during treatment. It contains Selenium Sulfide at a carefully measured concentration for deep cleaning, effectively removing dandruff and impurities from the scalp, leaving a light, refreshing scent that lasts all day. Ideal for hair that requires intensive cleansing and moisturizing care at the same time..`,
    descriptionAr: "شامبو مضاد للقشرة ومنظف لفروة الرأستركيبة متخصصة تجمع بين الفعالية والترطيب، يحتوي على مستخلص زيت الأرجان لتغذية الشعر وتقوية أليافه، والكافيين لتحفيز فروة الرأس وتنشيط الدورة الدموية.مدعّم بمجموعة الكوكو للترطيب ومجموعة الهيموكتانت (Humectants) والمواد المرطبة، للحفاظ على نعومة الشعر أثناء العلاج.يحتوي على سيلينيوم سلفيد بتركيز مدروس لتنظيف عميق وإزالة القشرة والشوائب من فروة الرأس بفعالية، مع ترك عطر خفيف ومنعش يدوم طوال اليوم.مثالي للشعر الذي يحتاج إلى تنظيف مكثف وعناية مرطبة في نفس الوقت",
    price: 39.99,
    image: productimage2,
    thumbnails: [
      productimage2,
      shampoproductditals,
      shmpoimage,
      shampoimage,
      aertyuiop
    ],
    category: "Hair-care"
  },
];




export const mainPharmacy = {
  id: 0,
  name: "Al-Azabe Pharmacy",
  nameAr: "صيدلية العزابي",
  image: alazabe, // الصورة هنا حسب تعريفك السابق

  branches: [
    {
      id: 101,
      location: "Nasr City",
      locationAr: "مدينه نصر",
      coordinates: [34.0522, -118.2437],
    },
    {
      id: 102,
      location: "Marina",
      locationAr: "مارينا",
      coordinates: [],
    },
    {
      id: 103,
      location: "San Stefano",
      locationAr: "سان ستيفانو",
      coordinates: [],
    },
    {
      id: 104,
      location: "Mohandessin",
      locationAr: "المهندسين",
      coordinates: [],
    },
    {
      id: 105,
      location: "10th of Ramadan",
      locationAr: "العاشر من رمضان",
      coordinates: [],
    },
    {
      id: 106,
      location: "Heliopolis",
      locationAr: "مصر الجديدة",
      coordinates: [],
    },
    {
      id: 107,
      location: "El-Waily",
      locationAr: "الوايلى",
      coordinates: [],
    },
    {
      id: 108,
      location: "Korba College of Girls",
      locationAr: "الكوربة كلية البنات",
      coordinates: [],
    },
    {
      id: 109,
      location: "Faisal",
      locationAr: "فيصل",
      coordinates: [],
    },
    {
      id: 110,
      location: "Mosaddaq",
      locationAr: "مصدق",
      coordinates: [],
    },
    {
      id: 111,
      location: "Ramses",
      locationAr: "رمسيس",
      coordinates: [],
    },
    {
      id: 112,
      location: "El Manial",
      locationAr: "المنيل",
      coordinates: [],
    },
    {
      id: 113,
      location: "El Hosain",
      locationAr: "الحسين",
      coordinates: [],
    },
    {
      id: 114,
      location: "Abbasiya",
      locationAr: "العباسية",
      coordinates: [],
    },
    {
      id: 115,
      location: "Zamalek",
      locationAr: "الزمالك",
      coordinates: [],
    },
    {
      id: 116,
      location: "Future City",
      locationAr: "فيوتشر",
      coordinates: [],
    },
    {
      id: 117,
      location: "El Hejaz",
      locationAr: "الحجاز",
      coordinates: [],
    },
    {
      id: 118,
      location: "Nadi El Said",
      locationAr: "نادى الصيد",
      coordinates: [],
    },
    {
      id: 119,
      location: "Mall of Arabia",
      locationAr: "مول العرب",
      coordinates: [],
    },
    {
      id: 120,
      location: "Roxy",
      locationAr: "روكسى",
      coordinates: [],
    },
    {
      id: 121,
      location: "Mokattam",
      locationAr: "المقطم",
      coordinates: [],
    },
    {
      id: 122,
      location: "Sheraton",
      locationAr: "شيراتون",
      coordinates: [],
    },
    {
      id: 123,
      location: "Talbia",
      locationAr: "الطالبية",
      coordinates: [],
    },
    {
      id: 124,
      location: "Al Horreya",
      locationAr: "الحرية",
      coordinates: [],
    },
    {
      id: 125,
      location: "Nozha",
      locationAr: "النزهة",
      coordinates: [],
    },
    {
      id: 126,
      location: "El Bustan",
      locationAr: "البستان",
      coordinates: [],
    },
    {
      id: 127,
      location: "Lasty Mall",
      locationAr: "لاستى مول",
      coordinates: [],
    },
    {
      id: 128,
      location: "Nady El Ahly",
      locationAr: "نادى الاهلى",
      coordinates: [],
    },
    {
      id: 129,
      location: "Sayeda Zeinab",
      locationAr: "السيدة زينب",
      coordinates: [],
    },
    {
      id: 130,
      location: "Giza",
      locationAr: "الجيزة",
      coordinates: [],
    },
    {
      id: 131,
      location: "Silver Mall",
      locationAr: "سلفر مول",
      coordinates: [],
    },
    {
      id: 132,
      location: "Shubra",
      locationAr: "شبرا",
      coordinates: [],
    },
    {
      id: 133,
      location: "Madinty",
      locationAr: "مدينتى",
      coordinates: [],
    },
    {
      id: 134,
      location: "Talaat Harb",
      locationAr: "طلعت حرب",
      coordinates: [],
    },
    {
      id: 135,
      location: "Dar El Defaa El Gawy",
      locationAr: "دار الدفاع الجوى",
      coordinates: [],
    },
    {
      id: 136,
      location: "El Rehab",
      locationAr: "الرحاب",
      coordinates: [],
    },
    {
      id: 137,
      location: "Arkan Mall",
      locationAr: "اركان مول",
      coordinates: [],
    },
    {
      id: 138,
      location: "Qasr El Ainy",
      locationAr: "القصر العينى",
      coordinates: [],
    },
    {
      id: 139,
      location: "Hadayek El Ahram",
      locationAr: "حدايق الاهرام",
      coordinates: [],
    },
    {
      id: 140,
      location: "Semiramis",
      locationAr: "سميراميس",
      coordinates: [],
    },
    {
      id: 141,
      location: "El Salam",
      locationAr: "السلام",
      coordinates: [],
    },
    {
      id: 142,
      location: "Araby",
      locationAr: "عرابى",
      coordinates: [],
    },
    {
      id: 143,
      location: "El Shorouk",
      locationAr: "الشروق",
      coordinates: [],
    },
    {
      id: 144,
      location: "Shehab",
      locationAr: "شهاب",
      coordinates: [],
    },
    {
      id: 145,
      location: "Waterway",
      locationAr: "وترواي",
      coordinates: [],
    },
    {
      id: 146,
      location: "Gameat El Dowal",
      locationAr: "جامعة الدول",
      coordinates: [],
    },
    {
      id: 147,
      location: "Zahraa El Maadi",
      locationAr: "زهراء المعادى",
      coordinates: [],
    },
    {
      id: 148,
      location: "Makram Ebeid",
      locationAr: "مكرم عبيد",
      coordinates: [],
    },
    {
      id: 149,
      location: "Abbas El Akkad",
      locationAr: "عباس العقاد",
      coordinates: [],
    },
    {
      id: 150,
      location: "Maadi",
      locationAr: "المعادى",
      coordinates: [],
    },
    {
      id: 151,
      location: "Helwan",
      locationAr: "حلوان",
      coordinates: [],
    },
    {
      id: 152,
      location: "El Hosary",
      locationAr: "الحصرى",
      coordinates: [],
    },
    {
      id: 153,
      location: "El Maadi Elsiliky",
      locationAr: "المعادى الالسلكى",
      coordinates: [],
    },
    {
      id: 154,
      location: "Mall of Egypt",
      locationAr: "مول مصر",
      coordinates: [],
    },
    {
      id: 155,
      location: "Arcadia Mall",
      locationAr: "اركاديا مول",
      coordinates: [],
    },
    {
      id: 156,
      location: "Square Mall",
      locationAr: "سكوير مول",
      coordinates: [],
    },
    {
      id: 157,
      location: "City Stars",
      locationAr: "سيتى ستارز",
      coordinates: [],
    },
    {
      id: 158,
      location: "Madinty B12",
      locationAr: "مدينتى B12",
      coordinates: [],
    },
    {
      id: 159,
      location: "Maadi Degla",
      locationAr: "المعادى دجلة",
      coordinates: [],
    },
    {
      id: 160,
      location: "New Cairo",
      locationAr: "التجمع الخامس",
      coordinates: [],
    },
  ],
};



export const pharmacies: Pharmacy[] = [

  
  {
    id: 1,
    name: "Al-Zaghbi Pharmacy",
    nameAr: "صيدلية  الزغبي",
    image: alzlapy,
    branches: [
      {
        id: 101,
        location: "Nasr City",
        locationAr: "مدينه نصر ",
        coordinates: [34.0522, -118.2437]
      },
      {
        id: 101,
        location: "New Cairo",
        locationAr: "  التجمع الخامس",
        coordinates: [34.0522, -118.2437]
      },
  
    ]
  },
  {
    id: 2,
    name: "Bee Well Pharmacy",
    nameAr: "صيدلية  بي ويل ",
    image:bewil ,
    branches: [
      {
        id: 201,
        location: "New Cairo",
        locationAr: "  التجمع الخامس ",
        coordinates: [34.0650, -118.2300]
      },
      {
        id: 202,
        location: " Heliopolis",
        locationAr: " مصر الجديده",
        coordinates: [34.0540, -118.2580]
      },
      {
        id: 203,
        location: "Nasr City",
        locationAr: " مدينه نصر ",
        coordinates: [34.0190, -118.4980]
      },
         {
        id: 204,
        location: "Faisal",
        locationAr: " فيصل ",
        coordinates: [34.0190, -118.4980]
      }
    ]
  },
  {
    id: 3,
    name: "Al-Khabiri Pharmacy",
    nameAr: "  الخبيري ",
    image: al5ayre,
    branches: [
      {
        id: 301,
        location: "Elmohandseen",
        locationAr: " المهنديسن",
        coordinates: [34.0722, -118.2639]
      },
      {
        id: 302,
        location: "October ",
        locationAr: "  اكتوبر",
        coordinates: [34.0819, -118.2468]
      },
         {
        id: 302,
        location: "Maadi ",
        locationAr: "  المعادي",
        coordinates: [34.0819, -118.2468]
      },
         {
        id: 302,
        location: "Faisal ",
        locationAr: "  فيصل",
        coordinates: [34.0819, -118.2468]
      }
    ]
  },
   {
    id: 4,
    name: "Healtypharmasy",
    nameAr: "  هيلثي ",
    image: Healtypharmasy,
    branches: [
      {
        id: 301,
        location: "Elmohandseen",
        locationAr: " المهنديسن",
        coordinates: [34.0722, -118.2639]
      },
      {
        id: 302,
        location: "New Cairo ",
        locationAr: "  التجمع",
        coordinates: [34.0819, -118.2468]
      },
         {
        id: 302,
        location: "Maadi ",
        locationAr: "  المعادي",
        coordinates: [34.0819, -118.2468]
      },
         {
        id: 302,
        location: "Heliopolis ",
        locationAr: "  مصر الجديده",
        coordinates: [34.0819, -118.2468]
      }
    ]
  },
    {
    id: 5,
    name: "Health Pharmacy",
    nameAr: "  صحه ",
    image: sehasydalaya,
    branches: [
      {
        id: 301,
        location: "Nasr City",
        locationAr: " مدينه نصر ",
        coordinates: [34.0722, -118.2639]
      },
      {
        id: 302,
        location: "New Cairo ",
        locationAr: "  التجمع",
        coordinates: [34.0819, -118.2468]
      },
         
    ]
  },
    {
    id: 6,
    name: "Abdullah Pharmacy",
    nameAr: "  عبد الله  ",
    image: abdulahhsydalaya,
    branches: [
      {
        id: 301,
        location: "Obour city",
        locationAr: "العبور",
        coordinates: [34.0722, -118.2639]
      },
   
    ]
  },

   {
    id: 7,
    name: "Allam",
    nameAr: "  صيدليه علام  ",
    image: alaaam,
    branches: [
      {
        id: 301,
        location: "Obour city",
        locationAr: "العبور",
        coordinates: [34.0722, -118.2639]
      },
   
    ]
  },
   {
    id: 7,
    name: "Phrama Pharmacy",
    nameAr: " صيدليه فارما ",
    image: phrama,
    branches: [
      {
        id: 301,
        location: "  Gesr Al Suez",
        locationAr: "جسر السويس",
        coordinates: [34.0722, -118.2639]
      },
        {
        id: 301,
        location: " Nasr City ",
        locationAr: " مدينه نصر ",
        coordinates: [34.0722, -118.2639]
      },
       {
        id: 301,
        location: " Hadayek El Kobba ",
        locationAr: " جدايق القبة",
        coordinates: [34.0722, -118.2639]
      },

   
    ]
  },
];






export const jobPositions = [
  { value: "", label: "Select a position", labelAr: "اختر منصب" },
  { value: "sales", label: "Sales Representative", labelAr: "مندوب مبيعات" },
  { value: "marketing", label: "Marketing Specialist", labelAr: "أخصائي تسويق" },
  { value: "research", label: "Research & Development", labelAr: "البحث والتطوير" },
  { value: "customer", label: "Customer Service", labelAr: "خدمة العملاء" },
  { value: "management", label: "Management", labelAr: "إدارة" },
  { value: "other", label: "Other", labelAr: "أخرى" }
];