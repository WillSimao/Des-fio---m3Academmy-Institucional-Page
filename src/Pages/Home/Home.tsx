import Header from '../../components/Header/Header'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import CardSelect from '../../components/CardsSelect/CardsSelect'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import FooterLinks from '../../components/FooterLinks/FooterLinks'
import FooterLinksMobile from '../../components/FooterLinksMobile/FooterLinksMobile'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <HeaderMobile/>
      <BreadCrumb/>
      <CardSelect/>
      <NewsLetter/>
      <FooterLinks/>
      <FooterLinksMobile/>
      <Footer/>
    </>
  )
}

export default Home
