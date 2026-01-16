import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import FAQ from '../components/FAQ';
import {
  FaMobileAlt,
  FaHeadphones,
  FaBatteryFull,
  FaBolt,
  FaQuoteLeft,
  FaStar,
  FaShippingFast,
  FaCheckCircle
} from 'react-icons/fa';

async function getItems() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const items = await getItems();
  const featuredItems = items.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative bg-linear-to-r from-primary to-orange-600 text-primary-foreground py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-sm">
            Affordable Gadgets for <br className="hidden md:block" /> University Life
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light">
            Phone cases, chargers, earbuds, power banks — all under <span className="font-bold">৳3000</span>.
            <br className="hidden md:block" /> No more broke-student vibes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Browse Shop
            </Link>
            <Link
              href="#how-it-works"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition duration-300"
            >
              How it Works
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Phone Cases', icon: <FaMobileAlt className="text-4xl mb-4 text-primary" />, link: '/items?cat=cases' },
              { name: 'Audio Gear', icon: <FaHeadphones className="text-4xl mb-4 text-primary" />, link: '/items?cat=audio' },
              { name: 'Power Banks', icon: <FaBatteryFull className="text-4xl mb-4 text-primary" />, link: '/items?cat=power' },
              { name: 'Chargers', icon: <FaBolt className="text-4xl mb-4 text-primary" />, link: '/items?cat=chargers' },
            ].map((cat, idx) => (
              <Link key={idx} href="/items" className="group bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl border border-primary/5 text-center transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition text-foreground">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 px-2">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Best Sellers</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Trending on Campus</h2>
            </div>
            <Link href="/items" className="hidden md:flex items-center text-primary font-bold hover:underline">
              View All <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                href={`/items/${item.id}`}
                className="bg-background rounded-2xl shadow-md border border-primary/5 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex transition flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-black/80 px-2 py-1 rounded-lg text-xs font-bold shadow-sm text-foreground">
                    Top Rated
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition duration-500 will-change-transform"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2 text-xs font-bold text-primary uppercase tracking-wide opacity-80">
                    {item.category.replace('_', ' ')}
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-snug group-hover:text-primary transition text-foreground">{item.name}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xl font-extrabold text-foreground">
                      {item.currency === 'USD' ? '$' : '৳'}{item.price}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition">
                      +
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/items" className="text-primary font-bold hover:underline">
              See all products →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Students Love Us</h2>
            <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto">
              Because paying ৳3000 for a phone case when your monthly budget is ৳5000 is straight-up robbery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Budget-Friendly", desc: "Everything priced ৳200–৳1500. Student wallet approved.", icon: <FaCheckCircle className="text-5xl text-primary mx-auto mb-6" /> },
              { title: "Super Fast Delivery", desc: "Chittagong & Dhaka same-day possible. Rest of BD 1–3 days.", icon: <FaShippingFast className="text-5xl text-primary mx-auto mb-6" /> },
              { title: "Campus Trusted", desc: "Used by 500+ CUET, CU, NSU students already to upgrade their setup.", icon: <FaQuoteLeft className="text-5xl text-primary mx-auto mb-6" /> }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-surface hover:bg-surface/80 transition duration-300 border border-transparent hover:border-primary/10">
                {benefit.icon}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-black dark:text-gray-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-surface text-foreground relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-linear-to-r from-primary/20 via-primary/50 to-primary/20 -z-10"></div>

            {[
              { step: "01", title: "Pick Your Gear", desc: "Browse our collection of curated essentials designed for student needs." },
              { step: "02", title: "Place Order", desc: "Add to cart and checkout in seconds. Cash on delivery available." },
              { step: "03", title: "Fast Delivery", desc: "Get your gear delivered to your hall gate or campus within hours." }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-surface shadow-xl flex items-center justify-center text-2xl font-black text-primary mb-8 z-10 group-hover:scale-110 transition duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-black dark:text-gray-300 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahim A.", uni: "CUET, CSE", text: "Daam e kom maan e bhalo! CampusGear!" },
              { name: "Fatima S.", uni: "NSU, BBA", text: "Jinish Jeta bhalo daam tar hoyto kom, Thanks CampusGear!" },
              { name: "Tanvir H.", uni: "Chittagong University", text: "CampusGear na thakle bhai phone charge na diye thakte hoito, thanks! :loveemoji" },
            ].map((review, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl relative shadow-sm border border-primary/5 hover:bg-surface/80 transition">
                <FaQuoteLeft className="text-4xl text-primary/20 absolute top-6 right-6" />
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-sm" />)}
                </div>
                <p className="italic text-black dark:text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-lg text-foreground">{review.name}</h4>
                  <p className="text-sm text-primary font-medium">{review.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-repeat bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Upgrade Your Setup?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">Join 500+ students rocking the best gear on campus.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="bg-background text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 shadow-xl transform hover:scale-105 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}