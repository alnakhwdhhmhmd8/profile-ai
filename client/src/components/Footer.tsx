export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Ramadan Medhat. Built with passion and AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
