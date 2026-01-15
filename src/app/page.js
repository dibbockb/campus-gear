
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-linear-to-r from-primary to-orange-700 text-primary-foreground py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Affordable Gadgets for University Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Phone cases, chargers, earbuds, power banks — all under ৳3000.
            No more broke-student vibes.
          </p>
          <a
            href="/items"
            className="bg-background text-primary px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
          >
            Browse Items →
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-surface p-6 rounded-xl shadow-md text-center border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Budget-Friendly</h3>
            <p>Everything priced ৳200–৳1500. Student wallet approved.</p>
          </div>

          <div className="bg-surface p-6 rounded-xl shadow-md text-center border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p>Chittagong & Dhaka same-day possible. Rest of BD 1–3 days.</p>
          </div>

          <div className="bg-surface p-6 rounded-xl shadow-md text-center border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Campus Trusted</h3>
            <p>Used by 500+ CUET, CU, NSU students already.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Campus Gear?</h2>
          <p className="text-lg mb-6">
            Because paying ৳3000 for a phone case when your monthly budget is ৳5000 is straight-up robbery.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Gear Up?</h2>
        <a
          href="/items"
          className="bg-background text-primary px-10 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition"
        >
          See All Items Now
        </a>
      </section>
    </div>
  );
}