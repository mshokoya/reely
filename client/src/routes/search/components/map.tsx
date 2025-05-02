import useSearchFilter from "@/hooks/useSearchFilter";
import { observer } from "@legendapp/state/react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

export const Map = observer(() => {
  const mapRef = useRef(null);
  const search = useSearchFilter()
  // const auth = useAuth()

  useEffect(() => {
    if (search.isLoading.get()) return
    if (!mapRef.current) return
    console.log(mapRef.current)
    const map = new mapboxgl.Map({
      container: mapRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      // style: "mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb",
      center: search.filter.coordinates.peek(),
      zoom: 9,
    });

    search.listings.data.peek().forEach((listing) => {
      const marker = createPropertyMarker(listing, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#000000");
    })

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map && map.remove();
  }, [search.filter.coordinates.get(), mapRef.current]);

  return (
    <div className="relative rounded-xl w-full h-full">
      <div
        className="map-container rounded-xl"
        ref={mapRef}
        style={{
          height: "100%",
          width: "100%",
          zIndex:100
        }}
      />
    </div>
  );
})

const createPropertyMarker = (property: PropertiesSchema, map: mapboxgl.Map) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([
      property.coordinates[0],
      property.coordinates[1],
    ])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${property.id}" target="_blank" class="marker-popup-title">${property.name}</a>
            <p class="marker-popup-price">
              $${property.pricePerMonth}
              <span class="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};