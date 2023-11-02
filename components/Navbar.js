import Link from 'next/link'

const Navbar = ()=>{
return(
  <div>
    <nav>
      <menu>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </menu>
    </nav>
  </div>
  )
}

export default Navbar
