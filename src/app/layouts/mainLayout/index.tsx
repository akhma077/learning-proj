import { Layout } from 'antd';
import { AppHeader } from '../appHeader';
import { AppSider } from '../appSider';
import { AppContent } from '../appContent';

export function MainLayout() {
    const layoutStyle = {
        overflow: 'hidden',
    };

    return (
        <Layout style={layoutStyle}>
            <AppSider />

            <Layout>
                <AppHeader />

                <AppContent />
            </Layout>
        </Layout>
    );
}
