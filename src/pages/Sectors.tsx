import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  GraduationCap,
  Building2,
  Smartphone,
  TrendingUp,
  Car,
  Leaf,
  Shield,
  Users,
  Home,
  Briefcase,
  Globe,
  Zap,
} from "lucide-react";

const Sectors = () => {
  const sectors = [
    {
      icon: Heart,
      name: "الصحة",
      description: "تطوير الخدمات الصحية ورفع جودة الرعاية الطبية",
      benchmarks: 250,
      practices: 180,
      insights: 95,
      color: "from-red-500 to-pink-500",
      categories: [
        "المستشفيات الذكية",
        "الصحة الرقمية",
        "رضا المرضى",
        "كفاءة التشغيل",
        "جودة الرعاية",
      ],
    },
    {
      icon: GraduationCap,
      name: "التعليم",
      description: "تحسين جودة التعليم وتطوير المناهج والبنية التحتية",
      benchmarks: 320,
      practices: 210,
      insights: 120,
      color: "from-blue-500 to-cyan-500",
      categories: [
        "التعليم الإلكتروني",
        "تطوير المناهج",
        "أداء الطلاب",
        "تأهيل المعلمين",
        "البنية التقنية",
      ],
    },
    {
      icon: Building2,
      name: "البلديات",
      description: "تطوير الخدمات البلدية وتحسين جودة الحياة في المدن",
      benchmarks: 280,
      practices: 190,
      insights: 110,
      color: "from-orange-500 to-amber-500",
      categories: [
        "التخطيط العمراني",
        "النظافة والصيانة",
        "النقل العام",
        "المساحات الخضراء",
        "الخدمات الإلكترونية",
      ],
    },
    {
      icon: Smartphone,
      name: "الحكومة الرقمية",
      description: "التحول الرقمي وتطوير الخدمات الحكومية الإلكترونية",
      benchmarks: 350,
      practices: 240,
      insights: 140,
      color: "from-purple-500 to-indigo-500",
      categories: [
        "البنية التحتية الرقمية",
        "الخدمات الإلكترونية",
        "الذكاء الاصطناعي",
        "البيانات المفتوحة",
        "الأمن السيبراني",
      ],
    },
    {
      icon: TrendingUp,
      name: "الاقتصاد",
      description: "تعزيز النمو الاقتصادي ودعم القطاع الخاص والاستثمار",
      benchmarks: 290,
      practices: 200,
      insights: 115,
      color: "from-green-500 to-emerald-500",
      categories: [
        "دعم المنشآت",
        "تحفيز الاستثمار",
        "التنويع الاقتصادي",
        "ريادة الأعمال",
        "السياحة",
      ],
    },
    {
      icon: Car,
      name: "النقل والمواصلات",
      description: "تطوير شبكات النقل وتحسين كفاءة المواصلات العامة",
      benchmarks: 220,
      practices: 160,
      insights: 85,
      color: "from-indigo-500 to-blue-500",
      categories: [
        "النقل الذكي",
        "السلامة المرورية",
        "النقل العام",
        "البنية التحتية",
        "اللوجستيات",
      ],
    },
    {
      icon: Leaf,
      name: "البيئة والاستدامة",
      description: "حماية البيئة وتحقيق الاستدامة والطاقة المتجددة",
      benchmarks: 180,
      practices: 140,
      insights: 75,
      color: "from-teal-500 to-green-500",
      categories: [
        "الطاقة المتجددة",
        "إدارة النفايات",
        "جودة الهواء",
        "الاقتصاد الأخضر",
        "المحميات الطبيعية",
      ],
    },
    {
      icon: Shield,
      name: "الأمن والسلامة",
      description: "تعزيز الأمن العام وتطوير الخدمات الأمنية",
      benchmarks: 200,
      practices: 150,
      insights: 80,
      color: "from-gray-700 to-gray-900",
      categories: [
        "الأمن السيبراني",
        "الطوارئ والكوارث",
        "السلامة العامة",
        "الأمن الوقائي",
        "المراقبة الذكية",
      ],
    },
    {
      icon: Users,
      name: "الموارد البشرية",
      description: "تطوير الكفاءات الوظيفية وتحسين بيئة العمل",
      benchmarks: 240,
      practices: 170,
      insights: 90,
      color: "from-pink-500 to-rose-500",
      categories: [
        "إدارة المواهب",
        "التدريب والتطوير",
        "الأداء المؤسسي",
        "الرضا الوظيفي",
        "التوطين",
      ],
    },
    {
      icon: Home,
      name: "الإسكان",
      description: "توفير الإسكان المناسب وتطوير المشاريع السكنية",
      benchmarks: 160,
      practices: 120,
      insights: 65,
      color: "from-yellow-500 to-orange-500",
      categories: [
        "الإسكان الميسر",
        "التخطيط السكني",
        "التمويل العقاري",
        "البنية التحتية",
        "الجودة والمعايير",
      ],
    },
    {
      icon: Briefcase,
      name: "العمل",
      description: "تنظيم سوق العمل وحماية حقوق العاملين",
      benchmarks: 190,
      practices: 145,
      insights: 70,
      color: "from-cyan-500 to-blue-600",
      categories: [
        "سوق العمل",
        "حماية الأجور",
        "التوظيف",
        "بيئة العمل",
        "التفتيش العمالي",
      ],
    },
    {
      icon: Globe,
      name: "الشؤون الخارجية",
      description: "تعزيز العلاقات الدولية والدبلوماسية",
      benchmarks: 140,
      practices: 110,
      insights: 60,
      color: "from-indigo-600 to-purple-600",
      categories: [
        "الدبلوماسية الرقمية",
        "التعاون الدولي",
        "الاتفاقيات",
        "الخدمات القنصلية",
        "العلاقات الثنائية",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gov-section pt-16 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="gov-container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Zap className="w-4 h-4" />
                القطاعات الحكومية
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                تغطية شاملة
              </span>
              <br />
              لجميع القطاعات الحكومية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نوفر معايير وممارسات وتحليلات متخصصة لأكثر من 12 قطاعاً حكومياً
              رئيسياً
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">قطاع حكومي</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2,800+</div>
              <div className="text-muted-foreground">معيار قياس</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">1,900+</div>
              <div className="text-muted-foreground">أفضل ممارسة</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-muted-foreground">رؤية ذكية</div>
            </Card>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Header */}
                <div
                  className={`p-6 bg-gradient-to-r ${sector.color} text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <sector.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{sector.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 border-b border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {sector.benchmarks}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        معيار
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">
                        {sector.practices}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ممارسة
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        {sector.insights}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        رؤية
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                    الفئات المتاحة
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.categories.map((category, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gov-section bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="gov-container">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              ابحث عن معايير قطاعك الآن
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              استكشف المعايير والممارسات المتاحة في قطاعك واحصل على رؤى قيّمة
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl">
              ابدأ الاستكشاف
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
