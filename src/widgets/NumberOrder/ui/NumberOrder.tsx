import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { TextWeight } from '../../../shared/ui/TextWeight/TextWeight';
import cls from './NumberOrder.module.scss';

interface NumberOrderProps {
    className?: string;
}

export const NumberOrder = (props: NumberOrderProps) => {

    const obj = 'номер заявки';

    const {
        className,
    } = props;

    return (
       <TextWeight>
           номер заявки
       </TextWeight>
    );
};
