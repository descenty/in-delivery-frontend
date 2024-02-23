const Footer = () => (
  <footer className="text-gray-500 grid grid-cols-4 gap-4 w-[100vw] pl-4 pr-8 rounded-xl fixed bottom-8 left-0 z-[-1]">
    <div></div>
    <p className="col-span-2 px-6 text-sm">
      &copy;&nbsp;{new Date().getFullYear()} in-delivery. Зона, время, товары и предложения доставки ограничены. г. Москва, п-т. Вернадского, д. 78, стр. 4.
    </p>
    <div></div>
  </footer>
);

export default Footer;
