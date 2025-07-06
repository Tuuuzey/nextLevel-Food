'use client';

import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

import MainHeaderBg from "./main-header-bg";
import { usePathname } from "next/navigation";

export default function MainHeader() {
 
  const path = usePathname()
 
  return (
  <>
    <MainHeaderBg />

    <header className={classes.header}>
      <Link href={'/'} className={classes.logo}>
        <Image src={logoImg} alt="a plate with food" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={'/meals'} className={path.startsWith('/meals') ? classes.active : undefined}>Browse Food</Link>
          </li>
          <li>
            <Link href={'/community'} className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
 ) 
}