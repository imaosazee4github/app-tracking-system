import Header from '../components/Header';
import  backgroundimage from '../images/backgoundimage.jpg';
import Search from '../components/Search';



export const Home = () => {
    return(
        <div>
            <Header />
            <div className= 'w-full h-screen'>
                <div className='bg' 
                style={{ backgroundImage: 
                `url(${backgroundimage})`,
                 width: '100%', height: '80%', 
                 backgroundSize: 'cover',  }}>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2-translate-y-1/2'>
                    <Search />
                 </div>
                 </div>
               
                 <div className='bg-blue-500 w-full h-50vh '>
                    <h1>hello</h1>
                 </div>
            </div>
        </div>
   
   
  )
}

export default Home;
