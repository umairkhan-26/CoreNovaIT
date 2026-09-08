const LINE =
  "Web Development · App Development · Graphic Design · Motion Graphics · Digital Marketing · Social Media · AI Integrations ·";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{LINE}</span>
        <span>{LINE}</span>
      </div>
    </div>
  );
}
