import React from 'react'

function TaskCard() {
  return (
    <div>
        <div className="card lg:flex justify-between">
            <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>

                <div className=''>
                    <img className='object-cover lg:w-[7rem] lg:h-[rem]' src="https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.webp?b=1&s=170667a&w=0&k=20&c=Kwf3pLtP1CO1UhefNrGRLIVMQvFu5jlRKu87Pz1LE4k=" alt="" />
                </div>

                <div className='space-y-5'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-lg'>Car Rental Website</h1>
                        <p className='text-gray-500 text-sm'>
                            use latestet frameworks and technology to make this website
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-2'>

                        {
                            [1,2,3,4].map(
                                (map) => <span className='py-1 px-5 rounded-full techStack'>
                                    Angular
                                </span>
                            )
                        }



                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TaskCard