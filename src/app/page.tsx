// import { Button } from '@/components/ui/button';
import { fetchData } from './utils/fetchData';
import Image from 'next/image';
interface PetInfo {
  id: number;
  name: string;
  species: string;
  birthYear: string;
  description: string;
  photo: string;
}
export default async function Home() {
  // use fetchData to fetch data from online json file
  const data: PetInfo[] = [];
  const url = await fetchData().then((da) => data.push(...da));
  // console.log(data);
  return (
    <div className=' '>
      <header
        className='hero min-h-half-screen text-center p-4 flex flex-col justify-center items-center mb-2 md:mb-4 relative'
        style={{
          // pet image
          backgroundImage: `url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
        }}
      >
        <div className='container z-10 absolute top-0 left-0'>
          {/* navbar */}
          <nav className='navbar bg-base-100   w-full  p-4  flex justify-evenly items-center '>
            <p className='logo btn btn-ghost normal-case text-xl w-1/2 self-start text-start'>
              Pet Adoption
            </p>
            <ul className='menu flex  justify-between items-center w-1/2'>
              <li>
                <a className='btn btn-ghost normal-case text-xl '>About</a>
              </li>
              <li>
                <a className='btn btn-ghost normal-case text-xl '>Contact</a>
              </li>
              <li>
                <a className='btn btn-ghost normal-case text-xl '>Help</a>
              </li>
              <li>
                <a className='btn btn-ghost normal-case text-xl '>Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='hero-overlay bg-opacity-60 absolute top-0 left-0 right-0 bottom-0 bg-black z-0 w-full h-full '></div>
        <div className='hero-info z-10'>
          <h1 className='text-3xl font-bold '>Pet Adoption</h1>
          <p className='text-sm'>Find your new best friend</p>
        </div>
      </header>
      <div className='container  '>
        <div className='pet-adoption grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
          {data.map((pet) => (
            <div
              className='pet-card flex flex-col  shadow-md bg-white  border  text-sm '
              key={pet.id}
            >
              <Image
                src={pet.photo}
                alt='pet'
                width={200}
                height={200}
                className='pet-img w-full h-auto'
              />

              <div className='pet-info p-2'>
                <h2 className='pet-name'>
                  {' '}
                  <b>Name: </b> {pet.name}
                </h2>
                <p className='pet-species'>
                  {' '}
                  <b>Species: </b> {pet.species}
                </p>
                <p className='pet-birthdate'>
                  {' '}
                  <b>Birthdate: </b> {pet.birthYear}
                </p>
                <p className='pet-description'>
                  <b>Description: </b> {pet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
