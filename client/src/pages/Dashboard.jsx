import { useState, useContext } from "react";
import { useEffect } from "react";
import gamerImg from '../Images/gamer.jpeg'
import { getUsers } from "../api";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { Link } from "react-router-dom";

const userPreferredGames = ["Valorant", "PUBG", "COD", "Fortnite", "Apex Legends"];

const styles = {
  container: {
    display: 'flex',
    overflow: 'scroll',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  leftColumn: {
    width: '60%',
    marginRight: '5px',
  },
  card: {
    margin: '5px',
    width: '270px',
    height: '170px',
    backgroundColor: '#141415',
    color: 'white',
    borderRadius: '20px',
    padding: '16px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
    position: 'relative',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    margin: '32px 0'
  },
  actionButton: {
    backgroundColor: '#4F46E5',
    color: 'white',
    padding: '10px',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  rightColumn: {
    width: '30%',
    marginLeft: '5px',
  },
  gamerItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '12px',
    marginBottom: '8px',
  },
  gamerImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
  },
  followButton: {
    backgroundColor: '#4F46E5',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    cursor: 'pointer',
  },
};


export const Dashboard = (props) => {
  const { currentUser } = useSelector(state => state.user);
  console.log(currentUser);

  const containerStyle = {
    padding: '20px 30px',
    overflow: 'scroll',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#fff',
    justifyContent: 'left',
    fontWeight: 'bold',
    display: 'flex',
  };

  const [games, setGames] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/getFriends/getUserGames', {
          userId: currentUser._id,
        });
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getGames();
  })

  return (
    <div style={containerStyle}>
        <h1 style={titleStyle}>
          Dashboard
        </h1>
        <div style={styles.container}>
          <div style={styles.leftColumn}>
            <div style={styles.cardContainer}>
              {userPreferredGames.map((game, key) => (
                <div key={key} style={styles.card}>
                  <div style={{ marginBottom: '12px' }}>
                    <h2 style={styles.cardTitle}>{game}</h2>
                    {/* <div>Top Gamers</div>
                    <div>Potential Friends</div> */}
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                    <p className="font-bold text-2xl mb-0 text-black">
                      {/* Your count component here */}
                    </p>
                    <p className="font-bold text-2xl bg-gradient-to-t mt-[-20px] w-4 from-gray-300 to-transparent transform scale-y-[-1] opacity-20 text-black">
                      {/* Your count component here */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link to={`/playgame`}>
            <div style={styles.actionButton}>Play Game</div>
            </Link>
          </div>

          <div style={styles.rightColumn}>
            <span className="flex font-bold justify-items-start text-xl mb-5 mt-8">Connect with Gamers</span>
            <div style={styles.gamerItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={gamerImg} alt="gamer" style={styles.gamerImage} />
                <div>@tanyaa</div>
              </div>
              <div>Racing</div>
              <div style={styles.followButton}>Follow</div>
            </div>
            <div style={styles.gamerItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={gamerImg} alt="gamer" style={styles.gamerImage} />
                <div>@tanyaa</div>
              </div>
              <div>Racing</div>
              <div style={styles.followButton}>Follow</div>
            </div>
            <div style={styles.gamerItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={gamerImg} alt="gamer" style={styles.gamerImage} />
                <div>@tanyaa</div>
              </div>
              <div>Racing</div>
              <div style={styles.followButton}>Follow</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;