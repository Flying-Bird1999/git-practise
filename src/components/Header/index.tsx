import { useEffect, useState } from 'react';
function Header() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('main分支');
    console.log('hoxfix分支');
  }, [count]);

  return <span>Header</span>;
}

export default Header;
