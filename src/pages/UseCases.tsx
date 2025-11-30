import { Card } from "@/components/ui/card";
import {
  Rocket,
  Target,
  FileText,
  Users,
  Building,
  TrendingUp,
  Shield,
  Lightbulb,
  BarChart3,
  Zap,
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Rocket,
      title: "برامج التحول الرقمي",
      problem: "صعوبة تحديد الأولويات وبناء خارطة طريق للتحول الرقمي",
      solution:
        "استعرض أفضل نماذج التحول الرقمي المثبتة عالمياً وقارن مراحل نضج جهتك",
      value: "تسريع بناء الاستراتيجية من 6 أشهر إلى 3 أسابيع",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "تطوير الاستراتيجيات",
      problem: "بناء استراتيجيات بدون بيانات كافية أو مرجعيات واضحة",
      solution:
        "الوصول لآلاف الاستراتيجيات الحكومية الناجحة ومقارنة الأهداف والمبادرات",
      value: "رفع جودة الاستراتيجيات وزيادة احتمالية نجاح التنفيذ بنسبة 80%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "تصميم السياسات",
      problem: "نقص المعلومات عن تأثير وفعالية السياسات المماثلة",
      solution:
        "تحليل ذكي لآلاف السياسات الحكومية وتأثيرها الفعلي في سياقات مختلفة",
      value: "تصميم سياسات أكثر فعالية مبنية على التجارب والنتائج المثبتة",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "تحسين الخدمات الحكومية",
      problem: "عدم وضوح الطرق الأمثل لرفع رضا المستفيدين من الخدمات",
      solution:
        "اكتشف أفضل ممارسات تجربة المستفيد من جهات حكومية رائدة حول العالم",
      value: "رفع رضا المستفيدين بنسبة 40% من خلال تطبيق أفضل الممارسات",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Building,
      title: "إعادة الهيكلة التنظيمية",
      problem: "صعوبة تحديد الهيكل التنظيمي الأمثل والأدوار والمسؤوليات",
      solution:
        "قارن هياكل الجهات المماثلة واطلع على أفضل ممارسات التنظيم والحوكمة",
      value: "تصميم هيكل تنظيمي فعال يرفع الإنتاجية بنسبة 35%",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "قياس الأداء المؤسسي",
      problem: "غياب معايير واضحة لقياس الأداء والمقارنة مع الجهات المماثلة",
      solution:
        "نظام قياس شامل مع مؤشرات أداء معتمدة ومقارنات موضوعية متعددة الأبعاد",
      value: "تحسين الأداء الكلي للجهة بنسبة 50% خلال سنة واحدة",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "الأمن السيبراني",
      problem: "عدم وضوح أفضل الممارسات والإجراءات للحماية من التهديدات",
      solution:
        "قاعدة شاملة من سياسات وإجراءات الأمن السيبراني من جهات رائدة",
      value: "رفع مستوى الأمان وتقليل المخاطر بنسبة 65%",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "الابتكار الحكومي",
      problem: "صعوبة اكتشاف فرص الابتكار والحلول الإبداعية للتحديات",
      solution:
        "استكشف آلاف المبادرات الابتكارية الناجحة من حكومات مختلفة",
      value: "تسريع دورة الابتكار وزيادة عدد المبادرات الناجحة بنسبة 70%",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "تحليل البيانات والتقارير",
      problem: "استنزاف الوقت في جمع وتحليل البيانات من مصادر متعددة",
      solution:
        "تحليلات جاهزة ورؤى فورية مع تقارير قابلة للتخصيص والمشاركة",
      value: "توفير 80% من الوقت المستغرق في إعداد التقارير والتحليلات",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Users,
      title: "تطوير القدرات البشرية",
      problem: "نقص المعرفة بأفضل ممارسات التدريب والتطوير الوظيفي",
      solution:
        "أفضل برامج ومبادرات تطوير الموظفين من جهات حكومية متميزة",
      value: "رفع كفاءة الموظفين وتقليل معدل الدوران بنسبة 45%",
      color: "from-pink-500 to-purple-500",
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
                حالات الاستخدام
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                حلول حقيقية
              </span>
              <br />
              لتحديات حكومية واقعية
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              اكتشف كيف تساعد GovSight الجهات الحكومية في حل التحديات اليومية
              وتحقيق نتائج ملموسة في مختلف المجالات
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Header */}
                <div
                  className={`p-6 bg-gradient-to-r ${useCase.color} text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                      <useCase.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight pt-2">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                        !
                      </div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        التحدي
                      </h4>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        كيف تساعد GovSight
                      </h4>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-green-600 mb-1">
                          القيمة المحققة
                        </h4>
                        <p className="text-sm text-foreground font-medium">
                          {useCase.value}
                        </p>
                      </div>
                    </div>
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
              هل لديك حالة استخدام مختلفة؟
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              تواصل معنا لنساعدك في اكتشاف كيف يمكن لـ GovSight دعم احتياجاتك
              الفريدة
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl">
              تحدث مع خبير
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
