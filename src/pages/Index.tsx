
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-fp-blue">Fully Promoted</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-fp-dark hover:text-fp-blue">Products</a>
              <a href="#services" className="text-fp-dark hover:text-fp-blue">Services</a>
              <a href="#about" className="text-fp-dark hover:text-fp-blue">About Us</a>
              <a href="#locations" className="text-fp-dark hover:text-fp-blue">Locations</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-fp-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your One-Stop Solution for Business Promotion</h1>
            <p className="text-xl mb-8">Branded products, marketing services, and promotional items to help your business succeed</p>
            <Button className="bg-white text-fp-blue hover:bg-fp-gray text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-fp-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Apparel', 'Promotional Products', 'Signage'].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="h-40 bg-fp-gray rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">Custom solutions for your business needs</p>
                <Button variant="outline" className="text-fp-blue border-fp-blue hover:bg-fp-blue hover:text-white">
                  Learn More
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
              'Global Network',
              'Custom Solutions',
              'Quality Products',
              'Expert Service'
            ].map((item) => (
              <div key={item} className="text-center">
                <div className="w-16 h-16 bg-fp-blue rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">Supporting businesses worldwide</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 bg-fp-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Find a Location Near You</h2>
          <p className="text-xl text-gray-600 mb-8">With over 300 locations worldwide, we're here to serve you</p>
          <Button className="bg-fp-blue text-white hover:bg-blue-700">
            Search Locations
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fp-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Promote Your Business?</h2>
          <p className="text-xl mb-8">Contact us today to get started with your custom promotion strategy</p>
          <Button className="bg-white text-fp-blue hover:bg-fp-gray">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fp-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fully Promoted</h3>
              <p className="text-gray-400">Your global marketing services provider</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Apparel</li>
                <li>Promotional Items</li>
                <li>Signage</li>
                <li>Print Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Embroidery</li>
                <li>Screen Printing</li>
                <li>Digital Marketing</li>
                <li>Design Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Find a Location</li>
                <li>Contact Us</li>
                <li>Franchising</li>
                <li>Careers</li>
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
