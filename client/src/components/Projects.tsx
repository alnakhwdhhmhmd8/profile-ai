import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "../hooks/use-in-view";
import { useLanguage } from "@/contexts/LanguageContext";

import aiImage1 from "@assets/stock_images/artificial_intellige_7ad3542f.jpg";
import aiImage2 from "@assets/stock_images/artificial_intellige_36b24c85.jpg";
import mlImage1 from "@assets/stock_images/machine_learning_dat_c21b6cf8.jpg";
import mlImage2 from "@assets/stock_images/machine_learning_dat_d8d4b46e.jpg";
import robotImage1 from "@assets/stock_images/ai_robot_brain_techn_e4ba2dca.jpg";
import robotImage2 from "@assets/stock_images/ai_robot_brain_techn_84e6c38c.jpg";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.desc"),
      tags: ["Python", "TensorFlow", "CNN"],
      github: "#",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
      image: aiImage1,
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.desc"),
      tags: ["Python", "NLTK", "Transformers"],
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500",
      image: mlImage1,
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.desc"),
      tags: ["Python", "Scikit-learn", "Dash"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-500",
      image: mlImage2,
    },
    {
      title: t("projects.project4.title"),
      description: t("projects.project4.desc"),
      tags: ["Python", "OpenAI", "LangChain"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-emerald-500",
      image: robotImage1,
    },
    {
      title: t("projects.project5.title"),
      description: t("projects.project5.desc"),
      tags: ["Python", "PyTorch", "YOLO"],
      github: "#",
      demo: "#",
      gradient: "from-indigo-500 to-purple-500",
      image: aiImage2,
    },
    {
      title: t("projects.project6.title"),
      description: t("projects.project6.desc"),
      tags: ["Python", "TensorFlow", "Neural Networks"],
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-rose-500",
      image: robotImage2,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 hover-elevate hover:-translate-y-2 relative overflow-hidden group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display flex items-center justify-between" data-testid={`text-project-title-${index}`}>
                    <span>{project.title}</span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} ${hoveredIndex === index ? 'animate-pulse' : ''}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm" data-testid={`text-project-desc-${index}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="hover:scale-105 transition-transform" data-testid={`badge-project-tag-${index}-${tagIndex}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 group/btn" data-testid={`button-project-github-${index}`}>
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform ltr:mr-2 rtl:ml-2" />
                      {t("projects.code")}
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 group/btn" data-testid={`button-project-demo-${index}`}>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform ltr:mr-2 rtl:ml-2" />
                      {t("projects.demo")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
