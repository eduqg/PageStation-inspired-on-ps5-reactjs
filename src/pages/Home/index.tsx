/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import {
  FiHome,
  FiUser,
  FiBell,
  FiMic,
  FiMusic,
  FiPower,
  FiUsers,
  FiVolume2,
} from 'react-icons/fi';
import { IoLogoGameControllerB, IoIosSwitch } from 'react-icons/io';

import dice from '../../images/Home/dice.jpg';
import diceIcon from '../../images/Home/diceicon.jpg';
import chess from '../../images/Home/chess.jpg';
import chessIcon from '../../images/Home/chessicon.jpg';
import target from '../../images/Home/target.jpg';
import targetIcon from '../../images/Home/targeticon.jpg';

const Home: React.FC = () => {
  const history = useHistory();
  const [background, setBackground] = useState<string>('background-chess');
  const [activeType, setActiveType] = useState<'videogame' | 'option'>(
    'videogame',
  );
  const [activePosition, setActivePosition] = useState<number>(0);

  const handleNavigateToStart = useCallback(() => {
    history.push('/');
  }, [history]);

  const handleNavigateToUsers = useCallback(() => {
    history.push('/users');
  }, [history]);

  const handleNavigateToShutdown = useCallback(() => {
    history.push('/shutdown');
  }, [history]);

  const games = useMemo(() => {
    return [
      {
        name: 'Official news',
        descrition: '4 stories from your games',
        icon: chessIcon,
        image: chess,
        progress: undefined,
        label: 'chess',
      },
      {
        name: 'New screenshot',
        descrition: 'Recently created',
        icon: targetIcon,
        image: target,
        progress: undefined,
        label: 'target',
      },
      {
        name: 'The Summit',
        descrition: 'Adventure',
        icon: diceIcon,
        image: dice,
        progress: 60,
        label: 'dice',
      },
      {
        name: 'Big big planet',
        descrition: 'Level',
        icon: target,
        image: targetIcon,
        progress: 33,
        label: 'target',
      },
      {
        name: 'Big big 2',
        descrition: 'Level',
        icon: chess,
        image: chessIcon,
        progress: 33,
        label: 'chess',
      },
      {
        name: 'Unearted',
        descrition: 'Level',
        icon: target,
        image: targetIcon,
        progress: 33,
        label: 'target',
      },
      {
        name: 'Boa Guerra',
        descrition: 'Level',
        icon: chess,
        image: chessIcon,
        progress: 33,
        label: 'chess',
      },
    ];
  }, []);

  const options = useMemo(() => {
    return [
      {
        name: 'Home',
        icon: <FiHome />,
        navigation: handleNavigateToStart,
      },
      {
        name: 'Switcher',
        icon: <IoIosSwitch />,
        navigation: undefined,
      },
      {
        name: 'Notification',
        icon: <FiBell />,
        navigation: undefined,
      },
      {
        name: 'Game base',
        icon: <FiUsers />,
        navigation: handleNavigateToUsers,
      },
      {
        name: 'Music',
        icon: <FiMusic />,
        navigation: undefined,
      },
      {
        name: 'Sound',
        icon: <FiVolume2 />,
        navigation: undefined,
      },
      {
        name: 'Mic',
        icon: <FiMic />,
        navigation: undefined,
      },
      {
        name: 'Accessories',
        icon: <IoLogoGameControllerB />,
        navigation: undefined,
      },
      {
        name: 'Player 1',
        icon: <FiUser />,
        navigation: handleNavigateToUsers,
      },
      {
        name: 'Power',
        icon: <FiPower />,
        navigation: handleNavigateToShutdown,
      },
    ];
  }, [handleNavigateToShutdown, handleNavigateToStart, handleNavigateToUsers]);

  const handleSetActive = useCallback(
    (type, position) => {
      setBackground(`background-${games[position].label}`);
      setActiveType(type);
      setActivePosition(position);
    },
    [games],
  );

  return (
    <div className="wrapper-home">
      <div className="animationContainerHome">
        <div className="container-home">
          <div className="content-home">
            <div className={`games-list ${background}`}>
              <div className="selected-game-shadow" />

              {games.map((game, index) => (
                <button
                  type="button"
                  className={`game-card game-${
                    activePosition === index ? 'active' : 'inactive'
                  }`}
                  onClick={() => handleSetActive('card', index)}
                  key={`${game.name}-${activeType}-${activePosition}`}
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="background-game"
                  />

                  <img src={game.icon} className="game-icon" alt="Game icon" />

                  {game.progress && (
                    <div className="game-progress">
                      <span>{String(game.progress)}%</span>
                      <div>In Progress</div>
                    </div>
                  )}
                  <div className="game-info">
                    <div className="game-description">{game.descrition}</div>

                    <div className="game-name">{game.name}</div>
                  </div>
                </button>
              ))}
              <div className="game-card" />
            </div>

            <div className="options-list">
              {options.map(option => (
                <button
                  key={option.name}
                  type="button"
                  className="option-card"
                  onClick={option.navigation}
                >
                  {option.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
