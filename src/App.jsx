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
  

  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXN0aHJhLTFkMTBiIiwiYXVkIjoiYXN0aHJhLTFkMTBiIiwiYXV0aF90aW1lIjoxNzQ5MDg2NjkxLCJ1c2VyX2lkIjoib1pUQXlrRU5TdE9Kc1pZdll3MzZQRTZjR2F2MiIsInN1YiI6Im9aVEF5a0VOU3RPSnNaWXZZdzM2UEU2Y0dhdjIiLCJpYXQiOjE3NDkwODY2OTEsImV4cCI6MTc0OTA5MDI5MSwiZW1haWwiOiJkZXZlbG9wZXJAbWVkcGljay5pbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRldmVsb3BlckBtZWRwaWNrLmluIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IhbCbAIMyrjU2JvkuP_RUNnMEXk-hVK0Jm_J7oLCHu2IHf5TvYJczIuoU0hjac-DMl0IjbcStqdTqQX5h0gLWhuYzsZGwCTqoG_UyYYiWQ6Mm2jYhCteFP1uZgvscNFCHS332dVId0GGqwn96JhP0GWKwD3iBBPdHMo3GZ7gT9G5g6PYMarvtPn3sdNRL11RyShd41NjTsEojH_Bed3UbBGa7u2vrxIkUNtQivp6soJ7TLQ2mma7FUVYTJSqNiBhla-4v-8Jb6aQEdzbP2PtL3DwsHtghCzAoUHKerpIAhDyq5mSR_duXM5bOdAMRgdmLhjuErmNcVWbvOjjblwsQA'
  
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
