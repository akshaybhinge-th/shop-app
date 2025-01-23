import { FC } from "react";


const Shimmer: FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* these are shimmer effect for cards while loading*/}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-100 rounded-md p-4">
              <div className="aspect-square w-full bg-gray-200 rounded-md object-center lg:aspect-auto lg:h-80"></div>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                  <div className="flex flex-row items-end justify-between">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Shimmer;