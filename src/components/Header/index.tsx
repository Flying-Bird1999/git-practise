import { useEffect, useState } from 'react';
function Header() {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState<string>('1');

  useEffect(() => {
    console.log('main分支');
    console.log('hoxfix分支');
    console.log('feature分支');
  }, [count, num]);

  return <span>Header</span>;
}

export default Header;
