import { useState } from "react";
import { Brain, Database, Code, Laptop, Cloud, Boxes, Sparkles, Cpu, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "../hooks/use-in-view";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  { icon: Brain, name: "Machine Learning", category: "AI", color: "text-purple-500" },
  { icon: Code, name: "Python", category: "Programming", color: "text-blue-500" },
  { icon: Database, name: "Data Science", category: "Analytics", color: "text-green-500" },
  { icon: Laptop, name: "Deep Learning", category: "AI", color: "text-pink-500" },
  { icon: Cloud, name: "Cloud Computing", category: "Infrastructure", color: "text-cyan-500" },
  { icon: Boxes, name: "Neural Networks", category: "AI", color: "text-orange-500" },
  { icon: Sparkles, name: "NLP", category: "AI", color: "text-yellow-500" },
  { icon: Cpu, name: "Computer Vision", category: "AI", color: "text-red-500" },
  { icon: Network, name: "TensorFlow", category: "Framework", color: "text-indigo-500" },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            {t("skills.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className={`transition-all duration-500 hover-elevate hover:scale-105 cursor-pointer ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      hoveredIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className={`w-8 h-8 ${skill.color} transition-all duration-300 ${
                        hoveredIndex === index ? 'animate-pulse' : ''
                      }`} />
                    </div>
                    <h3 className="font-semibold mb-1" data-testid={`text-skill-name-${index}`}>
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-skill-category-${index}`}>
                      {skill.category}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
