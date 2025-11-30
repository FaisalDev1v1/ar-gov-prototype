import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Clock,
  Lock,
  Languages,
  TrendingDown,
  Lightbulb,
  Building2,
  GraduationCap,
  Heart,
  DollarSign,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
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
              <span className="text-foreground">منصة مدعومة بالذكاء الاصطناعي</span>
              <br />
              <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent">
                قيادة التميز من خلال الرؤى الذكية
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نُمكّن الجهات الحكومية من مراقبة أفضل الممارسات العالمية والبقاء على اطلاع دائم بمعايير الأداء المقارن باستخدام الذكاء الاصطناعي.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="gov-gradient text-white font-medium text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group"
              >
                ابدأ الآن
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-muted"
              >
                شاهد الفيديو
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent mb-2">
                  ٣٠٠٠+
                </div>
                <div className="text-muted-foreground font-medium">
                  معيار مقارن
                </div>
              </Card>
              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent mb-2">
                  ٦
                </div>
                <div className="text-muted-foreground font-medium">
                  قطاعات رئيسية
                </div>
              </Card>
              <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent mb-2">
                  ٥٠+
                </div>
                <div className="text-muted-foreground font-medium">
                  دولة مرجعية
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                التحديات الحالية
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تبرز هذه التحديات الحاجة إلى منصة آمنة ومدفوعة بالبيانات تُمكّن الحكومات من الوصول إلى الرؤى العالمية بشكل مستقل وفعّال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "تقارير مقارنة بطيئة ومكلفة",
                description:
                  "تعتمد الحكومات بشكل كبير على الاستشاريين للحصول على معايير وأفضل الممارسات، وهو ما يكون بطيئاً ومكلفاً.",
              },
              {
                icon: Shield,
                title: "مخاطر خصوصية البيانات",
                description:
                  "غالباً ما تتعامل شركات الاستشارات الخارجية مع البيانات الحكومية الحساسة، مما يخلق مخاطر التسرب أو سوء الاستخدام.",
              },
              {
                icon: TrendingDown,
                title: "محدودية الوصول للمعايير العالمية",
                description:
                  "تفتقر الجهات الحكومية غالباً إلى أدوات لمقارنة أدائها مع نظيراتها الدولية بسهولة.",
              },
            ].map((challenge, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
                  <challenge.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {challenge.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What GovSight Offers */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                ما يقدمه GovSight
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              منصة محتوى ومقارنة معيارية مدعومة بالذكاء الاصطناعي تساعد الجهات الحكومية على التعلم من الممارسات العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "محرك المقارنة المعيارية العالمي",
                description:
                  "وصول فوري لمعايير جاهزة مع مقارنة بنقرة واحدة مع الدول والجهات النظيرة.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Lock,
                title: "رؤى آمنة ومباشرة",
                description:
                  "يصل الموظفون إلى الرؤى بشكل آمن عبر المنصة الداخلية، دون الحاجة لمشاركة البيانات مع جهات خارجية.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: BarChart3,
                title: "وصول غير محدود",
                description:
                  "أكثر من ٣٠٠٠ معيار مقارن وحالة استخدام عبر قطاعات متعددة.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Languages,
                title: "تجربة عربية أولاً",
                description:
                  "واجهة مصممة للسياق الحكومي الإقليمي مع أمان على مستوى المؤسسات.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Brain,
                title: "قرارات أسرع وأفضل",
                description:
                  "قرارات مبنية على بيانات مثبتة من أثر المشاريع والبرامج والسياسات المطبقة في الدول النظيرة.",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: Zap,
                title: "تقليل الاعتماد على الاستشاريين",
                description:
                  "تقليل الاعتماد على الاستشارات الخارجية للمقارنة المعيارية الأساسية، مما يقلل التكاليف.",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
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

      {/* How it Works */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                كيف تعمل المنصة
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              أربع خطوات بسيطة من التحديد إلى التنفيذ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                icon: Search,
                title: "حدد مجال الاهتمام",
                description:
                  "اختر القطاع أو المجال الذي ترغب في قياسه أو تحسينه",
              },
              {
                number: "2",
                icon: BarChart3,
                title: "اكتشف وقارن",
                description:
                  "استعرض المعايير وأفضل الممارسات المماثلة عالمياً",
              },
              {
                number: "3",
                icon: Lightbulb,
                title: "احصل على الرؤى",
                description:
                  "اطلع على التحليل الذكي والتوصيات القابلة للتنفيذ",
              },
              {
                number: "4",
                icon: Target,
                title: "خطط ونفذ",
                description:
                  "ابن خطة التحسين واستفد من أفضل الممارسات المثبتة",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 left-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Example - Industrial Sector */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                حالة الاستخدام: القطاع الصناعي
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenge */}
            <Card className="p-8 animate-slide-up">
              <Badge className="mb-4 text-sm">القطاع الصناعي</Badge>
              <h3 className="text-2xl font-bold mb-4">التحديات</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    •
                  </div>
                  <span>رفع الكفاءة الإنتاجية</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    •
                  </div>
                  <span>تقليل الهدر والتكاليف</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                    •
                  </div>
                  <span>الوصول لأفضل الممارسات العالمية</span>
                </li>
              </ul>
            </Card>

            {/* Solution */}
            <Card className="p-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold mb-4">الحل</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <span>نظام ذكاء اصطناعي للـ Benchmarking الفوري</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <span>تحليل الأداء المتقدم</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <span>أفضل الممارسات الصناعية</span>
                </li>
              </ul>
            </Card>

            {/* Results */}
            <Card className="p-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold mb-4">النتائج</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span className="font-medium">تحسين الإنتاجية</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span className="font-medium">خفض التكاليف</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <span className="font-medium">
                    دعم الصناعة 4.0 والقرارات المبنية على البيانات
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                القطاعات المستهدفة
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              حيث يقدم GovSight القيمة أولاً عبر القطاعات الحكومية الرئيسية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "التحول الرقمي",
                count: "520 معيار",
                description:
                  "البنية التحتية الرقمية العامة، معايير جودة الخدمة، نضج القنوات المتعددة.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Building2,
                title: "قطاع العقارات",
                count: "450 معيار",
                description:
                  "تنظيم العقارات، التخطيط العمراني، إدارة الممتلكات، سياسات الإسكان.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: GraduationCap,
                title: "قطاع التعليم",
                count: "480 معيار",
                description:
                  "معايير إصلاح التعليم العام والعالي، مسارات المهارات، تكامل التقنية التعليمية.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Heart,
                title: "قطاع الصحة",
                count: "510 معيار",
                description:
                  "نماذج الرعاية الأولية، أنظمة الصحة الإلكترونية، برامج الوقاية، ابتكار الرعاية الصحية.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Building2,
                title: "القطاع الصناعي",
                count: "380 معيار",
                description:
                  "التصنيع، السياسة الصناعية، المصانع الذكية، تنفيذ الصناعة ٤.٠.",
                color: "from-indigo-500 to-blue-500",
              },
              {
                icon: Building2,
                title: "قطاع الاقتصاد",
                count: "440 معيار",
                description:
                  "أطر سياسات المنشآت الصغيرة والمتوسطة، استراتيجيات جذب الاستثمار، البيئات التجريبية.",
                color: "from-cyan-500 to-teal-500",
              },
            ].map((sector, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {sector.count}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {sector.description}
                </p>
                <button className="text-primary font-semibold hover:gap-3 transition-all flex items-center gap-2">
                  استكشف القطاع
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link to="/sectors">عرض جميع القطاعات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                الأثر المتوقع
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              يُمكّن GovSight الجهات الحكومية من تسريع الابتكار وتحسين صنع القرار وتبني أفضل الممارسات العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "الكفاءة التشغيلية",
                description:
                  "تبسيط جمع المعلومات والتحليل وإعداد التقارير.",
              },
              {
                icon: Users,
                title: "تطوير قوى عاملة مبنية على البيانات",
                description: "تزويد الموظفين بالمعرفة والرؤى.",
              },
              {
                icon: TrendingUp,
                title: "تحسين سير العمل الحكومي",
                description: "من خلال تلقي التقارير والرؤى مباشرة.",
              },
              {
                icon: DollarSign,
                title: "تقليل تكاليف الاستشارات",
                description:
                  "بشكل كبير من خلال منصة مدعومة بالذكاء الاصطناعي.",
              },
            ].map((impact, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <impact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
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
