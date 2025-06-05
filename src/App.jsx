import { lazy, Suspense, useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const DashboardMobile = lazy(() => import('./pages/DashboardMobileView.jsx'));

function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 426px)').matches
  );

  const [data, setData] = useState(null);      // stores API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  

  const token = ''
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 426px)');

    const handleMediaChange = (e) => setIsMobile(e.matches);

    // Listen to changes
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(()=> {
     const fetchData = async () => {
      try {
        const response = await axios.post('https://api.medpick.in/asthra/manager/dashboard',{
          "hospid": "abcvijay123456",
          "userid": "oZTAykENStOJsZYvYw36PE6cGav2",
          "branchid": "BTM5c51c3ec"
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
        // console.log(data)
      } catch (error) {
        setError(error)
      }finally{
        setLoading(false)
      }
     };

     fetchData();
  },[])

  if (loading) return <div>Loading...</div>;

  console.log('data from: -',data)


  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? <DashboardMobile data={data}/> : <Dashboard data={data}/>}
    </Suspense>
  );
}

export default App;
