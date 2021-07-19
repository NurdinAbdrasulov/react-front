import React from 'react';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import {
    IconActivity,
    IconProducts,
    IconStatistics,
    IconUsers
} from '../../assets/icons';
import { convertSlugToUrl } from '../../resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

function SidebarComponent() {
    const { push } = useHistory();
    const isMobile = window.innerWidth <= 1080;

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 40, paddingBottom: 50 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.statistics}
                title='Статистика'
                icon={IconStatistics}
                onClick={() => onClick(SLUGS.statistics)}
            />
            <MenuItem
                id={SLUGS.users}
                title='Пользователи'
                icon={IconUsers}
                onClick={() => onClick(SLUGS.users)}
            />
            <MenuItem
                id={SLUGS.products}
                items={[SLUGS.editProduct, SLUGS.createProduct]}
                title='Продукты'
                icon={IconProducts}
                onClick={() => onClick(SLUGS.products)}
            />
            <MenuItem
                id={SLUGS.activity}
                title='Активности'
                icon={IconActivity}
                onClick={() => onClick(SLUGS.activity)}
            />
        </Menu>
    );
}

export default SidebarComponent;
