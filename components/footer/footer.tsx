const Footer = () => (
  <footer className="text-gray-400 grid grid-cols-4 gap-4 w-[100vw] pl-4 pr-8 rounded-xl fixed bottom-10 left-0 z-[-1]">
    <div></div>
    <p className="col-span-2 max-lg:col-span-4 px-6 leading-[15px] text-[15px] font-semibold tracking-[0.02px]">
      &copy;&nbsp;{new Date().getFullYear()} in-delivery. Зона, время, товары и предложения доставки ограничены. г. Москва, п-т. Вернадского, д. 78, стр. 4.
    </p>
    <div></div>
  </footer>
);

export default Footer;
