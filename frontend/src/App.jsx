import { Home } from './pages/Home';
import { Outlet, Navigate, Route, Routes, useLocation  } from 'react-router-dom';
import Navbar from './components/NavBar';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import UserProfile from './pages/UserProfile';
import CompaniesProfile from './pages/CompaniesProfile';
import UploadJobs from './pages/UploadJobs';
import JobDetails from './pages/JobDetails';
import AuthPage from './pages/AuthPage';

function Layout(){
  const user = true;
  const location = useLocation();
  return user ?( <Outlet />) :( 
    <Navigate to='user-auth' state={{from: location}} replace/>)
    }


function App() {
  const user = {}
  return (
    <>
    <main> 
      <Navbar />
        <Routes>
        <Route element={<Layout/>}> 
        <Route path='/'
         element={<Navigate to='/home' replace={true}/>}
         />
          <Route path='/home' element={<Home /> } />
           <Route path='/jobs' element={<Jobs /> } />
           <Route path='/companies' element={<Companies /> } />
           <Route
            path={
              user?.user?.accountType === "seeker"
              ? "/user/profile"
              : "/user-profile/:id"
            }
            element={<UserProfile />}
            />
            <Route path={"/companies-profile"} element={<CompaniesProfile />} />
            <Route path={"/companies-profile/:id"} element={<CompaniesProfile />} />
            <Route path={"/upload-job"} element={<UploadJobs />} />
            <Route path={"/job-detail/:id"} element={<JobDetails />} />
          </Route> 
          <Route path='/user-auth' element={<AuthPage/>} />
        </Routes>
      </main>
     
    </>
   
  );
}

export default App;

