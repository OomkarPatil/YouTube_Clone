import HomePage from '../components/HomePage'
import SideBar from '../components/SideBar'

const Home = ({sideNavBar}) => {
  return (
    <div className='flex w-full box-border pt-[56px] pb-[0] px-3'>
        <SideBar  sideNavBar={sideNavBar} />
        <HomePage/>
    </div>
  )
}

export default Home