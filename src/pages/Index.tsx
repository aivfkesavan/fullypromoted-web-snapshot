import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/631ba9ad-1bc4-48ce-ae36-ac0d48904135.png" 
                alt="Fully Promoted Logo" 
                className="h-12 mr-2"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-fp-dark hover:text-fp-blue">Products</a>
              <a href="#services" className="text-fp-dark hover:text-fp-blue">Services</a>
              <a href="#about" className="text-fp-dark hover:text-fp-blue">Solutions</a>
              <a href="#locations" className="text-fp-dark hover:text-fp-blue">Locations</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-fp-blue text-white py-20" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(4, 97, 170, 0.9), rgba(4, 97, 170, 0.9)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Brand Marketing Partner</h1>
            <p className="text-xl mb-8">Full-service marketing solutions including branded products, promotional items, embroidery, screen printing, and digital marketing services</p>
            <Button className="bg-white text-fp-blue hover:bg-fp-gray text-lg px-8 py-6">
              Find a Location Near You
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-fp-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Branded Apparel',
                desc: 'Custom embroidery, screen printing, and branded clothing solutions',
                image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80'
              },
              {
                title: 'Promotional Products',
                desc: 'Wide selection of customizable promotional items and corporate gifts',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="h-40 bg-fp-gray rounded-md mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Button variant="outline" className="text-fp-blue border-fp-blue hover:bg-fp-blue hover:text-white">
                  View {item.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fully Promoted</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Local Support',
                desc: 'Personalized service from your local marketing expert',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80'
              },
              {
                title: 'Global Network',
                desc: 'Access to worldwide resources and suppliers',
                image: 'https://images.unsplash.com/photo-1529119513315-c7c361862fc7?auto=format&fit=crop&q=80'
              },
              {
                title: 'Quality Products',
                desc: 'Premium materials and craftsmanship',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
              },
              {
                title: 'Marketing Expertise',
                desc: 'Professional guidance for your brand',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-fp-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Embroidery & Screen Printing',
              'Digital Marketing',
              'Graphic Design',
              'Brand Strategy',
              'Website Development'
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Professional solutions to grow your business</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Find Your Local Fully Promoted</h2>
          <p className="text-xl text-gray-600 mb-8">Over 300 locations worldwide ready to serve you</p>
          <Button className="bg-fp-blue text-white hover:bg-blue-700">
            Search Locations Near You
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fp-blue text-white py-16" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(4, 97, 170, 0.9), rgba(4, 97, 170, 0.9)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Promote Your Business?</h2>
          <p className="text-xl mb-8">Connect with your local Fully Promoted for a custom marketing solution</p>
          <Button className="bg-white text-fp-blue hover:bg-fp-gray">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fp-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fully Promoted</h3>
              <p className="text-gray-400">Your Global Marketing Services Provider</p>
              <img 
                src="/lovable-uploads/631ba9ad-1bc4-48ce-ae36-ac0d48904135.png" 
                alt="Fully Promoted Logo" 
                className="h-12 mt-4"
              />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Branded Apparel</li>
                <li>Promotional Products</li>
                <li>Marketing Materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Embroidery</li>
                <li>Screen Printing</li>
                <li>Digital Marketing</li>
                <li>Brand Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Find a Location</li>
                <li>Become an Owner</li>
                <li>Support Center</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fully Promoted. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
