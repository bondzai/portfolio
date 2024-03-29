import React, { useState, useEffect } from "react";
import { Card, List, Statistic } from "antd";
import { RiFocus3Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa"
import { MdTipsAndUpdates, MdOutlineTask } from "react-icons/md";
import CountUp from "react-countup";
import RoadmapCard from "./RoadmapCard";
import SpinComponent from "./SpinComponent";
import { columns } from "../apis/rest/Roadmap";
import "../styles/Roadmap.css";

const formatter = (value) => <CountUp end={value} separator="," />;

const icons = {
    TipsAndUpdatesIcon: <MdTipsAndUpdates />,
    ListAltIcon: <FaListAlt />,
    RiFocus3Fill: <RiFocus3Fill />,
    TaskAltIcon: <MdOutlineTask />,
};

const RoadmapOneYear = ({ ...prop }) => {
    const [roadmapList, setRoadmapList] = useState(prop.data);
    const [loading, setLoading] = useState(prop.loading);

    useEffect(() => {
        setRoadmapList(prop.data);
        setLoading(prop.loading);
    }, [prop.data]);

    const getColumnIndex = (status) => {
        const statusToColumnIndex = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
        };
        return statusToColumnIndex[status] || 0;
    };

    const getFilteredRoadmapList = (statusIndex) => {
        return roadmapList.filter((data) => getColumnIndex(data.status) === statusIndex);
    };

    return (
        <div>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={columns}
                renderItem={(item, index) => (
                    <List.Item key={item.icon}>
                        <Card
                            title={
                                <div className="card-title">
                                    {icons[item.icon]}
                                    <span className="title-text">{item.title}</span>
                                </div>
                            }
                            extra={
                                <Statistic
                                    title="Total"
                                    value={getFilteredRoadmapList(index).length}
                                    valueStyle={{ fontSize: "15px" }}
                                    suffix="tasks"
                                    formatter={formatter}
                                />
                            }
                            style={{
                                width: 360,
                            }}
                        >
                            {loading ? <SpinComponent customHeight="550px"/> : <RoadmapCard data={getFilteredRoadmapList(index)} />}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default RoadmapOneYear;
