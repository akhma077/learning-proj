import { Modal } from '../../shared/ui/index';

export function MainPageContent({ open = true }: any) {
    if (!open) return null;
    return (
        <div>
            <Modal onClose={() => {}}>
                <div>isndifjdnsfd</div>
                <div>isndifjdnsfd</div> <div>isndifjdnsfd</div> <div>isndifjdnsfd</div>{' '}
                <div>isndifjdnsfd</div>
            </Modal>
        </div>
    );
}
