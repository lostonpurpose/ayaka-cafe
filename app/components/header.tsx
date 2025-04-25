const Header = () => {
    return(
        <header className="bg-blue-500 text-white p-1">
      
      <nav className="flex justify-between">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/menu" className="hover:underline">Menu</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <h1 className="text-xl font-bold pr-35">Cafe Ayaka</h1>
        </nav>
    </header>
  );
};

export default Header;