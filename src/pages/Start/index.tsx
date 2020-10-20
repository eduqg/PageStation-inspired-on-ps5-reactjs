import React, { useCallback, useEffect } from 'react';
import { BiSmile } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';
import particlesOptions from '../../particles.json';

import './styles.css';

const Start: React.FC = () => {
  const history = useHistory();

  const handleNavigateUsers = useCallback(() => {
    history.push('users');
  }, [history]);

  const handleUserKeyPress = useCallback(
    event => {
      const { keyCode } = event;

      if (keyCode === 32 || keyCode === 13) {
        history.push('users');
      }
    },
    [history],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="container">
      <Particles options={particlesOptions as ISourceOptions} />
      <div className="animationContainerStart">
        <div className="content">
          <h1 className="title">Press the Smile button on your controller.</h1>

          <button type="button" className="start" onClick={handleNavigateUsers}>
            <div className="circle1" />
            <div className="circle2" />
            <div className="icon">
              <BiSmile />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
