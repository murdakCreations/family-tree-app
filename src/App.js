import { getDocs, query, collection } from 'firebase/firestore';
import { db } from './firestore';
import { useEffect, useState } from 'react';


const App = () => {
  const [hamsters, setHamsters] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const q = query(collection(db, "hamsters"));
      await getDocs(q)
          .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
              .map((doc) => ({...doc.data()}));

            console.log(newData)
            newData.forEach(data => {
              setHamsters(
                [
                  ...hamsters,
                  {
                    name: data.name,
                    gender: data.gender,
                    birthdate: data.birth_date,
                  }
                ]
              );
            });
            
          });
  }
  
  return (
    <>
      {
        hamsters.map(hamster => {
          return (
            <>
              <div>{hamster.name}</div>
              <div>{hamster.gender}</div>
              <div>{hamster.birthdate}</div>
            </>
          )
        })
      }
    </>
  );
}

export default App;
