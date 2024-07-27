import './App.css';
import Table from './components/table/index.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://bored.api.lewagon.com/api/activity';

  const getData = async () => {
    try {
      const requests = Array.from({ length: 15 }, () => axios.get(API_URL, { crossdomain: true
      }));
      const responses = await Promise.all(requests);
      const activities = responses.map(response => response.data);
      setActivities(activities);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen bg-slate-50">
      <Table data={activities} loading={loading} />
    </div>
  );
}

export default App;
