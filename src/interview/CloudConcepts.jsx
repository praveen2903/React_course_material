import cloudBackend from "../assets/cloud_in_backend.png";
import cloudServices from "../assets/cloud_services.png";
import cloudFlare from "../assets/clouldflare_usage.png";
function ImageBanner() {
  const images = [
    cloudBackend,
    cloudFlare,
    cloudServices,
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(2,1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            borderRadius: "14px",
            overflow: "hidden",
            background: "white",
          }}
        >
          <img
            src={img}
            alt="kubernetes"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
const CloudConcepts = () => {
  return (
    <div>
        <ImageBanner/>
    </div>
  )
}

export default CloudConcepts