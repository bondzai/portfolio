import { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import RoadmapContainer from '../components/containers/RoadmapContainer';
import { getRoadmapList } from '../apis/rest/endpoints';
import '../styles/Roadmap.css';
import { RoadmapTaskType } from "../types/";

const years = [
    { label: '2022', key: '2022' },
    { label: '2023', key: '2023' },
];

const Roadmap = () => {
    const [roadmapList, setRoadmapList] = useState<RoadmapTaskType[]>([]);
    const [filteredRoadmapList, setFilteredRoadmapList] = useState<RoadmapTaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedYear, setSelectedYear] = useState<string>('2023');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: RoadmapTaskType[] = await getRoadmapList();
                setRoadmapList(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredRoadmapList(
            roadmapList.filter(data => String(data.year) === selectedYear)
        );
    }, [roadmapList, selectedYear]);

    return (
        <div className='roadmap-background'>
            <div className='roadmap-content'>
                <Card bordered={false}>
                    <Tabs
                        activeKey={selectedYear}
                        items={years}
                        onChange={(year) => setSelectedYear(year)}
                    />
                    <RoadmapContainer loading={loading} data={filteredRoadmapList} />
                </Card>
            </div>
        </div>
    );
};

export default Roadmap;
