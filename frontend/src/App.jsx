import { Home } from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
// import UserProfile from './pages/UserProfile';
import CompaniesProfile from './pages/CompaniesProfile';
// import UploadJobs from './pages/UploadJobs';
import JobDetails from './pages/JobDetails';
import AuthPage from './pages/AuthPage';
import Login from './pages/Login';
import CreateJobs from './pages/CreateJobs';


export const ProtectedRoute = ({children}) => {
  const isAuth = localStorage.getItem("auth");
  if (!isAuth){
    return <Navigate to="/" />;
  }
  return children
};


function App() {
 
  return (
    <>
    <main> 
      <Navbar />
        <Routes>
          <Route path='/' element={<Home /> } />

           <Route path='/jobs' element={
          <Jobs /> 
           } />
           <Route path='/companies' element={<Companies /> } />
            <Route path="/companies-profile" element={<CompaniesProfile />} />
            <Route path={"/job-detail/:id"} element=
             {<JobDetails />
              } />
              <Route path='/postJobs' element= {<CreateJobs />} />
          <Route path='/user-auth' element={<AuthPage/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
     
    </>
   
  );
}

export default App;

