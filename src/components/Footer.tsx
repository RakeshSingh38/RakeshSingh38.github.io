const Footer = () => {
  return (
    <footer className="py-6 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-[#222]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-light-muted dark:text-[#777] text-sm">
          Designed and Developed by{' '}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Rakesh Singh
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;