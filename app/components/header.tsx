const Header = () => {
    return(
        <header className="bg-blue-300 text-white p-1 fixed top-0 w-full z-50 px-3">
      
      <nav className="flex justify-between">
        <div className="flex justify-center">
          <img className="object-cover w-10 h-10" src="/logo-c-png.png" alt="Cart Logo" />
          <h1 className="text-3xl font-bold pr-35 ml-3 flex items-center">Cafe Ayaka</h1>
        </div>
        <ul className="flex space-x-4 items-center">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/menu" className="hover:underline">Menu</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      
        </nav>
    </header>
  );
};

export default Header;