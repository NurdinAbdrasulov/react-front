import { Row } from 'antd';
import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import { getStatistics } from '../../redux/actions/statisticsActions';
import { signout } from '../../redux/actions/userActions';
import PieChart from './PieChart';

  const useStyles = createUseStyles((theme) => ({
    container: {
      height: '160vh',
    },
    row: {
      width: '100%',
      justifyContent: 'space-between',
      '@media (max-width: 1315px)': {
        justifyContent: 'space-around'
      }
    },
    statsBlockTitle: {
      ...theme.typography.blockTitle,
      color: '#001529'
    },
    rowBlock: {
      margin: '24px 12px 24px',
      padding: 16,
      height: 438,
      width: 477,
      backgroundColor: theme.color.lightWhite,
  }}));

  const converter = (value) => {
    var arr = [];
    if(value && value[0]) {
      arr = value.map((currentValue, index) => {
        return {
          id: index,
          label: currentValue.ageDiapason,
          value: currentValue.percent,
        }}
      );
    } else if(value && value.diabetic) {
      arr = [
        {
          "id": "Есть",
          "label": "Есть",
          "value": value.diabetic,
        },
        {
          "id": "Нет",
          "label": "Нет",
          "value": value.notDiabetic,
        }
      ];
    } else if(value && value.female) {
      arr = [
        {
          "id": "",
          "label": "Женщины",
          "value": value.female,
        },
        {
          "id": "",
          "label": "Мужчины",
          "value": value.male,
        }
      ];
    }
    return arr;
  }

function StatisticsComponent() {

  const allStatistics = useSelector((state) => state.allStatistics);
  const { errorStatistics, statistics } = allStatistics;
  console.log(allStatistics);

  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  useEffect(() => {
    if(errorStatistics && errorStatistics.indexOf("403") !== -1) {
      dispatch(signout());
    } else if(!errorStatistics || !statistics) {
      dispatch(getStatistics());
    }
  }, [dispatch, errorStatistics, statistics]);

    return (
        <Column
          horizontal='center'
          className={classes.container}>
            <Row className={classes.row}>
                <div className={classes.rowBlock}>
                  <span className={classes.statsBlockTitle}>Пол</span>
                  <PieChart data={converter(statistics && statistics[2].data)} />
                </div>
                <div className={classes.rowBlock}>
                  <span className={classes.statsBlockTitle}>Диабет</span>
                  <PieChart data={converter(statistics && statistics[1].data)} />
                </div>
            </Row>
            <div className={classes.rowBlock}>
              <span className={classes.statsBlockTitle}>Возраст</span>
              <PieChart data={converter(statistics && statistics[0].data)} />
            </div>
        </Column>
    );
}

export default StatisticsComponent;
