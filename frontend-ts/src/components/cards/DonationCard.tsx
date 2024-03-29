import { useState } from 'react';

import { Input, QRCode, Space, Select, Tooltip, Avatar, message } from 'antd';

import { InfoCircleOutlined, UserOutlined, CopyOutlined } from '@ant-design/icons';

const options = [
    {
        value: '0x1c45e086ed143aef83c1209521a2ff5369f39abc',
        label: 'ETH',
        iconUrl: 'https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg',
    },
    {
        value: '0x2f35e086ed143aef83c1209521a2ff5369f39def',
        label: 'BTC',
        iconUrl: 'https://www.vectorlogo.zone/logos/bitcoin/bitcoin-icon.svg',
    },
];

const DonationCard = () => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const selectedOption = options.find(option => option.value === selectedValue);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(selectedValue);
        message.success('Copied to clipboard');
    };

    return (
        <div style={{ width: '50%' }}>
            <Space direction="vertical" align="center">
                <QRCode value={selectedValue || '-'} />
                <img
                    src={selectedOption?.iconUrl}
                    style={{ width: '100%', height: 'auto' }}
                    alt=""
                />
                <Space.Compact>
                    <Select
                        defaultValue={selectedValue}
                        options={options}
                        onChange={value => setSelectedValue(value)}
                    />
                    <Input
                        value={selectedValue}
                        prefix={
                            <Tooltip title="Extra information">
                                <Avatar size={21} style={{ backgroundColor: '#3e497a' }} icon={<UserOutlined />} />
                            </Tooltip>
                        }
                        suffix={
                            <>
                                <Tooltip title="Copy to Clipboard">
                                    <CopyOutlined onClick={handleCopyToClipboard} style={{ cursor: 'pointer' }} />
                                </Tooltip>
                                <Tooltip title="Extra information">
                                    <InfoCircleOutlined style={{ color: 'rgba(0, 0, 0, 0.45)' }} />
                                </Tooltip>
                            </>
                        }
                        style={{ width: '400px' }}
                    />
                </Space.Compact>
            </Space>
        </div>
    );
};

export default DonationCard;
