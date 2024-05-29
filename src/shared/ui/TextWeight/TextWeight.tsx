import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './TextWeight.module.scss';

interface TextWeightProps extends React.PropsWithChildren {
    className?: string;
}

export const TextWeight = (props: TextWeightProps) => {

    const {
        className,
        children,
    } = props;

    return (
        <div className={classNames(cls.textWeight, {}, [className])}>
            {children}
        </div>
    );
};
