import { TextWeight } from 'shared/ui/TextWeight/TextWeight';

interface DateOrderProps {
    className?: string;
}

export const DateOrder = ({ className }: DateOrderProps) => {
    return (
        <TextWeight>
            дата заявки
        </TextWeight>
    );
};
