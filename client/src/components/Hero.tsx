import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Welcome to Academic Excellence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empower Your <span className="gradient-text">Academic Journey</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover curated academic resources, research databases, and GitHub tools designed specifically for students and researchers. Accelerate your learning and collaboration today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('resources');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                Explore Resources
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Resources</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Free Access</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden md:flex animate-slide-in-right justify-center items-center">
            <div className="relative w-full max-w-md h-96">
              {/* Floating cards animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Card 1 */}
                  <div className="absolute top-0 left-0 w-40 h-32 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 transform -rotate-12 animate-bounce" style={{ animationDelay: '0s' }}>
                    <div className="w-8 h-8 bg-blue-200 dark:bg-blue-900 rounded-lg mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-20" />
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="absolute bottom-0 right-0 w-40 h-32 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 transform rotate-12 animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <div className="w-8 h-8 bg-purple-200 dark:bg-purple-900 rounded-lg mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-20" />
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
