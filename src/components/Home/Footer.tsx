export const Footer = () => {
  return (
    <div className="w-screen bg-[#101828] flex gap-x-4 ">
      <div>
        <img src="logo.png" alt="logo" className="size-40" />
      </div>

      <ul className="flex flex-wrap items-center text-white mb-6 text-sm font-medium text-body sm:mb-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
