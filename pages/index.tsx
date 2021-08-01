import { Main } from '@components/main';
import homeStyle from '@styles/home.module.css'
export default function Home() {
  return (
    <Main>
      <div className={homeStyle['container']}>
        <div className={homeStyle['title-container']}>
         <img width='100' style={{borderRadius: '20px'}} src='/assets/oppidum.png' />
          <h1 style={{color: 'white'}}>Oppidum</h1>
        </div>
      <div className={homeStyle['image-container']}>
      <img className={homeStyle['image-display']} src='/assets/screenshot1.png' />
      <img className={homeStyle['image-display']} src='/assets/screenshot2.png' />
      <img className={homeStyle['image-display']} src='/assets/screenshot3.png' />
      <img className={homeStyle['image-display']} src='/assets/screenshot4.png' />
      </div>
      <div className={homeStyle['image-container']}>
      <a  href="https://play.google.com/store/apps/details?id=com.oppidum.app">
        <img className={homeStyle['image-store']} src='/assets/playstore.png'  alt="ios logo" />
      </a>
       <a href="https://apps.apple.com/us/app/oppidum/id1574072581">
        <img className={homeStyle['image-store']}   src='/assets/appstore.png' alt="android logo" />
     </a>
      </div>
      </div>
    </Main>
  )
}
