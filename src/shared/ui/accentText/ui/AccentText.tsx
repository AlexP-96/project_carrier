import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { TextWeight } from '../../TextWeight/TextWeight';
import cls from './AccentText.module.scss';

interface AccentTextProps {
    className?: string;
}

export const AccentText = ({className}: AccentTextProps) => {
    return (
        <TextWeight className={cls.accentText}>
            новая заявка
        </TextWeight>
    );
};
