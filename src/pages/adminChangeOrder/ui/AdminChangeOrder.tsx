import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { DateOrder } from '../../../widgets/DateOrder';
import { NumberOrder } from '../../../widgets/NumberOrder';
import { StatusOrder } from '../../../widgets/StatusOrder';
import cls from './AdminChangeOrder.module.scss';

interface AdminChangeOrderProps {
    className?: string;
}


export const AdminChangeOrder = ({className}: AdminChangeOrderProps) => {
    return (
        <div className={classNames(cls.AdminChangeOrder, {}, [className])}>
            <DateOrder/>
            <NumberOrder/>
            <StatusOrder />
        </div>
    );
};
