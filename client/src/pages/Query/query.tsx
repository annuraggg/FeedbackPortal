import React from 'react'
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Datepicker from '../../components/datepicker'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@radix-ui/react-dropdown-menu'
import QueryCard from "../../components/querycard";


const query = () => {
  return (
    <div className='p-0 m-0'>
      <div className=' flex flex-row relative left-40 top-3 w-[146vh] h-14'>
        <Button className="mt-2 ml-0 w-[250px] text-1xl rounded-sm border-solid px-4 hover:bg-secondary shadow-md" variant="outline">Generate Query</Button>
        <div className='flex flex-row w-[400px] mt-2 ml-6 h-10 bg-secondary rounded-sm shadow-md hover:bg-secondary '>
          <Search className='justify-center mt-2 ml-3 shadow-sm' />
          <h1 className='justify-center text-lg font-medium mt-1.5 ml-3'>
            Search
          </h1>
        </div>
      </div>
      <div className=' flex flex-row relative left-40 top-5 w-[35.5vh] h-screen w-screen'>
        <div className='w-[44vh]'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className='mr-2 ml-2 rounded-sm hover:bg-secondary' value="item-1">
              <AccordionTrigger className='ml-2 mr-2'>Date</AccordionTrigger>
              <AccordionContent className='ml-2 mr-2'>
                <div className=''>
                  <Datepicker />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className='mr-2 ml-2 rounded-sm hover:bg-secondary' value="item-2">
              <AccordionTrigger className='ml-2 mr-2'>Categories</AccordionTrigger>
              <AccordionContent className='ml-2 mr-2'>
                <div className='flex flex-row mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Cleanliness & Sanitation</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Equipment Issues & Support</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Facility Upkeep & Maintenance</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Administrative Services</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className='mr-2 ml-2 rounded-sm hover:bg-secondary' value="item-3">
              <AccordionTrigger className='ml-2 mr-2'>Sub-Categories</AccordionTrigger>
              <AccordionContent className='ml-2 mr-2'>
                <div className='flex flex-row mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Classroom Cleanliness</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Toilet Hygiene</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Common Area Sanitation</Label>
                </div>
                <div className='flex flex-row mt-2 mr-1 ml-1 '>
                  <Checkbox className='mt-1' />
                  <Label className='mt-0.5 ml-2'>Library Cleanliness</Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='flex flex-col ml-1 mt-0.8 h-screen w-screen'>
          <div className='flec flec-row mt-2 ml-2'>
            <ul className="flex space-x-4 list-none">
              <li className='font-bold text-1xl'>Sort by: </li>
              <li className='hover:text-slate-500'>Newest</li>
              <li className='hover:text-slate-500'>Votes</li>
              <li className='hover:text-slate-500'>Query: Resolved</li>
              <li className='hover:text-slate-500'>Query: Unresolved</li>
              <li className='hover:text-slate-500'>Query: Rejected</li>
            </ul>
          </div>
          <div className="h-screen w-[100vh] mt-4 ml-2 overflow-auto">
            <div className="grid grid-cols-2 gap-4">
              <QueryCard />
              <QueryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default query