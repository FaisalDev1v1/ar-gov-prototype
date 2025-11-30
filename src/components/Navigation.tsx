import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "الرئيسية", path: "/" },
    { label: "المنتج", path: "/product" },
    { label: "حالات الاستخدام", path: "/use-cases" },
    { label: "القطاعات", path: "/sectors" },
    { label: "من نحن", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="gov-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              GovSight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 right-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gov-gradient text-white font-medium shadow-lg hover:shadow-xl transition-all">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 px-4 rounded-lg transition-colors",
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="gov-gradient text-white font-medium w-full">
                ابدأ الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
