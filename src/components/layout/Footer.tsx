import React from 'react';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple Podcasts', 'Apple Books', 'App Store'],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Order Status', 'Shopping Help'],
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
  ];

  const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

  return (
    <footer className="bg-neutral-100 text-neutral-700 text-xs">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Section: Shop and Learn (Example - more ways to shop) */}
        <section className="pb-8 mb-8 border-b border-neutral-300">
          <p className="text-neutral-600">
            More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
        </section>

        {/* Section: Main navigation links */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8 mb-10">
          {sections.map((section, index) => (
            // For a layout closer to Apple, some sections might not fit perfectly into 5 columns,
            // Apple's footer dynamically adjusts or groups them.
            // Here, we're simplifying to a multi-column grid.
            // The first few sections usually take more prominence or are standalone columns.
            // For this example, we'll make the first few columns span more if needed, or just let them flow.
            // Apple's footer groups "Shop and Learn", "Account", "Apple Store" etc. into columns,
            // then "For Business", "For Education", "For Healthcare" might be another column set,
            // and "Apple Values", "About Apple" another set. This is hard to achieve with a simple map without more complex logic.
            // We'll use a simpler approach here.
            <div key={index} className={index < 2 ? 'mb-4' : 'mb-4'}> {/* Adjust column spans or grouping as needed */}
              <h3 className="font-semibold text-neutral-800 mb-2.5 tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-neutral-600 hover:text-blue-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Section: Copyright and Legal */}
        <div className="border-t border-neutral-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-neutral-500">
            <p className="mb-2 md:mb-0">
              Copyright © {new Date().getFullYear()} My Awesome Org. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-4 mb-2 md:mb-0">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && <span className="select-none">|</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="md:ml-auto"> 
              {/* Placeholder for country - Apple has "United States" here */}
              <a href="#" className="hover:underline">Your Country/Region</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
