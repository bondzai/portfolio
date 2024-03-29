import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { IoMdPulse, IoMdSchool } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

import ScrollButton from "../components/buttons/ScrollButon";

import useScroll from "../hooks/useScroll";

import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";


const Experience = () => {
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

    const calculateAge = (birthdate: string) => {
        const today = new Date();
        const birthdateObj = new Date(birthdate);
        const years = today.getFullYear() - birthdateObj.getFullYear();
        const months = today.getMonth() - birthdateObj.getMonth();

        if (months < 0 || (months === 0 && today.getDate() < birthdateObj.getDate())) {
            return `${years - 1} year ${12 - birthdateObj.getMonth() + today.getMonth()} months`;
        } else {
            return `${years} years ${months} months`;
        }
    };

    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Feb 1994"
                    icon={<IoMdPulse />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Born in Ubon Rachatani, Thailand </h3>
                    <p> Age: {calculateAge("02/03/1994")}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="2009 - 2012 (3 years)"
                    icon={<IoMdSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Benchama Maharat Ubon Ratchatani </h3>
                    <p> High School Diploma: Sci-Math</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="2012 - 2016 (4 years)"
                    icon={<IoMdSchool />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> King Mongkut's Institute of Technology Ladkrabang </h3>
                    <p> Bachelor's Degree: Automation Engineering </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Jul 2016 - Jan 2022 (5 years 7 months)"
                    icon={<MdWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Synergetech Co., Ltd., Nonthaburi, Thailand </h3>
                    <p> Role: Automation System Engineer </p>
                    <p> Responsibilities: <br />
                        &emsp; - Designed, developed, debugged, deployed & delivered industrial automation projects (especially automated batch control system). <br />
                        &emsp; - PLC, SCADA MES & Database programming. <br />
                        &emsp; - Implement analog signals, digital devices, I/O server & other 3rd party integrations by any protocol of choices. <br />
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date="Jan 2022 - Nov 2022 (10 months)"
                    icon={<FaBookOpenReader />}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Self-learning: Software Development </h3>
                    <p> Q2: <br />
                        &emsp; - Traditional system programming practice. Laser focus on logics, data structures & algorithms. <br />
                        &emsp; - Built blockchain's data monitoring mobile application using Google cloud environment(GoogleSheet, AppSheet, AppsScript). <br />
                    </p>
                    <p> Q3: <br />
                        &emsp; - Start using Git & GitHub. <br />
                        &emsp; - Start learning web development libraries & frameworks.(JavaScript stack - React.js & Express.js). <br />
                    </p>
                    <p> Q4: <br />
                        &emsp; - Learn more about backend services (Python-Django, Go-Fiber), infrasturcture tools & software life cycle. <br />
                        &emsp; - Become a better backend developer. Pushing more open-source projects. Further down the road, keep learning. <br />
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-elemt--education"
                    date={`Nov 2022 - Present (${calculateAge("11/03/2022")})`}
                    icon={<MdWork />}
                    iconStyle={{ background: "royalblue", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title"> Swift Dynamics Co., Ltd., Bangkok, Thailand </h3>
                    <p> Role: Backend Developer </p>
                    <p> Responsibilities: <br />
                        &emsp; - Fully focus on design & develop many type of backend services. <br />
                        &emsp; - Co-work with peer engineers in coding & code reviews. <br />
                    </p>
                    <p> Challenges: <br />
                        &emsp; - Become a master backend engineer. <br />
                        &emsp; - Deep understanding about software architectural patterns (especially microservices event driven base architecture). <br />
                        &emsp; - Learn more about DevSecOps & cloud engines. <br />
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>
            <ScrollButton
                showScrollButton={showScrollButton}
                scrollToTop={scrollToTop}
                scrollToBottom={scrollToBottom}
            />
        </div>
    )
}

export default Experience;
