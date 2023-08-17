import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['L', 'u', 'c', 'a']
  const lastnameArray = ['L', 'i', 'm', 'a']
  const jobArray = ['S','o','f','t','w','a','r','e', '   ','E','n','g','i','n','i','e','r']
  
  useEffect(()=> {
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
    
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          <div className="my-name">
            I'm <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> <img src={LogoTitle} alt="developer" /> <AnimatedLetters letterClass={letterClass} strArray={lastnameArray} idx={19}/>
          </div>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25}/>
        </h1>
        <h2>Full Stack / JavaScript</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home
