import imageproduct from '../image/product-1.jpeg';
import productimage2 from '../image/image-shampo.jpeg';
import productdetais from '../image/deatailsproducr.jpeg';
import hermaskproduct from '../image/hermaskproduct.jpeg';
import hermaskdetalis from '../image/hermaskdetals.jpeg';
import shampoproductditals from '../image/shampoproductdetails.jpeg';
import productsearm from '../image/productsearm.jpeg';
import productsearmdeatalis from '../image/serum2.jpeg';


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
    image: productimage2,
    thumbnails: [
      productimage2,
      shampoproductditals,
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
hermaskdetalis
 
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
      productsearmdeatalis

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
     shampoproductditals


    ],
    category: "Eyes"
  },
  // {
  //   id: 6,
  //   name: "Hydrating Face Mist",
  //   nameAr: "رذاذ وجه مرطب",
  //   description: "A refreshing face mist that hydrates and revitalizes the skin. Can be used before makeup or throughout the day for a boost of hydration.",
  //   descriptionAr: "رذاذ وجه منعش يرطب وينعش البشرة. يمكن استخدامه قبل المكياج أو طوال اليوم للحصول على دفعة من الترطيب.",
  //   price: 16.99,
  //   image: "https://images.pexels.com/photos/3738359/pexels-photo-3738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   thumbnails: [
  //     "https://images.pexels.com/photos/3738359/pexels-photo-3738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     "https://images.pexels.com/photos/2693622/pexels-photo-2693622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     "https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  //   ],
  //   category: "Skincare"
  // }
];

export const pharmacies: Pharmacy[] = [
  {
    id: 1,
    name: "HealthPlus Pharmacy",
    nameAr: "صيدلية هيلث بلس",
    image: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    branches: [
      {
        id: 101,
        location: "Downtown, Main Street",
        locationAr: "وسط المدينة، الشارع الرئيسي",
        coordinates: [34.0522, -118.2437]
      },
      {
        id: 102,
        location: "Northside Mall",
        locationAr: "مول الجانب الشمالي",
        coordinates: [34.0610, -118.2522]
      }
    ]
  },
  {
    id: 2,
    name: "MediCare Pharmacy",
    nameAr: "صيدلية ميدي كير",
    image: "https://images.pexels.com/photos/4107198/pexels-photo-4107198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    branches: [
      {
        id: 201,
        location: "Eastside Plaza",
        locationAr: "بلازا الجانب الشرقي",
        coordinates: [34.0650, -118.2300]
      },
      {
        id: 202,
        location: "Westfield Center",
        locationAr: "مركز ويستفيلد",
        coordinates: [34.0540, -118.2580]
      },
      {
        id: 203,
        location: "Ocean Avenue",
        locationAr: "شارع المحيط",
        coordinates: [34.0190, -118.4980]
      }
    ]
  },
  {
    id: 3,
    name: "GreenLife Pharmacy",
    nameAr: "صيدلية جرين لايف",
    image: "https://images.pexels.com/photos/5699464/pexels-photo-5699464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    branches: [
      {
        id: 301,
        location: "Central Park",
        locationAr: "الحديقة المركزية",
        coordinates: [34.0722, -118.2639]
      },
      {
        id: 302,
        location: "Lakeview Drive",
        locationAr: "شارع ليك فيو",
        coordinates: [34.0819, -118.2468]
      }
    ]
  }
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