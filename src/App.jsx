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
  

  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXN0aHJhLTFkMTBiIiwiYXVkIjoiYXN0aHJhLTFkMTBiIiwiYXV0aF90aW1lIjoxNzQ4OTQ2MjIxLCJ1c2VyX2lkIjoib1pUQXlrRU5TdE9Kc1pZdll3MzZQRTZjR2F2MiIsInN1YiI6Im9aVEF5a0VOU3RPSnNaWXZZdzM2UEU2Y0dhdjIiLCJpYXQiOjE3NDg5NDYyMjEsImV4cCI6MTc0ODk0OTgyMSwiZW1haWwiOiJkZXZlbG9wZXJAbWVkcGljay5pbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRldmVsb3BlckBtZWRwaWNrLmluIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjSrQ9fVUxODbibavjfEmR8rpsCjVp887OT4jin2TdF7euGtQLH7Kk6PF21Vo0x4NUxlWiEvYbyh1RpY_YkQogLzx-sG1IjJTyD9z9XEZq0dfsyxoxSfPoFeBxLQSMlWQgwbv6G_OCo5udfT8fqIRvW4CBJi13fshnocV_3eDUH3Ex789cmFMXQCyipO-im7Gwds77Z4mfmLjnMKRO_sVuyBjsGGLsfanwLyf51sUcsTapgu_I8qFUXxBs7cbwiUD6-EA84eM5PGox3rthLkBvaUXCearCHwXsgpx-kj3HFRWdhDBlveYFG0_PsFusPhyOucep484HQc9Ie464qxrA'

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
