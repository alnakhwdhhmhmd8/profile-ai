import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@assets/retouch_2025092302045989_1759805520508.jpg";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const fullText = t("hero.title");
  
  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Ramadan Medhat - AI Specialist',
        text: 'Check out my portfolio!',
        url: url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: t("hero.copied"),
        description: url,
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cover Image Background with Parallax */}
      <div className="absolute inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{ 
            backgroundImage: `url(${profileImage})`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 border-2 border-primary/10 rounded-lg rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-scale-in">
          {/* Profile Image with Enhanced Glow */}
          <div className="relative inline-block mb-8">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <img
                src={profileImage}
                alt="Ramadan Medhat"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                data-testid="img-profile"
              />
            </div>
            <div className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 rounded-full mx-auto bg-gradient-to-tr from-primary/30 to-chart-2/30 blur-2xl -z-10 animate-pulse" />
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in">
            {t("hero.greeting")}
          </p>

          {/* Name with Gradient Animation */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              {t("hero.name")}
            </span>
          </h1>

          {/* Animated Subtitle with Typing Effect */}
          <div className="h-12 md:h-16 mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {displayedText}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* Enhanced Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {t("hero.subtitle")}
          </p>

          {/* Social Links with Enhanced Styling */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" data-testid="button-github">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" data-testid="button-linkedin">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform" data-testid="button-email">
              <Mail className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform" 
              onClick={handleShare}
              data-testid="button-share"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              variant="default"
              size="lg"
              onClick={scrollToAbout}
              className="group"
              data-testid="button-view-work"
            >
              {t("hero.cta")}
              <ChevronDown className={`${language === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4 group-hover:translate-y-1 transition-transform`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleShare}
              className="gap-2"
              data-testid="button-share-portfolio"
            >
              <Share2 className="h-4 w-4" />
              {t("hero.share")}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full"
            data-testid="button-scroll-down"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
