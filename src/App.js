import { getDocs, query, collection, addDoc } from 'firebase/firestore';
import { db } from './firestore';
import { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [hamsters, setHamsters] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

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

  const addData = async(e) => {
    e.preventDefault();
    // get selected gender
    const genderDropdown = document.getElementById('gender-dropdown')
    
    await addDoc(collection(db, "hamsters"), {
      name: name,
      gender: gender.length > 0 ? gender : genderDropdown.value,
      birth_date: birthDate,
      id: "hamster-"+1,
      family: "",
    });
  }
  
  return (
    <>
      <form method='post' onSubmit={addData}>
        <label>Name</label>
        <input 
          type='text' 
          name='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        /><br />
        <label>gender</label>
        <select 
          id='gender-dropdown'
          name="gender"
          onChange={(e) => 
            setGender(e.target.value)
          }
        >
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
        </select><br />
        <label>Birth Date</label>
        <input 
          type='date' 
          name='birthDate'
          value={birthDate} 
          onChange={(e) => setBirthDate(e.target.value)}
        /><br />
        <input type='submit' value='Submit'/>
      </form>
      <br/><br />
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
