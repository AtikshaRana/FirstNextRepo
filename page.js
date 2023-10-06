
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import bannerData from "../app/components/bannerData.json"
import Banner from '../app/components/page';
import Tab from '../app/tab/page';



 async function Home() {
  const response = await fetch("https://construction.autodesk.com/page-data/index/page-data.json");
  const dataa = await response.json()
  return (
    <div>
        <Banner data={bannerData} />
        <Tab data={dataa} />
        <main className={styles.main}>
      <Usr name="about"/>
      <Usr name="studentdetails"/>
      <li>
        <Link href="/studentdetails">student Detail</Link>
      </li>
      <h1>This is home page</h1>
      <span> about</span>
    </main>
    </div>
  )
}

export default Home
const Usr =(props)=>{
  return(
    <div>
      <h2>This is {props.name}</h2>
      <Link href={`/${props.name}`}>{props.name}</Link>
    </div>
  )
}