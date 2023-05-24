import {React, Component} from 'react';

//Class for component containing tags
class Tag extends Component{


    constructor(props){
        super(props);
        this.normalOpacity = "0.25)";
        this.hoverOpacity = "0.4)";
        this.tagObject = props.tagObject
    }
  
    handleMouseEnter = (e) => {
      e.target.style.backgroundColor = `${this.tagObject.color}${this.hoverOpacity}`;
    };
  
    handleMouseLeave = (e) => {
      e.target.style.backgroundColor = `${this.tagObject.color}${this.normalOpacity}`;
    };

    render () {
        return (
            <div>
                <h1
                className="w-fit m-1 px-1 border border-transparent rounded-lg cursor-pointer"
                style = {{backgroundColor: `${this.tagObject.color}${this.normalOpacity}`}}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                >{this.tagObject.tag}</h1>
            </div>
        )
    }
}

class TagsTrends extends Component {

    constructor(props){
        super(props);
    }

    getTrendingTags() {
        //Make logic here to get data from backend
        return [
            { tag: 'Transgender', url: 'John Doe', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Politics', url: 'Jane Smith', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Dogknob', url: 'Alex Johnson', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: 'Technology', url: 'Sarah Lee', color: `rgba(${Math.floor(Math.random()*255)}, 0, ${Math.floor(Math.random()*255)}, ` },
            { tag: "Elections", url: "https://example.com/elections", color: "rgba(255, 0, 0, " },
            { tag: "Campaign Finance", url: "https://example.com/campaign-finance", color: "rgba(0, 255, 0, " },
            { tag: "Voting Rights", url: "https://example.com/voting-rights", color: "rgba(0, 0, 255, " },
            { tag: "Gerrymandering", url: "https://example.com/gerrymandering", color: "rgba(255, 255, 0, " },
            { tag: "Supreme Court", url: "https://example.com/supreme-court", color: "rgba(0, 255, 255, " },
            { tag: "Foreign Policy", url: "https://example.com/foreign-policy", color: "rgba(255, 0, 255, " },
            { tag: "Impeachment", url: "https://example.com/impeachment", color: "rgba(255, 128, 0, " },
            { tag: "Executive Power", url: "https://example.com/executive-power", color: "rgba(0, 255, 128, " },
            { tag: "National Security", url: "https://example.com/national-security", color: "rgba(128, 0, 255, " },
            { tag: "Economic Policy", url: "https://example.com/economic-policy", color: "rgba(255, 0, 128, " },
            { tag: "Healthcare Policy", url: "https://example.com/healthcare-policy", color: "rgba(0, 128, 255, " },
            { tag: "Immigration", url: "https://example.com/immigration", color: "rgba(255, 128, 128, " },
            { tag: "Climate Change", url: "https://example.com/climate-change", color: "rgba(128, 255, 0, " },
            { tag: "Gun Control", url: "https://example.com/gun-control", color: "rgba(0, 128, 128, " },
            { tag: "Taxes", url: "https://example.com/taxes", color: "rgba(128, 0, 128, " },
            { tag: "Social Security", url: "https://example.com/social-security", color: "rgba(128, 128, 0, " },
            { tag: "Labor", url: "https://example.com/labor", color: "rgba(128, 128, 128, " },
            { tag: "Civil Rights", url: "https://example.com/civil-rights", color: "rgba(192, 0, 0, " },
            { tag: "Privacy", url: "https://example.com/privacy", color: "rgba(0, 192, 0, " },
            { tag: "Criminal Justice", url: "https://example.com/criminal-justice", color: "rgba(0, 0, 192, " },
            { tag: "Education", url: "https://example.com/education", color: "rgba(192, 192, 0, " }
          ]



    }

    render() {
        return (
            <div className="overflow-y-scroll h-fit max-h-[25vh]">
                <h1 className="text-center text-xl font-bold">Trending Tags</h1>
                <div className="flex flex-wrap">
                    {this.getTrendingTags().map((tag) => (
                    <Tag tagObject={tag} key={tag.tag} />
                    ))}
                </div>
            </div>
        )
    }
}

export default TagsTrends