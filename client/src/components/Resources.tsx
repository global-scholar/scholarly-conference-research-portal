import { useState, useMemo } from 'react';
import { Search, BookOpen, Database, Code, Users, Zap, FileText, Globe } from 'lucide-react';

const resourcesData = [
  {
    id: 1,
    title: 'GitHub Docs',
    description: 'Comprehensive documentation for GitHub features and workflows',
    category: 'Tools',
    icon: Code,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 2,
    title: 'Research Papers',
    description: 'Access to peer-reviewed research papers and academic journals',
    category: 'Databases',
    icon: FileText,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    id: 3,
    title: 'Academic Databases',
    description: 'Explore multiple academic databases for research materials',
    category: 'Databases',
    icon: Database,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    id: 4,
    title: 'Study Materials',
    description: 'Curated study guides and learning resources for students',
    category: 'Study Materials',
    icon: BookOpen,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
  {
    id: 5,
    title: 'Collaboration Tools',
    description: 'Tools for team collaboration and project management',
    category: 'Tools',
    icon: Users,
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
  },
  {
    id: 6,
    title: 'Learning Resources',
    description: 'Interactive tutorials and online courses for skill development',
    category: 'Study Materials',
    icon: Zap,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  },
  {
    id: 7,
    title: 'Open Source Projects',
    description: 'Discover and contribute to open-source academic projects',
    category: 'Tools',
    icon: Globe,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
  },
  {
    id: 8,
    title: 'Citation Tools',
    description: 'Tools for managing citations and bibliography formatting',
    category: 'Tools',
    icon: FileText,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(resourcesData.map(r => r.category)))];

  const filteredResources = useMemo(() => {
    return resourcesData.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-transparent to-blue-50 dark:to-slate-900/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="section-title mb-4">Academic Resources</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover a comprehensive collection of tools, databases, and study materials curated for students and researchers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="card-hover bg-white dark:bg-slate-800 rounded-xl p-6 border border-border shadow-sm hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${resource.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    {resource.category}
                  </span>
                  <a href="#" className="text-accent hover:text-accent/80 font-medium text-sm">
                    Learn →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No resources found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
