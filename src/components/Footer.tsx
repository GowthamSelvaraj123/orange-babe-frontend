import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ChevronDown, ArrowUp } from "lucide-react";

const Footer = () => {
  const categories = [
    "Clothing & Fashion", "Toys", "Books & CDs", "School Supplies", "Birthday Party Supplies",
    "Baby Diapering", "Feeding & Nursing", "Bath & Skin Care", "Health & Safety",
    "Baby Gear", "Nursery", "Moms & Maternity", "Gifts", "Preschool Admissions"
  ];

  const companyInfo = [
    "Contact Us", "Brands", "F.A.Q.s", "FirstCry Stores & Playschool", "Investor Relations"
  ];

  const parenting = [
    "Getting Pregnant", "Pregnancy", "Baby", "Toddler", "Preschooler", "Big Kid",
    "Vaccination", "Growth Tracker", "Baby Names", "FirstCry Parenting YouTube", "Coloring Pages"
  ];

  const regionalParenting = [
    "FirstCry Hindi Parenting", "FirstCry Marathi Parenting", "FirstCry Bangla Parenting",
    "FirstCry Arabic Parenting", "FirstCry UAE Parenting"
  ];

  const shippingPolicies = [
    "Payments", "Shipping Policy", "Return & Replacement Policy", "Cancellation Policy",
    "Terms of Use", "Privacy Policy", "Next day & Same day delivery", "Responsible Disclosure"
  ];

  const paymentMethods = [
    "Credit Cards", "Net Banking", "ATM & Debit Cards", "COD(Cash on Delivery)", "Easy EMI"
  ];

  const appLinks = [
    "FirstCry India: Shopping & Parenting", "FirstCry India: Shopping & Parenting iOS",
    "Intelli Education", "IntelliRace Preschool", "Baby Brain Toys", "IntelliKits Books",
    "IntelliSkill Toys", "Worksheets", "EduWig"
  ];

  return (
    <footer className="bg-[#e7f6f8] pt-12 pb-20 relative">
      {/* Top Pill Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-3 rounded-full shadow-sm z-10 hidden md:block">
        <span className="text-[#f97316] font-bold text-lg md:text-2xl whitespace-nowrap">big store for little ones</span>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-[#c9e8eb] pb-10">
          {/* Col 1: Categories & Company */}
          <div>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Categories</h4>
            <ul className="space-y-1 mb-8">
              {categories.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Company Info</h4>
            <ul className="space-y-1">
              {companyInfo.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 2: Parenting */}
          <div>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">FirstCry Parenting</h4>
            <ul className="space-y-1 mb-8">
              {parenting.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Regional Parenting</h4>
            <ul className="space-y-1">
              {regionalParenting.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Shipping & Connect */}
          <div>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Shipping & Policies</h4>
            <ul className="space-y-1 mb-8">
              {shippingPolicies.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Payment Method</h4>
            <ul className="space-y-1 mb-8">
              {paymentMethods.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              <Facebook size={16} className="text-gray-500 cursor-pointer hover:text-blue-600" />
              <Instagram size={16} className="text-gray-500 cursor-pointer hover:text-pink-600" />
              <Twitter size={16} className="text-gray-500 cursor-pointer hover:text-blue-400" />
              <Youtube size={16} className="text-gray-500 cursor-pointer hover:text-red-600" />
              <Linkedin size={16} className="text-gray-500 cursor-pointer hover:text-blue-800" />
            </div>
          </div>

          {/* Col 4: Apps & International */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Our Apps</h4>
            <ul className="space-y-1 mb-8">
              {appLinks.map((item, idx) => (
                <li key={idx}><Link to="#" className="text-[11px] text-gray-500 hover:text-orange-500">{item}</Link></li>
              ))}
            </ul>
            <h4 className="font-bold text-xs text-gray-700 uppercase mb-4 tracking-tighter">Shop International</h4>
            <ul className="space-y-1">
              <li><Link to="#" className="text-[11px] text-gray-500">FirstCry UAE</Link></li>
              <li><Link to="#" className="text-[11px] text-gray-500">FirstCry KSA</Link></li>
            </ul>
          </div>

          {/* Col 5: Franchise Banners */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-1 rounded shadow-sm overflow-hidden group cursor-pointer">
              <img src="/placeholder.svg" alt="Preschool Franchise" className="w-full h-auto" />
              <div className="p-2">
                <p className="text-[10px] font-bold text-gray-700">Turn Your Ambition Into a Profitable Business!</p>
                <button className="bg-[#f97316] text-white text-[9px] px-2 py-1 rounded mt-1">Start A Preschool</button>
              </div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-[10px] font-bold text-gray-700 uppercase">Become Our</p>
                <p className="text-[10px] font-bold text-gray-700 uppercase">Franchise Store</p>
              </div>
              <button className="bg-green-600 text-white text-[8px] px-2 py-1 rounded">KNOW MORE</button>
            </div>
          </div>
        </div>

        <div className="text-center py-6 border-b border-[#c9e8eb]">
          <button className="text-[11px] font-bold text-gray-600 flex items-center gap-1 mx-auto hover:text-orange-500">
            Extended Menu <ChevronDown size={14} />
          </button>
        </div>

        <div className="py-8 text-center relative z-10">
          <p className="text-[10px] text-gray-500 leading-relaxed">
            © 2010-2024 www.FirstCry.com. All rights reserved. This website can be best viewed in a resolution width of 1024 and above.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 opacity-40 hidden lg:block">
          <div className="text-4xl">☁️</div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-40 hidden lg:block">
          <div className="text-4xl">☁️</div>
        </div>
        <div className="absolute bottom-12 left-1/4 animate-bounce hidden lg:block">
          <span className="text-2xl">✈️</span>
        </div>

        {/* Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-16 right-4 bg-yellow-400 p-2 rounded-sm shadow-md hover:bg-yellow-500 transition-colors z-20 md:right-8"
        >
          <div className="flex flex-col items-center">
            <ArrowUp size={16} />
            <span className="text-[8px] font-bold">TOP</span>
          </div>
        </button>
      </div>

      {/* Bottom Sticky Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-50 flex items-center justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link to="#" className="text-[10px] font-bold text-gray-600 hover:text-orange-500 whitespace-nowrap">Shortlist</Link>
        <Link to="#" className="text-[10px] font-bold text-gray-600 hover:text-orange-500 whitespace-nowrap">Quick Re-Order</Link>
        <Link to="#" className="text-[10px] font-bold text-gray-600 hover:text-orange-500 whitespace-nowrap">Track Order</Link>
        <Link to="#" className="text-[10px] font-bold text-gray-600 hover:text-orange-500 whitespace-nowrap">Become a Franchisee</Link>
        <Link to="#" className="text-[10px] font-bold text-gray-600 hover:text-orange-500 whitespace-nowrap">Preschool Admissions</Link>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            ` }} />
    </footer>
  );
};

export default Footer;
