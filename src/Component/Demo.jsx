"use client";

import { useState } from "react";
import PreviewPopup from "./PreviewPopup";
import Dashboard from "./Dashboard";

export default function EcommerceSaaS({ setState, state }) {
    const [dashboard, setdashboard] = useState(false)
    const [products] = useState([
        { id: 1, name: "Pro Plan", price: "$29/mo", desc: "Best for startups" },
        { id: 2, name: "Business Plan", price: "$99/mo", desc: "For growing teams" },
        { id: 3, name: "Enterprise Plan", price: "$299/mo", desc: "Advanced features" },
    ]);



    return (
        <div className="relative min-h-screen w-full flex flex-col bg-gray-50">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">SaaSStore</h1>
                <div className="space-x-6 flex">
                    <p className="text-gray-600 cursor-pointer hover:text-blue-600">Features</p>
                    <p className="text-gray-600 cursor-pointer hover:text-blue-600">Pricing</p>
                    <button
                        onClick={() => setdashboard(true)}
                        className="text-gray-600 cursor-pointer hover:text-blue-600 z-50">Dashboard</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h2 className="text-4xl font-bold mb-4">Scale Your Business with SaaSStore</h2>
                <p className="max-w-2xl mb-6">
                    An e-commerce SaaS solution to sell subscriptions, manage users, and grow revenue faster.
                </p>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                    Get Started
                </button>
            </section>

            {/* Features */}
            <section id="features" className="max-w-6xl mx-auto py-16 px-6">
                <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="font-semibold text-lg mb-2">Easy Payments</h4>
                        <p className="text-gray-600">Integrate Razorpay/Stripe for fast, secure payments.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="font-semibold text-lg mb-2">Analytics</h4>
                        <p className="text-gray-600">Track sales, churn, and growth in one dashboard.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h4 className="font-semibold text-lg mb-2">Custom Branding</h4>
                        <p className="text-gray-600">Make the platform truly yours with full customization.</p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="bg-gray-100 py-16 px-6">
                <h3 className="text-3xl font-bold text-center mb-10">Pricing Plans</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((plan) => (
                        <div
                            key={plan.id}
                            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        >
                            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                            <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                            <p className="text-gray-600 mb-6">{plan.desc}</p>
                            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-6 bg-white shadow text-center text-gray-500">
                © 2025 SaaSStore. All rights reserved.
            </footer>

            {/* popup */}
            <div className=" fixed inset-0 flex items-center justify-center w-full h-full ">
                <PreviewPopup state={state} setState={setState} />
            </div>

            {/* dashboard */}
            {dashboard &&
                <div
                    className={`bg-black min-h-screen px-4 py-3 fixed top-0 right-0 z-50 transform transition-transform duration-700 ease-in-out
    ${dashboard ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                >
                    <Dashboard state={state} setState={setState} setdashboard={setdashboard} />
                </div>

            }
        </div>
    );
}
