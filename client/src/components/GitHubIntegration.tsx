import { GitBranch, Users, Shield, Zap, GitPullRequest, Award } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Master version control and collaboration with Git and GitHub workflows.',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with peers on group projects and research initiatives.',
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    icon: Shield,
    title: 'Code Security',
    description: 'Learn best practices for secure coding and protecting your intellectual property.',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    icon: Zap,
    title: 'CI/CD Automation',
    description: 'Automate testing and deployment pipelines for efficient development.',
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
  {
    icon: GitPullRequest,
    title: 'Code Review',
    description: 'Participate in peer code reviews and improve your coding skills.',
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
  },
  {
    icon: Award,
    title: 'Portfolio Building',
    description: 'Showcase your projects and build a professional portfolio on GitHub.',
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  },
];

export default function GitHubIntegration() {
  return (
    <section id="github-integration" className="py-20 bg-white dark:bg-slate-800">
      <div className="container">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h2 className="section-title mb-4">GitHub for Academic Excellence</h2>
            <p className="section-subtitle mb-6">
              GitHub is more than just a code repository. It's a powerful platform for academic collaboration, project management, and professional development.
            </p>
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Learn how to leverage GitHub's features for your academic projects, from managing research data to collaborating with peers across the globe.
              </p>
              <p className="text-foreground leading-relaxed">
                Our comprehensive guides will help you master GitHub workflows, best practices, and advanced features tailored for academic environments.
              </p>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex mt-8">
              Explore GitHub
            </a>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-10 blur-2xl" />
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-foreground">Repository created</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-foreground">Collaborators added</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-foreground">Pull request reviewed</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Deployment in progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
