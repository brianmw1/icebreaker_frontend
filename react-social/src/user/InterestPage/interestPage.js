import React, { Component, useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Dropdown from './Dropdown';
import interestPage from './interestPage';
import './interestPage.css';
import Footer from '../../common/Footer';
import axios from 'axios';
import { FACEBOOK_AUTH_URL } from '../../constants';
import Profile from '../profile/Profile';
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';
import { withThemeCreator } from '@material-ui/styles';
import {
  FlatList,
  Platform,
  ScrollView,
  Slider,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native-web';
import { borderColor, style } from '@mui/system';
import { StyleSharp } from '@material-ui/icons';
//const { selected, setSelected } = useState('');

class interest extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log('done');
    console.log(this.props.currentUser.email);

    const dropmenu = [
      {
        value: 1,
        label: 'INTJ',
      },
      {
        value: 2,
        label: 'INTP',
      },
      {
        value: 3,
        label: 'ENTJ',
      },
      {
        value: 4,
        label: 'ENTP',
      },
      {
        value: 5,
        label: 'INFJ',
      },
      {
        value: 6,
        label: 'INFP',
      },
      {
        value: 7,
        label: 'ENFJ',
      },
      {
        value: 8,
        label: 'ENFP',
      },
      {
        value: 9,
        label: 'ISTJ',
      },
      {
        value: 10,
        label: 'ISFJ',
      },
      {
        value: 11,
        label: 'ESTJ',
      },
      {
        value: 12,
        label: 'ESFJ',
      },
      {
        value: 13,
        label: 'ISTP',
      },
      {
        value: 14,
        label: 'ISFP',
      },
      {
        value: 15,
        label: 'ESTP',
      },
      {
        value: 16,
        label: 'ESFP',
      },
    ];

    this.state = {
      count: 0,
      nextButton: 'Next Question',
      buttonStyle: { color: '#2098f3' },
      submitPage: false,
      email: props.currentUser.email,
      name: props.currentUser.name,
      personalityType: '',
      movie: false,
      videoGame: false,
      music: false,
      sport: false,
      gym: false,
      calisthenics: false,
      cycling: false,
      hiking: false,
      rockClimbing: false,
      weightLifting: false,
      yoga: false,
      horseRiding: false,
      dancing: false,
      polytheism: false,
      monotheism: false,
      atheism: false,
      animism: false,
      totemism: false,
      social: false,
      cognitive: false,
      physical: false,
      //family
      married: false,
      single: false,
      divorced: false,
      dating: false,
      widow: false,
      complicated: false,
      //education
      socialScience: false,
      science: false,
      engineering: false,
      fineArtsMusic: false,
    };
  }

  handleChange = (e) => {
    console.log(e.label);

    this.setState({ personalityType: e.label });
  };
  handleNextButtonClick = (e) => {
    if (this.state.count < 4) {
      const nextQuestion = this.state.count + 1;
      this.setState({ count: nextQuestion });
      this.setState({ buttonStyle: { color: '#2098f3' } });
    } else {
      this.setState({ nextButton: 'Submit!' });
      this.setState({ submitPage: true });
    }
  };
  onSubmit = (event) => {
    console.log(event.target.value);
    event.target.style.color = ' rgb(177, 114, 177)';
    this.setState({ buttonStyle: { color: '2098f3' } });
    let clickedOption = event.target.value;
    if (clickedOption === 'movie') {
      this.setState({ movie: true });
    }
    if (clickedOption === 'videoGame') {
      this.setState({ videoGame: true });
    }
    if (clickedOption === 'music') {
      this.setState({ music: true });
    }
    if (clickedOption === 'sports') {
      this.setState({ sport: true });
    }
    if (clickedOption === 'gym') {
      this.setState({ gym: true });
    }
    if (clickedOption === 'calisthenics') {
      this.setState({ calisthenics: true });
    }
    if (clickedOption === 'cycling') {
      this.setState({ cycling: true });
    }
    if (clickedOption === 'hiking') {
      this.setState({ hiking: true });
    }
    if (clickedOption === 'rockClimbing') {
      this.setState({ rockClimbing: true });
    }
    if (clickedOption === 'weightLifting') {
      this.setState({ weightLifting: true });
    }
    if (clickedOption === 'yoga') {
      this.setState({ yoga: true });
    }
    if (clickedOption === 'horseRiding') {
      this.setState({ horseRiding: true });
    }
    if (clickedOption === 'dancing') {
      this.setState({ dancing: true });
    }
    if (clickedOption === 'polytheism') {
      this.setState({ polytheism: true });
    }
    if (clickedOption === 'monotheism') {
      this.setState({ monotheism: true });
    }
    if (clickedOption === 'atheism') {
      this.setState({ atheism: true });
    }
    if (clickedOption === 'totemism') {
      this.setState({ totemism: true });
    }
    if (clickedOption === 'social') {
      this.setState({ social: true });
    }
    if (clickedOption === 'cognitive') {
      this.setState({ cognitive: true });
    }
    if (clickedOption === 'physical') {
      this.setState({ physical: true });
    }
    if (clickedOption === 'married') {
      this.setState({ married: false });
    }
    if (clickedOption === 'single') {
      this.setState({ single: true });
    }
    if (clickedOption === 'divorced') {
      this.setState({ divorced: true });
    }
    if (clickedOption === 'dating') {
      this.setState({ dating: true });
    }
    if (clickedOption === 'widow') {
      this.setState({ widow: true });
    }
    if (clickedOption === 'complicated') {
      this.setState({ complicated: true });
    }
    if (clickedOption === 'socialScience') {
      this.setState({ socialScience: true });
    }
    if (clickedOption === 'science') {
      this.setState({ science: true });
    }
    if (clickedOption === 'engineering') {
      this.setState({ engineering: true });
    }
    if (clickedOption === 'fineArtsMusic') {
      this.setState({ fineArtsMusic: true });
    }

    console.log(this.state);
    // const {vlaue} = this.state.vlaue;
    event.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault;
    console.log(this.state);
    fetch('http://localhost:8080/user/me/changeInterest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    }).then(() => {
      console.log('interest updated');
    });
  };

  render() {
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
      {
        questionText: '1/5 Which of the following activities do you enjoy?',
        answerOptions: [
          { answerText: 'Watching Movies', value: 'movie' },
          { answerText: 'Listening to Music ', value: 'music' },
          { answerText: 'Playing Video Games', value: 'videoGame' },
          { answerText: 'Doing sports', value: 'sports' },
        ],
      },
      {
        questionText: '2/5 What do you study?',
        answerOptions: [
          { answerText: 'Social Science and Humanity', value: 'socialScience' },
          { answerText: 'Science ', value: 'science' },
          { answerText: 'Engineering', value: 'engineering' },
          { answerText: 'Fine Arts and Music', value: 'fineArtsMusic' },
        ],
      },
      {
        questionText: '3/5 Which one describes your relationship status?',
        answerOptions: [
          { answerText: 'Married', value: 'married' },
          { answerText: 'Single ', value: 'single' },
          { answerText: 'Divorced', value: 'divorced' },
          { answerText: 'Dating', value: 'dating' },
          { answerText: 'Complicated ', value: 'complicated' },
          { answerText: 'Widow/Widower', value: 'widow' },
          { answerText: 'Prefer Not to Disclose', value: '' },
        ],
      },
      {
        questionText: '4/5 Which of the following would you do in spare time?',
        answerOptions: [
          { answerText: 'Meet Friends', value: 'social' },
          { answerText: 'Party', value: 'social' },
          { answerText: 'Attend a Concert', value: 'social' },
          { answerText: 'Volunteer', value: 'social' },
          { answerText: 'Reading ', value: 'cognitive' },
          { answerText: 'Playing Board Games', value: 'cognitive' },
          { answerText: 'Writing', value: 'cognitive' },
          { answerText: 'Playing Musical Instruments', value: 'cognitive' },
          { answerText: 'Watching Shows/Movies', value: 'cognitive' },
          { answerText: 'Jogging/Running', value: 'physical' },
          { answerText: 'Dance/Gymnastics', value: 'physical' },
          { answerText: 'Gardening', value: 'physical' },
          { answerText: 'Outdoor Activities', value: 'physical' },
        ],
      },
      {
        questionText: '5/5 What is your fitness type?',
        answerOptions: [
          { answerText: 'Gym', value: 'gym' },
          { answerText: 'Calisthenics', value: 'calisthenics' },
          { answerText: 'Cycling', value: 'cycling' },
          { answerText: 'Hiking', value: 'hiking' },
          { answerText: 'Rock Climbing/Bouldering ', value: 'rockClimbing' },
          { answerText: 'Weight Lifting', value: 'weightLifting' },
          { answerText: 'Yoga', value: 'yoga' },
          { answerText: 'Horse Riding', value: 'horseRiding' },
          { answerText: 'Dancing', value: 'dancing' },
        ],
      },
    ];
    const styles = StyleSheet.create({
      baseText: {
        color: '#2098f3',
        fontSize: 40,
        textShadowColor: 'white',
        textShadowRadius: 4,
      },

      titleText: {
        color: '#005da8',

        fontSize: 25,
        textShadowColor: 'white',
        textShadowRadius: 3,
      },
    });

    return (
      <div className="interest-page">
        <div
          style={
            {
              /*backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/1007714923/thumb/1.jpg)`,
            backgroundSize: '1000px',
            display: 'flow',*/
            }
          }
        >
          {this.state.submitPage ? (
            <div>
              <div>
                <h1>You can always update your interests Profile!</h1>
              </div>
              <div>
                <h2></h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 100,
                }}
              >
                {' '}
                <NavLink to="/profile">
                  {' '}
                  <button className="btn-style1" onClick={this.handleSubmit}>
                    Submit!
                  </button>
                </NavLink>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <h1>Build up profile to find friends with shared interests.</h1>
                {/*<ToggleSwitch />
          <p> show on my profile</p>*/}
              </div>
              <div className="down">
                <View>
                  <Text style={styles.titleText}>
                    Which one of the 16 personality types are you?
                  </Text>
                </View>{' '}
                <br />
                <Select
                  onChange={this.handleChange}
                  options={[
                    {
                      value: 1,
                      label: 'INTJ Architect',
                    },
                    {
                      value: 2,
                      label: 'INTP Logician',
                    },
                    {
                      value: 3,
                      label: 'ENTJ Commander',
                    },
                    {
                      value: 4,
                      label: 'ENTP Debater',
                    },
                    {
                      value: 5,
                      label: 'INFJ Advocate',
                    },
                    {
                      value: 6,
                      label: 'INFP Mediator ',
                    },
                    {
                      value: 7,
                      label: 'ENFJ Protagonist',
                    },
                    {
                      value: 8,
                      label: 'ENFP Campaigner',
                    },
                    {
                      value: 9,
                      label: 'ISTJ Logistician',
                    },
                    {
                      value: 10,
                      label: 'ISFJ Defender',
                    },
                    {
                      value: 11,
                      label: 'ESTJ Executive',
                    },
                    {
                      value: 12,
                      label: 'ESFJ Consul',
                    },
                    {
                      value: 13,
                      label: 'ISTP Virtuoso',
                    },
                    {
                      value: 14,
                      label: 'ISFP Adventurer',
                    },
                    {
                      value: 15,
                      label: 'ESTP Entrepreneur',
                    },
                    {
                      value: 16,
                      label: 'ESFP Entertainer',
                    },
                  ]}
                />
                <br />
              </div>
              <div className="questions-page">
                <div className="question-option">
                  <div className="question-text">
                    <h1>{questions[this.state.count].questionText}</h1>
                  </div>
                  <div className="answer-text">
                    {questions[this.state.count].answerOptions.map(
                      (answerOption) => (
                        <button
                          style={this.state.buttonStyle}
                          className="btn-style1"
                          value={answerOption.value}
                          onClick={this.onSubmit}
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                  }}
                  className="btn-style2"
                  onClick={this.handleNextButtonClick}
                >
                  Next Question
                </button>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default interest;
