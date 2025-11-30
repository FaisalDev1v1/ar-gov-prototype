import { Card } from "@/components/ui/card";
import {
  Target,
  Eye,
  Rocket,
  TrendingUp,
  Users,
  Globe,
  Brain,
  Zap,
  Heart,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "الابتكار المستمر",
      description: "نطور حلولاً مبتكرة تستخدم أحدث تقنيات الذكاء الاصطناعي",
    },
    {
      icon: Heart,
      title: "التأثير الإيجابي",
      description: "نساهم في تحسين حياة المواطنين من خلال دعم الحكومات",
    },
    {
      icon: Users,
      title: "الشراكة الحقيقية",
      description: "نعمل كشريك استراتيجي مع جهاتنا الحكومية لتحقيق النجاح",
    },
    {
      icon: Globe,
      title: "المنظور العالمي",
      description: "نجمع أفضل الممارسات من حول العالم ونكيفها محلياً",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "البداية",
      description: "تأسيس الفكرة وبناء الفريق المؤسس",
    },
    {
      year: "2023",
      title: "المنصة الأولى",
      description: "إطلاق النسخة الأولى مع 5 جهات حكومية",
    },
    {
      year: "2024",
      title: "التوسع",
      description: "تجاوزنا 50 جهة حكومية وإضافة 12 قطاعاً",
    },
    {
      year: "2025",
      title: "الريادة",
      description: "المنصة الرائدة للذكاء الاصطناعي الحكومي",
    },
  ];

  const team = [
    {
      role: "الرؤية الاستراتيجية",
      description: "فريق من الخبراء في التحول الحكومي والاستراتيجية",
      count: "10+",
    },
    {
      role: "التطوير التقني",
      description: "مهندسون متخصصون في الذكاء الاصطناعي والبيانات الضخمة",
      count: "25+",
    },
    {
      role: "المحتوى والأبحاث",
      description: "باحثون يجمعون ويحللون الممارسات الحكومية",
      count: "15+",
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
                من نحن
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                نبني مستقبل
              </span>
              <br />
              الحكومة الذكية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نؤمن بأن كل جهة حكومية تستحق الوصول إلى أفضل المعايير والممارسات
              العالمية لتحقيق التميز في الأداء وخدمة المواطنين
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">رؤيتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أن نكون المنصة الرائدة عالمياً في تمكين الحكومات من اتخاذ قرارات
                مبنية على الذكاء الاصطناعي والبيانات، ونساهم في بناء حكومات أكثر
                كفاءة وفعالية تخدم المواطنين بشكل أفضل.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">مهمتنا</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نوفر منصة ذكاء اصطناعي شاملة تمكن الجهات الحكومية من الوصول إلى
                المعايير العالمية، مقارنة أدائها، واستخلاص رؤى قابلة للتنفيذ
                لتسريع التحول الرقمي وتحسين الخدمات الحكومية.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="gov-section bg-muted/30">
        <div className="gov-container">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                لماذا الآن؟
              </h2>
              <p className="text-xl text-muted-foreground">
                التقاء اتجاهين عالميين يصنعان فرصة فريدة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  ثورة الذكاء الاصطناعي
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>نماذج AI متقدمة قادرة على تحليل ملايين نقاط البيانات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>معالجة اللغة الطبيعية تفهم السياق الحكومي المعقد</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>التعلم الآلي يتحسن باستمرار مع كل استخدام</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>تكلفة الحوسبة انخفضت بشكل كبير</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  حاجة الحكومات للتحول
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>رؤية 2030 وخطط التحول الوطنية الطموحة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>توقعات المواطنين المتزايدة للخدمات الرقمية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>المنافسة العالمية في جودة الخدمات الحكومية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>الحاجة لقرارات سريعة مبنية على البيانات</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">قيمنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              المبادئ التي توجه عملنا وقراراتنا كل يوم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="gov-section bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">رحلتنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              من فكرة إلى منصة رائدة في وقت قياسي
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex gap-8 items-center animate-fade-in ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </Card>
                    </div>

                    <div className="hidden md:block w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0 z-10 ring-4 ring-background" />

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">فريقنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              خبراء متخصصون في التحول الحكومي والذكاء الاصطناعي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary mb-4">
                  {item.count}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.role}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
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
              انضم لرحلة التحول الرقمي
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              نحن هنا لنكون شريكك الاستراتيجي في رحلة التميز الحكومي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all shadow-xl">
                تواصل معنا
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
                جدول عرض توضيحي
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
