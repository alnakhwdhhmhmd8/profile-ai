import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "../hooks/use-in-view";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact.email.label"),
      value: t("contact.email.value"),
      href: "mailto:ramadan.medhat@example.com",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin.label"),
      value: t("contact.linkedin.value"),
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: t("contact.github.label"),
      value: t("contact.github.value"),
      href: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12">
              {t("contact.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className={`transition-all duration-500 hover-elevate cursor-pointer ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2" data-testid={`text-contact-label-${index}`}>
                        {method.label}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-contact-value-${index}`}>
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="group"
                data-testid="button-send-message"
              >
                <MessageSquare className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                {t("contact.cta")}
                <Send className="w-4 h-4 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
