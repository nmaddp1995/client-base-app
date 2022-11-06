import React from 'react';
import { Progress } from 'antd';

const LazyLoadProgressCircle = () => {
    return (
        <Progress strokeLinecap="square" type="circle" showInfo={false} />
    );
};

export default LazyLoadProgressCircle;
