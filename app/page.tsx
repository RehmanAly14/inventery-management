import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { LogIn, Zap, BarChart2, Info, CheckCircle } from "lucide-react";

export default async function Home() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    // Updated background to deep dark gradient
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* --- Animated Blob Background (Darker Hues) --- */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-700/50 rounded-full mix-blend-color-dodge filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-700/50 rounded-full mix-blend-color-dodge filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-fuchsia-700/50 rounded-full mix-blend-color-dodge filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* --- Floating Decorative Shapes --- */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-xl rotate-12 animate-float shadow-2xl"></div>
      <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-float animation-delay-1000 shadow-xl"></div>
      <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-pink-400 rotate-45 animate-float animation-delay-2000 shadow-lg"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center">
          {/* --- Hero Heading (Retained gradient text) --- */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in-up tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Inventory
            </span>
            <br />
            {/* White text for contrast */}
            <span className="text-gray-100 animate-fade-in-up animation-delay-200">
              Management
            </span>
          </h1>

          {/* --- Subtitle --- */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Streamline your inventory tracking with our{" "}
            <span className="text-purple-400 font-bold">powerful</span>,{" "}
            <span className="text-cyan-400 font-bold">intuitive</span> system.
            Monitor stock levels, manage products, and gain{" "}
            <span className="text-pink-400 font-bold">real-time visibility</span>{" "}
            into your business operations.
          </p>

          {/* --- Call-to-Action Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            {/* Primary Button: Sign In (Highly visible) */}
            <Link
              href="/sign-in"
              className="group relative bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-fuchsia-900/50 hover:shadow-fuchsia-700/70 transform hover:scale-105 transition-all duration-300 ring-4 ring-purple-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <LogIn className="w-5 h-5" />
                Start Managing Now
              </span>
            </Link>

            {/* Secondary Button: Learn More (Subtle, glass-like) */}
            <Link
              href="#"
              className="group bg-gray-800/50 backdrop-blur-md text-cyan-400 px-10 py-4 rounded-xl font-semibold text-lg border border-gray-700 hover:border-cyan-500 shadow-lg hover:shadow-cyan-900/50 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Info className="w-5 h-5" />
                Learn More
              </span>
            </Link>
          </div>

          {/* --- Feature Highlights (Modern Dark Cards) --- */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Real-time Tracking */}
            <div className="group bg-gray-800/70 border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-purple-900/50 transform hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up animation-delay-800">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <BarChart2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-50 mb-3">
                Real-time Tracking
              </h3>
              <p className="text-gray-400">
                Monitor stock levels, sales, and movement instantly with live
                updates across all your locations.
              </p>
            </div>

            {/* Card 2: Lightning Fast */}
            <div className="group bg-gray-800/70 border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-900/50 transform hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up animation-delay-1000">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-50 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-400">
                Our optimized architecture ensures blazing-fast data retrieval and
                processing, minimizing lag time.
              </p>
            </div>

            {/* Card 3: Smart Analytics */}
            <div className="group bg-gray-800/70 border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-pink-900/50 transform hover:translate-y-[-4px] transition-all duration-300 animate-fade-in-up animation-delay-1200">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-50 mb-3">
                Smart Analytics
              </h3>
              <p className="text-gray-400">
                Leverage AI-powered insights to predict demand, optimize stock
                levels, and prevent shortages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}