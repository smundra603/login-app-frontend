import * as React from 'react';
import { AppContainer, ContentContainer, ContentTitle } from './index.style';
import NavBar from './NavBar';
import AppHeader from './AppHeader';
import ContentView from './ContentView';
import Jobs from '../../Data/Jobs';


export class App extends React.Component {
  renderNavBar;
  render() {
    return (
      <AppContainer>
        <NavBar />
        <AppHeader />
        <ContentContainer>
          <ContentTitle>Your Jobs</ContentTitle>
          {Jobs.map(ContentView)}
        </ContentContainer>
      </AppContainer>
    );
  }
}
