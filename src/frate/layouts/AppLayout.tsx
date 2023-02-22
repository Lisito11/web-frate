import { NavBar } from '../components/navbar/NavBar';

type Props = {
  children: string | JSX.Element | JSX.Element[] 
}

export const AppLayout = ({children}: Props) => {
  return (
    <div className="" >

        <NavBar />

        <main className="">
            { children } 
        </main>
    </div>
  )
}