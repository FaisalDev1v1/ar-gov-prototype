import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "المنتج",
      links: [
        { label: "الميزات", path: "/product" },
        { label: "حالات الاستخدام", path: "/use-cases" },
        { label: "القطاعات", path: "/sectors" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { label: "من نحن", path: "/about" },
        { label: "اتصل بنا", path: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="gov-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                GovSight
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              منصة الذكاء الاصطناعي للقياس والتحليل الحكومي. نساعد الجهات الحكومية على اتخاذ قرارات مبنية على البيانات والتحليل الذكي.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@govsight.gov" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@govsight.gov
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +966 11 234 5678
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                الرياض، المملكة العربية السعودية
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GovSight. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
