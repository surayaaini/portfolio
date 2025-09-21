// src/components/FeaturedPost.tsx
export default function FeaturedPost() {
    return (
      <div className="bg-[#E5D3C5] p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
        <img
          src="/images/featured.jpg"
          alt="Featured Post"
          className="w-full h-64 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold">
          Blog Title 1
        </h3>
        <p className="mt-2 text-gray-700">
          Starting off the new year, this is a chance to share one worthwhile
          experience I had in 2022...
        </p>
      </div>
    );
  }
  