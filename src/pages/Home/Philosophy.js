import React from 'react';

const Philosophy = () => {
    return (
        <section className='bg-green-100 container mx-auto p-16 space-y-16'>
            <h1 className='text-3xl text-green-500 text-center'>Nutrition by Ameera's Philosophy</h1>
            <div className='grid sm:grid-cols-4 gap-6'>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl text-left font-bold'>Honor</h1>
                    <p className='text-left'>We appreciate and honor body diversity, therefore, do not subscribe to standardized body weight expectations. Our nutrition guidance is driven by using weight neutral health outcomes.</p>
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl text-left font-bold'>Individuality</h1>
                    <p className='text-left'>We believe every person is an individual and as such, deserves individualized care that is tailored to their own culture, preferences and socioeconomic status.</p>
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl text-left font-bold'>Behavioral</h1>
                    <p className='text-left'>We appreciate the importance of practicing behavioral best practices for eating and feeding (children) that encourages body trust. All nutrition guidance provided will be done with that in mind in order to avoid harm.</p>
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl text-left font-bold'>Self-Compassion</h1>
                    <p className='text-left'>Everything we do is driven by compassion and also promotes self-compassion for our patients, clients and their families. We commit to providing guidance in this space at all times.</p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;