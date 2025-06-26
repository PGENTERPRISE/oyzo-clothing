
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Style with OYZO</h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover our latest collection of elegant gowns, ethnic wear, and modern styles. Designed for the bold Indian woman.
          </p>
          <Button className="text-lg px-6 py-3 bg-pink-500 hover:bg-pink-600">
            <ShoppingBag className="mr-2" /> Shop Now
          </Button>
        </div>
        <img src="/images/model-gown.jpg" alt="Model in Gown" className="w-full md:w-1/2 mt-8 md:mt-0 rounded-2xl shadow-xl" />
      </section>
    </main>
  );
}
