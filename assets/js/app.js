class Activities extends React.Component {
    constructor() {
        super();

        this.state = {
            content: [
                {
                    img: 'assets/img/alumni_gath.png',
                    title: 'Alumni Gathering',
                    text: 'Activity held to connect former and current Ristek’s members to build positive relationship among them.',
                },
                {
                    img: 'assets/img/internal_class.png',
                    title: 'Internal Class',
                    text: 'A weekly activity tends to improve Ristek\'s members\' skill and understanding of technology based on their interest group.',
                },
                {
                    img: 'assets/img/open_class.png',
                    title: 'Open Class',
                    text: 'Open Class is our way to facilitate Fasilkom UI students - especially freshmen - that are interested to learn deeper from Ristek’s SIGs',
                },
                {
                    img: 'assets/img/pekan_ristek.png',
                    title: 'Pekan Ristek',
                    text: 'An annual event conducted over a week long in order to increase IT awareness. Composed of competitions, showcase, seminar, and many more.',
                },
                {
                    img: 'assets/img/rsync.png',
                    title: 'RSync',
                    text: 'Internal activities for Ristek’s members to build collaboration and good teamwork with fellow members.',
                },
                {
                    img: 'assets/img/tech_talk.png',
                    title: 'Tech Talk',
                    text: 'A regular activity which is held by Ristek in collaboration with partner to educate people about the newest trends in technology.',
                },
            ],
            current: 0,
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        let nextCurrent = this.state.current + 1;

        if (this.state.current >= this.state.content.length - 1) {
            nextCurrent = 0;
        }

        this.setState({
            ...this.state,
            current: nextCurrent,
        });
    }

    prev() {
        let prevCurrent = this.state.current - 1;

        if (this.state.current <= 0) {
            prevCurrent = this.state.content.length - 1;
        }

        this.setState({
            ...this.state,
            current: prevCurrent,
        });
    }

    render() {
        let currentFirst = this.state.current - 2;
        let currentSecond = this.state.current - 1;
        
        if (currentFirst < 0) {
            currentFirst = (this.state.content.length) + currentFirst;
        }

        if (currentSecond < 0) {
            currentSecond = (this.state.content.length) + currentSecond;
        }

        let currentFourth = this.state.current + 1;
        let currentLast = this.state.current + 2;

        if (currentFourth > this.state.content.length - 1) {
            currentFourth = currentFourth - this.state.content.length;
        }

        if (currentLast > this.state.content.length - 1) {
            currentLast = currentLast - this.state.content.length;
        }

        console.log(currentFirst);
        console.log(currentSecond);
        console.log(currentFourth);
        console.log(currentLast);

        return (
			<div className="activities">
                <div className="text">
                    <h1>/ ACTIVITIES /</h1>
                    <h2>
                        Ristek Fasilkom UI held several activities to improve its
                        <br />
                        member's skill and understanding of technology
                    </h2>
                </div>
                <div className="slider">
                    <button className="prev" onClick={this.prev}></button>
                    <button className="next" onClick={this.next}></button>
                    <div className="slider-content first show-for-large">
                        <img src={this.state.content[currentFirst].img} alt="content-header" />
                        <h1>{this.state.content[currentFirst].title}</h1>
                        <p>{this.state.content[currentFirst].text}</p>
                    </div>
                    <div className="slider-content show-for-large">
                        <img src={this.state.content[currentSecond].img} alt="content-header" />
                        <h1>{this.state.content[currentSecond].title}</h1>
                        <p>{this.state.content[currentSecond].text}</p>
                    </div>
                    <div className="slider-content first hide-for-large">
                        <img src={this.state.content[currentSecond].img} alt="content-header" />
                        <h1>{this.state.content[currentSecond].title}</h1>
                        <p>{this.state.content[currentSecond].text}</p>
                    </div>
                    <div className="slider-content">
                        <img src={this.state.content[this.state.current].img} alt="content-header" />
                        <h1>{this.state.content[this.state.current].title}</h1>
                        <p>{this.state.content[this.state.current].text}</p>
                    </div>
                    <div className="slider-content last hide-for-large">
                        <img src={this.state.content[currentFourth].img} alt="content-header" />
                        <h1>{this.state.content[currentFourth].title}</h1>
                        <p>{this.state.content[currentFourth].text}</p>
                    </div>
                    <div className="slider-content show-for-large">
                        <img src={this.state.content[currentFourth].img} alt="content-header" />
                        <h1>{this.state.content[currentFourth].title}</h1>
                        <p>{this.state.content[currentFourth].text}</p>
                    </div>
                    <div className="slider-content last show-for-large">
                        <img src={this.state.content[currentLast].img} alt="content-header" />
                        <h1>{this.state.content[currentLast].title}</h1>
                        <p>{this.state.content[currentLast].text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Activities />, document.getElementById('activities'));