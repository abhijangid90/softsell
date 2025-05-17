import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email || !form.email.includes("@")) newErrors.email = "Valid email is required";
    if (!form.company) newErrors.company = "Company is required";
    if (!form.license) newErrors.license = "License type is required";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent!");
      setForm({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Turn Your Software into Cash</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          SoftSell helps you sell unused software licenses safely and easily.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["📤", "Upload License"],
            ["💰", "Get Valuation"],
            ["🏦", "Get Paid"],
          ].map(([icon, label]) => (
            <div
              key={label}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Choose SoftSell</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ["⚡", "Fast Payments", "Payouts within 24 hours."],
            ["📊", "Top Valuations", "We offer the best price on the market."],
            ["🔐", "Secure Transfers", "All transactions are encrypted."],
            ["🌍", "Global Network", "Buyers from around the world."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              name: "Jane Doe",
              role: "IT Manager, TechCorp",
              review: "SoftSell made it incredibly simple to offload our licenses. Very professional and quick!",
            },
            {
              name: "John Smith",
              role: "Founder, Startupify",
              review: "They gave us a great deal and handled everything smoothly. Would use again.",
            },
          ].map(({ name, role, review }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <p className="italic text-lg mb-3">“{review}”</p>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Contact Us</h2>
        <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
>
  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
    />
    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">Company</label>
    <input
      type="text"
      placeholder="Enter your company name"
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={form.company}
      onChange={(e) => setForm({ ...form, company: e.target.value })}
    />
    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">License Type</label>
    <select
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={form.license}
      onChange={(e) => setForm({ ...form, license: e.target.value })}
    >
      <option value="">Select a license</option>
      <option value="Windows">Windows</option>
      <option value="Office">Office</option>
      <option value="Adobe">Adobe</option>
      <option value="Other">Other</option>
    </select>
    {errors.license && <p className="text-red-500 text-sm mt-1">{errors.license}</p>}
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
    <textarea
      rows="4"
      placeholder="Write your message"
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
    />
    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
  </div>

  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </div>
</form>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
