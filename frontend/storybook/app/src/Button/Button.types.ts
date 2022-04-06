/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
export type ButtonProps = {
    /** Button children element */
    children: React.ReactNode;
    /** Show loading spinner and disable button */
    isLoading?: boolean;
    /** Button color variant */
    variants?: 'primary' | 'secondary';
    /** Disable the button and add not-allowed cursor */
    disabled?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;
