import { getDocs, query, collection } from 'firebase/firestore';
import { db } from './firestore';
import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [hamsters, setHamsters] = useState([])

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async() => {
    const q = query(collection(db, "hamsters"));
      await getDocs(q)
          .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data()}));

            setHamsters(newData);
          });
  }
  
  return (
    <>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className='w-1/3'>Name</th>
            <th className='w-1/3'>Gender</th>
            <th className='w-1/3'>Birth Date</th>
          </tr>
        </thead>
        <tbody>
          {
            hamsters.map(hamster => {
              console.log(hamster)
              return (
                <>
                  <tr>
                    <td>{hamster.name}</td>
                    <td>{hamster.gender}</td>
                    <td>{hamster.birth_date}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
