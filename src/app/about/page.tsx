import { Sparkles, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-script text-primary mb-6">
            Belle Martinée
          </h1>
          <p className="text-2xl text-white font-light mb-4">Wear Your Story</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We believe that fashion is more than clothing—it's a form of self-expression,
            a way to tell your unique story to the world.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-surface rounded-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At Belle Martinée, we're dedicated to creating luxury fashion pieces that empower
            you to express your individuality. Every product in our collection is thoughtfully
            designed to combine timeless elegance with contemporary style.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We partner with premium print-on-demand providers to ensure the highest quality
            while minimizing waste and environmental impact. Each piece is made to order,
            just for you.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-surface rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quality First</h3>
            <p className="text-gray-400 text-sm">
              Premium materials and expert craftsmanship in every piece we create.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Sustainable</h3>
            <p className="text-gray-400 text-sm">
              Made-to-order production reduces waste and supports eco-friendly practices.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
            <p className="text-gray-400 text-sm">
              Shipping worldwide to bring Belle Martinée style to fashion lovers everywhere.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-surface rounded-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Belle Martinée was born from a passion for fashion that transcends trends. We saw
            a gap in the market for luxury fashion that was both accessible and sustainable.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our founder envisioned a brand where every customer could find pieces that
            resonated with their personal style—pieces that would become cherished parts of
            their wardrobe for years to come.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Today, Belle Martinée serves customers around the world, each one adding their own
            chapter to our story. When you wear Belle Martinée, you're not just wearing
            clothing—you're wearing your story.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Write Your Story?
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our collection and find the pieces that speak to you.
          </p>
          <a href="/shop" className="btn-primary inline-block">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
