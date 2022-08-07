import { useEffect } from 'react';
function Header() {
  useEffect(() => {
    console.log('临时修复线上bug');
    console.log('hoxfix分支开发！！！');
  }, []);

  return <span>Header</span>;
}

export default Header;
