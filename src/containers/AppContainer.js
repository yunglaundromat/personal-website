import React, { Component } from 'react'
import Overview from '../components/Overview'
import Resume from '../components/Resume'
import Testimonials from '../components/Testimonials'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

class AppContainer extends Component {

  componentDidMount() {
    this.props.history.push(`/${this.props.activeItem}`)
  }

  render() {
    return (
      <Grid>
				<Grid.Row centered>
					<Switch>
						<Route path="/overview" render={(routeProps) => {
							return <AppContainer {...routeProps}
                />
						}} />
						<Route path="/resume" render={(routeProps) => {
							return <Resume {...routeProps}
								/>
						}} />
            <Route path="/testimonials" render={(routeProps) => {
							return <Testimonials {...routeProps}
								/>
						}} />
					</Switch>
				</Grid.Row>
			</Grid>
    )
  }

}

export default AppContainer;
