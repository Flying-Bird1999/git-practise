import { useEffect } from 'react';
function Header() {
  useEffect(() => {
    console.log('临时修复线上bug');
  }, []);

  return <span>Header</span>;
}

export default Header;
