import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './PageNotFound.module.scss';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({className}: PageNotFoundProps) => {
    return (
        <div className={classNames(cls.PageNotFound, {}, [className])}>
            Страница не найдена
        </div>
    );
};
