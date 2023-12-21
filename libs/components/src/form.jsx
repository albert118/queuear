import styles from './form.module.scss';
import Button from './Button/button';

export default function Form({ children, onSubmit, onComplete, formData }) {
    const _onCancel = () => {
        console.info('canceled');
        onComplete(null);
    };

    const _onSubmit = async () => {
        console.info('submitted');
        await onSubmit(formData);
        onComplete(formData);
    };

    return (
        <form className={styles['form']}>
            {children}
            <br />
            <div className={styles['form-actions']}>
                <Button primary={false} onClick={_onCancel}>
                    Cancel
                </Button>
                <Button type='submit' primary={true} onClick={_onSubmit}>
                    Save
                </Button>
            </div>
        </form>
    );
}
