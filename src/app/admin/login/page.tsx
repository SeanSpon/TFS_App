"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login, isAuthenticated } from "@/lib/admin/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("john@taxfeedersoftware.com");
  const [password, setPassword] = useState("demo1234");

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/admin");
    }
  }, [router]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email);
    router.push("/admin");
  }

  return (
    <div className="hero-gradient min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md gold-glow">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy mb-4">
            <span className="text-gold font-bold text-xl">TFS</span>
          </div>
          <h1 className="text-2xl font-bold text-navy">TFS Admin</h1>
          <p className="text-slate mt-1">Sign in to your dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-navy mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="admin-input"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-navy mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
          </div>

          <button type="submit" className="admin-btn-primary w-full">
            Sign In
          </button>
        </form>

        <p className="text-xs text-slate text-center mt-4">
          Demo mode &mdash; any password will work
        </p>
      </div>
    </div>
  );
}
