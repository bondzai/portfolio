import GitHubCalendar from "react-github-calendar";

import "../../styles/Github.css";

const GithubStatCard = () => {

    return (
        <div className="github-calendar-background">
            <div className="github-calendar-container">
                <div className='github-calendar-title-center'>
                    <h3>Github Calendar</h3>
                </div>
                <div className="github-calendar">
                    <GitHubCalendar
                        username="introbond"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        theme={{
                            level0: '#2d333b',
                            level1: '#0e4429',
                            level2: '#006d32',
                            level3: '#26a641',
                            level4: '#39d353'
                        }}
                        hideColorLegend
                        showWeekdayLabels
                    />
                </div>
            </div>
        </div>
    );
}

export default GithubStatCard;
