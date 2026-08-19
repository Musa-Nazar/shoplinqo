interface ScreenScale {
  children: React.ReactNode;
  className?: string;
  type: "nav" | "div" | "section" | "li" | "ul";
}
const ScreenScale: React.FC<ScreenScale> = ({ children, type, className }) => {
  const xml: React.ReactNode =
    type === "nav" ? (
      <nav className={`max-w-[92.03980099502488%] mx-auto  ${className}`}>
        {children}
      </nav>
    ) : type === "section" ? (
      <section className={`max-w-[92.03980099502488%] mx-auto  ${className}`}>
        {children}
      </section>
    ) : type === "li" ? (
      <li className={`max-w-[92.03980099502488%] mx-auto  ${className}`}>
        {children}
      </li>
    ) : type === "ul" ? (
      <ul className={`max-w-[92.03980099502488%] mx-auto  ${className}`}>
        {children}
      </ul>
    ) : (
      <div className={`max-w-[92.03980099502488%] mx-auto  ${className}`}>
        {children}
      </div>
    );
  return xml;
};

export default ScreenScale;
