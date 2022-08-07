import { useEffect } from 'react';
function Header() {
  useEffect(() => {
    console.log('main分支');
  }, []);

  return <span>Header</span>;
}

export default Header;
