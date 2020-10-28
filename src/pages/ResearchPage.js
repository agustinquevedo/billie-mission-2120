import React from 'react';

function ResearchPage() {
    return (
        <div>
            <div className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container is-max-desktop">
                        <h1 className="title is-1 is-size-3-mobile">Research</h1>
                        <h2 className="subtitle is-3 is-size-6-mobile">Thinking about the <strong>Marketing</strong> problems<br/>our Martian business may face in 2120.</h2> 
                    </div>
                </div>
            </div>
            <div className="section has-background-danger">
                <div className="container is-max-desktop">
                    <div className="block">
                        <p className="subtitle is-size-6-mobile">
                            The main problem of marketing in the future is how to adapt to changes and new technologies.<br/>
                            And the answer is simple, <strong>be proactive, not reactive</strong>.
                        </p>
                    </div>
                    <div className="block">
                        <p className="subtitle is-size-6-mobile">
                        Currently one of the biggest problems in Marketing is that it is based on analyzing results, keywords, <br/> current trends, what has been successful, etc.. <br/>
                        I know, this is something really useful for our current strategies, but... 
                        </p>
                    </div>
                </div>
            </div>
            <div className="section is-medium has-background-primary">
                <div className="container is-max-desktop">
                    <h2 className="title is-size-4-mobile">Be proactive</h2>
                    <h2 className="subtitle is-size-6-mobile">Keep the following in mind.</h2>
                    
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-header">
                                   <h3 className="card-header-title">AI.</h3> 
                                </div>
                                <div className="card-content">
                                    <p className="is-size-7">
                                        Artificial Intelligence as the main tool in Big-Data management and automation. 
                                        We can see a clear improvement in AI in the future. <br/>
                                        The segmentation of customers in a more automatic way, which will facilitate email marketing, 
                                        re-marketing and advertising campaigns that are carried out through different platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-header">
                                   <h3 className="card-header-title">Mobile devices.</h3> 
                                </div>
                                <div className="card-content">
                                    <p className="is-size-7">
                                        Given the increase in mobile web browsing, most marketing strategies, web design, advertising, etc., 
                                        will have to prepare and put the focus even more on mobile devices.                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-header">
                                   <h3 className="card-header-title">User experience.</h3> 
                                </div>
                                <div className="card-content">
                                    <p className="is-size-7">
                                        Marketing has evolved from focusing on the product to putting it on the customer, 
                                        therefore, personalization is necessary and the user experience will be increasingly developed.
                                        They seem like unimportant details, but where each CTA, each text, button etc. is placed is important. 
                                        For this reason, more research will be done on these issues and technology will be developed to improve it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-header">
                                   <h3 className="card-header-title">Teambuilding.</h3> 
                                </div>
                                <div className="card-content">
                                    <p className="is-size-7">
                                        Marketing will require more teamwork among employees in this field, so Teambuilding will be essential.
                                        They will continually need to learn new ideas to write quality, different, engaging and relevant content. 
                                        For this, it will be necessary for the rest of the team to increase their collaboration with him to generate these ideas that he later transmits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section has-background-danger">
                <div className="container is-max-desktop">
                    <h2 className="subtitle is-size-6-mobile"><strong>Marketing should not have the vision set in the past, have to focus on the future, to have an advantage.</strong></h2>
                </div>
            </div>
        </div>
    )
}

export default ResearchPage;