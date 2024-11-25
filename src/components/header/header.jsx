// import classnames from 'classnames';
import { Logo } from '../logo/logo';
import './header.css';

export function Header({children}){
  return (
    <header className='header'>
      <Logo/>
      {children}
    </header>);
}
