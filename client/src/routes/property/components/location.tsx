import { Compass, MapPin } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

export const Location = ({ property }: { property: PropertiesSchema }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // const map = new mapboxgl.Map({
    //   container: mapContainerRef.current!,
    //   style: "mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb",
    //   center: [ property.coordinates[0], property.coordinates[1]],
    //   zoom: 14,
    // });

    // const marker = new mapboxgl.Marker()
    //   .setLngLat([
    //     property.coordinates[0],
    //     property.coordinates[1],
    //   ])
    //   .addTo(map);

    // const markerElement = marker.getElement();
    // const path = markerElement.querySelector("path[fill='#3FB1CE']");
    // if (path) path.setAttribute("fill", "#000000");

    // return () => map.remove();
  }, [property]);

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Property Address:
          <span className="ml-2 font-semibold text-gray-700">
            {property.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            property.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  );
};