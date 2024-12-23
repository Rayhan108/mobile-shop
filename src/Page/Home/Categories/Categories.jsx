import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Smartphones",
      img: "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-16-Pro-Max---16-Pro-Black-Titanium-2734.jpg",
      description: "Explore the latest smartphones with cutting-edge technology.",
    },
    {
      id: 2,
      title: "Laptops",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/yoga-7-2-in-1-14ahp9/yoga-7-2-in-1-14ahp9-01-500x500.webp",
      description: "High-performance laptops for all your work and play needs.",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2vzCFF9flp2tWBk5jX2aGduwls7XhkzBXA&s",
      description: "Enhance your device with top-quality accessories.",
    },
    {
      id: 4,
      title: "Smart Watches",
      img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/colmi/p71/p71-01-500x500.webp",
      description: "Track your health and stay connected with smartwatches.",
    },
    {
      id: 5,
      title: "Tablets",
      img: "https://www.startech.com.bd/image/cache/catalog/tablet/samsung/galaxy-s9-fe/galaxy-s9-fe-01-500x500.webp",
      description: "Browse our range of versatile tablets for work and play.",
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Shop by Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
