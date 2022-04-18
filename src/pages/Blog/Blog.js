import React from 'react';

const Blog = () => {
    return (
       <section className = "text-gray-600 body-font overflow-hidden">
        <div className = "container px-5 py-24 mx-auto">
            <h1 className='text-4xl text-green-500 text-bold'>Frequently Asked Questions</h1>
            <div className="p-12 md:w-1/2">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Difference between authentication and authorization</h2>
                <p className="leading-relaxed mb-8">Authentication is a process of providing security through validating users who are trying to get access to certain applications. Username, email, password are most common way of providing authentication. Sometimes multifactor authentication requires to provide strong security. On the other hand, authorization is being part of security system is something more than authentication. It provides users permission to users to access or control any resource or process. In that case authorization comes after authentication where any user must prove his/her identity first.</p>
                <div className="pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                </div>
            </div>
            <div className="p-12 md:w-1/2">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <p className="leading-relaxed mb-8">Firebase is an application development software backed by Google. It allows developers to develops web apps, iOS or Android apps. I am using firebase to develop authentication system for my web application. Password authentication is the most common option. other options include- email link authentication, social media authentication, phone number, custom authentication, anonymous authentication etc. Other than google firebase, lots of auth providers are there like, Amazon, AOL, Apple, Autodesk, Facebook, Github, Twitter, LinkedIn, Microsoft etc.</p>
                <div className="pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                </div>
            </div>
            <div className="p-12 md:w-1/2">
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What other services does `firebase` provide other than authentication</h2>
                <p className="leading-relaxed mb-8">Other than authentication, firebase provides services in areas of- A/B testing, analytics, app distribution, app indexing, Cloud firestore, cloud functions, cloud messaging, crashlytics, dynamic links, hosting, in app messaging, firebase ML, performance monitoring, realtime database, remote config,cloud storage, test lab etc. These services can be categorized under build, release & monitor and engage. Some of these services are free of cost and rests with cost.</p>
                <div className="pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog;