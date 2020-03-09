import React from 'react';
import { useHistory } from 'react-router-dom';
//  Styled Components
import { DashboardContainer } from './styles';

//  Components
import Button from 'components/Button';

const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => history.push('./signin');

  return (
    <DashboardContainer>
      DashboardContainer
      <Button name='Sair' onClick={handleLogout} />
    </DashboardContainer>
  );
};

export default Dashboard;