import "./styleCSS/Destinations.css";
export default function Destinations() {
  const DATA = [
    {
      src: "https://assets.airtrfx.com/cdn-cgi/image/height=170,quality=80,fit=crop,format=auto/https://media.jtdwjcwq6f4wp4ce.com/library/cities/montreal-YUL.jpg",
      alt: "Casablanca",
      title: "Casablanca (CMN) to Montreal (YUL)",
      disc: "Last Seen: 10 hrs ago Round-trip / Economy 26/01/2024 - 14/02/2024",
      price: "MAD 8 351,00",
    },
    {
      src: "https://assets.airtrfx.com/cdn-cgi/image/height=170,quality=80,fit=crop,format=auto/https://media.jtdwjcwq6f4wp4ce.com/library/cities/paris-PAR.jpg",
      alt: "Casablanca",
      title: "Casablanca (CMN) to Paris (PAR)",
      disc: "Last Seen: 1 day agoRound-trip/Economy 25/01/2024 - 31/01/2024",
      price: "MAD 2 744,00*",
    },
    {
      src: "https://assets.airtrfx.com/media-em/at/cities/Dakar-DSS.jpg?height=170&quality=80&fit=crop&format=auto&opt=true",
      alt: "Casablanca",
      title: "Casablanca (CMN) to Dakar (DSS)",
      disc: "Last Seen: 13 hrs ago Round-trip/Economy 01/02/2024 - 01/03/2024",
      price: "MAD 6 299,00*",
    },
  ];
  return (
    <div className="AppDestinations">
      <div className="Destinations">
        {DATA.map((e) => {
          return (
            <div className="Destination">
              <div className="image">
                <img src={e.src} alt={e.alt} />
              </div>
              <div className="contante">
                <h2>{e.title}</h2>
                <p>{e.disc}</p>
                <p style={{ color: "#47B9EA" }}>{e.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
