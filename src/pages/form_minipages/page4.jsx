import React, {useEffect} from "react";
import NextButton from "../../components/form_components/next_btn";

import FormHandler from "../../components/middleware/formsubmithandler";

function Rule({position, name, text}) { 
    
    return(
        <div data-testid='rule' className="p-4 mb-4 rounded-lg mt-4 border-b">
            <h3 className="text-xl font-bold mb-2">Rule {position}: {name}</h3>
            <p className="text-gray-700">{text}</p>
        </div>

    )
}

function PageFour({ rulesList, formResults}) {
    
    let rules;

    if (!rulesList) {
        rules = [
            {
            name: 'Respectful Communication',
            text: 'Participants must engage in respectful and civil discussions. Personal attacks, insults, or derogatory language directed towards individuals or groups will not be tolerated.',
            },
            {
            name: 'Stay on Topic',
            text: 'Participants should strive to keep the discussions focused on political issues and topics. Avoid drifting into unrelated subjects or engaging in excessive off-topic conversations.',
            },
            {
            name: 'No Hate Speech or Discrimination',
            text: 'Hate speech, discriminatory remarks, or any form of bigotry based on race, religion, ethnicity, gender, sexual orientation, or other protected characteristics is strictly prohibited.',
            },
            {
            name: 'Fact-Based Discussions',
            text: 'Participants are encouraged to support their arguments with factual information, credible sources, or reputable references. Dissemination of misinformation or deliberate manipulation of facts is discouraged.',
            },
            {
            name: 'Constructive Criticism',
            text: 'Participants may express criticism of political ideologies, policies, or actions, but it should be done in a constructive manner. Focus on the ideas and avoid personal attacks.',
            },
            {
            name: 'No Trolling or Spam',
            text: 'Intentionally disruptive or inflammatory behavior, such as trolling or spamming, is not allowed. Stay engaged in meaningful discussions and avoid derailing conversations.',
            },
            {
            name: 'Respect Privacy',
            text: 'Participants should respect the privacy of others and avoid sharing personal information without explicit consent. This includes refraining from sharing private messages or confidential information.',
            },
            {
            name: 'Nonviolent Language',
            text: 'Advocating or inciting violence, harm, or illegal activities is strictly prohibited. Discussions should promote peaceful dialogue and adhere to legal and ethical standards.',
            },
            {
            name: 'Multiple Perspectives',
            text: 'Encourage diverse viewpoints and engage in inclusive discussions. Respect and consider different opinions, even if they differ from your own, fostering an environment of open-mindedness and intellectual growth.',
            },
            {
            name: 'Moderation and Compliance',
            text: 'Follow the instructions and decisions of forum moderators. Failure to comply with the rules may result in warnings, temporary suspension, or permanent banning from the forum.',
            },
        ];
    } else {
        rules = rulesList;
    }
      

    return(
        <div className="flex flex-col col-span-2 items-center">
            <div className="flex flex-col w-full mt-8">
                <h1 className="text-6xl font-bold w-full text-center">Forum Rules</h1>
                <div className="w-full h-[58vh] overflow-y-auto mt-4">
                    {rules.map((rule, index) => (
                        <Rule key={index} position={index + 1} name={rule.name} text={rule.text} />
                    ))}
                </div>

            </div>
            <NextButton currentPage = {4} handlePageLocationChange = {() => FormHandler(formResults)}/>
        </div>
    )
}

export default PageFour;