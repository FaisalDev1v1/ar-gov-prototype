import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  BarChart3,
  Search,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Database,
  ArrowLeft,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aiInsightsImage from "@/assets/ai-insights.jpg";
import benchmarkingImage from "@/assets/benchmarking.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "ذكاء اصطناعي متقدم",
      description: "محرك AI يحلل آلاف المعايير والممارسات الحكومية لاستخلاص رؤى قابلة للتنفيذ",
    },
    {
      icon: BarChart3,
      title: "قياس شامل",
      description: "مقارنة أداء جهتك مع أفضل الممارسات المحلية والعالمية عبر جميع القطاعات",
    },
    {
      icon: Search,
      title: "بحث ذكي",
      description: "ابحث واستكشف قاعدة بيانات ضخمة من المبادرات والسياسات الحكومية الناجحة",
    },
    {
      icon: Target,
      title: "تخطيط استراتيجي",
      description: "بناء استراتيجيات التحول مبنية على بيانات حقيقية وتجارب مثبتة النجاح",
    },
    {
      icon: Zap,
      title: "رؤى فورية",
      description: "احصل على تحليلات وتوصيات فورية تساعدك على اتخاذ قرارات سريعة ودقيقة",
    },
    {
      icon: Shield,
      title: "أمان وموثوقية",
      description: "منصة آمنة تلتزم بأعلى معايير حماية البيانات الحكومية الحساسة",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "تسريع التحول الرقمي",
      description: "تقليل الوقت اللازم لتطوير المبادرات من شهور إلى أيام",
      metric: "75%",
    },
    {
      icon: Users,
      title: "تحسين تجربة المستفيدين",
      description: "تطبيق أفضل الممارسات المجربة لرفع رضا المواطنين",
      metric: "92%",
    },
    {
      icon: Database,
      title: "قرارات مبنية على البيانات",
      description: "اعتمد على تحليلات دقيقة بدلاً من التخمين والافتراضات",
      metric: "100%",
    },
  ];

  const sectors = [
    "الصحة",
    "التعليم",
    "البلديات",
    "الحكومة الرقمية",
    "الاقتصاد",
    "النقل",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gov-section pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="GovSight Platform"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="gov-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <Zap className="w-4 h-4" />
                منصة القياس والتحليل الحكومي بالذكاء الاصطناعي
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent">
                قرارات أذكى
              </span>
              <br />
              <span className="text-foreground">لحكومة أفضل</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              استخدم قوة الذكاء الاصطناعي للمقارنة مع أفضل الممارسات الحكومية واستخلاص
              الرؤى والاستراتيجيات التي تحقق التحول الحقيقي
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="gov-gradient text-white font-medium text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
              >
                ابدأ التجربة المجانية
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-muted"
                asChild
              >
                <Link to="/product">استكشف المنصة</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>آمن ومعتمد</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                <span>سريع ودقيق</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span>سهل الاستخدام</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              الميزات الرئيسية
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              كل ما تحتاجه لاتخاذ قرارات استراتيجية مبنية على البيانات والذكاء الاصطناعي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  لماذا يهم هذا
                  <br />
                  <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                    للجهات الحكومية؟
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  في عصر التحول الرقمي، تحتاج الحكومات إلى أدوات ذكية لاتخاذ قرارات
                  سريعة ودقيقة. GovSight توفر لك الرؤية الشاملة والتحليل العميق.
                </p>
              </div>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <span className="text-2xl font-bold text-primary">
                        {benefit.metric}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative animate-scale-in">
              <img
                src={aiInsightsImage}
                alt="AI Insights"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="gov-section bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <img
                src={benchmarkingImage}
                alt="Benchmarking"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                  محرك الذكاء الاصطناعي
                </span>
                <br />
                للقياس والمقارنة
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                نستخدم تقنيات الذكاء الاصطناعي المتقدمة لتحليل آلاف المبادرات
                والسياسات الحكومية واستخلاص الأنماط والممارسات الناجحة.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">تحليل ذكي للبيانات</h4>
                    <p className="text-muted-foreground text-sm">
                      معالجة وتحليل ملايين نقاط البيانات من مصادر حكومية موثوقة
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">مقارنات دقيقة</h4>
                    <p className="text-muted-foreground text-sm">
                      قارن أداءك مع جهات مماثلة محلياً وعالمياً بدقة عالية
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">توصيات قابلة للتنفيذ</h4>
                    <p className="text-muted-foreground text-sm">
                      احصل على خطوات عملية واضحة لتحسين أداء جهتك
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="gov-gradient text-white font-medium group"
                asChild
              >
                <Link to="/product">
                  اكتشف المزيد عن المنتج
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              القطاعات المدعومة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نغطي جميع القطاعات الحكومية الرئيسية بمعايير وممارسات شاملة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {sector}
                </h4>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/sectors">عرض جميع القطاعات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gov-section bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="gov-container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              ابدأ رحلة التحول الرقمي اليوم
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              انضم إلى العشرات من الجهات الحكومية التي تستخدم GovSight لاتخاذ
              قرارات أفضل وتحقيق نتائج أسرع
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-medium text-lg px-8 py-6 shadow-xl"
              >
                احجز عرضاً توضيحياً
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
                <Link to="/about">تعرف علينا أكثر</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
