// src/components/PhotoGallery.tsx
const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
  ];
  
  export default function PhotoGallery() {
    return (
      <div className="grid grid-cols-2 gap-2">
        {photos.map((src, idx) => (
          <div key={idx} className="relative group">
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-64 object-cover"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-90 transition flex items-center justify-center p-4">
              <div className="text-center">
                <h2 className="text-xl font-bold">Suraya Aini</h2>
                <p className="mt-2">Student</p>
                <p className="text-sm mt-2">
                  Hello and Welcome! I created this blog as a mini-project to be
                  more courageous in putting my ideas (and myself) out there.
                  Enjoy!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  