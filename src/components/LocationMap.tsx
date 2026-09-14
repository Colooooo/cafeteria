import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const coordinates: L.LatLngExpression = [-34.905646, -56.202104];
    const map = L.map(container.current, {
      scrollWheelZoom: false,
      attributionControl: true,
    }).setView(coordinates, 16);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      className: "aurora-map-marker",
      html: '<span aria-hidden="true">☕</span>',
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });
    L.marker(coordinates, { icon, title: "Café Aurora — Rincón 651" })
      .addTo(map)
      .bindPopup("<strong>Café Aurora</strong><br>Rincón 651 · Montevideo");

    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(container.current);
    return () => {
      observer.disconnect();
      map.remove();
    };
  }, []);

  return (
    <div
      className="location-map"
      ref={container}
      role="region"
      aria-label="Mapa de Café Aurora en Ciudad Vieja, Montevideo"
    />
  );
}
