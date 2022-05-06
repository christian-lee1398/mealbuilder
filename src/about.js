import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>A tool to generate a well-balanced meal</h1>
                </div>
                <div className="subheader">
                    <h2>A quick note:</h2>
                </div>
                <div className="body">
                    <div className="preface">
                        <p>I’d like to preface this by saying that I am not a licensed nutritionist/physician
                            and that if you have any questions and/or concerns, you should consult someone who is.
                        </p>
                    </div>
                    <div className="content">
                        <div className="subheader">
                            <h2>What makes these meals "healthy"?</h2>
                        </div>
                        <p>
                            The proteins, vegetables, carbs and fats listed in this generator are all ingredients
                            that I have currently eaten and served for other people as a healthy alternative to eating
                            anything remotely processed.
                            Though I am not perfect with my diet, I am a firm believer in consuming 1-ingredient foods only.
                            Even though you may find similar dishes in restaurants, it is very common to cut corners and
                            purchase cheap ingredients.
                        </p>
                        <div className="subheader">
                            <h2>The problem:</h2>
                        </div>
                        <p>
                            I may go to a restaurant such as CoreLife Eatery
                            (or any place similar) and order an entree that has 4 ingredients generated from this app.
                            I have two main problems with this:
                            <div className="reasons">
                                <p>
                                    1. It’s a business that needs to make money, so while it may be convenient, it will come with a price.
                                </p>
                                <p>
                                    2. If you get any additives to that dish such as a salad dressing, I can almost guarantee that the dressing
                                    that they add will be a seed oil based dressing such as canola, vegetable, palm, or soybean.
                                </p>
                            </div>

                            These oils are the main thing to avoid if you aim to eat better and feel better.
                            There are numerous peer-reviewed studies that link these oils to not only weight gain, inflammation, diabetes, etc.
                            but also leads to neurological damage and conditions such as autism, Alzheimer's disease, anxiety, and depression. (See links below)
                        </p>
                        <p>
                            <a rel="noreferrer" target="_blank" href="https://www.sciencedaily.com/releases/2017/12/171207141624.htm#:~:text=Canola%20oil%20is%20one%20of,mice%20which%20model%20Alzheimer's%20disease.">
                                Worsened memory and learning ability
                            </a>
                        </p>
                        <p>
                            <a rel="noreferrer" target="_blank" href="https://sharpbrains.com/blog/2017/12/14/study-suggests-canola-oil-is-not-as-beneficial-as-advertised-sustained-use-may-cause-memory-problems-and-brain-damage/#:~:text=Brain%20Teasers-,Study%20suggests%20canola%20oil%20is%20not%20as%20beneficial%20as%20advertised,memory%20problems%20and%20brain%20damage&text=Canola%20oil%20could%20cause%20weight,loss%20(Los%20Angeles%20Times)%3A">
                                Potential brain damage
                            </a>
                        </p>
                        <p>
                            <a rel="noreferrer" target="_blank" href="https://www.sciencedaily.com/releases/2020/01/200117080827.htm#:~:text=Used%20for%20fast%20food%20frying,the%20U.S.%20Department%20of%20Agriculture.">
                                Genetic changes
                            </a>
                        </p>
                        <div className="subheader">
                            <h2>The solution:</h2>
                        </div>
                        <p>
                            These oils are proven to be harmful because of the way it is extracted. Think about it: if you squeeze a seed, does oil come out?
                            The oil is extracted by using extreme heating and numerous chemicals to draw out what’s left of these seeds. But that’s just for seed oils.
                            There are plenty of other oils that are extracted in a much more natural way such as olive, avocado, and coconut oil.
                            What do olives, avocados, and coconuts have in common? They are naturally rich in oleic acid, a beneficial monounsaturated omega-9 fatty acid.
                            It has been revealed that oleic acid produced in the brain is an essential regulator of the process that enables learning and memory and
                            may also support proper mood regulation - see <a rel="noreferrer" target="_blank" href="https://www.sciencedaily.com/releases/2022/03/220322150857.htm">here</a>.
                        </p>
                        <p>
                            Without getting too scientific (again, not a licensed professional)
                            the main point that I’m trying to make is that by consuming naturally-produced foods, you can optimize your body’s functioning and live a healthy/happy life!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;