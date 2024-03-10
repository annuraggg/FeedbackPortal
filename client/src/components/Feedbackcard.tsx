import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import template from "../assets/template.jpg"
const Feedbackcard = () => {
    return (
        <Card className='flex h-60 mr-40 w-200 bg-secondary rounded-md'>
            <CardContent className='flex flex-row pt-4 pb-4 pl-4'>
                <img src={template} alt="template" className="rounded-md" />
                <CardDescription className='flex flex-col pl-3'>
                    <div className='flex flex-row'>
                        <p className="mt-2 ml-3 text-A5F3FC text-xl">User ID:</p>
                        <p className='text-primary text-xl text-solid mt-2 ml-2'>22204007</p>
                    </div>
                    <p className="mt-3 ml-3 text-A5F3FC">Cleanliness & Sanitation</p>
                    <CardTitle className="mt-0.5 ml-3 text">Classroom Cleanliness</CardTitle>
                    <div className='flex flex-row mt-3'>
                        <p className="mt-2 ml-3 text-A5F3FC text-xl">Query ID:</p>
                        <p className='text text-xl text-solid mt-2 ml-2'>1010324-1</p>
                    </div>
                    <div className='flex flex-row mt-3'>
                        <p className="mt-2 ml-3 text-A5F3FC text-xl">Review:</p>
                        <p className='text-green-400 text-solid text-xl text-solid mt-2 ml-2'>Positive</p>
                    </div>
                </CardDescription>
                <div className='flex flex-col pl-28'>
                        <p className="text-primary text-2xl decoration-2 pb-3">What the user is saying</p>
                        <div className='bg-gray-500 bg-opacity-50 h-[200px] shadow-xl rounded-sm'>
                        <p className="mt-3 ml-3 text">
                        I, a TE_IT_B student, am happy to see that<br></br> Room No. 206 has immaculate classroom conditions.<br className='pt-2'></br> 





🌟 Well done for keeping a cheerful atmosphere!
                        </p>
                        </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Feedbackcard
