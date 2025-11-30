import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Search,
  BarChart3,
  Lightbulb,
  Database,
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const Product = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "محرك الذكاء الاصطناعي",
      description:
        "تقنية AI متطورة تحلل آلاف المبادرات والمعايير الحكومية لاستخلاص رؤى عميقة",
      features: [
        "معالجة اللغة الطبيعية",
        "التعلم الآلي المتقدم",
        "تحليل الأنماط والاتجاهات",
        "توليد الرؤى التلقائي",
      ],
    },
    {
      icon: Search,
      title: "البحث والاستكشاف",
      description:
        "ابحث في قاعدة بيانات ضخمة من الممارسات والسياسات الحكومية بسهولة ودقة",
      features: [
        "بحث ذكي متعدد اللغات",
        "فلاتر متقدمة حسب القطاع والجغرافيا",
        "نتائج مخصصة لاحتياجاتك",
        "حفظ البحوث والمتابعة",
      ],
    },
    {
      icon: BarChart3,
      title: "القياس والمقارنة",
      description:
        "قارن أداء جهتك مع المعايير المحلية والعالمية بطريقة شاملة وموضوعية",
      features: [
        "مقارنات متعددة الأبعاد",
        "معايير قياس معتمدة",
        "تحليل الفجوات",
        "تقارير مفصلة قابلة للتخصيص",
      ],
    },
    {
      icon: Lightbulb,
      title: "توليد الرؤى",
      description:
        "احصل على توصيات ذكية ورؤى قابلة للتنفيذ مبنية على التحليل المتقدم",
      features: [
        "رؤى مخصصة لسياقك",
        "أولويات واضحة للتنفيذ",
        "أفضل الممارسات المثبتة",
        "خارطة طريق التحسين",
      ],
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "حدد مجال الاهتمام",
      description: "اختر القطاع أو المجال الذي ترغب في قياسه أو تحسينه",
    },
    {
      step: "2",
      title: "اكتشف وقارن",
      description: "استعرض المعايير والممارسات المماثلة محلياً وعالمياً",
    },
    {
      step: "3",
      title: "احصل على الرؤى",
      description: "اطلع على التحليل الذكي والتوصيات القابلة للتنفيذ",
    },
    {
      step: "4",
      title: "خطط ونفذ",
      description: "ابن خطة التحسين واستفد من أفضل الممارسات المثبتة",
    },
  ];

  const dataValidation = [
    {
      icon: Database,
      title: "مصادر موثوقة",
      description: "جمع البيانات من مصادر حكومية رسمية ومراجع دولية معتمدة",
    },
    {
      icon: CheckCircle2,
      title: "تحقق متعدد المراحل",
      description: "عملية تحقق صارمة للبيانات والمعايير قبل إدراجها في المنصة",
    },
    {
      icon: Shield,
      title: "تحديث مستمر",
      description: "تحديث دوري للبيانات والمعايير لضمان الدقة والحداثة",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      stat: "75%",
      label: "تسريع في التخطيط",
      description: "تقليص الوقت من شهور إلى أيام",
    },
    {
      icon: Target,
      stat: "90%",
      label: "دقة أعلى",
      description: "قرارات مبنية على بيانات حقيقية",
    },
    {
      icon: Users,
      stat: "50+",
      label: "جهة حكومية",
      description: "تثق في منصتنا",
    },
    {
      icon: Globe,
      stat: "100+",
      label: "دولة",
      description: "مغطاة في قاعدة البيانات",
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
                المنتج
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                منصة متكاملة
              </span>
              <br />
              للقياس والتحليل الحكومي
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              استخدم قوة الذكاء الاصطناعي للوصول إلى آلاف المعايير والممارسات
              الحكومية المجربة، وقارن أداءك، واحصل على رؤى قابلة للتنفيذ
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              قدرات المنصة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أربع محاور رئيسية تغطي احتياجاتك من البحث إلى التنفيذ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <ul className="space-y-3">
                      {capability.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              كيف تعمل المنصة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أربع خطوات بسيطة من التحديد إلى التنفيذ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full gov-gradient flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 h-0.5 bg-border -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Validation */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                كيف نتحقق من
                <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  صحة البيانات
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نلتزم بأعلى معايير الجودة والدقة في جمع وتحليل البيانات الحكومية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataValidation.map((item, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gov-section bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="gov-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {benefit.stat}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {benefit.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gov-section">
        <div className="gov-container">
          <Card className="p-12 text-center gov-gradient text-white animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              جاهز لتجربة المنصة؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              احجز عرضاً توضيحياً مخصصاً واكتشف كيف يمكن لـ GovSight مساعدة جهتك
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium text-lg px-8 py-6"
            >
              احجز عرضاً توضيحياً
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Product;
