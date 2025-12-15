import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      data-testid="button-language-toggle"
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">
        {language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      </span>
    </Button>
  );
}
