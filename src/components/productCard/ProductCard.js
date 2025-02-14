import { FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="group border border-black flex w-full max-w-xs flex-col overflow-hidden rounded-lg border bg-white/10 backdrop-blur-lg shadow-lg ring-1 ring-white/20">
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#">
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product"
        />
        <img
          className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product-hover"
        />
      </div>
      <div className="mt-4 px-5 pb-5 text-black">
        <h5 className="text-xl tracking-tight text-black drop-shadow-lg">
          Nike Air MX Super 2500 - Red
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-black drop-shadow-lg">
              $449
            </span>
            <span className="text-sm text-black/80 line-through ml-2">
              $699
            </span>
          </p>
        </div>
        <div className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600/60 backdrop-blur-md px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
          <FaShoppingCart className="mr-2 h-6 w-6" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
