import React, { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { TextWeight } from '../../../shared/ui/TextWeight/TextWeight';
import cls from './StatusOrder.module.scss';

interface StatusOrderProps {
    className?: string;
    statusOrder?: string;
}

export const StatusOrder = (props: StatusOrderProps) => {

    const {
        statusOrder
    } = props;

    const [status, setStatus] = useState<string>('newOrder');

    const statusOrderVisible = () => {
        switch (statusOrder) {
            case 'new':
                setStatus('newOrder');
                return status
            case 'in_progress':
                setStatus('progressOrder');
                return status
            case 'completed':
                setStatus('completedOrder');
                return status
            default:
                return 'newOrder';
        }
    };

    return (
        <TextWeight className={classNames(cls.statusOrder, {}, [statusOrderVisible()])}>
            новая
        </TextWeight>
    );
};
