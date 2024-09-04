import { getDocs, query, collection } from 'firebase/firestore';
import { db } from './firestore';

const q = query(collection(db, "hamsters"));
    await getDocs(q)
        .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
            .map((doc) => ({...doc.data()}));
          console.log(newData)           
        })

function App() {
  return (
    <>
      yo
    </>
  );
}

export default App;
