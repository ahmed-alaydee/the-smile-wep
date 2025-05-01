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
    description: "ourishing & Restoring ConditionerOur conditioner is packed with essential vitamins that help bring your hair back to life — adding shine, softness, and strength. It's infused with Argan Oil for deep hydration, Arabic Coffee Seed Extract to refresh the scalp and boost hair growth, and Jojoba Oil to leave your hair smooth and easy to manage.We also added Olive Fruit Extract to deeply nourish your strands and keep them flexible and healthy.It has a light, clean scent that makes your hair feel fresh without weighing it down.Perfect for everyday use and works great on all hair types.",
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
    description: "A nourishing shampoo that’s packed with essential vitamins to strengthen your hair and boost its health. It’s got argan oil to repair dry and damaged hair, aloe vera extract to soothe and hydrate your scalp, and castor oil to promote hair growth and make it thicker.With a blend of humectants, it locks in moisture deep into your hair, plus protein oil that helps repair damaged strands and leaves your hair feeling smooth and shiny. It’s totally sulfate-free, so it’s gentle on both your hair and scalp, making it perfect for color-treated or chemically processed hair.",
    descriptionAr: "شامبو مغذي للشعرتركيبة متطورة غنية بمجموعة من الفيتامينات الأساسية لتقوية الشعر وتعزيز صحته. يحتوي على زيت الأرجان لترميم الشعر الجاف والتالف، وخلاصة الصبار لتهدئة فروة الرأس وترطيبها، وزيت الخروع لتحفيز نمو الشعر وزيادة كثافته.مزود بمجموعة الهيموكتانت (Humectants) التي تحافظ على رطوبة الشعر بعمق، بالإضافة إلى زيت البروتين الذي يعمل على إصلاح الألياف التالفة ومنح الشعر نعومة ولمعانًا طبيعيًا.خالٍ تمامًا من السلفات، مما يجعله لطيفًا على الشعر وفروة الرأس ومثاليًا للشعر المصبوغ والمعالج كيميائيًا",
    price: 19.99,
    image:shmpoimagezro  ,
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
    name: "Hair mask ",
    nameAr: " هيرماسك",
    description: "Hair Mask - Nourishing & RevitalizingThis rich formula is packed with natural extracts that bring back the life and smoothness to your hair. It includes Argan Oil, known for its nourishing and repairing properties, Olive Fruit Extract for deep hydration and maintaining hair elasticity, and Jojoba Seed Extract to feed your hair and make it even softerPlus, it's boosted with caffeine to stimulate your scalp and support healthy hair growthPerfect for repairing dry, damaged hair, giving it a healthy, strong look with lasting softness and shine.",
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
    nameAr: "  سيروم",
    description: "Nourishing & Strengthening Hair SerumA luxurious, high-performance serum infused with a potent blend of vitamins and natural oils designed to revitalize and protect your hair.Enriched with Argan Oil to repair damage and boost natural shine, Jojoba Oil (Simmondsia Chinensis) to deeply hydrate each strand, and Rosemary Oil to stimulate the scalp and encourage stronger, healthier hair growth.This lightweight formula glides effortlessly onto your hair, leaving behind a subtle, long-lasting fragrance without any heaviness or residue.It also forms a protective barrier against heat from styling tools and sun exposure, while shielding your hair from chlorine and salt damage — making it the perfect everyday serum, even in harsh environments.",
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
    name: " Shampoo anti-dandruff ",
    nameAr: " شامبو للقشرة",
    description: "Anti-Dandruff Shampoo and Scalp Cleanser A specialized formula that combines effectiveness and hydration. It contains Argan Oil extract to nourish and strengthen hair fibers, and caffeine to stimulate the scalp and activate blood circulation. Fortified with a coco complex for hydration and a blend of humectants and moisturizing ingredients to maintain the hair's softness during treatment. It contains sulfates at a carefully measured concentration for deep cleaning, effectively removing dandruff and impurities from the scalp, leaving a light, refreshing scent that lasts all day. Ideal for hair that requires intensive cleansing and moisturizing care at the same time.",
    descriptionAr: "شامبو مضاد للقشرة ومنظف لفروة الرأستركيبة متخصصة تجمع بين الفعالية والترطيب، يحتوي على مستخلص زيت الأرجان لتغذية الشعر وتقوية أليافه، والكافيين لتحفيز فروة الرأس وتنشيط الدورة الدموية.مدعّم بمجموعة الكوكو للترطيب ومجموعة الهيموكتانت (Humectants) والمواد المرطبة، للحفاظ على نعومة الشعر أثناء العلاج.يحتوي على السلفات بتركيز مدروس لتنظيف عميق وإزالة القشرة والشوائب من فروة الرأس بفعالية، مع ترك عطر خفيف ومنعش يدوم طوال اليوم.مثالي للشعر الذي يحتاج إلى تنظيف مكثف وعناية مرطبة في نفس الوقت.",
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
    image: al5ayre,
    branches: [
      {
        id: 301,
        location: "Obour city",
        locationAr: "العبور",
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