/**
 * Button component that renders a clickable button element.
 * 
 * @param {Object} props - The properties passed to the Button component.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {React.ReactNode} props.children - The content inside the button (usually text or other components).
 * @param {string} [props.className] - Optional class name(s) to apply custom styles to the button.
 * 
 * @returns {JSX.Element} The rendered button component.
 */
export function Button({ onClick, children, className }) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
