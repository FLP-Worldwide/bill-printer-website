import React, { useState } from 'react';
import { 
  Printer, 
  Smartphone, 
  Zap, 
  CheckCircle, 
  Download, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Shield
} from 'lucide-react';
import { Receipt } from './components/Receipt';
import { Button } from './components/Button';
import { StoreProfile, Order } from './types';

// Mock data for the visual receipt preview in the Hero section
const DEMO_STORE: StoreProfile = {
  name: "Cafe Nobel",
  address: "12 Innovation Drive, Tech Park",
  phone: "+91 98280 51996",
  currency: "₹",
  footerMessage: "Thank you! Visit again.",
  gstin: "27ABCDE1234F1Z5"
};

const DEMO_ORDER: Order = {
  id: "ORD-8821",
  timestamp: Date.now(),
  items: [
    { id: '1', name: 'Cappuccino', price: 120, quantity: 2, category: 'Beverages', isVeg: true },
    { id: '2', name: 'Club Sandwich', price: 180, quantity: 1, category: 'Food', isVeg: false },
    { id: '3', name: 'Blueberry Muffin', price: 90, quantity: 1, category: 'Dessert', isVeg: true }
  ],
  subtotal: 510,
  tax: 25.50,
  discount: 0,
  total: 535.50,
  paymentMode: 'UPI'
};

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg text-white">
                <Printer size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">ProBiller</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Features</a>
              <a href="#preview" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Receipt Preview</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">About</a>
              <a href="https://probiller.nobeltechinnovations.com/apk/app-release.apk"<Button size="md" className="bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20">
                Download Beta
              </Button></a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-lg">
            <a href="#features" className="block text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#preview" className="block text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Preview</a>
            <a href="#about" className="block text-slate-600 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <Button className="w-full bg-orange-600 justify-center">Download Beta</Button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wide">
                <Star size={12} className="fill-orange-700" />
                Now in Open Beta
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Smart Billing for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Modern Retail
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Create menus, manage your store, and print professional thermal receipts in seconds. 
                <span className="font-semibold text-slate-900"> Free for beta users.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 shadow-xl shadow-slate-900/10 flex items-center gap-2">
                  <Download size={20} />
                  Download for Android
                </Button>
                <Button size="lg" variant="secondary" className="px-8 flex items-center gap-2">
                  View Demo <ChevronRight size={16} />
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                      U{i}
                    </div>
                  ))}
                </div>
                <p>Trusted by 50+ Beta Testers</p>
              </div>
            </div>

            {/* Hero Visual - Receipt Preview */}
            <div className="relative mx-auto lg:ml-auto">
              {/* Decorative elements behind receipt */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[2rem] transform rotate-3 scale-105 shadow-2xl"></div>
              
              <div className="relative bg-white p-6 rounded-[1.5rem] shadow-xl border border-slate-100 max-w-sm w-full mx-auto transform transition-transform hover:-translate-y-1 duration-500">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-slate-200 rounded-b-lg"></div>
                
                <div className="mb-4 flex items-center justify-between border-b pb-4 border-slate-100">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Preview</div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* The Actual Receipt Component Rendered for Visuals */}
                <div className="bg-white border border-slate-200 shadow-sm p-4 overflow-hidden rounded">
                   {/* Force display block for the receipt component in this visual context, overriding the print-only class */}
                   <div className="[&>#printable-area]:block [&>#printable-area]:w-full [&>#printable-area]:static">
                      <Receipt order={DEMO_ORDER} store={DEMO_STORE} />
                   </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-slate-900">Professional 58mm/80mm Format</p>
                  <p className="text-xs text-slate-500">Compatible with all major thermal printers</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to run your counter</h2>
            <p className="text-slate-600">ProBiller streamlines your billing process so you can focus on your customers, not the paperwork.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Printer className="text-orange-600" size={32} />}
              title="Thermal Print Ready"
              description="Connect to any Bluetooth or USB thermal printer. Auto-formats receipts for 58mm and 80mm rolls without configuration."
            />
            <FeatureCard 
              icon={<Zap className="text-orange-600" size={32} />}
              title="Instant Setup"
              description="No complex registration. Create your store profile, add a few items, and start billing in under 2 minutes."
            />
             <FeatureCard 
              icon={<Smartphone className="text-orange-600" size={32} />}
              title="Mobile First POS"
              description="Designed for tablets and phones. Large touch-friendly buttons make creating orders fast and error-free."
            />
            <FeatureCard 
              icon={<Menu className="text-orange-600" size={32} />}
              title="Smart Menu Manager"
              description="Organize items by category. Easily toggle availability and update prices on the fly."
            />
            <FeatureCard 
              icon={<Shield className="text-orange-600" size={32} />}
              title="Offline Capable"
              description="Internet down? No problem. ProBiller works offline and syncs your sales data when you reconnect."
            />
            <FeatureCard 
              icon={<CheckCircle className="text-orange-600" size={32} />}
              title="Zero Subscription"
              description="During our beta launch period, all premium features are completely free. No credit card required."
            />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS / STEPS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
               {/* Abstract App Graphic */}
               <div className="relative bg-slate-900 rounded-2xl p-2 shadow-2xl max-w-sm mx-auto transform -rotate-2">
                 <div className="bg-slate-800 rounded-xl p-6 h-[400px] flex flex-col items-center justify-center border border-slate-700">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-600/50">
                      <Zap className="text-white" size={32} />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                      <div className="h-20 bg-slate-700 rounded-lg"></div>
                      <div className="h-20 bg-slate-700 rounded-lg"></div>
                      <div className="h-20 bg-slate-700 rounded-lg"></div>
                      <div className="h-20 bg-slate-700 rounded-lg"></div>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Setup your shop in 3 simple steps</h2>
              <div className="space-y-6">
                <Step 
                  number="01" 
                  title="Create Store Profile" 
                  text="Enter your shop name, address, and GSTIN. Customize your receipt footer message."
                />
                <Step 
                  number="02" 
                  title="Build Your Menu" 
                  text="Add items with prices and categories. Use our AI-helper to write delicious descriptions."
                />
                <Step 
                  number="03" 
                  title="Start Billing" 
                  text="Tap items to add to cart, review the bill, and hit Print. It's that simple."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your billing experience?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of small business owners using ProBiller to manage their sales. Download the beta version today for free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white px-8 h-14 text-lg">
                Get Started for Free
             </Button>
             <Button size="lg" variant="secondary" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 px-8 h-14 text-lg">
                Contact Sales
             </Button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No credit card required • Free during beta • Cancel anytime
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-600 p-1.5 rounded-md text-white">
                  <Printer size={20} />
                </div>
                <span className="text-xl font-bold">ProBiller</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                The most intuitive thermal billing solution for restaurants, cafes, and retail stores.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-orange-600">Features</a></li>
                <li><a href="#" className="hover:text-orange-600">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-600">Download</a></li>
                <li><a href="#" className="hover:text-orange-600">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-orange-600">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600">Contact</a></li>
                <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © 2024 ProBiller. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <span>Developed by</span>
              <span className="text-orange-600">Nobel Tech Innovations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for Landing Page
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Step = ({ number, title, text }: { number: string, title: string, text: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center text-lg">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  </div>
);

export default App;
