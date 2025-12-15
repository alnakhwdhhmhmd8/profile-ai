import { GraduationCap, Brain, Code2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "../hooks/use-in-view";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: t("about.education.title"),
      description: t("about.education.desc"),
    },
    {
      icon: Brain,
      title: t("about.specialization.title"),
      description: t("about.specialization.desc"),
    },
    {
      icon: Code2,
      title: t("about.development.title"),
      description: t("about.development.desc"),
    },
    {
      icon: Sparkles,
      title: t("about.innovation.title"),
      description: t("about.innovation.desc"),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-4 leading-relaxed">
              {t("about.intro1")} <span className="text-primary font-semibold">{t("hero.name")}</span>{t("about.intro2")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-16 leading-relaxed">
              {t("about.intro3")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className={`transition-all duration-500 hover-elevate ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2" data-testid={`text-highlight-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm" data-testid={`text-highlight-desc-${index}`}>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
