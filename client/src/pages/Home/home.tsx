import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cs from '../../assets/cs.jpg'
import { useTypewriter, Cursor } from "react-simple-typewriter";
const home = () => {
  const [text] = useTypewriter({
    words: ['Shravandeep Yadav', 'Broski', 'Buddy'],
    loop: false,
  });
  return (
    <>
      <div className=' flex flex-col relative left-40 top-6'>
        <h1>
          <span className="text-4xl font-bold text-primary">Hello, </span><span className="text-4xl font-bold text-primary">{text}</span>
          <Cursor />
        </h1>
        <div className='relative top-3'>
          <p >Your voice shapes our college experience<br />
            Share feedback or concerns to enhance our services together
          </p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 relative top-20 left-40'>
        <Card className="w-31 h-50 bg-darkgray pr-0 rounded-tl-md rounded-tr-md border border-solid shadow">
          <CardContent className='p-0 rounded-tl-md rounded-tr-md'>
            <img src={cs} alt="Cleanliness & Sanitation" className=' w-full h-full object-cover'/>
          </CardContent>
          <CardFooter className='p-2 pt-1 pb-1 justify-center bg-secondary'>
            <p>Cleanliness & Sanitation</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default home
