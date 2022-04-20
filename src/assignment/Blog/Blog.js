import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='row'>
            <h2 className='mt-5 text-center'> blog</h2>
            <div className="blog d-flex">
                <div className='container'>
                <h3 className='title'>Difference between authorization and authentication</h3>
                <div className=' blog-contain d-flex'>
                    <div className='blog-body'>
                        
                        <h3>Authentication</h3>
                        <p>Authentication verifies who the user is.
                            Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                            Authentication is the first step of a good identity and access management process.
                            Authentication is visible to and partially changeable by the user
                        </p>
                    </div>
                    <div className='blog-body'>
                        <h3>Authorization</h3>
                        <p>Authorization determines what resources a user can access.
                            Authorization works through settings that are implemented and maintained by the organization.
                            Authorization always takes place after authentication.
                            Authorization isn't visible to or changeable by the user.
                        </p>
                    </div>
                </div>
                </div>
                <div className='blog-contain container'>
                   <div className="blog-body">
                   <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Ans: Firebase helps teams from startups to global enterprises build and run successful apps.We can easily add our favorite tools in firebase.we can work on these apps with confidence.Yes.I have other options for implementing authentication.For example,Back4App,AWS Amplify,Kuzzle,Couchbase,NativeScript,RxDB,Flutter.</p>
                   </div>
                </div>
            </div>
            <div className="blog-answer">
                <h3>What other services does firebase provide other than authentication</h3>
                <p>Ans: firebase provides different kinds of services that help to develop high-quality mobile and web applications to grow . Firebase provides services other than authentication.There are many services that Firebase provides.The most useful of which are:Cloud FireStore,Cloud function,Authentication,Hosting,Cloud storage,Google Analytics,Prophecy,Cloud messaging.Firebase is a full package that can help in developing mobile or web applications faster with fewer resources and more efficiency.</p>
            </div>
        </div>
    );
};

export default Blog;