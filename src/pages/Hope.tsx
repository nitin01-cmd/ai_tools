import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fisLogo from "@/assets/fis-logo.png";
import standardRobot from "@/assets/STANDARD_ROBOT-removebg-preview.png";
import {
  BookOpen, Search, Image, BookMarked, Video, Presentation,
  Palette, Mic, Brain, FileText, Map, ShieldCheck, AlertTriangle,
  Eye, Copy, Lightbulb
} from "lucide-react";
import "../styles/hope-navbar.css";
import "../styles/hope-hero.css";
import "../styles/hope-sections.css";

// Section 1: Learn & Master Concepts
const learnTools = [
  { icon: BookOpen, name: "Learn with HOPE", desc: "Understand any topic step-by-step. Get simple explanations and practice questions." },
  { icon: Search, name: "Explore Topics Deeply", desc: "Research any topic in a structured way. Get clear insights without confusion." },
  { icon: Map, name: "Your Smart Study Path", desc: "Get a personalized study plan. Stay organized and consistent." },
  { icon: Brain, name: "Test Your Knowledge", desc: "Practice quizzes on any topic. Strengthen your understanding." },
];

// Section 2: Create & Express Ideas
const createTools = [
  { icon: Image, name: "Create Visual Projects", desc: "Turn your ideas into images. Perfect for school assignments." },
  { icon: BookMarked, name: "Create Comic Stories", desc: "Convert ideas into fun comic strips. Make learning creative and engaging." },
  { icon: Video, name: "Create AI Videos", desc: "Turn your ideas into short videos. Great for presentations and projects." },
  { icon: Palette, name: "Design with Canva", desc: "Create professional designs easily. Enhance your school projects." },
];

// Section 3: Communicate & Perform Better
const communicateTools = [
  { icon: Mic, name: "Listen & Speak with AI", desc: "Convert text to speech and voice to text. Improve speaking and listening skills." },
  { icon: Presentation, name: "Make Smart Presentations", desc: "Generate ready-to-use slides. Save time and present better." },
  { icon: FileText, name: "Generate Smart Tests", desc: "Create custom test papers instantly. Prepare better for exams." },
];

const reminders = [
  { icon: Eye, text: "Verify before you trust" },
  { icon: AlertTriangle, text: "Think before accepting answers" },
  { icon: Copy, text: "Avoid copying blindly" },
  { icon: Lightbulb, text: "Try yourself first, then use AI" },
];

const ToolCard = ({ tool }: { tool: any }) => {
  const Tool = tool.icon;
  return (
    <div className="tool-card">
      <div className="tool-icon-container">
        <Tool className="tool-icon" />
      </div>
      <h4 className="tool-card-title">{tool.name}</h4>
      <p className="tool-card-desc">{tool.desc}</p>
    </div>
  );
};

const Hope = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Navigation Bar */}
      <nav className="hope-navbar">
        <div className="hope-navbar-container">
          {/* Image Logo */}
          <button onClick={() => navigate("/")} className="hope-navbar-logo">
            <img src={fisLogo} alt="Future India School" className="hope-navbar-logo-image" />
          </button>

          {/* Centered Navigation Links */}
          <nav className="hope-navbar-nav">
            <a href="#home" className="hope-navbar-link">Home</a>
          </nav>

          {/* CTA Button */}
          <button className="hope-navbar-button">Get Started</button>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="hope-hero-section">
        <div className="hope-hero-glow"></div>
        <div className="hope-hero-container">
          <div className="hope-hero-content">
            <div className="hope-hero-text">
              <h1 className="hope-hero-headline">
                <div className="hope-headline-line1">Think Beyond Books</div>
                <div className="hope-headline-line2">
                  <span className="hope-learn-with">Learn with</span>
                  <span className="hope-hero-highlight">HOPE</span>
                </div>
              </h1>
              <p className="hope-hero-subtext">
                Your AI-powered learning companion to understand concepts, create projects, and prepare for the future.
              </p>
              <div className="hope-cta-group">
                <Button className="hope-button-primary">Chat with HOPE</Button>
                <Button variant="outline" className="hope-button-secondary">Get Started</Button>
              </div>
            </div>
            <div className="hope-hero-visual">
              <img 
                src={standardRobot}
                alt="HOPE AI Robot Assistant"
                className="hero-robot-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Learn & Master Concepts */}
      <section className="learn-section">
        <div className="learn-section-container">
          <div className="section-header">
            <h3 className="section-title">Learn & Master Concepts</h3>
            <p className="section-subtitle">
              Build strong fundamentals with personalized learning paths and assessments
            </p>
          </div>
          <div className="tool-cards-grid">
            {learnTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Create & Express Ideas */}
      <section className="create-section">
        <div className="create-section-container">
          <div className="section-header">
            <h3 className="section-title">Create & Express Ideas</h3>
            <p className="section-subtitle">
              Transform your imagination into visual and multimedia content
            </p>
          </div>
          <div className="tool-cards-grid">
            {createTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Communicate & Perform Better */}
      <section className="communicate-section">
        <div className="communicate-section-container">
          <div className="section-header">
            <h3 className="section-title">Communicate & Perform Better</h3>
            <p className="section-subtitle">
              Master communication and presentation skills with AI assistance
            </p>
          </div>
          <div className="tool-cards-grid">
            {communicateTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Powered by AI */}
      <section className="bg-foreground text-background py-16">
        <div className="container text-center space-y-4 max-w-2xl">
          <h3 className="font-heading text-3xl font-bold">Powered by Advanced AI</h3>
          <p className="text-background/70 text-lg">
            This platform uses modern AI technologies to help students learn, create, and grow smarter.
          </p>
        </div>
      </section>

      {/* AI Safety */}
      <section className="container py-16 text-center space-y-4 max-w-2xl mx-auto">
        <ShieldCheck className="mx-auto text-primary" size={40} />
        <h3 className="font-heading text-3xl font-bold">Use AI Smartly</h3>
        <p className="text-muted-foreground text-lg">
          AI is powerful, but your thinking is more powerful. Use it to learn, not just to get answers.
        </p>
      </section>

      {/* Smart Reminders */}
      <section className="reminders-section">
        <div className="reminders-section-container">
          <div className="section-header">
            <h3 className="section-title">Smart Reminders</h3>
            <p className="section-subtitle">
              Keep these in mind while using AI for learning
            </p>
          </div>
          <div className="reminders-grid">
            {reminders.map((r) => (
              <div key={r.text} className="reminder-card">
                <div className="reminder-icon">
                  <r.icon size={24} />
                </div>
                <p className="reminder-text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        © 2026 Future India School. All rights reserved.
      </footer>
    </div>
  );
};

export default Hope;
