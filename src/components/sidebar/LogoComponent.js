import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { IconLogo } from '../../assets/icons';
import SLUGS from '../../resources/slugs';
import { useHistory } from 'react-router-dom';

const useStyles = createUseStyles((theme) => ({
    container: {
        marginLeft: 16,
        marginRight: 32,
        cursor: 'pointer'
    }
}));

function LogoComponent(props) {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });

    function onLogoClick() {
        push(SLUGS.statistics);
    }

    return (
        <Row className={classes.container} onClick={onLogoClick} horizontal='flex-start' vertical='center'>
            <IconLogo fill={props.color} />
        </Row>
    );
}

export default LogoComponent;
